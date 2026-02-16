import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProductGrid from '../components/ProductGrid';
import '../styles/globals.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock products - replace with API call
    const mockProducts = [
      {
        id: 1,
        name: 'SonicX Pro Max',
        price: 499,
        originalPrice: 599,
        category: 'wireless',
        badge: 'NEW',
        description: 'Ultimate wireless headphones with 120h battery',
        image: '🎧',
        specs: [
          { label: '120h', value: 'Battery' },
          { label: '50ms', value: 'Latency' },
          { label: 'Hi-Res', value: 'Audio' },
        ]
      },
      {
        id: 2,
        name: 'GameMaster Elite',
        price: 349,
        category: 'gaming',
        description: 'Gaming headphones with spatial audio',
        image: '🎮',
        specs: [
          { label: '7.1', value: 'Surround' },
          { label: '25ms', value: 'Latency' },
          { label: '48h', value: 'Battery' },
        ]
      },
      {
        id: 3,
        name: 'Studio Master Pro',
        price: 799,
        category: 'studio',
        badge: 'PROFESSIONAL',
        description: 'Studio-grade headphones for audio engineers',
        image: '🎙️',
        specs: [
          { label: '20Hz-20kHz', value: 'Range' },
          { label: '32Ω', value: 'Impedance' },
          { label: 'Wired', value: 'Connection' },
        ]
      },
      {
        id: 4,
        name: 'Sonic Air Lite',
        price: 199,
        category: 'wireless',
        description: 'Lightweight wireless earbuds',
        image: '🎧',
        specs: [
          { label: '32h', value: 'Battery' },
          { label: 'IPX4', value: 'Water' },
          { label: '4g', value: 'Weight' },
        ]
      },
      {
        id: 5,
        name: 'Retro Classic Pro',
        price: 299,
        originalPrice: 349,
        category: 'studio',
        description: 'Vintage-inspired studio headphones',
        image: '🎧',
        specs: [
          { label: '100dB', value: 'SPL' },
          { label: 'Wired', value: 'Connection' },
          { label: 'Leather', value: 'Padding' },
        ]
      },
      {
        id: 6,
        name: 'Cyber Beast RGB',
        price: 429,
        category: 'gaming',
        badge: 'TRENDING',
        description: 'RGB gaming headphones with 3D audio',
        image: '🎧',
        specs: [
          { label: 'RGB', value: 'Lighting' },
          { label: '60ms', value: 'Latency' },
          { label: '72h', value: 'Battery' },
        ]
      },
    ];

    setProducts(mockProducts);
    setLoading(false);
  }, []);

  const handleAddToCart = (product) => {
    console.log('Added to cart:', product);
    // TODO: Implement actual add to cart functionality
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-bg-primary flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-neon-cyan border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-text-secondary">Loading Experience...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />
      <HeroSection />
      <ProductGrid products={products} onAddToCart={handleAddToCart} />

      {/* Features Section */}
      <section className="bg-gradient-to-b from-bg-primary to-bg-secondary py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: '⚡', title: 'Ultra-Low Latency', desc: 'Experience gaming without delay' },
              { icon: '🔋', title: 'Extended Battery', desc: 'Days of uninterrupted listening' },
              { icon: '🎵', title: 'Hi-Res Audio', desc: 'Studio-quality sound reproduction' },
              { icon: '🛡️', title: 'Premium Build', desc: 'Aerospace-grade materials' },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="glass glass-hover rounded-2xl p-8 text-center space-y-4 slide-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-5xl">{feature.icon}</div>
                <h3 className="text-xl font-bold text-text-primary">{feature.title}</h3>
                <p className="text-text-tertiary">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-gradient-to-r from-neon-cyan/10 via-neon-purple/10 to-neon-pink/10 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <h2 className="text-5xl font-bold text-text-primary">
            Ready to Experience
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-pink block">
              Premium Audio?
            </span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Join thousands of audiophiles who have upgraded their listening experience with our flagship headphones.
          </p>
          <button className="group relative px-10 py-4 text-white font-bold rounded-lg overflow-hidden transition-all hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple"></div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{
              boxShadow: '0 0 30px rgba(0, 217, 255, 0.6)',
            }}></div>
            <span className="relative">Get Started Today</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bg-secondary border-t border-border-dark py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {[
              { title: 'Products', items: ['Headphones', 'Earbuds', 'Accessories'] },
              { title: 'Support', items: ['Help Center', 'Warranty', 'Returns'] },
              { title: 'Company', items: ['About Us', 'Careers', 'Press'] },
              { title: 'Legal', items: ['Privacy', 'Terms', 'Cookies'] },
            ].map((col, idx) => (
              <div key={idx}>
                <h4 className="font-bold text-text-primary mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.items.map((item, i) => (
                    <li key={i}>
                      <a href="#" className="text-text-tertiary hover:text-neon-cyan transition-colors text-sm">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-border-dark pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-tertiary text-sm">&copy; 2024 SonicX. All rights reserved.</p>
            <div className="flex gap-4">
              {['Twitter', 'Instagram', 'Discord'].map((social, idx) => (
                <a key={idx} href="#" className="text-text-tertiary hover:text-neon-cyan transition-colors text-sm">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
