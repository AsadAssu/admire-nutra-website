// Server Component — handles static params for export mode
import BlogDetailClient from './BlogDetailClient';

export async function generateStaticParams() {
  return [
    { slug: 'future-of-whey-2026-ingredient-trends' },
    { slug: 'scaling-moqs-for-startup-success' },
    { slug: 'hybrid-protein-formulations' },
  ];
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  
  const postMetadata = {
    'future-of-whey-2026-ingredient-trends': {
      title: 'The Future of Whey: 2026 Ingredient Trends',
      description: 'Inside the lab with India\'s premier manufacturing partner. We document whey peptide trends, bio-availability science, and hybrid protein blends.',
      keywords: 'whey protein trends 2026, supplement formulations, active whey peptides, hybrid protein blends',
    },
    'scaling-moqs-for-startup-success': {
      title: 'Scaling MOQs for Startup Success: Minimum Order Quantity',
      description: 'Learn how to optimize supplement minimum order quantities (MOQs) to scale your brand efficiently without massive upfront overhead.',
      keywords: 'supplement MOQ guide, contract manufacturing minimum order, scale supplement startup',
    },
    'hybrid-protein-formulations': {
      title: 'Hybrid Protein Formulations: Dairy & Plant-Based Blends',
      description: 'Discover how to blend dairy and plant-based proteins to achieve perfect amino acid profiles and taste satisfaction.',
      keywords: 'hybrid protein powder, dairy plant blend protein, amino acid profile formula',
    }
  };

  const defaultMeta = {
    title: 'Industry Journal & Insights',
    description: 'Read the latest trends, research, and manufacturing guides from the leading supplement production experts at Admire Nutra.',
    keywords: 'supplement manufacturing blog, nutraceutical industry insights, admire nutra articles',
  };

  const meta = postMetadata[slug] || defaultMeta;

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `https://mascular-2a757.web.app/blog/${slug}`,
    },
    openGraph: {
      title: `${meta.title} | Admire Nutra`,
      description: meta.description,
      url: `https://mascular-2a757.web.app/blog/${slug}`,
      type: 'article',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=1200',
          width: 1200,
          height: 630,
          alt: meta.title,
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${meta.title} | Admire Nutra`,
      description: meta.description,
      images: ['https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=1200'],
    }
  };
}

export default function BlogDetailPage({ params }) {
  return <BlogDetailClient params={params} />;
}
