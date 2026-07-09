import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ToolItem {
  id: string;
  category: string;
  categoryColor: string;
  title: string;
  buttonLabel: string;
  gradientId: string;
  gradientColors: { from: string; to: string };
  svgShape: React.ReactNode;
}

const tools: ToolItem[] = [
  {
    id: 'scroll',
    category: 'Scroll',
    categoryColor: 'text-pink',
    title: 'Turn scrolling into silky-smooth storytelling.',
    buttonLabel: 'Explore Scroll',
    gradientId: 'scrollGrad',
    gradientColors: { from: '#00bae2', to: '#fec5fb' },
    svgShape: (
      <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
        {/* Soft 3D-like dome/half-torus */}
        <path 
          d="M30 140 C 30 50, 170 50, 170 140" 
          stroke="url(#scrollGrad)" 
          strokeWidth="35" 
          strokeLinecap="round"
        />
        <circle cx="100" cy="140" r="10" fill="#fffce1" className="animate-pulse" />
      </svg>
    )
  },
  {
    id: 'svg',
    category: 'SVG',
    categoryColor: 'text-orangey',
    title: 'Move, morph and much more with our SVG plugins.',
    buttonLabel: 'Explore SVG',
    gradientId: 'svgGrad',
    gradientColors: { from: '#ff8709', to: '#abff84' },
    svgShape: (
      <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
        {/* Soft 3D cone/curved cylinder */}
        <path 
          d="M40 160 L100 30 L160 160 Z" 
          fill="url(#svgGrad)" 
        />
        <ellipse cx="100" cy="160" rx="60" ry="18" fill="#ff8709" opacity="0.8" />
      </svg>
    )
  },
  {
    id: 'text',
    category: 'Text',
    categoryColor: 'text-lilac',
    title: 'Leave them lost for words with seamless text effects.',
    buttonLabel: 'Explore Text',
    gradientId: 'textGrad',
    gradientColors: { from: '#9d95ff', to: '#f100cb' },
    svgShape: (
      <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
        {/* Intersecting 3D floating letters or shapes */}
        <rect x="50" y="50" width="100" height="100" rx="20" transform="rotate(45 100 100)" fill="url(#textGrad)" />
        <circle cx="100" cy="100" r="25" fill="#fffce1" opacity="0.3" />
      </svg>
    )
  },
  {
    id: 'ui',
    category: 'UI Interactions',
    categoryColor: 'text-blue',
    title: 'Create polished, engaging and accessible interactions.',
    buttonLabel: 'Explore UI',
    gradientId: 'uiGrad',
    gradientColors: { from: '#00bae2', to: '#0ae448' },
    svgShape: (
      <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
        {/* Soft 3D-like block/grid illustration */}
        <rect x="40" y="40" width="120" height="120" rx="10" fill="url(#uiGrad)" />
        <path d="M40 80 H160 M40 120 H160 M80 40 V160 M120 40 V160" stroke="#fffce1" strokeWidth="2" opacity="0.25" />
      </svg>
    )
  }
];

export const ToolsSection: React.FC = () => {
  return (
    <section className="relative w-full py-12 md:py-24 bg-just-black overflow-hidden px-6 sm:px-12 md:px-16">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow eyebrow eyebrow */}
        <div className="mb-20 text-left">
          <span className="text-body-sm font-mono text-surface-cream">
            <span className="text-surface-50">&#123;</span> GSAP® Tools <span className="text-surface-50">&#125;</span>
          </span>
        </div>

        {/* Vertical Tool blocks */}
        <div className="flex flex-col border-t border-surface-25">
          {tools.map((tool) => (
            <div 
              key={tool.id} 
              className="border-b border-surface-25 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              
              {/* Left Column: 3D Illustration */}
              <div className="lg:col-span-5 flex justify-center lg:justify-start">
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 relative flex items-center justify-center pointer-events-auto"
                >
                  {/* Decorative Backglow */}
                  <div 
                    className="absolute inset-4 rounded-full opacity-20 blur-[50px] pointer-events-none"
                    style={{ 
                      background: `radial-gradient(circle, ${tool.gradientColors.from}, ${tool.gradientColors.to})` 
                    }}
                  />
                  
                  {/* The SVG element */}
                  <div className="w-full h-full relative z-10">
                    {tool.svgShape}
                    
                    {/* SVG Gradients definition */}
                    <svg className="absolute w-0 h-0">
                      <defs>
                        <linearGradient id={tool.gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={tool.gradientColors.from} />
                          <stop offset="100%" stopColor={tool.gradientColors.to} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Copy & Link Button */}
              <div className="lg:col-span-7 flex flex-col items-start text-left pl-0 lg:pl-12">
                
                {/* Category name with colored label */}
                <span className={`text-[19px] sm:text-[24px] font-semibold uppercase tracking-tight mb-4 ${tool.categoryColor}`}>
                  {tool.category}
                </span>

                {/* Subtitle */}
                <h3 className="text-[34px] sm:text-[44px] font-semibold text-surface-cream leading-[1.2] tracking-[-0.015em] mb-8 max-w-xl text-pretty">
                  {tool.title}
                </h3>

                {/* Outlined Explore Button */}
                <a 
                  href="https://gsap.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 bg-transparent border border-surface-cream text-surface-cream px-6 py-4 rounded-buttons text-body-sm font-semibold leading-[1.05] hover:bg-surface-cream hover:text-just-black transition-colors duration-500 shadow-md cursor-pointer"
                >
                  <span>{tool.buttonLabel}</span>
                  <ArrowRight size={16} />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
