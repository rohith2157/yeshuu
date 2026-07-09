import React, { useRef, useState, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from "@react-three/fiber";
import GrainyGradient from '@/components/ui/gradient-shader-card';
import { 
  Palette, 
  Zap, 
  Smartphone, 
  Search, 
  Flame, 
  IndianRupee, 
  Code, 
  UserCheck 
} from 'lucide-react';
import { cn } from "@/lib/utils";

interface BentoItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  spanClass: string;
}

const bentoItems: BentoItem[] = [
  {
    id: 'modern-design',
    title: 'Modern Design',
    description: 'Aesthetic visual layouts built with extreme font hierarchies, generous tracking, and elegant grid alignments matching editorial styles.',
    icon: <Palette size={24} />,
    spanClass: 'lg:col-span-2'
  },
  {
    id: 'fast-delivery',
    title: 'Fast Delivery',
    description: 'Launch-ready websites created within days through streamlined development pipelines.',
    icon: <Zap size={24} />,
    spanClass: 'lg:col-span-1'
  },
  {
    id: 'mobile-first',
    title: 'Mobile First',
    description: 'Perfect responsive grids rendering gracefully on phone, tablet, and wide desktop structures.',
    icon: <Smartphone size={24} />,
    spanClass: 'lg:col-span-1'
  },
  {
    id: 'seo-friendly',
    title: 'SEO Friendly',
    description: 'Pre-rendered headings and custom tags optimized for ultra-fast loading speed and Google ranking.',
    icon: <Search size={24} />,
    spanClass: 'lg:col-span-1'
  },
  {
    id: 'premium-motion',
    title: 'Premium Motion',
    description: 'Expensive-feeling Framer Motion interactions, morphing shared layout transitions, and parallax layers designed to captivate visitors.',
    icon: <Flame size={24} />,
    spanClass: 'lg:col-span-2'
  },
  {
    id: 'affordable-pricing',
    title: 'Affordable Pricing',
    description: 'Bespoke agency quality execution priced reasonably for students and professionals.',
    icon: <IndianRupee size={24} />,
    spanClass: 'lg:col-span-1'
  },
  {
    id: 'source-code',
    title: 'Source Code Included',
    description: 'Full GitHub repository code ownership allowing you to host, tweak, or expand your portfolio.',
    icon: <Code size={24} />,
    spanClass: 'lg:col-span-2'
  },
  {
    id: 'personal-branding',
    title: 'Personal Branding Focus',
    description: 'Tailored content layouts designed specifically around your individual career objectives and professional story.',
    icon: <UserCheck size={24} />,
    spanClass: 'lg:col-span-2'
  }
];

// Interactive Shader Bento Card
const BentoCard: React.FC<{ item: BentoItem; index: number }> = ({ item, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Ripple State
  const [ripples, setRipples] = useState<{ id: number, x: number, y: number, startTime: number }[]>([]);
  const [currentTime, setCurrentTime] = useState(0);
  const rippleIdRef = useRef(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleTimeUpdate = (time: number) => {
    setCurrentTime(time);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = {
      id: rippleIdRef.current++,
      x,
      y,
      startTime: currentTime,
    };

    setRipples(prev => [...prev, newRipple]);

    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 2000);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ scale: 1.02 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.05, 
        ease: [0.16, 1, 0.3, 1],
        scale: { type: "spring", stiffness: 300, damping: 25, mass: 0.5 } 
      }}
      className={cn(
        "relative p-8 flex flex-col justify-between transition-all duration-500 shadow-sm group select-none overflow-hidden cursor-pointer rounded-3xl",
        "border border-foreground/10 bg-background hover:shadow-2xl hover:shadow-purple-500/10",
        item.spanClass
      )}
    >
      {/* 3D Shader Background Effect - Only visible on hover */}
      <div 
        className={cn(
          "absolute inset-0 z-0 transition-opacity duration-700 ease-out",
          isHovered ? "opacity-100" : "opacity-0"
        )}
      >
        <Suspense fallback={null}>
          <Canvas camera={{ position: [0, 0, 1] }} gl={{ preserveDrawingBuffer: true, antialias: false }}>
            <GrainyGradient ripples={ripples} onTimeUpdate={handleTimeUpdate} />
          </Canvas>
        </Suspense>
      </div>

      {/* Dark overlay to ensure text readability over bright shader colors */}
      <div 
        className={cn(
          "absolute inset-0 z-0 bg-black/40 transition-opacity duration-500",
          isHovered ? "opacity-100" : "opacity-0"
        )} 
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full pointer-events-none">
        <div>
          {/* Dynamic Icon */}
          <div className={cn(
            "p-4 border w-fit mb-8 rounded-xl transition-all duration-500 shadow-sm",
            isHovered ? "bg-white/10 border-white/20 text-white backdrop-blur-md" : "bg-foreground/5 border-foreground/10 text-foreground"
          )}>
            {item.icon}
          </div>
          
          {/* Title */}
          <h3 className={cn(
            "text-2xl md:text-3xl font-black font-editorial uppercase tracking-tighter mb-4 transition-colors duration-500",
            isHovered ? "text-white drop-shadow-md" : "text-foreground"
          )}>
            {item.title}
          </h3>
        </div>

        {/* Description */}
        <p className={cn(
          "text-sm md:text-base leading-relaxed font-sans transition-colors duration-500 font-medium text-pretty",
          isHovered ? "text-white/90" : "text-muted-foreground"
        )}>
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-24 md:py-36 bg-muted/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-foreground/10 pb-12 mb-20">
          <div className="lg:col-span-8">
            <span className="text-sm uppercase tracking-widest font-bold text-studio-gold block mb-4">
              Studio Values
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground font-editorial uppercase mt-2 leading-none drop-shadow-sm">
              Capabilities <br />& Assets
            </h2>
          </div>
          <div className="lg:col-span-4 flex items-end">
            <p className="text-sm md:text-base text-muted-foreground font-sans leading-relaxed font-medium">
              Every website is built custom to maximize speed, optimize metadata structures, and integrate fluid interactive animations.
            </p>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[320px]">
          {bentoItems.map((item, index) => {
            return (
              <BentoCard key={item.id} item={item} index={index} />
            );
          })}
        </div>
      </div>
    </section>
  );
};
