// Next.js App Router robots.txt generator
// Outputs /robots.txt at the root automatically at build time

export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/portal/',
          '/api/',
          '/_next/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/admin/', '/portal/'],
      },
    ],
    sitemap: 'https://mascular-2a757.web.app/sitemap.xml',
    host: 'https://mascular-2a757.web.app',
  };
}
