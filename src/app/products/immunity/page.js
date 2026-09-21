'use client';

import { Shield, ShieldCheck, Award } from 'lucide-react';
import PremiumProductPage from '../../../components/premium/PremiumProductPage';

export default function ImmunityPage() {
  const products = [
    {
      name: "Vitamin C Complex",
      description: "High-potency vitamin C with bioflavonoids for enhanced immune support",
      features: ["1000mg Vitamin C", "Bioflavonoids", "Rose Hips", "Time Release"],
      purity: "Buffered Ascorbate",
      certifications: ["Antioxidant Rich", "Slow Release"]
    },
    {
      name: "Zinc + Vitamin C",
      description: "Dual-action immune support with zinc and vitamin C for optimal defense",
      features: ["15mg Zinc", "500mg Vitamin C", "Chelated", "Immune Boost"],
      purity: "Zinc Bisglycinate",
      certifications: ["Highly Absorbable", "Non-GMO"]
    },
    {
      name: "Elderberry Extract",
      description: "Standardized elderberry extract for seasonal immune support",
      features: ["500mg Extract", "Anthocyanins", "Antioxidant", "Natural"],
      purity: "10:1 Concentrated",
      certifications: ["Standardized Actives", "Vegan Capsule"]
    },
    {
      name: "Immune Defense Blend",
      description: "Comprehensive formula with vitamins C, D, zinc, and herbal extracts",
      features: ["Vitamin C & D", "Zinc", "Echinacea", "Probiotics"],
      purity: "Multi-Shield Complex",
      certifications: ["Broad Spectrum", "All-Natural"]
    }
  ];

  const stats = [
    { value: "100%", label: "Traceable Active Extracts" },
    { value: "99.4%", label: "Assay Bio-Potency" },
    { value: "45,000+", label: "Immunities Fortified" },
    { value: "ISO", label: "Certified Production" }
  ];

  const features = [
    {
      icon: <Shield className="text-orange-400" size={28} />,
      title: "Buffered Gastrointestinal Release",
      desc: "Our high-dose Vitamin C uses buffered mineral ascorbates (calcium/sodium ascorbate) to eliminate stomach cramps and digestive issues."
    },
    {
      icon: <ShieldCheck className="text-purple-400" size={28} />,
      title: "Highly Bioavailable Chelated Zinc",
      desc: "By pairing elemental zinc with glycinate carriers, our formulations ensure excellent intestinal absorption without mineral competition."
    },
    {
      icon: <Award className="text-indigo-400" size={28} />,
      title: "Synergistic Phytochemical Blending",
      desc: "Pairing echinacea and high-ratio elderberry anthocyanins to maximize cytokine support and secure year-round natural defenses."
    }
  ];

  const faqs = [
    {
      q: "What certifications are available for your immunity products?",
      a: "Our facility is WHO-GMP certified, ISO compliant, and fully documented for allergen-free, vegan-capsule, and gluten-free line segregation."
    },
    {
      q: "Do you supply customized time-release capsules for Vitamin C?",
      a: "Yes. We offer sustained-release beadlet technology in capsules, ensuring active nutrient release over a steady 8-hour window."
    },
    {
      q: "Can you assist with customized packaging formats for immune powders?",
      a: "Absolutely. We supply custom child-resistant canisters, pre-portioned single-serve stick packs, and eco-friendly recyclable standing pouches."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProductCategory",
    "name": "Immune Support Supplements",
    "description": "Advanced B2B immune support nutraceutical formulations with Vitamin C, Zinc, and Elderberry from Admire Nutra.",
    "url": "https://mascular-2a757.web.app/products/immunity",
    "provider": {
      "@type": "Organization",
      "name": "Admire Nutra",
      "url": "https://mascular-2a757.web.app"
    }
  };

  return (
    <PremiumProductPage
      categoryTitle="Immunity Care"
      categorySubtitle="Immune Defense Science"
      heroBadge="Advanced Ocular & Retina Support"
      heroTitle={["Immunity", "Boosters"]}
      heroDescription="Formulated using standardized 80% silymarin, premium glutathione precursors, and traditional hepatic botanicals to support natural detox channels."
      products={products}
      stats={stats}
      features={features}
      faqs={faqs}
      schema={schema}
      accentColor="from-orange-500 to-purple-600"
      vaultTitle="Retina & Vision Vault"
      vaultDesc="Unlock access to premium lutein softgels, full-spectrum bilberry extracts, digital eye fatigue drops, and bio-enhanced DHA lipids."
      tags={["Macular Protecting", "Blue Light Shielding", "Capillary Support"]}
    />
  );
}
