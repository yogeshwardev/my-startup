import {
  page, esc, icon, site, abs, waLink, services, groups, industries, articles,
  section, sectionHead, cards, checks, chips, steps, faqBlock, ctaBand, testimonialsBlock, renderBlocks,
  pageHero, btn, enquiryForm, quickForm, contactCards, md,
  orgSchema, websiteSchema, faqSchema
} from './layout.mjs';
import { helpCategories, process, whyBenzo, askBenzo, values, faqs } from './content/shared.mjs';
import { projects, workNote } from './content/work.mjs';
import { locations } from './content/locations.mjs';
import { categories } from './content/insights.mjs';
import { mock } from './mockups.mjs';

const fmtDate = (d) => new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
const out = [];
const add = (path, html) => out.push({ path, html });

const projectCard = (p) => `<a class="project reveal" href="/work/${p.slug}/">
  <div class="project__visual">${mock(p.mock)}</div>
  <div class="project__body"><div class="project__meta"><span class="badge">${esc(p.type)}</span><span>${esc(p.industry)}</span></div>
  <h3>${esc(p.name)}</h3><p>${esc(p.summary)}</p><span class="card__more">View case study ${icon('arrow')}</span></div></a>`;

const serviceCards = (list, opts = {}) => cards(list.map((s) => ({ icon: s.icon, t: s.name, d: s.short, href: `/services/${s.slug}/` })), { cols: 3, ...opts });

