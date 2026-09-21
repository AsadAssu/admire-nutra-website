'use client';

import { Eye, ShieldCheck, Award } from 'lucide-react';
import PremiumProductPage from '../../../components/premium/PremiumProductPage';

export default function EyePage() {
  const products = [
    {
      name: "Lutein + Zeaxanthin",
      description: "Vision support formula with lutein and zeaxanthin for macular health",
      features: ["20mg Lutein", "4mg Zeaxanthin", "Marigold Extract", "Eye Health"],
      purity: "Standardized Marigold",
      certifications: ["Macular Support", "Clinically Studied"]
    },
    {
      name: "Vision Complete",
      description: "Comprehensive eye support with vitamins, minerals, and antioxidants",
      features: ["Vitamin A, C, E", "Zinc", "Bilberry", "Lutein"],
      purity: "Full Spectrum",
      certifications: ["Antioxidant-Rich", "Gluten-Free"]
    },
    {
      name: "Omega-3 Eye Formula",
      description: "High-purity fish oil with DHA for retinal health and vision support",
      features: ["1000mg Omega-3", "500mg DHA", "Molecularly Distilled", "Retina Support"],
      purity: "DHA Enriched",
      certifications: ["Heavy Metal Free", "Retina Health"]
    },
    {
      name: "Digital Eye Support",
      description: "Formula for digital eye strain with bilberry, lutein, and antioxidants",
      features: ["Bilberry", "Lutein", "Blue Light", "Strain Relief"],
      purity: "Anthocyanin-Rich",
      certifications: ["Blue Light Shield", "Non-GMO"]
    }
  ];

  const stats = [
    { value: "100%", label: "Traceable Raw Sources" },
    { value: "98.7%", label: "Active Bio-Absorption" },
    { value: "25,000+", label: "Daily Eyes Guided" },
    { value: "ISO", label: "Certified Production" }
  ];

  const features = [
    {
      icon: <Eye className="text-orange-400" size={28} />,
      title: "Macular Pigment Density support",
      desc: "Our lutein and zeaxanthin ratios match premium clinical studies, helping filter harmful blue light and shielding retinal cells from damage."
    },
    {
      icon: <ShieldCheck className="text-purple-400" size={28} />,
      title: "Microvascular Circulation",
      desc: "Standardized bilberry anthocyanins protect microcapillary beds in the eye, facilitating consistent oxygen and nutrient delivery."
    },
    {
      icon: <Award className="text-indigo-400" size={28} />,
      title: "Enhanced DHA Assimilation",
      desc: "Retinal cell membranes require high concentrations of DHA. Our high-purity lipids guarantee high absorption and structural preservation."
    }
  ];

  const faqs = [
    {
      q: "What certifications are available for your vision product line?",
      a: "Our entire manufacturing cycle is WHO-GMP compliant, ISO certified, and fully documented for non-GMO and zero heavy metal contamination."
    },
    {
      q: "Can you formulate specific capsules targeting dry eyes and digital strain?",
      a: "Yes. We specialize in blending natural carotenoids with high-potency DHA oils and botanical extracts like sea buckthorn to target dry eye syndromes."
    },
    {
      q: "Do you offer softgel contract manufacturing for ocular lipids?",
      a: "Absolutely. We supply premium liquid-filled softgels, standard capsules, and clean, ready-to-mix drink powders for daily vision maintenance."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProductCategory",
    "name": "Eye Care Supplements",
    "description": "Advanced B2B vision care formulations for macular health, digital eye strain, and retina support from Admire Nutra.",
    "url": "https://mascular-2a757.web.app/products/eye",
    "provider": {
      "@type": "Organization",
      "name": "Admire Nutra",
      "url": "https://mascular-2a757.web.app"
    }
  };

  return (
    <PremiumProductPage
      categoryTitle="Eye Care"
      categorySubtitle="Ocular & Retina Science"
      heroBadge="Advanced Ocular & Retina Support"
      heroTitle={["Optical", "Health"]}
      heroDescription="Engineered to filter high-energy blue light, nourish retinal membranes, and relieve fatigue caused by digital eye strain."
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
