'use client';

import { useCallback, useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { logout } from '@/store/authSlice';
import { fetchOrdersStart, fetchOrdersSuccess, fetchOrdersFail } from '@/store/orderSlice';
import API from '@/services/api';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  MessageSquare, 
  LogOut, 
  CheckCircle, 
  Clock,
  Filter,
  RefreshCw,
  Search,
  ChevronRight,
  Trash2,
  ExternalLink,
  X,
  AlertCircle,
  TrendingUp,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CartesianGrid, 
  Tooltip as RechartsTooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area,
  XAxis,
  YAxis
} from 'recharts';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [queries, setQueries] = useState([]);
  const [qLoading, setQLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  
  const dispatch = useDispatch();
  const router = useRouter();
  const { user, hydrated } = useSelector((state) => state.auth);
  const { items: orders, loading: oLoading } = useSelector((state) => state.orders);

  useEffect(() => {
    if (hydrated && !user) {
      router.replace('/admin/login');
    }
  }, [user, hydrated, router]);

  const fetchData = useCallback(async () => {
    dispatch(fetchOrdersStart());
    setQLoading(true);
    try {
      const orderRes = await API.get('/orders');
      dispatch(fetchOrdersSuccess(orderRes.data));
      
      const queryRes = await API.get('/queries');
      setQueries(queryRes.data);
    } catch (err) {
      dispatch(fetchOrdersFail(err.message));
    } finally {
      setQLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    if (hydrated && user) {
      const request = window.setTimeout(fetchData, 0);
      return () => window.clearTimeout(request);
    }
  }, [user, hydrated, fetchData]);

  const handleLogout = () => {
    dispatch(logout());
    router.push('/admin/login');
  };

  const updateOrderStatus = async (id, status) => {
    // Map Frontend status back to exact backend schema enum values
    let dbStatus = 'pending';
    if (status === 'Pending') dbStatus = 'pending';
    else if (status === 'Completed') dbStatus = 'completed';
    else if (status === 'In Progress') dbStatus = 'processing';

    try {
      await API.put(`/orders/${id}`, { status: dbStatus });
      fetchData();
    } catch (err) {
      alert('Failed to update status');
    }
  };

  const resolveQuery = async (id) => {
    try {
      await API.put(`/queries/${id}`, { status: 'resolved' });
      fetchData();
    } catch (err) {
      alert('Failed to resolve support request');
    }
  };

  const deleteOrder = async (id) => {
    try {
      await API.delete(`/orders/${id}`);
      setDeleteConfirm(null);
      fetchData();
    } catch (err) {
      alert('Failed to delete order');
    }
  };

  // Safe checks for order statuses
  const getDisplayStatus = (status) => {
    const s = status?.toLowerCase();
    if (s === 'pending') return 'Pending';
    if (s === 'completed') return 'Completed';
    if (s === 'processing' || s === 'in progress' || s === 'in-progress') return 'In Progress';
    return 'Pending';
  };

  const filteredOrders = useMemo(() => {
    return orders.filter(o => {
      const nameVal = o.name || o.customerName || '';
      const matchesSearch = nameVal.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           o.brandName?.toLowerCase().includes(searchTerm.toLowerCase());
      
      const displayStatus = getDisplayStatus(o.status);
      const matchesStatus = statusFilter === 'All' || displayStatus === statusFilter;
      
      return matchesSearch && matchesStatus;
    });
  }, [orders, searchTerm, statusFilter]);

  const stats = useMemo(() => {
    const totalOrders = orders.length;
    const pendingOrders = orders.filter(o => getDisplayStatus(o.status) === 'Pending').length;
    const resolvedQueries = queries.filter(q => q.status?.toLowerCase() === 'resolved').length;
    const newQueries = queries.filter(q => q.status?.toLowerCase() === 'new').length;
    
    return { totalOrders, pendingOrders, resolvedQueries, newQueries };
  }, [orders, queries]);

  if (!hydrated || !user) return null;

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex font-sans text-dark relative overflow-hidden">
      
      {/* Background Decorative Gradient Blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* Sidebar */}
      <aside className="w-72 bg-dark text-white p-8 flex flex-col fixed h-full shadow-2xl z-20">
        <div className="flex items-center gap-3 mb-16 px-2">
          <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary flex items-center justify-center rounded-xl shadow-lg shadow-primary/20">
            <span className="text-white font-black text-xl">A</span>
          </div>
          <div className="flex flex-col">
            <span className="font-black text-lg tracking-tight leading-none uppercase">Admire Nutra</span>
            <span className="text-[10px] text-accent font-black uppercase tracking-[0.2em] mt-1.5">Admin Control</span>
          </div>
        </div>

        <nav className="flex flex-col gap-2 flex-grow">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 font-bold text-sm ${activeTab === 'dashboard' ? 'bg-gradient-to-r from-accent to-primary text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
          >
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </button>
          <button 
            onClick={() => setActiveTab('orders')}
            className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 font-bold text-sm ${activeTab === 'orders' ? 'bg-gradient-to-r from-accent to-primary text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
          >
            <ShoppingBag size={20} />
            <span>Orders ({orders.length})</span>
          </button>
          <button 
            onClick={() => setActiveTab('queries')}
            className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 font-bold text-sm ${activeTab === 'queries' ? 'bg-gradient-to-r from-accent to-primary text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
          >
            <MessageSquare size={20} />
            <span>Queries ({queries.filter(q => q.status?.toLowerCase() !== 'resolved').length})</span>
          </button>
        </nav>

        <div className="mt-auto pt-8 border-t border-white/5">
          <div className="flex items-center gap-4 p-4 mb-4 bg-white/5 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-bold">
              {user.name?.charAt(0) || 'A'}
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="font-bold text-sm truncate">{user.name}</span>
              <span className="text-[10px] text-slate-500 truncate">{user.email}</span>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-4 p-4 w-full text-slate-400 hover:text-red-400 transition-all rounded-xl hover:bg-red-400/5 font-bold text-sm"
          >
            <LogOut size={20} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-72 flex-grow p-12 max-w-[1600px] z-10">
        <header className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-4xl font-black tracking-tight text-dark capitalize">{activeTab === 'dashboard' ? 'Overview' : activeTab}</h1>
            <p className="text-dark/40 font-bold uppercase tracking-widest text-[10px] mt-1.5">Management Console</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={fetchData} 
              className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-100 rounded-2xl font-bold text-xs uppercase tracking-wider shadow-sm hover:border-primary transition-all text-dark/70 hover:text-primary cursor-pointer"
            >
              <RefreshCw size={14} className={oLoading || qLoading ? 'animate-spin' : ''} />
              Refresh Console
            </button>
          </div>
        </header>

        {activeTab === 'dashboard' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <StatCard title="Total Brand Requests" value={stats.totalOrders} icon={<ShoppingBag />} color="from-blue-500 to-indigo-600" />
              <StatCard title="Pending Review" value={stats.pendingOrders} icon={<Clock />} color="from-amber-500 to-orange-600" />
              <StatCard title="Support Enquiries" value={stats.newQueries} icon={<MessageSquare />} color="from-purple-500 to-pink-600" />
              <StatCard title="Fulfilled Designs" value={orders.filter(o => getDisplayStatus(o.status) === 'Completed').length} icon={<CheckCircle />} color="from-emerald-500 to-teal-600" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Order Trend Chart */}
              <div className="lg:col-span-2 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary opacity-20" />
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="font-black text-lg uppercase tracking-tight text-dark">Revenue Projection</h3>
                    <p className="text-[9px] text-dark/30 font-bold uppercase tracking-wider mt-0.5">Value forecast based on stage orders</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="flex items-center gap-2 text-[10px] font-black uppercase text-primary bg-primary/5 px-3 py-1.5 rounded-full">
                      <TrendingUp size={12} /> Live Active Track
                    </span>
                  </div>
                </div>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={orders.slice(-7).map((o, i) => ({ name: `Order ${i+1}`, value: o.totalPrice || 120000 }))}>
                      <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#5B2C8C" stopOpacity={0.15}/>
                          <stop offset="95%" stopColor="#5B2C8C" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 9, fontWeight: 800, fill: '#94a3b8'}} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{fontSize: 9, fontWeight: 800, fill: '#94a3b8'}} />
                      <RechartsTooltip 
                        contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 40px rgba(91, 44, 140, 0.08)', padding: '12px' }}
                      />
                      <Area type="monotone" dataKey="value" stroke="#5B2C8C" strokeWidth={4} fillOpacity={1} fill="url(#colorValue)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Formulation Distribution */}
              <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary opacity-20" />
                <div>
                  <h3 className="font-black text-lg uppercase tracking-tight text-dark mb-8">Formulation Metrics</h3>
                  <div className="space-y-6">
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between text-[9px] font-black uppercase tracking-widest text-slate-400">
                        <span>Whey Isolate / Concentrate</span>
                        <span>{orders.length ? Math.round((orders.filter(o => o.productType?.toLowerCase().includes('whey')).length / orders.length) * 100) : 0}%</span>
                      </div>
                      <div className="h-2 bg-slate-50 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} animate={{ width: `${orders.length ? Math.round((orders.filter(o => o.productType?.toLowerCase().includes('whey')).length / orders.length) * 100) : 0}%` }} className="h-full bg-primary" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between text-[9px] font-black uppercase tracking-widest text-slate-400">
                        <span>Plant Based Formulas</span>
                        <span>{orders.length ? Math.round((orders.filter(o => o.productType?.toLowerCase().includes('plant')).length / orders.length) * 100) : 0}%</span>
                      </div>
                      <div className="h-2 bg-slate-50 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} animate={{ width: `${orders.length ? Math.round((orders.filter(o => o.productType?.toLowerCase().includes('plant')).length / orders.length) * 100) : 0}%` }} className="h-full bg-accent" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between text-[9px] font-black uppercase tracking-widest text-slate-400">
                        <span>Pre-Workout Blends</span>
                        <span>{orders.length ? Math.round((orders.filter(o => o.productType?.toLowerCase().includes('pre-workout')).length / orders.length) * 100) : 0}%</span>
                      </div>
                      <div className="h-2 bg-slate-50 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} animate={{ width: `${orders.length ? Math.round((orders.filter(o => o.productType?.toLowerCase().includes('pre-workout')).length / orders.length) * 100) : 0}%` }} className="h-full bg-dark" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                  <div>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Quality Audit Score</p>
                    <p className="text-xl font-black text-dark mt-0.5">100% Compliant</p>
                  </div>
                  <Award className="text-accent" size={28} />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Orders Preview */}
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary opacity-20" />
                <div className="flex justify-between items-center mb-8">
                  <h3 className="font-black text-lg uppercase tracking-tight text-dark">Recent Orders</h3>
                  <button onClick={() => setActiveTab('orders')} className="text-primary font-bold text-xs uppercase tracking-widest hover:text-accent transition-colors flex items-center gap-1">
                    View list <ChevronRight size={14} />
                  </button>
                </div>
                <div className="flex flex-col gap-4">
                  {orders.slice(0, 4).map(order => {
                    const displayStatus = getDisplayStatus(order.status);
                    return (
                      <div key={order._id} className="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-transparent hover:border-slate-100 transition-all">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5B2C8C]/10 to-[#F27A21]/10 text-primary flex items-center justify-center font-black">
                            {(order.name || order.customerName || 'C').charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <p className="font-black text-sm text-dark">{order.name || order.customerName}</p>
                            <p className="text-[10px] text-slate-400 font-black uppercase tracking-wider mt-0.5">{order.productType}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-black text-sm">{order.quantity} Units</p>
                          <p className={`text-[9px] font-black uppercase tracking-wider mt-0.5 ${
                            displayStatus === 'Completed' ? 'text-green-600' :
                            displayStatus === 'Pending' ? 'text-amber-500' : 'text-blue-500'
                          }`}>{displayStatus}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Recent Queries Preview */}
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary opacity-20" />
                <div className="flex justify-between items-center mb-8">
                  <h3 className="font-black text-lg uppercase tracking-tight text-dark">Support Enquiries</h3>
                  <button onClick={() => setActiveTab('queries')} className="text-primary font-bold text-xs uppercase tracking-widest hover:text-accent transition-colors flex items-center gap-1">
                    Manage requests <ChevronRight size={14} />
                  </button>
                </div>
                <div className="flex flex-col gap-4">
                  {queries.slice(0, 3).map(query => (
                    <div key={query._id} className="p-4 bg-slate-50/50 rounded-2xl border border-transparent hover:border-slate-100 transition-all flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <span className="font-black text-sm text-dark">{query.name}</span>
                        <span className="text-[9px] text-slate-400 font-bold">{new Date(query.createdAt).toLocaleDateString()}</span>
                      </div>
                      <p className="text-xs text-dark/60 line-clamp-2 leading-relaxed font-semibold">“{query.message}”</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'orders' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
            {/* Filters & Search */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Search by customer or brand name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white border border-slate-100 p-4 pl-12 rounded-2xl outline-none focus:border-primary shadow-sm font-semibold text-xs text-dark transition-all placeholder:text-slate-300"
                />
              </div>
              <div className="flex gap-4">
                <div className="relative min-w-[180px]">
                  <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <select 
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="w-full bg-white border border-slate-100 p-4 pl-12 rounded-2xl outline-none focus:border-primary shadow-sm appearance-none font-bold text-xs uppercase tracking-wider text-dark/70 cursor-pointer"
                  >
                    <option value="All">All Status</option>
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Orders Table */}
            <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-accent to-primary opacity-20" />
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 border-b border-slate-100">
                    <tr>
                      <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">ID</th>
                      <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Customer Details</th>
                      <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Configuration</th>
                      <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Status</th>
                      <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50 font-semibold text-xs">
                    {filteredOrders.map((order) => {
                      const displayStatus = getDisplayStatus(order.status);
                      return (
                        <tr key={order._id} className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-6">
                            <span className="text-[10px] font-black font-mono text-slate-400">#{order._id.slice(-6).toUpperCase()}</span>
                          </td>
                          <td className="p-6">
                            <div className="font-black text-dark text-sm">{order.name || order.customerName}</div>
                            <div className="text-[10px] text-slate-400 font-bold mt-1">{order.email}</div>
                          </td>
                          <td className="p-6">
                            <div className="text-sm font-black uppercase text-dark/80">{order.productType}</div>
                            <div className="text-[10px] text-primary font-black uppercase tracking-wider mt-1">{order.quantity} Units • {order.brandName || 'NO BRAND NAME'}</div>
                          </td>
                          <td className="p-6">
                            <span className={`px-4 py-2 text-[9px] font-black uppercase tracking-widest rounded-full flex w-fit items-center gap-2 ${
                              displayStatus === 'Pending' ? 'bg-amber-50 text-amber-700' :
                              displayStatus === 'Completed' ? 'bg-green-50 text-green-700' :
                              'bg-blue-50 text-blue-700'
                            }`}>
                              <div className={`w-1.5 h-1.5 rounded-full ${
                                 displayStatus === 'Pending' ? 'bg-amber-500' :
                                 displayStatus === 'Completed' ? 'bg-green-500' :
                                 'bg-blue-500'
                              }`} />
                              {displayStatus}
                            </span>
                          </td>
                          <td className="p-6">
                            <div className="flex items-center gap-3">
                              <button 
                                onClick={() => setSelectedOrder(order)}
                                className="p-2.5 hover:bg-slate-100 rounded-xl transition-colors text-slate-400 hover:text-primary cursor-pointer"
                                title="View Details"
                              >
                                <ExternalLink size={16} />
                              </button>
                              <select 
                                onChange={(e) => updateOrderStatus(order._id, e.target.value)}
                                value={displayStatus}
                                className="text-[10px] font-black p-2 bg-slate-50 border border-slate-100 outline-none rounded-xl cursor-pointer hover:bg-slate-100 transition-all uppercase tracking-wider text-dark/70"
                              >
                                <option value="Pending">Pending</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                              </select>
                              <button 
                                onClick={() => setDeleteConfirm(order._id)}
                                className="p-2.5 hover:bg-red-50 rounded-xl transition-colors text-slate-400 hover:text-red-500 cursor-pointer"
                                title="Delete Order"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'queries' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 gap-6">
            {queries.map((query) => {
              const isResolved = query.status?.toLowerCase() === 'resolved';
              return (
                <div key={query._id} className={`bg-white p-8 rounded-[32px] border relative overflow-hidden transition-all hover:border-primary/20 ${isResolved ? 'border-slate-100 opacity-70' : 'border-primary/10 shadow-lg shadow-primary/5'}`}>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary opacity-20" />
                  <div className="flex justify-between items-start gap-6">
                    <div className="flex-grow max-w-4xl">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="font-black text-lg tracking-tight text-dark">{query.name}</span>
                        <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${isResolved ? 'bg-slate-100 text-slate-400' : 'bg-primary text-white'}`}>
                          {isResolved ? 'Resolved' : 'New'}
                        </span>
                        <span className="text-[10px] text-slate-400 font-bold">Received {new Date(query.createdAt).toLocaleDateString()}</span>
                      </div>
                      <p className="text-dark/70 mb-6 text-sm font-semibold leading-relaxed">“{query.message}”</p>
                      <div className="flex gap-8">
                        <div className="flex flex-col">
                          <span className="text-[9px] text-slate-400 uppercase font-black tracking-widest mb-1">Email</span>
                          <span className="font-bold text-xs text-dark">{query.email}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[9px] text-slate-400 uppercase font-black tracking-widest mb-1">Phone</span>
                          <span className="font-bold text-xs text-dark">{query.phone || 'N/A'}</span>
                        </div>
                      </div>
                    </div>
                    {!isResolved && (
                      <button 
                        onClick={() => resolveQuery(query._id)}
                        className="flex items-center gap-2 px-5 py-3 bg-dark text-white rounded-xl font-black text-[9px] uppercase tracking-widest hover:bg-primary transition-all shadow-md cursor-pointer"
                      >
                        <CheckCircle size={14} /> Mark Resolved
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}
      </main>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedOrder && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedOrder(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[32px] shadow-2xl overflow-hidden border border-slate-100"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent to-primary" />
              <div className="p-10">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h2 className="text-2xl font-black tracking-tight text-dark mb-1">Order Specifications</h2>
                    <p className="text-slate-400 font-mono text-[10px] uppercase tracking-widest">#{selectedOrder._id}</p>
                  </div>
                  <button onClick={() => setSelectedOrder(null)} className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center hover:bg-slate-100 transition-colors cursor-pointer">
                    <X size={20} className="text-dark/40" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-10 mb-8">
                  <div>
                    <h4 className="text-[9px] font-black uppercase text-slate-400 tracking-[0.2em] mb-4">Customer Contact</h4>
                    <div className="space-y-4">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-slate-400 font-bold mb-0.5">Name</span>
                        <span className="font-bold text-dark">{selectedOrder.name || selectedOrder.customerName}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-slate-400 font-bold mb-0.5">Email</span>
                        <span className="font-bold text-dark">{selectedOrder.email}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-slate-400 font-bold mb-0.5">Phone</span>
                        <span className="font-bold text-dark">{selectedOrder.phone || 'N/A'}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[9px] font-black uppercase text-slate-400 tracking-[0.2em] mb-4">Product Core Details</h4>
                    <div className="space-y-4">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-slate-400 font-bold mb-0.5">Product Type</span>
                        <span className="font-bold text-primary uppercase">{selectedOrder.productType}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-slate-400 font-bold mb-0.5">Brand Designation</span>
                        <span className="font-black text-dark uppercase tracking-tight">{selectedOrder.brandName || 'NOT SPECIFIED'}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-slate-400 font-bold mb-0.5">Initial Volume</span>
                        <span className="font-bold text-dark">{selectedOrder.quantity} Units</span>
                      </div>
                    </div>
                  </div>
                </div>

                {selectedOrder.logoFileName && (
                  <div className="bg-slate-50/50 p-4 rounded-2xl mb-6 border border-slate-100 flex items-center justify-between">
                    <div>
                      <h4 className="text-[9px] font-black uppercase text-slate-400 tracking-[0.2em]">Staged Logo Asset</h4>
                      <p className="text-xs font-bold text-dark mt-1">{selectedOrder.logoFileName}</p>
                    </div>
                    <span className="text-[10px] text-slate-400 font-black font-mono">{selectedOrder.logoFileSize}</span>
                  </div>
                )}

                <div className="bg-slate-50 p-6 rounded-2xl mb-8 border border-slate-100">
                  <h4 className="text-[9px] font-black uppercase text-slate-400 tracking-[0.2em] mb-3">Special Formulation Requirements</h4>
                  <p className="text-dark/70 font-semibold text-xs leading-relaxed italic">“{selectedOrder.specialNotes || 'No specific requirements mentioned.'}”</p>
                </div>

                <div className="flex gap-4">
                   <button 
                    onClick={() => setSelectedOrder(null)}
                    className="flex-grow py-4 bg-gradient-to-r from-accent to-primary text-white rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all hover:shadow-lg active:scale-[0.98] cursor-pointer"
                   >
                     Close Specifications
                   </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Delete Confirm Modal */}
      <AnimatePresence>
        {deleteConfirm && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-8">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" />
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="relative bg-white p-8 rounded-[32px] max-w-sm w-full shadow-2xl border border-slate-100 text-center">
              <div className="w-14 h-14 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-6 mx-auto border border-red-100">
                <AlertCircle size={28} />
              </div>
              <h3 className="text-xl font-black text-dark mb-1">Delete Order?</h3>
              <p className="text-slate-400 text-xs font-semibold mb-6">This action cannot be undone. All custom layout configuration will be permanently purged.</p>
              <div className="flex gap-4">
                <button onClick={() => setDeleteConfirm(null)} className="flex-grow py-3.5 bg-slate-50 border border-slate-100 text-slate-600 rounded-xl font-black text-[10px] uppercase tracking-wider hover:bg-slate-100 transition-all cursor-pointer">Cancel</button>
                <button onClick={() => deleteOrder(deleteConfirm)} className="flex-grow py-3.5 bg-red-500 text-white rounded-xl font-black text-[10px] uppercase tracking-wider hover:bg-red-600 transition-all shadow-md shadow-red-500/20 cursor-pointer">Purge Record</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const StatCard = ({ title, value, icon, color }) => (
  <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm flex flex-col gap-4 relative overflow-hidden group hover:border-primary transition-all duration-500">
    <div className={`w-12 h-12 bg-gradient-to-br ${color} text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
      {icon}
    </div>
    <div>
      <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{title}</p>
      <p className="text-3xl font-black tracking-tighter text-dark">{value}</p>
    </div>
  </div>
);

export default AdminDashboard;
