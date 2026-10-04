import { site } from './config.mjs';
import { icon } from './icons.mjs';
import { services, groups } from './content/services.mjs';
import { industries } from './content/industries.mjs';
import { articles } from './content/insights.mjs';

export const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const abs = (p) => site.url + p;
const waLink = (text = '') => `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
const telHref = () => `tel:+${site.phone.replace(/\D/g, '')}`;

/* ---------- brand ---------- */
export const logoImg = (light = true) => `<img class="logo__img" src="/assets/img/${light ? 'logo-light' : 'logo'}.png" alt="Benzo" width="134" height="38">`;
export const logo = (href = '/') => `<a class="logo" href="${href}" aria-label="Benzo — home">${logoImg()}</a>`;

/* ---------- navigation ---------- */
const svc = (slug) => services.find((s) => s.slug === slug);
const menuDesc = {
  'web-development': 'Business, school, clinic and e-commerce sites',
  'web-applications': 'Dashboards, portals and business systems',
  'mobile-apps': 'Customer, staff and booking apps',
  'deployment-hosting': 'Go live with domain, SSL and hosting',
  'maintenance': 'Care plans for updates and support',
  'website-fixing': 'Broken, slow or half-finished sites and apps',
  'website-redesign': 'Modernise an outdated website',
  'business-automation': 'Follow-ups, reminders and reports',
  'ai-solutions': 'Practical assistants and document tools',
  'seo': 'Technical and on-page foundations',
  'local-business-seo': 'Be found by nearby customers',
  'performance-optimization': 'Speed up slow pages and apps',
  'security-improvements': 'Reviews, hardening and backups'
};
const menuLink = (slug) => {
  const s = svc(slug);
  return `<a href="/services/${slug}/">${icon(s.icon)}<span><strong>${esc(s.name)}</strong><small>${esc(menuDesc[slug])}</small></span></a>`;
};
const servicesMenu = ['web-development', 'web-applications', 'mobile-apps', 'deployment-hosting', 'maintenance'];
const solutionsMenu = ['website-fixing', 'website-redesign', 'business-automation', 'ai-solutions', 'seo', 'local-business-seo', 'performance-optimization', 'security-improvements'];

const navItems = [
  { label: 'Services', href: '/services/', menu: servicesMenu, all: 'All services' },
  { label: 'Solutions', href: '/services/', menu: solutionsMenu },
  { label: 'Industries', href: '/industries/' },
  { label: 'Work', href: '/work/' },
  { label: 'About', href: '/about/' },
  { label: 'Insights', href: '/insights/' },
  { label: 'Contact', href: '/contact/' }
];

const isCurrent = (item, path) => {
  if (item.menu) return item.menu.some((s) => path.startsWith(`/services/${s}/`));
  return path === item.href || path.startsWith(item.href);
};

function header(path) {
  const items = navItems.map((it, i) => {
    const cur = isCurrent(it, path);
    if (!it.menu) return `<li><a class="nav__link" href="${it.href}"${cur ? ' aria-current="page"' : ''}>${it.label}</a></li>`;
    return `<li class="has-menu">
      <button class="nav__link nav__toggle" type="button" aria-expanded="false" aria-controls="menu-${i}"${cur ? ' data-current="true"' : ''}>${it.label}${icon('chevron', 'nav__chev')}</button>
      <div class="menu" id="menu-${i}">
        <div class="menu__grid">${it.menu.map(menuLink).join('')}</div>
        ${it.all ? `<a class="menu__all" href="${it.href}">${it.all} ${icon('arrow')}</a>` : ''}
      </div>
    </li>`;
  }).join('');
  return `<a class="skip" href="#main">Skip to content</a>
