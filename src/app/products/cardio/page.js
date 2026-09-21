'use client';

import { Heart, ShieldCheck, Award } from 'lucide-react';
import PremiumProductPage from '../../../components/premium/PremiumProductPage';

export default function CardioPage() {
  const products = [
    {
      name: "Omega-3 Fish Oil",
      description: "High-purity fish oil with EPA and DHA for heart health and circulation",
      features: ["1000mg Omega-3", "600mg EPA", "400mg DHA", "Molecularly Distilled"],
      purity: "Molecularly Distilled",
      certifications: ["Zero Heavy Metals", "Wild-Caught"]
    },
    {
      name: "CoQ10 Complex",
      description: "Coenzyme Q10 for cardiovascular energy and antioxidant protection",
      features: ["200mg CoQ10", "Bioavailable", "Heart Support", "Energy Boost"],
      purity: "Fermented Trans-Form",
      certifications: ["ATP Energy Support", "Non-GMO"]
    },
    {
      name: "Garlic Extract",
      description: "Standardized garlic extract for healthy cholesterol and blood pressure",
      features: ["500mg Extract", "Allicin", "Cardiovascular", "Natural"],
      purity: "Odorless Deodorized",
      certifications: ["BP Normalizing", "All-Natural"]
    },
    {
      name: "Hawthorn Berry",
      description: "Traditional heart support formula with hawthorn berry extract",
      features: ["300mg Extract", "Flavonoids", "Circulation", "Antioxidant"],
      purity: "Standardized Extract",
      certifications: ["Myocardial Support", "Vegan Capsule"]
    }
  ];

  const stats = [
    { value: "100%", label: "Pure-Extract Sourced" },
    { value: "99.1%", label: "Arterial Absorption Rate" },
    { value: "35,000+", label: "Heart Metrics Stabilized" },
    { value: "cGMP", label: "Certified Production" }
  ];

  const features = [
    {
      icon: <Heart className="text-orange-400" size={28} />,
      title: "Myocardial Energy Optimization",
      desc: "Our bioavailable CoQ10 complexes actively support cellular mitochondria in the heart muscle, maintaining steady daily stroke volume and cardiovascular ATP."
    },
    {
      icon: <ShieldCheck className="text-purple-400" size={28} />,
      title: "Molecularly Distilled Lipids",
      desc: "Every batch of omega-3 fish oil undergoes fractional vacuum distillation, eliminating volatile oxidation products, PCB toxins, and heavy metals."
    },
    {
      icon: <Award className="text-indigo-400" size={28} />,
      title: "Circulatory Flow Mechanics",
      desc: "Standardized deodorized garlic and hawthorn flavonoid compounds preserve endothelial elasticity, supporting balanced arterial blood flow."
    }
  ];

  const faqs = [
    {
      q: "What methods do you use to ensure omega-3 fish oil stability?",
      a: "We process and encapsulate all our fish oils under an inert nitrogen blanket, preventing any exposure to atmospheric oxygen that causes rancidity."
    },
    {
      q: "Do you supply co-formulations of CoQ10 with lipid carriers?",
      a: "Yes. To optimize absorption of fat-soluble CoQ10, we offer custom formulations suspended in olive oil, coconut oil, or proprietary lecithin bases."
    },
    {
      q: "What packaging styles are recommended for sensitive herbal extracts?",
      a: "We recommend using thick, double-walled amber HDPE bottles or specialized blister packs that filter out UV rays and limit ambient moisture ingress."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProductCategory",
    "name": "Cardiovascular Supplements",
    "description": "Advanced B2B cardiovascular nutraceutical formulations for heart health, circulation support, and arterial elasticity from Admire Nutra.",
    "url": "https://mascular-2a757.web.app/products/cardio",
    "provider": {
      "@type": "Organization",
      "name": "Admire Nutra",
      "url": "https://mascular-2a757.web.app"
    }
  };

  return (
    <PremiumProductPage
      categoryTitle="Cardio Care"
      categorySubtitle="Cardiovascular Support"
      heroBadge="Advanced Cardiovascular Support"
      heroTitle={["Cardiac", "Wellness"]}
      heroDescription="Formulated to support optimal myocardial energy, maintain healthy circulation, and reinforce arterial elasticity."
      products={products}
      stats={stats}
      features={features}
      faqs={faqs}
      schema={schema}
      accentColor="from-orange-500 to-purple-600"
      vaultTitle="Retina & Vision Vault"
      vaultDesc="Unlock access to premium CoQ10 softgels, molecularly distilled Omega-3 fish oils, arterial support compounds, and botanical cardiovascular blends."
      tags={["Glutathione Synthesis", "Hepatocyte Protection", "Biliary Secretion"]}
    />
  );
}
