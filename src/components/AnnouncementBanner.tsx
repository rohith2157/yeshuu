import React from 'react';

export const AnnouncementBanner: React.FC = () => {
  return (
    <div className="w-full bg-[#0e100f] border-b border-[#42433d] py-2.5 px-4 text-center text-caption leading-caption tracking-caption font-normal text-surface-cream relative z-50">
      <span>GSAP is now </span>
      <a 
        href="https://gsap.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-[#0ae448] font-semibold hover:underline"
      >
        free for everyone
      </a>
      <span>, thanks to Webflow's support!</span>
    </div>
  );
};
