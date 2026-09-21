'use client';

import { Beaker, ShieldCheck, Award } from 'lucide-react';
import PremiumServicePage from '../../../components/premium/PremiumServicePage';

export default function CustomFormulation() {
  const benefits = [
    {
      title: "Proprietary Active Blends",
      desc: "Unique formulations custom-crafted to align with your brand's vision and target demographic requirements.",
      tag: "Proprietary Blends"
    },
    {
      title: "PhD-Led Formulation Chemists",
      desc: "Our lead R&D group comprises award-winning supplement formulation experts with decades of collective industry experience.",
      tag: "Expert Chemists"
    },
    {
      title: "Global Ingredient Sourcing",
      desc: "Secure direct access to premium, rare, and ultra-high-purity active raw materials sourced from trusted global providers.",
      tag: "Premium Sourcing"
    },
    {
      title: "Real-Time Stability Testing",
      desc: "Rigorous temperature and moisture stress testing ensuring maximum active shelf-life stability and consistent potency.",
      tag: "Stability Proven"
    }
  ];

  const stats = [
    { value: "PhD-Led", label: "R&D Chemists" },
    { value: "100%", label: "Proprietary Ownership" },
    { value: "500+", label: "Formulas Developed" },
    { value: "Zero", label: "Ingredient Placeholders" }
  ];

  const features = [
    {
      icon: <Beaker className="text-orange-400" size={28} />,
      title: "Custom Bio-Active Engineering",
      desc: "We translate your design concepts into clinically certified, consumer-safe active formulations backed by rigid empirical research."
    },
    {
      icon: <ShieldCheck className="text-purple-400" size={28} />,
      title: "Near-Infrared Active Validation",
      desc: "Confirm raw powder uniformity, absolute dissolution metrics, and chemical integrity before moving your formula to the bottling stage."
    },
    {
      icon: <Award className="text-indigo-400" size={28} />,
      title: "Sensory & Taste Customization",
      desc: "Our flavor masterclass utilizes organic sweeteners and clean masking technology to make even bitter botanicals taste exceptional."
    }
  ];

  const faqs = [
    {
      q: "Who owns the intellectual property (IP) of the customized formula?",
      a: "Your brand retains 100% intellectual property ownership of any customized formula created with Admire Nutra. Full tech sheets are delivered upon project completion."
    },
    {
      q: "How long does the R&D and sampling phase typically take?",
      a: "Our R&D sampling cycle is extremely rapid. A customized bench sample is formulated, lab-tested, flavored, and shipped for your feedback within 14 business days."
    },
    {
      q: "Can you formulate products that are fully organic, non-GMO, and vegan?",
      a: "Yes. We carry full organic certification capability, alongside non-GMO, vegan, kosher, and clean-label ingredient suites to match your branding goals."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Nutraceutical Formulation",
    "description": "Scientific PhD-led research and custom supplement formulation services for premium global brands from Admire Nutra.",
    "url": "https://mascular-2a757.web.app/services/custom-formulation",
    "provider": {
      "@type": "Organization",
      "name": "Admire Nutra",
      "url": "https://mascular-2a757.web.app"
    },
    "areaServed": "Global",
    "serviceType": "Supplement Formulation R&D"
  };

  return (
    <PremiumServicePage
      serviceTitle="Custom Formulation"
      heroBadge="Elite Scientific Formulation"
      heroTitle={["Custom", "Formulation"]}
      heroDescription="We transform your concepts into science-backed, market-ready supplement formulas. Our team of experts ensures every blend is potent, pure, and effective."
      benefits={benefits}
      stats={stats}
      features={features}
      faqs={faqs}
      schema={schema}
      accentColor="from-purple-600 to-indigo-600"
      vaultTitle="Scientific Efficacy"
      vaultDesc="Formulate elite clean-label complexes, customized active absorption properties, organic flavor systems, and stability audited capsules."
      tags={["100% IP Proprietary", "Active Bio-Assays", "Natural Flavor Masking"]}
    />
  );
}
