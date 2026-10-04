/* Benzo — small progressive-enhancement script. The site is fully readable without it. */
(function () {
  'use strict';
  var d = document;
  var $ = function (s, c) { return (c || d).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || d).querySelectorAll(s)); };

  /* Year */
  $$('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* Header shadow on scroll */
  var header = $('.header');
  var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 8); };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* Mobile nav */
  var burger = $('.burger');
  var closeNav = function () { d.body.classList.remove('nav-open'); burger.setAttribute('aria-expanded', 'false'); burger.setAttribute('aria-label', 'Open menu'); };
  burger.addEventListener('click', function () {
    var open = d.body.classList.toggle('nav-open');
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  $$('#site-nav a').forEach(function (a) { a.addEventListener('click', closeNav); });

  /* Dropdowns */
  var toggles = $$('.nav__toggle');
  var closeMenus = function (except) {
    toggles.forEach(function (t) {
      if (t === except) return;
      t.setAttribute('aria-expanded', 'false');
      t.parentNode.classList.remove('is-open');
    });
  };
  toggles.forEach(function (t) {
    t.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = t.getAttribute('aria-expanded') !== 'true';
      closeMenus(t);
      t.setAttribute('aria-expanded', String(open));
      t.parentNode.classList.toggle('is-open', open);
    });
  });
  d.addEventListener('click', function () { closeMenus(); });
  d.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { closeMenus(); closeNav(); }
  });

  /* Scroll reveal */
  var items = $$('.reveal');
  if ('IntersectionObserver' in window && items.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* Collapsible long lists (collapsed on small screens only, via CSS) */
  $$('[data-collapsible]').forEach(function (list) {
    var total = list.children.length;
    if (total <= 6) return;
    list.classList.add('is-collapsed');
    var b = d.createElement('button');
    b.type = 'button'; b.className = 'collapse-toggle'; b.setAttribute('aria-expanded', 'false');
    b.textContent = 'Show all ' + total;
    b.addEventListener('click', function () {
      var open = list.classList.toggle('is-collapsed') === false;
      b.setAttribute('aria-expanded', String(open));
      b.textContent = open ? 'Show less' : 'Show all ' + total;
    });
    list.parentNode.insertBefore(b, list.nextSibling);
  });

  /* Hide the fixed contact bar while the on-screen keyboard is likely open */
  d.addEventListener('focusin', function (e) { if (/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) d.body.classList.add('kbd'); });
  d.addEventListener('focusout', function () { d.body.classList.remove('kbd'); });

  /* Insights filter */
  var chips = $$('.filters .chip');
  if (chips.length) {
    chips.forEach(function (c) {
      c.addEventListener('click', function () {
        chips.forEach(function (x) { x.classList.toggle('is-active', x === c); });
        var f = c.getAttribute('data-filter');
        $$('.articles .article-card').forEach(function (a) {
          a.hidden = f !== 'all' && a.getAttribute('data-cat') !== f;
        });
      });
    });
  }

  /* Prefill forms from the query string, e.g. /contact/?service=SEO&message=... */
  var params = new URLSearchParams(window.location.search);
  $$('form[data-form="enquiry"]').forEach(function (form) {
    var svc = params.get('service');
    if (svc && form.elements.service) {
      Array.prototype.forEach.call(form.elements.service.options, function (o) { if (o.value === svc || o.text === svc) form.elements.service.value = o.value; });
    }
    var msg = params.get('message');
    var plan = params.get('plan');
    if (form.elements.message && !form.elements.message.value) {
      if (msg) form.elements.message.value = msg + ' ';
      else if (plan) form.elements.message.value = 'I would like pricing for the ' + plan + ' plan. ';
      else if (params.get('topic') === 'consultation') form.elements.message.value = 'I would like a free consultation about: ';
    }
  });

  /* Forms */
  var labels = { name: 'Name', company: 'Business', phone: 'Phone', email: 'Email', service: 'Service', budget: 'Budget', message: 'Details', contact_method: 'Preferred contact' };

  function clearErrors(form) {
    $$('.field.is-invalid', form).forEach(function (f) { f.classList.remove('is-invalid'); var e = $('.field__err', f); if (e) e.remove(); });
  }
  function flag(field, text) {
    var wrap = field.closest('.field');
    wrap.classList.add('is-invalid');
    field.setAttribute('aria-invalid', 'true');
    var e = d.createElement('span'); e.className = 'field__err'; e.textContent = text; wrap.appendChild(e);
  }
  function validate(form) {
    clearErrors(form);
    var first = null;
    $$('input[required], select[required], textarea[required]', form).forEach(function (el) {
      el.removeAttribute('aria-invalid');
      var v = (el.value || '').trim();
      var msg = '';
      if (!v) msg = 'This field is required.';
      else if (el.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) msg = 'Please enter a valid email address.';
      else if (el.type === 'tel' && v.replace(/\D/g, '').length < 7) msg = 'Please enter a valid phone number.';
      if (msg) { flag(el, msg); first = first || el; }
    });
    if (first) first.focus();
    return !first;
  }
  function summary(data, kind) {
    var lines = ['New ' + (kind === 'quick' ? 'quick enquiry' : 'project enquiry') + ' from the Benzo website', ''];
    Object.keys(data).forEach(function (k) { if (data[k] && labels[k]) lines.push(labels[k] + ': ' + data[k]); });
    return lines.join('\n');
  }
  function show(form, cls, html) {
    var s = $('.form__status', form);
    s.className = 'form__status ' + cls; s.innerHTML = html; s.hidden = false;
    s.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  $$('form[data-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var kind = form.getAttribute('data-form');
      if (form.elements.website && form.elements.website.value) return; // honeypot
      if (!validate(form)) return;
      var data = {};
      Array.prototype.forEach.call(form.elements, function (el) {
        if (!el.name || el.name === 'website') return;
        if (el.type === 'radio' && !el.checked) return;
        data[el.name] = (el.value || '').trim();
      });
      data.page = window.location.pathname;
      var endpoint = form.getAttribute('data-endpoint');
      var btn = $('button[type="submit"]', form);
      var text = summary(data, kind);
      var wa = 'https://wa.me/' + form.getAttribute('data-wa') + '?text=' + encodeURIComponent(text);
      var mail = 'mailto:' + form.getAttribute('data-email') + '?subject=' + encodeURIComponent('Project enquiry from ' + (data.name || 'website')) + '&body=' + encodeURIComponent(text);

      if (endpoint) {
        var label = btn.textContent;
        btn.disabled = true; btn.textContent = 'Sending…';
        // Google Apps Script web apps cannot answer cross-site JSON requests, so post plain text and treat a sent request as success.
        var gas = endpoint.indexOf('script.google.com') !== -1;
        fetch(endpoint, gas ? { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(data) } : { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) })
          .then(function (r) { if (!gas && !r.ok) throw new Error('bad status'); form.reset(); show(form, 'form__status--ok', '<strong>Thank you — your enquiry has been sent.</strong>We will get back to you shortly. If it is urgent, message us on WhatsApp.'); })
          .catch(function () { show(form, 'form__status--err', '<strong>We could not send that just now.</strong>Please send it another way — nothing you typed has been lost.<div class="btn-row"><a class="btn btn--primary" href="' + wa + '" target="_blank" rel="noopener">Send on WhatsApp</a><a class="btn btn--secondary" href="' + mail + '">Send by email</a></div>'); })
          .then(function () { btn.disabled = false; btn.textContent = label; });
      } else {
        show(form, 'form__status--ok', '<strong>Your enquiry is ready to send.</strong>Choose how you would like to send it. Your details are pre-filled.<div class="btn-row"><a class="btn btn--primary" href="' + wa + '" target="_blank" rel="noopener">Send on WhatsApp</a><a class="btn btn--secondary" href="' + mail + '">Send by email</a></div>');
      }
    });
  });
})();
