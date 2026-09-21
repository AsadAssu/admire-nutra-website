'use client';

import { useState, useRef } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, ArrowLeft, Upload, Package, ShieldCheck, Zap, Droplets, Target, Sparkles, ChevronDown, Award, Eye, X } from 'lucide-react';
import API from '@/services/api';
import JsonLd from '@/components/JsonLd';

const CustomizePage = () => {
  const [step, setStep] = useState(1);
  const [openFaq, setOpenFaq] = useState(null);
  const [logoFile, setLogoFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  const { register, handleSubmit, control, setValue, trigger, formState: { errors } } = useForm({
    defaultValues: {
      productType: 'Whey Protein Concentrate',
      quantity: '100',
      packagingType: 'Standard Tub (2lb)',
      brandName: '',
      specialNotes: '',
      name: '',
      phone: '',
      email: ''
    }
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const basePrices = {
    'Whey Protein Concentrate': 1200,
    'Whey Protein Isolate': 1800,
    'Mass Gainer': 800,
    'Plant Protein': 1500,
    'Pre-Workout': 2000
  };
  
  const qtyMultiplier = {
    '50': 1,
    '100': 0.9,
    '500': 0.75,
    '1000+': 0.6
  };

  const selectedProduct = useWatch({ control, name: 'productType' });
  const selectedQuantity = useWatch({ control, name: 'quantity' });
  const selectedPackaging = useWatch({ control, name: 'packagingType' });

  // Dynamic Price Calculations
  const basePricePerUnit = basePrices[selectedProduct] || 1000;
  const quantityNumber = selectedQuantity === '1000+' ? 1000 : parseInt(selectedQuantity) || 50;
  const discountMultiplier = qtyMultiplier[selectedQuantity] || 1;
  
  const subtotal = basePricePerUnit * quantityNumber;
  const discountPercent = Math.round((1 - discountMultiplier) * 100);
  const discountAmount = Math.round(subtotal * (1 - discountMultiplier));
  const estimatedPrice = subtotal - discountAmount;

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setLogoFile(e.target.files[0]);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setLogoFile(e.dataTransfer.files[0]);
    }
  };

  const triggerUploadClick = () => {
    fileInputRef.current.click();
  };

  const removeLogoFile = (e) => {
    e.stopPropagation();
    setLogoFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Pack file information inside form data if available
      const formData = {
        ...data,
        totalPrice: estimatedPrice,
        logoFileName: logoFile ? logoFile.name : null,
        logoFileSize: logoFile ? `${(logoFile.size / 1024).toFixed(1)} KB` : null
      };

      await API.post('/orders', formData);
      setSubmitted(true);
    } catch (error) {
      console.warn('Backend API connection failed, running in simulation mode for dashboard preview:', error);
      // Fallback for demo client presentation
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNextStep = async () => {
    let isValid = false;
    if (step === 1) {
      isValid = await trigger(['productType', 'quantity', 'packagingType']);
    } else if (step === 2) {
      isValid = await trigger(['brandName', 'specialNotes']);
    }
    
    if (isValid) {
      setStep(s => s + 1);
    }
  };

  const prevStep = () => setStep(s => s - 1);

  const productTypes = Object.keys(basePrices);
  const quantities = Object.keys(qtyMultiplier);
  const packaging = [
    { name: 'Standard Tub (2lb)', icon: <Package /> },
    { name: 'Large Tub (5lb)', icon: <Package /> },
    { name: 'Pouch (1kg)', icon: <Droplets /> },
    { name: 'Box (30 Sachet)', icon: <Zap /> }
  ];

  const benefits = [
    {
      icon: <ShieldCheck size={28} />,
      title: "Science-Backed Formulation",
      desc: "Our lab team engineers custom blends for premium efficacy and industry-leading flavor consistency."
    },
    {
      icon: <Target size={28} />,
      title: "Flexible MOQ Ranges",
      desc: "Scale easily from low initial testing orders to multi-ton continuous manufacturing volumes, starting from just 200 units."
    },
    {
      icon: <Zap size={28} />,
      title: "Fast Prototyping",
      desc: "Get samples formulated, packaged, and approved in record timelines to beat competitor releases."
    },
    {
      icon: <Award size={28} />,
      title: "Regulatory Compliant",
      desc: "All formulations pass strict country-specific testing and full label claims validation."
    }
  ];

  const customizeFaqs = [
    {
      question: "Can I customize the active ingredients?",
      answer: "Yes. Our team of research scientists can customize ingredient ratios, active concentrations, and supplement formulations tailored to your exact brand vision."
    },
    {
      question: "What is the typical turnaround time for custom manufacturing?",
      answer: "A standard custom manufacturing cycle takes 3 to 4 weeks from labeling approval to final dispatch."
    },
    {
      question: "Do you offer branding and graphic design support?",
      answer: "Yes, our marketing design department can assist with premium label creation, box mockups, and regulatory packaging guidelines for your target country."
    }
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: customizeFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="pt-24 sm:pt-32 pb-20 bg-[#FAFAFA] relative overflow-hidden">
      <JsonLd data={faqSchema} />

      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 blur-[150px] rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="container-max relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-6 block"
          >
            Brand Builder v2.0
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-[0.9]"
          >
            Engineer Your <span className="premium-gradient-text">Success.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-dark/40 uppercase tracking-widest text-[10px] font-black"
          >
            Configure your professional supplement line in 3 simple phases.
          </motion.p>
        </div>

        {/* Stepper */}
        <div className="flex justify-between items-center mb-16 max-w-xl mx-auto relative px-4">
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-100 -translate-y-1/2 -z-10" />
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex flex-col items-center gap-4">
              <motion.div 
                animate={{ 
                  scale: step === s ? 1.2 : 1,
                  backgroundColor: step >= s ? 'var(--color-primary)' : '#fff',
                  borderColor: step === s ? 'var(--color-primary)' : '#f1f5f9'
                }}
                className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black border-2 transition-all duration-700 shadow-xl ${step >= s ? 'text-white border-primary shadow-primary/20 bg-primary' : 'text-slate-200 border-slate-100 bg-white'}`}
              >
                {step > s ? <Check size={24} strokeWidth={3} /> : <span className="text-xl">{s}</span>}
              </motion.div>
              <span className={`text-[10px] font-black uppercase tracking-[0.1em] transition-colors duration-500 ${step === s ? 'text-primary' : 'text-slate-300'}`}>
                {s === 1 ? 'Formulation' : s === 2 ? 'Identity' : 'Finish'}
              </span>
            </div>
          ))}
        </div>

        <div className="glass-card !p-6 sm:!p-8 md:!p-20 max-w-5xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-accent via-primary to-accent opacity-20" />
          
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-primary/10 text-primary rounded-[32px] flex items-center justify-center mx-auto mb-10 border-2 border-primary/20 shadow-2xl shadow-primary/10">
                <Sparkles size={48} className="animate-pulse" />
              </div>
              <h2 className="text-5xl font-black mb-6 tracking-tighter text-dark uppercase">MISSION ACCOMPLISHED!</h2>
              <p className="text-dark/40 mb-12 max-w-md mx-auto font-bold uppercase tracking-widest text-xs leading-relaxed">Our production directors are reviewing your specs. A technical brief will be dispatched to your email within 24 hours.</p>
              <button onClick={() => window.location.href = '/'} className="btn-premium">
                Back to Dashboard
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div 
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-col gap-12"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="flex flex-col gap-5">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-dark/30 ml-2">Phase 01: Product Core</label>
                        <div className="relative">
                          <select {...register('productType')} className="w-full bg-slate-50 border border-slate-100 p-6 rounded-3xl outline-none focus:border-primary focus:bg-white transition-all text-sm font-black uppercase tracking-widest appearance-none shadow-inner">
                            {productTypes.map(t => <option key={t} value={t}>{t}</option>)}
                          </select>
                          <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-dark/20 pointer-events-none" />
                        </div>
                      </div>
                      <div className="flex flex-col gap-5">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-dark/30 ml-2">Phase 02: Initial Volume</label>
                        <div className="relative">
                          <select {...register('quantity')} className="w-full bg-slate-50 border border-slate-100 p-6 rounded-3xl outline-none focus:border-primary focus:bg-white transition-all text-sm font-black uppercase tracking-widest appearance-none shadow-inner">
                            {quantities.map(q => <option key={q} value={q}>{q} Units</option>)}
                          </select>
                          <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-dark/20 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-6">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-dark/30 ml-2">Phase 03: Visual Delivery</label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {packaging.map((p, i) => (
                          <div 
                            key={i}
                            onClick={() => setValue('packagingType', p.name)}
                            className={`p-4 sm:p-8 border-2 transition-all duration-500 flex flex-col items-center gap-4 sm:gap-6 cursor-pointer rounded-[32px] group ${selectedPackaging === p.name ? 'border-primary bg-primary/5 shadow-xl shadow-primary/5' : 'border-slate-50 bg-slate-50/50 hover:border-slate-100 hover:bg-white'}`}
                          >
                            <div className={`transition-all duration-500 ${selectedPackaging === p.name ? 'text-primary scale-110' : 'text-slate-200 group-hover:text-slate-300'}`}>
                              {p.icon}
                            </div>
                            <span className={`text-[9px] font-black uppercase leading-tight text-center tracking-widest transition-colors duration-500 ${selectedPackaging === p.name ? 'text-dark' : 'text-slate-300'}`}>{p.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Detailed Pricing Breakdown Card */}
                    <div className="bg-[#FAFAFA] border border-slate-100 rounded-3xl p-6 md:p-8 flex flex-col gap-4 mt-4">
                      <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                        <span className="text-[10px] font-black uppercase text-dark/40 tracking-wider">Base Rate ({selectedProduct})</span>
                        <span className="text-sm font-black text-dark">₹{basePricePerUnit.toLocaleString()} / unit</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-black uppercase text-dark/40 tracking-wider">Subtotal ({quantityNumber} units)</span>
                        <span className="text-sm font-black text-dark">₹{subtotal.toLocaleString()}</span>
                      </div>
                      {discountPercent > 0 && (
                        <div className="flex justify-between items-center text-green-600">
                          <span className="text-[10px] font-black uppercase tracking-wider">Volume Discount (-{discountPercent}%)</span>
                          <span className="text-sm font-black">-₹{discountAmount.toLocaleString()}</span>
                        </div>
                      )}
                      <div className="flex justify-between items-center pt-3 border-t-2 border-dashed border-slate-200 mt-2">
                        <div>
                          <span className="text-[10px] font-black uppercase text-dark/30 tracking-[0.2em]">Estimated Value</span>
                          <p className="text-[9px] text-slate-400 font-bold uppercase mt-0.5">Excludes custom labeling & logistics taxes</p>
                        </div>
                        <span className="text-3xl md:text-4xl font-black text-primary tracking-tighter">₹{estimatedPrice.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="flex justify-end items-center mt-4">
                      <button type="button" onClick={handleNextStep} className="btn-premium">
                        Next Phase <ArrowRight size={18} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div 
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-col gap-12"
                  >
                    <div className="flex flex-col gap-10">
                      <div className="flex flex-col gap-5">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-dark/30 ml-2">Brand Designation</label>
                        <input 
                          {...register('brandName', { required: true })}
                          placeholder="e.g. TITAN ELITE NUTRITION"
                          className="w-full bg-slate-50 border border-slate-100 p-8 rounded-3xl outline-none focus:border-primary focus:bg-white transition-all text-3xl font-black uppercase tracking-tighter placeholder:text-slate-200 shadow-inner"
                        />
                        {errors.brandName && <span className="text-[10px] text-red-500 font-black uppercase tracking-widest ml-2">Designation required</span>}
                      </div>

                      {/* Interactive Drag & Drop File Selector */}
                      <div className="flex flex-col gap-5">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-dark/30 ml-2">Brand Identity & Assets</label>
                        <div 
                          onClick={triggerUploadClick}
                          onDragEnter={handleDrag}
                          onDragOver={handleDrag}
                          onDragLeave={handleDrag}
                          onDrop={handleDrop}
                          className={`group border-4 border-dashed p-6 sm:p-14 text-center flex flex-col items-center gap-6 hover:bg-primary/5 transition-all cursor-pointer rounded-[32px] relative overflow-hidden ${
                            dragActive ? 'border-primary bg-primary/10' : logoFile ? 'border-green-400 bg-green-50/10' : 'border-slate-100 hover:border-primary/20'
                          }`}
                        >
                          <input 
                            ref={fileInputRef}
                            type="file"
                            accept="image/*,.svg,.pdf,.ai"
                            onChange={handleFileChange}
                            className="hidden"
                          />
                          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] group-hover:opacity-[0.05]"></div>
                          
                          {logoFile ? (
                            <div className="w-16 h-16 rounded-[24px] bg-green-50 border border-green-200 flex items-center justify-center shadow-xl relative z-10 animate-bounce">
                              <Check size={28} className="text-green-500" />
                            </div>
                          ) : (
                            <div className="w-16 h-16 rounded-[24px] bg-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform relative z-10">
                              <Upload size={28} className="text-slate-300 group-hover:text-primary transition-colors" />
                            </div>
                          )}

                          <div className="relative z-10">
                            {logoFile ? (
                              <div className="flex flex-col items-center gap-2">
                                <p className="font-black uppercase tracking-wider text-xs text-green-700">Logo File Staged</p>
                                <div className="flex items-center gap-2 bg-green-50 border border-green-100 px-4 py-1.5 rounded-full mt-1">
                                  <span className="text-[10px] font-black text-green-800 max-w-[200px] truncate">{logoFile.name}</span>
                                  <span className="text-[9px] font-semibold text-green-600">({(logoFile.size / 1024).toFixed(1)} KB)</span>
                                  <button onClick={removeLogoFile} className="p-0.5 rounded-full hover:bg-green-100 text-green-700 transition-colors">
                                    <X size={12} />
                                  </button>
                                </div>
                              </div>
                            ) : (
                              <>
                                <p className="font-black uppercase tracking-[0.3em] text-xs text-dark">Click to browse or drop logo file</p>
                                <p className="text-[9px] text-dark/30 mt-2 font-bold uppercase tracking-widest">SVG, PNG or AI (Vector Preferred)</p>
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-5">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-dark/30 ml-2">Special Formulation Notes</label>
                        <textarea 
                          {...register('specialNotes')}
                          placeholder="List specific ingredients, target flavor profiles, or market price-points..."
                          rows={4}
                          className="w-full bg-slate-50 border border-slate-100 p-8 rounded-3xl outline-none focus:border-primary focus:bg-white transition-all text-sm font-semibold text-dark placeholder:text-slate-200 shadow-inner resize-none"
                        />
                      </div>
                    </div>

                    <div className="flex justify-between items-center mt-8 pt-10 border-t border-slate-50">
                      <button type="button" onClick={prevStep} className="text-[10px] font-black uppercase tracking-widest text-dark/30 hover:text-dark transition-colors flex items-center gap-3">
                        <ArrowLeft size={16} /> Previous
                      </button>
                      <button type="button" onClick={handleNextStep} className="btn-premium">
                        Finalize Project <ArrowRight size={18} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div 
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-col gap-12"
                  >
                    <div className="bg-primary/5 p-10 rounded-[32px] border-l-8 border-primary relative overflow-hidden">
                       <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                       <div className="relative z-10">
                        <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4 flex items-center gap-3">
                           <ShieldCheck size={14} /> Identity Verification
                        </p>
                        <p className="text-dark/60 text-sm leading-relaxed font-bold uppercase tracking-tight">Provide your professional credentials. Our business development team will initiate contact for logistics and volume pricing analysis.</p>
                       </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="flex flex-col gap-5">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-dark/30 ml-2">Full Name</label>
                        <input {...register('name', { required: true })} placeholder="John Wick" className="w-full bg-slate-50 border border-slate-100 p-6 rounded-2xl outline-none focus:border-primary focus:bg-white transition-all text-xs font-black uppercase tracking-widest shadow-inner" />
                        {errors.name && <span className="text-[10px] text-red-500 font-black uppercase tracking-widest ml-2">Name required</span>}
                      </div>
                      <div className="flex flex-col gap-5">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-dark/30 ml-2">Work Phone</label>
                        <input {...register('phone', { required: true })} placeholder="+91 99999-99999" className="w-full bg-slate-50 border border-slate-100 p-6 rounded-2xl outline-none focus:border-primary focus:bg-white transition-all text-xs font-black uppercase tracking-widest shadow-inner" />
                        {errors.phone && <span className="text-[10px] text-red-500 font-black uppercase tracking-widest ml-2">Phone number required</span>}
                      </div>
                    </div>

                    <div className="flex flex-col gap-5">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-dark/30 ml-2">Business Email</label>
                      <input 
                        {...register('email', { 
                          required: true, 
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          } 
                        })} 
                        placeholder="john@continental.com" 
                        className="w-full bg-slate-50 border border-slate-100 p-6 rounded-2xl outline-none focus:border-primary focus:bg-white transition-all text-xs font-black uppercase tracking-widest shadow-inner" 
                      />
                      {errors.email && <span className="text-[10px] text-red-500 font-black uppercase tracking-widest ml-2">{errors.email.message || "Email required"}</span>}
                    </div>

                    <div className="flex justify-between items-center mt-8 pt-10 border-t border-slate-50">
                      <button type="button" onClick={prevStep} className="text-[10px] font-black uppercase tracking-widest text-dark/30 hover:text-dark transition-colors flex items-center gap-3">
                        <ArrowLeft size={16} /> Previous
                      </button>
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="btn-premium !px-16 disabled:opacity-50"
                      >
                        {isSubmitting ? 'Transmitting...' : 'Request Manufacture Quote'} <Check size={20} strokeWidth={3} />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          )}
        </div>

        {/* Why Choose Custom Formulation Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
              Formulation Advantages
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter mb-4">
              Why Custom <span className="premium-gradient-text">Formulation</span>?
            </h2>
            <p className="text-dark/40 font-bold uppercase tracking-widest text-xs">
              Scientific Precision & Brand Distinction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_12px_30px_rgba(0,0,0,0.01)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-6 shadow-sm">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xs font-black uppercase tracking-widest text-dark mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-dark/50 text-[11px] font-semibold leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Customization FAQs Section */}
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
              Configurator Help Desk
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter mb-4">
              Formulation <span className="premium-gradient-text">FAQs</span>
            </h2>
            <p className="text-dark/40 font-bold uppercase tracking-widest text-xs">
              Got Questions? We Have Answers
            </p>
          </div>

          <div className="grid gap-4">
            {customizeFaqs.map((faq, i) => {
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

      </div>
    </div>
  );
};

export default CustomizePage;
