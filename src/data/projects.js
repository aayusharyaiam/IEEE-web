// Student projects featured on the site.
// Facts come from the project's own repository (README, lib/constants.ts,
// lib/energy-data.ts); conservation figures are the thesis's projections,
// not realised savings.

export const featuredProject = {
  slug: 'energy-audit',
  title: 'BIT Patna Energy Audit',
  thesis: 'Electrical Energy Auditing of BIT Mesra Off-Campus Patna',
  summary:
    'A public research dashboard that turns a campus energy-audit thesis into something anyone can read: monthly consumption and billed cost, how the campus is supplied, which load groups were audited, and where solar retrofits could save energy.',
  author: {
    name: 'Bhabya Bharti',
    programme: 'B.Tech, Electrical & Electronics Engineering',
    year: 'Final year · Class of 2026',
  },
  supervisors: ['Dr. Kumar Nikhil', 'Dr. Mayank Kumar'],
  image: '/projects/energy-audit-dashboard.webp',
  imageAlt: 'Home page of the BIT Patna Energy Audit dashboard: “Understanding how our campus uses energy”, with a campus supply map of two transformers feeding seven load groups',
  liveUrl: 'https://energy-audit-specs.vercel.app',
  codeUrl: 'https://github.com/aayusharyaiam/energy-audit-specs',
  facts: [
    { value: '650', unit: 'kVA', label: 'Supply from two transformers' },
    { value: '7', unit: '', label: 'Campus load groups audited' },
    { value: '13', unit: 'months', label: 'Of electricity bills analysed' },
  ],
  stack: ['Next.js', 'TypeScript', 'Firebase', 'Recharts'],
};
