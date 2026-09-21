'use client';

import { Factory, ShieldCheck, Award } from 'lucide-react';
import PremiumServicePage from '../../../components/premium/PremiumServicePage';

export default function BulkManufacturing() {
  const benefits = [
    {
      title: "High Capacity Blending",
      desc: "Equipped with state-of-the-art double-cone and V-blenders, capable of processing metric tons of uniform powder daily.",
      tag: "Industrial Scale"
    },
    {
      title: "cGMP Certified Infrastructure",
      desc: "Fully segregated class 100,000 cleanrooms preventing cross-contamination and conforming to WHO-GMP directives.",
      tag: "Certified Quality"
    },
    {
      title: "Precision Blending Assays",
      desc: "Our automated high-shear mixing guarantees active chemical distribution uniformity across every single batch.",
      tag: "Uniformity Assured"
    },
    {
      title: "Rapid Lead Turnarounds",
      desc: "High-speed capsule filling and automated pouching lines reduce lead times from formulation approval to shipping.",
      tag: "Speed Optimized"
    }
  ];

  const stats = [
    { value: "50+ Tons", label: "Monthly Output Capacity" },
    { value: "Class 100k", label: "Cleanroom Standard" },
    { value: "100%", label: "Batch Traceability" },
    { value: "cGMP", label: "WHO Compliant Facility" }
  ];

  const features = [
    {
      icon: <Factory className="text-orange-400" size={28} />,
      title: "Industrial-Scale Powder Lines",
      desc: "Scale your pre-workouts, proteins, and amino acids through our state-of-the-art high-volume powder filling and packaging lines."
    },
    {
      icon: <ShieldCheck className="text-purple-400" size={28} />,
      title: "Rigorous In-Process Controls",
      desc: "Every step is strictly monitored with real-time moisture testing, metal detection, and bulk density verification assays."
    },
    {
      icon: <Award className="text-indigo-400" size={28} />,
      title: "Bulk Raw Warehousing",
      desc: "Maintain constant supply chain velocity via our climate-controlled raw materials warehouse, securing ingredients under nitrogen if required."
    }
  ];

  const faqs = [
    {
      q: "What is the minimum order quantity (MOQ) for bulk manufacturing?",
      a: "Our bulk manufacturing MOQs start at 500 kg for powders and 100,000 capsules/tablets. We offer scalable options to grow alongside your brand's footprint."
    },
    {
      q: "Are all manufacturing steps performed in-house?",
      a: "Yes. From raw material milling and sifting, to precision high-shear blending, encapsulation, tableting, and automated bottling—everything is conducted in our certified facility."
    },
    {
      q: "How do you guarantee batch-to-batch consistency?",
      a: "We perform strict bulk density checks, particle size distribution testing, and near-infrared spectrometry on every blend before it moves to packaging."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Bulk Nutraceutical Manufacturing",
    "description": "High-volume contract supplement manufacturing for powders, capsules, and tablets in a WHO-GMP certified facility.",
    "provider": {
      "@type": "Organization",
      "name": "Admire Nutra",
      "url": "https://mascular-2a757.web.app"
    },
    "areaServed": "Global",
    "serviceType": "Contract Manufacturing"
  };

  return (
    <PremiumServicePage
      serviceTitle="Bulk Manufacturing"
      heroBadge="Elite Scale OEM & Bulk Production"
      heroTitle={["Industrial", "Bulk Mfg"]}
      heroDescription="Equipped with double-cone blenders, Class 100,000 cleanrooms, and high-velocity encapsulation lines. Ready for multi-ton client batches."
      benefits={benefits}
      stats={stats}
      features={features}
      faqs={faqs}
      schema={schema}
      accentColor="from-purple-600 to-indigo-600"
      vaultTitle="Facility Capabilities"
      vaultDesc="Explore high-velocity automatic powder filling, climate-controlled dry-blend packaging, and rigorous laboratory standardizations."
      tags={["Metric Ton Output", "cGMP Audited", "Nitrogen Warehousing"]}
    />
  );
}
