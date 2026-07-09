import React from 'react';
import { motion, useMotionValue, useTransform, type Variants } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

interface HeroSceneProps {
  onExploreClick: () => void;
}

export const HeroScene: React.FC<HeroSceneProps> = ({ onExploreClick }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  // Motion values for interactive 3D parallax/tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Map mouse movement from center coordinates to slight tilt degrees
  const rotateX = useTransform(mouseY, [-300, 300], [12, -12]);
  const rotateY = useTransform(mouseX, [-300, 300], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Animation Variants for uniform, premium editorial reveal
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemLeftVariants: Variants = {
    hidden: { 
      opacity: 0, 
      x: -120,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'tween',
        ease: [0.16, 1, 0.3, 1], // Fluid ease
        duration: 1.4
      }
    }
  };

  const itemRightVariants: Variants = {
    hidden: { 
      opacity: 0, 
      x: 120,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'tween',
        ease: [0.16, 1, 0.3, 1], // Fluid ease
        duration: 1.4
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-[75vh] h-[75vh] md:h-[80vh] flex flex-col justify-between pt-28 pb-10 md:pt-32 px-6 sm:px-12 md:px-16 z-10 bg-mesh-gradient overflow-hidden"
      style={{ perspective: 1200 }}
    >
      {/* Background Grid Mesh (Subtle static grid) */}
      <div className="absolute inset-0 grid-mesh opacity-[0.04] pointer-events-none z-0" />

      {/* Top Editorial Details Header */}
      <motion.div 
        variants={itemLeftVariants}
        className="relative z-10 flex items-start justify-between w-full text-xs sm:text-sm font-mono tracking-widest text-studio-muted uppercase"
      >
        <div className="flex flex-col gap-1">
          <span>[ CREATIVE DEVELOPMENT ]</span>
          <span>EST. 2026 / MUMBAI, IN</span>
        </div>
        
        <div className="hidden md:flex flex-col items-end gap-1">
          <span>PORTFOLIO DESIGN AGENCY</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-studio-gold animate-pulse" />
            STATION ACTIVE
          </span>
        </div>
      </motion.div>

      {/* Center Grouped Typography Headline + Description + CTA + Animated HUD sculpture */}
      <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center w-full z-10">
        
        {/* Left Column: Headline, Subtitle, CTA */}
        <div className="lg:col-span-7 flex flex-col justify-center items-start select-none cursor-default">
          {/* Headline - Line 1 */}
          <div className="overflow-hidden py-1 w-full">
            <motion.h1
              variants={itemLeftVariants}
              className="text-[9vw] sm:text-[7.5vw] md:text-[6vw] lg:text-[5.5vw] font-black tracking-tighter leading-[0.95] text-studio-dark font-editorial uppercase origin-left"
            >
              PIXEL'S
            </motion.h1>
          </div>

          {/* Headline - Line 2 */}
          <div className="overflow-hidden py-1 w-full">
            <motion.h1
              variants={itemLeftVariants}
              className="text-[8vw] sm:text-[6.5vw] md:text-[5vw] lg:text-[4.5vw] font-light tracking-tighter leading-[0.95] text-studio-muted font-editorial uppercase mt-1 sm:mt-2 origin-left flex items-center"
            >
              <span className="text-studio-gold font-serif italic font-bold mr-2 sm:mr-4">&amp;</span>PORTFOLIO'S
            </motion.h1>
          </div>

          {/* Subtitle / Paragraph */}
          <div className="overflow-hidden py-1 max-w-lg mt-4 sm:mt-6">
            <motion.p
              variants={itemLeftVariants}
              className="text-sm sm:text-base text-studio-muted font-sans text-left leading-relaxed"
            >
              We engineer award-winning, motion-first portfolios that reject templates and dictate the standards of modern personal branding.
            </motion.p>
          </div>

          {/* Grouped Enter Experience Button */}
          <div className="overflow-hidden py-2 mt-6 sm:mt-8">
            <motion.button
              variants={itemLeftVariants}
              onClick={onExploreClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-4 bg-studio-dark text-studio-white px-8 py-5 text-sm font-bold uppercase tracking-widest hover:bg-studio-gold hover:text-studio-white transition-colors duration-500 shadow-premium border border-studio-dark hover:border-studio-gold cursor-pointer rounded-sm"
            >
              <span>Enter Experience</span>
              <ArrowDownRight size={14} className="group-hover:rotate-[-45deg] transition-transform duration-500 text-studio-gold" />
            </motion.button>
          </div>
        </div>

        {/* Right Column: Animated HUD Depth Globe (Visible on lg screens) */}
        <div className="lg:col-span-5 hidden lg:flex items-center justify-center relative min-h-[380px] h-full" style={{ perspective: 1200 }}>
          {/* Interactive Mouse-Tracking Wrapper */}
          <motion.div
            variants={itemRightVariants}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className="relative w-[340px] h-[340px] flex items-center justify-center select-none cursor-pointer"
          >
            {/* Spinning Circular SVG Text Path (Outer bounds) */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
              className="absolute inset-0 w-full h-full flex items-center justify-center opacity-40 pointer-events-none"
            >
              <svg className="w-full h-full" viewBox="0 0 300 300">
                <defs>
                  <path
                    id="circlePath"
                    d="M 150, 150 m -115, 0 a 115,115 0 1,1 230,0 a 115,115 0 1,1 -230,0"
                  />
                </defs>
                <text className="fill-studio-muted font-mono text-[10px] uppercase tracking-widest font-semibold">
                  <textPath href="#circlePath">
                    • DEPTH GLOBE VISUALIZATION • SPHERICAL COORDINATES • PIXEL'S &amp; PORTFOLIO'S •
                  </textPath>
                </text>
              </svg>
            </motion.div>

            {/* Bounding Outer Gimbal Ring */}
            <div 
              style={{ transform: 'rotateX(20deg) rotateY(-15deg)', transformStyle: 'preserve-3d' }}
              className="absolute w-[280px] h-[280px] border border-studio-navy/10 rounded-full flex items-center justify-center animate-pulse"
            >
              {/* Outer gimbal axis indicator */}
              <div className="absolute w-[300px] h-[1px] bg-gradient-to-r from-transparent via-studio-gold/25 to-transparent" />
              <div className="absolute h-[300px] w-[1px] bg-gradient-to-b from-transparent via-studio-gold/25 to-transparent" />
            </div>

            {/* Interactive Gyroscopic Outer Ring A (Tilted) */}
            <motion.div
              animate={{ 
                rotateZ: isHovered ? 360 : 0,
                scale: isHovered ? 1.08 : 1
              }}
              style={{ 
                transform: 'rotateX(60deg) rotateY(30deg)', 
                transformStyle: 'preserve-3d' 
              }}
              transition={{ 
                rotateZ: { duration: 12, ease: 'linear', repeat: Infinity },
                scale: { duration: 0.5, ease: 'easeOut' }
              }}
              className={`absolute w-[280px] h-[280px] border rounded-full transition-colors duration-500 ${
                isHovered 
                  ? 'border-studio-gold/50 shadow-[0_0_15px_rgba(184,156,101,0.3)]' 
                  : 'border-studio-navy/10'
              }`}
            >
              {/* A tiny satellite dot on Ring A */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-studio-gold rounded-full" />
            </motion.div>

            {/* Interactive Gyroscopic Outer Ring B (Counter-Tilted) */}
            <motion.div
              animate={{ 
                rotateZ: isHovered ? -360 : 0,
                scale: isHovered ? 1.12 : 1
              }}
              style={{ 
                transform: 'rotateX(-45deg) rotateY(45deg)', 
                transformStyle: 'preserve-3d' 
              }}
              transition={{ 
                rotateZ: { duration: 16, ease: 'linear', repeat: Infinity },
                scale: { duration: 0.5, ease: 'easeOut' }
              }}
              className={`absolute w-[300px] h-[300px] border border-dashed rounded-full transition-colors duration-500 ${
                isHovered 
                  ? 'border-studio-gold/40 shadow-[0_0_10px_rgba(184,156,101,0.2)]' 
                  : 'border-studio-navy/5'
              }`}
            >
              {/* A tiny satellite dot on Ring B */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-studio-navy/60 rounded-full" />
            </motion.div>

            {/* NEW: Interactive Horizontal Depth Rings */}
            <motion.div
              animate={{ 
                rotateZ: isHovered ? 360 : 0,
                scale: isHovered ? 1.15 : 1,
                rotateX: isHovered ? 75 : 85
              }}
              style={{ 
                transformStyle: 'preserve-3d' 
              }}
              transition={{ 
                rotateZ: { duration: 20, ease: 'linear', repeat: Infinity },
                scale: { duration: 0.8, ease: 'easeOut' },
                rotateX: { duration: 0.8, ease: 'easeOut' }
              }}
              className={`absolute w-[320px] h-[320px] border-[1.5px] rounded-full transition-colors duration-500 ${
                isHovered 
                  ? 'border-studio-gold/50 shadow-[inset_0_0_20px_rgba(184,156,101,0.2),0_0_20px_rgba(184,156,101,0.3)]' 
                  : 'border-studio-navy/20'
              }`}
            />
            
            <motion.div
              animate={{ 
                rotateZ: isHovered ? -360 : 0,
                scale: isHovered ? 1.05 : 0.95,
                rotateX: isHovered ? 75 : 85,
                translateZ: isHovered ? 20 : 10
              }}
              style={{ 
                transformStyle: 'preserve-3d' 
              }}
              transition={{ 
                rotateZ: { duration: 25, ease: 'linear', repeat: Infinity },
                scale: { duration: 0.8, ease: 'easeOut' },
                rotateX: { duration: 0.8, ease: 'easeOut' },
                translateZ: { duration: 0.8, ease: 'easeOut' }
              }}
              className={`absolute w-[340px] h-[340px] border-[1px] border-dashed rounded-full transition-colors duration-500 ${
                isHovered 
                  ? 'border-studio-gold/40 shadow-[0_0_15px_rgba(184,156,101,0.2)]' 
                  : 'border-studio-navy/10'
              }`}
            />
            
            <motion.div
              animate={{ 
                rotateZ: isHovered ? 360 : 0,
                scale: isHovered ? 1.25 : 1.05,
                rotateX: isHovered ? 75 : 85,
                translateZ: isHovered ? -20 : -10
              }}
              style={{ 
                transformStyle: 'preserve-3d' 
              }}
              transition={{ 
                rotateZ: { duration: 30, ease: 'linear', repeat: Infinity },
                scale: { duration: 0.8, ease: 'easeOut' },
                rotateX: { duration: 0.8, ease: 'easeOut' },
                translateZ: { duration: 0.8, ease: 'easeOut' }
              }}
              className={`absolute w-[290px] h-[290px] border-[1px] rounded-full transition-colors duration-500 ${
                isHovered 
                  ? 'border-studio-gold/30 shadow-[0_0_25px_rgba(184,156,101,0.25)]' 
                  : 'border-studio-navy/5'
              }`}
            />

            {/* Continuous Spinning 3D Globe */}
            <motion.div
              animate={{ rotateY: 360 }}
              transition={{ duration: 24, ease: 'linear', repeat: Infinity }}
              style={{ transformStyle: 'preserve-3d' }}
              className="absolute w-[240px] h-[240px] flex items-center justify-center"
            >
              {/* Vertical Polar Axis */}
              <div 
                style={{ transform: 'translateZ(0px)' }}
                className="absolute w-[1.5px] h-[260px] bg-gradient-to-b from-transparent via-studio-gold/50 to-transparent" 
              />

              {/* Longitude Ellipses (Vertical slices) */}
              <div style={{ transform: 'rotateY(0deg)', transformStyle: 'preserve-3d' }} className="absolute w-full h-full border border-studio-gold/15 rounded-full" />
              <div style={{ transform: 'rotateY(30deg)', transformStyle: 'preserve-3d' }} className="absolute w-full h-full border border-studio-gold/15 rounded-full" />
              <div style={{ transform: 'rotateY(60deg)', transformStyle: 'preserve-3d' }} className="absolute w-full h-full border border-studio-gold/15 rounded-full" />
              <div style={{ transform: 'rotateY(90deg)', transformStyle: 'preserve-3d' }} className="absolute w-full h-full border border-studio-gold/15 rounded-full" />
              <div style={{ transform: 'rotateY(120deg)', transformStyle: 'preserve-3d' }} className="absolute w-full h-full border border-studio-gold/15 rounded-full" />
              <div style={{ transform: 'rotateY(150deg)', transformStyle: 'preserve-3d' }} className="absolute w-full h-full border border-studio-gold/15 rounded-full" />

              {/* Latitude Rings (Horizontal slices) - Now Interactive */}
              <motion.div 
                animate={{ rotateZ: isHovered ? 180 : 0, scale: isHovered ? 1.05 : 1 }}
                transition={{ rotateZ: { duration: 20, repeat: Infinity, ease: 'linear' }, scale: { duration: 0.5 } }}
                style={{ transform: 'rotateX(90deg) translateZ(0px)', transformStyle: 'preserve-3d' }} 
                className={`absolute w-[240px] h-[240px] border rounded-full transition-colors duration-500 ${isHovered ? 'border-studio-gold/40 shadow-[0_0_15px_rgba(184,156,101,0.2)]' : 'border-studio-navy/15'}`} 
              />
              <motion.div 
                animate={{ rotateZ: isHovered ? -180 : 0, scale: isHovered ? 1.05 : 1 }}
                transition={{ rotateZ: { duration: 25, repeat: Infinity, ease: 'linear' }, scale: { duration: 0.5 } }}
                style={{ transform: 'rotateX(90deg) translateZ(40px)', transformStyle: 'preserve-3d' }} 
                className={`absolute w-[226px] h-[226px] border border-dashed rounded-full transition-colors duration-500 ${isHovered ? 'border-studio-gold/30 shadow-[0_0_10px_rgba(184,156,101,0.2)]' : 'border-studio-gold/15'}`} 
              />
              <motion.div 
                animate={{ rotateZ: isHovered ? 180 : 0, scale: isHovered ? 1.05 : 1 }}
                transition={{ rotateZ: { duration: 25, repeat: Infinity, ease: 'linear' }, scale: { duration: 0.5 } }}
                style={{ transform: 'rotateX(90deg) translateZ(-40px)', transformStyle: 'preserve-3d' }} 
                className={`absolute w-[226px] h-[226px] border border-dashed rounded-full transition-colors duration-500 ${isHovered ? 'border-studio-gold/30 shadow-[0_0_10px_rgba(184,156,101,0.2)]' : 'border-studio-gold/15'}`} 
              />
              <motion.div 
                animate={{ rotateZ: isHovered ? -180 : 0, scale: isHovered ? 1.05 : 1 }}
                transition={{ rotateZ: { duration: 30, repeat: Infinity, ease: 'linear' }, scale: { duration: 0.5 } }}
                style={{ transform: 'rotateX(90deg) translateZ(80px)', transformStyle: 'preserve-3d' }} 
                className={`absolute w-[180px] h-[180px] border rounded-full transition-colors duration-500 ${isHovered ? 'border-studio-gold/20 shadow-[0_0_8px_rgba(184,156,101,0.15)]' : 'border-studio-navy/10'}`} 
              />
              <motion.div 
                animate={{ rotateZ: isHovered ? 180 : 0, scale: isHovered ? 1.05 : 1 }}
                transition={{ rotateZ: { duration: 30, repeat: Infinity, ease: 'linear' }, scale: { duration: 0.5 } }}
                style={{ transform: 'rotateX(90deg) translateZ(-80px)', transformStyle: 'preserve-3d' }} 
                className={`absolute w-[180px] h-[180px] border rounded-full transition-colors duration-500 ${isHovered ? 'border-studio-gold/20 shadow-[0_0_8px_rgba(184,156,101,0.15)]' : 'border-studio-navy/10'}`} 
              />

              {/* Interactive Laser Scanner Ring (Active on Hover or Continuous) */}
              <motion.div
                animate={{ 
                  translateY: [-110, 110, -110],
                  scale: [0.55, 1, 0.55], // fits sphere radius 120px
                  opacity: isHovered ? [0.3, 0.9, 0.3] : [0.15, 0.5, 0.15]
                }}
                transition={{ 
                  duration: isHovered ? 4 : 7, 
                  ease: 'easeInOut', 
                  repeat: Infinity 
                }}
                style={{ 
                  transformStyle: 'preserve-3d',
                  rotateX: 90
                }}
                className={`absolute w-[240px] h-[240px] border-2 rounded-full pointer-events-none transition-colors duration-500 ${
                  isHovered ? 'border-studio-gold shadow-[0_0_15px_rgba(184,156,101,0.4)]' : 'border-studio-gold/30'
                }`}
              />

              {/* Active Connection Nodes (3D Placed Points on the Sphere Surface) */}
              {/* Node 1: Mumbai Node (Matches EST. 2026 / MUMBAI, IN in HUD) */}
              <motion.div 
                style={{ transform: 'rotateY(72deg) rotateX(19deg) translateZ(120px)' }}
                className="absolute w-2.5 h-2.5 bg-studio-gold rounded-full flex items-center justify-center"
              >
                <div className="absolute w-full h-full bg-studio-gold rounded-full animate-ping opacity-75" />
              </motion.div>

              {/* Node 2: London Node */}
              <div 
                style={{ transform: 'rotateY(0deg) rotateX(51deg) translateZ(120px)' }}
                className="absolute w-1.5 h-1.5 bg-studio-navy rounded-full"
              />

              {/* Node 3: New York Node */}
              <div 
                style={{ transform: 'rotateY(-74deg) rotateX(40deg) translateZ(120px)' }}
                className="absolute w-1.5 h-1.5 bg-studio-navy rounded-full"
              />

              {/* Node 4: Tokyo Node */}
              <div 
                style={{ transform: 'rotateY(140deg) rotateX(35deg) translateZ(120px)' }}
                className="absolute w-1.5 h-1.5 bg-studio-gold/60 rounded-full"
              />
            </motion.div>

            {/* Glowing Center Core */}
            <motion.div
              animate={{ 
                scale: isHovered ? [1, 1.25, 1] : [1, 1.12, 1], 
                opacity: isHovered ? [0.8, 1, 0.8] : [0.7, 0.9, 0.7] 
              }}
              transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity }}
              style={{ transform: 'translateZ(20px)' }}
              className="absolute w-[36px] h-[36px] bg-gradient-to-br from-studio-gold to-[#c7a45e] rounded-full shadow-[0_0_40px_rgba(184,156,101,0.45)] flex items-center justify-center"
            >
              <div className="w-2.5 h-2.5 bg-studio-white rounded-full animate-pulse" />
            </motion.div>

            {/* Tech Corner HUD Readouts */}
            <div className="absolute top-4 left-4 text-[10px] font-mono text-studio-muted/50 uppercase tracking-widest flex flex-col gap-0.5">
              <span>PROJ: ORTHOGRAPHIC</span>
              <span>GRID: SPHERICAL_DEPTH</span>
            </div>
            <div className="absolute top-4 right-4 text-[10px] font-mono text-studio-muted/50 uppercase tracking-widest flex flex-col items-end gap-0.5">
              <span>SCALE: 1.0x_SPHERE</span>
              <span>VEL: 0.05_RAD/S</span>
            </div>
            <div className="absolute bottom-4 left-4 text-[10px] font-mono text-studio-gold/80 uppercase tracking-widest flex flex-col gap-0.5 animate-pulse">
              <span>COORD: 19.076°N / 72.877°E</span>
              <span>NODE: MUMBAI_ACTIVE</span>
            </div>
            <div className="absolute bottom-4 right-4 text-[10px] font-mono text-studio-muted/50 uppercase tracking-widest flex flex-col items-end gap-0.5">
              <span>MATRIX: RENDER_GPU</span>
              <span>V_T: depth_gl_v1</span>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Bottom Editorial Details */}
      <motion.div 
        variants={itemLeftVariants}
        className="relative z-10 flex items-center justify-between w-full border-t border-studio-stone/20 pt-4 text-xs sm:text-sm font-mono tracking-widest text-studio-muted"
      >
        <span>01 / 04 // INTRO SECTION</span>
        <span className="hidden sm:inline">↓ SCROLL TO EXPLORE</span>
      </motion.div>
    </motion.div>
  );
};
