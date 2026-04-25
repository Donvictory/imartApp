import React, { useState } from 'react';
import { Smartphone, Laptop, Watch, Camera, Video, ChevronRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const TradeIn = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    deviceType: '',
    model: '',
    storage: '',
    condition: '',
    notes: '',
  });

  const devices = [
    { id: 'phone', label: 'Smartphone', desc: 'iPhone, Samsung, Pixel', icon: Smartphone },
    { id: 'laptop', label: 'Laptop', desc: 'MacBook, Dell, HP', icon: Laptop },
    { id: 'watch', label: 'Smartwatch', desc: 'Apple Watch, Galaxy Watch', icon: Watch },
  ];

  const conditions = [
    { id: 'excellent', label: 'Excellent', desc: 'Like new, no scratches' },
    { id: 'good', label: 'Good', desc: 'Minor wear, fully functional' },
    { id: 'fair', label: 'Fair', desc: 'Visible scratches, works fine' },
    { id: 'damaged', label: 'Damaged', desc: 'Cracked or broken parts' },
  ];

  const calculateValue = () => {
    const base = { phone: 650, laptop: 950, watch: 300 }[formData.deviceType] || 500;
    const mult = { excellent: 1, good: 0.85, fair: 0.6, damaged: 0.3 }[formData.condition] || 0.5;
    return Math.floor(base * mult);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-900 pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="container-main">
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Upgrade Hub</p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">Trade-In Your Device</h1>
          <p className="text-gray-400 text-lg max-w-lg">
            Get the best value for your current device and apply it towards a brand-new upgrade.
          </p>
        </div>
      </div>

      <div className="container-main py-12">
        {/* Progress */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-between mb-2">
            {['Device', 'Details', 'Upload', 'Result'].map((label, i) => (
              <div key={label} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  step > i + 1 ? 'bg-green-500 text-white' : step === i + 1 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'
                }`}>
                  {step > i + 1 ? '✓' : i + 1}
                </div>
                <span className={`text-xs font-semibold hidden sm:inline ${step === i + 1 ? 'text-gray-900' : 'text-gray-400'}`}>
                  {label}
                </span>
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-100 h-1.5 rounded-full">
            <div className="bg-primary h-1.5 rounded-full transition-all duration-500" style={{ width: `${((step - 1) / 3) * 100}%` }} />
          </div>
        </div>

        {/* Form Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-gray-100 shadow-lg p-8 sm:p-12">

          {/* Step 1: Select Device */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">What device do you have?</h2>
              <p className="text-gray-400 mb-8">Select the type of device you want to trade in.</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {devices.map(d => (
                  <button
                    key={d.id}
                    onClick={() => { setFormData({...formData, deviceType: d.id}); setStep(2); }}
                    className={`flex flex-col items-center gap-3 p-8 rounded-2xl border-2 transition-all hover:border-primary hover:shadow-md ${
                      formData.deviceType === d.id ? 'border-primary bg-red-50' : 'border-gray-100'
                    }`}
                  >
                    <d.icon size={32} className="text-primary" />
                    <p className="font-bold text-gray-900">{d.label}</p>
                    <p className="text-xs text-gray-400">{d.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Device Details */}
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Tell us about your device</h2>
              <p className="text-gray-400 mb-8">Provide details so we can give you the best estimate.</p>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Model Name</label>
                  <input
                    value={formData.model}
                    onChange={(e) => setFormData({...formData, model: e.target.value})}
                    placeholder="e.g. iPhone 14 Pro"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Storage</label>
                  <select
                    value={formData.storage}
                    onChange={(e) => setFormData({...formData, storage: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option>128GB</option>
                    <option>256GB</option>
                    <option>512GB</option>
                    <option>1TB</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Condition</label>
                  <div className="grid grid-cols-2 gap-3">
                    {conditions.map(c => (
                      <button
                        key={c.id}
                        onClick={() => setFormData({...formData, condition: c.id})}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          formData.condition === c.id ? 'border-primary bg-red-50' : 'border-gray-100 hover:border-gray-200'
                        }`}
                      >
                        <p className="font-bold text-sm text-gray-900">{c.label}</p>
                        <p className="text-xs text-gray-400">{c.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-10">
                <button onClick={() => setStep(1)} className="flex-1 py-3 rounded-xl border border-gray-200 font-bold text-gray-600 hover:bg-gray-50 transition-colors">
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={!formData.model || !formData.condition}
                  className="flex-1 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary-dark transition-colors disabled:opacity-30"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Upload */}
          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Upload Verification</h2>
              <p className="text-gray-400 mb-8">Add photos and a video of your device for verification.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <label className="flex flex-col items-center justify-center gap-3 p-10 rounded-2xl border-2 border-dashed border-gray-200 hover:border-primary cursor-pointer transition-colors bg-gray-50">
                  <Camera size={32} className="text-gray-400" />
                  <p className="font-bold text-sm text-gray-700">Upload Photos</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider">Front, Back, Sides</p>
                  <input type="file" multiple className="hidden" />
                </label>
                <label className="flex flex-col items-center justify-center gap-3 p-10 rounded-2xl border-2 border-dashed border-gray-200 hover:border-primary cursor-pointer transition-colors bg-gray-50">
                  <Video size={32} className="text-gray-400" />
                  <p className="font-bold text-sm text-gray-700">Upload Video</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider">360° View</p>
                  <input type="file" className="hidden" />
                </label>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Notes (optional)</label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  placeholder="Any additional info about your device..."
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:outline-none h-24 resize-none"
                />
              </div>
              <div className="flex gap-4 mt-10">
                <button onClick={() => setStep(2)} className="flex-1 py-3 rounded-xl border border-gray-200 font-bold text-gray-600 hover:bg-gray-50 transition-colors">
                  Back
                </button>
                <button onClick={() => setStep(4)} className="flex-1 py-3 rounded-xl bg-gray-900 text-white font-bold hover:bg-gray-800 transition-colors">
                  Get Estimate
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Result */}
          {step === 4 && (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={32} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Estimated Trade-In Value</h2>
              <p className="text-6xl font-extrabold text-primary my-8">${calculateValue()}</p>
              <p className="text-gray-400 max-w-md mx-auto mb-10">
                Based on your {formData.model} in {formData.condition} condition. Apply this credit to your next purchase!
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
                <Link to="/shop" className="py-3 rounded-xl bg-primary text-white font-bold text-center hover:bg-primary-dark transition-colors">
                  Upgrade Now
                </Link>
                <button className="py-3 rounded-xl border border-gray-200 font-bold text-gray-600 hover:bg-gray-50 transition-colors">
                  Get Cash
                </button>
              </div>
              <button onClick={() => setStep(1)} className="mt-8 text-sm text-gray-400 hover:text-primary">
                Start over
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TradeIn;
