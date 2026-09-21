'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Target, ShieldCheck, Users, Mail, Compass, Star, ChevronDown, Check, Globe, FlaskConical, Newspaper } from 'lucide-react';
import JsonLd from '@/components/JsonLd';

const LeadersPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can we consult directly with the directors during formulation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. For premium brands and proprietary formulation projects, our founders Ashish Tiwari and Shashwat Tiwari lead technical alignment sessions directly with your product managers."
        }
      },
      {
        "@type": "Question",
        "name": "How does the leadership protect brand formulation secrets?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We treat intellectual property with extreme confidentiality. We establish legally-binding mutual NDAs before any formula details are shared, and partition our plant schedules to protect batch integrity."
        }
      },
      {
        "@type": "Question",
        "name": "What scale constraints do your leaders plan for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We support agile growth: launching custom formulations starting from 500 units for startups, while our continuous-shift automatic lines process multi-ton runs for global distributors."
        }
      }
    ]
  };

  const leaders = [
    {
      name: "Ashish Tiwari",
      role: "Founder & Director",
      location: "Jaunpur, Uttar Pradesh",
      tagline: "Leading Innovation in Nutraceutical Manufacturing",
      biography: "Ashish Tiwari is the Founder & Director of the company, bringing over 5 years of experience in the nutraceutical and healthcare industry. A B.Tech graduate in Biotechnology, he combines scientific knowledge with hands-on industry expertise to deliver innovative and reliable manufacturing solutions.",
      expertise: "Product Formulation & Development, Manufacturing Operations, Research & Innovation, Process Optimization, and Technical Consultation. With a strong commitment to scientific excellence and operational efficiency, he focuses on developing high-quality, science-backed nutraceutical products that meet evolving market demands.",
      vision: "Ashish believes that lasting success is built on quality, innovation, integrity, and long-term partnerships. His vision is to empower brands with dependable third-party manufacturing solutions while contributing to the growth of the global health and wellness industry.",
      image: "/Leader-men.png"
    },
    {
      name: "Shashwat Tiwari",
      role: "Founder & Director",
      location: "Barabanki, Uttar Pradesh",
      tagline: "Driving Quality, Strategy & Sustainable Growth",
      biography: "Shashwat Tiwari is the Founder & Director of the company with 2 years of experience in the nutraceutical industry. A B.Tech graduate in Biotechnology, he combines scientific understanding with a strategic approach to build innovative and sustainable healthcare solutions.",
      expertise: "Quality Assurance & Regulatory Compliance, Product Strategy & Innovation, Scientific Research & Validation, Business Development & Strategic Partnerships, and Market Expansion & Brand Growth. He is dedicated to ensuring that every product reflects the highest standards of quality, compliance, and customer satisfaction while creating long-term value for clients.",
      vision: "Shashwat believes that sustainable growth comes from continuous innovation, ethical business practices, and customer-centric solutions. His mission is to help brands transform ideas into trusted, market-ready nutraceutical products that make a meaningful impact on people's health.",
      image: "/Leader-men1.png"
    }
  ];

  const advisors = [
    { name: "Dr. Arijit Sen", role: "Scientific Consultant", bio: "Ph.D in Peptide Sourcing from Oxford. Evaluates amino molecular stability across custom formulas.", icon: <FlaskConical size={24} /> },
    { name: "Priya Nair", role: "Head Regulatory Attorney", bio: "Ex-government auditor specializing in international compliance, FDA documentation, and FSSAI schedules.", icon: <ShieldCheck size={24} /> },
    { name: "Raman Bhalla", role: "Senior Flavor Consultant", bio: "Renowned sensory analyst with 20+ years engineering non-artificial taste profiles for high-performance blends.", icon: <Star size={24} /> }
  ];

  const leadershipMilestones = [
    { step: "Phase 01", title: "Pioneering Standards", desc: "Formulated the 'Purity-First' contract blueprint, establishing legal ingredient traceability pipelines." },
    { step: "Phase 02", title: "Smart Plant Integration", desc: "Automated standard operating systems with SCADA controls for exact blending weights." },
    { step: "Phase 03", title: "Green Label Initiative", desc: "Introduced clinical eco-sweeteners and compostable barrier foils to reduce carbon loads." }
  ];

  const pressOutlets = ["Nutraceuticals World", "Sports Dietetics Quarterly", "Clean Label Symposium", "National Biotech Journal"];

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
              Our Leaders
            </motion.span>
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
              Our <span className="premium-gradient-text">Leadership</span> <br /> Team.
            </motion.h1>
            <motion.p variants={itemVariants} className="text-dark/60 text-lg md:text-xl leading-relaxed font-medium">
              Led by Biotech professionals with hands-on industry expertise, our directors are committed to delivering science-backed nutraceutical solutions.
            </motion.p>
          </motion.div>

          <div className="grid gap-12 max-w-5xl mx-auto mb-24">
            {leaders.map((leader, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[32px] border border-slate-100 shadow-lg overflow-hidden group"
              >
                <div className="grid md:grid-cols-12">
                  <div className="md:col-span-5 aspect-[4/5] md:aspect-auto overflow-hidden relative">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="md:col-span-7 p-8 sm:p-10 flex flex-col justify-center">
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
                      <h3 className="text-3xl font-black uppercase tracking-tight text-dark">
                        {leader.name}
                      </h3>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                        📍 {leader.location}
                      </span>
                    </div>
                    <p className="text-primary font-black uppercase tracking-widest text-xs mb-4">
                      {leader.role}
                    </p>
                    <p className="text-dark font-black text-sm leading-relaxed mb-6 border-l-2 border-accent pl-4 py-1">
                      {leader.tagline}
                    </p>
                    <div className="space-y-6 text-xs sm:text-sm font-semibold text-dark/70 leading-relaxed">
                      <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Biography</h4>
                        <p>{leader.biography}</p>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Core Expertise</h4>
                        <p>{leader.expertise}</p>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Philosophy & Vision</h4>
                        <p>{leader.vision}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Leadership Vision Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-20 p-8 sm:p-12 rounded-[32px] bg-gradient-to-br from-dark to-slate-900 text-white relative overflow-hidden shadow-xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px]" />
            <div className="relative z-10 text-center">
              <span className="text-accent font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Shared Purpose</span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight mb-8">Leadership Vision</h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium mb-6">
                At the heart of our company is a shared commitment to Science, Innovation, Quality, and Trust.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium mb-6">
                Together, Ashish Tiwari and Shashwat Tiwari are dedicated to building a trusted nutraceutical manufacturing company that delivers premium third-party manufacturing solutions with uncompromising quality and scientific excellence.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
                Their vision is to support startups, emerging brands, and established businesses by providing innovative, reliable, and market-ready nutraceutical products. Through continuous research, advanced manufacturing practices, and long-term partnerships, they aspire to contribute to a healthier future while setting new benchmarks in the nutraceutical industry.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Featured In / Press Outlets Section */}
      <section className="py-12 bg-white border-y border-slate-100 overflow-hidden relative">
        <div className="container-max flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3 shrink-0">
            <Newspaper className="text-primary" size={24} />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Thought Leadership Publications</span>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {pressOutlets.map((outlet, i) => (
              <span key={i} className="text-dark/30 text-xs font-black uppercase tracking-wider hover:text-primary transition-colors cursor-default">
                {outlet}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 sm:px-8">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
              Our Leadership <span className="premium-gradient-text">Values</span>
            </h2>
            <p className="text-dark/40 font-bold uppercase tracking-widest text-sm">
              Guiding Principles
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: <ShieldCheck size={32} />,
                title: "Quality First",
                description: "Uncompromising commitment to quality in every aspect of our operations."
              },
              {
                icon: <Target size={32} />,
                title: "Innovation Driven",
                description: "Continuously pushing boundaries to develop cutting-edge formulations."
              },
              {
                icon: <Users size={32} />,
                title: "People Focused",
                description: "Building strong relationships with clients, partners, and our team."
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 sm:p-8 rounded-xl border border-slate-100 shadow-lg text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight mb-4">
                  {value.title}
                </h3>
                <p className="text-dark/50 text-sm leading-relaxed font-medium">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section className="pb-24 px-4 sm:px-8">
        <div className="container-max">
          <div className="text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[12px] mb-4 block">Formulation Governance</span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
              Specialist <span className="premium-gradient-text">Advisors</span>
            </h2>
            <p className="text-dark/40 font-bold uppercase tracking-widest text-xs max-w-xl mx-auto leading-relaxed">
              Our core directors are backed by a specialized panel of international food safety experts, peptide chemists, and sensory scientists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {advisors.map((advisor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-slate-100 p-8 rounded-2xl shadow-lg hover:border-accent/20 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/5 text-accent flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  {advisor.icon}
                </div>
                <h4 className="text-lg font-black uppercase tracking-tight text-dark mb-1">{advisor.name}</h4>
                <span className="text-[10px] font-black text-primary uppercase tracking-widest mb-4 block">{advisor.role}</span>
                <p className="text-dark/50 text-xs font-semibold leading-relaxed">
                  {advisor.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy Section */}
      <section className="py-24 bg-white border-y border-slate-100 px-4 sm:px-8 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="container-max relative z-10">
          <div className="text-center mb-16">
            <span className="text-accent font-black uppercase tracking-[0.4em] text-[12px] mb-4 block">Roadmap to Impact</span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
              Strategic <span className="premium-gradient-text">Milestones</span>
            </h2>
            <p className="text-dark/40 font-bold uppercase tracking-widest text-xs max-w-xl mx-auto leading-relaxed">
              How our founders phased the research, tooling, and execution to lead supplement standardizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {leadershipMilestones.map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 border border-slate-100 p-8 rounded-2xl relative overflow-hidden group hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <span className="text-[9px] font-black tracking-widest text-primary uppercase block mb-4">{milestone.step}</span>
                <h4 className="text-xl font-black uppercase tracking-tight text-dark mb-4">{milestone.title}</h4>
                <p className="text-dark/50 text-xs font-semibold leading-relaxed">{milestone.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Consultation FAQ Section */}
      <section className="py-24 px-4 sm:px-8">
        <div className="container-max">
          <div className="text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[12px] mb-4 block">Direct Access</span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
              Consultation <span className="premium-gradient-text">FAQ</span>
            </h2>
            <p className="text-dark/40 font-bold uppercase tracking-widest text-xs max-w-xl mx-auto leading-relaxed">
              Clear answers regarding direct dialogue with directors, formulation protection, and onboarding steps.
            </p>
          </div>

          <div className="grid gap-4 max-w-3xl mx-auto">
            {[
              {
                question: "Can we consult directly with the directors during formulation?",
                answer: "Yes. For premium brands and proprietary formulation projects, our founders Ashish Tiwari and Shashwat Tiwari lead technical alignment sessions directly with your product managers."
              },
              {
                question: "How does the leadership protect brand formulation secrets?",
                answer: "We treat intellectual property with extreme confidentiality. We establish legally-binding mutual NDAs before any formula details are shared, and partition our plant schedules to protect batch integrity."
              },
              {
                question: "What scale constraints do your leaders plan for?",
                answer: "We support agile growth: launching custom formulations starting from 500 units for startups, while our continuous-shift automatic lines process multi-ton runs for global distributors."
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

      {/* CTA Section */}
      <section className="py-12 px-4 sm:px-8">
        <div className="container-max bg-white rounded-xl p-6 sm:p-8 md:p-12 border border-slate-100 shadow-2xl relative overflow-hidden text-center flex flex-col items-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
          <h2 className="text-2xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
            Ready to <span className="text-stroke">Connect?</span>
          </h2>
          <p className="text-dark/40 font-bold uppercase tracking-widest mb-12 max-w-lg">
            Our leadership team is committed to your success. Let&apos;s discuss how we can help you grow.
          </p>
          <div className="flex flex-col md:flex-row gap-6">
            <a href="/contact" className="btn-premium">
              Contact Us
            </a>
            <a href="/about" className="btn-outline">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeadersPage;
