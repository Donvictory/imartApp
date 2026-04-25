import React, { useState } from 'react';
import { CreditCard, MapPin, CheckCircle, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-24">
        <div className="text-center bg-white p-12 rounded-3xl shadow-xl max-w-md mx-4 border border-gray-100">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Order Confirmed!</h2>
          <p className="text-gray-400 mb-8">
            Thank you for your purchase. Your order #IM-90231 will be delivered in 2-3 business days.
          </p>
          <button onClick={() => navigate('/dashboard')} className="w-full bg-primary text-white py-3.5 rounded-xl font-bold hover:bg-primary-dark transition-colors">
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container-main py-10">
        <button onClick={() => navigate('/cart')} className="flex items-center gap-1 text-sm font-semibold text-primary hover:underline mb-8">
          <ChevronLeft size={16} /> Back to Cart
        </button>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-10">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            {/* Delivery */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-primary flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Delivery Information</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input placeholder="First Name" className="px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:outline-none" />
                <input placeholder="Last Name" className="px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:outline-none" />
                <input placeholder="Email" className="sm:col-span-2 px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:outline-none" />
                <input placeholder="Phone" className="px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:outline-none" />
                <input placeholder="Zip Code" className="px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:outline-none" />
                <input placeholder="Address" className="sm:col-span-2 px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:outline-none" />
              </div>
            </div>

            {/* Payment */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-primary flex items-center justify-center">
                  <CreditCard size={18} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Payment Method</h3>
              </div>
              <div className="space-y-3 mb-6">
                <label className="flex items-center gap-4 p-4 rounded-xl border-2 border-primary bg-red-50 cursor-pointer">
                  <input type="radio" name="payment" defaultChecked className="accent-primary" />
                  <div>
                    <p className="font-bold text-sm text-gray-900">Credit / Debit Card</p>
                    <p className="text-xs text-gray-400">Visa, Mastercard, Amex</p>
                  </div>
                </label>
                <label className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 cursor-pointer hover:border-gray-300 transition-colors">
                  <input type="radio" name="payment" className="accent-primary" />
                  <div>
                    <p className="font-bold text-sm text-gray-900">Bank Transfer</p>
                    <p className="text-xs text-gray-400">Direct bank transfer</p>
                  </div>
                </label>
              </div>
              <div className="space-y-4">
                <input placeholder="Card Number" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:outline-none" />
                <div className="grid grid-cols-2 gap-4">
                  <input placeholder="MM / YY" className="px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:outline-none" />
                  <input placeholder="CVV" className="px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:outline-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div>
            <div className="bg-white rounded-2xl border border-gray-100 p-8 sticky top-28">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Order Summary</h3>
              <div className="space-y-3 mb-6 pb-6 border-b border-gray-100 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">iPhone 15 Pro Max x1</span>
                  <span className="font-bold">$1,199</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Apple Watch Ultra 2 x1</span>
                  <span className="font-bold">$799</span>
                </div>
              </div>
              <div className="space-y-2 mb-6 pb-6 border-b border-gray-100 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Subtotal</span>
                  <span className="font-bold">$1,998</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Shipping</span>
                  <span className="font-bold text-green-500">FREE</span>
                </div>
              </div>
              <div className="flex justify-between mb-8">
                <span className="text-lg font-bold">Total</span>
                <span className="text-2xl font-extrabold text-primary">$1,998</span>
              </div>
              <button
                onClick={() => setDone(true)}
                className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-xl font-bold transition-colors"
              >
                Complete Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
