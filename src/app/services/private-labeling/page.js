'use client';

import { Tags, ShieldCheck, Award } from 'lucide-react';
import PremiumServicePage from '../../../components/premium/PremiumServicePage';

export default function PrivateLabeling() {
  const benefits = [
    {
      title: "Extensive White-Label Catalog",
      desc: "Instant access to hundreds of clinically validated supplement formulas ready to bear your brand logo.",
      tag: "Pre-Formulated Catalog"
    },
    {
      title: "Ultra-Fast Market Deployment",
      desc: "Accelerated timelines designed to launch your complete supplement line in as little as 4 to 6 weeks.",
      tag: "Rapid Launch"
    },
    {
      title: "Accessible Low MOQs",
      desc: "Highly flexible initial order requirements to support lean growth, rapid testing, and organic brand scaling.",
      tag: "Low MOQs"
    },
    {
      title: "Total Regulatory Clearance",
      desc: "Pre-verified compliance parameters ensuring your retail packages satisfy global dietary supplement legal metrics.",
      tag: "Legal Compliance"
    }
  ];

  const stats = [
    { value: "4-6 Weeks", label: "Market Speed Run" },
    { value: "100+", label: "Verified Stock Formulas" },
    { value: "Flexible", label: "MOQ Options" },
    { value: "Turn-Key", label: "Label to Bottling" }
  ];

  const features = [
    {
      icon: <Tags className="text-orange-400" size={28} />,
      title: "Sleek Label Customization",
      desc: "Choose from dozens of premium, pre-configured design templates that give your white-label supplement immediate prestige."
    },
    {
      icon: <ShieldCheck className="text-purple-400" size={28} />,
      title: "Pre-Audited Safe Blends",
      desc: "Avoid expensive chemistry validation fees—every stock catalog item carries proven stability certificates and batch assurance."
    },
    {
      icon: <Award className="text-indigo-400" size={28} />,
      title: "Seamless Fulfillment Logistics",
      desc: "Our automated packing channels directly coordinate storage, boxing, and fast logistics, shipping direct to your hub."
    }
  ];

  const faqs = [
    {
      q: "What supplement categories are available in your stock private label catalog?",
      a: "We offer immediate private label access to premium whey proteins, organic plant proteins, high-impact pre-workouts, clinical BCAAs, and popular fat burner capsule formulas."
    },
    {
      q: "Can I customize the taste profile of a white-label formula?",
      a: "Yes. For volume orders exceeding 1,000 units, we offer custom sensory adjustments using our in-house premium flavor masking catalog."
    },
    {
      q: "Do you supply child-resistant lids and heat-induction safety seals?",
      a: "Yes. Our standard B2B packaging options include premium heat-induction safety liners, neck bands, and child-resistant closures."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Private Label Nutraceutical Services",
    "description": "Premium turn-key white label supplement manufacturing and branding solutions with low MOQs from Admire Nutra.",
    "url": "https://mascular-2a757.web.app/services/private-labeling",
    "provider": {
      "@type": "Organization",
      "name": "Admire Nutra",
      "url": "https://mascular-2a757.web.app"
    },
    "areaServed": "Global",
    "serviceType": "White Label Supplement Manufacturing"
  };

  return (
    <PremiumServicePage
      serviceTitle="Private Labeling"
      heroBadge="Turn-Key Brand Solutions"
      heroTitle={["Private", "Labeling"]}
      heroDescription="Launch your own line of premium supplements instantly. Choose from our catalog of elite, pre-formulated products and make them yours."
      benefits={benefits}
      stats={stats}
      features={features}
      faqs={faqs}
      schema={schema}
      accentColor="from-purple-600 to-indigo-600"
      vaultTitle="Brand Ownership"
      vaultDesc="Launch premium fitness supplement portfolios without the high R&D fees, featuring beautiful templates, verified safety profiles, and fast packaging turns."
      tags={["4-Week Turn", "Pre-Verified Blends", "Low-Risk Entry"]}
    />
  );
}
