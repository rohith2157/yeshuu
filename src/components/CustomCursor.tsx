import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [hoverType, setHoverType] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Core coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs for smooth ring lag
  const ringX = useSpring(mouseX, { damping: 30, stiffness: 220, mass: 0.6 });
  const ringY = useSpring(mouseY, { damping: 30, stiffness: 220, mass: 0.6 });

  // Speed and stretch calculation on rapid movement
  const [stretch, setStretch] = useState({ scaleX: 1, scaleY: 1, angle: 0 });

  useEffect(() => {
    // Detect touch device
    const checkMobile = () => {
      setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkMobile();

    let lastX = 0;
    let lastY = 0;
    let lastTime = Date.now();

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      if (!isVisible) setIsVisible(true);

      // Compute cursor stretch based on velocity
      const now = Date.now();
      const dt = now - lastTime || 1;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const velocity = Math.hypot(dx, dy) / dt;

      // Limit max stretch
      const maxStretch = 0.35;
      const computedStretch = Math.min(velocity * 0.12, maxStretch);
      
      // Calculate angle of movement
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      setStretch({
        scaleX: 1 + computedStretch,
        scaleY: 1 - computedStretch,
        angle
      });

      lastX = e.clientX;
      lastY = e.clientY;
      lastTime = now;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target) {
        const cursorDataEl = target.closest('[data-cursor]') as HTMLElement | null;
        if (cursorDataEl) {
          const type = cursorDataEl.getAttribute('data-cursor');
          setHoverType(type);
        } else {
          const isInteractive = target.closest('a, button, [role="button"], input, select, textarea, .cursor-pointer') !== null;
          setHoverType(isInteractive ? 'interactive' : null);
        }
      }
    };

    const handleMouseLeaveWindow = () => setIsVisible(false);
    const handleMouseEnterWindow = () => setIsVisible(true);

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseover', handleMouseOver);
      document.addEventListener('mouseleave', handleMouseLeaveWindow);
      document.addEventListener('mouseenter', handleMouseEnterWindow);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
    };
  }, [mouseX, mouseY, isVisible, isMobile]);

  if (isMobile || !isVisible) return null;

  // Determine cursor dimensions and labels based on hover context
  const getCursorStyle = () => {
    switch (hoverType) {
      case 'view':
        return {
          width: 76,
          height: 76,
          text: 'VIEW',
          color: '#B89C65',
          border: '1px solid #B89C65',
          bg: 'rgba(184, 156, 101, 0.12)',
        };
      case 'drag':
        return {
          width: 76,
          height: 76,
          text: 'DRAG',
          color: '#121212',
          border: '1px solid #121212',
          bg: 'rgba(18, 18, 18, 0.08)',
        };
      case 'copy':
        return {
          width: 76,
          height: 76,
          text: 'COPY',
          color: '#B89C65',
          border: '1px solid #B89C65',
          bg: 'rgba(184, 156, 101, 0.15)',
        };
      case 'interactive':
        return {
          width: 44,
          height: 44,
          text: '',
          color: '#B89C65',
          border: '1px solid #B89C65',
          bg: 'rgba(184, 156, 101, 0.08)',
        };
      default:
        return {
          width: 20,
          height: 20,
          text: '',
          color: '#121212',
          border: '1.5px solid rgba(18, 18, 18, 0.25)',
          bg: 'rgba(18, 18, 18, 0.02)',
        };
    }
  };

  const currentStyle = getCursorStyle();

  return (
    <>
      {/* Outer Lagging Ring (Stretches in movement direction) */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          rotate: stretch.angle,
          scaleX: stretch.scaleX,
          scaleY: stretch.scaleY,
        }}
        animate={{
          width: currentStyle.width,
          height: currentStyle.height,
          backgroundColor: currentStyle.bg,
          borderColor: currentStyle.color,
          borderStyle: 'solid',
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 24,
          mass: 0.4
        }}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center border"
      >
        {/* Floating Text label overlay inside cursor */}
        <AnimatePresence>
          {currentStyle.text && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.25 }}
              className="text-[9px] font-mono tracking-widest font-black"
              style={{ color: currentStyle.color, transform: `rotate(${-stretch.angle}deg)` }}
            >
              {currentStyle.text}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Inner Precision center dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: hoverType ? 0 : 1,
          backgroundColor: '#B89C65',
        }}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-[9999]"
      />
    </>
  );
};
