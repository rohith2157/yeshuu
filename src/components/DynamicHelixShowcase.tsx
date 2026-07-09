import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { projects, type Project } from '../data/projects';
import { cn } from "@/lib/utils";

interface DynamicHelixShowcaseProps {
  onSelectProject: (project: Project) => void;
}

const PROJECT_THEMES = [
  { color: 'text-emerald-500', border: 'border-emerald-500/40', bgGradient: 'from-emerald-500/10 via-emerald-500/5 to-transparent', bgSolid: 'bg-emerald-500' },
  { color: 'text-rose-500', border: 'border-rose-500/40', bgGradient: 'from-rose-500/10 via-rose-500/5 to-transparent', bgSolid: 'bg-rose-500' },
  { color: 'text-amber-500', border: 'border-amber-500/40', bgGradient: 'from-amber-500/10 via-amber-500/5 to-transparent', bgSolid: 'bg-amber-500' },
  { color: 'text-indigo-500', border: 'border-indigo-500/40', bgGradient: 'from-indigo-500/10 via-indigo-500/5 to-transparent', bgSolid: 'bg-indigo-500' },
];

export const DynamicHelixShowcase: React.FC<DynamicHelixShowcaseProps> = ({ onSelectProject }) => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const activeProject = projects[activeProjectIndex];
  const activeTheme = PROJECT_THEMES[activeProjectIndex % PROJECT_THEMES.length];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveProjectIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleNext = () => {
    setActiveProjectIndex((prev) => (prev + 1) % projects.length);
    setIsAutoPlaying(false);
  };

  const handlePrev = () => {
    setActiveProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setIsAutoPlaying(false);
  };

  const progressPercent = Math.round(((activeProjectIndex + 1) / projects.length) * 100);

  return (
    <section id="work" className="py-24 md:py-36 bg-background relative overflow-hidden flex flex-col justify-center">
      {/* Dynamic Animated Background */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={activeProjectIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={cn("absolute inset-0 bg-gradient-to-br pointer-events-none z-0", activeTheme.bgGradient)}
        />
      </AnimatePresence>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Massive Header */}
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest font-bold text-studio-muted mb-4 flex items-center gap-2 font-mono"
          >
            &#123; Signature Exhibition &#125;
          </motion.span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black tracking-tighter text-foreground font-editorial uppercase leading-none drop-shadow-sm"
            >
              Featured <br />Work
            </motion.h2>
            <div className="text-right font-mono text-xs text-muted-foreground flex-col gap-1 hidden md:flex">
              <span>DYNAMIC SHOWCASE SLIDER</span>
              <span className="font-bold">INDEX: 0{activeProjectIndex + 1} / 0{projects.length} • {progressPercent}%</span>
            </div>
          </div>
        </div>

        {/* HUD Interactive Tabs Navigation & Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-foreground/10 pb-6 mb-16 gap-6">
          <div className="flex flex-wrap justify-start gap-4 sm:gap-6 md:gap-8">
            {projects.map((project, idx) => {
              const isSelected = idx === activeProjectIndex;
              const theme = PROJECT_THEMES[idx % PROJECT_THEMES.length];
              return (
                <button
                  key={project.id}
                  onClick={() => {
                    setActiveProjectIndex(idx);
                    setIsAutoPlaying(false);
                  }}
                  className={cn(
                    "font-mono text-xs sm:text-sm tracking-wider transition-all duration-300 uppercase pb-3 border-b-2 cursor-pointer font-bold",
                    isSelected
                      ? `${theme.border} ${theme.color} scale-105 transform origin-bottom`
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  )}
                >
                  0{idx + 1} // {project.title.split(' ')[0]}
                </button>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2 bg-background shadow-md border border-foreground/10 rounded-full p-1">
            <button
              onClick={handlePrev}
              className="p-3 hover:bg-foreground hover:text-background transition-colors duration-300 rounded-full cursor-pointer text-foreground"
              title="Previous Project"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={cn(
                "p-3 transition-colors duration-300 rounded-full cursor-pointer text-white flex justify-center items-center",
                activeTheme.bgSolid
              )}
              title={isAutoPlaying ? "Pause Auto-scroll" : "Play Auto-scroll"}
            >
              {isAutoPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
            </button>
            <button
              onClick={handleNext}
              className="p-3 hover:bg-foreground hover:text-background transition-colors duration-300 rounded-full cursor-pointer text-foreground"
              title="Next Project"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Interactive Viewport Area */}
        <div className="relative w-full min-h-[500px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProjectIndex}
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.05, filter: 'blur(8px)' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full"
            >
              {/* Column 1: Image Parallax Card */}
              <div className="lg:col-span-7 flex justify-center w-full">
                <InteractiveCard project={activeProject} onSelect={onSelectProject} themeColor={activeTheme.bgSolid} />
              </div>

              {/* Column 2: Meta Details */}
              <div className="lg:col-span-5 flex flex-col items-start w-full">
                <span className={cn(
                  "text-xs font-mono tracking-widest font-bold uppercase mb-4 px-3 py-1 border rounded-sm",
                  activeTheme.border, activeTheme.color, "bg-background/50"
                )}>
                  {activeProject.category}
                </span>
                
                <h3 className={cn(
                  "text-4xl md:text-6xl font-black font-editorial uppercase tracking-tighter mb-6 drop-shadow-lg",
                  activeTheme.color
                )}>
                  {activeProject.title}
                </h3>

                <p className="text-sm md:text-base text-foreground/80 leading-relaxed font-sans font-medium mb-8 max-w-md text-pretty">
                  {activeProject.description}
                </p>

                {/* Tech stacks */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {activeProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={cn(
                        "text-[10px] font-mono font-bold px-3 py-1.5 uppercase tracking-wider border",
                        "border-foreground/10 text-foreground bg-foreground/[0.02]"
                      )}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onSelectProject(activeProject)}
                  className={cn(
                    "inline-flex items-center gap-4 text-white px-8 py-5 text-xs font-bold uppercase tracking-widest transition-all duration-500 shadow-xl cursor-pointer hover:scale-105 hover:shadow-2xl rounded-sm",
                    activeTheme.bgSolid
                  )}
                >
                  <span>Explore Exhibit</span>
                  <ArrowUpRight size={16} className="text-white" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dynamic HUD Progress Bar */}
        <div className="mt-16 flex flex-col items-center gap-3 max-w-md mx-auto">
          <div className="w-full h-1 bg-foreground/10 relative overflow-hidden rounded-full">
            <motion.div
              className={cn("absolute top-0 bottom-0 left-0 rounded-full", activeTheme.bgSolid)}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
            Progress Indicator
          </span>
        </div>

      </div>
    </section>
  );
};

