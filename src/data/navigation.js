export const mainNavigation = [
  { name: 'Home', href: '/' },
  {
    name: 'Services',
    dropdown: [
      { name: 'All Services', href: '/services' },
      { name: 'Export Supplements', href: '/export' },
      { name: 'Custom Supplement Builder', href: '/customize' },
    ],
  },
  {
    name: 'Products',
    dropdown: [
      { name: 'Performance Nutrition', href: '/products/sports' },
      { name: 'Pediatric Care', href: '/products/pediatric' },
      { name: 'Ortho Care', href: '/products/orthopedics' },
      { name: 'Immunity Boosters', href: '/products/immunity' },
      { name: 'Cardiac Wellness', href: '/products/cardio' },
      { name: 'Beauty & Wellness', href: '/products/hair-skin' },
      { name: 'Hepatic Wellness', href: '/products/hepatic' },
      { name: 'Optical Health', href: '/products/eye' },
    ],
  },
  {
    name: 'Range Of Products',
    dropdown: [
      { name: 'Powder', href: '/range-of-products/powder/' },
      { name: 'Softgel', href: '/range-of-products/softgel/' },
      { name: 'Sachet', href: '/range-of-products/sachet/' },
      { name: 'Tablet', href: '/range-of-products/tablet/' },
      { name: 'Capsule', href: '/range-of-products/capsule/' },
    ],
  },
  { name: 'Blog', href: '/blog' },
  { name: 'Portal', href: '/portal/dashboard' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
];

export const footerCapabilities = [
  ['Custom Formulation', '/services/custom-formulation'],
  ['Private Labeling', '/services/private-labeling'],
  ['Third-Party Manufacturing', '/services/third-party-mfg'],
  ['Packaging Design', '/services/packaging-design'],
  ['Lab Testing', '/services/lab-testing'],
];

export const footerQuickLinks = [
  ['About Us', '/about'],
  ['Products', '/products'],
  ['Range Of Products', '/range-of-products'],
  ['Certifications', '/certifications'],
  ['Our Process', '/process'],
  ['Blog', '/blog'],
  ['Contact Us', '/contact'],
];
