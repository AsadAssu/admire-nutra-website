import { Outfit } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/Providers';
import Navbar from '@/components/common/layout/Navbar';
import Footer from '@/components/common/layout/Footer';
import FloatingChat from '@/components/common/FloatingChat';
import JsonLd from '@/components/JsonLd';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Admire Nutra',
  url: 'https://mascular-2a757.web.app',
  logo: 'https://mascular-2a757.web.app/admire-nutra-logo.png',
  description: "India's premier ISO & WHO-GMP certified B2B nutraceutical and supplement contract manufacturer based in Greater Noida, Uttar Pradesh.",
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Alpha-1',
    addressLocality: 'Greater Noida',
    addressRegion: 'Uttar Pradesh',
    postalCode: '201308',
    addressCountry: 'IN',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-9518987291',
      contactType: 'sales',
      areaServed: ['IN', 'US', 'GB', 'AE', 'AU'],
      availableLanguage: 'English',
    },
  ],
  sameAs: [],
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://mascular-2a757.web.app/#localbusiness',
  name: 'Admire Nutra',
  image: 'https://mascular-2a757.web.app/admire-nutra-logo.png',
  url: 'https://mascular-2a757.web.app',
  telephone: '+91-9518987291',
  email: 'sales@admirenutra.com',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Alpha-1',
    addressLocality: 'Greater Noida',
    addressRegion: 'Uttar Pradesh',
    postalCode: '201308',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 30.7046,
    longitude: 76.7179,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '18:00',
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Admire Nutra',
  url: 'https://mascular-2a757.web.app',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://mascular-2a757.web.app/blog?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

const outfit = Outfit({ 
  subsets: ['latin'], 
  variable: '--font-outfit' 
});

export const metadata = {
  metadataBase: new URL('https://mascular-2a757.web.app'),
  title: {
    default: 'Admire Nutra | Premium White Label Supplement Manufacturing',
    template: '%s | Admire Nutra'
  },
  description: 'Scale your supplement brand with India\'s premier manufacturing partner. Custom formulation, private labeling, and ISO/GMP certified production lines in Greater Noida.',
  keywords: 'protein manufacturing, private label supplements, white label protein, custom supplement formulation, admire nutra, greater noida manufacturing, contract nutraceutical packing, GMP manufacturing India',
  authors: [{ name: 'Admire Nutra Team' }],
  creator: 'Admire Nutra',
  publisher: 'Admire Nutra',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'Admire Nutra | Premium White Label Supplement Manufacturing',
    description: 'Scale your supplement brand with India\'s premier manufacturing partner. Custom formulation, private labeling, and ISO/GMP certified production lines.',
    url: 'https://mascular-2a757.web.app',
    siteName: 'Admire Nutra',
    images: [
      {
        url: '/admire-nutra-logo.png',
        width: 1208,
        height: 472,
        alt: 'Admire Nutra Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Admire Nutra | Premium White Label Supplement Manufacturing',
    description: 'Scale your supplement brand with India\'s premier manufacturing partner. Custom formulation, private labeling, and ISO/GMP certified production lines.',
    images: ['/admire-nutra-logo.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${outfit.variable} font-sans`}>
        <JsonLd data={organizationSchema} />
        <JsonLd data={localBusinessSchema} />
        <JsonLd data={websiteSchema} />
        <Providers>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <FloatingChat />
        </Providers>
      </body>
    </html>
  );
}
