'use client';

import { Shield, ShieldCheck, Award } from 'lucide-react';
import PremiumProductPage from '../../../components/premium/PremiumProductPage';

export default function HepaticPage() {
  const products = [
    {
      name: "Milk Thistle Extract",
      description: "Standardized milk thistle with silymarin for liver detoxification and protection",
      features: ["80% Silymarin", "300mg Extract", "Antioxidant", "Liver Support"],
      purity: "Standardized 80% Silymarin",
      certifications: ["Cell-Wall Integrity", "Pure-Extraction"]
    },
    {
      name: "Liver Detox Complex",
      description: "Comprehensive formula with herbs and nutrients for liver health and detox",
      features: ["Milk Thistle", "Dandelion", "Artichoke", "Turmeric"],
      purity: "Phytochemical Active Blend",
      certifications: ["Heavy-Metal Screened", "Non-GMO"]
    },
    {
      name: "NAC + Selenium",
      description: "N-acetylcysteine with selenium for glutathione production and antioxidant defense",
      features: ["600mg NAC", "200mcg Selenium", "Glutathione", "Detox Support"],
      purity: "Precursor Grade",
      certifications: ["Cellular Protection", "Vegan Capsule"]
    },
    {
      name: "Liver Support Formula",
      description: "Traditional liver support with Ayurvedic herbs for optimal liver function",
      features: ["Kutki", "Bhumyamalaki", "Guduchi", "Natural"],
      purity: "Ayurvedic Synergy Blend",
      certifications: ["Optimal Enzymes", "All-Natural"]
    }
  ];

  const stats = [
    { value: "100%", label: "Traceable Active Extracts" },
    { value: "98.9%", label: "Glutathione Boost Efficacy" },
    { value: "30,000+", label: "Livers Revitalized" },
    { value: "cGMP", label: "Certified Production" }
  ];

  const features = [
    {
      icon: <Shield className="text-orange-400" size={28} />,
      title: "Glutathione Precursor Optimization",
      desc: "Our high-potency NAC and Selenium blends actively promote the synthesis of endogenous glutathione, the liver's primary cellular antioxidant."
    },
    {
      icon: <ShieldCheck className="text-purple-400" size={28} />,
      title: "Standardized Active Extracts",
      desc: "Using standardized 80% Silymarin to ensure reliable membrane stabilization of hepatocyte cells against daily toxins."
    },
    {
      icon: <Award className="text-indigo-400" size={28} />,
      title: "Biliary Secretion Support",
      desc: "Standardized extracts of dandelion and artichoke naturally stimulate healthy bile flow, facilitating efficient waste metabolism."
    }
  ];

  const faqs = [
    {
      q: "What certifications are available for your hepatic products?",
      a: "Our facility is WHO-GMP certified, ISO compliant, and fully documented for allergen-free, vegan-capsule, and gluten-free line segregation."
    },
    {
      q: "Do you supply customized botanical formulas combining Ayurvedic and modern actives?",
      a: "Yes. We specialize in merging clinically proven modern bioactives like NAC with premium Ayurvedic extracts like Kutki for multi-action defense."
    },
    {
      q: "Can you assist with customized packaging formats for detox powders?",
      a: "Absolutely. We supply custom child-resistant canisters, pre-portioned single-serve stick packs, and eco-friendly recyclable standing pouches."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProductCategory",
    "name": "Hepatic Care Supplements",
    "description": "Advanced B2B liver care nutraceutical formulations with Milk Thistle, NAC, and Selenium from Admire Nutra.",
    "url": "https://mascular-2a757.web.app/products/hepatic",
    "provider": {
      "@type": "Organization",
      "name": "Admire Nutra",
      "url": "https://mascular-2a757.web.app"
    }
  };

  return (
    <PremiumProductPage
      categoryTitle="Hepatic Care"
      categorySubtitle="Liver Care & Detox"
      heroBadge="Advanced Hepatic & Detox Support"
      heroTitle={["Hepatic", "Wellness"]}
      heroDescription="Formulated using standardized 80% silymarin, premium glutathione precursors, and traditional hepatic botanicals to support natural detox channels."
      products={products}
      stats={stats}
      features={features}
      faqs={faqs}
      schema={schema}
      accentColor="from-orange-500 to-purple-600"
      vaultTitle="Liver & Detox Vault"
      vaultDesc="Unlock access to high-ratio silymarin extracts, bio-enhanced NAC capsules, cellular glutathione catalysts, and Ayurvedic botanical blends."
      tags={["Glutathione Synthesis", "Hepatocyte Protection", "Biliary Secretion"]}
    />
  );
}
