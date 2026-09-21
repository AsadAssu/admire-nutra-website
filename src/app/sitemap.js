// Next.js App Router sitemap generator
// Outputs /sitemap.xml automatically at build time

export const dynamic = 'force-static';

export default function sitemap() {
  const BASE_URL = 'https://mascular-2a757.web.app';
  const now = new Date().toISOString();

  const staticRoutes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/services/custom-formulation', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services/private-labeling', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services/third-party-mfg', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services/bulk-manufacturing', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services/packaging-design', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services/lab-testing', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/products', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/range-of-products', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/range-of-products/powder', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/range-of-products/softgel', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/range-of-products/sachet', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/range-of-products/tablet', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/range-of-products/capsule', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/products/sports', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/products/pediatric', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/products/orthopedics', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/products/immunity', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/products/cardio', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/products/hair-skin', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/products/hepatic', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/products/eye', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/certifications', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/process', priority: 0.8, changeFrequency: 'monthly' },
    // { path: '/leaders', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/export', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/blog', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/contact', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/customize', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
  ];

  const blogSlugs = [
    'future-of-whey-2026-ingredient-trends',
    'scaling-moqs-for-startup-success',
    'hybrid-protein-formulations',
  ];

  const staticEntries = staticRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const blogEntries = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
