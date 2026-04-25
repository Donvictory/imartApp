import React, { useState } from 'react';
import { cars } from '../data/mockData';
import { Search, MapPin, Gauge, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cars = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredCars = cars.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-900 pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="container-main">
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Imart Motors</p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">Luxury Cars</h1>
          <p className="text-gray-400 text-lg max-w-lg mb-8">
            Premium electric and performance vehicles curated for the modern lifestyle.
          </p>
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input
              type="text"
              placeholder="Search by brand or model..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary"
            />
          </div>
        </div>
      </div>

      {/* Listings */}
      <div className="container-main py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCars.map((car) => (
            <div key={car.id} className="group flex flex-col md:flex-row bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-gray-200 transition-all">
              <div className="md:w-1/2 aspect-video md:aspect-auto overflow-hidden bg-gray-50">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = `https://placehold.co/600x400/f3f4f6/9ca3af?text=${encodeURIComponent(car.name)}`;
                  }}
                />
              </div>
              <div className="md:w-1/2 p-6 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest bg-red-50 px-2 py-0.5 rounded">
                    {car.condition}
                  </span>
                  <span className="text-xl font-extrabold text-gray-900">${car.price.toLocaleString()}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{car.name}</h3>

                <div className="flex gap-4 mb-6">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <Gauge size={14} className="text-primary" />
                    <span>{car.specs.split('·')[0].trim()}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <Zap size={14} className="text-primary" />
                    <span>Electric</span>
                  </div>
                </div>

                <div className="mt-auto flex gap-3">
                  <Link to={`/product/${car.id}`} className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white py-3 rounded-xl font-bold text-sm transition-colors">
                    View Details <ArrowRight size={14} />
                  </Link>
                  <button className="w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-colors">
                    <MapPin size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;