<div class="topbar"><div class="container topbar__inner"><span>${icon('clock')}${esc(site.hours)}</span><span class="topbar__links"><a href="${telHref()}">${icon('phone')}${esc(site.phone)}</a><a href="mailto:${esc(site.email)}">${icon('mail')}${esc(site.email)}</a></span></div></div>
<header class="header" id="top">
  <div class="container header__inner">
    ${logo()}
    <nav class="nav" id="site-nav" aria-label="Main">
      <ul class="nav__list">${items}</ul>
      <a class="btn btn--primary nav__cta" href="/contact/">Start a Project</a>
      <div class="nav__contact"><a href="${telHref()}">${icon('phone')}Call ${esc(site.phone)}</a><a href="${waLink('Hello Benzo, I would like to discuss a project.')}" target="_blank" rel="noopener">${icon('whatsapp')}WhatsApp us</a></div>
    </nav>
    <a class="header__call" href="${telHref()}" aria-label="Call Benzo">${icon('phone')}</a>
    <button class="burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="site-nav">${icon('menu', 'burger__open')}${icon('close', 'burger__close')}</button>
  </div>
</header>`;
}

function footer() {
  const socials = site.social.filter((s) => s.url).map((s) => `<a href="${esc(s.url)}" rel="noopener noreferrer me" target="_blank" aria-label="Benzo on ${esc(s.name)}">${icon(s.icon)}</a>`).join('');
  const col = (title, links) => `<div class="footer__col"><h2 class="footer__h">${title}</h2><ul>${links.map(([t, h]) => `<li><a href="${h}">${esc(t)}</a></li>`).join('')}</ul></div>`;
  return `<footer class="footer">
  <div class="container">
    <div class="footer__top">
      <div class="footer__brand">
        <a class="logo logo--light" href="/" aria-label="Benzo — home">${logoImg()}</a>
        <p>Benzo builds digital products, fixes technical problems, improves existing systems and helps businesses move from ideas to reliable working solutions.</p>
        <div class="footer__social">${socials}</div>
      </div>
      ${col('Services', [['Website Development', '/services/web-development/'], ['Web Applications', '/services/web-applications/'], ['Mobile Apps', '/services/mobile-apps/'], ['Website & App Fixing', '/services/website-fixing/'], ['Business Automation', '/services/business-automation/'], ['SEO Services', '/services/seo/'], ['Maintenance', '/services/maintenance/']])}
      ${col('Industries', [['Schools', '/industries/#schools'], ['Clinics', '/industries/#clinics'], ['Real Estate', '/industries/#real-estate'], ['Retail & E-commerce', '/industries/#retail'], ['Startups', '/industries/#startups'], ['All industries', '/industries/']])}
      ${col('Company', [['About Benzo', '/about/'], ['Our Work', '/work/'], ['How We Work', '/#process'], ['Contact', '/contact/']])}
      ${col('Resources', [['Insights', '/insights/'], ['Chennai', '/website-development-chennai/'], ['Tamil Nadu', '/website-development-tamil-nadu/'], ['FAQ', '/#faq']])}
      <div class="footer__col footer__contact">
        <h2 class="footer__h">Contact</h2>
        <ul>
          <li><a href="mailto:${esc(site.email)}">${icon('mail')}${esc(site.email)}</a></li>
          <li><a href="${telHref()}">${icon('phone')}${esc(site.phone)}</a></li>
          <li><a href="${waLink('Hello Benzo, I would like to discuss a project.')}" rel="noopener" target="_blank">${icon('whatsapp')}WhatsApp us</a></li>
          <li><span>${icon('clock')}${esc(site.hours)}</span></li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <p>© <span data-year>${new Date().getFullYear()}</span> Benzo. All rights reserved.</p>
      <ul><li><a href="/privacy-policy/">Privacy Policy</a></li><li><a href="/terms-of-service/">Terms of Service</a></li></ul>
    </div>
  </div>
