'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Send, MapPin, Phone, Mail, Globe, CheckCircle2 } from 'lucide-react';
import API from '@/services/api';

const ContactSection = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await API.post('/queries/', data);
      setSuccess(true);
      reset();
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error('Query Submission Error:', error);
      alert('We encountered an issue processing your request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 px-4 sm:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container-max grid lg:grid-cols-2 gap-10 lg:gap-20 relative z-10">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col gap-6 mb-16">
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-2">Connect with Experts</span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
              Let&apos;s Build <br />
              <span className="premium-gradient-text">Your Brand</span> <br />
              <span className="text-stroke">Together.</span>
            </h2>
          </div>

            <div className="grid gap-8">
              {[
                { icon: <MapPin />, title: "Corporate Office", detail: "Alpha-1, Greater Noida, Gautam Buddha Nagar, Uttar Pradesh - 201308" },
                { icon: <MapPin />, title: "Manufacturing Unit", detail: "Ecotech-III, Udyog Kendra Extension 2, Greater Noida, Gautam Buddha Nagar, Uttar Pradesh - 201306" },
                { icon: <Globe />, title: "General Inquiries", detail: <>sales@admirenutra.com<br />info@admirenutra.com</> },
                { icon: <Phone />, title: "Direct Line", detail: "+91 9518987291" }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 items-start group">
                  <div className="w-16 h-16 bg-white border border-slate-100 shadow-lg flex items-center justify-center shrink-0 rounded-xl transition-all group-hover:brand-gradient group-hover:text-purple-700 group-hover:bg-purple-100 group-hover:-translate-y-1">
                    {item.icon}
                  </div>
                  <div className="pt-2">
                    <h4 className="text-xs font-black uppercase tracking-widest text-dark/40 mb-2">{item.title}</h4>
                    <p className="text-dark font-bold text-base leading-tight max-w-sm">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white p-6 sm:p-8 md:p-12 border border-slate-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center text-center gap-6 py-20"
            >
              <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                <CheckCircle2 size={40} />
              </div>
              <div>
                <h3 className="text-3xl font-black uppercase mb-2 text-dark">Message Received</h3>
                <p className="text-slate-500 text-sm font-medium">Our manufacturing consultants will contact you within 12 business hours.</p>
              </div>
              <button onClick={() => setSuccess(false)} className="text-primary font-bold uppercase tracking-widest text-xs hover:underline mt-4">Send New Query</button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Business Owner Name</label>
                  <input
                    {...register('name', { required: true })}
                    className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl outline-none focus:border-primary transition-all text-dark placeholder:text-slate-300 font-medium"
                    placeholder="Enter full name"
                  />
                  {errors.name && <span className="text-[10px] text-primary uppercase font-bold">Required</span>}
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Work Email</label>
                  <input
                    {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                    className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl outline-none focus:border-primary transition-all text-dark placeholder:text-slate-300 font-medium"
                    placeholder="email@company.com"
                  />
                  {errors.email && <span className="text-[10px] text-primary uppercase font-bold">Valid business email required</span>}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Subject / Category</label>
                <select {...register('subject')} className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl outline-none focus:border-primary transition-all text-dark font-medium appearance-none">
                  <option value="Third-Party Manufacturing">Third-Party Manufacturing</option>
                  <option value="Private Labeling">Private Labeling</option>
                  <option value="Custom Formulation">Custom Formulation</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Message / Requirements</label>
                <textarea
                  {...register('message', { required: true })}
                  rows={4}
                  className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl outline-none focus:border-primary transition-all text-dark placeholder:text-slate-300 font-medium resize-none"
                  placeholder="Briefly describe your requirements..."
                />
                {errors.message && <span className="text-[10px] text-primary uppercase font-bold">Required</span>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-premium flex items-center justify-center gap-4 disabled:opacity-50"
              >
                {isSubmitting ? 'Processing...' : 'Send Inquiry'} <Send size={18} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
