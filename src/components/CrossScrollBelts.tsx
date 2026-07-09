import React from 'react';
import { MarqueeAnimation } from './ui/marquee-effect';

const BELT_ITEMS = [
  'PORTFOLIO DESIGN',
  'PERSONAL BRANDING',
  'FREELANCE READY',
  'MODERN UI',
  'FRAMER MOTION',
  'DEVELOPER PORTFOLIO',
  'AI ENGINEER PORTFOLIO',
  'DESIGN SYSTEMS',
  'CREATIVE DEVELOPMENT'
];

export const CrossScrollBelts: React.FC<{ className?: string }> = ({
  className = ''
}) => {
  const marqueeString = BELT_ITEMS.join(' • ') + ' • ';

  return (
    <div
      className={`relative w-full overflow-hidden py-10 pointer-events-none z-30 flex flex-col justify-center bg-transparent ${className}`}
    >
      {/* Background glassmorphic layer that overlaps sections */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-transparent pointer-events-none" />

      {/* Rotating Marquee wrapper to create the diagonal overlapping bands */}
      <div className="w-full rotate-[-3.5deg] scale-110 flex flex-col gap-4 select-none">
        
        {/* Belt 1: Colorful Green (Slowed down to 1.5 velocity) */}
        <div className="shadow-lg">
          <MarqueeAnimation
            direction="left"
            baseVelocity={-1.5}
            className="bg-green-500 text-white py-3 md:py-4 font-editorial uppercase tracking-tight font-black"
          >
            {marqueeString}
          </MarqueeAnimation>
        </div>

        {/* Belt 2: Colorful Purple (Slowed down to 1.5 velocity) */}
        <div className="shadow-lg">
          <MarqueeAnimation
            direction="right"
            baseVelocity={-1.5}
            className="bg-purple-500 text-white py-3 md:py-4 font-editorial uppercase tracking-tight font-black"
          >
            {marqueeString}
          </MarqueeAnimation>
        </div>
      </div>
    </div>
  );
};
