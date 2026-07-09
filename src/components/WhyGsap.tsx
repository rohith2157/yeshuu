import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const WhyGsap: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative w-full py-24 md:py-36 bg-just-black overflow-hidden border-t border-surface-25 px-6 sm:px-12 md:px-16">
      
      {/* 3D background shapes */}
      <div className="absolute top-[30%] right-[10%] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[#0ae448]/10 to-[#abff84]/5 blur-[70px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Eyebrow Annotation */}
        <div className="mb-10 text-left">
          <span className="text-body-sm font-mono text-surface-cream">
            <span className="text-surface-50">&#123;</span> Why GSAP® <span className="text-surface-50">&#125;</span>
          </span>
        </div>

        {/* Large Typography Statement */}
        <div className="max-w-5xl text-left mb-24 relative">
          <h2 className="text-subheading sm:text-heading-sm md:text-heading font-semibold text-surface-cream leading-[1.15] tracking-[-0.015em] text-pretty">
            GSAP allows you to{' '}
            <span className="relative inline-block text-shockingly-green font-bold group cursor-default">
              effortlessly
              {/* Rotating Star/Flower shape above "effortlessly" */}
              <motion.span 
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-30px] right-[-30px] w-10 h-10 pointer-events-none opacity-80"
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-pink">
                  <path 
                    d="M12 0L14 8L22 10L14 12L12 20L10 12L2 10L10 8L12 0Z" 
                    fill="currentColor" 
                  />
                </svg>
              </motion.span>
            </span>{' '}
            animate anything JS can touch. Delivering silky-smooth performance and unmatched support so you can focus on the storytelling.
          </h2>
        </div>

        {/* Interactive Banners Showcase */}
        <div 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-full py-16 bg-off-black rounded-lg border border-surface-25 px-6 md:px-12 overflow-hidden flex flex-col items-center justify-center gap-8 shadow-2xl"
        >
          {/* Background Ambient Lights */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(254,197,251,0.06),transparent_50%)] pointer-events-none" />

          {/* Row 1 Banners */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 z-10 w-full">
            <motion.div
              animate={{ rotate: isHovered ? -1 : 0, scale: isHovered ? 1.05 : 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="px-8 py-4 bg-pink text-just-black rounded-full text-xl sm:text-2xl font-bold uppercase tracking-tight shadow-lg"
            >
              Animate Anything
            </motion.div>

            <motion.div
              animate={{ rotate: isHovered ? 2 : 0, scale: isHovered ? 1.05 : 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.05 }}
              className="px-8 py-4 bg-orangey text-just-black rounded-full text-xl sm:text-2xl font-bold uppercase tracking-tight shadow-lg"
            >
              That's right, Anything
            </motion.div>
          </div>

          {/* Descriptive Center Paragraph */}
          <div className="max-w-2xl text-center my-6 z-10">
            <p className="text-body text-surface-50 font-normal leading-relaxed text-pretty">
              Whether you're animating UI, SVG or creating immersive WebGL experiences, GSAP has your back.
            </p>
          </div>

          {/* Row 2 Banners */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 z-10 w-full text-xl sm:text-2xl font-semibold text-surface-cream">
            <span>curves</span>
            
            <motion.div
              animate={{ y: isHovered ? -2 : 0, scale: isHovered ? 1.04 : 1 }}
              className="px-6 py-3 bg-pink text-just-black rounded-full font-bold uppercase tracking-tight shadow-md"
            >
              Choreograph
            </motion.div>

            {/* Overlapping Pawn/Keyhole shape */}
            <div className="relative w-8 h-8 flex items-center justify-center text-lilac">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <circle cx="12" cy="7" r="4" />
                <path d="M12 11c-3.3 0-6 2.7-6 6v2h12v-2c0-3.3-2.7-6-6-6z" />
              </svg>
            </div>

            <motion.div
              animate={{ y: isHovered ? 3 : 0, scale: isHovered ? 1.04 : 1 }}
              className="px-6 py-3 bg-shockingly-green text-just-black rounded-full font-bold uppercase tracking-tight shadow-md"
            >
              animation
            </motion.div>

            <motion.div
              animate={{ y: isHovered ? -3 : 0, scale: isHovered ? 1.04 : 1 }}
              className="px-6 py-3 bg-orangey text-just-black rounded-full font-bold uppercase tracking-tight shadow-md"
            >
              sequences
            </motion.div>

            <span>in</span>
          </div>

          {/* Floating Abstract 3D SVG Illustrations inside the banner box */}
          <motion.div 
            animate={{ 
              y: isHovered ? [0, -12, 0] : 0,
              rotate: isHovered ? 15 : 0 
            }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute left-[5%] bottom-[10%] w-16 h-16 pointer-events-none opacity-40 md:opacity-60 z-0"
          >
            {/* 3D Clover Shape (Pink) */}
            <svg viewBox="0 0 100 100" fill="url(#pinkCloverGrad)" className="w-full h-full">
              <path d="M50 30 C30 30 30 50 50 50 C30 50 30 70 50 70 C70 70 70 50 50 50 C70 50 70 30 50 30 Z" />
              <defs>
                <linearGradient id="pinkCloverGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#fec5fb" />
                  <stop offset="100%" stopColor="#f100cb" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          <motion.div 
            animate={{ 
              y: isHovered ? [0, 15, 0] : 0,
              rotate: isHovered ? -25 : 0 
            }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute right-[5%] top-[10%] w-20 h-20 pointer-events-none opacity-40 md:opacity-60 z-0"
          >
            {/* 3D Torus Donut Shape (Blue) */}
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
              <circle cx="50" cy="50" r="30" stroke="url(#blueTorusGrad)" strokeWidth="15" />
              <defs>
                <linearGradient id="blueTorusGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#00bae2" />
                  <stop offset="100%" stopColor="#9d95ff" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
