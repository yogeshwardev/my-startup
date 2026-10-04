// Central business settings. Replace every value marked PLACEHOLDER before launch.
// `npm run build` prints a warning for each placeholder that is still in use.

export const site = {
  name: 'Benzo',
  tagline: 'Digital products, software and technical solutions',
  url: process.env.SITE_URL || 'https://benzo.example', // PLACEHOLDER – your real domain, no trailing slash
  email: 'hello@benzo.example', // PLACEHOLDER
  phone: '+91 75693 63309',
  whatsapp: '917569363309', // digits only, with country code
  hours: 'Monday – Saturday, 9:30 AM – 6:30 PM IST', // PLACEHOLDER – confirm
  hoursSchema: { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:30', closes: '18:30' },
  address: { locality: 'Chennai', region: 'Tamil Nadu', country: 'IN' },
  // Where the enquiry form posts JSON. Leave empty to let visitors send via WhatsApp or email instead.
  formEndpoint: '', // PLACEHOLDER – e.g. a Formspree / Basin / own API URL
  social: [
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/company/benzo' }, // PLACEHOLDER
    { name: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/benzo' }, // PLACEHOLDER
    { name: 'X', icon: 'x', url: 'https://x.com/benzo' }, // PLACEHOLDER
    { name: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/benzo' } // PLACEHOLDER
  ],
  budgets: ['Not sure yet', 'Under ₹25,000', '₹25,000 – ₹75,000', '₹75,000 – ₹2,00,000', '₹2,00,000 – ₹5,00,000', 'Above ₹5,00,000'],
  serviceOptions: ['Website', 'Web Application', 'Mobile App', 'Existing Website Fix', 'Existing App Fix', 'Automation', 'AI Solution', 'SEO', 'Deployment', 'Maintenance', 'Other'],
  // Add real client quotes here (with permission) and a testimonials section appears automatically.
  // Shape: { quote: '…', name: '…', role: '…', company: '…' }
  testimonials: [],
  lastUpdated: '2026-10-10'
};

export const placeholders = () => {
  const warn = [];
  if (site.url.includes('benzo.example')) warn.push('site.url (canonical URLs, sitemap, social previews)');
  if (site.email.includes('benzo.example')) warn.push('site.email');
  if (!site.formEndpoint) warn.push('site.formEndpoint (forms fall back to WhatsApp / email)');
  return warn;
};
