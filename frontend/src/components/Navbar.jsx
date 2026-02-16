import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/globals.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-smooth ${
        scrolled
          ? 'glass backdrop-blur-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group cursor-pointer">
          <div className="relative">
            <Zap className="w-8 h-8 text-neon-cyan transition-all group-hover:text-neon-pink" />
            <div className="absolute inset-0 blur-lg bg-neon-cyan opacity-0 group-hover:opacity-30 transition-opacity rounded-full"></div>
          </div>
          <span className="text-2xl font-bold text-glow">SonicX</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-text-secondary hover:text-neon-cyan transition-colors font-medium">
            Shop
          </Link>
          <a href="#" className="text-text-secondary hover:text-neon-cyan transition-colors font-medium">
            Tech Specs
          </a>
          <a href="#" className="text-text-secondary hover:text-neon-cyan transition-colors font-medium">
            Community
          </a>
          <a href="#" className="text-text-secondary hover:text-neon-cyan transition-colors font-medium">
            Support
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          {/* Cart Icon */}
          <Link
            to="/cart"
            className="relative group"
          >
            <div className="relative p-3 glass-hover rounded-lg transition-smooth">
              <ShoppingCart className="w-5 h-5 text-neon-cyan" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-neon-pink text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center glow-pulse">
                  {cartCount}
                </span>
              )}
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-3 glass-hover rounded-lg transition-smooth"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-neon-cyan" />
            ) : (
              <Menu className="w-5 h-5 text-neon-cyan" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass border-t border-glow">
          <div className="max-w-7xl mx-auto px-6 py-4 space-y-4">
            <Link to="/" className="block text-text-secondary hover:text-neon-cyan transition-colors font-medium py-2">
              Shop
            </Link>
            <a href="#" className="block text-text-secondary hover:text-neon-cyan transition-colors font-medium py-2">
              Tech Specs
            </a>
            <a href="#" className="block text-text-secondary hover:text-neon-cyan transition-colors font-medium py-2">
              Community
            </a>
            <a href="#" className="block text-text-secondary hover:text-neon-cyan transition-colors font-medium py-2">
              Support
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
