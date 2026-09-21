'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark flex flex-col items-center justify-center px-4 sm:px-8 text-center">
      <motion.h1 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-[8rem] sm:text-[15rem] md:text-[20rem] font-black text-white/5 leading-none absolute z-0"
      >
        404
      </motion.h1>
      
      <div className="relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">Lost in <br /> the <span className="text-primary">Lab?</span></h2>
        <p className="text-gray-500 mb-12 max-w-md mx-auto">The page you’re looking for doesn’t exist or has been moved to a different facility.</p>
        
        <Link href="/" className="btn-premium">
          Back to Facility
        </Link>
      </div>

      <div className="absolute bottom-12 flex gap-8">
        <div className="flex flex-col gap-1 items-start">
           <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Support</span>
           <span className="text-xs text-gray-500 underline">Get Help</span>
        </div>
        <div className="flex flex-col gap-1 items-start">
           <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Site Map</span>
           <span className="text-xs text-gray-500 underline">All Facility Areas</span>
        </div>
      </div>
    </div>
  );
}
