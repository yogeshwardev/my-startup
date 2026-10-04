// Content reused across several pages.

export const helpCategories = [
  { icon: 'globe', t: 'Build a new website', href: '/services/web-development/' },
  { icon: 'smartphone', t: 'Build a mobile app', href: '/services/mobile-apps/' },
  { icon: 'layers', t: 'Create a business system', href: '/services/web-applications/' },
  { icon: 'refresh', t: 'Improve an existing product', href: '/services/website-redesign/' },
  { icon: 'wrench', t: 'Fix bugs and technical issues', href: '/services/website-fixing/' },
  { icon: 'zap', t: 'Automate repetitive work', href: '/services/business-automation/' },
  { icon: 'gauge', t: 'Improve website performance', href: '/services/performance-optimization/' },
  { icon: 'search', t: 'Improve search visibility', href: '/services/seo/' },
  { icon: 'rocket', t: 'Deploy an application', href: '/services/deployment-hosting/' },
  { icon: 'lifebuoy', t: 'Maintain an existing system', href: '/services/maintenance/' }
];

export const process = [
  { t: 'Understand', d: 'You explain the idea, business or problem. We listen, ask questions and learn how your business works.' },
  { t: 'Plan', d: 'We identify the best solution, define the scope and agree timelines and cost before work begins.' },
  { t: 'Design', d: 'We prepare the user experience and overall structure so you can see and approve the direction.' },
  { t: 'Build', d: 'We develop the website, application, automation or system, sharing progress as we go.' },
  { t: 'Test', d: 'We test functionality, mobile usability, performance and the workflows that matter most.' },
  { t: 'Launch', d: 'We deploy the finished solution publicly and make sure everything works on the live address.' },
  { t: 'Support', d: 'We provide maintenance and improvements for as long as you need them.' }
];

export const whyBenzo = [
  { icon: 'users', t: 'One team for design, development and support', d: 'No handoffs between agencies. The people who build it also look after it.' },
  { icon: 'layout', t: 'Custom solutions, not generic templates', d: 'Built around your customers, your process and your goals.' },
  { icon: 'target', t: 'Business-focused development', d: 'Every decision is judged by what it does for your business.' },
  { icon: 'wrench', t: 'Support for existing systems', d: 'We improve and repair what you have, not only build new things.' },
  { icon: 'message', t: 'Clear project communication', d: 'Plain language, regular updates and no surprises.' },
  { icon: 'smartphone', t: 'Responsive by default', d: 'Everything works properly on phones, tablets and desktops.' },
  { icon: 'search', t: 'SEO-conscious development', d: 'Search foundations are built in, not bolted on.' },
  { icon: 'gauge', t: 'Performance-focused implementation', d: 'Fast pages and efficient systems from the start.' },
  { icon: 'lifebuoy', t: 'Long-term maintenance', d: 'Plans that keep your systems healthy after launch.' },
  { icon: 'layers', t: 'Scalable solutions', d: 'Foundations that can grow as your business does.' }
];

export const askBenzo = [
  'I need a website for my company.',
  'My website is very slow.',
  'I need a mobile app.',
  'My existing developer left the project unfinished.',
  'I need an admin dashboard.',
  'I want my business process automated.',
  'My website is not appearing on Google.',
  'My payment gateway is not working.',
  'I need a booking system.',
  'I need a school management system.',
  'I want to modernise my old website.',
  'I have an idea but don’t know how to build it.',
  'My application has bugs.',
  'I need to move my project to production.'
];

export const values = [
  { icon: 'star', t: 'Quality', d: 'We would rather deliver fewer things well than many things badly.' },
  { icon: 'shield', t: 'Reliability', d: 'We do what we say, when we say, and tell you early if plans change.' },
  { icon: 'message', t: 'Clear communication', d: 'Plain language, honest updates and answers you can act on.' },
  { icon: 'wrench', t: 'Practical problem solving', d: 'We look for the simplest solution that genuinely solves the problem.' },
  { icon: 'lock', t: 'Security', d: 'We treat your data and your customers’ data with care.' },
  { icon: 'layers', t: 'Maintainability', d: 'We build things that can be understood, changed and extended later.' },
  { icon: 'lifebuoy', t: 'Long-term support', d: 'We stay available after launch because systems need ongoing care.' }
];

export const faqs = {
  general: [
    ['How much does a website cost?', 'The cost depends on the number of pages, the features you need, how much content must be written and whether it includes custom functionality such as booking or e-commerce. We do not publish fixed prices because every project is different. Describe what you need and we will give you a clear written quote.'],
    ['How long does development take?', 'A focused business website typically takes a few weeks, while custom applications take longer depending on scope. After an initial conversation we give you a realistic schedule, and we build larger projects in stages so you see progress early.'],
    ['Can Benzo fix my existing website?', 'Yes. Fixing and improving existing websites and apps is a core part of our work. We inspect the problem first, then tell you honestly whether a repair or a rebuild makes more sense.'],
    ['Can Benzo maintain my website after launch?', 'Yes. Our care plans cover updates, backups, security, monitoring, content changes and support. This applies to websites we build and often to those built by others.'],
    ['Do you build mobile apps?', 'Yes — customer apps, staff apps, booking apps, e-commerce apps and more, including secure login, notifications, payments and connection to a backend.'],
    ['Can you work on an unfinished project?', 'Yes. We review what has been built, tell you what is usable and what is not, and then help you finish it or recommend the sensible alternative.'],
    ['Do you help with domains and hosting?', 'Yes. We handle domain setup, DNS, SSL, hosting, email, backups, monitoring and migration between providers.'],
    ['Can you improve website speed?', 'Yes. We measure what is slowing the site down, fix the causes — such as heavy images and unnecessary scripts — and report the improvement.'],
    ['Do you provide SEO?', 'Yes. We build technical and content foundations that improve your ability to appear in relevant searches. We never guarantee a specific Google position.'],
    ['Can you automate business processes?', 'Yes. Common examples include lead capture, follow-ups, appointment reminders, reports and approvals. We usually start with one repetitive task and expand from there.'],
    ['Can you integrate payment systems?', 'Yes. We can integrate payment gateways into websites and apps, and repair payment flows that are failing.'],
    ['Can you redesign an existing website?', 'Yes. We modernise design, structure, speed and mobile experience while protecting the search visibility the site already has.']
  ]
};

export const pick = (list, idx) => idx.map((i) => list[i]);