/* Interactive 3D Parallax Tilt Card Component */
interface InteractiveCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  themeColor: string;
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({ project, onSelect, themeColor }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothTiltX = useSpring(tiltX, springConfig);
  const smoothTiltY = useSpring(tiltY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    tiltX.set(y / 15);
    tiltY.set(-x / 15);
  };

  const handleMouseLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      style={{
        rotateX: smoothTiltX,
        rotateY: smoothTiltY,
        transformStyle: 'preserve-3d',
        perspective: 1000
      }}
      onClick={() => onSelect(project)}
      className="relative w-full max-w-[680px] aspect-[16/10] bg-background border-4 border-transparent p-2 shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden rounded-xl group flex flex-col justify-stretch"
    >
      {/* Animated glowing border effect on hover using the theme color */}
      <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500", themeColor)} />
      <div className="absolute inset-1 bg-background z-0 rounded-lg" />

      {/* Floating particles inside card on hover */}
      {isHovered && (
        <>
          <div className={cn("absolute -top-3 -left-3 w-4 h-4 rounded-full opacity-60 animate-ping pointer-events-none z-20", themeColor)} />
          <div className={cn("absolute -bottom-4 -right-3 w-3 h-3 rounded-full opacity-50 animate-pulse pointer-events-none z-20", themeColor)} style={{ animationDuration: '3s' }} />
        </>
      )}

      <div className="relative w-full h-full overflow-hidden flex-1 rounded-lg z-10 bg-muted">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        {/* Shiny Glass Highlight Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out pointer-events-none" />
      </div>
    </motion.div>
  );
};
