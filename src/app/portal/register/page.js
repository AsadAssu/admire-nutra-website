'use client';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { loginStart, loginSuccess, loginFail } from '@/store/authSlice';
import API from '@/services/api';
import { User, Mail, Lock, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const ClientRegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  });
  const [success, setSuccess] = useState(false);
  
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const { data } = await API.post('/users/', { ...formData, role: 'client' });
      dispatch(loginSuccess(data));
      setSuccess(true);
      setTimeout(() => router.push('/portal/dashboard'), 2000);
    } catch (err) {
      dispatch(loginFail(err.response?.data?.message || 'Registration failed'));
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex items-center justify-center px-8 pt-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl w-full bg-white rounded-[40px] shadow-2xl border border-slate-100 p-12"
      >
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">PARTNER REGISTRATION</h1>
          <p className="text-slate-500 font-medium mt-2">Join our elite manufacturing ecosystem</p>
        </div>

        {success ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={40} />
            </div>
            <h2 className="text-2xl font-bold mb-2">Welcome Aboard!</h2>
            <p className="text-slate-500">Redirecting to your portal...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="w-full bg-slate-50 border border-slate-200 p-4 pl-12 rounded-2xl outline-none focus:border-primary transition-all font-medium"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                <input 
                  type="text" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                  className="w-full bg-slate-50 border border-slate-200 p-4 pl-12 rounded-2xl outline-none focus:border-primary transition-all font-medium"
                  placeholder="+91 88888 88888"
                />
              </div>
            </div>

            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="w-full bg-slate-50 border border-slate-200 p-4 pl-12 rounded-2xl outline-none focus:border-primary transition-all font-medium"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                <input 
                  type="password" 
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  required
                  className="w-full bg-slate-50 border border-slate-200 p-4 pl-12 rounded-2xl outline-none focus:border-primary transition-all font-medium"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="md:col-span-2 mt-4 py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-primary transition-all shadow-xl shadow-slate-900/10 flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {loading ? 'Processing...' : (
                <>
                  Register as Partner
                  <ArrowRight size={18} />
                </>
              )}
            </button>

            <p className="md:col-span-2 text-center text-slate-400 text-xs mt-4">
              Already a partner? <button type="button" onClick={() => router.push('/admin/login')} className="text-primary font-bold hover:underline">Login here</button>
            </p>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default ClientRegisterPage;