/* ============================ HOME ============================ */
{
  const hero = `<section class="hero">
  <div class="container hero__inner">
    <div class="hero__text">
      <p class="eyebrow">Websites · Apps · Automation · Support</p>
      <h1><span>Build.</span> <span>Improve.</span> <span>Fix.</span> <span class="accent">Scale.</span></h1>
      <p class="lead">Benzo creates websites, applications, business systems and automation solutions — and helps fix, improve and maintain the digital products you already use.</p>
      <div class="btn-row">${btn('Start a Project', '/contact/')}${btn('Get a Free Consultation', '/contact/?topic=consultation', 'secondary')}</div>
      <ul class="hero__trust"><li>${icon('check')}Free first conversation</li><li>${icon('check')}Plain-language advice</li><li>${icon('check')}No obligation</li></ul>
    </div>
    <div class="hero__visual">${mock('hero')}
    </div>
  </div>
</section>
<section class="promise"><div class="container"><ul class="promise__list">
  <li>${icon('message')}<div><strong>Free first conversation</strong><span>Explain the idea or problem. No jargon needed.</span></div></li>
  <li>${icon('file')}<div><strong>Clear written quote</strong><span>Scope, timeline and cost agreed before work starts.</span></div></li>
  <li>${icon('lock')}<div><strong>Your data stays yours</strong><span>Handled carefully, ownership agreed in writing.</span></div></li>
  <li>${icon('lifebuoy')}<div><strong>Support after launch</strong><span>We stay on hand when something needs changing.</span></div></li>
</ul></div></section>`;

  const help = section(
    sectionHead({ eyebrow: 'How we can help', title: 'Not sure what you need? Start with the problem.', intro: 'You do not have to know the technical solution. Tell us what you are trying to achieve, or what is going wrong, and we will work out the right approach with you.' }) +
    cards(helpCategories, { cols: 5, compact: true }) +
    `<p class="help-note">${icon('message')}<span>Something not on the list? <a href="/contact/">Describe it in your own words</a> — that is exactly how most projects begin.</span></p>`, { cls: 'section--tight' });

  const servicesSec = section(
    sectionHead({ eyebrow: 'Services', title: 'Everything from a first idea to ongoing support', intro: 'One team that can design, build, fix, launch and look after your digital products.' }) +
    serviceCards(services, { swipe: true }) + `<p class="center-link"><a class="btn btn--secondary" href="/services/">Explore all services</a></p>`, { tone: 'soft' });

  const engage = section(
    sectionHead({ eyebrow: 'Ways to work together', title: 'How you can work with Benzo', intro: 'Three clear engagement models, so you can choose the one that fits where your business is today.' }) +
    `<div class="grid grid--3 engage">${[
      ['01', 'Project delivery', 'A new website, application or system built to an agreed scope, timeline and quote.', 'Best when you know what you need built.', ['Written scope and quote before work starts', 'Design approval before development', 'Tested release and launch support']],
      ['02', 'Fix & improve', 'A focused engagement to diagnose and repair, or upgrade, something that already exists.', 'Best when something is broken, slow or unfinished.', ['Inspection and written findings', 'Clear plan for the repair or upgrade', 'Fix verified with you before sign-off']],
      ['03', 'Ongoing care', 'A recurring plan covering updates, backups, monitoring, content changes and support.', 'Best once your product is live and your business relies on it.', ['Regular updates, backups and checks', 'Support for issues and small changes', 'Plans scaled to how critical the system is']]
    ].map(([n, t, d, b, pts]) => `<article class="engage__item reveal"><span class="engage__n">${n}</span><h3>${t}</h3><p>${d}</p><p class="engage__best">${b}</p>${checks(pts, 1)}</article>`).join('')}</div>` +
    `<p class="center-link"><a class="btn btn--secondary" href="/contact/">Discuss the right option for you</a></p>`, { tone: 'soft' });

  const brokenList = ['Website not working correctly', 'Broken pages', 'Login problems', 'Payment issues', 'Form issues', 'API errors', 'Database issues', 'Mobile responsiveness problems', 'Slow website', 'Application crashes', 'Deployment failures', 'Hosting problems', 'Domain configuration problems', 'SSL issues', 'Email configuration', 'Broken integrations', 'UI problems', 'Backend bugs', 'Existing feature modifications'];
  const broken = `<section class="section section--dark" id="fix"><div class="container split split--wide">
    <div>${sectionHead({ eyebrow: 'Website & app fixing', title: 'Already Have a Website or App?', intro: 'You do not always need to rebuild everything. Benzo can inspect your existing website or application, find what is actually wrong and fix it — often at a fraction of the cost of starting again.', light: true })}
    <div class="btn-row">${btn('Tell Us What’s Broken', '/contact/?service=Existing%20Website%20Fix', 'light')}<a class="link-light" href="/services/website-fixing/">How fixing works ${icon('arrow')}</a></div></div>
    <ul class="checks checks--2 checks--light" data-collapsible>${brokenList.map((t) => `<li>${icon('check')}<span>${esc(t)}</span></li>`).join('')}</ul>
  </div></section>`;

  const processSec = section(sectionHead({ eyebrow: 'How Benzo works', title: 'A clear process from first conversation to long-term support', center: true }) + steps(process), { id: 'process' });

  const industriesSec = section(
    sectionHead({ eyebrow: 'Industries', title: 'Solutions for Different Industries', intro: 'We understand that a clinic, a school and a manufacturer need very different things. Here are some of the sectors we build for.' }) +
    `<ul class="tiles">${industries.map((i) => `<li><a href="/industries/#${i.slug}">${icon(i.icon)}<span>${esc(i.name)}</span></a></li>`).join('')}</ul>`, { tone: 'soft' });

  const workSec = section(
    sectionHead({ eyebrow: 'Work', title: 'How we approach real business problems', intro: workNote, light: true }) +
    `<div class="grid grid--2 projects grid--swipe">${projects.slice(0, 4).map(projectCard).join('')}</div><p class="center-link"><a class="btn btn--outline-light" href="/work/">View all projects</a></p>`, { tone: 'dark' });

  const why = section(sectionHead({ eyebrow: 'Why choose Benzo', title: 'A technology partner, not just a website builder', intro: 'Benzo builds new software, improves existing systems, solves technical problems, automates processes, deploys products and supports them afterwards.' }) + cards(whyBenzo, { cols: 5, compact: true, swipe: true }), { tone: 'soft' });

  const ask = section(sectionHead({ eyebrow: 'What can you ask Benzo to build?', title: 'New development and problem solving — both', center: true, intro: 'If you recognise yourself in any of these, you are in the right place.' }) +
    `<ul class="quotes" data-collapsible>${askBenzo.map((q) => `<li><a href="/contact/?message=${encodeURIComponent(q)}">“${esc(q)}”</a></li>`).join('')}</ul>`);

  const quick = `<section class="section section--accent"><div class="container split split--wide split--center">
    <div>${sectionHead({ eyebrow: 'Quick enquiry', title: 'Prefer a quick call back?', intro: 'Leave your name, number and a line about what you need. We will get back to you — no forms to wade through, no account to create.', light: true })}
    <ul class="checks checks--1 checks--light"><li>${icon('check')}<span>Free initial conversation</span></li><li>${icon('check')}<span>Plain-language advice</span></li><li>${icon('check')}<span>No obligation</span></li></ul></div>
    <div class="panel panel--form">${quickForm({ id: 'quick-home' })}</div></div></section>`;

  const faqSec = section(sectionHead({ eyebrow: 'FAQ', title: 'Questions businesses ask us', center: true }) + faqBlock(faqs.general), { id: 'faq' });

  const contact = section(`<div class="split split--wide">
    <div>${sectionHead({ eyebrow: 'Contact', title: 'Let’s Discuss Your Project', intro: 'Tell us about your idea or your problem. You will hear back from a real person, with honest advice on the best next step.' })}${contactCards()}</div>
    <div class="panel panel--form">${enquiryForm({ id: 'enquiry-home' })}</div></div>`, { tone: 'soft', id: 'contact' });

  add('/', page({
    path: '/',
    title: 'Benzo | Websites, Apps, Software & Technical Solutions',
    description: 'Benzo builds websites, web and mobile apps, business software and automation — and fixes, improves, deploys and maintains the digital products you already use.',
    schema: [orgSchema(), websiteSchema(), faqSchema(faqs.general)],
    body: hero + help + servicesSec + engage + broken + processSec + industriesSec + workSec + why + ask + testimonialsBlock() + quick + faqSec + contact
  }));
}

