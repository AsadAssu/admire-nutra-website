import { notFound } from 'next/navigation';
import ProductFormDetail from '@/components/products/ProductFormDetail';
import { getProductForm, productForms } from '@/data/productForms';

export function generateStaticParams() {
  return productForms.map((product) => ({ format: product.id }));
}

export async function generateMetadata({ params }) {
  const { format } = await params;
  const product = getProductForm(format);
  if (!product) return {};

  const url = `https://mascular-2a757.web.app/range-of-products/${product.id}`;
  return {
    title: `${product.name} Manufacturing | Admire Nutra`,
    description: product.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${product.name} Manufacturing | Admire Nutra`,
      description: product.description,
      url,
      images: [product.image],
    },
  };
}

export default async function ProductFormatPage({ params }) {
  const { format } = await params;
  const product = getProductForm(format);
  if (!product) notFound();
  return <ProductFormDetail product={product} />;
}
