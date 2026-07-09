import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Play, ExternalLink } from 'lucide-react';

interface ShowcaseItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  videoUrl?: string;
  link: string;
}

const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: 'showreel-2024',
    title: 'GSAP Showreel 2024',
    subtitle: 'Watch Previous Showreels',
    image: '/cyber-port.png', // Fallback display thumbnail
    link: 'https://gsap.com/community/showcase'
  },
  {
    id: 'prisma-exhibit',
    title: 'Prisma Portfolio Design',
    subtitle: 'Minimal Typography Showcase',
    image: '/prisma-port.png',
    link: 'https://prisma-portfolio-nine.vercel.app/'
  },
  {
    id: 'lithos-exhibit',
    title: 'Lithos Brand Experience',
    subtitle: 'Asymmetric Architecture Layouts',
    image: '/lithos-port.png',
    link: 'https://lithos-port.vercel.app/'
  }
];

export const Showcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % SHOWCASE_ITEMS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + SHOWCASE_ITEMS.length) % SHOWCASE_ITEMS.length);
  };

  const activeItem = SHOWCASE_ITEMS[activeIndex];

  return (
    <section className="relative w-full py-24 md:py-36 bg-just-black overflow-hidden px-6 sm:px-12 md:px-16 border-t border-surface-25">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow / Bracket header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-left">
            <span className="text-body-sm font-mono text-surface-cream block mb-6">
              <span className="text-surface-50">&#123;</span> Showcase <span className="text-surface-50">&#125;</span>
            </span>
            <h2 className="text-heading font-semibold text-surface-cream tracking-tight uppercase leading-[1]">
              Exhibition
            </h2>
          </div>
          
          {/* Arrow navigation buttons on the right */}
          <div className="flex items-center gap-4">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-surface-cream flex items-center justify-center text-surface-cream hover:bg-surface-cream hover:text-just-black transition-colors cursor-pointer"
              aria-label="Previous exhibit"
            >
              <ArrowLeft size={18} />
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-surface-cream flex items-center justify-center text-surface-cream hover:bg-surface-cream hover:text-just-black transition-colors cursor-pointer"
              aria-label="Next exhibit"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Display Active Card Takeover */}
        <div className="relative w-full aspect-video md:aspect-[21/9] bg-off-black border border-surface-25 rounded-lg overflow-hidden group shadow-2xl flex flex-col justify-end">
          
          {/* Background image display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.6, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full z-0"
            >
              <img 
                src={activeItem.image} 
                alt={activeItem.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-just-black via-transparent to-transparent opacity-85" />
            </motion.div>
          </AnimatePresence>

          {/* Central Play Trigger for showreel look-and-feel */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="w-20 h-20 rounded-full bg-surface-cream text-just-black flex items-center justify-center shadow-2xl opacity-90 pointer-events-auto cursor-pointer transition-opacity group-hover:opacity-100"
            >
              <Play size={28} className="fill-just-black ml-1" />
            </motion.div>
          </div>

          {/* Card Overlay Text Details */}
          <div className="relative z-10 p-8 sm:p-12 w-full flex flex-col md:flex-row md:items-end justify-between gap-6 pointer-events-none select-none">
            <div className="text-left">
              <h3 className="text-subheading sm:text-heading-sm font-semibold text-surface-cream uppercase leading-[1.1] mb-2 tracking-tight">
                {activeItem.title}
              </h3>
              <p className="text-body-sm text-surface-50 font-normal">
                {activeItem.subtitle}
              </p>
            </div>
            
            <div className="pointer-events-auto">
              <a 
                href={activeItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-transparent border border-surface-cream text-surface-cream px-6 py-3 rounded-buttons text-caption font-semibold leading-[1.05] hover:bg-surface-cream hover:text-just-black transition-colors duration-500 shadow-md cursor-pointer"
              >
                <span>Visit Project</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Explore All Link Row */}
        <div className="mt-12 flex justify-center">
          <a 
            href="https://gsap.com/community/showcase"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-transparent border border-surface-cream text-surface-cream px-8 py-4.5 rounded-buttons text-body-sm font-semibold leading-[1.05] hover:bg-surface-cream hover:text-just-black transition-colors duration-500 shadow-md cursor-pointer"
          >
            <span>Explore All Showcases</span>
            <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};