/* ============================ SERVICES INDEX ============================ */
{
  const body = pageHero({
    eyebrow: 'Services', h1: 'Digital products, software and technical solutions.',
    lead: 'Build something new, fix what is broken, automate repetitive work, be easier to find, and keep everything running. Benzo covers the whole journey.',
    actions: btn('Start a Project', '/contact/') + btn('Get a Free Consultation', '/contact/?topic=consultation', 'secondary')
  }) + groups.map((g, i) => section(sectionHead({ eyebrow: g.title, title: g.text }) + serviceCards(services.filter((s) => s.group === g.id)), { tone: i % 2 ? 'soft' : '' })).join('') +
    section(sectionHead({ eyebrow: 'Not sure where to start?', title: 'Describe the problem. We will recommend the route.', center: true, intro: 'Most clients do not arrive knowing whether they need a website, an application or a repair. That is completely fine.' }) + `<div class="center-link">${btn('Tell Us What You Need', '/contact/')}</div>`, { tone: 'soft' }) +
    ctaBand({ title: 'Ready to talk about your project?', text: 'A free first conversation — no obligation.' });
  add('/services/', page({
    path: '/services/',
    title: 'Software, Web & App Development Services | Benzo',
    description: 'Explore Benzo’s services: website and app development, business software, fixing existing systems, automation, SEO, performance, security, deployment and maintenance.',
    crumbs: [{ name: 'Services', href: '/services/' }], body
  }));
}

/* ============================ SERVICE PAGES ============================ */
const ctaTitles = {
  build: 'Let’s talk about what you want to build.',
  improve: 'Tell us what needs fixing or improving.',
  automate: 'Let’s find the work you can stop doing by hand.',
  grow: 'Let’s make your business easier to find.',
  run: 'Let’s take it live — and keep it running.'
};
for (const s of services) {
  const related = s.related.map((r) => services.find((x) => x.slug === r));
  const body = pageHero({
    eyebrow: s.eyebrow, h1: esc(s.h1), lead: esc(s.lead),
    actions: btn(s.cta.label, s.cta.href) + btn('Get a Free Consultation', '/contact/?topic=consultation', 'secondary')
  }) + renderBlocks(s.sections) +
    section(sectionHead({ eyebrow: 'FAQ', title: 'Common questions', center: true }) + faqBlock(s.faqs), { tone: s.sections.length % 2 ? 'soft' : '' }) +
    section(sectionHead({ title: 'Related services' }) + serviceCards(related)) +
    ctaBand({ title: ctaTitles[s.group], text: 'Tell us what you need. You will get honest advice and a clear next step.', primary: { label: s.cta.label, href: s.cta.href } });
  add(`/services/${s.slug}/`, page({
    path: `/services/${s.slug}/`, title: s.seo.title, description: s.seo.description,
    crumbs: [{ name: 'Services', href: '/services/' }, { name: s.name, href: `/services/${s.slug}/` }],
    schema: [{ '@context': 'https://schema.org', '@type': 'Service', name: s.name, description: s.seo.description, url: abs(`/services/${s.slug}/`), provider: { '@id': abs('/#organization') }, areaServed: ['India'], serviceType: s.name }, faqSchema(s.faqs)],
    body
  }));
}

