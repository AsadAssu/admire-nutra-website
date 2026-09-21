'use client';

import { Palette, ShieldCheck, Award } from 'lucide-react';
import PremiumServicePage from '../../../components/premium/PremiumServicePage';

export default function PackagingDesign() {
  const benefits = [
    {
      title: "Premium Shelf Aesthetics",
      desc: "Stunning, high-end visual design concepts custom engineered to command consumer focus on dynamic retail shelves.",
      tag: "Premium Aesthetics"
    },
    {
      title: "Sustainable Material Sourcing",
      desc: "Eco-friendly compostable standing pouches, thick BPA-free HDPE tubs, and sleek recyclable amber glass bottles.",
      tag: "Material Innovation"
    },
    {
      title: "FDA & legal Label Compliance",
      desc: "Precise rendering of nutritional facts panels, allergen callouts, and legal claims to clear global regulatory audits.",
      tag: "Label Audited"
    },
    {
      title: "Photorealistic 3D Prototyping",
      desc: "High-fidelity photorealistic 3D container renders showcasing your complete retail lines before printing physical runs.",
      tag: "3D Rendering"
    }
  ];

  const stats = [
    { value: "3D Renders", label: "Included Free" },
    { value: "100%", label: "FDA Label Compliant" },
    { value: "Eco-Friendly", label: "Packaging Options" },
    { value: "Elite", label: "Brand Presence" }
  ];

  const features = [
    {
      icon: <Palette className="text-orange-400" size={28} />,
      title: "High-Impact Brand Identity",
      desc: "Our creative artists conceptualize complete logos, color palettes, and typographic patterns that represent raw performance and clinical trust."
    },
    {
      icon: <ShieldCheck className="text-purple-400" size={28} />,
      title: "Precision Pre-Press Audits",
      desc: "Every label file is rigorously checked for resolution, die-cut bleed margins, and spot-color alignment before hitting the printing presses."
    },
    {
      icon: <Award className="text-indigo-400" size={28} />,
      title: "Flexible Container Formats",
      desc: "Choose from standard round canisters, pre-portioned single-serve stick pack films, sleek vials, or premium amber jars."
    }
  ];

  const faqs = [
    {
      q: "Do you handle custom label design in-house?",
      a: "Yes. Our expert graphic designers craft customized retail labels, logos, boxes, and pouches specifically tailored for fitness and health brands."
    },
    {
      q: "What packaging styles are recommended for sensitive active powders?",
      a: "We recommend thick, double-walled amber HDPE bottles or specialized barrier pouches that filter out UV rays and limit ambient moisture ingress."
    },
    {
      q: "Can you assist with multi-language compliance labeling?",
      a: "Absolutely. We routinely draft compliant multi-lingual and regional labeling (FDA, Health Canada, EFSA) to support your global expansion."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Supplement Packaging & Label Design Services",
    "description": "High-end visual design, compliant FDA nutrition labels, and 3D container rendering for premium health brands from Admire Nutra.",
    "url": "https://mascular-2a757.web.app/services/packaging-design",
    "provider": {
      "@type": "Organization",
      "name": "Admire Nutra",
      "url": "https://mascular-2a757.web.app"
    },
    "areaServed": "Global",
    "serviceType": "Packaging & Brand Identity Design"
  };

  return (
    <PremiumServicePage
      serviceTitle="Packaging Design"
      heroBadge="High-Impact Brand Aesthetics"
      heroTitle={["Packaging", "Design"]}
      heroDescription="First impressions are everything. Our creative team designs packaging that not only protects your product but defines your brand's presence in the market."
      benefits={benefits}
      stats={stats}
      features={features}
      faqs={faqs}
      schema={schema}
      accentColor="from-purple-600 to-indigo-600"
      vaultTitle="Brand Elegance"
      vaultDesc="Achieve absolute retail shelf command via premium custom boxes, FDA compliant labels, sustainable barrier pouches, and 3D renders."
      tags={["FDA Compliant", "Photorealistic 3D", "Eco Sustainable"]}
    />
  );
}
