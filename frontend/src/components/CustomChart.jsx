import React from 'react';

const CustomChart = ({ data, title, type = 'bar' }) => {
  if (!data || data.length === 0) {
    return <div className="text-text-tertiary">No data available</div>;
  }

  const maxValue = Math.max(...data.map(d => d.value));
  const chartHeight = 200;
  const barWidth = 100 / data.length - 2;

  if (type === 'bar') {
    return (
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-text-primary">{title}</h3>
        <svg width="100%" height={chartHeight + 40} className="w-full">
          {/* Grid lines */}
          {[0, 25, 50, 75, 100].map((percent) => (
            <line
              key={`grid-${percent}`}
              x1="40"
              y1={chartHeight - (chartHeight * percent) / 100 + 10}
              x2="100%"
              y2={chartHeight - (chartHeight * percent) / 100 + 10}
              stroke="rgba(0, 217, 255, 0.1)"
              strokeWidth="1"
              strokeDasharray="4"
            />
          ))}

          {/* Bars */}
          {data.map((item, idx) => {
            const barHeight = (item.value / maxValue) * chartHeight;
            const xPos = 40 + (idx / data.length) * (100 - 50) + '%';
            return (
              <g key={`bar-${idx}`}>
                {/* Bar */}
                <rect
                  x={`${40 + (idx / data.length) * 60}%`}
                  y={chartHeight - barHeight + 10}
                  width={`${barWidth}%`}
                  height={barHeight}
                  fill="url(#barGradient)"
                  rx="4"
                  className="hover:opacity-80 transition-opacity cursor-pointer"
                />
                {/* Label */}
                <text
                  x={`${40 + (idx / data.length) * 60 + barWidth / 2}%`}
                  y={chartHeight + 30}
                  textAnchor="middle"
                  className="text-xs fill-text-tertiary"
                >
                  {item.label}
                </text>
                {/* Value */}
                <text
                  x={`${40 + (idx / data.length) * 60 + barWidth / 2}%`}
                  y={chartHeight - barHeight}
                  textAnchor="middle"
                  dy="-5"
                  className="text-xs font-bold fill-neon-cyan"
                >
                  {item.value}
                </text>
              </g>
            );
          })}

          {/* Gradient */}
          <defs>
            <linearGradient id="barGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00d9ff" stopOpacity="1" />
              <stop offset="100%" stopColor="#00d9ff" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  if (type === 'line') {
    const points = data.map((item, idx) => {
      const x = 40 + (idx / (data.length - 1 || 1)) * 60;
      const y = 200 - (item.value / maxValue) * 180 + 10;
      return { x, y, ...item };
    });

    const pathData = points.map((p, idx) => `${idx === 0 ? 'M' : 'L'} ${p.x}% ${p.y}`).join(' ');

    return (
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-text-primary">{title}</h3>
        <svg width="100%" height="250" className="w-full">
          {/* Grid lines */}
          {[0, 25, 50, 75, 100].map((percent) => (
            <line
              key={`grid-${percent}`}
              x1="40"
              y1={200 - (200 * percent) / 100 + 10}
              x2="100%"
              y2={200 - (200 * percent) / 100 + 10}
              stroke="rgba(0, 217, 255, 0.1)"
              strokeWidth="1"
              strokeDasharray="4"
            />
          ))}

          {/* Line chart */}
          <path
            d={pathData}
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Area under line */}
          <path
            d={`${pathData} L ${points[points.length - 1].x}% 210 L ${points[0].x}% 210 Z`}
            fill="url(#areaGradient)"
            opacity="0.1"
          />

          {/* Data points */}
          {points.map((p, idx) => (
            <g key={`point-${idx}`}>
              <circle cx={`${p.x}%`} cy={p.y} r="5" fill="#00d9ff" opacity="0.5" />
              <circle cx={`${p.x}%`} cy={p.y} r="3" fill="#00d9ff" />
              <text
                x={`${p.x}%`}
                y={p.y - 15}
                textAnchor="middle"
                className="text-xs font-bold fill-neon-cyan"
              >
                {p.value}
              </text>
              <text
                x={`${p.x}%`}
                y="230"
                textAnchor="middle"
                className="text-xs fill-text-tertiary"
              >
                {p.label}
              </text>
            </g>
          ))}

          {/* Gradients */}
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00d9ff" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ff006e" />
            </linearGradient>
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00d9ff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  return null;
};

export default CustomChart;
