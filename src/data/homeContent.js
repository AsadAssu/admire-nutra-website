import {
  BadgeCheck,
  Boxes,
  ClipboardCheck,
  Factory,
  FlaskConical,
  Leaf,
  Microscope,
  PackageCheck,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

export const capabilities = [
  { title: 'Expertise in Bulk Supplements', text: 'Scalable powder, capsule and tablet production backed by controlled processes.', image: '/manufacuting-unit-image.png', icon: Factory },
  { title: '200+ Products', text: 'Market-ready nutraceutical formulations across wellness and performance categories.', image: '/Sports Nutrition.jpeg', icon: Boxes },
  { title: 'R&D Center', text: 'Custom formulations developed for taste, stability, efficacy and market positioning.', image: '/Reverse Engineering.jpeg', icon: FlaskConical },
  { title: 'Sustainable Manufacturing', text: 'Thoughtful sourcing and packaging choices designed to reduce environmental impact.', image: '/Sustainable Packaging.jpeg', icon: Leaf },
  { title: 'R&D Driven Product Excellence', text: 'Science-led development supported by ingredient and finished-product testing.', image: '/Future of Whey.jpeg', icon: Microscope },
  { title: 'Trusted Industry Leaders', text: 'Confidential manufacturing support with transparent communication at every stage.', image: '/Leader-men1.png', icon: BadgeCheck },
  { title: 'Certification & Compliance', text: 'Documented systems aligned with GMP, ISO, HACCP, FSSAI and FDA requirements.', image: '/Iso-certificates-logo.png', icon: ShieldCheck },
  { title: 'Clean & Secure Approach', text: 'Controlled production, traceable materials and quality checks for every batch.', image: '/Plant Based.webp', icon: ClipboardCheck },
  { title: 'Global Reach', text: 'Export-ready documentation, flexible packaging and dependable logistics support.', image: '/Scaling MOQs.jpeg', icon: PackageCheck },
];

export const categories = [
  { title: 'Eye Care', image: '/blog-post2.jpeg', href: '/products/eye' },
  { title: 'Hair & Skin Care', image: '/Leader-women.png', href: '/products/hair-skin' },
  { title: 'Sports Supplements', image: '/Sports Nutrition.jpeg', href: '/products/sports' },
];

export const productRanges = [
  { title: 'Capsules', image: '/blog-post1.jpeg' },
  { title: 'Powders', image: '/protein-image.jpeg' },
  { title: 'Tablets', image: '/blog-post3.jpeg' },
  { title: 'Sachets', image: '/Sustainable Packaging.jpeg' },
  { title: 'Custom Packs', image: '/Plant Based.webp' },
];

export const solutions = [
  'Sports Nutrition',
  'Pediatric Nutrition',
  'Beauty & Skin Care',
  'Health & Wellness',
  'Women’s Health',
  'Men’s Health',
  'Eye Care',
  'Bone & Joint Care',
];

export const reasons = [
  { title: 'GMP-Compliant Infrastructure', icon: ShieldCheck },
  { title: 'Advanced R&D Support', icon: Microscope },
  { title: 'Multiple Dosage Forms', icon: FlaskConical },
  { title: 'HACCP & ISO Certified', icon: BadgeCheck },
  { title: 'High-Quality Raw Materials', icon: Leaf },
  { title: 'Diverse Product Portfolio', icon: Boxes },
  { title: 'Trusted Quality Control', icon: ClipboardCheck },
  { title: 'Custom Formulation', icon: Sparkles },
];

export const manufacturingProcess = [
  ['01', 'Share Your Product Requirement', 'Tell us your category, target customer, ingredients, dosage form, quantity and packaging goals.'],
  ['02', 'Formula & Commercial Planning', 'Our team recommends a stock or custom formula and prepares the commercial scope.'],
  ['03', 'Sampling & Approval', 'Review flavour, texture, packaging and label details before approving the final specification.'],
  ['04', 'Manufacturing & Quality Checks', 'Raw materials, in-process controls and finished goods are checked against the approved standard.'],
  ['05', 'Packaging & Dispatch', 'The approved batch is packed, documented and prepared for safe delivery.'],
];

export const faqs = [
  ['What is third-party nutraceutical manufacturing?', 'It allows your brand to launch products through an experienced manufacturer that handles formulation, sourcing, production, quality and packaging.'],
  ['Can you develop a custom formula for my brand?', 'Yes. Our team can tailor ingredients, flavour, dosage form and pack format to your positioning and compliance needs.'],
  ['What products can Admire Nutra manufacture?', 'We support capsules, tablets, powders, sports nutrition, wellness products and several condition-focused nutraceutical categories.'],
  ['Do you provide packaging and label support?', 'Yes. We support container selection, packaging design coordination, compliant label review and finished-product packing.'],
  ['How do I request pricing or samples?', 'Use the enquiry form below with your requirements. Our team will contact you with the next steps.'],
];


export const certificationHighlights = [
  { title: 'WHO-GMP Certified Facility', certificate: '/certificates/ADMIRE NUTRA GMP FINAL.pdf' },
  { title: 'ISO Quality Management', certificate: '/certificates/ADMIRE NUTRA 9001 FINAL.pdf' },
  { title: 'FSSAI Licensed Manufacturing', certificate: '/certificates/Certificate ADMIRE NUTRA.pdf' },
  { title: 'HACCP Food Safety Systems', certificate: '/certificates/ADMIRE NUTRA HACCP FINAL.pdf' },
];

export const certificationLogos = [
  { image: '/Iso-certificates-logo.png', name: 'ISO', certificate: '/certificates/ADMIRE NUTRA 9001 FINAL.pdf' },
  { image: '/Fssai-certificates-logo.png', name: 'FSSAI', certificate: '/certificates/Certificate ADMIRE NUTRA.pdf' },
  { image: '/Gmp-certificates-logo.jpeg', name: 'GMP', certificate: '/certificates/ADMIRE NUTRA GMP FINAL.pdf' },
  { image: '/Haccp-certificates-logo.png', name: 'HACCP', certificate: '/certificates/ADMIRE NUTRA HACCP FINAL.pdf' },
  { image: '/Fda-certificates-logo.jpeg', name: 'FDA', certificate: '/certificates/ADMIRE NUTRA FDA.pdf' },
];
