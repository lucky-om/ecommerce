import React, { useState } from 'react';
import { Play, Volume2 } from 'lucide-react';
import '../styles/globals.css';

const HeroSection = () => {
  const [selectedColor, setSelectedColor] = useState('cyan');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const colors = [
    { name: 'cyan', hex: '#00d9ff', class: 'bg-neon-cyan' },
    { name: 'pink', hex: '#ff006e', class: 'bg-neon-pink' },
    { name: 'purple', hex: '#8b5cf6', class: 'bg-neon-purple' },
  ];

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary pt-20 overflow-hidden" onMouseMove={handleMouseMove}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6 sm:space-y-8 z-10">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full w-fit slide-in">
              <span className={`w-2 h-2 rounded-full ${colors.find(c => c.name === selectedColor)?.class}`}></span>
              <span className="text-sm text-text-secondary font-medium">NOW AVAILABLE</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4 slide-in" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-text-primary leading-tight">
                Next-Gen
                <span className={`block text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple`}>
                  Sound
                </span>
              </h1>
              <p className="text-base sm:text-lg text-text-secondary max-w-md leading-relaxed">
                Experience audio at the speed of light. Immersive 3D soundscapes meet cutting-edge technology.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 slide-in" style={{ animationDelay: '0.2s' }}>
              <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg font-bold text-bg-primary overflow-hidden transition-all hover:scale-105 active:scale-95">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  <span className="hidden sm:inline">Explore Now</span>
                  <span className="sm:hidden">Explore</span>
                </span>
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-4 glass glass-hover rounded-lg font-bold text-text-primary border border-border-glow transition-all hover:scale-105 active:scale-95">
                Watch Demo
              </button>
            </div>

            {/* Color Picker */}
            <div className="space-y-4 pt-6 sm:pt-8 slide-in" style={{ animationDelay: '0.3s' }}>
              <p className="text-sm text-text-tertiary font-medium">Select Your Color</p>
              <div className="flex gap-3">
                {colors.map(color => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg transition-all transform hover:scale-110 ${
                      selectedColor === color.name
                        ? `${color.class} ring-2 ring-offset-2 ring-offset-bg-secondary`
                        : 'opacity-50 hover:opacity-75'
                    }`}
                    style={{
                      boxShadow: selectedColor === color.name ? `0 0 20px ${color.hex}` : 'none'
                    }}
                  ></button>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-border-dark slide-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-center sm:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-neon-cyan">50ms</p>
                <p className="text-xs sm:text-sm text-text-tertiary">Latency</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-neon-cyan">120h</p>
                <p className="text-xs sm:text-sm text-text-tertiary">Battery Life</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-neon-cyan">99.9%</p>
                <p className="text-xs sm:text-sm text-text-tertiary">Pure Sound</p>
              </div>
            </div>
          </div>

          {/* Right Side - 3D Visual */}
          <div className="relative h-64 sm:h-96 lg:h-screen lg:max-h-96 flex items-center justify-center">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Floating orbs */}
              <div className="absolute top-10 right-20 w-40 sm:w-64 h-40 sm:h-64 bg-neon-cyan opacity-10 rounded-full filter blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 left-10 w-48 sm:w-80 h-48 sm:h-80 bg-neon-purple opacity-10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Headphone Image Container */}
            <div className="relative z-10 fade-in" style={{ animationDelay: '0.5s' }}>
              {/* Glass Card */}
              <div className="glass rounded-2xl p-4 sm:p-8 backdrop-blur-xl border border-border-glow relative group">
                {/* Glow Effect */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, ${colors.find(c => c.name === selectedColor)?.hex}40 0%, transparent 70%)`,
                  }}
                ></div>

                {/* Main Headphone Image */}
                <div className="relative w-40 h-40 sm:w-80 sm:h-80 flex items-center justify-center">
                  {/* 3D Headphone SVG Mockup */}
                  <svg viewBox="0 0 200 200" className="w-full h-full" style={{
                    filter: `drop-shadow(0 0 30px ${colors.find(c => c.name === selectedColor)?.hex}80)`,
                  }}>
                    {/* Left Cup */}
                    <ellipse cx="60" cy="80" rx="35" ry="40" fill="none" stroke={colors.find(c => c.name === selectedColor)?.hex} strokeWidth="2"/>
                    {/* Right Cup */}
                    <ellipse cx="140" cy="80" rx="35" ry="40" fill="none" stroke={colors.find(c => c.name === selectedColor)?.hex} strokeWidth="2"/>
                    {/* Headband */}
                    <path d="M 60 50 Q 100 30 140 50" fill="none" stroke={colors.find(c => c.name === selectedColor)?.hex} strokeWidth="2"/>
                    {/* Connector Bars */}
                    <line x1="60" y1="50" x2="60" y2="40" stroke={colors.find(c => c.name === selectedColor)?.hex} strokeWidth="2"/>
                    <line x1="140" y1="50" x2="140" y2="40" stroke={colors.find(c => c.name === selectedColor)?.hex} strokeWidth="2"/>
                    {/* Glow circles */}
                    <circle cx="60" cy="80" r="25" fill="none" stroke={colors.find(c => c.name === selectedColor)?.hex} strokeWidth="1" opacity="0.3"/>
                    <circle cx="140" cy="80" r="25" fill="none" stroke={colors.find(c => c.name === selectedColor)?.hex} strokeWidth="1" opacity="0.3"/>
                  </svg>
                </div>

                {/* Audio Wave Animation */}
                <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-1 bg-neon-cyan rounded-full`}
                      style={{
                        height: `${10 + Math.sin(i) * 10}px`,
                        animation: `wave 0.6s ease-in-out infinite`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Product Badge */}
              <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 glass rounded-lg p-2 sm:p-4 backdrop-blur-xl border border-border-glow">
                <div className="flex items-center gap-1 sm:gap-2">
                  <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-neon-cyan" />
                  <span className="text-xs sm:text-sm font-bold text-text-primary">Pro Max</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-text-tertiary text-sm mb-2">SCROLL TO REVEAL</p>
        <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-neon-cyan rounded-full animate-bounce"></div>
        </div>
      </div>

      <style>{`
        @keyframes wave {
          0%, 100% { height: 10px; }
          50% { height: 30px; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