/* ============================ INDUSTRIES ============================ */
{
  const body = pageHero({ eyebrow: 'Industries', h1: 'Solutions for Different Industries', lead: 'A school, a clinic and a manufacturer all need something different. Here are examples of what Benzo can build for each — and if your sector is not listed, the approach is the same.', actions: btn('Discuss Your Industry', '/contact/') }) +
    section(`<div class="grid grid--3 industries">${industries.map((i) => `<article class="card card--tall reveal" id="${i.slug}"><span class="card__icon">${icon(i.icon)}</span><h2>${esc(i.name)}</h2><p>${esc(i.blurb)}</p><ul class="bullets">${i.items.map((x) => `<li>${esc(x)}</li>`).join('')}</ul><a class="card__more" href="/contact/?message=${encodeURIComponent(`I would like to discuss a project for ${i.name.toLowerCase()}.`)}">Discuss a project ${icon('arrow')}</a></article>`).join('')}</div>`) +
    ctaBand({ title: 'Don’t see your industry?', text: 'The approach is the same everywhere: understand your business, then build what it needs.' });
  add('/industries/', page({
    path: '/industries/', title: 'Software & Websites for Schools, Clinics & More | Benzo',
    description: 'Websites, apps and systems for schools, clinics, real estate, interior design, retail, restaurants, manufacturing, e-commerce, startups and local businesses.',
    crumbs: [{ name: 'Industries', href: '/industries/' }], body
  }));
}

/* ============================ WORK ============================ */
{
  const body = pageHero({ eyebrow: 'Work', h1: 'Projects and case studies', lead: 'A look at how Benzo approaches real business problems.' }) +
    section(`<div class="notice reveal"><span class="notice__icon">${icon('shield')}</span><div><h2>An honest note about this work</h2><p>${esc(workNote)}</p></div></div>`, { cls: 'section--tight' }) +
    section(`<div class="grid grid--2 projects">${projects.map(projectCard).join('')}</div>`, { cls: 'section--tight' }) +
    ctaBand({ title: 'Have a problem like one of these?', text: 'Tell us about it. We can start with a simple conversation.' });
  add('/work/', page({
    path: '/work/', title: 'Projects & Case Studies | Benzo',
    description: 'Explore demonstration solutions and product concepts from Benzo — a clinic booking system, school management suite, property enquiry desk and lead-management concept.',
    crumbs: [{ name: 'Work', href: '/work/' }], body
  }));

  for (const p of projects) {
    const others = projects.filter((x) => x.slug !== p.slug).slice(0, 2);
    const b = `<section class="page-hero"><div class="container"><div class="page-hero__text"><p class="eyebrow"><span class="badge">${esc(p.type)}</span> ${esc(p.industry)}</p><h1>${esc(p.name)}</h1><p class="lead">${esc(p.summary)}</p></div></div></section>
    ${section(`<div class="case-visual reveal">${mock(p.mock)}<p class="caption">Interface illustration — ${esc(p.type)}. Not a screenshot of a live client product.</p></div>`, { cls: 'section--tight' })}
    ${section(`<div class="case"><div class="case__col"><h2>The Problem</h2><p class="body-lg">${esc(p.problem)}</p></div><div class="case__col"><h2>The Solution</h2><p class="body-lg">${esc(p.solution)}</p></div></div>`, { tone: 'soft' })}
    ${section(`<div class="case"><div class="case__col"><h2>Key Features</h2>${checks(p.features, 1)}</div><div class="case__col"><h2>Outcome</h2><p class="body-lg">${esc(p.outcome)}</p><h3 class="mt">What this demonstrates</h3>${chips(p.demonstrates)}</div></div>`)}
    ${section(`<div class="notice"><span class="notice__icon">${icon('shield')}</span><div><h2>About this ${esc(p.type.toLowerCase())}</h2><p>This was designed by Benzo to illustrate our approach. It is not presented as a paid client project, and it carries no customer testimonials or performance figures.</p></div></div>`, { tone: 'soft', cls: 'section--tight' })}
    ${section(sectionHead({ title: 'More projects' }) + `<div class="grid grid--2 projects">${others.map(projectCard).join('')}</div>`)}
    ${ctaBand({ title: `Need something like ${p.name}?`, text: 'We can build a version shaped around your own business and process.', primary: { label: 'Start a Project', href: '/contact/' } })}`;
    add(`/work/${p.slug}/`, page({
      path: `/work/${p.slug}/`, title: p.seo.title, description: p.seo.description,
      crumbs: [{ name: 'Work', href: '/work/' }, { name: p.name, href: `/work/${p.slug}/` }], body: b
    }));
  }
}

