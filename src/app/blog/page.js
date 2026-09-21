'use client';

import { useEffect, useState } from 'react';
import { Calendar, User, ArrowRight, Clock, Share2, Sparkles, Zap, ChevronDown, Award, Compass, FileCheck, Landmark } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const BlogListing = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [openFaq, setOpenFaq] = useState(null);
  
  const categories = ['All', 'Manufacturing', 'Market Trends', 'R&D', 'Packaging'];

  const featuredPosts = [
    {
      id: 1,
      title: "The Future of Whey: 2026 Ingredient Trends",
      excerpt: "Analyzing the shift toward bio-available peptides and the rise of hybrid plant-dairy blends in the premium sector.",
      category: "Market Trends",
      author: "Dr. Aman Singh",
      date: "Oct 24, 2026",
      readTime: "8 min read",
      image: "/Future of Whey.jpeg",
      featured: true
    },
    {
      id: 2,
      title: "Scaling MOQs: A Guide for Startup Brands",
      excerpt: "How we engineered our production line to support disruptive growth for startups without compromising on pharmaceutical grade quality.",
      category: "Manufacturing",
      author: "Ravi Verma",
      date: "Oct 20, 2026",
      readTime: "5 min read",
      image: "/Scaling MOQs.jpeg",
      featured: false
    },
    {
      id: 3,
      title: "Sustainable Packaging in Sports Nutrition",
      excerpt: "Moving beyond HDPE. Exploring compostable pouches and the impact of 'Green-Tech' on brand perception.",
      category: "Packaging",
      author: "Meera Gupta",
      date: "Oct 15, 2026",
      readTime: "6 min read",
      image: "/Sustainable Packaging.jpeg",
      featured: false
    },
    {
      id: 4,
      title: "Reverse Engineering: The Art of Formulation",
      excerpt: "Inside our lab: How our Ph.D team breaks down global best-sellers to create improved proprietary versions for our partners.",
      category: "R&D",
      author: "Dr. Aman Singh",
      date: "Oct 12, 2026",
      readTime: "12 min read",
      image: "/Reverse Engineering.jpeg",
      featured: false
    }
  ];

  const blogColumns = [
    { title: "Peptide Horizons", desc: "Scientific explorations into next-gen bioactive amino acid chains, cellular absorption limits, and synthesis assays." },
    { title: "Clean-Label Audits", desc: "Detailed breakdowns of recent global heavy metal limits, GMO labeling codes, and organic validation rules." },
    { title: "Scale Mechanics", desc: "Sourcing best practices, sifter line setups, custom machinery throughputs, and MOQ cost efficiency guides." },
    { title: "Material Science", desc: "Reviewing eco-friendly post-consumer recycled glass containers, matte HDPE canisters, and airtight tins." }
  ];

  const editorialJourney = [
    { step: "Phase 01", title: "Hypothesis Lab Work", desc: "Our formulation specialists draft an analytical thesis covering new ingredient mechanics and trials." },
    { step: "Phase 02", title: "Scientific Peer Review", desc: "Our PhD board inspects active chromatography reports, HPLC matches, and clinical trial citations." },
    { step: "Phase 03", title: "Compliance Sign-off", desc: "Regulatory consultants verify terminology meets FSSAI standards, avoiding non-compliant claims." },
    { step: "Phase 04", title: "Dossier Release", desc: "The verified report is published digitally for partners, complete with reference citation indices." }
  ];

  const journalStats = [];

  const filteredPosts = activeCategory === 'All' 
    ? featuredPosts 
    : featuredPosts.filter(p => p.category === activeCategory);

  return (
    <div className="bg-white pb-24">
      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-24 bg-[#FAFAFA] border-b border-gray-100">
        <div className="container-max px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-4xl">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Sparkles size={20} />
                </div>
                <span className="text-[12px] font-black uppercase tracking-[0.4em] text-primary">Industry Journal</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-10"
              >
                Expert Takes on <br />
                <span className="premium-gradient-text">Bio-Performance.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-slate-600 text-xl md:text-2xl font-normal max-w-2xl leading-relaxed tracking-tight"
              >
                Step inside the R&D facilities of India&apos;s premier nutraceutical manufacturing partner. We document the clinical science, market trends, and production disruptions shaping the future of human performance.
              </motion.p>
            </div>
            
            {/* Animated Visual - Food Industry Images */}
            <motion.div
              key="premium-bento-layout"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex flex-col md:grid md:grid-cols-12 md:grid-rows-2 gap-4 lg:gap-6 md:h-[600px] lg:h-[520px] w-full mt-12 lg:mt-0 lg:pl-4"
            >
              {/* Left tall image (Col span 7) */}
              <div className="md:row-span-2 md:col-span-7 rounded-[2rem] overflow-hidden relative group shadow-2xl h-[350px] md:h-auto">
                 <img src="/blog-post2.jpeg" alt="Manufacturing Scale Up" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
                 
                 <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8">
                    <div className="bg-primary px-3 py-1.5 rounded-full inline-flex items-center gap-2 mb-3 md:mb-4 shadow-lg border border-white/10">
                       <Sparkles size={12} className="text-white" />
                       <span className="text-[10px] font-black text-white tracking-widest uppercase">Scale-Up Facility</span>
                    </div>
                    <h3 className="text-white font-black text-2xl md:text-3xl leading-tight mb-2 tracking-tight">Advanced Manufacturing</h3>
                    <p className="text-white/70 font-medium text-xs md:text-sm">High-capacity pharmaceutical grade production lines.</p>
                 </div>
              </div>
            
              {/* Top right image (Col span 5) */}
              <div className="md:row-span-1 md:col-span-5 rounded-[2rem] overflow-hidden relative group shadow-xl h-[220px] md:h-auto">
                 <img src="/blog-post1.jpeg" alt="Protein R&D" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
                 
                 <div className="absolute bottom-6 left-6">
                    <div className="bg-accent px-3 py-1 rounded-full inline-flex items-center gap-2 mb-2 md:mb-3 shadow-lg border border-white/10">
                       <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                       <span className="text-[9px] font-black text-white tracking-widest uppercase">R&D Lab</span>
                    </div>
                    <p className="text-white font-bold text-base md:text-lg tracking-tight">Proprietary Blends</p>
                 </div>
              </div>
            
              {/* Bottom right image (Col span 5) */}
              <div className="md:row-span-1 md:col-span-5 rounded-[2rem] overflow-hidden relative group shadow-xl h-[220px] md:h-auto">
                 <img src="/blog-post3.jpeg" alt="Quality Verified" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
                 
                 <div className="absolute bottom-6 left-6">
                    <div className="bg-white px-3 py-1 rounded-full inline-flex items-center gap-2 mb-2 md:mb-3 shadow-lg">
                       <Award size={12} className="text-primary" />
                       <span className="text-[9px] font-black text-primary tracking-widest uppercase">Verified</span>
                    </div>
                    <p className="text-white font-bold text-base md:text-lg tracking-tight">Clinical Validation</p>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-24 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 py-6 mb-16">
        <div className="container-max px-6">
          <div className="flex flex-wrap gap-4 items-center">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mr-4">Filter by:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105' 
                    : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="container-max px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, index) => (
              <motion.article 
                layout
                key={post.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex flex-col group"
              >
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-8 shadow-xl hover:shadow-2xl transition-shadow duration-500">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-6 left-6">
                    <span className="px-5 py-2 bg-white/95 backdrop-blur-sm rounded-full text-[9px] font-black uppercase tracking-widest text-primary shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6 px-2">
                  <div className="flex items-center gap-2">
                    <Calendar size={12} className="text-primary" /> {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={12} className="text-primary" /> {post.readTime}
                  </div>
                </div>

                <div className="px-2">
                  <h2 className="text-2xl font-black tracking-tighter text-slate-900 group-hover:text-primary transition-colors leading-tight mb-4">
                    {post.title}
                  </h2>
                </div>

                <p className="text-slate-500 text-sm leading-relaxed mb-8 px-2 line-clamp-3 font-medium">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-8 border-t border-slate-100 flex items-center justify-between px-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-black text-primary">
                      {post.author.charAt(0)}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">{post.author}</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* NEW SECTION 1: Editorial Columns (Service Highlights) */}
      <section className="mb-24 px-6">
        <div className="container-max">
          <div className="text-center mb-16">
            <span className="text-accent font-black uppercase tracking-[0.4em] text-[12px] mb-4 block">Specialized Coverage</span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
              Technical Editorial <span className="premium-gradient-text">Columns</span>
            </h2>
            <p className="text-dark/40 font-bold uppercase tracking-widest text-xs max-w-xl mx-auto leading-relaxed">
              We cover the deep mechanics of supplement manufacturing, clinical research, and brand operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogColumns.map((col, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#FAFAFA] border border-slate-100 p-8 rounded-2xl shadow-lg hover:border-primary/20 hover:bg-white transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-primary mb-6 group-hover:bg-primary/5 transition-colors">
                  <Compass size={20} />
                </div>
                <h4 className="text-lg font-black uppercase tracking-tight mb-2 text-dark group-hover:text-primary transition-colors">
                  {col.title}
                </h4>
                <p className="text-dark/50 text-xs font-semibold leading-relaxed">
                  {col.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* NEW SECTION 3: Editorial Vetting Process (Timeline / Journey) */}
      <section className="mb-24 px-6">
        <div className="container-max">
          <div className="text-center mb-16">
            <span className="text-accent font-black uppercase tracking-[0.4em] text-[12px] mb-4 block">Verification Loop</span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
              Technical Vetting <span className="premium-gradient-text">Journey</span>
            </h2>
            <p className="text-dark/40 font-bold uppercase tracking-widest text-xs max-w-xl mx-auto leading-relaxed">
              Every technical guide is peer-audited by biochemists before publishing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {editorialJourney.map((journey, i) => (
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
                  <span className="text-2xl font-black tracking-tighter text-dark">{journey.step}</span>
                </div>
                <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">{journey.title}</h4>
                <p className="text-dark/50 text-xs font-semibold leading-relaxed">
                  {journey.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 4: Research Citation FAQ (FAQ) */}
      <section className="mb-24 px-6">
        <div className="container-max">
          <div className="text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[12px] mb-4 block">Journal Support</span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
              Citation & Research <span className="premium-gradient-text">FAQ</span>
            </h2>
            <p className="text-dark/40 font-bold uppercase tracking-widest text-xs max-w-xl mx-auto leading-relaxed">
              Standard rules for referencing our assays, licensing text, and contributing expert columns.
            </p>
          </div>

          <div className="grid gap-4 max-w-3xl mx-auto">
            {[
              {
                question: "Can we republish or quote Admire Nutra white papers on our own brand&apos;s blog?",
                answer: "Yes, you are permitted to quote our publications under Creative Commons licenses. We only require direct reference linking to the original article on Admire Nutra."
              },
              {
                question: "How are raw clinical statistics peer-reviewed for your articles?",
                answer: "Every clinical claim or ingredient bio-availability figure is cross-examined against active PubMed reference indexes and verified by our Scientific Advisory Panel before release."
              },
              {
                question: "Do you accept external research or legal compliance guest contributions?",
                answer: "Yes, from accredited Ph.D biochemistry scholars, sports nutrition legal advisors, and food safety compliance experts. Contact pr@admirenutra.com to pitch an editorial."
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
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container-max px-4 sm:px-6">
        <div className="bg-dark rounded-xl p-8 md:p-12 relative overflow-hidden text-center flex flex-col items-center">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />
          
          <motion.div 
            whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}
            viewport={{ once: true }}
            className="relative z-10 max-w-2xl"
          >
            <div className="w-16 h-16 bg-white/5 rounded-xl flex items-center justify-center text-primary mx-auto mb-10 border border-white/10">
              <Zap size={32} fill="currentColor" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none mb-8">
              Stay Ahead of the <br /> <span className="premium-gradient-text">Nutra Curve.</span>
            </h2>
            <p className="text-white/40 font-bold uppercase tracking-widest text-xs mb-12">
              Monthly manufacturing insights, regulatory updates, and exclusive R&D previews.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 w-full max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter work email" 
                className="flex-grow bg-white/5 border border-white/10 rounded-full px-8 py-4 text-white text-sm font-medium outline-none focus:border-primary focus:bg-white/10 transition-all"
              />
              <button className="btn-premium whitespace-nowrap !py-4">
                Subscribe <ArrowRight size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogListing;
