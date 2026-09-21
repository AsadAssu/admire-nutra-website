'use client';

import { Bone, ShieldCheck, Award } from 'lucide-react';
import PremiumProductPage from '../../../components/premium/PremiumProductPage';

export default function OrthopedicsPage() {
  const products = [
    {
      name: "Calcium + Vitamin D3",
      description: "Bone density support formula with calcium citrate and vitamin D3 for optimal absorption",
      features: ["Calcium Citrate", "Vitamin D3", "Magnesium", "Easy on Stomach"],
      purity: "Nano-milled Minerals",
      certifications: ["Highly Bioavailable", "USP Tested"]
    },
    {
      name: "Glucosamine Complex",
      description: "Joint support formula with glucosamine, chondroitin, and MSM for cartilage health",
      features: ["Glucosamine", "Chondroitin", "MSM", "Anti-Inflammatory"],
      purity: "99.8% Purity Extract",
      certifications: ["Cartilage Integrity", "Non-GMO"]
    },
    {
      name: "Collagen Peptides",
      description: "Hydrolyzed collagen for bone, joint, and connective tissue support",
      features: ["Type I & III", "Hydrolyzed", "Bioavailable", "Unflavored"],
      purity: "Peptan® Certified",
      certifications: ["Grass-Fed Source", "Hormone-Free"]
    },
    {
      name: "Vitamin K2 + D3",
      description: "Bone metabolism formula directing calcium to bones, not arteries",
      features: ["Vitamin K2 MK-7", "Vitamin D3", "Optimal Ratio", "Heart Health"],
      purity: "MenaQ7® Standard",
      certifications: ["Optimal Directing", "Soy-Free"]
    }
  ];

  const stats = [
    { value: "100%", label: "Heavy Metal Screened" },
    { value: "99.4%", label: "Absorption Efficacy" },
    { value: "50,000+", label: "Daily Joint Relieved" },
    { value: "cGMP", label: "Certified Facility" }
  ];

  const features = [
    {
      icon: <Bone className="text-orange-400" size={28} />,
      title: "Skeletal Density Enhancers",
      desc: "Incorporating chelated calcium salts and key mineral ratios that bypass regular digestion limits to fortify structural bone matrix."
    },
    {
      icon: <ShieldCheck className="text-purple-400" size={28} />,
      title: "Synovial Fluid Nutrition",
      desc: "Our joint formulas focus on protecting articular chondrocytes and supplementing endogenous glucosamine structures to delay joint aging."
    },
    {
      icon: <Award className="text-indigo-400" size={28} />,
      title: "Micro-encapsulated Active D3/K2",
      desc: "Guarantees full raw ingredient shelf stability without oxidization, allowing exact nutrient ratios in each tablet or capsule."
    }
  ];

  const faqs = [
    {
      q: "What types of calcium sources do you offer for contract manufacturing?",
      a: "We offer calcium citrate malate (CCM), calcium carbonate, and plant-sourced calcium from red algae, providing flexible options matching your brand's cost and absorption targets."
    },
    {
      q: "Are your collagen peptides hydrolysed for better joint uptake?",
      a: "Yes. We source premium hydrolyzed marine and bovine Type I & III collagen peptides, which have low molecular weights for rapid absorption and cartilage deployment."
    },
    {
      q: "Do you supply ortho supplements in capsule, powder, or tablet forms?",
      a: "We manufacture all three. Our state-of-the-art facility features high-speed tableting presses, capsule encapsulation machines, and powder blending lines to suit any format."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProductCategory",
    "name": "Orthopedic Supplements",
    "description": "Advanced nutraceutical formulations for bone health, joint support, and overall skeletal wellness from Admire Nutra.",
    "url": "https://mascular-2a757.web.app/products/orthopedics",
    "provider": {
      "@type": "Organization",
      "name": "Admire Nutra",
      "url": "https://mascular-2a757.web.app"
    }
  };

  return (
    <PremiumProductPage
      categoryTitle="Ortho Care"
      categorySubtitle="Bone & Joint Science"
      heroBadge="Advanced Joint & Skeletal Science"
      heroTitle={["Ortho", "Care"]}
      heroDescription="Engineered for maximum bone density and joint mobility. Supply elite, science-backed orthopedic formulas to support active adult populations."
      products={products}
      stats={stats}
      features={features}
      faqs={faqs}
      schema={schema}
      accentColor="from-orange-500 to-purple-600"
      vaultTitle="Skeletal Support Vault"
      vaultDesc="Unlock access to bio-active calcium D3 blends, triple-strength glucosamine chondroitin complexes, and collagen peptides."
      tags={["Cartilage Defence", "Fluid Nourishing", "Osteo Supportive"]}
    />
  );
}
