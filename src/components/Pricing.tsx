import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Sparkles, Circle, CheckCircle2 } from 'lucide-react';
import { cn } from "@/lib/utils";

interface PricingPackage {
  id: string;
  num: string;
  name: string;
  price: string;
  tagline: string;
  features: string[];
  recommended?: boolean;
  colorClass: string;
  borderClass: string;
  bgGradient: string;
}

const packages: PricingPackage[] = [
  {
    id: 'student-pack',
    num: '01',
    name: 'Student Pack',
    price: '₹499 – ₹999',
    tagline: 'Ideal for students, freshers, and internship applicants looking to stand out.',
    features: [
      'Single Page Portfolio Structure',
      'Fluid Responsive Grid Layout',
      'Secured Contact Form Integration',
      'Typographical Skills Matrix',
      'Vite + React Build Pipeline'
    ],
    colorClass: 'text-blue-500',
    borderClass: 'border-blue-500/40',
    bgGradient: 'from-blue-500/10 via-blue-500/5 to-transparent'
  },
  {
    id: 'professional-pack',
    num: '02',
    name: 'Professional Pack',
    price: '₹799 – ₹1499',
    tagline: 'Designed for active developers, designers, and growing freelancers.',
    features: [
      'Multi-Section Modular Interface',
      'Framer Motion Parallax & Custom Cursor Interactions',
      'Resume Download Hook Integration',
      'Pre-rendered SEO & Meta Configurations',
      'In-Depth Project Case Studies Layout',
      'Custom Domain Mapping Support'
    ],
    recommended: true,
    colorClass: 'text-purple-500',
    borderClass: 'border-purple-500/40',
    bgGradient: 'from-purple-500/10 via-purple-500/5 to-transparent'
  },
  {
    id: 'premium-pack',
    num: '03',
    name: 'Premium Pack',
    price: '₹2000+',
    tagline: 'A cinematic, high-end digital presence for founders, leaders, and elite creators.',
    features: [
      '100% Fully Custom Spatial Web Design',
      'Advanced 3D/WebGL Perspective Elements',
      'Personal Branding Consultation Sessions',
      'Headless CMS Content Deployment',
      'Priority Support & Source Delivery',
      'Custom Animation Signature Asset'
    ],
    colorClass: 'text-amber-500',
    borderClass: 'border-amber-500/40',
    bgGradient: 'from-amber-500/10 via-amber-500/5 to-transparent'
  }
];

export const Pricing: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<string>('professional-pack');

  return (
    <section id="pricing" className="py-24 md:py-36 bg-background relative overflow-hidden flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Editorial Title */}
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-widest font-bold text-studio-gold block mb-4"
          >
            Investment Tier
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

        {/* Interactive Radio Group Layout */}
        <div className="flex flex-col gap-6">
          {packages.map((pkg) => {
            const isSelected = selectedPackage === pkg.id;

            return (
              <motion.div
                key={pkg.id}
                onClick={() => setSelectedPackage(pkg.id)}
                className={cn(
                  "relative border cursor-pointer overflow-hidden group transition-all duration-500 rounded-xl",
                  isSelected ? `border-foreground/30 shadow-2xl` : "border-foreground/10 hover:border-foreground/20 hover:bg-foreground/[0.02]"
                )}
              >
                {/* Colorful Animated Background for Selected */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isSelected ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className={cn("absolute inset-0 bg-gradient-to-r pointer-events-none z-0", pkg.bgGradient)}
                />

                <div className="relative z-10 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  
                  {/* Left Side: Radio Icon & Title */}
                  <div className="flex items-center gap-6 w-full md:w-1/2">
                    <div className="shrink-0">
                      {isSelected ? (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          <CheckCircle2 size={32} className={pkg.colorClass} />
                        </motion.div>
                      ) : (
                        <Circle size={32} className="text-muted-foreground/50 group-hover:text-muted-foreground transition-colors" />
                      )}
                    </div>
                    
                    <div className="flex flex-col">
                      <div className="flex items-center gap-3">
                        <span className={cn(
                          "text-xs font-mono font-bold transition-colors duration-300",
                          isSelected ? pkg.colorClass : "text-muted-foreground"
                        )}>
                          {pkg.num}
                        </span>
                        {pkg.recommended && (
                          <span className={cn(
                            "text-[9px] font-mono tracking-widest font-black uppercase px-2 py-0.5 rounded-sm flex items-center gap-1",
                            isSelected ? (pkg.id === 'professional-pack' ? 'bg-purple-500 text-white' : 'bg-foreground text-background') : "bg-foreground/10 text-foreground"
                          )}>
                            <Sparkles size={10} />
                            Recommended
                          </span>
                        )}
                      </div>
                      <h3 className={cn(
                        "text-2xl sm:text-3xl md:text-4xl font-black font-editorial uppercase tracking-tighter mt-1 transition-all duration-500",
                        isSelected ? pkg.colorClass : "text-foreground"
                      )}>
                        {pkg.name}
                      </h3>
                    </div>
                  </div>

                  {/* Right Side: Price */}
                  <div className="flex flex-col md:items-end w-full md:w-1/3">
                    <span className="text-xs uppercase font-mono tracking-widest font-bold text-muted-foreground mb-1">
                      System Rate
                    </span>
                    <span className={cn(
                      "text-3xl sm:text-4xl font-black font-editorial tracking-tighter uppercase leading-none transition-colors duration-500",
                      isSelected ? "text-foreground" : "text-muted-foreground"
                    )}>
                      {pkg.price}
                    </span>
                  </div>
                </div>

                {/* Expanding Details (Accordion for Selected Package) */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="relative z-10 px-6 sm:px-8 pb-8 md:pl-[5.5rem]"
                    >
                      <p className="text-sm md:text-base text-foreground/80 leading-relaxed font-sans font-medium mb-6 max-w-2xl text-pretty">
                        {pkg.tagline}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-8">
                        {pkg.features.map((feature, i) => (
                          <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + (i * 0.05) }}
                            className="flex items-start text-sm leading-normal"
                          >
                            <Check size={16} className={cn("mr-3 mt-0.5 shrink-0", pkg.colorClass)} />
                            <span className="font-sans font-medium text-foreground/90">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={cn(
                          "inline-flex items-center justify-center gap-4 px-8 py-4 font-bold tracking-widest uppercase text-sm cursor-pointer transition-colors duration-300 shadow-md rounded-md",
                          `${pkg.borderClass} bg-background/50 border hover:bg-foreground hover:text-background`
                        )}
                      >
                        <span>Acquire This Pack</span>
                        <ArrowRight size={16} className={pkg.colorClass} />
                      </motion.a>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
