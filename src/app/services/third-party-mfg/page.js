'use client';

import { Factory, Zap, Shield } from 'lucide-react';
import PremiumServicePage from '../../../components/premium/PremiumServicePage';

export default function ThirdPartyMfg() {
  const benefits = [
    {
      title: "Scalable Production Outputs",
      desc: "Scale your volume from 1,000 to 1 million+ units effortlessly as your supplement brand grows in market demand.",
      tag: "Scale Effortlessly"
    },
    {
      title: "Certified Global Facilities",
      desc: "Fully ISO, WHO-GMP, and USFDA-compliant production lines protecting every aspect of product safety.",
      tag: "Global Compliance"
    },
    {
      title: "Regulatory Dossier Assistance",
      desc: "We supply complete technical dossiers, Certificate of Free Sale, and analytical test data to speed global exports.",
      tag: "Dossier Support"
    },
    {
      title: "Agile Batch Scheduling",
      desc: "Dynamic plant scheduling ensures responsive formulation adjustments and rapid turnarounds to beat market demand.",
      tag: "Speed Optimized"
    }
  ];

  const stats = [
    { value: "1M+ Units", label: "Monthly Output Cap" },
    { value: "100%", label: "cGMP Certified Lines" },
    { value: "Custom", label: "Fulfillment Services" },
    { value: "Global", label: "Regulatory Audited" }
  ];

  const features = [
    {
      icon: <Factory className="text-orange-400" size={28} />,
      title: "Raw Material Sourcing",
      desc: "Direct coordination with premium global raw material brokers secures ultra-pure active ingredients with trace batch certificates."
    },
    {
      icon: <Zap className="text-purple-400" size={28} />,
      title: "Production Excellence",
      desc: "State-of-the-art automated tableting, capsule encapsulation, and high-velocity dry powder mixing with nitrogen seals."
    },
    {
      icon: <Shield className="text-indigo-400" size={28} />,
      title: "Rigorous Testing Assays",
      desc: "Every stage is audited for active dosage uniformity, particle size distribution, moisture limit controls, and microbiological safety."
    }
  ];

  const faqs = [
    {
      q: "What certifications are held by your manufacturing units?",
      a: "Our partnering facilities carry WHO-GMP, ISO 22000, HACCP, and Organic certification, guaranteeing global compliance parameters."
    },
    {
      q: "Do you supply customized technical dossiers for international export?",
      a: "Yes. We offer comprehensive CTD/ACTD dossiers, certificate of free sale (CFS), and lab testing documentation to support smooth international registration."
    },
    {
      q: "What is your typical production turnaround lead time?",
      a: "For existing private label stock, lead time is 4-6 weeks. For custom formulations requiring stability validation, typical turns are 8-10 weeks."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Third-Party Nutraceutical Manufacturing",
    "description": "High-volume contract supplement manufacturing for powders, capsules, and tablets in a WHO-GMP certified facility from Admire Nutra.",
    "url": "https://mascular-2a757.web.app/services/third-party-mfg",
    "provider": {
      "@type": "Organization",
      "name": "Admire Nutra",
      "url": "https://mascular-2a757.web.app"
    },
    "areaServed": "Global",
    "serviceType": "Contract Supplement Manufacturing"
  };

  return (
    <PremiumServicePage
      serviceTitle="Third Party Mfg"
      heroBadge="Industrial-Scale Production"
      heroTitle={["Third Party", "Mfg Services"]}
      heroDescription="Leverage our world-class manufacturing capabilities to scale your brand. From concept to delivery, we handle everything with precision."
      benefits={benefits}
      stats={stats}
      features={features}
      faqs={faqs}
      schema={schema}
      accentColor="from-purple-600 to-indigo-600"
      vaultTitle="Production Efficacy"
      vaultDesc="Maximize B2B market velocity with custom formulation capabilities, nitrogen-blanketed encapsulation channels, and automated high-output bottling."
      tags={["1 Million Capacity", "WHO-GMP Compliant", "Dossier Support"]}
    />
  );
}
