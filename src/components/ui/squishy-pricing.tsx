import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export const Component = () => {
  return (
    <section className="bg-transparent px-4 py-12 w-full flex flex-col items-center">
      <div className="mx-auto flex w-fit flex-wrap justify-center gap-6">
        <PricingCard
          label="Student Pack"
          price="₹499 – ₹999"
          description="Ideal for students, freshers, and internship applicants looking to stand out."
          cta="Acquire Pack"
          background="bg-indigo-500 dark:bg-indigo-600"
          BGComponent={BGComponent1}
          features={[
            'Single Page Portfolio Structure',
            'Fluid Responsive Grid Layout',
            'Secured Contact Form Integration',
            'Typographical Skills Matrix',
            'Vite + React Build Pipeline'
          ]}
        />
        <PricingCard
          label="Professional Pack"
          price="₹799 – ₹1499"
          description="Designed for active developers, designers, and growing freelancers."
          cta="Acquire Pack"
          background="bg-purple-500 dark:bg-purple-600"
          BGComponent={BGComponent2}
          features={[
            'Multi-Section Modular Interface',
            'Framer Motion Parallax & Custom Cursor',
            'Resume Download Hook Integration',
            'Pre-rendered SEO Configurations',
            'In-Depth Project Case Studies Layout'
          ]}
        />
        <PricingCard
          label="Premium Pack"
          price="₹2000+"
          description="A cinematic, high-end digital presence for founders, leaders, and elite creators."
          cta="Acquire Pack"
          background="bg-pink-500 dark:bg-pink-600"
          BGComponent={BGComponent3}
          features={[
            '100% Custom Spatial Web Design',
            'Advanced 3D/WebGL Perspective Elements',
            'Personal Branding Consultation',
            'Headless CMS Content Deployment',
            'Priority Support & Source Delivery'
          ]}
        />
      </div>
    </section>
  );
};

interface PricingCardProps {
  label: string;
  price: string;
  description: string;
  cta: string;
  background: string;
  BGComponent: React.ComponentType;
  features: string[];
}

const defaultVariants = {
  initial: { opacity: 1, y: 0, scale: 1 },
  hover: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.4, ease: "easeInOut" as const } }
};

const hoverVariants = {
  initial: { opacity: 0, y: 20, scale: 0.95 },
  hover: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeInOut" as const, delay: 0.05 } }
};

