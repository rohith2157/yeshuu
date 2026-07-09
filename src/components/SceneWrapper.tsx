import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface SceneWrapperProps {
  children: React.ReactNode;
  index: number;
  bgClass?: string;
  id?: string;
  heightClass?: string;
  stickyHeightClass?: string;
}

export const SceneWrapper: React.FC<SceneWrapperProps> = ({
  children,
  index,
  bgClass = 'bg-studio-bg',
  id,
  heightClass = 'h-[180vh]',
  stickyHeightClass = 'h-screen'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Measure the scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // Calculate layout transforms as this scene exits
  const scale = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 0.6]);
  const y = useTransform(scrollYProgress, [0, 0.6, 1], [0, 0, -80]);
  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    ['0px', '0px', '40px']
  );

  return (
    <div
      ref={containerRef}
      id={id}
      className={`relative w-full ${heightClass} pointer-events-none`}
      style={{ zIndex: 10 + index }}
    >
      {/* Sticky Inner container that pins to the screen */}
      <div className={`sticky top-0 left-0 w-full ${stickyHeightClass} overflow-hidden pointer-events-auto`}>
        <motion.div
          style={{
            scale,
            opacity,
            y,
            borderRadius,
            transformOrigin: 'top center'
          }}
          className={`w-full h-full ${bgClass} flex flex-col justify-center items-center relative overflow-hidden select-none`}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};
