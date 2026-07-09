import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import type { Project } from '../data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [showDetails, setShowDetails] = useState(false);

  // When a project opens, wait for the layoutId transition to finish (around 500ms) before fading in details
  useEffect(() => {
    if (!project) {
      document.body.style.overflow = 'unset';
      return;
    }

    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      setShowDetails(true);
    }, 550);
    
    return () => {
      clearTimeout(timer);
      setShowDetails(false);
    };
  }, [project]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
          
          {/* Morphing Blur Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-studio-bg/80 backdrop-blur-md z-0"
            onClick={onClose}
          />

          {/* Cinematic Container Takeover */}
          <div className="relative w-full h-full max-w-7xl max-h-[100vh] sm:max-h-[90vh] bg-studio-white/80 border-0 sm:border sm:border-studio-stone/60 overflow-y-auto z-10 shadow-premium flex flex-col md:grid md:grid-cols-12 rounded-none">

            {/* Close Trigger */}
            <motion.button
              onClick={onClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.95 }}
              className="fixed md:absolute top-6 right-6 z-40 p-3 bg-studio-dark border border-studio-dark text-studio-white hover:bg-studio-gold hover:border-studio-gold hover:text-studio-white transition-all duration-300 rounded-none cursor-pointer shadow-lg"
              aria-label="Close panel"
            >
              <X size={18} />
            </motion.button>

            <div className="md:col-span-7 relative bg-studio-beige aspect-video md:aspect-auto md:h-full min-h-[300px] sm:min-h-[450px] overflow-hidden">
              <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full relative"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-studio-dark/15 to-transparent pointer-events-none" />
              </motion.div>
            </div>

            {/* Right Column: Detailed Explanations */}
            <div className="md:col-span-5 p-8 sm:p-12 md:p-14 lg:p-16 flex flex-col justify-between h-full bg-studio-white relative overflow-hidden">
              
              <div className="flex-1 flex flex-col justify-center">
                {/* Staggered text details reveal after image snaps */}
                <AnimatePresence>
                  {showDetails && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: { staggerChildren: 0.08 }
                        }
                      }}
                      className="w-full"
                    >
                      {/* Category Label */}
                      <div className="overflow-hidden mb-2">
                        <motion.span
                          variants={{
                            hidden: { y: '100%' },
                            visible: { y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                          }}
                          className="inline-block text-[10px] font-mono uppercase tracking-[0.25em] text-studio-gold font-bold"
                        >
                          {project.category}
                        </motion.span>
                      </div>

                      {/* Heading Mask Reveal */}
                      <div className="overflow-hidden mb-6">
                        <motion.h3
                          variants={{
                            hidden: { y: '100%', filter: 'blur(3px)' },
                            visible: { y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                          }}
                          className="text-3xl sm:text-4xl lg:text-5xl font-black font-editorial tracking-tight text-studio-dark uppercase leading-none"
                        >
                          {project.title}
                        </motion.h3>
                      </div>

                      {/* Divider line */}
                      <motion.div
                        variants={{
                          hidden: { scaleX: 0 },
                          visible: { scaleX: 1, transition: { duration: 0.6 } }
                        }}
                        className="h-[2px] w-16 bg-studio-dark origin-left mb-8"
                      />

                      {/* Description Fade */}
                      <motion.p
                        variants={{
                          hidden: { opacity: 0, y: 15 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
                        }}
                        className="text-xs sm:text-sm text-studio-muted leading-relaxed font-sans mb-8"
                      >
                        {project.description}
                      </motion.p>

                      {/* Technologies Section */}
                      <div className="mb-10">
                        <motion.h4
                          variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { duration: 0.5 } }
                          }}
                          className="text-[9px] uppercase tracking-[0.2em] font-bold text-studio-dark mb-4"
                        >
                          System Stack
                        </motion.h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <motion.span
                              key={tech}
                              variants={{
                                hidden: { opacity: 0, scale: 0.9 },
                                visible: { opacity: 1, scale: 1, transition: { type: 'spring', damping: 15 } }
                              }}
                              className="text-[9px] font-mono px-3 py-1.5 bg-studio-bg border border-studio-stone/30 text-studio-dark"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Action trigger: Reveal Visit Live Link */}
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                        }}
                        className="pt-6 border-t border-studio-stone/20"
                      >
                        <motion.a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="inline-flex items-center justify-between w-full px-6 py-4.5 bg-studio-dark text-studio-white hover:bg-studio-gold transition-colors duration-300 font-bold tracking-widest uppercase text-xs cursor-pointer shadow-md"
                        >
                          <span>Visit Live Project</span>
                          <ExternalLink size={14} className="text-studio-gold ml-2" />
                        </motion.a>
                      </motion.div>

                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
