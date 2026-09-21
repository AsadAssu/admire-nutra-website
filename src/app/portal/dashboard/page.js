'use client';

import { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import API from '@/services/api';
import { 
  Package, 
  FileText, 
  Download, 
  Truck, 
  CheckCircle, 
  Clock,
  LogOut,
  User,
  CreditCard,
  MessageCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import { logout } from '@/store/authSlice';

const ClientPortal = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const dispatch = useDispatch();
  const { user, hydrated } = useSelector((state) => state.auth);

  const fetchMyOrders = useCallback(async () => {
    try {
      const { data } = await API.get('/orders/my-orders');
      setOrders(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    if (!user || user.role !== 'client') {
      router.replace('/admin/login');
      return;
    }
    const request = window.setTimeout(fetchMyOrders, 0);
    return () => window.clearTimeout(request);
  }, [user, hydrated, router, fetchMyOrders]);

  const handleLogout = () => {
    dispatch(logout());
    router.push('/');
  };

  if (!hydrated || !user) return null;

  return (
    <div className="min-h-screen bg-[#F8F9FA] pt-24 pb-12 px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-black tracking-tight text-slate-900">CLIENT PORTAL</h1>
            <p className="text-slate-500 font-medium mt-1">Manage your protein manufacturing projects</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right hidden md:block">
              <p className="font-bold text-sm text-slate-900">{user.name}</p>
              <p className="text-[10px] text-primary font-bold uppercase tracking-widest">Premium Partner</p>
            </div>
            <button 
              onClick={handleLogout}
              className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-slate-400 hover:text-red-500 hover:border-red-100 transition-all shadow-sm"
            >
              <LogOut size={20} />
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Quick Stats */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-slate-900 p-8 rounded-[32px] text-white shadow-2xl">
              <User className="text-primary mb-6" size={32} />
              <h3 className="font-bold text-lg mb-2">Support Hero</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">Your dedicated account manager is available for private consultation.</p>
              <button className="w-full py-4 bg-primary text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-primary/90 transition-all">
                Contact Sales
              </button>
            </div>

            <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center">
                  <Package size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Orders</p>
                  <p className="text-2xl font-black">{orders.filter(o => o.status !== 'Completed').length}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center">
                  <CreditCard size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Value</p>
                  <p className="text-2xl font-black">₹{orders.reduce((acc, o) => acc + (o.totalPrice || 0), 0).toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Orders List */}
          <div className="lg:col-span-3 space-y-8">
            <h3 className="font-black text-2xl tracking-tight">Active Projects</h3>
            {loading ? (
              <div className="h-64 flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
              </div>
            ) : orders.length === 0 ? (
              <div className="bg-white p-20 rounded-[40px] border border-slate-200 text-center border-dashed">
                <Package className="mx-auto text-slate-200 mb-6" size={64} />
                <h4 className="text-xl font-bold mb-2">No projects found</h4>
                <p className="text-slate-400 text-sm mb-8">Ready to launch your next iconic product?</p>
                <button 
                  onClick={() => router.push('/customize')}
                  className="px-8 py-4 bg-primary text-white rounded-2xl font-black uppercase tracking-widest text-xs"
                >
                  Configure New Order
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6">
                {orders.map((order) => (
                  <motion.div 
                    key={order._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-center gap-8 hover:border-primary/30 transition-all group"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center border border-slate-100 group-hover:bg-primary/5 group-hover:border-primary/20 transition-all">
                        <Package className="text-slate-300 group-hover:text-primary transition-colors" size={32} />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-black text-xl tracking-tight text-slate-900">{order.brandName}</span>
                          <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                            order.status === 'Completed' ? 'bg-emerald-500 text-white' : 'bg-amber-500 text-white'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{order.productType} • {order.quantity} Units</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 w-full md:w-auto">
                      <div className="flex-grow md:text-right px-6 border-r border-slate-100 hidden md:block">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Project Status</p>
                        <div className="flex items-center gap-2 justify-end">
                           <Clock size={14} className="text-primary" />
                           <span className="text-sm font-bold text-slate-700">Estimated Delivery: 3 Weeks</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => window.open(`http://localhost:5000/api/orders/${order._id}/invoice`, '_blank')}
                          className="flex items-center gap-2 px-6 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-primary transition-all shadow-xl shadow-slate-900/10"
                        >
                          <FileText size={16} /> Invoice
                        </button>
                        <button className="p-4 bg-slate-100 text-slate-400 rounded-2xl hover:bg-slate-200 transition-all">
                          <Download size={20} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientPortal;