const PricingCard: React.FC<PricingCardProps> = ({ 
  label, 
  price, 
  description, 
  cta, 
  background, 
  BGComponent,
  features
}) => {
  return (
    <motion.div
      whileHover="hover"
      initial="initial"
      transition={{ duration: 1, ease: "backInOut" }}
      variants={{ hover: { scale: 1.05 } }}
      className={`relative h-96 w-80 shrink-0 overflow-hidden rounded-xl p-8 ${background} shadow-lg hover:shadow-xl transition-shadow`}
    >
      {/* Front Face: Default info view (slides out on hover) */}
      <motion.div 
        variants={defaultVariants}
        className="absolute inset-0 z-10 p-8 flex flex-col justify-between"
      >
        <div>
          <span className="mb-3 block w-fit rounded-full bg-white/20 backdrop-blur-sm px-3 py-0.5 text-sm font-medium text-white border border-white/20">
            {label}
          </span>
          <motion.span
            initial={{ scale: 0.85 }}
            variants={{ hover: { scale: 1 } }}
            transition={{ duration: 1, ease: "backInOut" }}
            className="my-3 block origin-top-left font-mono text-4xl font-black leading-[1.2] tracking-tighter text-white"
          >
            {price}
          </motion.span>
          <p className="text-sm text-white/90 leading-relaxed font-sans mt-4">{description}</p>
        </div>
        <div className="h-10" /> {/* Spacer for CTA position */}
      </motion.div>

      {/* Back Face: Feature checklist view (slides in on hover) */}
      <motion.div
        variants={hoverVariants}
        className="absolute inset-0 z-10 p-8 flex flex-col justify-start pointer-events-none"
      >
        <span className="mb-3 block w-fit rounded-full bg-white/20 backdrop-blur-sm px-3 py-0.5 text-xs font-medium text-white border border-white/20">
          {label} Features
        </span>
        <h4 className="text-xs font-black uppercase tracking-widest text-white/70 mb-3 font-mono">
          What's Included:
        </h4>
        <ul className="space-y-3">
          {features.map((feat, i) => (
            <li key={i} className="flex items-start gap-2.5 text-xs text-white leading-tight font-medium">
              <Check size={14} className="shrink-0 text-white mt-0.5 bg-white/10 rounded-full p-[1px] border border-white/20" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Shared CTA Button */}
      <button 
        onClick={() => {
          const element = document.getElementById('contact');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className="absolute bottom-6 left-6 right-6 z-20 rounded-lg border-2 border-white bg-white py-2.5 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:text-white hover:border-white/80 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent cursor-pointer"
      >
        {cta}
      </button>
      <BGComponent />
    </motion.div>
  );
};

const BGComponent1 = () => (
  <motion.svg
    width="320"
    height="384"
    viewBox="0 0 320 384"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    variants={{ hover: { scale: 1.5 } }}
    transition={{ duration: 1, ease: "backInOut" }}
    className="absolute inset-0 z-0 pointer-events-none"
  >
    <motion.circle
      variants={{ hover: { scaleY: 0.5, y: -25 } }}
      transition={{ duration: 1, ease: "backInOut", delay: 0.2 }}
      cx="160.5"
      cy="114.5"
      r="101.5"
      fill="rgba(0, 0, 0, 0.2)"
      className="dark:fill-white/10"
    />
    <motion.ellipse
      variants={{ hover: { scaleY: 2.25, y: -25 } }}
      transition={{ duration: 1, ease: "backInOut", delay: 0.2 }}
      cx="160.5"
      cy="265.5"
      rx="101.5"
      ry="43.5"
      fill="rgba(0, 0, 0, 0.2)"
      className="dark:fill-white/10"
    />
  </motion.svg>
);

const BGComponent2 = () => (
  <motion.svg
    width="320"
    height="384"
    viewBox="0 0 320 384"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    variants={{ hover: { scale: 1.05 } }}
    transition={{ duration: 1, ease: "backInOut" }}
    className="absolute inset-0 z-0 pointer-events-none"
  >
    <motion.rect
      x="14"
      width="153"
      height="153"
      rx="15"
      fill="rgba(0, 0, 0, 0.2)"
      className="dark:fill-white/10"
      variants={{ hover: { y: 219, rotate: "90deg", scaleX: 2 } }}
      style={{ y: 12 }}
      transition={{ delay: 0.2, duration: 1, ease: "backInOut" }}
    />
    <motion.rect
      x="155"
      width="153"
      height="153"
      rx="15"
      fill="rgba(0, 0, 0, 0.2)"
      className="dark:fill-white/10"
      variants={{ hover: { y: 12, rotate: "90deg", scaleX: 2 } }}
      style={{ y: 219 }}
      transition={{ delay: 0.2, duration: 1, ease: "backInOut" }}
    />
  </motion.svg>
);

const BGComponent3 = () => (
  <motion.svg
    width="320"
    height="384"
    viewBox="0 0 320 384"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    variants={{ hover: { scale: 1.25 } }}
    transition={{ duration: 1, ease: "backInOut" }}
    className="absolute inset-0 z-0 pointer-events-none"
  >
    <motion.path
      variants={{ hover: { y: -50 } }}
      transition={{ delay: 0.3, duration: 1, ease: "backInOut" }}
      d="M148.893 157.531C154.751 151.673 164.249 151.673 170.107 157.531L267.393 254.818C273.251 260.676 273.251 270.173 267.393 276.031L218.75 324.674C186.027 357.397 132.973 357.397 100.25 324.674L51.6068 276.031C45.7489 270.173 45.7489 260.676 51.6068 254.818L148.893 157.531Z"
      fill="rgba(0, 0, 0, 0.2)"
      className="dark:fill-white/10"
    />
    <motion.path
      variants={{ hover: { y: -50 } }}
      transition={{ delay: 0.2, duration: 1, ease: "backInOut" }}
      d="M148.893 99.069C154.751 93.2111 164.249 93.2111 170.107 99.069L267.393 196.356C273.251 202.213 273.251 211.711 267.393 217.569L218.75 266.212C186.027 298.935 132.973 298.935 100.25 266.212L51.6068 217.569C45.7489 211.711 45.7489 202.213 51.6068 196.356L148.893 99.069Z"
      fill="rgba(0, 0, 0, 0.2)"
      className="dark:fill-white/10"
    />
    <motion.path
      variants={{ hover: { y: -50 } }}
      transition={{ delay: 0.1, duration: 1, ease: "backInOut" }}
      d="M148.893 40.6066C154.751 34.7487 164.249 34.7487 170.107 40.6066L267.393 137.893C273.251 143.751 273.251 153.249 267.393 159.106L218.75 207.75C186.027 240.473 132.973 240.473 100.25 207.75L51.6068 159.106C45.7489 153.249 45.7489 143.751 51.6068 137.893L148.893 40.6066Z"
      fill="rgba(0, 0, 0, 0.2)"
      className="dark:fill-white/10"
    />
  </motion.svg>
);
