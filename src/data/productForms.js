export const productForms = [
  {
    id: 'powder',
    name: 'Powder',
    image: '/protein-image.jpeg',
    eyebrow: 'Flexible powdered nutrition',
    title: 'Powder Manufacturing',
    description: 'Custom-blended nutrition powders developed for consistent taste, solubility, serving accuracy and scalable production.',
    features: ['Protein and wellness blends', 'Custom flavour development', 'Jar, pouch and bulk packing', 'Controlled blending and testing'],
    demoProducts: [
      { name: 'Premium Whey Protein', category: 'Sports Nutrition', pack: '1 kg Jar' },
      { name: 'Daily Greens Blend', category: 'Health & Wellness', pack: '300 g Jar' },
      { name: 'Electrolyte Hydration Mix', category: 'Active Nutrition', pack: '250 g Pouch' },
    ],
  },
  {
    id: 'softgel',
    name: 'Softgel',
    image: '/blog-post2.jpeg',
    eyebrow: 'Convenient liquid delivery',
    title: 'Softgel Product Solutions',
    description: 'Market-ready softgel concepts for oil-soluble nutrients and consumer-friendly daily supplementation.',
    features: ['Oil-based formulations', 'Easy-to-swallow formats', 'Multiple count options', 'Quality-focused partner sourcing'],
    demoProducts: [
      { name: 'Omega 3 Fish Oil', category: 'Heart Wellness', pack: '60 Softgels' },
      { name: 'Vitamin D3 2000 IU', category: 'Daily Wellness', pack: '90 Softgels' },
      { name: 'CoQ10 Complex', category: 'Active Ageing', pack: '60 Softgels' },
    ],
  },
  {
    id: 'sachet',
    name: 'Sachet',
    image: '/Sustainable Packaging.jpeg',
    eyebrow: 'Portable single servings',
    title: 'Sachet Manufacturing',
    description: 'Precisely portioned sachets designed for sampling, travel, daily convenience and controlled serving sizes.',
    features: ['Single-serve packaging', 'Custom printed laminates', 'Powder and granule formats', 'Retail-ready secondary packing'],
    demoProducts: [
      { name: 'Instant Energy Drink Mix', category: 'Energy', pack: '20 Sachets' },
      { name: 'Collagen Beauty Blend', category: 'Beauty Nutrition', pack: '30 Sachets' },
      { name: 'ORS Hydration Formula', category: 'Hydration', pack: '10 Sachets' },
    ],
  },
  {
    id: 'tablet',
    name: 'Tablet',
    image: '/blog-post3.jpeg',
    eyebrow: 'Reliable solid dosage',
    title: 'Tablet Manufacturing',
    description: 'Consistent tablet products created around practical dosage, stability, coating and packaging requirements.',
    features: ['Coated and uncoated options', 'Multiple shapes and sizes', 'Batch consistency checks', 'Bottle and blister support'],
    demoProducts: [
      { name: 'Daily Multivitamin', category: 'General Wellness', pack: '60 Tablets' },
      { name: 'Calcium + Vitamin D3', category: 'Bone Health', pack: '60 Tablets' },
      { name: 'Vitamin C + Zinc', category: 'Immunity', pack: '30 Tablets' },
    ],
  },
  {
    id: 'capsule',
    name: 'Capsule',
    image: '/blog-post1.jpeg',
    eyebrow: 'Clean, precise delivery',
    title: 'Capsule Manufacturing',
    description: 'Flexible capsule solutions for branded wellness formulas, botanical blends and targeted nutrient combinations.',
    features: ['Vegetarian capsule options', 'Custom ingredient blends', 'Accurate fill-weight control', 'Bottle and bulk formats'],
    demoProducts: [
      { name: 'Ashwagandha Extract', category: 'Stress Support', pack: '60 Capsules' },
      { name: 'Hair, Skin & Nails', category: 'Beauty Wellness', pack: '60 Capsules' },
      { name: 'Liver Support Blend', category: 'Hepatic Wellness', pack: '30 Capsules' },
    ],
  },
];

export function getProductForm(id) {
  return productForms.find((item) => item.id === id);
}
