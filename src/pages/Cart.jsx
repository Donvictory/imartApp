import React from 'react';
import { products } from '../data/mockData';
import { Trash2, Minus, Plus, ArrowRight, ShieldCheck, Truck, ChevronLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const cartItems = [
    { ...products[0], quantity: 1 },
    { ...products[3], quantity: 1 },
  ];
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container-main py-10">
        <button onClick={() => navigate('/shop')} className="flex items-center gap-1 text-sm font-semibold text-primary hover:underline mb-8">
          <ChevronLeft size={16} /> Continue Shopping
        </button>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-10">Shopping Cart</h1>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Items */}
          <div className="flex-1 space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="bg-white rounded-2xl border border-gray-100 p-5 flex flex-col sm:flex-row items-center gap-6">
                <div className="w-24 h-24 bg-gray-50 rounded-xl flex items-center justify-center shrink-0">
                  <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain p-2"
                    onError={(e) => { e.target.src = `https://placehold.co/200/f3f4f6/9ca3af?text=Item`; }}
                  />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <p className="text-[10px] font-bold text-primary uppercase tracking-widest">{item.category}</p>
                  <h3 className="font-bold text-gray-900">{item.name}</h3>
                  <p className="text-xs text-gray-400 mt-1">{item.specs}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                    <button className="p-2 hover:bg-gray-50"><Minus size={14} /></button>
                    <span className="px-4 text-sm font-bold">{item.quantity}</span>
                    <button className="p-2 hover:bg-gray-50"><Plus size={14} /></button>
                  </div>
                  <button className="p-2 text-gray-300 hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                </div>
                <p className="text-lg font-extrabold text-gray-900 shrink-0">${(item.price * item.quantity).toLocaleString()}</p>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="w-full lg:w-96">
            <div className="bg-white rounded-2xl border border-gray-100 p-8 sticky top-28">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Order Summary</h3>
              <div className="space-y-3 mb-6 pb-6 border-b border-gray-100">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Subtotal</span>
                  <span className="font-bold text-gray-900">${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Shipping</span>
                  <span className="font-bold text-green-500">FREE</span>
                </div>
              </div>
              <div className="flex justify-between mb-8">
                <span className="font-bold text-gray-900">Total</span>
                <span className="text-2xl font-extrabold text-primary">${subtotal.toLocaleString()}</span>
              </div>
              <Link to="/checkout" className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-xl font-bold transition-colors">
                Checkout <ArrowRight size={16} />
              </Link>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <ShieldCheck size={14} className="text-primary" /> Secure SSL Checkout
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Truck size={14} className="text-primary" /> Free delivery on this order
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
