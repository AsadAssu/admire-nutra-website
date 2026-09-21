'use client';

import { Dumbbell, ShieldCheck, Award } from 'lucide-react';
import PremiumProductPage from '../../../components/premium/PremiumProductPage';

export default function SportsPage() {
  const products = [
    {
      name: "Whey Protein Isolate",
      description: "Premium whey protein with 25g protein per serving for muscle building and recovery",
      features: ["25g Protein", "5g BCAAs", "Zero Lactose", "Fast Absorption"],
      purity: "99.2% Assay Purity",
      certifications: ["cGMP Certified", "Non-GMO"]
    },
    {
      name: "Pre-Workout Formula",
      description: "Energy-boosting pre-workout with caffeine, beta-alanine, and nitric oxide boosters",
      features: ["200mg Caffeine", "Beta-Alanine", "Citrulline Malate", "Vitamin B Complex"],
      purity: "Pharmaceutical Grade",
      certifications: ["WADA Compliant", "Gluten-Free"]
    },
    {
      name: "Creatine Monohydrate",
      description: "Pure creatine for enhanced strength, power, and muscle mass gains",
      features: ["5g Creatine", "Unflavored", "Micronized", "Lab Tested"],
      purity: "200 Mesh Micronized",
      certifications: ["USP Standard", "Vegan"]
    },
    {
      name: "BCAA Complex",
      description: "2:1:1 ratio BCAA blend for muscle recovery and reduced fatigue",
      features: ["2:1:1 Ratio", "7g BCAAs", "Electrolytes", "Sugar Free"],
      purity: "Instantized Formula",
      certifications: ["Zero Banned Subs", "Keto Friendly"]
    }
  ];

  const stats = [
    { value: "98.8%", label: "Average Purity Index" },
    { value: "50+", label: "Elite Formulas Available" },
    { value: "1,000,000+", label: "Daily Servings Delivered" },
    { value: "3+ Years", label: "R&D Industry Authority" }
  ];

  const features = [
    {
      icon: <Dumbbell className="text-orange-400" size={28} />,
      title: "Scientific Formulations",
      desc: "Developed in collaboration with sports nutrition specialists and PhD researchers for target performance output."
    },
    {
      icon: <ShieldCheck className="text-purple-400" size={28} />,
      title: "Instant Bioavailability",
      desc: "Engineered utilizing advanced micronization and particle resizing to guarantee rapid gastric clearance and muscle delivery."
    },
    {
      icon: <Award className="text-indigo-400" size={28} />,
      title: "Gold Standard Safety",
      desc: "Every single formulation is strictly tested for heavy metals, banned substances, pathogens, and microbial limits."
    }
  ];

  const faqs = [
    {
      q: "What is your minimum order quantity (MOQ) for sports formulations?",
      a: "Our standard starting MOQ for private label sports powders (like protein or pre-workout) is 1,000 units per flavor/size. For custom formulations, requirements may vary depending on active ingredients."
    },
    {
      q: "Do you assist with flavor development and master profile matching?",
      a: "Yes. Our in-house flavor master chemists can accurately replicate or custom-engineer premium profiles, ensuring zero bitter aftertastes or clumping issues."
    },
    {
      q: "Are your sports supplements compliant with anti-doping regulations?",
      a: "Absolutely. We strictly adhere to global standards, ensuring that raw materials are certified free from substances banned by major athletic organizations (including WADA)."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProductCategory",
    "name": "Sports Nutrition Supplements",
    "description": "B2B Sports Nutrition Supplement Manufacturing from Admire Nutra.",
    "url": "https://mascular-2a757.web.app/products/sports",
    "provider": {
      "@type": "Organization",
      "name": "Admire Nutra",
      "url": "https://mascular-2a757.web.app"
    }
  };

  return (
    <PremiumProductPage
      categoryTitle="Sports Care"
      categorySubtitle="Active Nutrition"
      heroBadge="Advanced Joint & Skeletal Science"
      heroTitle={["Sports", "Nutrition"]}
      heroDescription="Formulated to support optimal myocardial energy, maintain healthy circulation, and reinforce arterial elasticity."
      products={products}
      stats={stats}
      features={features}
      faqs={faqs}
      schema={schema}
      accentColor="from-orange-500 to-purple-600"
      vaultTitle="Sports Formula Vault"
      vaultDesc="Unlock access to premium whey isolate, pharmaceutical grade pre-workouts, 200 mesh micronized creatine, and keto recovery BCAAs."
      tags={["Muscle Volumizing", "Rapid ATP Synthesis", "Electrolyte Matrixed"]}
    />
  );
}
