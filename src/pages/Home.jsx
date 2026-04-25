import React from 'react';
import { ArrowRight, ShieldCheck, Truck, CreditCard, RefreshCcw, Smartphone, Laptop, Watch, Speaker, Car, Star, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products, categories } from '../data/mockData';

const ICON_MAP = {
  iPhones: Smartphone,
  Samsung: Smartphone,
  Watches: Watch,
  Speakers: Speaker,
  Laptops: Laptop,
  Cars: Car,
};

const Home = () => {
  const featured = products.filter(p => p.isFeatured);

  return (
    <div>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <img
          src="/images/hero-gadgets.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

        <div className="container-main relative z-10 py-32">
          <div className="max-w-2xl">
            <span className="inline-block bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm border border-primary/30">
              ✦ Premium Marketplace
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-6">
              Upgrade Your Tech,<br />
              <span className="text-primary">Upgrade Your Life.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-lg leading-relaxed">
              Discover the latest iPhones, Samsung devices, smartwatches, laptops, and luxury cars — all in one destination.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/shop" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors">
                Shop Now <ArrowRight size={20} />
              </Link>
              <Link to="/trade-in" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg border border-white/20 backdrop-blur-sm transition-colors">
                Trade-In Hub
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-14 pt-8 border-t border-white/10">
              {[
                { value: '50K+', label: 'Customers' },
                { value: '12+', label: 'Brands' },
                { value: '4.9★', label: 'Rating' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-extrabold text-white">{stat.value}</p>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CATEGORIES ─── */}
      <section className="py-20 bg-white">
        <div className="container-main">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-14">
            <div>
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">Browse</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Shop by Category</h2>
            </div>
            <Link to="/shop" className="text-sm font-semibold text-primary hover:underline flex items-center gap-1">
              View All <ChevronRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => {
              const Icon = ICON_MAP[cat.name] || Smartphone;
              return (
                <Link
                  key={cat.name}
                  to={cat.name === 'Cars' ? '/cars' : '/shop'}
                  className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-gray-50 hover:bg-primary hover:text-white transition-all duration-300 text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center text-gray-600 group-hover:text-primary group-hover:bg-white transition-colors shadow-sm">
                    <Icon size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-sm">{cat.name}</p>
                    <p className="text-[10px] text-gray-400 group-hover:text-white/70 transition-colors">{cat.count}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PRODUCTS ─── */}
      <section className="py-20 bg-gray-50">
        <div className="container-main">
          <div className="text-center mb-14">
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">Handpicked</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Featured Products</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((product) => (
              <div key={product.id} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-gray-200 transition-all duration-300">
                <div className="relative bg-gray-50 aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = `https://placehold.co/400x400/f3f4f6/9ca3af?text=${encodeURIComponent(product.name)}`;
                    }}
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">{product.category}</p>
                  <h3 className="font-bold text-gray-900 mb-1 truncate">{product.name}</h3>
                  <p className="text-xs text-gray-400 mb-3">{product.specs}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-extrabold text-gray-900">${product.price.toLocaleString()}</span>
                    <Link to={`/product/${product.id}`} className="flex items-center gap-1 text-xs font-bold text-primary hover:underline">
                      Details <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRADE-IN PROMO ─── */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
                Trade-In Program
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 leading-tight">
                Your Old Device Has Value.<br />
                <span className="text-primary">Trade Up Today.</span>
              </h2>
              <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-md">
                Get instant estimates on your current device and apply the credit to a brand-new upgrade. Fast, secure, and hassle-free.
              </p>
              <Link to="/trade-in" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold transition-colors">
                Start Trade-In <ArrowRight size={20} />
              </Link>
            </div>
            <div className="relative">
              <img
                src="/images/premium-car.png"
                alt="Premium vehicle"
                className="w-full rounded-3xl shadow-2xl"
                onError={(e) => {
                  e.target.src = 'https://placehold.co/800x500/1f2937/6b7280?text=Premium+Vehicles';
                }}
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-5 rounded-2xl shadow-xl">
                <p className="text-2xl font-extrabold text-primary">$650</p>
                <p className="text-xs text-gray-500 font-medium">Avg. Trade-In Value</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST INDICATORS ─── */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container-main">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Truck size={24} />, title: 'Free Delivery', desc: 'On orders over $500' },
              { icon: <ShieldCheck size={24} />, title: 'Official Warranty', desc: '12 months coverage' },
              { icon: <RefreshCcw size={24} />, title: 'Easy Trade-In', desc: 'Instant device valuation' },
              { icon: <CreditCard size={24} />, title: 'Secure Payment', desc: '100% protected checkout' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-primary flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="font-bold text-sm text-gray-900">{item.title}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER ─── */}
      <section className="py-20 bg-gray-50">
        <div className="container-main">
          <div className="bg-gray-900 rounded-3xl p-10 sm:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Stay in the Loop</h2>
            <p className="text-gray-400 text-lg mb-10 max-w-md mx-auto">Get exclusive deals, new arrivals, and insider access delivered to your inbox.</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-5 py-4 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary"
              />
              <button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold transition-colors shrink-0">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