/* ============================ ABOUT ============================ */
{
  const body = pageHero({ eyebrow: 'About Benzo', h1: 'Practical, reliable and well-designed software for real businesses.', lead: 'Benzo is a digital solutions company focused on building practical, reliable and well-designed software for businesses and organisations. From websites and applications to automation, deployment and technical troubleshooting, we help clients turn requirements and problems into working digital solutions.', actions: btn('Start a Project', '/contact/') + btn('See Our Work', '/work/', 'secondary') }) +
    section(`<div class="split"><div>${sectionHead({ eyebrow: 'What we do', title: 'One team across the whole digital lifecycle' })}<p class="body-lg">Many businesses end up juggling a designer, a developer, a hosting company and a freelancer who has gone quiet. We bring those pieces together, so that the people who understand your problem are the same people who build, launch and support the solution.</p><p class="body-lg">We work with small and local businesses, schools, clinics, real-estate firms, startups, professional-service companies and growing organisations that need dependable digital work without the overhead of a large agency.</p></div>
    <div class="panel">${checks(['New websites, web apps and mobile apps', 'Improving and repairing existing products', 'Business automation and practical AI', 'SEO, performance and security', 'Deployment, hosting and migration', 'Maintenance and long-term support'], 1)}</div></div>`) +
    section(sectionHead({ eyebrow: 'Our values', title: 'What we care about', center: true }) + cards(values, { cols: 4, compact: true }), { tone: 'soft' }) +
    section(sectionHead({ eyebrow: 'How we work', title: 'Straightforward working principles' }) + `<div class="grid grid--3">
      <div class="card reveal"><span class="card__icon">${icon('message')}</span><h3>Plain language</h3><p>We explain technical decisions in business terms, and tell you what we recommend and why.</p></div>
      <div class="card reveal"><span class="card__icon">${icon('file')}</span><h3>Scope in writing</h3><p>You know what is included, when to expect it and what it costs before work begins.</p></div>
      <div class="card reveal"><span class="card__icon">${icon('lock')}</span><h3>Your data, your property</h3><p>We handle your information carefully, and ownership of what we build for you is agreed clearly upfront.</p></div></div>`) +
    section(`<div class="notice reveal"><span class="notice__icon">${icon('shield')}</span><div><h2>What you will not hear from us</h2><p>We will not promise first place on Google, claim to be the best in the world, or show you testimonials and numbers we cannot prove. We would rather earn your trust with clear work and honest advice.</p></div></div>`, { tone: 'soft', cls: 'section--tight' }) +
    section(sectionHead({ eyebrow: 'Why choose Benzo', title: 'Ten reasons businesses work with us' }) + cards(whyBenzo, { cols: 5, compact: true })) +
    ctaBand({ title: 'Let’s talk about your project.', text: 'The first conversation is free and there is no obligation.' });
  add('/about/', page({
    path: '/about/', title: 'About Benzo | Digital Solutions Company',
    description: 'Benzo is a digital solutions company building practical, reliable software for businesses — websites, apps, automation, deployment and technical support.',
    crumbs: [{ name: 'About', href: '/about/' }], schema: [{ '@context': 'https://schema.org', '@type': 'AboutPage', name: 'About Benzo', url: abs('/about/'), about: { '@id': abs('/#organization') } }], body
  }));
}

