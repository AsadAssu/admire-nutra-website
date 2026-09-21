'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Globe, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function Privacy() {
  const policies = [
    {
      icon: Shield,
      title: "Data Protection",
      desc: "We employ industry-standard encryption and security measures to protect your personal information from unauthorized access."
    },
    {
      icon: Lock,
      title: "Information Collection",
      desc: "We collect only necessary information to provide our services. Your data is never sold or shared with third parties without consent."
    },
    {
      icon: Eye,
      title: "Transparency",
      desc: "You have full visibility into how your data is used. We provide clear, accessible information about our data practices."
    },
    {
      icon: Database,
      title: "Data Retention",
      desc: "We retain your information only as long as necessary for the purposes outlined in our privacy policy."
    },
    {
      icon: Globe,
      title: "International Transfers",
      desc: "Your data is processed securely within India. We comply with all applicable data protection regulations."
    },
    {
      icon: CheckCircle2,
      title: "Your Rights",
      desc: "You have the right to access, correct, or delete your personal information. Contact us for any privacy-related requests."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-orange-50">
      {/* Hero Section - Shield Theme */}
      <section className="relative py-20 pt-24 sm:pt-32 px-4 sm:px-6 overflow-hidden">
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
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -left-10 w-48 h-48 border-4 border-accent/10 rounded-full"
              />
              <span className="text-primary font-black uppercase tracking-[0.4em] text-[12px] mb-6 block">
                Privacy First
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-dark mb-6 leading-none">
                Privacy <span className="text-accent">Protocol</span>
              </h1>
              <p className="text-dark/60 text-lg leading-relaxed font-medium mb-8 max-w-lg">
                Your privacy is our priority. We are committed to protecting your personal information and maintaining transparency in our data practices.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white text-sm font-bold rounded-full hover:bg-primary/90 transition-all">
                Contact Privacy Team
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
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Shield size={200} className="text-primary/40" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Policies - Card Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-dark mb-4">
              Our <span className="text-primary">Commitments</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {policies.map((policy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-2xl border border-primary/20 hover:shadow-2xl transition-all"
              >
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white mb-6">
                  <policy.icon size={32} />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight text-dark mb-4">
                  {policy.title}
                </h3>
                <p className="text-dark/60 text-sm leading-relaxed">
                  {policy.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Principles - Vertical Flow */}
      <section className="py-20 px-6">
        <div className="container-max max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-dark mb-4">
              Data <span className="text-accent">Principles</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto"></div>
          </motion.div>
          <div className="space-y-6">
            {[
              "We collect only what's necessary to serve you better",
              "Your data is encrypted and stored securely",
              "You control your information - access, modify, or delete",
              "We never sell your data to third parties",
              "Regular security audits ensure ongoing protection"
            ].map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 items-center bg-white p-6 rounded-2xl shadow-lg border-2 border-primary/10"
              >
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white shrink-0">
                  <CheckCircle2 size={16} />
                </div>
                <p className="text-dark font-medium">{principle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Contact Section */}
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
              <Shield size={60} className="text-white mx-auto" />
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6">
              Privacy <span className="text-white/90">Questions?</span>
            </h2>
            <p className="text-white/90 text-xl leading-relaxed font-medium mb-10">
              Have questions about our privacy practices? Our team is here to help.
            </p>
            <Link
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-white text-primary text-lg font-black uppercase tracking-widest rounded-full shadow-2xl hover:shadow-accent/50 transition-all duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