</footer>
<a class="wa-float" href="${waLink('Hello Benzo, I would like to discuss a project.')}" target="_blank" rel="noopener" aria-label="Chat with Benzo on WhatsApp">${icon('whatsapp')}<span>Chat on WhatsApp</span></a>
<div class="mobile-bar" role="region" aria-label="Quick contact">
  <a href="${telHref()}">${icon('phone')}Call</a>
  <a href="${waLink('Hello Benzo, I would like to discuss a project.')}" target="_blank" rel="noopener">${icon('whatsapp')}WhatsApp</a>
  <a class="mobile-bar__main" href="/contact/">Start a Project</a>
</div>`;
}

/* ---------- structured data ---------- */
export const orgSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': abs('/#organization'),
  name: site.name,
  url: abs('/'),
  logo: abs('/assets/img/logo.png'),
  image: abs('/assets/img/og-image.png'),
  description: 'Benzo builds websites, web and mobile applications, business systems and automation, and fixes, improves and maintains existing digital products.',
  email: site.email,
  telephone: site.phone,
  priceRange: 'Request a quote',
  areaServed: [{ '@type': 'City', name: 'Chennai' }, { '@type': 'State', name: 'Tamil Nadu' }, { '@type': 'Country', name: 'India' }],
  address: { '@type': 'PostalAddress', addressLocality: site.address.locality, addressRegion: site.address.region, addressCountry: site.address.country },
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: site.hoursSchema.days, opens: site.hoursSchema.opens, closes: site.hoursSchema.closes }],
  sameAs: site.social.map((s) => s.url).filter(Boolean),
  contactPoint: [{ '@type': 'ContactPoint', contactType: 'sales', telephone: site.phone, email: site.email, areaServed: 'IN', availableLanguage: ['English', 'Tamil'] }]
});
export const websiteSchema = () => ({ '@context': 'https://schema.org', '@type': 'WebSite', '@id': abs('/#website'), url: abs('/'), name: site.name, publisher: { '@id': abs('/#organization') }, inLanguage: 'en-IN' });
export const faqSchema = (faqs) => ({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) });
export const breadcrumbSchema = (crumbs) => ({
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [{ name: 'Home', href: '/' }, ...crumbs].map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: abs(c.href) }))
});

/* ---------- document shell ---------- */
export function page({ path, title, description, crumbs = [], schema = [], body, noindex = false, ogType = 'website', article = null }) {
  const canonical = abs(path);
  const graph = [...schema];
  if (crumbs.length) graph.push(breadcrumbSchema(crumbs));
  const ld = graph.map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('\n');
  const ogImage = abs('/assets/img/og-image.png');
  const articleMeta = article ? `<meta property="article:published_time" content="${article.date}"><meta property="article:section" content="${esc(article.category)}">` : '';
  return `<!doctype html>
