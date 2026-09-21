'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { Calendar, User, ArrowLeft, Share2, Bookmark, Clock, MessageSquare, ChevronRight } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

const BlogDetail = () => {
  const { slug } = useParams();
  const router = useRouter();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Simulated data for demo (usually fetched from API)
  const blog = {
    title: "The Future of Whey: 2026 Ingredient Trends",
    content: `
      <p>The sports nutrition landscape is undergoing a radical transformation. As we move into 2026, the demand for transparency and bio-availability has reached an all-time high. Consumers are no longer satisfied with simple 'Protein' labels; they want to know the peptide profile, the sourcing ethics, and the metabolic impact.</p>
      
      <h2>1. The Rise of Bio-Available Peptides</h2>
      <p>Our R&D team has observed a 40% increase in inquiries regarding small-batch peptide integration. Unlike traditional whey isolates, these formulas offer rapid absorption rates that align with the high-performance needs of modern athletes.</p>
      
      <blockquote>
        "Manufacturing excellence is no longer about volume; it's about the precision of the molecule." — Dr. Elena V., Head of R&D
      </blockquote>

      <h2>2. Hybrid Formulations</h2>
      <p>One of the most disruptive trends is the 'Hybrid Blend'—combining premium dairy proteins with highly processed plant-based isolates (like pea and brown rice) to create a complete amino acid profile with reduced environmental impact.</p>
      
      <p>At Admire Nutra, we've optimized our cold-filtration process to ensure these disparate ingredients bond without compromising the final texture or flavor profile.</p>

      <h2>3. Clean Label 2.0</h2>
      <p>The 'Clean Label' movement is evolving. It's moving beyond just 'No Artificial Flavors' to include 'Zero-Processing Residuals' and 'Climate-Positive Sourcing'. We are helping brands navigate this by providing full traceability for every batch processed in our Mohali facility.</p>
    `,
    category: "Market Trends",
    author: "Dr. Elena V.",
    date: "October 24, 2026",
    readTime: "8 min read",
    coverImage: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=1200"
  };

  return (
    <div className="bg-white">
      {/* Reading Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-primary z-[1000] origin-left" style={{ scaleX }} />

      {/* Hero Header */}
      <section className="pt-40 pb-20 bg-[#FAFAFA] border-b border-gray-100">
        <div className="container-max px-6">
          <button 
            onClick={() => router.push('/blog')}
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-colors mb-12 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Journal
          </button>

          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-[9px] font-black uppercase tracking-widest">
                {blog.category}
              </span>
              <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest flex items-center gap-2">
                <Clock size={12} /> {blog.readTime}
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-7xl font-black tracking-tighter leading-none mb-12 text-slate-900"
            >
              {blog.title}
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center gap-8"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-sm font-black text-primary">
                  {blog.author.charAt(0)}
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Written by</p>
                  <p className="font-bold text-slate-900">{blog.author}</p>
                </div>
              </div>
              <div className="h-10 w-px bg-slate-200 hidden md:block" />
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Published on</p>
                <p className="font-bold text-slate-900">{blog.date}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="container-max px-6 py-24">
        <div className="grid lg:grid-cols-12 gap-20">
          {/* Side Tools */}
          <aside className="lg:col-span-1 hidden lg:flex flex-col gap-6 sticky top-48 h-fit">
            <button className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/20 transition-all shadow-sm group">
              <Share2 size={20} className="group-hover:scale-110 transition-transform" />
            </button>
            <button className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/20 transition-all shadow-sm group">
              <Bookmark size={20} className="group-hover:scale-110 transition-transform" />
            </button>
            <button className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/20 transition-all shadow-sm group">
              <MessageSquare size={20} className="group-hover:scale-110 transition-transform" />
            </button>
          </aside>

          {/* Article Body */}
          <article className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-xl overflow-hidden mb-16 shadow-2xl"
            >
              <img src={blog.coverImage} alt={blog.title} className="w-full aspect-[21/9] object-cover" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="prose prose-slate prose-xl max-w-none 
                prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-headings:text-slate-900
                prose-p:text-slate-600 prose-p:font-medium prose-p:leading-relaxed
                prose-blockquote:border-primary prose-blockquote:bg-slate-50 prose-blockquote:p-8 prose-blockquote:rounded-3xl prose-blockquote:font-black prose-blockquote:uppercase prose-blockquote:tracking-tight prose-blockquote:not-italic
                prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8"
            >
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </motion.div>
          </article>

          {/* Right Sidebar - Newsletter & Related */}
          <aside className="lg:col-span-3 space-y-12">
            <div className="bg-dark rounded-[40px] p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] rounded-full" />
              <h4 className="font-black text-xl uppercase tracking-tight mb-4 relative z-10">Get the Journal</h4>
              <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-8 relative z-10 leading-relaxed">
                Join 5,000+ brand owners receiving manufacturing insights weekly.
              </p>
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-xs font-bold outline-none focus:border-primary transition-all mb-4 relative z-10"
              />
              <button className="w-full py-4 bg-primary text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-primary/90 transition-all relative z-10">
                Subscribe
              </button>
            </div>

            <div className="space-y-8">
              <h4 className="font-black text-sm uppercase tracking-widest text-slate-400">Related Articles</h4>
              {[1, 2].map(i => (
                <Link key={i} href="#" className="flex flex-col gap-3 group">
                  <span className="text-[9px] font-black uppercase tracking-widest text-primary">Manufacturing</span>
                  <h5 className="font-black text-lg uppercase tracking-tight text-slate-900 group-hover:text-primary transition-colors leading-none">Scaling MOQs for Startup Success</h5>
                  <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                    <span>Oct 20</span> • <span>5 min read</span>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-slate-50 py-24">
        <div className="container-max px-6 text-center">
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12">
            Ready to Build Your <br /> <span className="premium-gradient-text">Nutra Empire?</span>
          </h3>
          <Link href="/customize" className="btn-premium inline-flex px-16">
            Start Project Builder <ChevronRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
