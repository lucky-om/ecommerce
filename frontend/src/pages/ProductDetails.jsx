import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ShoppingCart, Star, Zap, Battery, Cpu, Activity, ChevronRight } from 'lucide-react';
import '../styles/globals.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('black');

  // Mock product data
  const product = {
    id: 1,
    name: 'SonicX Pro Max',
    price: 499,
    originalPrice: 599,
    rating: 4.8,
    reviews: 328,
    description: 'The ultimate wireless headphones combining cutting-edge technology with premium audio quality.',
    features: [
      {
        icon: <Battery className="w-8 h-8" />,
        title: '120-Hour Battery',
        description: 'Ultra-long battery life for weeks of listening'
      },
      {
        icon: <Zap className="w-8 h-8" />,
        title: '50ms Latency',
        description: 'Gaming-grade low latency for seamless experience'
      },
      {
        icon: <Cpu className="w-8 h-8" />,
        title: 'AI Noise Cancel',
        description: 'Advanced noise cancellation technology'
      },
      {
        icon: <Activity className="w-8 h-8" />,
        title: 'Hi-Res Audio',
        description: 'Studio-quality audio reproduction'
      }
    ],
    specs: {
      'Driver Size': '40mm',
      'Frequency Range': '20Hz - 20kHz',
      'Impedance': '32Ω',
      'Weight': '250g',
      'Connection': 'Bluetooth 5.3',
      'Battery': '120 hours',
      'Charging': 'USB-C (2 hours)',
      'Materials': 'Aluminum, Memory Foam'
    },
    colors: [
      { name: 'Midnight Black', hex: '#1a1f3a' },
      { name: 'Stealth Gray', hex: '#4a5568' },
      { name: 'Phantom White', hex: '#e0e7ff' }
    ]
  };

  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-8 flex items-center gap-2 text-sm text-text-tertiary">
        <a href="/" className="hover:text-neon-cyan transition-colors">Home</a>
        <ChevronRight className="w-4 h-4" />
        <a href="/" className="hover:text-neon-cyan transition-colors">Products</a>
        <ChevronRight className="w-4 h-4" />
        <span className="text-text-primary font-medium">{product.name}</span>
      </div>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="flex items-center justify-center">
            <div className="glass glass-hover rounded-2xl p-12 backdrop-blur-xl border border-border-glow w-full aspect-square flex items-center justify-center relative group">
              {/* Background Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(0, 217, 255, 0.1) 0%, transparent 70%)',
              }}></div>

              {/* Product Image */}
              <div className="relative z-10 float text-9xl">
                🎧
              </div>

              {/* Audio Waves */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute w-32 h-32 border-2 border-neon-cyan rounded-full opacity-30 animate-pulse"></div>
                <div className="absolute w-48 h-48 border-2 border-neon-purple rounded-full opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full w-fit">
                <Zap className="w-4 h-4 text-neon-cyan" />
                <span className="text-sm font-bold text-neon-cyan">NEW RELEASE</span>
              </div>

              <h1 className="text-5xl font-bold text-text-primary">
                {product.name}
              </h1>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < 5 ? 'fill-neon-cyan text-neon-cyan' : 'text-text-tertiary'}`}
                    />
                  ))}
                </div>
                <span className="text-text-secondary">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-text-secondary text-lg leading-relaxed">
              {product.description}
            </p>

            {/* Pricing */}
            <div className="flex items-end gap-4">
              <span className="text-4xl font-bold text-neon-cyan">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-text-tertiary line-through">
                  ${product.originalPrice}
                </span>
              )}
              <span className="ml-auto text-sm font-bold text-neon-pink bg-neon-pink/10 px-4 py-2 rounded-full">
                Save ${product.originalPrice - product.price}
              </span>
            </div>

            {/* Color Selection */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider">Select Color</h3>
              <div className="flex gap-4">
                {product.colors.map(color => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`group/color p-4 rounded-lg glass glass-hover transition-all ${
                      selectedColor === color.name ? 'border-neon-cyan border-2' : 'border border-border-dark'
                    }`}
                  >
                    <div
                      className="w-12 h-12 rounded-lg transition-transform group-hover/color:scale-110"
                      style={{ backgroundColor: color.hex }}
                    ></div>
                    <p className="text-xs text-text-tertiary mt-2 font-medium">{color.name}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex gap-4">
                {/* Quantity */}
                <div className="glass rounded-lg border border-border-dark flex items-center justify-between p-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-neon-cyan hover:bg-bg-tertiary rounded transition-colors"
                  >
                    −
                  </button>
                  <span className="px-6 font-bold text-text-primary">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-neon-cyan hover:bg-bg-tertiary rounded transition-colors"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button className="flex-1 group relative overflow-hidden rounded-lg py-3 font-bold transition-all hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple"></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity glow-pulse"></div>
                  <div className="relative flex items-center justify-center gap-2 text-bg-primary">
                    <ShoppingCart className="w-5 h-5" />
                    <span>Add to Cart</span>
                  </div>
                </button>
              </div>

              {/* Wishlist */}
              <button className="w-full glass glass-hover rounded-lg py-3 font-bold text-text-primary border border-border-dark transition-all">
                Save for Later
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border-dark">
              <div className="text-center">
                <p className="text-2xl font-bold text-neon-cyan">30</p>
                <p className="text-xs text-text-tertiary">Day Returns</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-neon-cyan">2</p>
                <p className="text-xs text-text-tertiary">Year Warranty</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-neon-cyan">24/7</p>
                <p className="text-xs text-text-tertiary">Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-b from-bg-primary via-bg-tertiary to-bg-primary py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-text-primary mb-12 text-center">
            Why Choose SonicX Pro Max?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {product.features.map((feature, idx) => (
              <div
                key={idx}
                className="glass glass-hover rounded-2xl p-8 space-y-4 slide-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-neon-cyan">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-text-primary">{feature.title}</h3>
                <p className="text-text-tertiary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-text-primary mb-12">Technical Specifications</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(product.specs).map(([key, value], idx) => (
            <div
              key={key}
              className="glass rounded-lg p-6 flex justify-between items-center slide-in"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <span className="text-text-secondary font-medium">{key}</span>
              <span className="text-text-primary font-bold text-neon-cyan">{value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-neon-cyan/10 via-neon-purple/10 to-neon-pink/10 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-text-primary">
            Ready to Elevate Your Audio?
          </h2>
          <button className="group relative px-10 py-4 text-white font-bold rounded-lg overflow-hidden transition-all hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple"></div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{
              boxShadow: '0 0 30px rgba(0, 217, 255, 0.6)',
            }}></div>
            <span className="relative flex items-center justify-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Add to Cart Now
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
