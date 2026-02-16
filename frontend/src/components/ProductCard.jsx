import React, { useState } from 'react';
import { ShoppingCart, Star, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/globals.css';

const ProductCard = ({ product, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [rating] = useState(4.8);
  const [reviews] = useState(328);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className="group relative h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Card Container */}
      <div className="glass glass-hover rounded-2xl p-4 sm:p-6 h-full backdrop-blur-xl border border-border-dark transition-all duration-300 overflow-hidden hover:scale-105">
        {/* Background Glow */}
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
          style={{
            background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 217, 255, 0.15) 0%, transparent 70%)`,
          }}
        ></div>

        <div className="relative z-10 space-y-4">
          {/* Product Image */}
          <Link to={`/product/${product.id}`} className="block overflow-hidden rounded-xl group/image cursor-pointer">
            <div className="relative w-full h-32 sm:h-48 bg-gradient-to-br from-bg-tertiary to-bg-primary flex items-center justify-center overflow-hidden">
              {/* Placeholder for product image */}
              <div
                className={`text-6xl sm:text-8xl transition-transform duration-300 ${isHovered ? 'scale-110 rotate-3' : 'scale-100'}`}
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(0, 217, 255, 0.4))',
                }}
              >
                🎧
              </div>

              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 right-4 bg-neon-pink text-white text-xs font-bold px-3 py-1 rounded-full">
                  {product.badge}
                </div>
              )}
            </div>
          </Link>

          {/* Product Info */}
          <div className="space-y-2 sm:space-y-3">
            {/* Category and Rating */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-neon-cyan uppercase tracking-wider">
                {product.category}
              </span>
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-neon-cyan text-neon-cyan" />
                <span className="text-xs sm:text-sm font-bold text-text-secondary">{rating}</span>
              </div>
            </div>

            {/* Product Name */}
            <Link to={`/product/${product.id}`} className="block">
              <h3 className="text-base sm:text-lg font-bold text-text-primary group-hover:text-neon-cyan transition-colors line-clamp-2">
                {product.name}
              </h3>
            </Link>

            {/* Description */}
            <p className="text-xs sm:text-sm text-text-tertiary line-clamp-2">
              {product.description || 'Premium audio experience'}
            </p>

            {/* Reviews */}
            <p className="text-xs text-text-tertiary">
              ({reviews} reviews)
            </p>
          </div>

          {/* Price and Button */}
          <div className="space-y-2 sm:space-y-3 pt-3 sm:pt-4 border-t border-border-dark">
            {/* Price */}
            <div className="flex items-end gap-2">
              <span className="text-xl sm:text-2xl font-bold text-neon-cyan">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xs sm:text-sm text-text-tertiary line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            {/* Quick Buy Button */}
            <button
              onClick={() => onAddToCart(product)}
              className="w-full group/btn relative overflow-hidden rounded-lg py-2 sm:py-3 font-bold transition-all duration-300 active:scale-95"
            >
              {/* Button Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>

              {/* Glow on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity" style={{
                boxShadow: 'inset 0 0 20px rgba(0, 217, 255, 0.3)',
              }}></div>

              {/* Button Content */}
              <div className="relative flex items-center justify-center gap-2 text-bg-primary group-hover/btn:text-bg-primary transition-colors">
                <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm">{isHovered ? 'Add to Cart' : 'Quick Buy'}</span>
              </div>
            </button>

            {/* Features */}
            <div className="grid grid-cols-3 gap-2 pt-2">
              {product.specs && product.specs.slice(0, 3).map((spec, idx) => (
                <div key={idx} className="text-center">
                  <p className="text-xs font-bold text-neon-cyan">{spec.value}</p>
                  <p className="text-xs text-text-tertiary">{spec.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