/* ============================ CONTACT ============================ */
{
  const next = [['Tell us', 'Send your details, or message us on WhatsApp. Plain words are fine.'], ['We respond', 'A real person reads it and replies, usually within one working day.'], ['Free conversation', 'We discuss your goals or problem and recommend the right approach.'], ['Clear proposal', 'You receive a written scope, timeline and quote. No obligation.']];
  const body = pageHero({ eyebrow: 'Contact', h1: 'Let’s Discuss Your Project', lead: 'Tell us about your idea or your problem. You do not need to know the technical solution, and you do not need to create an account.' }) +
    section(`<div class="split split--wide split--top"><div class="panel panel--form">${enquiryForm({ id: 'enquiry-page' })}</div>
    <aside class="aside">${`<h2 class="h3">Prefer to talk directly?</h2>`}${contactCards()}
      <div class="aside__box"><h2 class="h3">What happens next</h2><ol class="next">${next.map(([t, d]) => `<li><strong>${t}</strong><span>${d}</span></li>`).join('')}</ol></div>
      <div class="aside__box"><h2 class="h3">Quick enquiry</h2>${quickForm({ id: 'quick-contact' })}</div></aside></div>`, { cls: 'section--tight' }) +
    section(sectionHead({ title: 'Before you write', center: true }) + faqBlock(faqs.general.slice(0, 4)), { tone: 'soft' });
  add('/contact/', page({
    path: '/contact/', title: 'Contact Benzo | Start a Project or Request a Quote',
    description: 'Contact Benzo to start a project, request a consultation or get a quote. Send an enquiry, message us on WhatsApp, call or email. No account needed.',
    crumbs: [{ name: 'Contact', href: '/contact/' }], schema: [{ '@context': 'https://schema.org', '@type': 'ContactPage', name: 'Contact Benzo', url: abs('/contact/'), about: { '@id': abs('/#organization') } }], body
  }));
}

/* ============================ INSIGHTS ============================ */
{
  const body = pageHero({ eyebrow: 'Insights', h1: 'Practical advice on websites, software and digital growth.', lead: 'Plain-language guides for business owners — written to help you make better decisions, whether or not you ever work with us.' }) +
    section(`<div class="filters" role="group" aria-label="Filter articles by category"><button type="button" class="chip is-active" data-filter="all">All</button>${categories.filter((c) => articles.some((a) => a.category === c)).map((c) => `<button type="button" class="chip" data-filter="${esc(c)}">${esc(c)}</button>`).join('')}</div>
    <div class="grid grid--3 articles">${[...articles].sort((a, b) => b.date.localeCompare(a.date)).map((a) => `<a class="article-card reveal" href="/insights/${a.slug}/" data-cat="${esc(a.category)}"><span class="article-card__cat">${esc(a.category)}</span><h2>${esc(a.title)}</h2><p>${esc(a.description)}</p><span class="article-card__meta">${fmtDate(a.date)} · ${a.read} min read</span></a>`).join('')}</div>`, { cls: 'section--tight' }) +
    ctaBand({ title: 'Have a question we haven’t covered?', text: 'Ask us directly — we are happy to help.' });
  add('/insights/', page({
    path: '/insights/', title: 'Insights: Website, SEO & Business Technology | Benzo',
    description: 'Practical guides on website development, SEO, performance, automation, mobile apps and digital transformation for small and growing businesses.',
    crumbs: [{ name: 'Insights', href: '/insights/' }], body
  }));

  for (const a of articles) {
    const rel = a.related.map((r) => articles.find((x) => x.slug === r)).filter(Boolean);
    const b = `<article>
    <header class="article-head"><div class="container container--narrow"><p class="eyebrow"><a href="/insights/">Insights</a> · ${esc(a.category)}</p><h1>${esc(a.title)}</h1><p class="lead">${esc(a.description)}</p><p class="article-meta">By Benzo Team · <time datetime="${a.date}">${fmtDate(a.date)}</time> · ${a.read} min read</p></div></header>
    <div class="container container--narrow"><div class="prose">${md(a.body)}</div>
    <aside class="article-cta"><h2>Need help with this?</h2><p>Tell us about your situation and we will give you honest, practical advice.</p><div class="btn-row">${btn('Talk to Benzo', '/contact/')}${btn('View services', '/services/', 'secondary')}</div></aside></div></article>
    ${section(sectionHead({ title: 'Keep reading' }) + `<div class="grid grid--2 articles">${rel.map((x) => `<a class="article-card" href="/insights/${x.slug}/"><span class="article-card__cat">${esc(x.category)}</span><h3>${esc(x.title)}</h3><p>${esc(x.description)}</p><span class="article-card__meta">${fmtDate(x.date)} · ${x.read} min read</span></a>`).join('')}</div>`, { tone: 'soft' })}`;
    add(`/insights/${a.slug}/`, page({
      path: `/insights/${a.slug}/`, title: `${a.title} | Benzo Insights`.length <= 62 ? `${a.title} | Benzo Insights` : `${a.title} | Benzo`, description: a.description, ogType: 'article', article: a,
      crumbs: [{ name: 'Insights', href: '/insights/' }, { name: a.title, href: `/insights/${a.slug}/` }],
      schema: [{ '@context': 'https://schema.org', '@type': 'Article', headline: a.title, description: a.description, datePublished: a.date, dateModified: a.date, author: { '@type': 'Organization', name: 'Benzo' }, publisher: { '@id': abs('/#organization') }, mainEntityOfPage: abs(`/insights/${a.slug}/`), image: abs('/assets/img/og-image.png') }],
      body: b
    }));
  }
}

