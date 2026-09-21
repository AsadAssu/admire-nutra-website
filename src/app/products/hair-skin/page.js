'use client';

import { Sparkles, ShieldCheck, Award } from 'lucide-react';
import PremiumProductPage from '../../../components/premium/PremiumProductPage';

export default function HairSkinPage() {
  const products = [
    {
      name: "Biotin Complex",
      description: "High-potency biotin with supporting nutrients for hair, skin, and nail health",
      features: ["5000mcg Biotin", "Vitamin C", "Zinc", "Selenium"],
      purity: "Pharmaceutical Grade",
      certifications: ["Hair Growth", "Vegan Capsule"]
    },
    {
      name: "Collagen Beauty",
      description: "Hydrolyzed collagen peptides for skin elasticity, hair growth, and nail strength",
      features: ["Type I & III", "5000mg Collagen", "Hyaluronic Acid", "Vitamin C"],
      purity: "Hydrolyzed Peptides",
      certifications: ["Skin Elasticity", "Bioavailable"]
    },
    {
      name: "Skin Glow Formula",
      description: "Antioxidant blend with vitamins C, E, and botanical extracts for radiant skin",
      features: ["Vitamin C & E", "Green Tea", "Grape Seed", "Polypodium"],
      purity: "Botanical Actives",
      certifications: ["Cellular Protection", "All-Natural"]
    },
    {
      name: "Hair Growth Support",
      description: "Comprehensive formula with B vitamins, minerals, and herbs for healthy hair",
      features: ["B-Complex", "Iron", "Saw Palmetto", "Horsetail"],
      purity: "DHT Blockers",
      certifications: ["Follicle Support", "Non-GMO"]
    }
  ];

  const stats = [
    { value: "100%", label: "Clinically Proven Bioactives" },
    { value: "Zero", label: "Artificial Colorants" },
    { value: "98.9%", label: "High Customer Satisfaction" },
    { value: "cGMP", label: "Certified Production" }
  ];

  const features = [
    {
      icon: <Sparkles className="text-orange-400" size={28} />,
      title: "Dermatological Grade Actives",
      desc: "Using highly absorbable biotin salts, multi-source collagen peptides, and standardized herbal co-factors for rapid cellular renewal."
    },
    {
      icon: <ShieldCheck className="text-purple-400" size={28} />,
      title: "Antioxidant Protective Barrier",
      desc: "Incorporating clean plant extracts like Polypodium and Grape Seed that buffer epidermal cells from UV photo-aging and oxidative stress."
    },
    {
      icon: <Award className="text-indigo-400" size={28} />,
      title: "Flavor-Masked Collagen Powders",
      desc: "Our specialized flavoring masks pure bovine or marine collagen peptides, yielding excellent ready-to-mix drink profiles without sugar."
    }
  ];

  const faqs = [
    {
      q: "What types of collagen can you formulate for our beauty brand?",
      a: "We manufacture Type I & III hydrolyzed collagen from grass-fed bovine, wild-caught marine, and premium eggshell membrane sources, customized to your target audience."
    },
    {
      q: "Do you offer clean-label vegan options for hair and nail growth?",
      a: "Yes. We offer high-potency vegan biotin, amino acid blends (precursors to keratin), organic bamboo silica, and zinc chelate in plant-derived capsules."
    },
    {
      q: "Can you design custom packaging formats for skincare powders?",
      a: "Absolutely. We supply custom child-resistant canisters, elegant pre-portioned single-serve stick packs, and eco-friendly recyclable standing pouches."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProductCategory",
    "name": "Hair, Skin & Nails Supplements",
    "description": "Advanced B2B beauty nutraceutical formulations for glowing skin, strong hair, and nail health from Admire Nutra.",
    "url": "https://mascular-2a757.web.app/products/hair-skin",
    "provider": {
      "@type": "Organization",
      "name": "Admire Nutra",
      "url": "https://mascular-2a757.web.app"
    }
  };

  return (
    <PremiumProductPage
      categoryTitle="Beauty Care"
      categorySubtitle="Dermatological Science"
      heroBadge="Premium Beauty & Wellness Solutions"
      heroTitle={["Beauty", "& Wellness"]}
      heroDescription="Formulated to restore glowing skin, healthy hair follicles, and strong nails from within using dermatological bioactives."
      products={products}
      stats={stats}
      features={features}
      faqs={faqs}
      schema={schema}
      accentColor="from-orange-500 to-purple-600"
      vaultTitle="Beauty Wellness Vault"
      vaultDesc="Unlock access to premium biotin complexes, hydrolyzed collagen drinks, cell renewal support, and organic root nourishing supplements."
      tags={["Keratin Boosting", "Dermal Rejuvenating", "UV Protective"]}
    />
  );
}
