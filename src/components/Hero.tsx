import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

interface HeroProps {
  onViewWorkClick: () => void;
  onGetStartedClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewWorkClick, onGetStartedClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse coordinate mapping for 3D card tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 35, stiffness: 180, mass: 0.8 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Map mouse positions to 3D rotation degrees
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-15, 15]);

  // Scroll mapping for layered parallax (foreground vs background)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scrollSpring = useSpring(scrollYProgress, { damping: 40, stiffness: 200 });

  // Map scroll progress to vertical offsets to create depth
  const textY = useTransform(scrollSpring, [0, 1], ['0px', '100px']);
  const foregroundY = useTransform(scrollSpring, [0, 1], ['0px', '-100px']);
  const rotateScroll = useTransform(scrollSpring, [0, 1], [0, 8]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalized coordinates from -0.5 to 0.5
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Split text for word-by-word reveal
  const headlineWords = "WE DESIGN PORTFOLIOS THAT OPEN DOORS.".split(" ");

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-studio-bg grid-mesh"
      style={{ perspective: 1200 }}
    >
      {/* Immersive Background System */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="noise-overlay" />
        
        {/* Morphing ambient blur blobs */}
        <div className="blob-bg bg-studio-beige-accent/35 top-[10%] left-[15%] w-[600px] h-[600px]" />
        <div className="blob-bg bg-studio-blue/15 bottom-[10%] right-[10%] w-[500px] h-[500px]" style={{ animationDelay: '-8s', animationDuration: '35s' }} />
        <div className="blob-bg bg-studio-gold/10 top-[40%] right-[30%] w-[400px] h-[400px]" style={{ animationDelay: '-16s', animationDuration: '24s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Column: Kinetic Text Reveal */}
        <motion.div 
          style={{ y: textY }}
          className="lg:col-span-6 text-left flex flex-col select-none"
        >
          {/* Subtle line indicator */}
          <div className="flex items-center gap-3 mb-6">
            <motion.span 
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="h-[1px] bg-studio-navy" 
            />
            <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-studio-navy">
              Creative Brand Engineers
            </span>
          </div>

          {/* Masked Word Reveal Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-editorial tracking-tight text-studio-dark leading-[1.0] uppercase">
            {headlineWords.map((word, i) => (
              <span key={i} className="char-mask mr-3 py-1">
                <motion.span
                  initial={{ y: '100%', filter: 'blur(4px)' }}
                  animate={{ y: 0, filter: 'blur(0px)' }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.15 + i * 0.05, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Smooth subheadline reveal */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-base md:text-lg text-studio-muted leading-relaxed font-sans max-w-lg"
          >
            We transform professional identities into world-class digital exhibition pieces, balancing typography, generous whitespace, and luxury motion design.
          </motion.p>

          {/* Interactive CTAs */}
          <div className="mt-10 flex flex-wrap gap-4">
            <motion.button
              onClick={onViewWorkClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-8 py-4 bg-studio-navy text-studio-white text-xs font-bold tracking-widest uppercase rounded-none border border-studio-navy cursor-pointer overflow-hidden group shadow-md"
            >
              <span className="relative z-10 group-hover:text-studio-dark transition-colors duration-300">View Exhibition</span>
              <span className="absolute inset-0 bg-studio-gold transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[0.16, 1, 0.3, 1]" />
            </motion.button>

            <motion.button
              onClick={onGetStartedClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-transparent text-studio-dark border border-studio-beige-accent/80 hover:border-studio-dark text-xs font-bold tracking-widest uppercase rounded-none transition-colors duration-300"
            >
              Get Started
            </motion.button>
          </div>

          {/* Floating Tagline Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="mt-14 text-xs font-mono text-studio-muted border-l border-studio-gold pl-4 max-w-xs"
          >
            "Professional personal branding, crafted with design excellence."
          </motion.div>
        </motion.div>

        {/* Right Column: 3D Layered Spatial stack */}
        <motion.div 
          style={{ 
            y: foregroundY,
            rotateZ: rotateScroll,
            rotateX: rotateX,
            rotateY: rotateY,
            transformStyle: "preserve-3d"
          }}
          className="lg:col-span-6 relative h-[450px] sm:h-[600px] w-full flex items-center justify-center cursor-pointer will-change-transform"
        >
          {/* Main depth container */}
          <div className="relative w-full max-w-[380px] aspect-[4/5] flex items-center justify-center">
            
            {/* Ambient Background wireframe circle (depth background) */}
            <div 
              style={{ transform: "translateZ(-80px)" }}
              className="absolute w-72 h-72 rounded-full border border-studio-beige-accent/50 pointer-events-none z-0" 
            />

            {/* CARD 1: Cyber Portfolio (Deep background layer - Z-Index 1) */}
            <motion.div
              style={{ 
                transform: "translateZ(-40px) rotate(-10deg) translateY(-40px)",
                transformStyle: "preserve-3d"
              }}
              whileHover={{ transform: "translateZ(0px) rotate(-6deg) translateY(-50px)" }}
              className="absolute w-[80%] aspect-[1.4/1] bg-studio-dark p-2 border border-studio-navy/40 shadow-xl overflow-hidden"
              onClick={onViewWorkClick}
            >
              <div className="w-full h-full bg-zinc-950 overflow-hidden relative group">
                <img
                  src="/cyber-port.png"
                  alt="Cyber Portfolio Mockup"
                  className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute top-2 left-2 px-2 py-0.5 bg-black/80 text-[8px] text-zinc-500 font-mono">
                  DEV_UNIT_01
                </div>
              </div>
            </motion.div>

            {/* CARD 2: Lithos (Middle layer - Z-Index 2) */}
            <motion.div
              style={{ 
                transform: "translateZ(20px) rotate(6deg) translateX(30px) translateY(10px)",
                transformStyle: "preserve-3d"
              }}
              whileHover={{ transform: "translateZ(60px) rotate(3deg) translateX(40px) translateY(0px)" }}
              className="absolute w-[82%] aspect-[1.3/1] bg-studio-white p-2 border border-studio-beige-accent shadow-2xl overflow-hidden"
              onClick={onViewWorkClick}
            >
              <div className="w-full h-full bg-studio-beige overflow-hidden relative group">
                <img
                  src="/lithos-port.png"
                  alt="Lithos Mockup"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute bottom-2 left-2 px-2.5 py-0.5 bg-studio-white border border-studio-beige-accent text-[8px] text-studio-dark font-bold uppercase tracking-wider">
                  LITHOS_CATALOGUE
                </div>
              </div>
            </motion.div>

            {/* CARD 3: Prisma Portfolio (Foreground layer - Z-Index 3) */}
            <motion.div
              style={{ 
                transform: "translateZ(80px) rotate(-2deg) translateY(60px) translateX(-20px)",
                transformStyle: "preserve-3d"
              }}
              whileHover={{ transform: "translateZ(120px) rotate(-4deg) translateY(50px) translateX(-30px)" }}
              className="absolute w-[88%] aspect-[1.5/1] bg-[#FAF8F5] p-3 border border-studio-beige-accent/80 shadow-2xl overflow-hidden"
              onClick={onViewWorkClick}
            >
              <div className="w-full h-full bg-studio-white overflow-hidden relative group">
                <img
                  src="/prisma-port.png"
                  alt="Prisma Portfolio Mockup"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute top-3 right-3 px-2 py-0.5 bg-studio-gold text-studio-white text-[8px] tracking-[0.2em] font-bold uppercase">
                  PRISMA_STUDIO
                </div>
              </div>
            </motion.div>

            {/* Ambient Floating Particle (Extreme foreground) */}
            <div 
              style={{ transform: "translateZ(140px)" }} 
              className="absolute -bottom-6 -right-6 w-3 h-3 bg-studio-gold rounded-full blur-[1px] pointer-events-none" 
            />

          </div>
        </motion.div>
      </div>
    </section>
  );
};
