// Service pages. Each entry drives a page at /services/<slug>/ and the cards across the site.
// `sections` blocks: cards | checks | chips | split | plans | notice

export const groups = [
  { id: 'build', title: 'Build', text: 'New websites, applications and business systems.' },
  { id: 'improve', title: 'Improve & Fix', text: 'Repair, redesign and strengthen what you already have.' },
  { id: 'automate', title: 'Automate', text: 'Remove repetitive work and respond to customers faster.' },
  { id: 'grow', title: 'Grow', text: 'Be easier to find and easier to choose.' },
  { id: 'run', title: 'Launch & Support', text: 'Take products live and keep them healthy.' }
];

export const services = [
  {
    slug: 'web-development',
    group: 'build',
    name: 'Website Development',
    icon: 'globe',
    short: 'Business, corporate, school, clinic, real-estate and e-commerce websites built to convert visitors into enquiries.',
    seo: {
      title: 'Website Development Company for Businesses | Benzo',
      description: 'Benzo builds fast, mobile-friendly, SEO-ready business websites — corporate, school, clinic, real-estate, e-commerce and booking sites. Request a consultation.'
    },
    eyebrow: 'Website Development',
    h1: 'Business websites that look credible and bring in enquiries.',
    lead: 'Benzo designs and builds professional websites for businesses, schools, clinics and organisations — fast, mobile-friendly, search-ready and structured around what your visitors need to do next.',
    cta: { label: 'Start a Project', href: '/contact/' },
    sections: [
      {
        kind: 'cards', title: 'The kinds of websites we build', intro: 'Every site is planned around your audience and your goal — not poured into a generic template.', cols: 3,
        items: [
          { icon: 'building', t: 'Business & corporate websites', d: 'Clear company profiles, service pages and proof of credibility for established and growing firms.' },
          { icon: 'graduation', t: 'School websites', d: 'Admissions information, announcements, galleries, downloads and parent-friendly navigation.' },
          { icon: 'heart', t: 'Clinic websites', d: 'Doctor profiles, services, locations and simple appointment enquiries patients can use on a phone.' },
          { icon: 'home', t: 'Real-estate websites', d: 'Property catalogues with filters, enquiry forms and site-visit requests that reach your sales team.' },
          { icon: 'palette', t: 'Portfolio websites', d: 'Image-led showcases for designers, architects, photographers and creative studios.' },
          { icon: 'bag', t: 'E-commerce websites', d: 'Product catalogues, carts, secure checkout and order management for online selling.' },
          { icon: 'target', t: 'Landing pages', d: 'Focused single-purpose pages for campaigns, launches and lead collection.' },
          { icon: 'calendar', t: 'Booking websites', d: 'Let customers book appointments, tables, consultations or services online.' },
          { icon: 'users', t: 'Service & custom web portals', d: 'Service-business sites and members-only portals that go beyond a brochure.' }
        ]
      },
      {
        kind: 'cards', title: 'What every Benzo website includes', cols: 3,
        items: [
          { icon: 'smartphone', t: 'Mobile responsive', d: 'Designed for phones first, then scaled up — not shrunk down from desktop.' },
          { icon: 'gauge', t: 'Fast loading', d: 'Optimised images and lean pages so visitors are not left waiting.' },
          { icon: 'layout', t: 'Professional design', d: 'A clean, consistent look that matches how serious your business is.' },
          { icon: 'search', t: 'SEO-ready structure', d: 'Proper titles, headings, clean URLs, sitemap and structured business data from day one.' },
          { icon: 'mail', t: 'Contact & enquiry systems', d: 'Forms that work, reach the right person and are tested before launch.' },
          { icon: 'target', t: 'Business-focused layout', d: 'Each page leads to a clear next step — call, enquire, book or buy.' }
        ]
      },
      {
        kind: 'split', title: 'Built around your business, not around a template',
        body: [
          'Many websites fail quietly: they load slowly on phones, bury the phone number, or never tell a visitor what to do next. We start by understanding who visits your site and what you want them to do, then design the structure, wording and layout around that.',
          'You get a site you can confidently share with customers, and a team you can call when something needs to change.'
        ],
        points: ['Content structure planned before design', 'Written for real visitors, not just search engines', 'Tested on phones, tablets and desktops', 'Handed over with a clear guide to updating content']
      }
    ],
    faqs: [
      ['Do you use templates?', 'We design around your business and content. Where a proven pattern saves time, we use it — but the structure, wording and look are tailored to you.'],
      ['Will my website appear on Google?', 'We build strong technical and content foundations that improve your ability to appear in relevant searches. Rankings depend on competition and time, so we never promise a specific position.'],
      ['Can I update the content myself?', 'Yes, where it makes sense. We can set the site up so that routine changes are simple, and we can also handle updates for you under a maintenance plan.']
    ],
    related: ['website-redesign', 'seo', 'maintenance']
  },
  {
    slug: 'web-applications',
    group: 'build',
    name: 'Web Applications',
    icon: 'layers',
    short: 'Dashboards, portals, management systems, CRMs and internal tools built around your actual process.',
    seo: {
      title: 'Custom Web Application Development | Benzo',
      description: 'Custom web applications for business — admin dashboards, customer portals, CRMs, booking, inventory and school management systems built around your real workflow.'
    },
    eyebrow: 'Web Applications',
    h1: 'Custom business software, built around how you actually work.',
    lead: 'When spreadsheets, messages and manual tracking stop being enough, Benzo builds web applications that organise your operations, your customers and your data in one place.',
    cta: { label: 'Discuss Your System', href: '/contact/' },
    sections: [
      {
        kind: 'cards', title: 'Systems we develop', cols: 3,
        items: [
          { icon: 'layout', t: 'Admin dashboards', d: 'One screen for the numbers and actions your team needs every day.' },
          { icon: 'users', t: 'Customer portals', d: 'Let customers view orders, invoices, documents and requests without calling you.' },
          { icon: 'clipboard', t: 'Management systems', d: 'Structured record-keeping and workflows for your organisation.' },
          { icon: 'calendar', t: 'Booking systems', d: 'Availability, reservations, confirmations and reminders in one flow.' },
          { icon: 'graduation', t: 'School management systems', d: 'Attendance, fees, timetables, results and parent communication.' },
          { icon: 'target', t: 'CRM systems', d: 'Track leads, follow-ups and customer history so no enquiry is lost.' },
          { icon: 'briefcase', t: 'Employee management', d: 'Staff records, leave, tasks and approvals in a single system.' },
          { icon: 'database', t: 'Inventory systems', d: 'Stock levels, suppliers, movements and low-stock alerts.' },
          { icon: 'check', t: 'Attendance systems', d: 'Simple check-in and reporting for staff, students or members.' },
          { icon: 'card', t: 'Payment dashboards', d: 'Collections, dues and reconciliation visible at a glance.' },
          { icon: 'chart', t: 'Business analytics', d: 'Reports that turn your data into decisions.' },
          { icon: 'wrench', t: 'Internal tools & custom workflows', d: 'The small tools that remove daily friction from your team.' }
        ]
      },
      {
        kind: 'split', title: 'Designed around your real process',
        body: [
          'Off-the-shelf software forces you to change how you work. Our systems are the other way round: we map your actual process first — who does what, what gets approved, where things get stuck — and then build software that fits it.',
          'That means less training, fewer workarounds and a system your team actually uses.'
        ],
        points: ['Process mapping before any design or build', 'Role-based access so people see only what they should', 'Reports and exports your accountant and management can use', 'Room to grow: new features can be added in stages']
      },
      {
        kind: 'checks', title: 'Business outcomes you can expect', cols: 2,
        items: ['Less manual data entry and fewer copy-paste errors', 'One reliable source of truth instead of scattered files', 'Faster responses to customers and staff', 'Clear visibility of what is happening in the business', 'Secure access with logins and permissions', 'A system that can grow as you do']
      }
    ],
    faqs: [
      ['Can you replace our spreadsheets?', 'Yes. Spreadsheets are often the best starting point — we study how you use them and turn the process into a proper system, including importing your existing data.'],
      ['Can the system be built in stages?', 'Yes. We commonly start with the most valuable part, launch it, and add features as the business needs them.'],
      ['Who owns the finished software?', 'Ownership terms are agreed in writing before work begins, so there is never any doubt about your rights to what we build for you.']
    ],
    related: ['business-automation', 'deployment-hosting', 'maintenance']
  },
  {
    slug: 'mobile-apps',
    group: 'build',
    name: 'Mobile Apps',
    icon: 'smartphone',
    short: 'Customer, staff, booking and service apps with a professional interface and secure backend.',
    seo: {
      title: 'Mobile App Development Company | Benzo',
      description: 'Benzo builds business, customer, booking, e-commerce and educational mobile apps with secure login, notifications, payments and backend integration.'
    },
    eyebrow: 'Mobile Apps',
    h1: 'Mobile apps for businesses and good ideas.',
    lead: 'From a customer-facing app to a tool your staff use in the field, Benzo designs and builds mobile apps that feel polished, work reliably and connect to the systems behind your business.',
    cta: { label: 'Start a Project', href: '/contact/' },
    sections: [
      {
        kind: 'cards', title: 'Apps we build', cols: 3,
        items: [
          { icon: 'briefcase', t: 'Business apps', d: 'Put core business functions in your team’s hands.' },
          { icon: 'users', t: 'Customer apps', d: 'Give customers a direct, convenient way to use your services.' },
          { icon: 'clipboard', t: 'Internal staff apps', d: 'Field reporting, task tracking and approvals on the go.' },
          { icon: 'calendar', t: 'Booking apps', d: 'Appointments and reservations with reminders.' },
          { icon: 'wrench', t: 'Service apps', d: 'Request, track and manage service work.' },
          { icon: 'cart', t: 'E-commerce apps', d: 'Browse, order and pay from a phone.' },
          { icon: 'graduation', t: 'Educational apps', d: 'Courses, lessons, assessments and progress tracking.' },
          { icon: 'check', t: 'Productivity apps', d: 'Focused tools that help people get routine work done.' },
          { icon: 'idea', t: 'Custom apps', d: 'Have an idea? We help shape it into a buildable product.' }
        ]
      },
      {
        kind: 'cards', title: 'What a good app needs', cols: 3,
        items: [
          { icon: 'layout', t: 'Professional interface', d: 'Clean screens that follow the conventions people already know.' },
          { icon: 'zap', t: 'Smooth experience', d: 'Quick, predictable and easy enough to use without instructions.' },
          { icon: 'target', t: 'Business-focused features', d: 'Functionality chosen for your goals, not padded with extras.' },
          { icon: 'lock', t: 'Secure authentication', d: 'Safe sign-in and protected user data.' },
          { icon: 'bell', t: 'Notifications', d: 'Timely reminders and updates that users actually want.' },
          { icon: 'card', t: 'Payments where required', d: 'Secure payment flows for orders, bookings and subscriptions.' },
          { icon: 'plug', t: 'Backend integration', d: 'Connected to your database, website and business tools.' }
        ]
      },
      {
        kind: 'split', title: 'Before you build an app, make sure you need one',
        body: [
          'Not every idea needs a mobile app. Sometimes a well-built mobile website or a web application serves the same purpose at lower cost. We will tell you honestly which route fits your goal and budget.',
          'If an app is the right answer, we plan the first release around the features that matter most so you can launch, learn from real users, and grow from there.'
        ],
        points: ['Honest advice on app vs. mobile website', 'Focused first release, not an overloaded one', 'Launch support for app stores', 'Ongoing updates and support after release']
      }
    ],
    faqs: [
      ['How long does it take to build a mobile app?', 'It depends on scope. A focused first release is much quicker than a feature-heavy product. After one conversation we can give you a realistic timeline.'],
      ['Do you handle publishing to the app stores?', 'Yes. We prepare the listing, assets and submission and help you through review.'],
      ['Can you improve an app that already exists?', 'Yes — see our app fixing and improvement support. We can pick up unfinished or problematic apps.']
    ],
    related: ['web-applications', 'maintenance', 'website-fixing']
  },
  {
    slug: 'website-fixing',
    group: 'improve',
    name: 'Website & App Fixing',
    icon: 'wrench',
    short: 'Broken pages, login and payment problems, slow sites, crashes, hosting and deployment failures — diagnosed and fixed.',
    seo: {
      title: 'Website & App Bug Fixing Services | Benzo',
      description: 'Website not working? Benzo fixes broken pages, login and payment problems, form errors, slow sites, SSL, hosting and deployment failures in existing sites and apps.'
    },
    eyebrow: 'Website & App Fixing',
    h1: 'Already have a website or app? You may not need to rebuild it.',
    lead: 'Something broken, slow or half-finished? Benzo inspects existing websites and applications, finds the real cause and fixes it — often at a fraction of the cost of starting over.',
    cta: { label: 'Tell Us What’s Broken', href: '/contact/?service=Existing%20Website%20Fix' },
    sections: [
      {
        kind: 'cards', title: 'Problems we fix', intro: 'If it is not listed, describe it anyway. Part of our job is working out what is actually wrong.', cols: 3,
        items: [
          { icon: 'bug', t: 'Website not working correctly', d: 'Pages that error, behave oddly or stopped working after a change.' },
          { icon: 'link', t: 'Broken pages & links', d: 'Missing pages, bad redirects and dead ends that cost you visitors.' },
          { icon: 'lock', t: 'Login problems', d: 'Users who cannot sign in, reset passwords or stay logged in.' },
          { icon: 'card', t: 'Payment issues', d: 'Payment gateways that fail, double-charge or do not confirm orders.' },
          { icon: 'mail', t: 'Form issues', d: 'Enquiry forms that do not send, or messages that never arrive.' },
          { icon: 'plug', t: 'API errors & broken integrations', d: 'Connections between your site and other services that stopped working.' },
          { icon: 'database', t: 'Database issues', d: 'Missing data, slow queries, corrupted records and storage problems.' },
          { icon: 'smartphone', t: 'Mobile responsiveness', d: 'Layouts that break or become unusable on phones and tablets.' },
          { icon: 'gauge', t: 'Slow websites', d: 'Pages that take too long to load on real-world connections.' },
          { icon: 'mobileFix', t: 'Application crashes', d: 'Apps that freeze, close unexpectedly or lose data.' },
          { icon: 'rocket', t: 'Deployment failures', d: 'Updates that will not go live, or break the live site when they do.' },
          { icon: 'server', t: 'Hosting problems', d: 'Downtime, resource limits and unreliable servers.' },
          { icon: 'globe', t: 'Domain configuration', d: 'Domains that do not point correctly or lose connection.' },
          { icon: 'shield', t: 'SSL issues', d: 'Certificate warnings that make visitors leave.' },
          { icon: 'send', t: 'Email configuration', d: 'Business email that goes to spam or does not arrive.' },
          { icon: 'layout', t: 'UI problems', d: 'Buttons, menus and layouts that look wrong or confuse users.' },
          { icon: 'code', t: 'Backend bugs', d: 'Logic errors behind the scenes that cause wrong results.' },
          { icon: 'refresh', t: 'Feature changes', d: 'Modifying or adding to existing features safely.' }
        ]
      },
      {
        kind: 'split', title: 'How we handle a fix',
        body: ['You describe what is wrong — in plain words is fine, screenshots help. We reproduce the issue, identify the cause, tell you what needs doing and what it will take, and then fix it. Where relevant we test around the fix so one repair does not create another problem.'],
        points: ['Tell us the problem', 'We inspect and diagnose', 'You get a clear plan and quote', 'We fix, test and confirm with you']
      },
      {
        kind: 'cards', title: 'Left halfway by a previous developer?', cols: 2,
        items: [
          { icon: 'clipboard', t: 'We review what exists', d: 'We assess the current state of the project honestly: what is usable, what needs repair and what should be replaced.' },
          { icon: 'rocket', t: 'We help you finish', d: 'Where the foundation is sound we complete the work. Where it is not, we explain why and recommend the sensible alternative.' }
        ]
      }
    ],
    faqs: [
      ['Can you fix a website you did not build?', 'Yes. Most of our fixing work is on websites and apps built by someone else. We start with an inspection to understand what is there.'],
      ['Do I need to rebuild everything?', 'Often not. We will tell you plainly if a repair is enough or if a rebuild would genuinely be the better investment.'],
      ['How quickly can you start?', 'Send us the details and we will respond promptly. Urgent problems affecting sales or customers are prioritised.']
    ],
    related: ['performance-optimization', 'maintenance', 'deployment-hosting']
  },
  {
    slug: 'website-redesign',
    group: 'improve',
    name: 'Website Redesign',
    icon: 'refresh',
    short: 'Modernise old, slow or confusing websites to look professional and generate more enquiries.',
    seo: {
      title: 'Website Redesign Services | Benzo',
      description: 'Benzo redesigns outdated, slow or confusing websites — improving design, content structure, mobile experience, performance and search foundations to win more enquiries.'
    },
    eyebrow: 'Website Redesign',
    h1: 'A website that matches the quality of your business.',
    lead: 'If your website looks dated, loads slowly, confuses visitors or brings in few enquiries, a considered redesign can fix the problem without losing the search visibility you have already earned.',
    cta: { label: 'Request a Consultation', href: '/contact/' },
    sections: [
      {
        kind: 'checks', title: 'Signs it may be time for a redesign', cols: 2,
        items: ['The site looks old compared to competitors', 'Pages load slowly', 'It is hard to use on a phone', 'Visitors cannot find what they need', 'Your branding feels weak or inconsistent', 'You receive few enquiries despite visitors', 'Updating content is difficult or risky', 'The site no longer reflects what you do']
      },
      {
        kind: 'cards', title: 'What a Benzo redesign covers', cols: 3,
        items: [
          { icon: 'layout', t: 'UI redesign', d: 'A fresh, professional visual design with consistent typography, colour and spacing.' },
          { icon: 'clipboard', t: 'Content restructuring', d: 'Clearer page structure and wording so visitors understand you quickly.' },
          { icon: 'gauge', t: 'Performance improvement', d: 'Faster loading through lighter pages and optimised media.' },
          { icon: 'smartphone', t: 'Mobile optimisation', d: 'An experience designed for phones, where most of your visitors are.' },
          { icon: 'target', t: 'Conversion improvement', d: 'Clear calls to action and simpler enquiry paths.' },
          { icon: 'search', t: 'SEO improvements', d: 'Better structure and metadata, with redirects that protect existing visibility.' }
        ]
      },
      {
        kind: 'notice', title: 'We protect what is already working',
        body: 'Before changing anything we review your existing pages, traffic sources and search presence. Pages that already bring visitors are kept or redirected properly, so a redesign does not wipe out the visibility you have built.'
      }
    ],
    faqs: [
      ['Will I lose my Google visibility after a redesign?', 'A careful redesign keeps important URLs or redirects them correctly, preserves valuable content and re-submits the sitemap. Short-term fluctuations can still happen, which is why we plan the move carefully.'],
      ['Can you keep my existing content?', 'Yes. We can reuse what works, restructure what does not and help you write what is missing.'],
      ['How long does a redesign take?', 'It depends on the number of pages and how much content needs work. We will give you a clear schedule after reviewing the current site.']
    ],
    related: ['web-development', 'performance-optimization', 'seo']
  },
  {
    slug: 'performance-optimization',
    group: 'improve',
    name: 'Performance Optimisation',
    icon: 'gauge',
    short: 'Speed up slow websites and apps to improve user experience, conversion and search performance.',
    seo: {
      title: 'Website Speed & Performance Optimisation | Benzo',
      description: 'Slow website? Benzo diagnoses and fixes slow pages, heavy images and wasteful resources to improve mobile speed, user experience, conversion and search performance.'
    },
    eyebrow: 'Performance Optimisation',
    h1: 'A faster website keeps more of the visitors you already have.',
    lead: 'Slow pages quietly cost enquiries and sales. Benzo finds out what is slowing your website or application down and fixes it — focusing on real-world speed, especially on mobile.',
    cta: { label: 'Get a Speed Review', href: '/contact/?service=Website' },
    sections: [
      {
        kind: 'cards', title: 'Why speed matters', cols: 4,
        items: [
          { icon: 'users', t: 'Better user experience', d: 'People stay when pages respond quickly.' },
          { icon: 'target', t: 'Better conversion', d: 'Fast pages make it easier to enquire, book or buy.' },
          { icon: 'search', t: 'Better search performance', d: 'Page experience is part of how search engines assess sites.' },
          { icon: 'refresh', t: 'Lower abandonment', d: 'Fewer visitors leave before the page has even loaded.' }
        ]
      },
      {
        kind: 'cards', title: 'What we improve', cols: 3,
        items: [
          { icon: 'search', t: 'Slow page troubleshooting', d: 'We measure and pinpoint the exact causes instead of guessing.' },
          { icon: 'layout', t: 'Image optimisation', d: 'Correct sizes and modern formats without visible quality loss.' },
          { icon: 'smartphone', t: 'Mobile performance', d: 'Testing on realistic phone and network conditions.' },
          { icon: 'zap', t: 'Loading improvements', d: 'Smarter loading order so the important content appears first.' },
          { icon: 'wrench', t: 'Unnecessary resource cleanup', d: 'Removing unused code, plug-ins and third-party scripts that add weight.' },
          { icon: 'gauge', t: 'Core performance improvements', d: 'Addressing the core page-experience measurements that search engines report.' }
        ]
      },
      {
        kind: 'split', title: 'Measured before and after',
        body: ['We record how your site performs before we begin and again afterwards, so you can see exactly what changed. Improvements depend on the starting point and the platform, so we agree sensible targets after the initial review instead of promising a score.'],
        points: ['Baseline measurement on mobile and desktop', 'Prioritised list of fixes by impact', 'Changes made and tested carefully', 'Before-and-after report in plain language']
      }
    ],
    faqs: [
      ['Why is my website slow?', 'The usual causes are oversized images, too many scripts or plug-ins, slow hosting and heavy page design. A review shows which apply to you.'],
      ['Can you guarantee a particular speed score?', 'We commit to measurable improvement and honest reporting. Scores depend on your platform and content, so we do not guarantee specific numbers.'],
      ['Will optimisation change how my site looks?', 'No. The aim is the same site, delivered faster.']
    ],
    related: ['website-fixing', 'seo', 'deployment-hosting']
  },
  {
    slug: 'security-improvements',
    group: 'improve',
    name: 'Security Improvements',
    icon: 'shield',
    short: 'Responsible, business-oriented security reviews and hardening for websites and applications.',
    seo: {
      title: 'Website & Application Security Improvements | Benzo',
      description: 'Benzo helps businesses strengthen website and application security — secure configuration, SSL, security headers, access control, backups and dependency updates.'
    },
    eyebrow: 'Security Improvements',
    h1: 'Sensible security for the systems your business depends on.',
    lead: 'Most security problems come from basic gaps: outdated components, weak access control, missing backups. Benzo reviews your website or application and closes those gaps in a clear, practical way.',
    cta: { label: 'Request a Security Review', href: '/contact/' },
    sections: [
      {
        kind: 'cards', title: 'How we can help', cols: 3,
        items: [
          { icon: 'clipboard', t: 'Basic security review', d: 'A structured check of your site or application for common weaknesses, with a plain-language summary.' },
          { icon: 'lock', t: 'Authentication improvements', d: 'Stronger sign-in and password handling for your users.' },
          { icon: 'users', t: 'Access-control improvements', d: 'Making sure people can only see and do what they should.' },
          { icon: 'wrench', t: 'Secure configuration', d: 'Correct server and application settings instead of risky defaults.' },
          { icon: 'shield', t: 'Website hardening', d: 'Practical measures that reduce exposure to common attacks.' },
          { icon: 'check', t: 'SSL setup', d: 'Encrypted connections, correctly configured and renewed.' },
          { icon: 'file', t: 'Security headers', d: 'Browser-level protections configured properly.' },
          { icon: 'database', t: 'Backup configuration', d: 'Regular backups, stored safely, with recovery that has been tested.' },
          { icon: 'refresh', t: 'Dependency updates', d: 'Updating outdated components that carry known weaknesses.' }
        ]
      },
      {
        kind: 'notice', title: 'Our approach',
        body: 'We work only on systems you own or are authorised to manage, and we agree the scope in writing first. Our work is defensive: reviewing, fixing and strengthening. No system is ever completely risk-free, so we focus on reducing risk sensibly and being straightforward about what remains.'
      }
    ],
    faqs: [
      ['Do you test sites you do not own?', 'No. We only work on systems that belong to you or that you are formally authorised to manage.'],
      ['Can you make my website completely secure?', 'No honest provider can promise that. We significantly reduce common risks and make recovery easier if something goes wrong.'],
      ['My site was hacked. Can you help?', 'Yes. We can help investigate, restore from a clean state, close the gap that was used and put better protections in place.']
    ],
    related: ['maintenance', 'deployment-hosting', 'website-fixing']
  },
  {
    slug: 'business-automation',
    group: 'automate',
    name: 'Business Automation',
    icon: 'zap',
    short: 'Save time and stop missing leads by automating follow-ups, reminders, reports and routine admin.',
    seo: {
      title: 'Business Automation Services | Benzo',
      description: 'Benzo automates lead collection, customer follow-ups, appointment reminders, reports, WhatsApp and email workflows so your team spends less time on repetitive admin.'
    },
    eyebrow: 'Business Automation',
    h1: 'Stop doing by hand what a system can do for you.',
    lead: 'If your team keeps copying data, chasing leads or sending the same reminders, Benzo can set up simple, dependable automation so that work happens on its own and nothing gets missed.',
    cta: { label: 'Talk About Automation', href: '/contact/?service=Automation' },
    sections: [
      {
        kind: 'cards', title: 'What we can automate', cols: 3,
        items: [
          { icon: 'target', t: 'Lead collection', d: 'Enquiries from your website, forms and messages land in one place automatically.' },
          { icon: 'send', t: 'Customer follow-ups', d: 'Timely, consistent follow-up so promising leads do not go cold.' },
          { icon: 'bell', t: 'Notifications', d: 'The right person is alerted the moment something needs attention.' },
          { icon: 'calendar', t: 'Appointment reminders', d: 'Fewer no-shows with automatic confirmations and reminders.' },
          { icon: 'database', t: 'Data entry', d: 'Information moves between systems without retyping.' },
          { icon: 'chart', t: 'Reports', d: 'Daily or weekly summaries generated and delivered for you.' },
          { icon: 'mail', t: 'Email workflows', d: 'Welcome, reminder and follow-up emails that send themselves.' },
          { icon: 'whatsapp', t: 'WhatsApp workflows', d: 'Automatic messages and replies on the channel your customers use.' },
          { icon: 'check', t: 'Internal approvals', d: 'Requests move to the right approver and are tracked to completion.' },
          { icon: 'clipboard', t: 'Repetitive admin tasks', d: 'The routine jobs that eat into every working day.' },
          { icon: 'file', t: 'Document generation', d: 'Quotes, invoices, letters and certificates produced automatically.' },
          { icon: 'message', t: 'Customer enquiries', d: 'Common questions answered quickly, with the rest routed to your team.' }
        ]
      },
      {
        kind: 'cards', title: 'What it means for your business', cols: 3,
        items: [
          { icon: 'clock', t: 'Saves time', d: 'Hours of routine work removed from every week.' },
          { icon: 'users', t: 'Less manual work', d: 'Your people focus on customers, not copy-and-paste.' },
          { icon: 'target', t: 'Fewer missed leads', d: 'Every enquiry is captured and followed up.' },
          { icon: 'zap', t: 'Faster response', d: 'Customers hear back in minutes, not days.' },
          { icon: 'layers', t: 'Better organisation', d: 'Everything is recorded in one consistent place.' },
          { icon: 'shield', t: 'More consistency', d: 'Tasks happen the same way every time.' }
        ]
      },
      {
        kind: 'split', title: 'Start small, see results, then expand',
        body: ['The best automation begins with one painful, repetitive task. We identify it with you, build a simple solution, and make sure it works reliably before moving to the next. You do not need to overhaul your business to benefit.'],
        points: ['Review how work flows today', 'Pick the highest-value task first', 'Build and test the automation', 'Monitor and improve over time']
      }
    ],
    faqs: [
      ['Will my customers know they are talking to an automated system?', 'You decide. Many automations are invisible — reminders, confirmations, internal notifications. Where a message is automated we keep it helpful and clear.'],
      ['Do I need to change my current tools?', 'Usually not. We connect the tools you already use wherever possible.'],
      ['What if something goes wrong?', 'We build in checks and alerts, and offer maintenance so automations keep running reliably.']
    ],
    related: ['web-applications', 'ai-solutions', 'maintenance']
  },
  {
    slug: 'ai-solutions',
    group: 'automate',
    name: 'AI Solutions',
    icon: 'spark',
    short: 'Practical AI assistants, document processing and smart search — applied where they genuinely help.',
    seo: {
      title: 'Practical AI Solutions for Business | Benzo',
      description: 'Benzo builds practical AI tools for business — chat and support assistants, document processing, knowledge assistants, smart search and workflow assistants.'
    },
    eyebrow: 'AI Solutions',
    h1: 'AI that solves a specific business problem.',
    lead: 'AI is useful when it is applied to a clear task. Benzo helps you decide where it fits, builds it carefully, and keeps your team in control of the result.',
    cta: { label: 'Discuss an AI Idea', href: '/contact/?service=AI%20Solution' },
    sections: [
      {
        kind: 'cards', title: 'Practical uses', cols: 3,
        items: [
          { icon: 'message', t: 'AI chat assistants', d: 'Answer common questions on your website at any hour and pass complex ones to your team.' },
          { icon: 'users', t: 'Customer support assistants', d: 'Help your support staff draft replies and find answers faster.' },
          { icon: 'file', t: 'Document processing', d: 'Read, sort and summarise invoices, forms and long documents.' },
          { icon: 'database', t: 'Business knowledge assistants', d: 'Let staff ask questions about policies, procedures and past work.' },
          { icon: 'search', t: 'Automated information extraction', d: 'Pull key details out of emails, PDFs and scans into structured records.' },
          { icon: 'star', t: 'Recommendation systems', d: 'Suggest relevant products, content or next steps to users.' },
          { icon: 'compass', t: 'Smart search', d: 'Help visitors find what they mean, not just what they typed.' },
          { icon: 'zap', t: 'Workflow assistants', d: 'Add intelligent steps to your existing processes.' },
          { icon: 'layers', t: 'Internal AI tools', d: 'Focused tools that make your own team more effective.' }
        ]
      },
      {
        kind: 'notice', title: 'Our approach to AI',
        body: 'We start with the problem, not the technology. If a simpler solution works better, we will say so. Where AI is the right tool we design it with sensible limits: people review important outputs, sensitive data is handled carefully, and you are told clearly what the system can and cannot do.'
      },
      {
        kind: 'checks', title: 'What to expect', cols: 2,
        items: ['A clear use case and success measure before building', 'Honest guidance on accuracy and limits', 'Human review for important decisions', 'Careful handling of business and customer data', 'Integration with your existing website or tools', 'Support after launch as needs change']
      }
    ],
    faqs: [
      ['Is AI right for my business?', 'Only if there is a repetitive, information-heavy task it can genuinely help with. We will tell you honestly if it is not worth it yet.'],
      ['Will an AI assistant always give correct answers?', 'No AI system is perfect. We design for accuracy where it matters, limit what the assistant answers, and add review steps for important outputs.'],
      ['Is my business data safe?', 'We design with data protection in mind and explain exactly what data is used and where it goes before we build.']
    ],
    related: ['business-automation', 'web-applications', 'security-improvements']
  },
  {
    slug: 'seo',
    group: 'grow',
    name: 'SEO Services',
    icon: 'search',
    short: 'Technical and on-page SEO foundations that improve your ability to appear in relevant searches.',
    seo: {
      title: 'SEO Services for Business Websites | Benzo',
      description: 'Benzo provides technical SEO, on-page optimisation, structured data, sitemap, speed improvements and Search Console and analytics setup for business websites.'
    },
    eyebrow: 'SEO Services',
    h1: 'Be easier for the right customers to find.',
    lead: 'We build strong technical and content foundations that improve your ability to appear in relevant searches — properly structured pages, fast loading, clear information and sound tracking.',
    cta: { label: 'Request an SEO Review', href: '/contact/?service=SEO' },
    sections: [
      {
        kind: 'cards', title: 'What our SEO work includes', cols: 3,
        items: [
          { icon: 'wrench', t: 'Technical SEO', d: 'Crawlability, indexing, redirects and site structure that search engines can understand.' },
          { icon: 'file', t: 'On-page SEO', d: 'Pages written and structured around what your customers search for.' },
          { icon: 'layout', t: 'Titles & meta descriptions', d: 'Unique, accurate snippets that explain each page in search results.' },
          { icon: 'layers', t: 'Heading structure', d: 'A logical heading hierarchy for readers and search engines.' },
          { icon: 'link', t: 'Clean URLs', d: 'Short, readable addresses that describe the page.' },
          { icon: 'compass', t: 'Sitemap & indexing', d: 'A correct sitemap and robots setup so important pages are discovered.' },
          { icon: 'smartphone', t: 'Mobile optimisation', d: 'A site that works well on the devices most people search from.' },
          { icon: 'gauge', t: 'Speed improvement', d: 'Faster pages for visitors and for search.' },
          { icon: 'pin', t: 'Local SEO preparation', d: 'Location pages and business information organised for local searches.' },
          { icon: 'building', t: 'Structured business information', d: 'Machine-readable details such as name, services, hours and contact.' },
          { icon: 'palette', t: 'Image optimisation', d: 'Compressed images with descriptive alternative text.' },
          { icon: 'clipboard', t: 'Content optimisation', d: 'Improving existing content so it answers real questions clearly.' },
          { icon: 'search', t: 'Search Console setup', d: 'Connected and verified so you can see how search engines view your site.' },
          { icon: 'chart', t: 'Analytics setup', d: 'Clear measurement of visits and enquiries.' }
        ]
      },
      {
        kind: 'notice', title: 'An honest note about rankings',
        body: 'No one can guarantee a first position on Google, and anyone who does is not being straight with you. What we do is build the technical and content foundations that improve your ability to appear in relevant searches, then measure and refine. Results depend on your market, your competition and time.'
      },
      {
        kind: 'split', title: 'SEO built into the work, not added at the end',
        body: ['When Benzo builds or redesigns your website, search foundations are part of the build — not an afterthought. For existing websites, we begin with a review, fix the issues that matter most and set up tracking so progress is visible.'],
        points: ['Review of your current search presence', 'Priority fixes ranked by impact', 'Content and structure improvements', 'Tracking and clear reporting']
      }
    ],
    faqs: [
      ['How long does SEO take to show results?', 'It varies. Technical fixes can help quickly, while content and authority build over months. We will set realistic expectations after reviewing your site.'],
      ['Can you get me to number one on Google?', 'We cannot promise any specific position. We build foundations that improve your chances of appearing for relevant searches.'],
      ['Do you write content?', 'We can improve existing content and help produce new pages and articles that serve real customer questions.']
    ],
    related: ['local-business-seo', 'performance-optimization', 'website-redesign']
  },
  {
    slug: 'local-business-seo',
    group: 'grow',
    name: 'Local Business SEO',
    icon: 'pin',
    short: 'Help clinics, schools, shops and service providers be found by customers searching nearby.',
    seo: {
      title: 'Local SEO for Clinics, Shops & Service Businesses | Benzo',
      description: 'Local SEO preparation for clinics, real-estate firms, schools, restaurants and service providers: accurate information, service-area pages and enquiry conversion.'
    },
    eyebrow: 'Local Business SEO',
    h1: 'Be found by customers who are searching close to you.',
    lead: 'Local customers search for a nearby clinic, school or service in the moment they need it. Benzo prepares your website and online presence so you are clear, consistent and easy to contact.',
    cta: { label: 'Improve My Local Presence', href: '/contact/?service=SEO' },
    sections: [
      {
        kind: 'chips', title: 'Built for local businesses', intro: 'Particularly valuable for:',
        items: ['Clinics', 'Real-estate businesses', 'Interior designers', 'Restaurants', 'Schools', 'Coaching centres', 'Service providers', 'Local shops', 'Consultants']
      },
      {
        kind: 'cards', title: 'What we help you improve', cols: 3,
        items: [
          { icon: 'pin', t: 'Local search presence', d: 'Clear signals about where you are and who you serve.' },
          { icon: 'file', t: 'Website information', d: 'Complete, accurate pages describing your services and location.' },
          { icon: 'phone', t: 'Contact information', d: 'Phone, address and hours that are easy to find and identical everywhere.' },
          { icon: 'compass', t: 'Service-area pages', d: 'Genuinely useful pages for the areas you serve — never thin copies.' },
          { icon: 'building', t: 'Business profile consistency', d: 'The same name, address and phone across your site and online listings.' },
          { icon: 'target', t: 'Local enquiry conversion', d: 'Click-to-call, WhatsApp and enquiry forms that turn visits into contacts.' }
        ]
      },
      {
        kind: 'notice', title: 'What we need from you',
        body: 'Local visibility depends on accurate facts about your business. We will ask for your service areas, opening hours, services and real photographs, and we will guide you through claiming and updating your business listing so everything matches your website.'
      }
    ],
    faqs: [
      ['Do I need a physical shop for local SEO?', 'Not always. Service-area businesses can also improve local visibility. We will advise based on how you actually serve customers.'],
      ['Can you create pages for every area I serve?', 'We build area pages only when each can carry unique, useful information. We avoid near-identical pages because they help neither visitors nor search.']
    ],
    related: ['seo', 'web-development', 'maintenance']
  },
  {
    slug: 'deployment-hosting',
    group: 'run',
    name: 'Deployment & Hosting',
    icon: 'server',
    short: 'Take websites and applications live — domain, DNS, SSL, hosting, email, backups, monitoring and migration.',
    seo: {
      title: 'Website & App Deployment and Hosting Support | Benzo',
      description: 'Benzo deploys websites and applications to production — domain, DNS, SSL, hosting, database, email, backups, monitoring — and migrates projects between hosting providers.'
    },
    eyebrow: 'Deployment & Hosting',
    h1: 'From finished project to reliable, public production.',
    lead: 'Building something is only half the job. Benzo takes websites and applications live, configures everything behind the scenes, and keeps it running reliably.',
    cta: { label: 'Get Deployment Help', href: '/contact/?service=Deployment' },
    sections: [
      {
        kind: 'cards', title: 'What we set up', cols: 3,
        items: [
          { icon: 'globe', t: 'Website deployment', d: 'Your site published safely and tested on the live address.' },
          { icon: 'rocket', t: 'Application deployment', d: 'Applications released to production with a repeatable process.' },
          { icon: 'link', t: 'Domain setup', d: 'Your domain connected correctly to your project.' },
          { icon: 'compass', t: 'DNS configuration', d: 'Records set up properly for site, email and verification.' },
          { icon: 'lock', t: 'SSL configuration', d: 'Secure HTTPS with certificates that renew automatically.' },
          { icon: 'server', t: 'Hosting & server setup', d: 'Suitable hosting chosen and configured for your needs.' },
          { icon: 'database', t: 'Database deployment', d: 'Databases created, secured and connected.' },
          { icon: 'mail', t: 'Email configuration', d: 'Professional business email that reaches inboxes.' },
          { icon: 'refresh', t: 'Backup setup', d: 'Automatic backups with a recovery you can rely on.' },
          { icon: 'eye', t: 'Monitoring setup', d: 'Alerts if your site or service goes down.' },
          { icon: 'wrench', t: 'Production troubleshooting', d: 'Diagnosing problems that only appear on the live system.' }
        ]
      },
      {
        kind: 'split', title: 'Moving to a different host?',
        body: ['If your current hosting is slow, expensive or unreliable, we can migrate your website or application to a better provider with minimal disruption. We plan the move, copy and test everything first, then switch over carefully.'],
        points: ['Review of the current setup', 'Test migration before the switch', 'DNS and email handled with care', 'Verification after go-live']
      }
    ],
    faqs: [
      ['Can you deploy a project that someone else built?', 'Yes. We review it first to make sure it is ready for production.'],
      ['Will my website go offline during a migration?', 'We plan migrations to avoid or minimise downtime and tell you in advance about any expected interruptions.'],
      ['Do I own my domain and hosting accounts?', 'Yes — we recommend accounts are registered in your name, and we work with the access you give us.']
    ],
    related: ['maintenance', 'security-improvements', 'website-fixing']
  },
  {
    slug: 'maintenance',
    group: 'run',
    name: 'Maintenance & Support',
    icon: 'lifebuoy',
    short: 'Recurring care plans for updates, backups, security, monitoring, changes and support.',
    seo: {
      title: 'Website Maintenance & Support Plans | Benzo',
      description: 'Benzo maintenance plans cover bug fixes, updates, backups, performance and security checks, monitoring, content changes and support for websites and apps.'
    },
    eyebrow: 'Maintenance & Support',
    h1: 'Keep your website and software healthy after launch.',
    lead: 'Websites and applications need regular care. Benzo’s maintenance plans keep your systems updated, backed up, secure and quick, with a real team to call when something comes up.',
    cta: { label: 'Request Pricing', href: '/contact/?service=Maintenance' },
    sections: [
      {
        kind: 'cards', title: 'What maintenance covers', cols: 3,
        items: [
          { icon: 'bug', t: 'Bug fixes', d: 'Problems found after launch are corrected.' },
          { icon: 'refresh', t: 'Updates', d: 'Software, components and content platforms kept current.' },
          { icon: 'database', t: 'Backups', d: 'Regular copies so you can recover quickly.' },
          { icon: 'gauge', t: 'Performance checks', d: 'Regular review to stop slowdowns creeping in.' },
          { icon: 'shield', t: 'Security updates', d: 'Patches applied and risks reduced.' },
          { icon: 'file', t: 'Content changes', d: 'Text, images and page updates made for you.' },
          { icon: 'eye', t: 'Monitoring', d: 'We are alerted if your site goes down.' },
          { icon: 'rocket', t: 'Small feature updates', d: 'Minor improvements added as your needs change.' },
          { icon: 'lifebuoy', t: 'Technical support', d: 'A real person to ask when something does not look right.' }
        ]
      },
      {
        kind: 'plans', title: 'Care plans', intro: 'Pricing depends on your requirements, so we quote each plan individually.',
        items: [
          { name: 'Basic Care', for: 'For simple business websites.', points: ['Regular updates and backups', 'Uptime monitoring', 'Basic security checks', 'Support for small issues'] },
          { name: 'Business Care', for: 'For growing businesses.', points: ['Everything in Basic Care', 'Performance and SEO health checks', 'A monthly allowance for content changes', 'Small improvements and feature updates'], featured: true },
          { name: 'Priority Care', for: 'For business-critical applications.', points: ['Everything in Business Care', 'Priority response for urgent issues', 'Deeper monitoring and security review', 'Planned improvements and technical guidance'] }
        ]
      }
    ],
    faqs: [
      ['Do I need a maintenance plan?', 'If your website or application matters to your business, yes. Unmaintained software slowly becomes slower, less secure and more fragile.'],
      ['Can I get maintenance for a site Benzo did not build?', 'Usually, after a short inspection to understand what we would be looking after.'],
      ['Can I change plans later?', 'Yes, plans can be adjusted as your needs change.']
    ],
    related: ['security-improvements', 'deployment-hosting', 'website-fixing']
  }
];

export const bySlug = Object.fromEntries(services.map((s) => [s.slug, s]));
