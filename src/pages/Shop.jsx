import React, { useState } from 'react';
import { products, categories } from '../data/mockData';
import ProductCard from '../components/ProductCard';
import { Search, SlidersHorizontal, ChevronDown } from 'lucide-react';

const Shop = () => {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const gadgetCategories = categories.filter(c => c.name !== 'Cars');

  const filteredProducts = products.filter(p => {
    const matchesFilter = filter === 'All' || p.category === filter;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-900 pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="container-main">
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Official Store</p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">Explore Gadgets</h1>
          <p className="text-gray-400 text-lg max-w-lg">
            Browse our curated collection of premium tech from Apple, Samsung, and more.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container-main py-10">
        {/* Search + Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:outline-none text-sm"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter('All')}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                filter === 'All' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {gadgetCategories.map(cat => (
              <button
                key={cat.name}
                onClick={() => setFilter(cat.name)}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  filter === cat.name ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <p className="text-sm text-gray-400 mb-6">
          Showing <span className="font-bold text-gray-900">{filteredProducts.length}</span> products
        </p>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-gray-50 rounded-2xl">
            <Search size={40} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-400 text-sm mb-6">Try adjusting your search or filters.</p>
            <button
              onClick={() => { setFilter('All'); setSearchQuery(''); }}
              className="text-sm font-bold text-primary hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