<html lang="en-IN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
<meta name="robots" content="${noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'}">
<meta name="theme-color" content="#050608">
<link rel="icon" href="/assets/img/favicon-48.png" sizes="48x48" type="image/png">
<link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta property="og:type" content="${ogType}">
<meta property="og:site_name" content="Benzo">
<meta property="og:locale" content="en_IN">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${ogImage}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Benzo — digital products, software and technical solutions">
${articleMeta}
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${ogImage}">
<script>document.documentElement.className+=' js'</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap">
<link rel="stylesheet" href="/assets/css/styles.css?v=${site.lastUpdated}">
${ld}
</head>
<body>
${header(path)}
<main id="main">
${crumbs.length ? breadcrumbNav(crumbs) : ''}
${body}
</main>
${footer()}
<script src="/assets/js/main.js?v=${site.lastUpdated}" defer></script>
</body>
</html>`;
}

function breadcrumbNav(crumbs) {
  const all = [{ name: 'Home', href: '/' }, ...crumbs];
  return `<nav class="crumbs" aria-label="Breadcrumb"><div class="container"><ol>${all.map((c, i) => i === all.length - 1 ? `<li aria-current="page">${esc(c.name)}</li>` : `<li><a href="${c.href}">${esc(c.name)}</a></li>`).join('')}</ol></div></nav>`;
}

/* ---------- building blocks ---------- */
export const sectionHead = ({ eyebrow, title, intro, center = false, h = 2, light = false }) =>
  `<div class="section-head${center ? ' section-head--center' : ''}${light ? ' section-head--light' : ''}">${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ''}<h${h}>${title}</h${h}>${intro ? `<p class="lede">${intro}</p>` : ''}</div>`;

export const section = (inner, { tone = '', id = '', cls = '' } = {}) =>
  `<section class="section ${tone ? 'section--' + tone : ''} ${cls}"${id ? ` id="${id}"` : ''}><div class="container">${inner}</div></section>`;

export const cards = (items, { cols = 3, compact = false, swipe = false, collapse = false } = {}) =>
  `<div class="grid grid--${cols}${compact ? ' grid--compact' : ''}${swipe ? ' grid--swipe' : ''}"${collapse ? ' data-collapsible' : ''}>${items.map((i) => {
    const inner = `${i.icon ? `<span class="card__icon">${icon(i.icon)}</span>` : ''}<h3>${esc(i.t)}</h3>${i.d ? `<p>${esc(i.d)}</p>` : ''}${i.href ? `<span class="card__more">Learn more ${icon('arrow')}</span>` : ''}`;
    return i.href ? `<a class="card card--link reveal" href="${i.href}">${inner}</a>` : `<div class="card reveal">${inner}</div>`;
  }).join('')}</div>`;

export const checks = (items, cols = 2) =>
  `<ul class="checks checks--${cols}">${items.map((t) => `<li>${icon('check')}<span>${esc(t)}</span></li>`).join('')}</ul>`;

export const chips = (items) => `<ul class="chips">${items.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>`;

export const steps = (list, { light = false } = {}) =>
  `<ol class="steps${light ? ' steps--light' : ''}">${list.map((s, i) => `<li class="step reveal"><span class="step__n">${String(i + 1).padStart(2, '0')}</span><h3>${esc(s.t)}</h3><p>${esc(s.d)}</p></li>`).join('')}</ol>`;

export const faqBlock = (faqs, { id = '' } = {}) =>
  `<div class="faq"${id ? ` id="${id}"` : ''}>${faqs.map(([q, a]) => `<details class="faq__item"><summary>${esc(q)}${icon('chevron')}</summary><div class="faq__a"><p>${esc(a)}</p></div></details>`).join('')}</div>`;

export const ctaBand = ({ title, text, primary = { label: 'Start a Project', href: '/contact/' }, secondary = { label: 'Get a Free Consultation', href: '/contact/' } }) =>
  `<section class="cta-band"><div class="container cta-band__inner"><div><h2>${title}</h2>${text ? `<p>${text}</p>` : ''}</div><div class="btn-row"><a class="btn btn--light" href="${primary.href}">${esc(primary.label)}</a>${secondary ? `<a class="btn btn--outline-light" href="${secondary.href}">${esc(secondary.label)}</a>` : ''}</div></div></section>`;

export const testimonialsBlock = () => {
  if (!site.testimonials.length) return '';
  return section(sectionHead({ eyebrow: 'Client feedback', title: 'What clients say', center: true }) +
    `<div class="grid grid--3">${site.testimonials.map((t) => `<figure class="quote reveal"><blockquote>${esc(t.quote)}</blockquote><figcaption><strong>${esc(t.name)}</strong><span>${esc([t.role, t.company].filter(Boolean).join(', '))}</span></figcaption></figure>`).join('')}</div>`, { tone: 'soft' });
};

export function renderBlocks(blocks) {
  return blocks.map((b, i) => {
    const tone = i % 2 === 1 ? 'soft' : '';
    if (b.kind === 'cards') return section(sectionHead({ title: esc(b.title), intro: b.intro && esc(b.intro) }) + cards(b.items, { cols: b.cols || 3, collapse: b.items.length > 6 }), { tone });
    if (b.kind === 'checks') return section(sectionHead({ title: esc(b.title), intro: b.intro && esc(b.intro) }) + checks(b.items, b.cols || 2), { tone });
    if (b.kind === 'chips') return section(sectionHead({ title: esc(b.title), intro: b.intro && esc(b.intro) }) + chips(b.items), { tone });
    if (b.kind === 'notice') return section(`<div class="notice reveal"><span class="notice__icon">${icon('shield')}</span><div><h2>${esc(b.title)}</h2><p>${esc(b.body)}</p></div></div>`, { tone });
    if (b.kind === 'split') return section(`<div class="split"><div>${sectionHead({ title: esc(b.title) })}${b.body.map((p) => `<p class="body-lg">${esc(p)}</p>`).join('')}</div><div class="panel reveal">${checks(b.points, 1)}</div></div>`, { tone });
    if (b.kind === 'plans') return section(sectionHead({ title: esc(b.title), intro: b.intro && esc(b.intro) }) + `<div class="grid grid--3 plans">${b.items.map((p) => `<div class="plan reveal${p.featured ? ' plan--featured' : ''}">${p.featured ? '<span class="plan__flag">Most popular</span>' : ''}<h3>${esc(p.name)}</h3><p class="plan__for">${esc(p.for)}</p>${checks(p.points, 1)}<a class="btn ${p.featured ? 'btn--primary' : 'btn--secondary'}" href="/contact/?service=Maintenance&plan=${encodeURIComponent(p.name)}">Request Pricing</a></div>`).join('')}</div>`, { tone });
    return '';
  }).join('\n');
}

export const pageHero = ({ eyebrow, h1, lead, actions = '', tone = '' }) =>
  `<section class="page-hero ${tone}"><div class="container"><div class="page-hero__text">${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ''}<h1>${h1}</h1>${lead ? `<p class="lead">${lead}</p>` : ''}${actions ? `<div class="btn-row">${actions}</div>` : ''}</div></div></section>`;

export const btn = (label, href, kind = 'primary') => `<a class="btn btn--${kind}" href="${href}">${esc(label)}</a>`;

/* ---------- forms ---------- */
export function enquiryForm({ id = 'enquiry' } = {}) {
  const f = (name) => `${id}-${name}`;
  return `<form class="form" id="${id}" method="post" action="#" data-form="enquiry" data-endpoint="${esc(site.formEndpoint)}" data-wa="${site.whatsapp}" data-email="${esc(site.email)}" novalidate>
  <div class="form__grid">
    <div class="field"><label for="${f('name')}">Full name <span aria-hidden="true">*</span></label><input id="${f('name')}" name="name" type="text" autocomplete="name" required></div>
    <div class="field"><label for="${f('company')}">Business / Company</label><input id="${f('company')}" name="company" type="text" autocomplete="organization"></div>
    <div class="field"><label for="${f('phone')}">Phone <span aria-hidden="true">*</span></label><input id="${f('phone')}" name="phone" type="tel" autocomplete="tel" inputmode="tel" required></div>
    <div class="field"><label for="${f('email')}">Email <span aria-hidden="true">*</span></label><input id="${f('email')}" name="email" type="email" autocomplete="email" required></div>
    <div class="field"><label for="${f('service')}">Service required <span aria-hidden="true">*</span></label>
      <select id="${f('service')}" name="service" required><option value="">Select a service</option>${site.serviceOptions.map((o) => `<option>${esc(o)}</option>`).join('')}</select></div>
    <div class="field"><label for="${f('budget')}">Estimated budget</label>
      <select id="${f('budget')}" name="budget"><option value="">Select a range</option>${site.budgets.map((o) => `<option>${esc(o)}</option>`).join('')}</select></div>
    <div class="field field--full"><label for="${f('message')}">Project description <span aria-hidden="true">*</span></label><textarea id="${f('message')}" name="message" rows="5" required placeholder="Tell us what you need, or what is going wrong. Plain words are fine."></textarea></div>
    <fieldset class="field field--full choice"><legend>Preferred contact method</legend>
      <label><input type="radio" name="contact_method" value="Phone call" checked><span>Phone call</span></label>
      <label><input type="radio" name="contact_method" value="WhatsApp"><span>WhatsApp</span></label>
      <label><input type="radio" name="contact_method" value="Email"><span>Email</span></label>
    </fieldset>
    <div class="field field--hp" aria-hidden="true"><label>Leave this empty<input type="text" name="website" tabindex="-1" autocomplete="off"></label></div>
  </div>
  <div class="form__foot">
    <button class="btn btn--primary btn--lg" type="submit">Request a Consultation</button>
    <p class="form__note">No account needed. We use your details only to respond to your enquiry — see our <a href="/privacy-policy/">Privacy Policy</a>.</p>
  </div>
  <div class="form__status" role="status" aria-live="polite" hidden></div>
</form>`;
}

export function quickForm({ id = 'quick' } = {}) {
  return `<form class="form form--quick" id="${id}" method="post" action="#" data-form="quick" data-endpoint="${esc(site.formEndpoint)}" data-wa="${site.whatsapp}" data-email="${esc(site.email)}" novalidate>
  <div class="field"><label for="${id}-name">Name</label><input id="${id}-name" name="name" type="text" autocomplete="name" required></div>
  <div class="field"><label for="${id}-phone">Phone</label><input id="${id}-phone" name="phone" type="tel" autocomplete="tel" inputmode="tel" required></div>
  <div class="field"><label for="${id}-message">What do you need help with?</label><textarea id="${id}-message" name="message" rows="3" required placeholder="e.g. My website is slow and I’m losing enquiries"></textarea></div>
  <div class="field field--hp" aria-hidden="true"><label>Leave this empty<input type="text" name="website" tabindex="-1" autocomplete="off"></label></div>
  <button class="btn btn--primary btn--block" type="submit">Talk to Benzo</button>
  <div class="form__status" role="status" aria-live="polite" hidden></div>
</form>`;
}

export const contactCards = () => `<ul class="contact-list">
  <li>${icon('whatsapp')}<div><strong>WhatsApp</strong><a href="${waLink('Hello Benzo, I would like to discuss a project.')}" target="_blank" rel="noopener">Message us on WhatsApp</a></div></li>
  <li>${icon('mail')}<div><strong>Email</strong><a href="mailto:${esc(site.email)}">${esc(site.email)}</a></div></li>
  <li>${icon('phone')}<div><strong>Phone</strong><a href="${telHref()}">${esc(site.phone)}</a></div></li>
  <li>${icon('clock')}<div><strong>Business hours</strong><span>${esc(site.hours)}</span></div></li>
</ul>`;

/* ---------- tiny markdown ---------- */
const inline = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
export function md(text) {
  const lines = text.trim().split('\n');
  let out = '';
  let list = null;
  const close = () => { if (list) { out += `</${list}>`; list = null; } };
  for (const raw of lines) {
    const l = raw.trim();
    if (!l) { close(); continue; }
    let m;
    if ((m = l.match(/^###\s+(.*)/))) { close(); out += `<h3>${inline(m[1])}</h3>`; }
    else if ((m = l.match(/^##\s+(.*)/))) { close(); out += `<h2>${inline(m[1])}</h2>`; }
    else if ((m = l.match(/^-\s+(.*)/))) { if (list !== 'ul') { close(); out += '<ul>'; list = 'ul'; } out += `<li>${inline(m[1])}</li>`; }
    else if ((m = l.match(/^\d+\.\s+(.*)/))) { if (list !== 'ol') { close(); out += '<ol>'; list = 'ol'; } out += `<li>${inline(m[1])}</li>`; }
    else { close(); out += `<p>${inline(l)}</p>`; }
  }
  close();
  return out;
}

export { services, groups, industries, articles, site, icon, abs, waLink, telHref };
