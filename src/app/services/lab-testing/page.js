'use client';

import { Microscope, ShieldCheck, Award } from 'lucide-react';
import PremiumServicePage from '../../../components/premium/PremiumServicePage';

export default function LabTesting() {
  const benefits = [
    {
      title: "Purity & Heavy Metal Analysis",
      desc: "Rigorous mass-spectrometry checks to confirm zero traces of heavy metals, environmental pesticides, or industrial solvent impurities.",
      tag: "Purity Confirmed"
    },
    {
      title: "Label Claim Potency Verification",
      desc: "High-performance liquid chromatography (HPLC) testing guaranteeing absolute dosage alignment with your retail label claims.",
      tag: "HPLC Standard"
    },
    {
      title: "Microbiological Protection Screens",
      desc: "Complete plating audits to eliminate microbial paths, mold, and yeast, securing absolute safety and long-term shelf integrity.",
      tag: "Bio-Shield Checked"
    },
    {
      title: "Official Certificates of Analysis (COA)",
      desc: "Comprehensive batch-specific reports detailing exact chemical profiles, delivered alongside every manufactured shipment.",
      tag: "COA Delivered"
    }
  ];

  const stats = [
    { value: "ISO 17025", label: "Accredited Standard" },
    { value: "100%", label: "Traceable Batch COAs" },
    { value: "HPLC", label: "Verification Assured" },
    { value: "Zero", label: "Fillers Tolerated" }
  ];

  const features = [
    {
      icon: <Microscope className="text-orange-400" size={28} />,
      title: "Advanced Mass-Spectrometry",
      desc: "We analyze every raw material consignment down to parts-per-billion, blocking trace elements or adulterants from reaching production lines."
    },
    {
      icon: <ShieldCheck className="text-purple-400" size={28} />,
      title: "Stability Stress Chamber Audits",
      desc: "Simulate extreme humidity and thermal variations to guarantee active ingredient efficacy throughout the product life cycle."
    },
    {
      icon: <Award className="text-indigo-400" size={28} />,
      title: "Independent Third-Party Verification",
      desc: "In addition to our rigorous in-house lab checks, we coordinate with accredited external testing houses to offer double validation."
    }
  ];

  const faqs = [
    {
      q: "Do you supply a Certificate of Analysis (COA) for each batch?",
      a: "Yes. Every single production batch undergoes rigid laboratory tests, and a comprehensive, fully certified Certificate of Analysis is provided prior to release."
    },
    {
      q: "What testing methodologies are employed in your laboratory facility?",
      a: "We utilize High-Performance Liquid Chromatography (HPLC), Gas Chromatography-Mass Spectrometry (GC-MS), Inductively Coupled Plasma Mass Spectrometry (ICP-MS), and comprehensive microbial plating audits."
    },
    {
      q: "Can you assist with shelf-life and stability validation studies?",
      a: "Absolutely. We conduct full real-time and accelerated stability studies in controlled chamber environments to satisfy regulatory compliance guidelines."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Supplement Lab Testing & Quality Assurance",
    "description": "Rigorous laboratory analysis, purity verification, and HPLC potency testing in an ISO-accredited facility from Admire Nutra.",
    "url": "https://mascular-2a757.web.app/services/lab-testing",
    "provider": {
      "@type": "Organization",
      "name": "Admire Nutra",
      "url": "https://mascular-2a757.web.app"
    },
    "areaServed": "Global",
    "serviceType": "Quality Control Testing Lab"
  };

  return (
    <PremiumServicePage
      serviceTitle="Lab Testing"
      heroBadge="Uncompromised Quality Control"
      heroTitle={["Laboratory", "Testing"]}
      heroDescription="Safety is not negotiable. Our rigorous laboratory testing protocols ensure that every product leaving our facility meets the highest standards of quality and purity."
      benefits={benefits}
      stats={stats}
      features={features}
      faqs={faqs}
      schema={schema}
      accentColor="from-purple-600 to-indigo-600"
      vaultTitle="Analytical Precision"
      vaultDesc="Achieve full compliance via verified heavy metal profiling, high-pressure liquid chromatography assay checks, and complete microbial safety audits."
      tags={["parts-per-billion ICPMS", "Accelerated Stability", "Batch COA Traceable"]}
    />
  );
}
