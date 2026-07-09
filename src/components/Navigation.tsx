import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Tools', href: 'https://gsap.com/docs/v3/Plugins' },
    { label: 'Showcase', href: 'https://gsap.com/community/showcase' },
    { label: 'Community', href: 'https://gsap.com/community' },
    { label: 'Learn GSAP', href: 'https://gsap.com/resources' },
    { label: 'Docs', href: 'https://gsap.com/docs/v3' },
    { label: 'Demos', href: 'https://gsap.com/demos' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 select-none ${
        scrolled || isOpen
          ? 'bg-just-black/90 backdrop-blur-md border-b border-surface-25 py-4'
          : 'bg-transparent py-6'
      }`}
      style={{ top: scrolled ? '0px' : '40px' }} // Position below announcement banner initially
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
        
        {/* Brand Name / Logo on the Left */}
        <div className="flex items-center">
          <a 
            href="https://gsap.com" 
            className="text-2xl font-black tracking-tight text-surface-cream uppercase hover:text-shockingly-green transition-colors"
          >
            GSAP
          </a>
        </div>

        {/* Desktop Nav HUD Links */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-body-sm font-semibold text-surface-50 hover:text-surface-cream transition-colors duration-300 relative group py-1"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#fffce1] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Right CTA / Auth buttons */}
        <div className="hidden sm:flex items-center gap-6">
          <a 
            href="https://gsap.com/login" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-body-sm font-semibold text-surface-cream hover:text-shockingly-green transition-colors"
          >
            Login/Create Account
          </a>
          
          <a
            href="https://gsap.com/pricing"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-border-btn px-6 py-3 text-caption font-semibold leading-[1.05] cursor-pointer"
          >
            Get GSAP
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-surface-cream hover:text-shockingly-green transition-colors cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-0 top-full bg-just-black border-b border-surface-25 shadow-2xl z-30 py-6 px-6 md:hidden flex flex-col gap-4 overflow-hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="text-body-sm font-semibold text-surface-50 hover:text-surface-cream text-left py-2 border-b border-surface-25/50"
              >
                {link.label}
              </a>
            ))}
            
            <a 
              href="https://gsap.com/login" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="text-body-sm font-semibold text-surface-cream hover:text-shockingly-green text-left py-2 border-b border-surface-25/50"
            >
              Login/Create Account
            </a>

            <a
              href="https://gsap.com/pricing"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="gradient-border-btn w-full text-center py-4 text-caption font-semibold leading-[1.05] mt-4"
            >
              Get GSAP
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
