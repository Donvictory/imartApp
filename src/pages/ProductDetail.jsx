import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { products, cars } from '../data/mockData';
import { Star, ShieldCheck, Truck, RotateCcw, Minus, Plus, ShoppingCart, Heart, ChevronRight } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('specs');

  const product = [...products, ...cars].find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <button onClick={() => navigate('/shop')} className="bg-primary text-white px-6 py-3 rounded-xl font-bold">
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="container-main">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-10">
          <Link to="/" className="hover:text-gray-900">Home</Link>
          <ChevronRight size={12} />
          <Link to={product.category === 'Cars' ? '/cars' : '/shop'} className="hover:text-gray-900">
            {product.category === 'Cars' ? 'Cars' : 'Gadgets'}
          </Link>
          <ChevronRight size={12} />
          <span className="text-gray-900 font-medium">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image */}
          <div className="bg-gray-50 rounded-3xl p-8 sm:p-12 flex items-center justify-center aspect-square">
            <img
              src={product.image}
              alt={product.name}
              className="max-w-full max-h-full object-contain"
              onError={(e) => {
                e.target.src = `https://placehold.co/600x600/f3f4f6/9ca3af?text=${encodeURIComponent(product.name)}`;
              }}
            />
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2">{product.category}</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">{product.name}</h1>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <span className="text-sm text-gray-400">(128 reviews)</span>
            </div>

            <p className="text-3xl font-extrabold text-gray-900 mb-6">${product.price.toLocaleString()}</p>

            <p className="text-gray-500 mb-8 leading-relaxed">
              Experience the next level of technology with the {product.name}. Featuring {product.specs}. Designed for those who demand the best in performance and style.
            </p>

            {/* Quantity + Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-gray-50 transition-colors">
                  <Minus size={16} />
                </button>
                <span className="px-6 font-bold text-sm">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-gray-50 transition-colors">
                  <Plus size={16} />
                </button>
              </div>
              <button className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white py-3.5 rounded-xl font-bold transition-colors">
                <ShoppingCart size={18} /> Add to Cart
              </button>
              <button className="p-3.5 border border-gray-200 rounded-xl text-gray-400 hover:text-primary hover:border-primary transition-colors">
                <Heart size={18} />
              </button>
            </div>

            <button className="w-full py-3.5 border-2 border-gray-900 text-gray-900 rounded-xl font-bold hover:bg-gray-900 hover:text-white transition-colors mb-10">
              Buy Now
            </button>

            {/* Perks */}
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-gray-100">
              {[
                { icon: <Truck size={18} />, title: 'Free Delivery', sub: '2-3 business days' },
                { icon: <RotateCcw size={18} />, title: 'Free Returns', sub: 'Within 30 days' },
                { icon: <ShieldCheck size={18} />, title: 'Warranty', sub: '12 months coverage' },
              ].map((perk, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-red-50 text-primary flex items-center justify-center shrink-0">
                    {perk.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">{perk.title}</p>
                    <p className="text-[10px] text-gray-400">{perk.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-20 mb-20">
          <div className="flex gap-8 border-b border-gray-100 mb-8">
            {['specs', 'reviews', 'warranty'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-sm font-bold capitalize transition-colors ${
                  activeTab === tab ? 'text-primary border-b-2 border-primary' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {tab === 'specs' ? 'Specifications' : tab === 'reviews' ? 'Reviews' : 'Warranty'}
              </button>
            ))}
          </div>
          <div className="max-w-2xl space-y-4">
            {[
              ['Processor', product.specs.split('·')[0]?.trim() || 'N/A'],
              ['Category', product.category],
              ['Storage', 'Various options'],
              ['Color', 'Multiple'],
            ].map(([key, val]) => (
              <div key={key} className="flex py-3 border-b border-gray-50">
                <span className="w-40 text-sm font-bold text-gray-400">{key}</span>
                <span className="text-sm font-medium text-gray-900">{val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
