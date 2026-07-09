import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-studio-bg border-t border-studio-beige-accent/40 py-12 md:py-16 relative overflow-hidden">
      <div className="noise-overlay" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand details */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-editorial font-bold text-studio-dark tracking-tight">
            Pixel's <span className="text-studio-gold font-light">&</span> Portfolio's
          </h4>
          <p className="text-xs text-studio-muted mt-1.5 font-sans italic">
            "Turning Pixels Into Opportunities."
          </p>
        </div>

        {/* Legal & copyright info */}
        <div className="text-center md:text-right text-sm font-mono text-studio-muted">
          <p>© {currentYear} Pixel's & Portfolio's. All rights reserved.</p>
          <p className="mt-1 text-xs text-studio-beige-accent font-semibold tracking-widest uppercase">
            Crafted with Design Excellence
          </p>
        </div>

      </div>
    </footer>
  );
};
