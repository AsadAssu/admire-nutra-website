'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Settings, Shield, FlaskConical, ArrowRight, Zap, Droplets, Target, ChevronDown, Compass, Cpu } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const services = [
    {
      title: "Third-Party Manufacturing",
      desc: "Scale your production without the overhead. Our GMP-certified plant handles high-volume blending, encapsulation, and packaging for the industry's top players.",
      icon: <Settings className="text-orange-500" size={28} />,
      features: ["Certified GMP/ISO 22000 Facility", "State-of-the-art Blending Tech", "Real-time Batch Tracking", "Scalable Batch Sizes"],
      link: "/services/third-party-mfg"
    },
    {
      title: "Private Labeling",
      desc: "Launch your brand in record time. Choose from our growing library of proven formulas and apply your unique brand identity.",
      icon: <Shield className="text-purple-600" size={28} />,
      features: ["Proven Consumer Formulas", "Custom Label Design", "Low MOQ Flexibility", "Label Compliance Audit"],
      link: "/services/private-labeling"
    },
    {
      title: "Custom Formulation",
      desc: "Innovate with our R&D team to create proprietary flavors, textures, and ingredient profiles that set your brand apart in a crowded market.",
      icon: <FlaskConical className="text-indigo-600" size={28} />,
      features: ["Exclusive Ingredient Sourcing", "Advanced Flavor Engineering", "Stability & Shelf-life Testing", "Rapid Prototype Cycles"],
      link: "/services/custom-formulation"
    }
  ];

  const workflow = [
    { step: "01", title: "Strategy", desc: "Technical consultation to define brand goals and product specs.", icon: <Target className="text-purple-600" /> },
    { step: "02", title: "R&D Lab", desc: "Precision formulation and flavor profile development.", icon: <Droplets className="text-orange-500" /> },
    { step: "03", title: "Production", desc: "Automated blending and high-speed packaging lines.", icon: <Zap className="text-indigo-600" /> },
  ];

  const segments = [
    { title: "Sports Nutrition", desc: "High-grade pre-workouts, pure isolates, and BCAAs formulated for fast muscle recovery." },
    { title: "Active Wellness", desc: "Physiologically active multivitamins, marine collagen peptides, and plant-based green blends." },
    { title: "Vegan & Organic", desc: "Premium organic pea protein, hemp-infused isolates, and natural prebiotic fibers." },
    { title: "Pediatric & Specialty", desc: "Micro-tablets, highly soluble drops, and allergen-free powdered formulations." }
  ];

  const equipmentSpecs = [
    { name: "2000L Smart Ribbon Blender", speed: "60 RPM Capacity", detail: "Uniform mixing of micro-dose compounds without heat friction." },
    { name: "High-Speed Rotary Compression", speed: "1,000,000 tabs/hr", detail: "Maintains optimal core density for sustained release profiles." },
    { name: "Automatic Blister Line", speed: "12,000 blisters/hr", detail: "Integrated camera sensors audit capsule placement hourly." },
    { name: "Zero-Air Sachet Filler", speed: "150 packs/min", detail: "Double sealing technology preserving nitrogen-flushed compounds." }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Admire Nutra Services Portfolio",
    "description": "High-volume contract manufacturing, custom formulation, and private labeling services for global supplement brands.",
    "provider": {
      "@type": "Organization",
      "name": "Admire Nutra",
      "url": "https://mascular-2a757.web.app"
    },
    "areaServed": "Global",
    "serviceType": "Nutraceutical Manufacturing & Branding"
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-dark pt-32 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(91,44,140,0.05),transparent_50%)]" />
        <div className="container-max relative z-10 flex flex-col items-center text-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-6"
          >
            <span className="text-purple-600 font-bold uppercase tracking-[0.4em] text-xs">WHAT WE MASTER</span>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter text-dark leading-none">
              Production <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">Powerhouse.</span>
            </h1>
            <p className="text-slate-500 max-w-2xl text-lg md:text-xl font-medium leading-relaxed mt-4">
              From boutique startups to global giants, we provide the manufacturing backbone for the supplement industry’s most successful brands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-24 px-6 relative z-10">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="relative bg-white border border-slate-100 shadow-xl shadow-slate-200/50 rounded-3xl p-8 backdrop-blur-md flex flex-col justify-between hover:border-purple-500/50 transition-all duration-500 group overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-tr from-purple-600/5 to-indigo-600/5 rounded-full blur-2xl group-hover:scale-150 transition-all duration-500 pointer-events-none" />
                <div>
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 border border-slate-100 group-hover:scale-110 transition-transform">
                    {s.icon}
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-dark mb-4 group-hover:text-purple-600 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">
                    {s.desc}
                  </p>
                  <ul className="flex flex-col gap-3 mb-8 border-t border-slate-100 pt-6">
                    {s.features.map((f, fi) => (
                      <li key={fi} className="flex items-center gap-3 text-xs font-black uppercase tracking-wider text-slate-600">
                        <Check size={14} className="text-orange-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href={s.link} className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-purple-600 hover:text-dark transition-colors mt-auto">
                  Explore Service <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Tier Comparison Table */}
      <section className="py-24 px-6 relative z-10 bg-[#FAFAFA] border-t border-slate-100">
        <div className="container-max">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-bold uppercase tracking-[0.4em] text-xs mb-4 block">OPTIMAL TIER SELECTION</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-dark">
              Service Tiers Compared
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto mt-4">
              Determine the most resource-efficient integration path based on your custom formulation and volume requirements.
            </p>
          </div>

          <div className="bg-white border border-slate-100 shadow-xl shadow-slate-200/50 rounded-3xl overflow-x-auto backdrop-blur-sm">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <th className="p-6 text-xs font-black uppercase tracking-widest text-slate-500">Capability</th>
                  <th className="p-6 text-xs font-black uppercase tracking-widest text-purple-600">Private Label</th>
                  <th className="p-6 text-xs font-black uppercase tracking-widest text-orange-500">Third-Party</th>
                  <th className="p-6 text-xs font-black uppercase tracking-widest text-indigo-600">Custom Formulation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs font-semibold text-slate-600">
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-6 font-black uppercase text-dark">MOQ Target</td>
                  <td className="p-6">Low (From 200 units)</td>
                  <td className="p-6">Medium (From 500 units)</td>
                  <td className="p-6">Custom (SLA based)</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-6 font-black uppercase text-dark">R&D Formulation Cost</td>
                  <td className="p-6 text-green-600 font-bold">10000</td>
                  <td className="p-6 text-green-600 font-bold">15000</td>
                  <td className="p-6">Variable (Offset at MOQ)</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-6 font-black uppercase text-dark">Flavor Control</td>
                  <td className="p-6">From 50+ pre-approved options</td>
                  <td className="p-6">Your exact chemical specs</td>
                  <td className="p-6 font-bold">100% custom pilot trials</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-6 font-black uppercase text-dark">Regulatory Assurances</td>
                  <td className="p-6">FSSAI and cGMP certified</td>
                  <td className="p-6">Full batch audits</td>
                  <td className="p-6">Global FDA & EFSA dossier support</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="container-max">
          <div className="bg-white border border-slate-100 shadow-xl shadow-slate-200/50 rounded-3xl p-8 md:p-16 backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/2 pointer-events-none" />
            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-20">
              <div className="lg:w-1/3">
                <span className="text-purple-600 font-bold uppercase tracking-[0.4em] text-xs mb-6 block">THE WORKFLOW</span>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-8">
                  Concept <br /> to Shelf <br /> <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Fast.</span>
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                  We’ve optimized every second of the production cycle. Your market entry is measured in weeks, not months.
                </p>
              </div>
              <div className="lg:w-2/3 grid md:grid-cols-3 gap-8">
                {workflow.map((w, i) => (
                  <div key={i} className="flex flex-col gap-6 p-6 bg-white border border-slate-100 shadow-md shadow-slate-200/30 rounded-2xl hover:border-purple-500/30 transition-all">
                    <div className="text-3xl font-black text-purple-600">{w.step}</div>
                    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-primary shadow-sm border border-slate-100">
                      {w.icon}
                    </div>
                    <h4 className="text-lg font-black uppercase tracking-tight text-dark">{w.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{w.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Segments Served */}
      <section className="py-24 px-6 relative z-10 bg-[#FAFAFA] border-t border-slate-100">
        <div className="container-max">
          <div className="text-center mb-16">
            <span className="text-purple-600 font-bold uppercase tracking-[0.4em] text-xs mb-4 block">PRODUCT VERSATILITY</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-dark">
              Segments We Serve
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto mt-4">
              Our advanced blenders and encapsulators are calibrated to process compound ingredients for specialized nutrition fields.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {segments.map((segment, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-slate-100 shadow-md shadow-slate-200/30 p-8 rounded-3xl hover:border-purple-500/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300 border border-slate-100">
                  <Compass size={18} />
                </div>
                <h4 className="text-lg font-black uppercase tracking-tight mb-2 text-dark group-hover:text-purple-600 transition-colors">
                  {segment.title}
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {segment.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Showroom */}
      <section className="py-24 px-6 relative z-10">
        <div className="container-max">
          <div className="bg-white border border-slate-100 shadow-xl shadow-slate-200/50 rounded-3xl p-8 md:p-16 relative overflow-hidden backdrop-blur-md">
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="text-center mb-16">
              <span className="text-orange-500 font-bold uppercase tracking-[0.4em] text-xs mb-4 block">HARDWARE RIGOR</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-dark">
                Equipment Showroom
              </h2>
              <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto mt-4">
                Industrial-grade hardware designed for continuous operating reliability and zero compound cross-contamination.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {equipmentSpecs.map((spec, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-50 p-6 rounded-2xl hover:bg-white hover:border-orange-500/20 transition-all duration-300 border border-slate-100 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-6">
                    <Cpu size={20} />
                  </div>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{spec.name}</h4>
                  <span className="text-lg font-black tracking-tighter text-dark block mb-2">{spec.speed}</span>
                  <p className="text-slate-500 text-xs leading-relaxed">{spec.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SLA & Quality FAQ */}
      <section className="py-24 px-6 relative z-10 bg-[#FAFAFA] border-t border-slate-100">
        <div className="container-max max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-purple-600 font-bold uppercase tracking-[0.4em] text-xs mb-4 block">CONTRACTUAL ASSURANCES</span>
            <h2 className="text-4xl font-black uppercase tracking-tighter text-dark">
              SLA & Quality FAQ
            </h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto mt-4">
              Clear parameters regarding batch failure protection, transport logistics, and custom laboratory billing.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "What target purity SLA does Admire Nutra guarantee in writing?",
                answer: "We guarantee a minimum 99.8% active compound purity rating. Every single shipment undergoes rigorous batch testing and is delivered with a comprehensive, transparent Certificate of Analysis (CoA)."
              },
              {
                question: "What is Admire Nutra's batch failure replacement policy?",
                answer: "We implement a completely zero-cost batch replacement policy. If any batch fails the required third-party lab clearance parameters, we rerun the entire production line immediately."
              },
              {
                question: "Do you assist with FSSAI compliance documentation?",
                answer: "Yes, our dedicated regulatory compliance department prepares all essential legal FSSAI certificates, allergen clearance manifests, and domestic declaration logs."
              }
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm backdrop-blur-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 flex items-center justify-between text-left group"
                >
                  <h3 className="text-sm font-black uppercase tracking-wider text-dark group-hover:text-purple-600 transition-colors pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100"
                  >
                    <ChevronDown className="text-slate-400 group-hover:text-dark transition-colors" size={16} />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-slate-500 text-sm leading-relaxed p-6 pt-0 border-t border-slate-100">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 relative z-10">
        <div className="container-max">
          <div className="bg-white border border-slate-100 shadow-2xl shadow-slate-200/80 rounded-3xl p-12 md:p-20 text-center flex flex-col items-center relative overflow-hidden backdrop-blur-md">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-transparent to-orange-500/5 pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none text-dark">
                Engineer Your <br /> <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">Profitability.</span>
              </h2>
              <p className="text-slate-500 font-bold uppercase tracking-widest mb-10 max-w-lg text-xs md:text-sm">
                Stop waiting on manufacturers. Start scaling with a production partner that understands your speed.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link href="/customize" className="btn-premium">
                  Request Manufacturing Quote
                </Link>
                <Link href="/contact" className="btn-premium !bg-white border border-slate-200 hover:border-slate-400 !text-slate-700 !shadow-none">
                  Consult Capacity
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
