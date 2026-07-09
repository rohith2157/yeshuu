export interface Project {
  id: string;
  title: string;
  category: string;
  url: string;
  image: string;
  description: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    id: 'cyber-portfolio',
    title: 'Cyber Portfolio',
    category: 'Developer Portfolio',
    url: 'https://cyber-port-seven.vercel.app/',
    image: '/cyber-port.png',
    description: 'A high-performance developer portfolio built with cyber-inspired terminal grids, real-time command line feeds, and interactive developer resume sections. Designed for software engineers who want to showcase terminal mastery and technical sophistication.',
    technologies: ['React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite']
  },
  {
    id: 'prisma-portfolio',
    title: 'Prisma Portfolio',
    category: 'Personal Branding Portfolio',
    url: 'https://prisma-portfolio-nine.vercel.app/',
    image: '/prisma-port.png',
    description: 'A minimal, modern personal branding platform for founders, freelancers, and designers. Focuses on typographic clarity, high-contrast imagery, smooth transitions, and showcasing client case studies with elegance and flow.',
    technologies: ['Next.js', 'React', 'Vanilla CSS', 'Framer Motion', 'Lucide Icons']
  },
  {
    id: 'lithos',
    title: 'Lithos',
    category: 'Creative Brand Portfolio',
    url: 'https://lithos-port.vercel.app/',
    image: '/lithos-port.png',
    description: 'An artistic creative brand portfolio styled like an architectural publication. Uses asymmetric editorial layouts, delicate border dividers, high-contrast fine arts styling, and an organic visual structure that projects premium craftsmanship.',
    technologies: ['React 18', 'Tailwind CSS', 'Framer Motion', 'Vite']
  },
  {
    id: 'marketing-portfolio',
    title: 'Marketing Portfolio',
    category: 'Marketing & Campaign Portfolio',
    url: 'https://marketingportfolio-nine.vercel.app/',
    image: '/marketing-port.png',
    description: 'A dedicated marketing portfolio designed to highlight campaigns, professional growth metrics, and high-conversion strategies. Built for marketing professionals seeking a modern, data-driven web presence.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite']
  }
];