/* ============================ LOCATIONS ============================ */
for (const l of locations) {
  const others = l.related.map((r) => locations.find((x) => x.slug === r));
  const body = pageHero({ eyebrow: `${l.service} · ${l.place}`, h1: esc(l.h1), lead: esc(l.lead), actions: btn('Start a Project', `/contact/?service=${encodeURIComponent(l.ctaService)}`) + btn('Get a Free Consultation', '/contact/?topic=consultation', 'secondary') }) +
    section(`<div class="split"><div>${sectionHead({ title: esc(l.intro.title) })}${l.intro.body.map((p) => `<p class="body-lg">${esc(p)}</p>`).join('')}</div><div class="panel">${sectionHead({ title: 'What you get', h: 2 })}${checks(['Mobile-first, fast-loading design', 'Clear contact and enquiry options', 'Search-ready structure', 'Honest advice and a written quote', 'Support after launch'], 1)}</div></div>`) +
    section(sectionHead({ title: esc(l.blocks[0].title) }) + cards(l.blocks[0].items.map(([t, d]) => ({ t, d })), { cols: 3 }), { tone: 'soft' }) +
    section(`<div class="split"><div>${sectionHead({ title: esc(l.blocks[1].title) })}<p class="body-lg">${esc(l.blocks[1].text)}</p></div><div>${sectionHead({ title: esc(l.areasTitle), h: 2 })}${chips(l.areas)}<p class="small">${esc(l.localSeo)}</p></div></div>`) +
    section(sectionHead({ eyebrow: 'FAQ', title: `${l.service} in ${esc(l.place)}: common questions`, center: true }) + faqBlock(l.faqs), { tone: 'soft' }) +
    section(sectionHead({ title: 'Related services and locations' }) + `<div class="grid grid--3">${others.map((o) => `<a class="card card--link" href="/${o.slug}/"><h3>${esc(o.service)} in ${esc(o.place)}</h3><p>${esc(o.seo.description.slice(0, 120))}…</p><span class="card__more">Read more ${icon('arrow')}</span></a>`).join('')}<a class="card card--link" href="/services/"><h3>All Benzo services</h3><p>Web, apps, automation, SEO, fixing, deployment and maintenance.</p><span class="card__more">View services ${icon('arrow')}</span></a></div>`) +
    ctaBand({ title: `Planning a project in ${l.place}?`, text: 'Tell us what you need. We will reply with honest advice and a clear next step.', primary: { label: 'Start a Project', href: `/contact/?service=${encodeURIComponent(l.ctaService)}` } });
  add(`/${l.slug}/`, page({
    path: `/${l.slug}/`, title: l.seo.title, description: l.seo.description,
    crumbs: [{ name: `${l.service} in ${l.place}`, href: `/${l.slug}/` }],
    schema: [{ '@context': 'https://schema.org', '@type': 'Service', name: `${l.service} in ${l.place}`, description: l.seo.description, url: abs(`/${l.slug}/`), provider: { '@id': abs('/#organization') }, areaServed: { '@type': l.place === 'Tamil Nadu' ? 'State' : 'City', name: l.place } }, faqSchema(l.faqs)],
    body
  }));
}

