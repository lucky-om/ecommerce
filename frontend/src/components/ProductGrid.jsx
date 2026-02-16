import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Filter } from 'lucide-react';
import '../styles/globals.css';

const ProductGrid = ({ products, onAddToCart }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Products' },
    { id: 'wireless', label: 'Wireless' },
    { id: 'gaming', label: 'Gaming' },
    { id: 'studio', label: 'Studio' },
  ];

  const filteredProducts = activeFilter === 'all'
    ? products
    : products.filter(p => p.category === activeFilter);

  return (
    <section className="bg-gradient-to-b from-bg-primary via-bg-tertiary to-bg-primary py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-5xl lg:text-6xl font-bold text-text-primary">
            Featured
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple block">
              Headphones
            </span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Discover our premium collection of high-end audio equipment designed for the discerning listener.
          </p>
        </div>

        {/* Filter Section */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center gap-2 text-text-secondary">
            <Filter className="w-5 h-5 text-neon-cyan" />
            <span className="font-medium">Filter by:</span>
          </div>
          
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 ${
                activeFilter === filter.id
                  ? 'glass border border-neon-cyan text-neon-cyan glow-pulse'
                  : 'text-text-secondary hover:text-neon-cyan border border-border-dark'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, idx) => (
              <div
                key={product.id || idx}
                className="slide-in"
                style={{
                  animationDelay: `${idx * 0.1}s`,
                }}
              >
                <ProductCard
                  product={product}
                  onAddToCart={onAddToCart}
                />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-text-secondary text-lg">
                No products found in this category.
              </p>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center pt-12">
          <button className="group relative px-8 py-4 text-text-primary font-bold rounded-lg overflow-hidden transition-all hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple opacity-20 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity glow-pulse rounded-lg"></div>
            <span className="relative">View All Products</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
