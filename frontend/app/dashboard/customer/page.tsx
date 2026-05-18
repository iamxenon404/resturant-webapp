'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  // Sample order metrics matching your kitchen theme
  const metrics = [
    { label: 'Active Orders', value: '12', change: '+3 new', color: 'text-amber-600' },
    { label: 'Pending Delivery', value: '5', change: 'In transit', color: 'text-blue-600' },
    { label: 'Completed Today', value: '48', change: '₦142,000 Revenue', color: 'text-emerald-600' },
  ];

  // Sample active order pipeline array
  const activeOrders = [
    { id: '#1024', customer: 'Amadi Chukwu', items: '2x Jollof Rice, 1x Grilled Chicken', total: '₦8,500', status: 'Preparing' },
    { id: '#1023', customer: 'Chioma Nwachukwu', items: '1x Egusi Soup, 2x Pounded Yam', total: '₦6,200', status: 'Ready for Pickup' },
    { id: '#1022', customer: 'Tunde Bakare', items: '3x Beef Suya Platter', total: '₦12,000', status: 'Delivering' },
  ];

  useEffect(() => {
    // Simple verification check to guard the route locally
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/auth/login');
    } else {
      setAuthorized(true);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/auth/login');
  };

  if (!authorized) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 dark:bg-slate-950">
        <p className="text-slate-500 animate-pulse">Loading secure session data...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      
      {/* Sidebar Navigation Context */}
      <aside className="w-64 hidden md:block border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-6">
        <div className="text-2xl font-bold tracking-tight text-amber-600">ChowDown</div>
        <nav className="space-y-1">
          <a href="#" className="flex items-center px-4 py-3 text-sm font-medium rounded-xl bg-amber-50 dark:bg-amber-950/30 text-amber-600">
            Kitchen Overview
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50">
            Menu Manager
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50">
            Order History
          </a>
        </nav>
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
          <button onClick={handleLogout} className="w-full text-left px-4 py-3 text-sm font-medium text-red-600 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors">
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Dashboard Frame */}
      <main className="flex-1 p-6 md:p-10 space-y-8 overflow-y-auto">
        <header className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Kitchen Monitor</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">Track incoming payloads and fulfillment streams</p>
          </div>
          <button onClick={handleLogout} className="md:hidden self-start text-sm text-red-600 font-medium">
            Sign Out
          </button>
        </header>

        {/* Analytics Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {metrics.map((m, i) => (
            <div key={i} className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{m.label}</p>
              <div className="flex items-baseline gap-2 mt-2">
                <span className={`text-3xl font-bold ${m.color}`}>{m.value}</span>
                <span className="text-xs text-slate-400 font-medium">{m.change}</span>
              </div>
            </div>
          ))}
        </section>

        {/* Active Database Table Block */}
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200 dark:border-slate-800">
            <h3 className="text-lg font-bold">Live Preparation Queue</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/40 text-xs font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-200 dark:border-slate-800">
                  <th className="p-4 pl-6">Order ID</th>
                  <th className="p-4">Customer</th>
                  <th className="p-4">Items Ordered</th>
                  <th className="p-4">Total Price</th>
                  <th className="p-4 pr-6">Pipeline Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-sm">
                {activeOrders.map((order, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                    <td className="p-4 pl-6 font-mono text-amber-600 font-semibold">{order.id}</td>
                    <td className="p-4 font-medium">{order.customer}</td>
                    <td className="p-4 text-slate-500 dark:text-slate-400 max-w-xs truncate">{order.items}</td>
                    <td className="p-4 font-semibold">{order.total}</td>
                    <td className="p-4 pr-6">
                      <span className="inline-flex px-2.5 py-1 text-xs font-medium rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-900/60">
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}