'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle2, ChevronDown, Sparkles, ClipboardCheck, Activity, Landmark, FileCheck } from 'lucide-react';
import JsonLd from '@/components/JsonLd';

export default function Certifications() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are Admire Nutra certifications recognized in Europe and the Americas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our GMP and ISO 9001:2015 certifications are validated under international accreditation forums, ensuring easy compliance dossier clearance in global import sectors."
        }
      },
      {
        "@type": "Question",
        "name": "Can we print the cGMP and FSSAI license badges on our consumer labels?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Once our laboratory signs off on your production batch sheets, we provide complete, print-ready vector formats of our GMP and FSSAI accreditation logos to use on packaging."
        }
      },
      {
        "@type": "Question",
        "name": "How often are Laminar flow and air pressure metrics monitored?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Air pressure differentials and particle counts are logged automatically every 60 seconds through our digital BMS (Building Management System) interface, and validated quarterly by certified external auditors."
        }
      }
    ]
  };

  const certifications = [
    {
      title: "GMP Certified",
      desc: "Good Manufacturing Practices ensure that products are consistently produced and controlled according to quality standards.",
      icon: <ShieldCheck size={32} className="text-primary" />
    },
    {
      title: "ISO 9001:2015",
      desc: "International standard that specifies requirements for a quality management system (QMS).",
      icon: <Award size={32} className="text-primary" />
    },
    {
      title: "FSSAI Licensed",
      desc: "Compliance with Food Safety and Standards Authority of India for all nutritional products.",
      icon: <CheckCircle2 size={32} className="text-primary" />
    },
    {
      title: "HACCP Certified",
      desc: "Hazard Analysis Critical Control Point system for managing food safety risks.",
      icon: <ShieldCheck size={32} className="text-primary" />
    }
  ];

  const additionalBadges = [
    { title: "Halal Compliant", desc: "Our capsule shells and botanical extraction matrices are strictly certified under regional clean guidelines." },
    { title: "Non-GMO Verified", desc: "No bio-engineered compounds, raw ingredients are extracted directly from heritage organic seeds." },
    { title: "Allergen-Free Lab", desc: "Blended in certified isolated chambers preventing trace cross-contact of dairy, soy, or nuts." },
    { title: "Vegan Accredited", desc: "100% cruelty-free, absolute avoidance of animal derivatives across all active vegan proteins." }
  ];

  const auditStages = [
    { step: "Phase 01", title: "Pre-Audit Prep", desc: "Reviewing raw batch logs, standard operating sanitization guides, and raw compound certificates." },
    { step: "Phase 02", title: "Facility Inspections", desc: "On-site auditors audit laminar airflow filters, surgical stainless steel joints, and batch sifting grids." },
    { step: "Phase 03", title: "Chromatography Assays", desc: "Independent laboratories take spot samples to test under HPLC validation, confirming exact compound potencies." },
    { step: "Phase 04", title: "Certificate Issuance", desc: "A formal, globally traceable certificate dossier is logged directly on the national FSSAI register." }
  ];

  const complianceStats = [
    { label: "Audit Pass Rate", value: "100%", desc: "Near flawless score achieved across our last 15 consecutive external board evaluations." },
    { label: "Batches Certified", value: "5000+", desc: "Over five thousand custom formulations successfully cleared with formal CoA documentation." },
    { label: "Active Air Filter", value: "24/7 HEPA", desc: "HEPA Class 100,000 cleanrooms recirculate sterile air every 4.5 minutes without exception." },
    { label: "Batch Return Rate", value: "<0.02%", desc: "An industry-leading rating, indicating total precision across high-volume production runs." }
  ];

  return (
    <div className="pt-24 sm:pt-40 pb-20 px-4 sm:px-8 min-h-screen bg-[#FAFAFA]">
      <JsonLd data={faqSchema} />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 uppercase premium-gradient-text tracking-tight"
          >
            Trust & Quality
          </motion.h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">Our facility and processes are audited and certified by leading global authorities to ensure absolute safety and excellence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {certifications.map((cert, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card !p-10 flex gap-8 items-start group hover:border-primary transition-colors bg-white border border-slate-100 shadow-lg rounded-3xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                {cert.icon}
              </div>
              <div>
                <h3 className="text-2xl font-black mb-3 uppercase tracking-tight">{cert.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm font-semibold">{cert.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* NEW SECTION 1: Additional Quality Accreditations (Service Highlights) */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <span className="text-accent font-black uppercase tracking-[0.4em] text-[12px] mb-4 block">Extended Accreditations</span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
              Dietary Quality <span className="premium-gradient-text">Badges</span>
            </h2>
            <p className="text-dark/40 font-bold uppercase tracking-widest text-xs max-w-xl mx-auto leading-relaxed">
              We process specialized materials under verified global botanical and dietary safety codes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalBadges.map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-slate-100 p-8 rounded-2xl shadow-lg hover:border-primary/20 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/5 px-3 py-1 rounded-lg">
                    Dietary
                  </span>
                  <Sparkles className="text-slate-300 group-hover:text-primary transition-colors duration-300" size={18} />
                </div>
                <h4 className="text-lg font-black uppercase tracking-tight mb-2 text-dark group-hover:text-primary transition-colors duration-300">
                  {badge.title}
                </h4>
                <p className="text-dark/50 text-xs font-semibold leading-relaxed">
                  {badge.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* NEW SECTION 2: Annual Compliance Milestones (Achievements / Stats) */}
        <section className="mb-32 py-16 bg-white border border-slate-100 shadow-xl rounded-3xl p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[12px] mb-4 block">Purity Registry</span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
              Annual Safety <span className="premium-gradient-text">Metrics</span>
            </h2>
            <p className="text-dark/40 font-bold uppercase tracking-widest text-xs max-w-xl mx-auto leading-relaxed">
              Verifiable factory stats showcasing zero microbiological violations and clean batch clearance rates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-6">
                  <Activity size={20} />
                </div>
                <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2">{stat.label}</h4>
                <span className="text-3xl font-black tracking-tighter text-dark block mb-2">{stat.value}</span>
                <p className="text-dark/50 text-xs font-semibold leading-relaxed">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* NEW SECTION 3: Interactive Audit Flow (Timeline / Journey) */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <span className="text-accent font-black uppercase tracking-[0.4em] text-[12px] mb-4 block">Operational Integrity</span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
              The Recurrent <span className="premium-gradient-text">Audit Cycle</span>
            </h2>
            <p className="text-dark/40 font-bold uppercase tracking-widest text-xs max-w-xl mx-auto leading-relaxed">
              We host quarterly external inspections to maintain certifications and active licenses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {auditStages.map((stage, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-slate-100 p-8 rounded-2xl shadow-lg relative overflow-hidden group hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Landmark className="text-accent" size={20} />
                  <span className="text-2xl font-black tracking-tighter text-dark">{stage.step}</span>
                </div>
                <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">{stage.title}</h4>
                <p className="text-dark/50 text-xs font-semibold leading-relaxed">
                  {stage.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* NEW SECTION 4: Certification Verification FAQ (FAQ) */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[12px] mb-4 block">Compliance Support</span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
              Regulatory <span className="premium-gradient-text">FAQ</span>
            </h2>
            <p className="text-dark/40 font-bold uppercase tracking-widest text-xs max-w-xl mx-auto leading-relaxed">
              Detailed policies regarding international registration support, cleanroom monitoring, and custom badge usage.
            </p>
          </div>

          <div className="grid gap-4 max-w-3xl mx-auto">
            {[
              {
                question: "Are Admire Nutra certifications recognized in Europe and the Americas?",
                answer: "Yes, our GMP and ISO 9001:2015 certifications are validated under international accreditation forums, ensuring easy compliance dossier clearance in global import sectors."
              },
              {
                question: "Can we print the cGMP and FSSAI license badges on our consumer labels?",
                answer: "Absolutely. Once our laboratory signs off on your production batch sheets, we provide complete, print-ready vector formats of our GMP and FSSAI accreditation logos to use on packaging."
              },
              {
                question: "How often are Laminar flow and air pressure metrics monitored?",
                answer: "Air pressure differentials and particle counts are logged automatically every 60 seconds through our digital BMS (Building Management System) interface, and validated quarterly by certified external auditors."
              }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-xl border border-slate-100 shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 flex items-center justify-between text-left group"
                >
                  <h3 className="text-xs font-black uppercase tracking-widest text-primary group-hover:text-accent transition-colors pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                  >
                    <ChevronDown className="text-primary group-hover:text-accent transition-colors" size={16} />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === i ? 'auto' : 0,
                    opacity: openFaq === i ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-dark/50 text-xs leading-relaxed font-semibold p-6 pt-0">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>

        <div className="text-center py-20 bg-gray-50 rounded-3xl border border-gray-100">
          <h2 className="text-4xl font-black mb-6 uppercase tracking-tight">Need a specific audit?</h2>
          <p className="text-gray-500 mb-10 max-w-xl mx-auto">We are open to customer audits and can provide specific documentation required for your regional compliance needs.</p>
          <a href="/contact" className="btn-premium inline-block">Request Documentation</a>
        </div>
      </div>
    </div>
  );
}
