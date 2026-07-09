import React from 'react';
import { motion } from 'framer-motion';

const BRANDS = [
  { name: 'Spotify', logo: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-24 h-8 opacity-40 hover:opacity-100 hover:text-surface-cream transition-all duration-300">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.565.387-.86.207-2.377-1.454-5.37-1.783-8.894-.982-.336.076-.67-.135-.746-.472-.076-.336.135-.67.472-.746 3.854-.88 7.15-.502 9.822 1.134.295.18.387.565.207.86zm1.226-2.723c-.226.367-.707.487-1.074.26-2.72-1.672-6.87-2.157-10.076-1.183-.412.125-.845-.107-.97-.52-.125-.413.108-.846.52-.971 3.666-1.112 8.243-.574 11.34 1.332.368.226.488.707.26 1.074zm.106-2.833C14.484 8.766 8.813 8.577 5.51 9.578c-.507.154-1.04-.136-1.194-.643-.154-.508.137-1.04.644-1.194 3.79-1.15 10.038-.934 14.004 1.42.456.27.607.86.337 1.317-.27.457-.86.608-1.317.338z"/>
    </svg>
  )},
  { name: 'Google', logo: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-24 h-8 opacity-40 hover:opacity-100 hover:text-surface-cream transition-all duration-300">
      <path d="M12.24 10.285V13.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.859-3.579-7.859-7.989 0-4.41 3.529-7.989 7.859-7.989 2.46 0 4.108 1.016 5.048 1.918l2.453-2.355C18.176 2.308 15.426 1 12.24 1 5.922 1 1 5.922 1 12s4.922 11 11.24 11c6.599 0 11.003-4.636 11.003-11.193 0-.754-.082-1.333-.18-1.782h-10.82z"/>
    </svg>
  )},
  { name: 'Microsoft', logo: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-24 h-8 opacity-40 hover:opacity-100 hover:text-surface-cream transition-all duration-300">
      <path d="M0 0h11.5v11.5H0zm12.5 0H24v11.5H12.5zM0 12.5h11.5V24H0zm12.5 0H24V24H12.5z"/>
    </svg>
  )},
  { name: 'YouTube', logo: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-24 h-8 opacity-40 hover:opacity-100 hover:text-surface-cream transition-all duration-300">
      <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.002 3.002 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )},
  { name: 'Amazon', logo: (
    <span className="text-xl font-bold font-sans italic opacity-40 hover:opacity-100 hover:text-surface-cream transition-all duration-300">amazon</span>
  )},
  { name: 'Coca-Cola', logo: (
    <span className="text-xl font-bold font-serif italic opacity-40 hover:opacity-100 hover:text-surface-cream transition-all duration-300">Coca-Cola</span>
  )},
  { name: 'SAMSUNG', logo: (
    <span className="text-xl font-black font-sans tracking-widest opacity-40 hover:opacity-100 hover:text-surface-cream transition-all duration-300">SAMSUNG</span>
  )},
  { name: 'Intel', logo: (
    <span className="text-xl font-bold font-sans tracking-tighter opacity-40 hover:opacity-100 hover:text-surface-cream transition-all duration-300">intel.</span>
  )},
  { name: 'Netlify', logo: (
    <span className="text-xl font-bold font-sans opacity-40 hover:opacity-100 hover:text-surface-cream transition-all duration-300">netlify</span>
  )}
];

export const BrandsMarquee: React.FC = () => {
  // Duplicate list to ensure seamless looping marquee
  const duplicateBrands = [...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <section className="relative w-full py-16 bg-just-black overflow-hidden px-6 sm:px-12 md:px-16 border-t border-surface-25">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow eyebrow eyebrow */}
        <div className="mb-10 text-left">
          <span className="text-body-sm font-mono text-surface-cream">
            <span className="text-surface-50">&#123;</span> Brands using GSAP® <span className="text-surface-50">&#125;</span>
          </span>
        </div>

        {/* Scrolling Container */}
        <div className="w-full relative overflow-hidden flex items-center py-6 select-none">
          <motion.div 
            animate={{ x: ['0%', '-50%'] }}
            transition={{ 
              ease: "linear", 
              duration: 25, 
              repeat: Infinity 
            }}
            className="flex items-center gap-16 md:gap-24 text-surface-cream whitespace-nowrap min-w-max"
          >
            {duplicateBrands.map((brand, idx) => (
              <div 
                key={idx}
                className="flex items-center justify-center min-w-[100px]"
              >
                {brand.logo}
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};
