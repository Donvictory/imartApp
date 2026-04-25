import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, ArrowRight, Heart } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-gray-200 transition-all duration-300">
      {/* Image */}
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
        <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-primary shadow-sm opacity-0 group-hover:opacity-100 transition-all">
          <Heart size={14} />
        </button>
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">{product.category}</p>
        <h3 className="font-bold text-gray-900 mb-1 truncate">{product.name}</h3>
        <p className="text-xs text-gray-400 mb-3">{product.specs}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-extrabold text-gray-900">${product.price.toLocaleString()}</span>
          <Link
            to={`/product/${product.id}`}
            className="flex items-center gap-1 text-xs font-bold text-primary hover:underline"
          >
            View <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
