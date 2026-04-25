import React from 'react';
import { Package, Heart, RefreshCcw, Bell, Settings, User, LogOut, Clock } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'Orders', value: '12', icon: Package, color: 'bg-blue-500' },
    { label: 'Wishlist', value: '08', icon: Heart, color: 'bg-red-500' },
    { label: 'Trade-Ins', value: '02', icon: RefreshCcw, color: 'bg-green-500' },
    { label: 'Notifications', value: '05', icon: Bell, color: 'bg-yellow-500' },
  ];

  const orders = [
    { id: '#ORD-7892', date: '2024-03-15', status: 'Delivered', total: '$1,199', statusColor: 'bg-green-100 text-green-700' },
    { id: '#ORD-7841', date: '2024-02-28', status: 'Processing', total: '$89,990', statusColor: 'bg-blue-100 text-blue-700' },
  ];

  const sideItems = [
    { label: 'Overview', icon: User, active: true },
    { label: 'My Orders', icon: Package },
    { label: 'Wishlist', icon: Heart },
    { label: 'Trade-In Status', icon: RefreshCcw },
    { label: 'Notifications', icon: Bell },
    { label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container-main py-10">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Sidebar */}
          <aside className="w-full lg:w-72 space-y-4 shrink-0">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 text-center">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                JD
              </div>
              <h3 className="font-bold text-gray-900">John Doe</h3>
              <p className="text-xs text-gray-400 mt-1">john.doe@example.com</p>
              <button className="mt-4 w-full py-2 rounded-lg border border-gray-200 text-xs font-semibold text-gray-500 hover:bg-gray-50 transition-colors">
                Edit Profile
              </button>
            </div>

            <nav className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              {sideItems.map((item, i) => (
                <button
                  key={i}
                  className={`w-full flex items-center gap-3 px-5 py-3.5 text-sm font-semibold transition-colors ${
                    item.active
                      ? 'text-primary bg-red-50 border-r-2 border-primary'
                      : 'text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  <item.icon size={18} />
                  {item.label}
                </button>
              ))}
              <button className="w-full flex items-center gap-3 px-5 py-4 text-sm font-bold text-red-500 hover:bg-red-50 border-t border-gray-100 transition-colors">
                <LogOut size={18} />
                Logout
              </button>
            </nav>
          </aside>

          {/* Main */}
          <main className="flex-1 space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 p-5 flex items-center gap-4">
                  <div className={`w-11 h-11 rounded-xl ${stat.color} text-white flex items-center justify-center`}>
                    <stat.icon size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{stat.label}</p>
                    <p className="text-xl font-extrabold text-gray-900">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {/* Recent Orders */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-gray-900">Recent Orders</h3>
                  <button className="text-xs font-bold text-primary hover:underline">View All</button>
                </div>
                <div className="space-y-3">
                  {orders.map((order, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-gray-50">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center text-primary shadow-sm">
                          <Package size={16} />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-900">{order.id}</p>
                          <p className="text-[10px] text-gray-400">{order.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-gray-900">{order.total}</p>
                        <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${order.statusColor}`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trade-In */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-gray-900">Trade-In Progress</h3>
                  <button className="text-xs font-bold text-primary hover:underline">Track</button>
                </div>
                <div className="relative pl-6 border-l-2 border-gray-100 space-y-6">
                  {[
                    { title: 'Valuation Complete', time: '2 hours ago', done: true },
                    { title: 'Images Uploaded', time: '5 hours ago', done: true },
                    { title: 'Request Submitted', time: '1 day ago', done: true },
                  ].map((s, i) => (
                    <div key={i} className="relative">
                      <div className={`absolute -left-[25px] top-1 w-3 h-3 rounded-full border-2 border-white ${
                        s.done ? 'bg-primary' : 'bg-gray-200'
                      }`} />
                      <p className="text-sm font-bold text-gray-900">{s.title}</p>
                      <p className="text-[10px] text-gray-400 flex items-center gap-1 mt-0.5">
                        <Clock size={10} /> {s.time}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
