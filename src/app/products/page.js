'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ArrowUpRight, Package, ShieldCheck, Zap, FlaskConical, ChevronDown, Sparkles, Award, ClipboardCheck, Compass } from 'lucide-react';
import Link from 'next/link';

const ProductsPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const products = [
    { id: 1, title: "Whey Protein Isolate", cat: "Performance", min: "200 Units", desc: "90% pure protein with near-zero carbs and fats.", tags: ["Bestseller", "Instantized"] },
    { id: 2, title: "Plant Based Blend", cat: "Vegan", min: "100 Units", desc: "Premium pea and brown rice protein fusion.", tags: ["Dairy-Free", "High-Fiber"] },
    { id: 3, title: "Anabolic Mass Gainer", cat: "Performance", min: "200 Units", desc: "High-calorie complex for explosive muscle growth.", tags: ["Complex Carbs", "Vitamins"] },
    { id: 4, title: "Advanced Multivitamin", cat: "Wellness", min: "100 Units", desc: "Coated tablets with 24+ essential micronutrients.", tags: ["Health", "Daily"] },
    { id: 5, title: "Marine Collagen", cat: "Beauty", min: "100 Units", desc: "Hydrolyzed peptides for skin and joint health.", tags: ["Anti-Aging", "Pure"] },
    { id: 6, title: "Pre-Workout Nitro", cat: "Energy", min: "100 Units", desc: "L-Citrulline based explosive energy formula.", tags: ["High Stim", "Pump"] },
  ];

  const packagingTypes = [
    { type: "Matte-Black HDPE", desc: "High-Density Polyethylene container with a sleek tactile feel, providing 100% light protection for active compounds." },
    { type: "Crystal-Clear PET", desc: "Elite visual clarity ideal for vibrant multi-layered capsules or colored powder formulations." },
    { type: "Sustainable PCR Glass", desc: "Eco-friendly, 100% post-consumer recycled glass offering maximum biological shelf-life stability." },
    { type: "Matte Aluminum Tins", desc: "Lightweight, premium metallic tins with airtight screw caps. Fits high-end luxury workout lines." }
  ];

  const patentEnhancers = [
    { name: "Bio-Piperine™", benefit: "Boosts Bio-Absorption", desc: "Black pepper co-factor scientifically proven to amplify micro-nutrient absorption rates." },
    { name: "ProX-Therm™", benefit: "Clean Heat Energy", desc: "A clean thermogenic stimulant matrix that maintains cardiovascular energy levels without standard caffeine crashes." },
    { name: "Organic-KSM66™", benefit: "Stress Adaptation", desc: "Premium, clinical-grade Ashwagandha root extract tailored to enhance mental focus and exercise physical stamina." }
  ];

  const complianceStandards = [
    { title: "Heavy Metal Screen", val: "< 0.01 PPM", detail: "Assayed using ICP-MS technology. Standards are 10x stricter than standard FDA guidelines." },
    { title: "Active Compound HPLC", val: "100% Match", detail: "High-Performance Liquid Chromatography verifies that label dosage strictly matches the physical run." },
    { title: "Microbiological Screen", val: "0 CFU Colony", detail: "Multi-temperature plates check and guarantee zero presence of harmful molds, yeast, or bacteria." },
    { title: "Certified Free-From", val: "Non-GMO Cert", detail: "Formulations can be certified dairy-free, soy-free, and gluten-free under technical request." }
  ];

  const categories = ["All", "Performance", "Wellness", "Vegan",];

  return (
    <div className="bg-[#FAFAFA]">
      <section className="pt-24 sm:pt-32 pb-20 px-4 sm:px-8">
        <div className="container-max">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-2xl"
            >
              <span className="text-primary font-black uppercase tracking-[0.4em] text-[12px] mb-4 block">Production Roster</span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
                Market Ready <br /> <span className="premium-gradient-text">Formulas.</span>
              </h1>
              <p className="text-dark/40 font-bold text-sm uppercase tracking-widest leading-relaxed">
                Choose from our proprietary catalog of lab-certified supplements. <br /> All ready for your branding.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col md:flex-row gap-4 w-full lg:w-auto"
            >
              <div className="relative group flex-grow lg:flex-grow-0">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary transition-colors" size={18} />
                <input
                  placeholder="Search Catalog..."
                  className="w-full lg:w-72 bg-white border border-slate-100 pl-14 pr-6 py-5 rounded-xl outline-none focus:border-primary shadow-sm transition-all text-[10px] font-black uppercase tracking-widest placeholder:text-slate-300"
                />
              </div>
              <div className="flex gap-2 bg-white p-1.5 rounded-xl border border-slate-100 shadow-sm overflow-x-auto no-scrollbar">
                {categories.map(cat => (
                  <button key={cat} className={`px-5 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${cat === 'All' ? 'bg-primary text-white shadow-lg' : 'text-dark/40 hover:bg-slate-50'}`}>
                    {cat}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 rounded-xl">
            {products.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card flex flex-col group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>

                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary bg-primary/5 px-3 py-1.5 rounded-lg w-fit">{p.cat}</span>
                    <span className="text-[9px] font-bold text-dark/30 uppercase mt-2">MOQ: {p.min}</span>
                  </div>
                  <Link href="/customize" className="w-12 h-12 bg-white border border-slate-100 flex items-center justify-center rounded-xl hover:brand-gradient hover:text-white transition-all duration-500 shadow-sm">
                    <ArrowUpRight size={20} />
                  </Link>
                </div>

                <div className="relative z-10 mb-8">
                  <h3 className="text-3xl font-black uppercase mb-3 tracking-tight leading-none">{p.title}</h3>
                  <p className="text-dark/40 text-xs font-semibold leading-relaxed">{p.desc}</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                  {p.tags.map(tag => (
                    <span key={tag} className="text-[8px] font-black uppercase tracking-widest text-dark/50 border border-slate-100 bg-slate-50 px-3 py-1.5 rounded-xl">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* NEW SECTION 1: Packaging Customizer / Showcase (Service Highlights) */}
          <section className="mb-24">
            <div className="text-center mb-16">
              <span className="text-accent font-black uppercase tracking-[0.4em] text-[12px] mb-4 block">Physical Aesthetics</span>
              <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
                Premium Packaging <span className="premium-gradient-text">Suites</span>
              </h2>
              <p className="text-dark/40 font-bold uppercase tracking-widest text-xs max-w-xl mx-auto leading-relaxed">
                Elevate your brand&apos;s shelf presence with container options optimized for both aesthetics and compound shelf-life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {packagingTypes.map((pack, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white border border-slate-100 p-8 rounded-2xl shadow-lg hover:border-primary/20 transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-primary mb-6">
                    <Package size={20} />
                  </div>
                  <h4 className="text-lg font-black uppercase tracking-tight mb-2 text-dark group-hover:text-primary transition-colors duration-300">
                    {pack.type}
                  </h4>
                  <p className="text-dark/50 text-xs font-semibold leading-relaxed">
                    {pack.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Custom R&D Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-dark rounded-xl p-8 md:p-12 text-center relative overflow-hidden group mb-24"
          >
            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-primary/20 rounded-xl flex items-center justify-center text-primary mx-auto mb-10 group-hover:rotate-12 transition-transform duration-500">
                <FlaskConical size={40} />
              </div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 text-white">Proprietary <br /> <span className="text-primary">Formulation Lab.</span></h2>
              <p className="text-white/40 mb-12 max-w-2xl mx-auto font-bold uppercase tracking-[0.15em] text-sm leading-relaxed">
                Have a unique vision? Our PhD chemists can reverse-engineer or invent completely new formulations tailored to your brand&apos;s specific targets.
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <Link href="/contact" className="btn-premium">
                  Request Custom R&D
                </Link>
                <Link href="/customize" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-dark">
                  Start Brand Builder
                </Link>
              </div>
            </div>
          </motion.div>

          {/* NEW SECTION 2: Patented Compounds Grid (Features Grid) */}
          <section className="mb-24 py-16 bg-white border border-slate-100 shadow-xl rounded-3xl p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="text-center mb-16">
              <span className="text-primary font-black uppercase tracking-[0.4em] text-[12px] mb-4 block">Formulation Add-ins</span>
              <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
                Patented Bioactive <span className="premium-gradient-text">Enhancers</span>
              </h2>
              <p className="text-dark/40 font-bold uppercase tracking-widest text-xs max-w-xl mx-auto leading-relaxed">
                Integrate clinical-grade components into your catalog selections to charge premium consumer margins.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {patentEnhancers.map((enhancer, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-6 text-primary">
                    <Sparkles size={20} />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-primary mb-2 block">{enhancer.benefit}</span>
                  <h4 className="text-xl font-black uppercase tracking-tight text-dark mb-4">{enhancer.name}</h4>
                  <p className="text-dark/50 text-xs font-semibold leading-relaxed">{enhancer.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* NEW SECTION 3: Purity & Assay Stats (Achievements / Stats) */}
          <section className="mb-24">
            <div className="text-center mb-16">
              <span className="text-accent font-black uppercase tracking-[0.4em] text-[12px] mb-4 block">Analytical Certifications</span>
              <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
                Purity & Assay <span className="premium-gradient-text">Limits</span>
              </h2>
              <p className="text-dark/40 font-bold uppercase tracking-widest text-xs max-w-xl mx-auto leading-relaxed">
                Every manufacturing run is backed by double-blind laboratory screenings and complete certificate traceability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {complianceStandards.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white border border-slate-100 p-8 rounded-2xl shadow-lg hover:border-accent/30 transition-all duration-300"
                >
                  <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest block mb-4">{item.title}</span>
                  <span className="text-3xl font-black tracking-tighter text-dark block mb-2">{item.val}</span>
                  <p className="text-dark/50 text-xs font-semibold leading-relaxed">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* NEW SECTION 4: Branding & Sourcing FAQ (FAQ) */}
          <section className="mb-24">
            <div className="text-center mb-16">
              <span className="text-primary font-black uppercase tracking-[0.4em] text-[12px] mb-4 block">Branding Specifications</span>
              <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
                Branding & MOQ <span className="premium-gradient-text">FAQ</span>
              </h2>
              <p className="text-dark/40 font-bold uppercase tracking-widest text-xs max-w-xl mx-auto leading-relaxed">
                Key specs detailing minimum initial runs, custom artwork templates, and global transport timelines.
              </p>
            </div>

            <div className="grid gap-4 max-w-3xl mx-auto">
              {[
                {
                  question: "What is the standard turnaround time for Private Labeling?",
                  answer: "Our typical turnaround time is 14 to 21 business days from the moment label designs are approved and raw materials clear our quality check gates."
                },
                {
                  question: "Can I split the MOQ across multiple flavor options?",
                  answer: "Yes, depending on the supplement category. For standard isolates and mass gainers, we permit splitting the initial MOQ across up to three approved flavors."
                },
                {
                  question: "How do you handle FSSAI-compliant labeling audits?",
                  answer: "Our regulatory experts conduct a comprehensive review of your label text, ingredient panels, and claim callouts prior to printing, ensuring 100% compliance with local food safety rules."
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

        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-white border-y border-slate-100 px-4 sm:px-8">
        <div className="container-max grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-primary shrink-0"><ShieldCheck size={28} /></div>
            <div>
              <h4 className="text-lg font-black uppercase mb-2">Quality First</h4>
              <p className="text-dark/40 text-xs font-bold leading-relaxed">Every batch undergoes 12-point testing in our internal QC labs.</p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-primary shrink-0"><Package size={28} /></div>
            <div>
              <h4 className="text-lg font-black uppercase mb-2">Smart Packing</h4>
              <p className="text-dark/40 text-xs font-bold leading-relaxed">Eco-friendly and high-durability packaging solutions available.</p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-primary shrink-0"><Zap size={28} /></div>
            <div>
              <h4 className="text-lg font-black uppercase mb-2">Fast Launch</h4>
              <p className="text-dark/40 text-xs font-bold leading-relaxed">Go from selection to shelf in as little as 21 business days.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
