import React from 'react';
import { Mail, Phone, MapPin, Globe, Send, Camera, Play, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white">
      {/* Main footer */}
      <div className="container-main py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Brand column */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-extrabold text-lg">I</span>
              </div>
              <span className="text-xl font-bold text-white">Mart</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Your premium destination for cutting-edge gadgets and luxury vehicles. Elevating lifestyles since 2024.
            </p>
            <div className="flex gap-3">
              {[Globe, Send, Camera, Play].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:border-primary transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Shop</h4>
            <ul className="space-y-3">
              {['Gadgets', 'Luxury Cars', 'New Arrivals', 'Trade-In'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-gray-500 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Support</h4>
            <ul className="space-y-3">
              {['Order Tracking', 'Returns', 'Warranty', 'FAQs'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-sm text-gray-500 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <MapPin size={16} className="text-primary mt-1 shrink-0" />
                <span className="text-sm text-gray-500">123 Tech Avenue, Silicon Valley, CA 94025</span>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={16} className="text-primary shrink-0" />
                <span className="text-sm text-gray-500">+1 (555) 000-IMART</span>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={16} className="text-primary shrink-0" />
                <span className="text-sm text-gray-500">support@imart.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container-main py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">© {new Date().getFullYear()} Imart. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-gray-600 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-xs text-gray-600 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-xs text-gray-600 hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
