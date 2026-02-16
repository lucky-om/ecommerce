import React, { useState } from 'react';
import { Play, Volume2 } from 'lucide-react';
import '../styles/globals.css';

const HeroSection = () => {
  const [selectedColor, setSelectedColor] = useState('cyan');

  const colors = [
    { name: 'cyan', hex: '#00d9ff', class: 'bg-neon-cyan' },
    { name: 'pink', hex: '#ff006e', class: 'bg-neon-pink' },
    { name: 'purple', hex: '#8b5cf6', class: 'bg-neon-purple' },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8 z-10">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full w-fit">
              <span className={`w-2 h-2 rounded-full ${colors.find(c => c.name === selectedColor)?.class}`}></span>
              <span className="text-sm text-text-secondary font-medium">NOW AVAILABLE</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-bold text-text-primary leading-tight">
                Next-Gen
                <span className={`block text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple`}>
                  Sound
                </span>
              </h1>
              <p className="text-lg text-text-secondary max-w-md leading-relaxed">
                Experience audio at the speed of light. Immersive 3D soundscapes meet cutting-edge technology in our flagship headphones.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg font-bold text-bg-primary overflow-hidden transition-all hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  Explore Now
                </span>
              </button>
              <button className="px-8 py-4 glass glass-hover rounded-lg font-bold text-text-primary border border-border-glow transition-all">
                Watch Demo
              </button>
            </div>

            {/* Color Picker */}
            <div className="space-y-4 pt-8">
              <p className="text-sm text-text-tertiary font-medium">Select Your Color</p>
              <div className="flex gap-3">
                {colors.map(color => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-12 h-12 rounded-lg transition-all transform hover:scale-110 ${
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
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border-dark">
              <div>
                <p className="text-3xl font-bold text-neon-cyan">50ms</p>
                <p className="text-sm text-text-tertiary">Latency</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-neon-cyan">120h</p>
                <p className="text-sm text-text-tertiary">Battery Life</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-neon-cyan">99.9%</p>
                <p className="text-sm text-text-tertiary">Pure Sound</p>
              </div>
            </div>
          </div>

          {/* Right Side - 3D Visual */}
          <div className="relative h-96 lg:h-screen lg:max-h-96 flex items-center justify-center">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Floating orbs */}
              <div className="absolute top-10 right-20 w-64 h-64 bg-neon-cyan opacity-10 rounded-full filter blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 left-10 w-80 h-80 bg-neon-purple opacity-10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Headphone Image Placeholder */}
            <div className="relative z-10">
              {/* Glass Card */}
              <div className="glass rounded-2xl p-8 backdrop-blur-xl border border-border-glow relative group">
                {/* Glow Effect */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${colors.find(c => c.name === selectedColor)?.hex}40 0%, transparent 70%)`,
                  }}
                ></div>

                {/* Main Headphone Image */}
                <div className="relative w-80 h-80 flex items-center justify-center">
                  {/* Placeholder for 3D Model or High-Quality Image */}
                  <div
                    className="float"
                    style={{
                      fontSize: '150px',
                      filter: `drop-shadow(0 0 30px ${colors.find(c => c.name === selectedColor)?.hex}80)`,
                    }}
                  >
                    🎧
                  </div>
                </div>

                {/* Audio Wave Animation */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1">
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
              <div className="absolute -bottom-6 -right-6 glass rounded-lg p-4 backdrop-blur-xl border border-border-glow">
                <div className="flex items-center gap-2">
                  <Volume2 className="w-5 h-5 text-neon-cyan" />
                  <span className="text-sm font-bold text-text-primary">Pro Max Edition</span>
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
