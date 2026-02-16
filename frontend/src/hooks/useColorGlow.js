import { createContext, useContext, useState } from 'react';

// Create context for global color glow state
const ColorGlowContext = createContext();

export const ColorGlowProvider = ({ children }) => {
  const [selectedColor, setSelectedColor] = useState('cyan');

  const colors = {
    cyan: '#00d9ff',
    pink: '#ff006e',
    purple: '#8b5cf6',
    green: '#39ff14',
  };

  const handleColorChange = (colorName) => {
    if (colors[colorName]) {
      setSelectedColor(colorName);
      // Apply global glow effect
      applyGlowEffect(colors[colorName]);
    }
  };

  const applyGlowEffect = (color) => {
    const root = document.documentElement;
    root.style.setProperty('--glow-color', color);
    root.style.setProperty('--glow-color-rgb', hexToRgb(color));
  };

  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`;
    }
    return '0, 217, 255'; // default cyan
  };

  return (
    <ColorGlowContext.Provider value={{ selectedColor, handleColorChange, colors }}>
      {children}
    </ColorGlowContext.Provider>
  );
};

export const useColorGlow = () => {
  const context = useContext(ColorGlowContext);
  if (!context) {
    throw new Error('useColorGlow must be used within ColorGlowProvider');
  }
  return context;
};
