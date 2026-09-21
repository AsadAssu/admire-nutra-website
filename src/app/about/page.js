'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, Rocket, ShieldCheck, Factory, Globe, Zap, ChevronDown, Landmark, Sparkles, Milestone, FlaskConical, Settings, ShieldAlert, Cpu } from 'lucide-react';
import JsonLd from '@/components/JsonLd';

const AboutPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Admire Nutra Private Limited",
    "url": "https://mascular-2a757.web.app/about",
    "logo": "https://mascular-2a757.web.app/admire-nutra-logo.png",
    "description": "Admire Nutra is a leading B2B contract manufacturing partner specializing in high-quality Dietary Supplements including powders, tablets, and capsules.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mohali",
      "addressRegion": "Punjab",
      "addressCountry": "IN"
    },
    "certification": [
      "ISO 9001:2015",
      "WHO-GMP",
      "FSSAI"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What types of supplements can you manufacture?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We manufacture a wide range of dietary supplements including powder blends, tablets, capsules, softgels, and liquid formulations. Our facility is equipped to handle various product types for fitness, wellness, and health applications."
        }
      },
      {
        "@type": "Question",
        "name": "What are your minimum order quantities?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our MOQ varies depending on product type and packaging requirements. We offer flexible options for both startups and established brands, starting from as low as 200 units for certain formulations. Contact us for specific requirements."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the manufacturing process take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Typical turnaround time is 4-6 weeks from final formula approval to finished product delivery. This includes raw material sourcing, production, quality testing, and packaging. We also offer expedited options for urgent requirements."
        }
      },
      {
        "@type": "Question",
        "name": "What certifications does your facility hold?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our manufacturing facility is FSSAI registered and ISO 9001:2015 certified. We follow GMP (Good Manufacturing Practices) guidelines to ensure every product meets the highest standards of quality, safety, and consistency."
        }
      },
      {
        "@type": "Question",
        "name": "Do you help with product formulation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer comprehensive R&D support including custom formulation development. Our team of experts can help you create unique formulations based on market trends, target demographics, and specific health benefits you want to offer."
        }
      },
      {
        "@type": "Question",
        "name": "What packaging options are available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide complete packaging solutions including bottles, jars, pouches, blister packs, and custom containers. Our in-house design team can create attractive labels and packaging that aligns with your brand identity."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer white-label or private label services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer both white-label and private label manufacturing services. White-label uses our existing formulations, while private label allows you to create custom formulations exclusively for your brand. Both options include full branding support."
        }
      },
      {
        "@type": "Question",
        "name": "How do you ensure product quality?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We implement rigorous quality control at every stage - from raw material testing through final product inspection. Each batch undergoes thorough testing for purity, potency, and safety before release. We maintain detailed documentation for traceability."
        }
      }
    ]
  };

  const stats = [
    { label: "Manufacturing Area", value: "2,000", suffix: "SQFT", icon: <Factory /> },
    { label: "Skilled Experts", value: "100", suffix: "+", icon: <Users /> },
    { label: "Daily Capacity", value: "1,000", suffix: "+ Units", icon: <Zap /> },
    { label: "Quality Focus", value: "100", suffix: "%", icon: <Award /> },
  ];

  const timelineMilestones = [
    { year: "2018", title: "Company Inception", desc: "Founded with a mission to deliver uncompromising supplement purity and build a world-class contract manufacturing ecosystem." },
    { year: "2020", title: "Facility Blueprint", desc: "Constructed our flagship cGMP plant in Mohali with optimized production space and dedicated HVAC systems." },
    { year: "2022", title: "Certification Mastery", desc: "Achieved FSSAI, ISO 9001:2015, and WHO-GMP certifications." },
    { year: "2024", title: "R&D Lab Launch", desc: "Inaugurated our advanced flavor profile laboratory led by experts, revolutionizing taste systems in active nutrition." },
    { year: "2026", title: "Digital Traceability & Expansion", desc: "Expanded the facility, integrating fully digitalized batch tracking, high-speed rotary presses, and zero-loss packaging." }
  ];

  const sourcingHighlights = [
    { country: "New Zealand", source: "Grass-Fed Whey Isolate", desc: "Hormone-free, cold-processed microfiltered dairy from premium pastured cows." },
    { country: "Belgium & France", source: "Patented Micronutrients", desc: "Physiologically active vitamins and minerals with maximum bio-availability." },
    { country: "Brazil & India", source: "Organic Plant Isolates", desc: "Sustainably harvested non-GMO pea, brown rice, and botanical extracts." },
    { country: "Sweden", source: "Premium Natural Sweeteners", desc: "Zero-glycemic stevia and monk fruit blends engineered for smooth flavor delivery." }
  ];

  const machineryCapacities = [
    { name: "Octagonal Smart Blender", spec: "15,000 KG / Day", desc: "Ensures uniform micronutrient distribution in complex powder formulas." },
    { name: "Rotary Tablet Compactor", spec: "1,000,000 Tablets / Hour", desc: "High-precision pressure compression for stable, rapid-disintegrating tablets." },
    { name: "High-Speed Capsule Filler", spec: "500,000 Capsules / Hour", desc: "Automatic tamping pin technology with precise dosage weights." },
    { name: "Digital Form-Fill-Seal Line", spec: "150 Pouches / Minute", desc: "Modified atmosphere packaging preserving oxygen-sensitive compounds." }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div className="bg-[#FAFAFA]">
      <JsonLd data={organizationSchema} />
      <JsonLd data={faqSchema} />
      <section className="relative pt-24 sm:pt-32 pb-12 overflow-hidden px-4 sm:px-8">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/3"></div>

        <div className="container-max relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12"
          >
            <motion.span variants={itemVariants} className="text-primary font-black uppercase tracking-[0.4em] text-[12px] mb-6">
              Our Legacy & Future
            </motion.span>
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
              Pioneering <span className="premium-gradient-text">Health</span> <br /> Innovation.
            </motion.h1>
            <motion.p variants={itemVariants} className="text-dark/60 text-lg md:text-xl leading-relaxed font-medium">
              Admire Nutra Private Limited is a leading contract manufacturing company specializing in high-quality Dietary Supplements for prominent brands. Our state-of-the-art facility is equipped to produce a wide range of supplements, from Powder Supplements to Tablets, Capsules, Gym Supplements, and Vitamin and Mineral Supplements.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-2xl font-black uppercase tracking-tight">The Manufacturing Standard</h2>
                <p className="text-dark/50 leading-relaxed font-medium">
                  As an OEM Supplement Manufacturing expert, Admire Nutra offers tailored solutions for clients to develop their own branded products, from concept to delivery. With certifications like FSSAI registration and ISO 9001:2015, we demonstrate our commitment to quality, ensuring that every supplement meets the highest standards of purity, potency, and safety.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {[
                  { title: "Powder Supplements", desc: "Customizable and effective blends for various health benefits." },
                  { title: "Tablets Supplements", desc: "Convenient and precisely formulated tablets for optimal nutrition." },
                  { title: "Capsules Supplements", desc: "Targeted and potent capsules for specific health needs." },
                  { title: "Gym Supplements", desc: "Designed to enhance performance for fitness enthusiasts." },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-2 p-4 sm:p-6 bg-white border border-slate-100 rounded-xl shadow-sm">
                    <span className="text-xs font-black uppercase tracking-widest text-primary">{item.title}</span>
                    <span className="text-[11px] text-dark/40 font-bold uppercase">{item.desc}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-primary/20 bg-gradient-to-br from-primary/10 via-white to-accent/10 shadow-2xl flex flex-col items-center justify-center p-10 text-center">
                <div className="w-20 h-20 rounded-2xl bg-primary text-white flex items-center justify-center shadow-xl mb-6">
                  <Factory size={36} />
                </div>
                <span className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-2">Excellence in Production</span>
                <h3 className="text-3xl font-black text-primary uppercase tracking-tight mb-4">Admire Nutra</h3>
                <p className="text-xs font-bold text-dark/60 uppercase tracking-widest leading-relaxed max-w-xs">
                  Advanced Contract Manufacturing Facility & Quality-Driven Processes
                </p>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-2xl border border-slate-100 hidden md:block max-w-[240px]">
                <ShieldCheck size={32} className="text-primary mb-4" />
                <p className="text-xs font-black uppercase tracking-widest leading-relaxed">
                  Certified GMP <br /> & FSSAI Facility
                </p>
              </div>
            </motion.div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-24">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center gap-4"
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-primary shadow-lg border border-slate-100 mb-2">
                  {s.icon}
                </div>
                <div>
                  <div className="text-4xl font-black tracking-tighter">
                    {s.value}<span className="text-primary">{s.suffix}</span>
                  </div>
                  <div className="text-[10px] font-black uppercase text-dark/30 tracking-[0.2em] mt-2">
                    {s.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sourcing Standards Section */}
          <section className="mb-24 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="text-center mb-16">
              <span className="text-accent font-black uppercase tracking-[0.4em] text-[12px] mb-4 block">Uncompromised Supply Chain</span>
              <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
                Global Premium <span className="premium-gradient-text">Sourcing</span>
              </h2>
              <p className="text-dark/40 font-bold uppercase tracking-widest text-xs max-w-xl mx-auto leading-relaxed">
                We select raw ingredients only from certified global purveyors to ensure absolute purity and chemical standardization.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sourcingHighlights.map((source, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white border border-slate-100 p-8 rounded-2xl shadow-lg hover:border-primary/20 transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Globe size={16} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{source.country}</span>
                  </div>
                  <h4 className="text-lg font-black uppercase tracking-tight mb-2 text-dark group-hover:text-primary transition-colors duration-300">
                    {source.source}
                  </h4>
                  <p className="text-dark/50 text-xs font-medium leading-relaxed">
                    {source.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Vision Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-24">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl border border-slate-100 shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
              <h3 className="text-3xl font-black uppercase mb-6 tracking-tight">Our Vision</h3>
              <p className="text-dark/50 leading-relaxed font-medium text-lg">
                To be the leading contract manufacturing partner for dietary supplements, recognized for delivering high-quality products that help brands achieve their business objectives in the nutraceutical industry.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-primary p-8 rounded-xl text-white shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
              <h3 className="text-3xl font-black uppercase mb-6 tracking-tight">Our Mission</h3>
              <p className="text-white/80 leading-relaxed font-medium text-lg">
                Partner with brands to turn their vision into reality through our expertise in dietary supplements. Whether launching a new product or optimizing manufacturing processes, we support growth and success in the nutraceutical industry.
              </p>
            </motion.div>
          </div>

          {/* Innovation Timeline Section */}
          <section className="mb-24 py-16 bg-white border border-slate-100 shadow-xl rounded-3xl p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/2"></div>
            <div className="text-center mb-16 relative z-10">
              <span className="text-primary font-black uppercase tracking-[0.4em] text-[12px] mb-4 block">Chronicles of Quality</span>
              <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
                The Innovation <span className="premium-gradient-text">Timeline</span>
              </h2>
              <p className="text-dark/40 font-bold uppercase tracking-widest text-xs max-w-xl mx-auto leading-relaxed">
                Tracing our history from a visionary idea to India&apos;s premier high-tech pharmaceutical & dietary manufacturing plant.
              </p>
            </div>

            <div className="relative border-l-2 border-slate-100 max-w-4xl mx-auto pl-6 sm:pl-10 space-y-12">
              {timelineMilestones.map((milestone, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-xl bg-white border-4 border-slate-100 flex items-center justify-center group-hover:border-primary group-hover:scale-110 transition-all duration-300 shadow-md">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mb-2">
                    <span className="text-2xl font-black tracking-tighter text-primary">{milestone.year}</span>
                    <h4 className="text-lg font-black uppercase tracking-tight text-dark">{milestone.title}</h4>
                  </div>
                  <p className="text-dark/50 text-sm font-medium leading-relaxed max-w-2xl">
                    {milestone.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 sm:px-8">
        <div className="container-max bg-white rounded-xl p-8 md:p-12 border border-slate-100 shadow-2xl relative overflow-hidden text-center flex flex-col items-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
          <h2 className="text-xl sm:text-2xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
            Ready to <span className="text-stroke">Scale?</span>
          </h2>
          <p className="text-dark/40 font-bold uppercase tracking-widest mb-12 max-w-lg">
            Join the ranks of high-performance supplement brands manufactured by Admire Nutra Private Limited.
          </p>
          <div className="flex flex-col md:flex-row gap-6">
            <a href="/customize" className="btn-premium">
              Launch Your Brand
            </a>
            <a href="/contact" className="btn-outline">
              Speak to Experts
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 sm:px-8">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
              Frequently Asked <span className="premium-gradient-text">Questions</span>
            </h2>
            <p className="text-dark/40 font-bold uppercase tracking-widest text-sm">
              Everything You Need To Know
            </p>
          </motion.div>

          <div className="grid gap-4 max-w-5xl mx-auto mb-24">
            {[
              {
                question: "What types of supplements can you manufacture?",
                answer: "We manufacture a wide range of dietary supplements including powder blends, tablets, capsules, softgels, and liquid formulations. Our facility is equipped to handle various product types for fitness, wellness, and health applications."
              },
              {
                question: "What are your minimum order quantities?",
                answer: "Our MOQ varies depending on product type and packaging requirements. We offer flexible options for both startups and established brands, starting from as low as 200 units for certain formulations. Contact us for specific requirements."
              },
              {
                question: "How long does the manufacturing process take?",
                answer: "Typical turnaround time is 4-6 weeks from final formula approval to finished product delivery. This includes raw material sourcing, production, quality testing, and packaging. We also offer expedited options for urgent requirements."
              },
              {
                question: "What certifications does your facility hold?",
                answer: "Our manufacturing facility is FSSAI registered and ISO 9001:2015 certified. We follow GMP (Good Manufacturing Practices) guidelines to ensure every product meets the highest standards of quality, safety, and consistency."
              },
              {
                question: "Do you help with product formulation?",
                answer: "Yes, we offer comprehensive R&D support including custom formulation development. Our team of experts can help you create unique formulations based on market trends, target demographics, and specific health benefits you want to offer."
              },
              {
                question: "What packaging options are available?",
                answer: "We provide complete packaging solutions including bottles, jars, pouches, blister packs, and custom containers. Our in-house design team can create attractive labels and packaging that aligns with your brand identity."
              },
              {
                question: "Do you offer white-label or private label services?",
                answer: "We offer both white-label and private label manufacturing services. White-label uses our existing formulations, while private label allows you to create custom formulations exclusively for your brand. Both options include full branding support."
              },
              {
                question: "How do you ensure product quality?",
                answer: "We implement rigorous quality control at every stage - from raw material testing through final product inspection. Each batch undergoes thorough testing for purity, potency, and safety before release. We maintain detailed documentation for traceability."
              }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: { opacity: 1, y: 0 } }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-xl border border-slate-100 shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 flex items-center justify-between text-left group"
                >
                  <h3 className="text-sm font-black uppercase tracking-widest text-primary group-hover:text-accent transition-colors pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                  >
                    <ChevronDown className="text-primary group-hover:text-accent transition-colors" size={20} />
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
                  <p className="text-dark/50 text-sm leading-relaxed font-medium p-6 pt-0">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Machinery & Capacities Section */}
      <section className="pb-24 px-4 sm:px-8">
        <div className="container-max">
          <div className="text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[12px] mb-4 block">Automated Infrastructure</span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
              Machinery & <span className="premium-gradient-text">Capacities</span>
            </h2>
            <p className="text-dark/40 font-bold uppercase tracking-widest text-xs max-w-xl mx-auto leading-relaxed">
              Equipped with pharmaceutical-grade machinery lines engineered for continuous operation, absolute batch consistency, and high speed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {machineryCapacities.map((machine, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-slate-100 p-8 rounded-2xl shadow-lg relative overflow-hidden group hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full translate-x-1/3 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="w-12 h-12 rounded-xl bg-accent/5 text-accent flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <Cpu size={24} />
                </div>
                <span className="text-2xl font-black tracking-tighter text-dark block mb-2">{machine.spec}</span>
                <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">{machine.name}</h4>
                <p className="text-dark/50 text-xs font-semibold leading-relaxed">
                  {machine.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;