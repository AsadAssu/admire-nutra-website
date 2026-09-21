'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Award, Star, ArrowRight, ChevronDown, CheckCircle2, Factory, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function PremiumServicePage({
  serviceTitle,
  heroBadge,
  heroTitle,
  heroDescription,
  benefits,
  stats,
  features,
  faqs,
  schema,
  accentColor = "from-purple-600 to-indigo-600",
  vaultTitle = "Facility Capabilities",
  vaultDesc = "Explore high-velocity automatic powder filling, climate-controlled dry-blend packaging, and rigorous laboratory standardizations.",
  tags = ["Metric Ton Output", "cGMP Audited", "Nitrogen Warehousing"]
}) {
  const [openFaq, setOpenFaq] = useState(null);

  // Animation variants for smooth premium pacing
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-dark pt-32 overflow-hidden font-sans relative">
      {/* Dynamic SEO JSON-LD Schema Markup */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}

      {faqs && faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.q || faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.a || faq.answer
                }
              }))
            })
          }}
        />
      )}

      {/* Cinematic Bioluminescent Background Elements (Light theme adapted) */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] glow-spot-primary rounded-full -translate-y-1/3 translate-x-1/4 luxury-pulse-glow pointer-events-none z-0"></div>
      <div className="absolute top-1/3 left-0 w-[700px] h-[700px] glow-spot-accent rounded-full -translate-x-1/3 luxury-pulse-glow pointer-events-none z-0" style={{ animationDelay: '-3s' }}></div>
      <div className="absolute bottom-1/4 right-10 w-[800px] h-[800px] glow-spot-primary rounded-full translate-x-1/4 luxury-pulse-glow pointer-events-none z-0" style={{ animationDelay: '-6s' }}></div>

      <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            HERO SECTION: High-impact Nike/Gymshark aesthetic with custom Facility card
            ========================================================================= */}
        <section className="relative pb-20 pt-8 sm:pb-28">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-8"
            >
              {/* Premium Glow Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-purple-50 border border-purple-100 rounded-full text-primary font-extrabold uppercase tracking-[0.18em] text-[10px] sm:text-xs shadow-sm">
                <Sparkles size={13} className="text-orange-500 animate-pulse" /> {heroBadge}
              </div>

              {/* Bold Typography Title */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-dark leading-[0.9] drop-shadow-sm">
                {heroTitle[0]} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-orange-400 animate-gradient drop-shadow-md">
                  {heroTitle[1]}
                </span>
              </h1>

              {/* Apple-level clean description */}
              <p className="text-slate-500 text-lg sm:text-xl font-medium leading-relaxed max-w-xl">
                {heroDescription}
              </p>

              {/* Modern Action-Oriented Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link 
                  href="/customize" 
                  className="btn-premium px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black uppercase tracking-[0.2em] text-[10px] transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/20 active:scale-95 flex items-center justify-center gap-3 shrink-0"
                >
                  Request Capacity <ArrowRight size={16} />
                </Link>
                <Link 
                  href="/contact" 
                  className="btn-outline px-8 py-4 sm:px-10 sm:py-5 border-2 border-slate-200 hover:border-slate-400 bg-white text-slate-700 hover:text-dark font-black uppercase tracking-[0.2em] text-[10px] transition-all duration-500 active:scale-95 flex items-center justify-center gap-3"
                >
                  Audit Facility
                </Link>
              </div>
            </motion.div>

            {/* Right Interactive Tech Card Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative"
            >
              <div className="relative aspect-square sm:aspect-video lg:aspect-square rounded-3xl overflow-hidden group p-8 sm:p-12 flex flex-col justify-between glassmorphism-luxury">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-transparent to-orange-500/5 pointer-events-none" />
                
                <div className="flex justify-between items-start">
                  <div className="w-14 h-14 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500 shadow-md">
                    <Factory size={26} className="text-purple-600" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] bg-purple-50 px-3.5 py-1.5 rounded-full text-primary border border-purple-100 shadow-sm">
                    WHO-GMP Facility
                  </span>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-dark leading-none">
                    {vaultTitle}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    {vaultDesc}
                  </p>
                  
                  {/* Dynamic Tag list with hover glow */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {tags.map((tag, idx) => (
                      <span key={idx} className="px-3.5 py-1.5 bg-slate-50 border border-slate-100 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-slate-500 hover:text-purple-600 hover:border-purple-200 transition-all duration-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Outer decorative neon blurs */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl animate-pulse -z-10" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-indigo-500/5 rounded-full blur-3xl animate-pulse -z-10" />
            </motion.div>

          </div>
        </section>

        {/* =========================================================================
            STATS SECTION: Elevated metric cards showcasing high-quality markers
            ========================================================================= */}
        <section className="py-12 border-t border-slate-100 mb-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="premium-glow-card p-6 text-center rounded-2xl"
              >
                <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500 mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            FEATURES SECTION: Why Choose Us (Industrial Capacity & R&D Excellence)
            ========================================================================= */}
        <section className="py-20 border-t border-slate-100 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-purple-600 font-extrabold uppercase tracking-[0.35em] text-xs mb-4 block">State-of-the-art Setup</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-dark leading-none">
              Industrial <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Scale Capacities</span>
            </h2>
            <p className="text-slate-500 text-base sm:text-lg font-medium leading-relaxed mt-4">
              We leverage advanced mechanical automation and strict validation schedules to manufacture multi-ton client batches while maintaining 100% active compound biological stability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                className="premium-glow-card p-8 md:p-10 rounded-3xl group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-tr from-purple-500/5 to-transparent rounded-full translate-x-1/3 -translate-y-1/3 group-hover:scale-150 transition-transform duration-500 pointer-events-none" />
                <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-purple-500/30 transition-all duration-500 shadow-sm">
                  {feat.icon}
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight text-dark mb-4 group-hover:text-purple-600 transition-colors duration-300">{feat.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            CATALOG SECTION: Manufacturing & Process Capabilities
            ========================================================================= */}
        <section className="py-20 border-t border-slate-100">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-purple-600 font-extrabold uppercase tracking-[0.35em] text-xs mb-4 block">System Integration</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-dark">
                Bespoke <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Process Offerings</span>
              </h2>
            </div>
            <div className="w-24 h-[3px] bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full hidden md:block"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((prod, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="premium-glow-card p-8 sm:p-10 rounded-3xl flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Glowing hover accent border line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left pointer-events-none" />

                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] px-3.5 py-1.5 bg-purple-50 text-primary rounded-full border border-purple-100 shadow-sm">
                      {prod.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-dark mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    {prod.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium mb-4">
                    {prod.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            FAQ ACCORDION: Fluid, interactive answers centered around safety/MOQ
            ========================================================================= */}
        <section className="py-20 border-t border-slate-100 relative">
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-purple-600 font-extrabold uppercase tracking-[0.35em] text-xs mb-4 block">Knowledge Hub</span>
              <h2 className="text-4xl font-black uppercase tracking-tighter text-dark">
                Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Governance FAQs</span>
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="premium-glow-card !p-0 rounded-2xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-6 text-left flex justify-between items-center gap-6 group focus:outline-none bg-transparent"
                    >
                      <span className="text-base sm:text-lg font-black uppercase tracking-tight text-dark group-hover:text-purple-600 transition-colors duration-300">
                        {faq.q}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 shrink-0 group-hover:border-purple-300"
                      >
                        <ChevronDown size={18} />
                      </motion.div>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="p-6 pt-0 border-t border-slate-100 text-slate-500 text-sm leading-relaxed font-medium bg-slate-50/30">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            CONVERSION CTA: Beautiful cinematic gradient CTA
            ========================================================================= */}
        <section className="py-20">
          <div className="relative rounded-[2.5rem] p-8 sm:p-12 md:p-16 text-center max-w-4xl mx-auto overflow-hidden shadow-2xl glassmorphism-luxury">
            {/* Ambient background accent grid inside CTA */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-transparent to-orange-500/5 pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-dark leading-[0.95] drop-shadow-sm">
                Scale Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-orange-400 font-black">
                  Manufacturing Standard
                </span>
              </h2>
              <p className="text-slate-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed font-medium">
                Partner with Admire Nutra to access pristine pure ingredient pipelines, advanced analytical R&D, and custom packaging systems configured to attract high-margin digital clientele.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
                <Link 
                  href="/customize" 
                  className="btn-premium px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black uppercase tracking-[0.2em] text-[10px] transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/20 active:scale-95 flex items-center justify-center gap-3 w-full sm:w-auto"
                >
                  Start production
                </Link>
                <Link 
                  href="/contact" 
                  className="btn-outline px-8 py-4 sm:px-10 sm:py-5 border border-slate-200 hover:border-slate-400 bg-white text-slate-600 hover:text-dark font-black uppercase tracking-[0.2em] text-[10px] transition-all duration-500 active:scale-95 flex items-center justify-center gap-3 w-full sm:w-auto"
                >
                  Consult our facility
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
