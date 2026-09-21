'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Beaker, Factory, Truck, CheckCircle2, ShieldCheck, Zap, Sparkles, ChevronDown, Clock, Activity, HardDrive } from 'lucide-react';
import JsonLd from '@/components/JsonLd';

export default function Process() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What inputs are needed to start a formulation consultation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You only need a baseline concept (e.g., target user base, product goals, primary ingredients). Our R&D team provides the complete nutritional profiling, sensory panels, and regulatory limit tests."
        }
      },
      {
        "@type": "Question",
        "name": "Do you charge extra for custom flavor trials?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. To ensure absolute partner alignment, we provide up to three complimentary pilot flavor samples for evaluation before signing final production sheets."
        }
      },
      {
        "@type": "Question",
        "name": "Can we supply our own active raw ingredients?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To maintain our cGMP facility validation and strict heavy-metal screening, we source directly from certified providers. Specialized or patented ingredients can be used under scientific clearance."
        }
      }
    ]
  };

  const steps = [
    {
      title: "Consultation",
      desc: "We discuss your brand vision, target market, and product requirements.",
      icon: <Lightbulb size={24} />
    },
    {
      title: "Formulation",
      desc: "Our R&D team creates and tests custom formulas tailored to your needs.",
      icon: <Beaker size={24} />
    },
    {
      title: "Manufacturing",
      desc: "High-scale production in our cGMP certified facility with absolute precision.",
      icon: <Factory size={24} />
    },
    {
      title: "Fulfillment",
      desc: "Quality control, packaging, and logistics to deliver products to your door.",
      icon: <Truck size={24} />
    }
  ];

  const qualityGates = [
    { gate: "Gate 01", name: "Sourcing Validation", desc: "Chemical validation of raw powder. We check physical density, moisture percentage, and trace-heavy metals prior to plant acceptance." },
    { gate: "Gate 02", name: "R&D Batch Sign-off", desc: "Formulation pilots are tested for flavor stability and solubility over multiple temperature profiles." },
    { gate: "Gate 03", name: "cGMP In-Process QC", desc: "Hourly capsule weight check, automatic metal detection screening, and tablet friability audits during scale blending." },
    { gate: "Gate 04", name: "Finished Release CoA", desc: "Independent lab microbial tests and HPLC assays. We sign off on a strict Certificate of Analysis for every batch." }
  ];

  const customCapabilities = [
    { title: "Custom Flavor Masking", desc: "Overcoming peptide bitterness using gourmet, food-grade flavor masking matrixes.", icon: <Sparkles className="text-primary" /> },
    { title: "Advanced Solubilization", desc: "Preventing protein clumping with instantized mixing ratios and lecithin binders.", icon: <Zap className="text-primary" /> },
    { title: "Active Synergy Co-factors", desc: "Formulating bio-active boosters (like black pepper piperine) that multiply human absorption rates.", icon: <Activity className="text-primary" /> }
  ];

  const speedMilestones = [
    { days: "7-10 Days", phase: "Formula Customization", desc: "Analyzing regulatory limits and tweaking active compound ratios for your target demographic." },
    { days: "3-5 Days", phase: "Flavor Pilot Trials", desc: "Creating small test batches for taste panels. We iterate until the profile matches elite standards." },
    { days: "14-21 Days", phase: "Commercial Scaling", desc: "Automated blending, tableting, packing, and high-resolution labeling of your full production order." },
    { days: "2-3 Days", phase: "SLA Batch Dispatch", desc: "Post-QC approval dispatch, tracking, and logistics setup directly to your hub." }
  ];

  return (
    <div className="pt-24 sm:pt-40 pb-20 px-4 sm:px-8 min-h-screen bg-[#FAFAFA]">
      <JsonLd data={faqSchema} />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 sm:mb-32">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 uppercase premium-gradient-text tracking-tight"
          >
            Our Process
          </motion.h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg uppercase tracking-widest font-bold">From Concept to Consumer: A Seamless Journey.</p>
        </div>

        <div className="relative mb-32">
          {/* Vertical Line for Desktop */}
          <div className="absolute left-1/2 top-0 w-[2px] h-full bg-gray-100 -translate-x-1/2 hidden lg:block" />

          <div className="flex flex-col gap-24 relative">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
              >
                <div className={`flex-1 text-center ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <span className="text-primary font-black text-6xl opacity-10 mb-4 block">0{index + 1}</span>
                  <h3 className="text-4xl font-black mb-4 uppercase tracking-tighter">{step.title}</h3>
                  <p className="text-gray-500 text-lg leading-relaxed max-w-md mx-auto lg:mx-0 lg:ml-auto lg:mr-0">{step.desc}</p>
                </div>

                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center z-10 shadow-xl shadow-primary/20 order-first lg:order-none">
                  {step.icon}
                </div>

                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* NEW SECTION 1: Process Quality Gates (Service Highlights) */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <span className="text-accent font-black uppercase tracking-[0.4em] text-[12px] mb-4 block">Zero-Error Tollgates</span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
              Analytical Quality <span className="premium-gradient-text">Gates</span>
            </h2>
            <p className="text-dark/40 font-bold uppercase tracking-widest text-xs max-w-xl mx-auto leading-relaxed">
              We enforce four rigorous validation checkpoints during development to ensure zero micro-contaminations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityGates.map((gate, i) => (
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
                    {gate.gate}
                  </span>
                  <ShieldCheck className="text-slate-300 group-hover:text-primary transition-colors duration-300" size={20} />
                </div>
                <h4 className="text-lg font-black uppercase tracking-tight mb-2 text-dark group-hover:text-primary transition-colors duration-300">
                  {gate.name}
                </h4>
                <p className="text-dark/50 text-xs font-medium leading-relaxed">
                  {gate.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* NEW SECTION 2: Custom Formulation Grid (Features Grid) */}
        <section className="mb-32 bg-white border border-slate-100 p-8 sm:p-16 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[12px] mb-4 block">Scientific Advantage</span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
              Formula Customization <span className="premium-gradient-text">Engine</span>
            </h2>
            <p className="text-dark/40 font-bold uppercase tracking-widest text-xs max-w-xl mx-auto leading-relaxed">
              We leverage advanced dietary biochemistry to improve human bio-availability and flavor profiles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {customCapabilities.map((capability, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:bg-white hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-6">
                  {capability.icon}
                </div>
                <h4 className="text-xl font-black uppercase tracking-tight text-dark mb-4">{capability.title}</h4>
                <p className="text-dark/50 text-xs font-semibold leading-relaxed">{capability.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* NEW SECTION 3: Speed-to-Market (Timeline / Journey) */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <span className="text-accent font-black uppercase tracking-[0.4em] text-[12px] mb-4 block">Rapid Launch Cycle</span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
              Speed-to-Market <span className="premium-gradient-text">Milestones</span>
            </h2>
            <p className="text-dark/40 font-bold uppercase tracking-widest text-xs max-w-xl mx-auto leading-relaxed">
              Our vertically integrated logistics ensure your formulas go from blueprint to dispatch in record times.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {speedMilestones.map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-slate-100 p-8 rounded-2xl shadow-lg relative overflow-hidden group hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="text-accent" size={20} />
                  <span className="text-2xl font-black tracking-tighter text-dark">{milestone.days}</span>
                </div>
                <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">{milestone.phase}</h4>
                <p className="text-dark/50 text-xs font-semibold leading-relaxed">
                  {milestone.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* NEW SECTION 4: Onboarding Process FAQ (FAQ) */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[12px] mb-4 block">Operational Clarity</span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
              Onboarding <span className="premium-gradient-text">FAQ</span>
            </h2>
            <p className="text-dark/40 font-bold uppercase tracking-widest text-xs max-w-xl mx-auto leading-relaxed">
              Clear specifications regarding sample testing, raw sourcing pipelines, and custom artwork setup.
            </p>
          </div>

          <div className="grid gap-4 max-w-3xl mx-auto">
            {[
              {
                question: "What inputs are needed to start a formulation consultation?",
                answer: "You only need a baseline concept (e.g., target user base, product goals, primary ingredients). Our R&D team provides the complete nutritional profiling, sensory panels, and regulatory limit tests."
              },
              {
                question: "Do you charge extra for custom flavor trials?",
                answer: "No. To ensure absolute partner alignment, we provide up to three complimentary pilot flavor samples for evaluation before signing final production sheets."
              },
              {
                question: "Can we supply our own active raw ingredients?",
                answer: "To maintain our cGMP facility validation and strict heavy-metal screening, we source directly from certified providers. Specialized or patented ingredients can be used under scientific clearance."
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

        <div className="mt-16 sm:mt-40 text-center glass-card !p-8 sm:!p-20">
          <h2 className="text-5xl font-black mb-8 uppercase tracking-tighter">Ready to start?</h2>
          <p className="text-gray-500 mb-12 max-w-2xl mx-auto">Take the first step towards building your supplement brand with the industry&apos;s most reliable partner.</p>
          <a href="/customize" className="btn-premium px-12 py-6 text-lg inline-block">Launch Your Brand</a>
        </div>
      </div>
    </div>
  );
}
