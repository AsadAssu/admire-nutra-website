'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, ArrowRight } from 'lucide-react';
import WhatsAppIcon from '@/components/common/ui/WhatsAppIcon';

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  // Naya number yahan update kar diya gaya hai
  const whatsappNumber = "+917291856050";

  const handleWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message || "Hi Admire Nutra, I'm interested in launching my supplement brand. Can we discuss manufacturing options?")}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-10 sm:right-10 z-[1000] flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 30, scale: 0.9, filter: 'blur(10px)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-60 md:w-76 bg-white/90 backdrop-blur-xl rounded-xl shadow-[0_32px_80px_rgba(0,0,0,0.15)] border border-white/20 overflow-hidden flex flex-col max-h-[calc(100vh-140px)]"
          >
            <div className="brand-gradient p-4 md:p-6 text-white relative shrink-0">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="flex justify-between items-center mb-3 relative z-10">
                <div className="flex flex-col gap-1">
                  <h3 className="font-black text-xl tracking-tight leading-none uppercase">Support</h3>
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] opacity-60">Production Desk</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all active:scale-90"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white">Online & Responding</span>
              </div>
            </div>

            <div className="p-4 md:p-6 overflow-y-auto flex-1">
              <p className="text-xs text-dark/40 font-bold mb-4 leading-relaxed uppercase tracking-wider">
                How can our manufacturing experts assist you today?
              </p>

              <div className="relative mb-4">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your requirements..."
                  className="w-full bg-slate-50 border border-slate-100 p-6 rounded-xl text-xs font-semibold outline-none focus:border-primary focus:bg-white transition-all resize-none shadow-inner"
                  rows={4}
                />
              </div>

              <div className="flex flex-col gap-4">
                <button
                  onClick={handleWhatsApp}
                  className="w-full py-4 bg-emerald-500 text-white rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/20 active:scale-95"
                >
                  <WhatsAppIcon size={16} /> Contact on WhatsApp
                </button>
                <button className="w-full py-4 bg-dark text-white rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:bg-primary transition-all active:scale-95">
                  <Send size={10} /> Send Message <ArrowRight size={10} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close WhatsApp chat' : 'Open WhatsApp chat'}
        className={`group relative flex h-12 w-12 items-center justify-center rounded-full shadow-xl transition-all duration-500 ${isOpen ? 'bg-dark' : 'bg-[#25D366] hover:bg-[#1fbd5a]'}`}
      >
        <div className={`absolute inset-0 animate-ping rounded-full opacity-20 ${isOpen ? 'hidden' : 'bg-[#25D366]'}`} />
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <WhatsAppIcon size={30} className="text-white transition-transform duration-500 group-hover:scale-110" />
        )}
      </motion.button>
    </div>
  );
};

export default FloatingChat;