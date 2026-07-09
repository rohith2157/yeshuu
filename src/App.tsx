import { useEffect } from 'react';
import Lenis from 'lenis';
import { AnnouncementBanner } from './components/AnnouncementBanner';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { WhyGsap } from './components/WhyGsap';
import { ToolsSection } from './components/ToolsSection';
import { BrandsMarquee } from './components/BrandsMarquee';
import { Showcase } from './components/Showcase';
import { Footer } from './components/Footer';

function App() {
  // Initialize Lenis Smooth Scroll on Mount
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-just-black min-h-screen text-surface-cream relative selection:bg-shockingly-green selection:text-just-black overflow-x-hidden">
      {/* Top Banner Notice */}
      <AnnouncementBanner />

      {/* Header Navigation HUD */}
      <Navigation />

      {/* Main Page Layout Flow */}
      <main className="relative z-10 w-full flex flex-col pt-10">
        {/* Landing Hero */}
        <Hero />

        {/* Why GSAP Narrative Statement & Capsules */}
        <WhyGsap />

        {/* GSAP Tools (Scroll, SVG, Text, UI) */}
        <ToolsSection />

        {/* Brands Using GSAP Marquee */}
        <BrandsMarquee />

        {/* Showcase / Exhibition Slider */}
        <Showcase />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