/* ============================ LEGAL ============================ */
const contactLine = `Email: [${site.email}](mailto:${site.email})`;
const privacy = `
**Last updated:** ${fmtDate(site.lastUpdated)}

This Privacy Policy explains how Benzo (“we”, “us”) collects, uses and protects personal information when you visit this website or contact us.

## Information we collect

- **Information you give us.** When you submit an enquiry form, message us or call us, we receive details such as your name, business name, phone number, email address, the service you are interested in, your budget range and the description you write.
- **Enquiry records.** When you submit the enquiry form, your details are passed to the service we use to receive form submissions and are stored in our enquiry records so that we can follow up.
- **Technical information.** Like most websites, our servers and tools may record basic technical data such as your browser type, device, pages visited and approximate region. We use it to keep the site secure and understand how it is used.

## How we use it

- To respond to your enquiry and provide quotes or services you request
- To manage our relationship with clients and prospective clients
- To maintain, secure and improve this website
- To meet legal and accounting obligations

We do not sell your personal information.

## Messaging

If you contact us through WhatsApp, email or phone, the provider of that service also processes your messages under its own terms. Please do not send passwords, payment card numbers or other highly sensitive information through these channels.

## Sharing

We may share information with trusted service providers who help us operate our business — for example hosting, email and analytics providers — only as needed for them to perform their service. We may also disclose information where required by law.

## Cookies and analytics

This website may use cookies or similar technologies for essential functions and, if enabled, for analytics. You can control cookies through your browser settings.

## Retention and security

We keep enquiry information for as long as needed to respond and to maintain a reasonable business record, then delete or anonymise it. We use sensible technical and organisational measures to protect information, but no online service can be guaranteed completely secure.

## Your rights

You may ask us to access, correct or delete the personal information we hold about you, subject to applicable law. To make a request, contact us using the details below.

## Children

Our services are directed at businesses and organisations, not children, and we do not knowingly collect information from children.

## Changes

We may update this policy from time to time. The date at the top shows when it was last revised.

## Contact

${contactLine}
`;
const terms = `
**Last updated:** ${fmtDate(site.lastUpdated)}

These Terms of Service govern your use of this website. Services we provide to clients are governed by a separate written proposal or agreement, which takes priority where the two differ.

## Use of this website

You may use this website for lawful purposes. You agree not to misuse it, attempt to gain unauthorised access to it or interfere with its operation.

## Information on this site

We aim to keep the information accurate, but it is provided for general guidance and does not constitute a binding offer. Descriptions of services, examples and timelines are indicative. A written proposal sets out the scope, price and timeline for any project.

## Projects and examples

Projects shown on this website that are labelled as demo solutions or product concepts were created by Benzo for illustration and are not paid client engagements.

## Quotes and engagements

Quotes are based on the information you provide and remain valid for the period stated in the proposal. Work begins once scope and terms are agreed in writing. Changes to scope may affect cost and timeline.

## Intellectual property

The content of this website, including text, design and logos, belongs to Benzo and may not be copied or reused without permission. Ownership of work delivered to clients is set out in the applicable agreement.

## No guarantees of search rankings or business results

We build strong technical and content foundations, but we do not guarantee particular search rankings, traffic or sales outcomes, because these depend on factors outside our control.

## Third-party links and services

This website may link to third-party sites and services. We are not responsible for their content or practices.

## Limitation of liability

To the fullest extent permitted by law, Benzo is not liable for indirect or consequential losses arising from the use of this website. Nothing in these terms excludes liability that cannot lawfully be excluded.

## Governing law

These terms are governed by the laws of India. Disputes are subject to the jurisdiction of the courts of Chennai, Tamil Nadu, unless otherwise agreed in writing.

## Changes

We may update these terms from time to time. Continued use of the website after a change means you accept the updated terms.

## Contact

${contactLine}
`;
const legal = (path, title, h1, desc, text) => add(path, page({
  path, title, description: desc, crumbs: [{ name: h1, href: path }],
  body: `<header class="article-head"><div class="container container--narrow"><h1>${h1}</h1></div></header><div class="container container--narrow"><div class="prose prose--legal">${md(text)}</div></div>`
}));
legal('/privacy-policy/', 'Privacy Policy | Benzo', 'Privacy Policy', 'How Benzo collects, uses and protects personal information when you visit this website or send an enquiry.', privacy);
legal('/terms-of-service/', 'Terms of Service | Benzo', 'Terms of Service', 'The terms that apply to your use of the Benzo website and how project work is agreed.', terms);

/* ============================ 404 ============================ */
add('/404.html', page({
  path: '/404.html', title: 'Page not found | Benzo', description: 'The page you were looking for could not be found. Use these links to find a service, read our insights or contact Benzo.', noindex: true,
  body: `<section class="page-hero"><div class="container"><div class="page-hero__text"><p class="eyebrow">Error 404</p><h1>We couldn’t find that page.</h1><p class="lead">It may have moved or the address may be mistyped. These links will get you back on track.</p><div class="btn-row">${btn('Go to homepage', '/')}${btn('Contact us', '/contact/', 'secondary')}</div></div></div></section>${section(sectionHead({ title: 'Popular pages' }) + serviceCards(services.slice(0, 3)))}`
}));

export const pages = out;
