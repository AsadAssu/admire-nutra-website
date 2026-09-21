'use client';

import { motion } from 'framer-motion';
import { FileText, Scale, Gavel, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Terms() {
  const sections = [
    {
      icon: FileText,
      title: "Agreement Terms",
      desc: "By using our services, you agree to these terms. Please read them carefully as they govern your relationship with Admire Nutra."
    },
    {
      icon: Scale,
      title: "Service Scope",
      desc: "We provide white-label manufacturing, custom formulation, and related services. Specific terms are outlined in individual service agreements."
    },
    {
      icon: Gavel,
      title: "Legal Compliance",
      desc: "All services comply with Indian laws, including FSSAI regulations, FDA guidelines, and international quality standards."
    },
    {
      icon: AlertCircle,
      title: "Limitations",
      desc: "Our liability is limited as specified in service agreements. We recommend reviewing terms before engaging in business."
    },
    {
      icon: CheckCircle2,
      title: "User Responsibilities",
      desc: "Clients must provide accurate information, comply with regulations, and maintain confidentiality of shared proprietary information."
    },
    {
      icon: FileText,
      title: "Amendments",
      desc: "We reserve the right to update these terms. Continued use of services constitutes acceptance of updated terms."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-orange-50">
      {/* Hero Section - Document Theme */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-20 -left-20 w-64 h-64 border-4 border-primary/10 rounded-full"
              />
              <span className="text-primary font-black uppercase tracking-[0.4em] text-[12px] mb-6 block">
                Legal Framework
              </span>
              <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter text-dark mb-6 leading-none">
                Terms of <span className="text-accent">Service</span>
              </h1>
              <p className="text-dark/60 text-lg leading-relaxed font-medium mb-8 max-w-lg">
                These terms govern your relationship with Admire Nutra. Understanding them ensures a smooth partnership and clear expectations.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white text-sm font-bold rounded-full hover:bg-primary/90 transition-all">
                Legal Inquiries <ArrowRight size={16} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl relative overflow-hidden">
                <motion.div
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <FileText size={200} className="text-primary/40" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Terms Sections - Accordion Style */}
      <section className="py-20 px-6 bg-white">
        <div className="container-max max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-dark mb-4">
              Key <span className="text-primary">Provisions</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </motion.div>
          <div className="space-y-6">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-2xl border-l-4 border-primary hover:shadow-2xl transition-all"
              >
                <div className="flex gap-6 items-start">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white shrink-0">
                    <section.icon size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-black uppercase tracking-tight text-dark mb-3">
                      {section.title}
                    </h3>
                    <p className="text-dark/60 text-sm leading-relaxed">
                      {section.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Points - Grid Layout */}
      <section className="py-20 px-6">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-dark mb-4">
              Important <span className="text-accent">Notes</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto"></div>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Written agreements required for all services",
              "Payment terms vary by project scope",
              "Intellectual property rights protected",
              "Dispute resolution through arbitration",
              "Confidentiality agreements mandatory",
              "Quality standards guaranteed",
              "Regulatory compliance assured",
              "Continuous improvement commitment"
            ].map((note, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="bg-white p-6 rounded-2xl shadow-lg border-2 border-accent/10 hover:border-accent transition-all text-center"
              >
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={20} className="text-accent" />
                </div>
                <p className="text-dark font-medium text-sm">{note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Legal Contact */}
      <section className="py-24 bg-gradient-to-r from-primary to-accent relative overflow-hidden">
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full"
        />
        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="mb-6"
            >
              <Gavel size={60} className="text-white mx-auto" />
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6">
              Legal <span className="text-white/90">Questions?</span>
            </h2>
            <p className="text-white/90 text-xl leading-relaxed font-medium mb-10">
              Need clarification on any terms? Our legal team is ready to assist.
            </p>
            <Link
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-white text-primary text-lg font-black uppercase tracking-widest rounded-full shadow-2xl hover:shadow-accent/50 transition-all duration-300"
            >
              Contact Legal Team
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
