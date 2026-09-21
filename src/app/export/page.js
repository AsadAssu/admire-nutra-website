'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Award, ShieldCheck, Package, Truck, FileText, CheckCircle, Target, Zap, ChevronLeft, ChevronRight, ChevronDown, Check, ArrowRight, Star } from 'lucide-react';
import JsonLd from '@/components/JsonLd';

const ExportPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Responsive items-per-page setup
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const dosageForms = [
    { name: "Powder", icon: <Package size={24} /> },
    { name: "Tablets", icon: <Package size={24} /> },
    { name: "Capsules", icon: <Package size={24} /> },
    { name: "Softgels", icon: <Package size={24} /> },
    { name: "Sachets", icon: <Package size={24} /> }
    // { name: "Granules", icon: <Package size={24} /> }
  ];

  const features = [
    {
      icon: <ShieldCheck size={32} />,
      title: "Certified Excellence",
      description: "ISO 9001:2015, FSSAI registered, and GMP compliant manufacturing facility ensuring world-class quality standards."
    },
    {
      icon: <Globe size={32} />,
      title: "Global Reach",
      description: "Exporting to 50+ countries across Asia, Africa, Europe, and the Americas with established logistics partners."
    },
    {
      icon: <FileText size={32} />,
      title: "Export Documentation",
      description: "Complete documentation support including COA, MSDS, GMP certificates, and regulatory compliance papers."
    },
    {
      icon: <Truck size={32} />,
      title: "Flexible Shipping",
      description: "Multiple shipping options via air, sea, and land with competitive rates and reliable delivery timelines."
    },
    {
      icon: <Zap size={32} />,
      title: "Fast Turnaround",
      description: "Efficient production and export processes ensuring quick delivery to meet market demands."
    },
    {
      icon: <Target size={32} />,
      title: "Custom Solutions",
      description: "Tailored formulations, packaging, and labeling to meet specific country regulations and brand requirements."
    }
  ];

  const documents = [
    "Import Export Code (IEC)",
    "FSSAI License",
    "Company Registration Certificate",
    "GST Registration",
    "Product Analysis Certificate (COA)",
    "GMP Certification",
    "Commercial Invoice",
    "Packing List",
    "Bill of Lading / Airway Bill",
    "Certificate of Origin",
    "Insurance Certificate",
    "Phytosanitary Certificate (if required)"
  ];

  const selectionCriteria = [
    "Verify all certifications and compliance standards",
    "Check manufacturing capacity and scalability",
    "Review product range and formulation capabilities",
    "Assess packaging and labeling expertise",
    "Compare pricing and value proposition",
    "Evaluate customer support and communication",
    "Confirm export experience and market knowledge",
    "Review delivery timelines and logistics network"
  ];

  const dailyHealthProducts = [
    {
      id: 1,
      name: "Multivitamin Complex",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=400",
      description: "Complete daily nutrition support with essential vitamins and minerals for overall health and wellness.",
      details: "Our Multivitamin Complex contains 25+ essential vitamins and minerals including Vitamin A, C, D, E, B-complex, calcium, magnesium, zinc, and iron. Formulated for optimal absorption and bioavailability."
    },
    {
      id: 2,
      name: "Omega-3 Fish Oil",
      image: "https://images.unsplash.com/photo-1550572017-edd951b55104?q=80&w=400",
      description: "Premium fish oil supplement rich in EPA and DHA for heart, brain, and joint health.",
      details: "High-purity fish oil sourced from deep-sea cold-water fish. Each serving provides 1000mg of Omega-3 with 600mg EPA and 400mg DHA. Molecularly distilled for purity and free from heavy metals."
    },
    {
      id: 3,
      name: "Probiotic Blend",
      image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=400",
      description: "Advanced probiotic formula with 10 billion CFU for digestive health and immune support.",
      details: "Contains 10 scientifically studied probiotic strains including Lactobacillus and Bifidobacterium species. Acid-resistant capsules ensure survival through stomach acid for maximum effectiveness."
    },
    {
      id: 4,
      name: "Protein Powder",
      image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?q=80&w=400",
      description: "Whey protein isolate for muscle building, recovery, and daily protein requirements.",
      details: "Premium whey protein isolate with 25g protein per serving, 5g BCAAs, and 4g glutamine. Zero lactose, zero fat, zero sugar. Ideal for post-workout recovery and daily nutrition."
    },
    {
      id: 5,
      name: "Calcium + Vitamin D",
      image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=400",
      description: "Bone health formula combining calcium citrate with vitamin D3 for optimal absorption.",
      details: "Each serving provides 600mg calcium as calcium citrate (highly absorbable) and 400 IU vitamin D3. Supports bone density, teeth health, and muscle function. Easy on the stomach."
    },
    {
      id: 6,
      name: "Antioxidant Complex",
      image: "https://images.unsplash.com/photo-1544367780-78bc9e2f3b95?q=80&w=400",
      description: "Powerful antioxidant blend with green tea extract, grape seed, and vitamin C.",
      details: "Combines green tea polyphenols, grape seed extract, vitamin C, vitamin E, and alpha-lipoic acid. Provides comprehensive cellular protection against oxidative stress and free radical damage."
    }
  ];

  const faqs = [
    {
      question: "What countries do you export to?",
      answer: "We export to over 50 countries across Asia, Africa, Europe, North America, and South America. Our established logistics network ensures seamless delivery to major global markets."
    },
    {
      question: "What certifications do you hold for exports?",
      answer: "We are ISO 9001:2015 certified, FSSAI registered, and comply with GMP standards. Our facility meets international quality requirements for nutraceutical exports."
    },
    {
      question: "What is your minimum export order quantity?",
      answer: "MOQ varies by product type and destination. We offer flexible options ranging from 500 units for certain formulations to bulk orders for established importers. Contact us for specific requirements."
    },
    {
      question: "Do you handle export documentation?",
      answer: "Yes, we provide complete export documentation support including COA, MSDS, GMP certificates, commercial invoices, packing lists, and all necessary regulatory documents for customs clearance."
    },
    {
      question: "What shipping options are available?",
      answer: "We offer multiple shipping options including air freight for urgent deliveries, sea freight for bulk orders, and land shipping for neighboring countries. We work with trusted logistics partners to ensure safe and timely delivery."
    },
    {
      question: "Can you customize formulations for specific markets?",
      answer: "Absolutely. Our R&D team can develop custom formulations to meet specific regulatory requirements and market preferences of different countries, including ingredient restrictions and labeling compliance."
    }
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Custom Formulation",
      desc: "Our R&D team creates highly specialized nutraceutical formulations tailored to your target audience and target market requirements."
    },
    {
      step: "02",
      title: "Regulatory Alignment",
      desc: "We verify ingredient compliance, prepare robust international packaging labeling, and compile documentation for importing countries."
    },
    {
      step: "03",
      title: "Precision Production",
      desc: "Manufacturing occurs in our GMP-compliant facility using ultra-modern tech with rigorous QA/QC processes at every stage."
    },
    {
      step: "04",
      title: "Global Logistics & Clearances",
      desc: "Our regulatory desk manages custom documentation, phytosanitary inspections, and secure transit with ocean/air logistics."
    }
  ];

  const stats = [
    { value: "50+", label: "Countries Covered", desc: "Established shipping lanes worldwide" },
    { value: "500M+", label: "Units Manufactured", desc: "Capsules, softgels, tablets & powders" },
    { value: "100%", label: "Customs Clearance", desc: "Flawless international border track record" },
    { value: "24/7", label: "Client Portal Access", desc: "Live consignment tracking & compliance storage" }
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="bg-[#FAFAFA]">
      <JsonLd data={faqSchema} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Background glow spot */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center max-w-3xl mx-auto mb-6"
          >
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[12px] mb-6">
              Global Reach
            </span>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
              Premier <span className="premium-gradient-text">Nutraceutical</span> <br /> Exporter.
            </h1>
            <p className="text-dark/60 text-lg md:text-xl leading-relaxed font-medium">
              Admire Nutra is a trusted global nutraceutical exporter, offering certified supplements processed with full export compliance under WHO-GMP guidelines. We deliver excellence to international markets with precision and reliability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats / Achievements Section */}
      <section className="pb-16 px-4 sm:px-8">
        <div className="container-max">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-[0_15px_50px_rgba(0,0,0,0.02)] hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <span className="text-4xl sm:text-5xl font-black premium-gradient-text tracking-tighter block mb-2 group-hover:scale-105 transition-transform duration-500 origin-left">
                    {stat.value}
                  </span>
                  <h4 className="text-xs font-black uppercase tracking-widest text-dark mb-2">
                    {stat.label}
                  </h4>
                </div>
                <p className="text-dark/40 text-[10px] font-bold uppercase tracking-wider leading-relaxed">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dosage Forms Section */}
      <section className="py-16 px-4 sm:px-8 bg-white/50 backdrop-blur-md border-y border-slate-100">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
              Available <span className="premium-gradient-text">Dosage Forms</span>
            </h2>
            <p className="text-dark/40 font-bold uppercase tracking-widest text-sm">
              Versatile Manufacturing Capabilities
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl  mx-auto">
            {dosageForms.map((form, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-6 rounded-xl  border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] text-center hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  {form.icon}
                </div>
                <h3 className="text-[10px] font-black uppercase tracking-widest text-dark group-hover:text-primary transition-colors">
                  {form.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4 sm:px-8 bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] block mb-4">
                Regulatory Clearance
              </span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-none">
                ISO, FSSAI & GMP <br /> Certified <span className="premium-gradient-text">Exporter</span>
              </h2>
              <p className="text-dark/60 text-base sm:text-lg leading-relaxed font-medium mb-8">
                Admire Nutra is a globally trusted nutraceutical manufacturer and exporter, certified by ISO 9001:2015 and FSSAI standards. We specialize in science-backed nutraceutical formulations, private label supplements, and contract manufacturing for international health and wellness brands. With a strong commitment to quality, regulatory compliance, and innovation, we support distributors, importers, and supplement companies worldwide in launching and scaling successful products.
              </p>
              <div className="flex flex-wrap gap-3">
                {["ISO 9001:2015", "FSSAI Registered", "GMP Compliant", "WHO Guidelines"].map((cert, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-primary/5 border border-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-primary hover:text-white transition-colors duration-300"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl blur-2xl transform rotate-3 scale-95 pointer-events-none"></div>
              <div className="aspect-[3/2] rounded-xl overflow-hidden border border-slate-100 shadow-2xl relative z-10">
                <img
                  src="/manufacuting-unit-image.png"
                  alt="Manufacturing Facility"
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process / Workflow Section */}
      <section className="py-20 px-4 sm:px-8 border-t border-slate-100">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
              The Global <span className="premium-gradient-text">Export Process</span>
            </h2>
            <p className="text-dark/40 font-bold uppercase tracking-widest text-sm">
              How We Deliver Excellence Worldwide
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto relative">
            {workflowSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_10px_35px_rgba(0,0,0,0.01)] hover:shadow-xl transition-all duration-500 flex flex-col justify-between relative group"
              >
                <div>
                  <span className="text-6xl font-black text-slate-100 group-hover:text-primary/10 transition-colors duration-500 block mb-6 font-mono leading-none">
                    {step.step}
                  </span>
                  <h3 className="text-sm font-black uppercase tracking-widest text-dark mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-dark/50 text-xs font-semibold leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-8 bg-white/50 backdrop-blur-md border-t border-slate-100">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
              Why Choose <span className="premium-gradient-text">Admire Nutra</span>?
            </h2>
            <p className="text-dark/40 font-bold uppercase tracking-widest text-sm">
              Your Global Export Partner
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.02)] group hover:shadow-xl hover:border-primary/10 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-base font-black uppercase tracking-widest mb-3 text-dark">
                  {feature.title}
                </h3>
                <p className="text-dark/50 text-xs font-semibold leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-20 px-4 sm:px-8 bg-white border-t border-slate-100">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] block mb-4">
                Regulatory Compliance
              </span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-none">
                Export <span className="premium-gradient-text">Documentation</span>
              </h2>
              <p className="text-dark/60 text-base sm:text-lg leading-relaxed font-medium mb-8">
                We provide complete documentation support for seamless customs clearance and regulatory compliance in destination countries. Our team ensures all necessary paperwork is prepared accurately and efficiently.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-slate-50/50 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-[0_15px_50px_rgba(0,0,0,0.01)]">
                <h3 className="text-sm font-black uppercase tracking-widest mb-6 flex items-center gap-3">
                  <FileText className="text-primary" size={20} />
                  Required Documents
                </h3>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {documents.map((doc, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="text-primary shrink-0 mt-0.5" size={14} />
                      <span className="text-dark/60 text-xs font-semibold uppercase tracking-wider leading-snug">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Selection Criteria Section */}
      <section className="py-20 px-4 sm:px-8 border-t border-slate-100">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
              Selecting the <span className="premium-gradient-text">Best Exporter</span>
            </h2>
            <p className="text-dark/40 font-bold uppercase tracking-widest text-sm">
              Key Considerations
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
              <div className="grid sm:grid-cols-2 gap-6">
                {selectionCriteria.map((criteria, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 bg-primary/5 rounded-xl flex items-center justify-center text-primary shrink-0 mt-0.5 border border-primary/10">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className="text-dark/60 text-xs font-black uppercase tracking-widest leading-relaxed">
                      {criteria}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Health Essentials Section */}
      <section className="py-20 px-4 sm:px-8 bg-white border-t border-slate-100">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
              Daily Health <span className="premium-gradient-text">Essentials</span>
            </h2>
            <p className="text-dark/40 font-bold uppercase tracking-widest text-sm">
              Premium Quality Products
            </p>
          </motion.div>

          {/* Carousel */}
          <div className="relative max-w-6xl mx-auto px-2 sm:px-6">
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-6"
                animate={{ x: `-${currentIndex * (100 / itemsPerPage)}%` }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {dailyHealthProducts.map((product, i) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex-shrink-0"
                    style={{ width: `calc(${100 / itemsPerPage}% - ${((itemsPerPage - 1) * 24) / itemsPerPage}px)` }}
                  >
                    <div
                      className="bg-slate-50/50 rounded-2xl border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.01)] overflow-hidden cursor-pointer hover:shadow-xl hover:border-primary/10 transition-all duration-500 group flex flex-col h-full justify-between"
                      onClick={() => setSelectedProduct(selectedProduct === product.id ? null : product.id)}
                    >
                      <div>
                        <div className="aspect-square overflow-hidden relative">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-100 flex items-center gap-1.5 shadow-sm">
                            <Star size={10} className="text-primary" fill="currentColor" />
                            <span className="text-[8px] font-black uppercase tracking-widest text-dark">Premium</span>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xs font-black uppercase tracking-widest text-dark mb-3 group-hover:text-primary transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-dark/50 text-[11px] font-semibold leading-relaxed">
                            {product.description}
                          </p>
                        </div>
                      </div>
                      <div className="px-6 pb-6 pt-0">
                        <motion.div
                          initial={false}
                          animate={{
                            height: selectedProduct === product.id ? 'auto' : 0,
                            opacity: selectedProduct === product.id ? 1 : 0
                          }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="text-dark/60 text-[11px] leading-relaxed font-semibold pt-4 border-t border-slate-200">
                            {product.details}
                          </p>
                        </motion.div>
                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100 text-[9px] font-black uppercase tracking-widest text-primary">
                          <span>{selectedProduct === product.id ? 'Hide Details' : 'View Details'}</span>
                          <ChevronDown size={12} className={`transition-transform duration-300 ${selectedProduct === product.id ? 'rotate-180' : ''}`} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
              disabled={currentIndex === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 w-10 h-10 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10 active:scale-95"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => setCurrentIndex(Math.min(dailyHealthProducts.length - itemsPerPage, currentIndex + 1))}
              disabled={currentIndex === dailyHealthProducts.length - itemsPerPage}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 w-10 h-10 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10 active:scale-95"
            >
              <ChevronRight size={16} />
            </button>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {dailyHealthProducts.slice(0, dailyHealthProducts.length - itemsPerPage + 1).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === i ? 'bg-primary w-6' : 'bg-slate-200 hover:bg-slate-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-8 border-t border-slate-100">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
              Frequently Asked <span className="premium-gradient-text">Questions</span>
            </h2>
            <p className="text-dark/40 font-bold uppercase tracking-widest text-sm">
              Export-Related Inquiries
            </p>
          </motion.div>

          <div className="grid gap-4 max-w-4xl mx-auto">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white rounded-2xl border border-slate-100 shadow-[0_10px_35px_rgba(0,0,0,0.01)] overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-slate-50/50 transition-colors"
                  >
                    <h3 className={`text-xs sm:text-sm font-black uppercase tracking-widest transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-dark'}`}>
                      {faq.question}
                    </h3>
                    <div className={`w-8 h-8 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-dark/40 shrink-0 transition-all duration-300 ${isOpen ? 'rotate-180 bg-primary/5 text-primary border-primary/10' : ''}`}>
                      <ChevronDown size={14} />
                    </div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-slate-50">
                      <p className="text-dark/50 text-xs sm:text-sm leading-relaxed font-semibold">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-8 border-t border-slate-100">
        <div className="container-max bg-white rounded-3xl p-8 md:p-16 border border-slate-100 shadow-[0_30px_80px_rgba(0,0,0,0.03)] relative overflow-hidden text-center flex flex-col items-center">
          {/* Accent decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
          <div className="absolute -top-24 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>

          <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] block mb-6">
            Global Enterprise Supply
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
            Ready to <span className="text-stroke">Export?</span>
          </h2>
          <p className="text-dark/40 font-bold uppercase tracking-widest text-[10px] sm:text-xs mb-12 max-w-lg leading-relaxed">
            Partner with Admire Nutra for reliable global nutraceutical supply and export excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="/contact" className="btn-premium w-full sm:w-auto">
              Start Exporting <ArrowRight size={14} />
            </a>
            <a href="/customize" className="btn-outline w-full sm:w-auto">
              Get Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExportPage;
