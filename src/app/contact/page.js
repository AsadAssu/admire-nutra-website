'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ContactSection from '@/components/common/home/ContactSection';
import { Mail, MessageCircle, Phone, MapPin, Globe, Headphones, ChevronDown, Compass, ShieldAlert, Award, Clock } from 'lucide-react';
import JsonLd from '@/components/JsonLd';

const ContactPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you sign Non-Disclosure Agreements (NDAs) prior to sharing custom formulas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, standard procedure. We issue a mutual NDA before our technical formulation session to ensure your proprietary product blend and pricing brackets remain strictly confidential."
        }
      },
      {
        "@type": "Question",
        "name": "How do we request custom flavor and texture samples?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can request up to 3 custom flavor samples by filling out the Contact form above. Our laboratory blends and ships these custom sample sachets within 48 business hours via premium air cargo."
        }
      },
      {
        "@type": "Question",
        "name": "Can we schedule a live tour or physical audit of the Greater Noida manufacturing facility?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, corporate delegations are highly encouraged. Please click 'Schedule Site Visit' above or contact sales@admirenutra.com. We require a 5-day advance slot booking for cleanroom visitor clearance."
        }
      }
    ]
  };

  const contactMethods = [
    {
      title: "Technical Support",
      desc: "For existing partners needing COA reports or documentation.",
      email: "support@admirenutra.com",
      icon: <Headphones size={24} />
    },
    {
      title: "Sales & New Brands",
      desc: "Inquiries regarding new product lines and onboarding.",
      email: "sales@admirenutra.com",
      icon: <Globe size={24} />
    },
    {
      title: "Media & PR",
      desc: "For press inquiries, brand collaborations, and media kits.",
      email: "pr@admirenutra.com",
      icon: <MessageCircle size={24} />
    }
  ];

  const globalTransit = [];

  const visitorGuide = [
    { stage: "Step 01", title: "Security & Gowning", desc: "Arrive at security bay for badge registration, briefing, and donning sterile cleanroom gowns and booties." },
    { stage: "Step 02", title: "Factory Walkthrough", desc: "Step into pressure-regulated airlocks to observe automated powder sifting, milling, and filling lines." },
    { stage: "Step 03", title: "Quality Lab Review", desc: "Sit down with our QA analysts to inspect physical batch log sheets and HPLC chromatography reports." },
    { stage: "Step 04", title: "Brand Showroom", desc: "Review sample material options, select custom matte or crystal PET bottles, and seal the formulation." }
  ];

  const contactSLA = [
    { title: "Proposal SLA", val: "24 Hours", detail: "Get a comprehensive price catalog and timeline draft within one business day of inquiry." },
    { title: "Sample Dispatch", val: "48 Hours", detail: "Custom flavor profile mixes are blended and shipped via premium air courier within two days." },
    { title: "Support Manager", val: "1-on-1 Dedicated", detail: "Every client is assigned a project coordinator to handle logistics, audits, and custom packaging designs." },
    { title: "Live Tracking", val: "24/7 Portal", detail: "Access our proprietary tracking portal to see when your batch enters sifting, blending, or boxing." }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
      <JsonLd data={faqSchema} />
      {/* Spacer for fixed navbar */}
      <div className="h-24 xl:h-[148px]"></div>

      {/* Hero Contact Form */}
      <ContactSection />
      
      {/* Support Channels */}
      <section className="py-12 sm:py-24 px-4 sm:px-8">
        <div className="container-max">
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card flex flex-col gap-6 group bg-white border border-slate-100 p-8 rounded-3xl shadow-lg"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-primary group-hover:brand-gradient group-hover:text-white transition-all duration-500 shadow-inner">
                  {method.icon}
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase mb-3 tracking-tight">{method.title}</h3>
                  <p className="text-dark/40 text-xs font-bold leading-relaxed mb-6">{method.desc}</p>
                </div>
                <a 
                  href={`mailto:${method.email}`} 
                  className="text-[10px] font-black uppercase tracking-[0.2em] text-primary hover:text-accent transition-colors flex items-center gap-2 mt-auto"
                >
                  <Mail size={14} /> {method.email}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 1: Corporate Escalation SLA (Achievements / Stats) */}
      <section className="mb-24 px-4 sm:px-8">
        <div className="container-max">
          <div className="text-center mb-16">
            <span className="text-accent font-black uppercase tracking-[0.4em] text-[12px] mb-4 block">Communication Standards</span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
              Client Service <span className="premium-gradient-text">Commitments</span>
            </h2>
            <p className="text-dark/40 font-bold uppercase tracking-widest text-xs max-w-xl mx-auto leading-relaxed">
              We understand speed-to-market. Our operational workflows are governed by strict communication and shipping SLAs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactSLA.map((sla, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-slate-100 p-8 rounded-2xl shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-primary mb-6">
                  <Clock size={20} />
                </div>
                <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest block mb-2">{sla.title}</span>
                <span className="text-3xl font-black tracking-tighter text-dark block mb-2">{sla.val}</span>
                <p className="text-dark/50 text-xs font-semibold leading-relaxed">{sla.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Hub Info */}
      <section className="py-12 sm:py-24 bg-white border-y border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none"></div>
        <div className="container-max grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="relative">
            <div className="aspect-video rounded-[40px] overflow-hidden shadow-2xl border border-slate-100 grayscale hover:grayscale-0 transition-all duration-1000">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200" 
                alt="Office" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-dark p-10 rounded-[32px] text-white shadow-2xl hidden md:block">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Headquarters</span>
              </div>
              <p className="text-xl font-black uppercase tracking-tight">Greater Noida, India</p>
            </div>
          </div>
          <div className="space-y-10">
            <div>
              <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Visit Our Hub</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-8">
                The Core of <br /> <span className="text-stroke">Production.</span>
              </h2>
            </div>
            
            <div className="grid gap-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-primary shrink-0 shadow-sm border border-slate-100"><MapPin size={20} /></div>
                <div>
                  <h4 className="font-black text-sm uppercase tracking-widest mb-1">Plant Location</h4>
                  <p className="text-dark/40 text-xs font-bold leading-relaxed">Ecotech-III, Udyog Kendra Extension 2, <br /> Greater Noida, Gautam Buddha Nagar, <br /> Uttar Pradesh - 201306</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-primary shrink-0 shadow-sm border border-slate-100"><Phone size={20} /></div>
                <div>
                  <h4 className="font-black text-sm uppercase tracking-widest mb-1">Direct Line</h4>
                  <p className="text-dark/40 text-xs font-bold leading-relaxed">+91 9518987291</p>
                </div>
              </div>
            </div>

            <button className="btn-premium w-full md:w-auto">
              Schedule Site Visit
            </button>
          </div>
        </div>
      </section>

      {/* NEW SECTION 2: Visitor Site-Audit Guide (Service Highlights) */}
      <section className="py-24 bg-white px-4 sm:px-8">
        <div className="container-max">
          <div className="text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[12px] mb-4 block">Physical Audits</span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
              Client Visit <span className="premium-gradient-text">Protocols</span>
            </h2>
            <p className="text-dark/40 font-bold uppercase tracking-widest text-xs max-w-xl mx-auto leading-relaxed">
              We welcome partner delegations. Here is what to expect during your on-site facility audit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visitorGuide.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:bg-white hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/5 px-3 py-1.5 rounded-lg">
                    {step.stage}
                  </span>
                </div>
                <h4 className="text-lg font-black uppercase tracking-tight mb-2 text-dark group-hover:text-primary transition-colors">
                  {step.title}
                </h4>
                <p className="text-dark/50 text-xs font-semibold leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* NEW SECTION 4: NDA & Audit Scheduling FAQ (FAQ) */}
      <section className="py-24 bg-white px-4 sm:px-8 border-t border-slate-100">
        <div className="container-max">
          <div className="text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[12px] mb-4 block">Onboarding Questions</span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
              Onboarding <span className="premium-gradient-text">FAQ</span>
            </h2>
            <p className="text-dark/40 font-bold uppercase tracking-widest text-xs max-w-xl mx-auto leading-relaxed">
              Find answers on NDA policies, custom sample processing fees, and transport arrangements.
            </p>
          </div>

          <div className="grid gap-4 max-w-3xl mx-auto">
            {[
              {
                question: "Do you sign Non-Disclosure Agreements (NDAs) prior to sharing custom formulas?",
                answer: "Yes, standard procedure. We issue a mutual NDA before our technical formulation session to ensure your proprietary product blend and pricing brackets remain strictly confidential."
              },
              {
                question: "How do we request custom flavor and texture samples?",
                answer: "You can request up to 3 custom flavor samples by filling out the Contact form above. Our laboratory blends and ships these custom sample sachets within 48 business hours via premium air cargo."
              },
              {
                question: "Can we schedule a live tour or physical audit of the Greater Noida manufacturing facility?",
                answer: "Yes, corporate delegations are highly encouraged. Please click 'Schedule Site Visit' above or contact sales@admirenutra.com. We require a 5-day advance slot booking for cleanroom visitor clearance."
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


    </div>
  );
};

export default ContactPage;
