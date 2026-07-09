import React from 'react';
import { motion } from 'framer-motion';
import { Component as SquishyPricing } from './ui/squishy-pricing';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 md:py-36 bg-background relative overflow-hidden flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Editorial Title */}
        <div className="mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest font-bold text-studio-muted block mb-4 font-mono"
          >
            &#123; Investment Tier &#125;
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tighter text-foreground font-editorial uppercase leading-none drop-shadow-sm"
          >
            System <br />Pricing
          </motion.h2>
        </div>

        {/* Squishy Pricing Cards Grid */}
        <SquishyPricing />
        
      </div>
    </section>
  );
};
