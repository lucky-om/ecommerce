import React, { useState, useEffect, useRef } from 'react';
import { ShoppingCart, Menu, X, Zap, LogOut, Settings, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/globals.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-smooth ${
        scrolled
          ? 'glass backdrop-blur-lg border-b border-border-dark'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group cursor-pointer flex-shrink-0">
          <div className="relative">
            <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-neon-cyan transition-all group-hover:text-neon-pink" />
            <div className="absolute inset-0 blur-lg bg-neon-cyan opacity-0 group-hover:opacity-30 transition-opacity rounded-full"></div>
          </div>
          <span className="text-xl sm:text-2xl font-bold text-glow hidden sm:inline">SonicX</span>
          <span className="text-lg sm:hidden font-bold text-glow">SX</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link to="/" className="text-sm lg:text-base text-text-secondary hover:text-neon-cyan transition-colors font-medium">
            Shop
          </Link>
          <a href="#" className="text-sm lg:text-base text-text-secondary hover:text-neon-cyan transition-colors font-medium">
            Tech Specs
          </a>
          <a href="#" className="text-sm lg:text-base text-text-secondary hover:text-neon-cyan transition-colors font-medium">
            Community
          </a>
          <a href="#" className="text-sm lg:text-base text-text-secondary hover:text-neon-cyan transition-colors font-medium">
            Support
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Cart Icon */}
          <Link
            to="/cart"
            className="relative group flex-shrink-0"
          >
            <div className="relative p-2 sm:p-3 glass-hover rounded-lg transition-smooth">
              <ShoppingCart className="w-5 h-5 text-neon-cyan" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-neon-pink text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center glow-pulse">
                  {cartCount}
                </span>
              )}
            </div>
          </Link>

          {/* Profile Dropdown */}
          {isLoggedIn ? (
            <div className="relative hidden sm:block" ref={profileRef}>
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="p-2 sm:p-3 glass-hover rounded-lg transition-smooth hover:border-neon-cyan"
              >
                <div className="w-5 h-5 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full"></div>
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-48 glass rounded-xl border border-border-glow backdrop-blur-xl shadow-lg animate-in slide-in fade-in">
                  <div className="p-4 space-y-3">
                    <div className="flex items-center gap-3 pb-3 border-b border-border-dark">
                      <div className="w-10 h-10 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full"></div>
                      <div>
                        <p className="text-sm font-bold text-text-primary">John Doe</p>
                        <p className="text-xs text-text-tertiary">Premium Member</p>
                      </div>
                    </div>

                    <a href="#" className="flex items-center gap-2 text-sm text-text-secondary hover:text-neon-cyan transition-colors py-2">
                      <User className="w-4 h-4" />
                      My Profile
                    </a>
                    <a href="#" className="flex items-center gap-2 text-sm text-text-secondary hover:text-neon-cyan transition-colors py-2">
                      <ShoppingCart className="w-4 h-4" />
                      My Orders
                    </a>
                    <a href="#" className="flex items-center gap-2 text-sm text-text-secondary hover:text-neon-cyan transition-colors py-2">
                      <Settings className="w-4 h-4" />
                      Settings
                    </a>

                    <button
                      onClick={() => setIsLoggedIn(false)}
                      className="w-full flex items-center gap-2 text-sm text-neon-pink hover:text-neon-cyan transition-colors py-2 mt-2 pt-2 border-t border-border-dark"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="hidden sm:block px-4 py-2 text-sm font-bold text-neon-cyan hover:text-neon-pink transition-colors"
            >
              Sign In
            </Link>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 sm:p-3 glass-hover rounded-lg transition-smooth flex-shrink-0"
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
        <div className="md:hidden glass border-t border-border-glow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-2">
            <Link to="/" className="block text-text-secondary hover:text-neon-cyan transition-colors font-medium py-2 rounded-lg hover:bg-bg-tertiary px-3">
              Shop
            </Link>
            <a href="#" className="block text-text-secondary hover:text-neon-cyan transition-colors font-medium py-2 rounded-lg hover:bg-bg-tertiary px-3">
              Tech Specs
            </a>
            <a href="#" className="block text-text-secondary hover:text-neon-cyan transition-colors font-medium py-2 rounded-lg hover:bg-bg-tertiary px-3">
              Community
            </a>
            <a href="#" className="block text-text-secondary hover:text-neon-cyan transition-colors font-medium py-2 rounded-lg hover:bg-bg-tertiary px-3">
              Support
            </a>
            {!isLoggedIn && (
              <Link
                to="/login"
                className="block text-neon-cyan font-bold py-2 rounded-lg hover:bg-bg-tertiary px-3 mt-4 border-t border-border-dark pt-4"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
