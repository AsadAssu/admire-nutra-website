'use client';

import { Baby, ShieldCheck, Award } from 'lucide-react';
import PremiumProductPage from '../../../components/premium/PremiumProductPage';

export default function PediatricPage() {
  const products = [
    {
      name: "Multivitamin Drops",
      description: "Complete multivitamin drops for infants and toddlers with essential vitamins A, D, E, and K",
      features: ["Vitamins A-D-K", "Easy to Administer", "Sugar Free", "Natural Flavors"],
      purity: "Infant Grade Purity",
      certifications: ["Zero Sugar", "Non-GMO"]
    },
    {
      name: "Calcium + Vitamin D Syrup",
      description: "Bone development formula with calcium citrate and vitamin D3 for growing children",
      features: ["Calcium Citrate", "Vitamin D3", "Strawberry Flavor", "Absorption Optimized"],
      purity: "Microfiltered Minerals",
      certifications: ["Allergen-Free", "Kid Approved"]
    },
    {
      name: "Iron Supplement",
      description: "Gentle iron formula for anemia prevention and healthy red blood cell formation",
      features: ["Ferrous Sulfate", "Vitamin C", "Non-Constipating", "Berry Flavor"],
      purity: "High Absorption",
      certifications: ["Tooth-Friendly", "Gentle Gastric"]
    },
    {
      name: "Probiotic Powder",
      description: "Infant probiotic blend for digestive health and immune system support",
      features: ["B. infantis", "L. reuteri", "1 Billion CFU", "Breast Milk Compatible"],
      purity: "Premium Active Strains",
      certifications: ["Dairy-Free", "Clinically Studied"]
    }
  ];

  const stats = [
    { value: "100%", label: "Allergen & Sugar Free" },
    { value: "Clinically", label: "Validated Safety" },
    { value: "10,000+", label: "Pediatricians Trust" },
    { value: "Zero", label: "Artificial Colorants" }
  ];

  const features = [
    {
      icon: <Baby className="text-orange-400" size={28} />,
      title: "Gentle Gastrointestinal Profiles",
      desc: "Carefully calibrated acidity and mineral carriers prevent colic, gas, or constipation common in standard infant vitamins."
    },
    {
      icon: <ShieldCheck className="text-purple-400" size={28} />,
      title: "Triple-Stage Contaminant Testing",
      desc: "Our child care lines are certified free from heavy metals, pesticides, microbial paths, and typical allergens like gluten and soy."
    },
    {
      icon: <Award className="text-indigo-400" size={28} />,
      title: "Pediatric Taste Integration",
      desc: "Scientifically masked active tastes using organic, plant-based non-glycemic sweetness agents so children love taking them daily."
    }
  ];

  const faqs = [
    {
      q: "What certifications are available for your children's formulation line?",
      a: "Our entire pediatric manufacturing facility is WHO-GMP compliant, ISO certified, and rigorously audited for dairy-free, nut-free, and gluten-free line segregation."
    },
    {
      q: "Do you offer customized flavor profiles for syrups and gummies?",
      a: "Yes. We specialize in using natural flavor systems like wild berry, organic orange, and sweet cherry that mask iron or vitamin mineral notes perfectly without refined sugars."
    },
    {
      q: "Can you assist with shelf-life and stability testing?",
      a: "Absolutely. We conduct full real-time and accelerated stability audits on drops, syrups, and powders to ensure active dosage levels remain consistent until the expiration date."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProductCategory",
    "name": "Pediatric Nutraceuticals",
    "description": "Safe, gentle, and effective nutritional supplements formulated specifically for infants, toddlers, and growing children.",
    "url": "https://mascular-2a757.web.app/products/pediatric",
    "provider": {
      "@type": "Organization",
      "name": "Admire Nutra",
      "url": "https://mascular-2a757.web.app"
    }
  };

  return (
    <PremiumProductPage
      categoryTitle="Pediatric Care"
      categorySubtitle="Child Care Purity"
      heroBadge="Purity Certified Child Care"
      heroTitle={["Pediatric", "Care"]}
      heroDescription="Engineered with unmatched purity and natural flavors. Offer pediatric drops, organic syrups, and clean-label supplements certified safe for kids."
      products={products}
      stats={stats}
      features={features}
      faqs={faqs}
      schema={schema}
      accentColor="from-orange-500 to-purple-600"
      vaultTitle="Safe-Pure Vault"
      vaultDesc="Unlock access to liquid multivitamin drops, tooth-friendly bone syrups, gentle iron blends, and micro-encapsulated gut probiotics."
      tags={["Non-Glycemic", "Allergen Free", "Organically Sweetened"]}
    />
  );
}
