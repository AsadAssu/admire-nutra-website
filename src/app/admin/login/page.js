'use client';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { loginStart, loginSuccess, loginFail } from '@/store/authSlice';
import API from '@/services/api';
import { Lock, User, AlertCircle, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const AdminLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const { data } = await API.post('/auth/login/', { email, password });
      dispatch(loginSuccess(data));
      router.push('/admin/dashboard');
    } catch (err) {
      dispatch(loginFail(err.response?.data?.message || 'Authentication failed. Please check your credentials.'));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-8 pt-30 pb-12 relative overflow-hidden font-sans bg-white" style={{ backgroundColor: '#ffffff' }}>
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-purple-100/30 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-100/30 blur-[150px] rounded-full translate-x-1/2 translate-y-1/2" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-md w-full bg-white border border-slate-100 rounded-xl p-8 shadow-[0_32px_120px_-20px_rgba(0,0,0,0.1)] relative z-10"
      >
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-purple-50 text-purple-600 flex items-center justify-center rounded-xl mx-auto mb-8 border border-purple-100 shadow-sm transition-transform hover:rotate-3 duration-500">
            <ShieldCheck size={28} strokeWidth={1.5} />
          </div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight uppercase leading-none">Admin Hub</h1>
          <p className="text-slate-400 text-[10px] mt-3 font-black uppercase tracking-[0.3em]">Secure Brand Management</p>
        </div>

        {error && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 text-red-500 p-3 rounded-xl mb-4 flex items-start gap-4 text-xs border border-red-100 font-bold uppercase tracking-wide"
          >
            <AlertCircle size={18} className="shrink-0" />
            <span>{error}</span>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2.5">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Email Address</label>
            <div className="relative group">
              <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-purple-600 transition-colors" size={18} />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-slate-50 border border-slate-100 p-3 pl-14 rounded-xl outline-none focus:border-purple-600 focus:bg-white transition-all text-slate-900 font-semibold placeholder:text-slate-300"
                placeholder="admin@mascular.com"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Password</label>
            <div className="relative group">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-purple-600 transition-colors" size={18} />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-slate-50 border border-slate-100 p-3 pl-14 rounded-xl outline-none focus:border-purple-600 focus:bg-white transition-all text-slate-900 font-semibold placeholder:text-slate-300"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full mt-6 py-3 bg-purple-600 text-white rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-purple-700 transition-all shadow-xl shadow-purple-200 disabled:opacity-50 flex items-center justify-center gap-3 active:scale-[0.98]"
            style={{ clipPath: 'polygon(5% 0, 100% 0, 100% 75%, 95% 100%, 0 100%, 0 25%)' }}
          >
            {loading ? (
              <span className="flex items-center gap-3">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Verifying...
              </span>
            ) : (
              <>
                Initiate Secure Access
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>

        <p className="text-center text-slate-300 text-[9px] font-black uppercase tracking-[0.3em] mt-6">
          Advanced Encryption Standards Enabled
        </p>
      </motion.div>

      {/* Footer Branding Overlay */}
      <div className="absolute bottom-10 w-full text-center">
        <img 
          src="/admire-nutra-logo.png" 
          alt="Admire Nutra" 
          className="h-10 w-auto mx-auto opacity-20 grayscale"
        />
      </div>
    </div>
  );
};

export default AdminLoginPage;
