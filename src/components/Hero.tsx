import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[80vh] flex flex-col justify-between pt-16 pb-12 px-6 sm:px-12 md:px-16 overflow-hidden bg-just-black">
      {/* Decorative Blob 1 (Top Left behind header/title) */}
      <div className="absolute top-[10%] left-[5%] w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-pink to-lipstick-pink opacity-25 blur-[90px] pointer-events-none z-0 animate-blob-bounce" />
      
      {/* Decorative Blob 2 (Bottom Right) */}
      <div className="absolute bottom-[10%] right-[10%] w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-blue to-lilac opacity-20 blur-[120px] pointer-events-none z-0 animate-blob-bounce-reverse" />

      {/* Main Hero Container */}
      <div className="relative z-10 my-auto w-full select-none cursor-default flex flex-col">
        {/* Massive Typographic Headline */}
        <div className="relative flex flex-col items-start leading-[0.9] tracking-display">
          
          {/* Overlapping Floral Star Shape (Floating near "Animate") */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: 45 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[-30px] left-[35%] sm:left-[30%] lg:left-[28%] w-16 h-16 sm:w-24 sm:h-24 pointer-events-none z-20"
          >
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full animate-spin" style={{ animationDuration: '20s' }}>
              <path 
                d="M50 0C53 25 75 47 100 50C75 53 53 75 50 100C47 75 25 53 0 50C25 47 47 25 50 0Z" 
                fill="url(#floralGrad)" 
              />
              <defs>
                <linearGradient id="floralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff8709" />
                  <stop offset="50%" stopColor="#fec5fb" />
                  <stop offset="100%" stopColor="#0ae448" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] sm:text-[14vw] md:text-[13vw] lg:text-[12vw] font-semibold text-surface-cream"
          >
            Animate
          </motion.h1>

          <div className="relative flex items-center w-full">
            <motion.h1 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="text-[12vw] sm:text-[14vw] md:text-[13vw] lg:text-[12vw] font-semibold text-surface-cream"
            >
              anything
            </motion.h1>

            {/* Overlapping Purple Helix / Wave SVG (Floating under/behind "anything") */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="absolute right-[5%] sm:right-[15%] lg:right-[20%] bottom-[-10px] w-24 h-12 sm:w-44 sm:h-20 pointer-events-none z-0"
            >
              <svg viewBox="0 0 200 80" fill="none" className="w-full h-full">
                <path 
                  d="M10 40 Q 35 10, 60 40 T 110 40 T 160 40 T 210 40" 
                  stroke="url(#helixGrad)" 
                  strokeWidth="16" 
                  strokeLinecap="round" 
                  fill="none" 
                  className="animate-pulse"
                />
                <defs>
                  <linearGradient id="helixGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#9d95ff" />
                    <stop offset="100%" stopColor="#f100cb" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Action Controls / HUD Annotation Row */}
        <div className="mt-16 sm:mt-24 md:mt-32 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-t border-surface-25 pt-8">
          {/* Eyebrow Brackets Description */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-body-sm sm:text-body text-surface-cream font-normal max-w-md"
          >
            <span className="text-surface-50 font-mono mr-2">&#123;</span>
            <span>GSAP — A wildly robust JavaScript animation library built for professionals</span>
            <span className="text-surface-50 font-mono ml-2">&#125;</span>
          </motion.div>

          {/* Outlined Explore Link */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <a 
              href="https://gsap.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-transparent border border-surface-cream text-surface-cream px-8 py-4.5 rounded-buttons text-[18px] font-semibold leading-[1.05] hover:bg-surface-cream hover:text-just-black transition-colors duration-500 shadow-md cursor-pointer"
            >
              <span>Get GSAP</span>
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
