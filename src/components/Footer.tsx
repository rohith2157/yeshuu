import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-off-black border-t border-surface-25 py-16 md:py-24 relative overflow-hidden px-6 sm:px-12 md:px-16">
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col gap-16">
        
        {/* Row 1: Columns of GSAP Animation Tools */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-left border-b border-surface-25/50 pb-16">
          <div>
            <h4 className="text-body-sm font-bold text-shockingly-green mb-4">GSAP</h4>
            <ul className="space-y-2 text-caption text-surface-50 font-normal">
              <li><a href="https://gsap.com" className="hover:text-surface-cream transition-colors">Core</a></li>
              <li><a href="https://gsap.com/docs/v3" className="hover:text-surface-cream transition-colors">Docs</a></li>
              <li><a href="https://gsap.com/docs/v3/Plugins" className="hover:text-surface-cream transition-colors">All Plugins</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-body-sm font-bold text-pink mb-4">Scroll</h4>
            <ul className="space-y-2 text-caption text-surface-50 font-normal">
              <li><a href="https://gsap.com/docs/v3/Plugins/ScrollTrigger" className="hover:text-surface-cream transition-colors">ScrollTrigger</a></li>
              <li><a href="https://gsap.com/docs/v3/Plugins/ScrollSmoother" className="hover:text-surface-cream transition-colors">ScrollSmoother</a></li>
              <li><a href="https://gsap.com/docs/v3/Plugins/ScrollToPlugin" className="hover:text-surface-cream transition-colors">ScrollTo</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-body-sm font-bold text-orangey mb-4">SVG</h4>
            <ul className="space-y-2 text-caption text-surface-50 font-normal">
              <li><a href="https://gsap.com" className="hover:text-surface-cream transition-colors">DrawSVG</a></li>
              <li><a href="https://gsap.com" className="hover:text-surface-cream transition-colors">MorphSVG</a></li>
              <li><a href="https://gsap.com" className="hover:text-surface-cream transition-colors">MotionPath</a></li>
              <li><a href="https://gsap.com" className="hover:text-surface-cream transition-colors">MotionPathHelper</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-body-sm font-bold text-blue mb-4">UI</h4>
            <ul className="space-y-2 text-caption text-surface-50 font-normal">
              <li><a href="https://gsap.com" className="hover:text-surface-cream transition-colors">Flip</a></li>
              <li><a href="https://gsap.com" className="hover:text-surface-cream transition-colors">Draggable</a></li>
              <li><a href="https://gsap.com" className="hover:text-surface-cream transition-colors">Inertia</a></li>
              <li><a href="https://gsap.com" className="hover:text-surface-cream transition-colors">Observer</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-body-sm font-bold text-lilac mb-4">Text</h4>
            <ul className="space-y-2 text-caption text-surface-50 font-normal">
              <li><a href="https://gsap.com" className="hover:text-surface-cream transition-colors">SplitText</a></li>
              <li><a href="https://gsap.com" className="hover:text-surface-cream transition-colors">ScrambleText</a></li>
              <li><a href="https://gsap.com" className="hover:text-surface-cream transition-colors">TextReplace</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-body-sm font-bold text-surface-cream mb-4">Other</h4>
            <ul className="space-y-2 text-caption text-surface-50 font-normal">
              <li><a href="https://gsap.com" className="hover:text-surface-cream transition-colors">Physics2D</a></li>
              <li><a href="https://gsap.com" className="hover:text-surface-cream transition-colors">PhysicsProps</a></li>
              <li><a href="https://gsap.com" className="hover:text-surface-cream transition-colors">GSDevTools</a></li>
            </ul>
          </div>
        </div>

        {/* Row 2: Newsletter & Secondary Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left border-b border-surface-25/50 pb-16">
          {/* Newsletter signup */}
          <div className="lg:col-span-6 flex flex-col items-start gap-4">
            <h4 className="text-body font-semibold text-surface-cream">
              Keep in the loop with the GSAP® newsletter.
            </h4>
            <form className="relative w-full max-w-md flex items-center border-b border-surface-cream py-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-transparent border-none text-surface-cream placeholder:text-surface-50 focus:outline-none pr-10 font-medium"
              />
              <button 
                type="submit" 
                className="absolute right-0 top-1/2 -translate-y-1/2 text-surface-cream hover:text-shockingly-green transition-colors cursor-pointer"
              >
                <ArrowRight size={18} />
              </button>
            </form>
          </div>

          {/* Site Pages & Links */}
          <div className="lg:col-span-3">
            <h4 className="text-caption font-bold text-surface-cream uppercase tracking-widest mb-4">GSAP</h4>
            <ul className="space-y-2 text-caption text-surface-50">
              <li><a href="https://gsap.com/blog" className="hover:text-surface-cream transition-colors">Blog</a></li>
              <li><a href="https://gsap.com/community/showcase" className="hover:text-surface-cream transition-colors">Showcase</a></li>
              <li><a href="https://gsap.com/resources" className="hover:text-surface-cream transition-colors">Learn GSAP</a></li>
              <li><a href="https://gsap.com" className="hover:text-surface-cream transition-colors">GSAP & Webflow</a></li>
              <li><a href="https://gsap.com" className="hover:text-surface-cream transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Social connections */}
          <div className="lg:col-span-3">
            <h4 className="text-caption font-bold text-surface-cream uppercase tracking-widest mb-4">Connect</h4>
            <ul className="space-y-2 text-caption text-surface-50">
              <li><a href="https://gsap.com/forums" className="hover:text-surface-cream transition-colors">Forums</a></li>
              <li><a href="https://discord.gg" className="hover:text-surface-cream transition-colors">Discord</a></li>
              <li><a href="https://codepen.io" className="hover:text-surface-cream transition-colors">Codepen</a></li>
              <li><a href="https://linkedin.com" className="hover:text-surface-cream transition-colors">LinkedIn</a></li>
              <li><a href="https://github.com" className="hover:text-surface-cream transition-colors">GitHub</a></li>
              <li><a href="https://x.com" className="hover:text-surface-cream transition-colors">X</a></li>
            </ul>
          </div>
        </div>

        {/* Row 3: Copyright & Webflow logo */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-caption text-surface-50">
          <div className="flex items-center gap-2">
            <span>©2026 GSAP - A Webflow Product. All rights reserved.</span>
          </div>

          {/* Webflow Brand Mark */}
          <div className="flex items-center gap-2 text-surface-cream opacity-55 hover:opacity-100 transition-opacity">
            <span className="font-mono text-[10px] tracking-widest uppercase">SPONSORED BY</span>
            <svg viewBox="0 0 100 24" fill="currentColor" className="w-16 h-5">
              {/* Simple stylized Webflow W/Text representation */}
              <path d="M9.1 0L5.3 12.3 1.5 0H0l5 16.3h.6L9.4 4l3.8 12.3h.6L18.8 0h-1.5l-3.8 12.3L9.7 0H9.1zm13.1 8c-.6 0-1.1.2-1.5.7l-.1-.5h-1.3v11.1h1.5v-3.7c.4.3.9.5 1.4.5 1.5 0 2.6-1.1 2.6-4s-1.1-4.1-2.6-4.1zm-.3 6.6c-.8 0-1.2-.5-1.2-1.3v-1.3c0-.8.4-1.3 1.2-1.3.8 0 1.2.5 1.2 1.3v1.3c0 .8-.4 1.3-1.2 1.3zm12.3-6.6c-.6 0-1.1.2-1.5.7l-.1-.5h-1.3v8.1h1.5v-3.7c.4.3.9.5 1.4.5 1.5 0 2.6-1.1 2.6-4s-1.1-4.1-2.6-4.1zm-.3 6.6c-.8 0-1.2-.5-1.2-1.3v-1.3c0-.8.4-1.3 1.2-1.3.8 0 1.2.5 1.2 1.3v1.3c0 .8-.4 1.3-1.2 1.3zm9.1-10v3.4h-1v1.3h1v5.4c0 2.1.9 3.2 3.1 3.2h.9v-1.3h-.7c-1.2 0-1.7-.5-1.7-1.9v-5.4h2.4v-1.3h-2.4V4.6h-1.6zm8.8 5.4c-2.4 0-4 1.7-4 4.1s1.6 4.1 4 4.1 4-1.7 4-4.1-1.6-4.1-4-4.1zm0 6.8c-1.4 0-2.4-1-2.4-2.7s1-2.7 2.4-2.7 2.4 1 2.4 2.7-1 2.7-2.4 2.7zm13.1-6.8l-1.9 6-1.9-6H59l2.8 8.1-.2.7c-.3.9-.9 1.3-1.8 1.3h-.8V23h.9c1.6 0 2.7-.8 3.3-2.6L66 14.6l3.3 8.4H71l-5-13.4z" />
            </svg>
          </div>

          <div className="flex gap-4">
            <a href="https://gsap.com" className="hover:text-surface-cream transition-colors">Privacy Policy</a>
            <a href="https://gsap.com" className="hover:text-surface-cream transition-colors">Terms of Use</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
