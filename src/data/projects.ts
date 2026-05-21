import portfolioImg from '../../assets/portfolio.png';

import xmrggThumbnailImg from '../../assets/projects/xmr.gg/thumbnail.png';
import xmrggHomepageImg from '../../assets/projects/xmr.gg/main.png';
import xmrggCrashImg from '../../assets/projects/xmr.gg/crash.png';
import xmrggMinesImg from '../../assets/projects/xmr.gg/mines.png';
import xmrggPlinkoImg from '../../assets/projects/xmr.gg/plinko.png';
import xmrggTowerImg from '../../assets/projects/xmr.gg/tower.png';
import xmrggAffiliateImg from '../../assets/projects/xmr.gg/affiliate.png';
import xmrggRewardsImg from '../../assets/projects/xmr.gg/rewards.png';
import xmrggUserImg from '../../assets/projects/xmr.gg/user.png';
import xmrggSportsImg from '../../assets/projects/xmr.gg/sports.png';

import codebyedgeImgCustomize1 from '../../assets/projects/codebyedge/customize-1.png';
import codebyedgeImgCustomize2 from '../../assets/projects/codebyedge/customize-2.png';
import codebyedgeImgCustomize3 from '../../assets/projects/codebyedge/customize-3.png';
import codebyedgeImgCustomize4 from '../../assets/projects/codebyedge/customize-4.png';
import codebyedgeImgMain from '../../assets/projects/codebyedge/main.png';
import codebyedgeImgAbout from '../../assets/projects/codebyedge/about.png';
import codebyedgeImgRingCollection from '../../assets/projects/codebyedge/ring-collection.png';

import shiftTechnologyImg from '../../assets/shift-technology.jpg';

import dkvLogoImg from '../../assets/dkv-logo.jpg';

import exoworldsLogoImg from '../../assets/exoworlds-logo.jpg';

import xmrGgImg from '../../assets/xmr-gg.jpg';

import aiCtaBackgroundImg from '../../assets/ai_cta_background_effect.png';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  images?: string[];
  playStoreLink?: string;
  appStoreLink?: string;
  githubLink?: string;
  tags: string[];
}

export const hasProjectLink = (project: Project) => Boolean(project.link?.trim());

export const getProjectGalleryImages = (project: Project) =>
  project.images?.length ? project.images : [project.image];

export const projects: Project[] = [
  {
    id: 1,
    title: 'XMR Play | Real-Time iGaming Platform',
    description:
      'A high-concurrency real-time iGaming platform for web and mobile users, supporting live gameplay, betting systems, wallet operations, and real-time user engagement. Built with React, Next.js, TypeScript, and WebSocket-based infrastructure, the platform delivers low-latency gameplay synchronization, live chat, transaction tracking, AI-assisted moderation, and scalable user experiences for thousands of concurrent players.',
    image: xmrggThumbnailImg,
    link: 'https://xmr.gg',
    images: [xmrggHomepageImg, xmrggCrashImg, xmrggMinesImg, xmrggPlinkoImg, xmrggTowerImg, xmrggAffiliateImg, xmrggRewardsImg, xmrggUserImg, xmrggSportsImg],
    tags: ['Next.js', 'TypeScript', 'Zustand', 'Node.js', 'WebSocket', 'AI Integration', "MongoDB", "Real-Time Systems", "Docker", "AWS"],
  },
  {
    id: 2,
    title: 'Code by Edge | Luxury Jewelry E-Commerce & Morse Code Customizer',
    description:
      'A luxury jewelry e-commerce platform and Morse code customization studio built for a UK-based bespoke jewelry brand. As a Senior Frontend Engineer, I developed interactive product customization experiences using React and Three.js, enabling users to personalize rings and jewelry with encoded Morse code messages, gemstone selections, metal options, and real-time visual previews. The platform also included a polished e-commerce experience with product browsing, dynamic configuration flows, checkout integration, and secure payment processing to support high-value personalized jewelry purchases.',
    image: codebyedgeImgCustomize4,
    link: 'https://codebyedge.co.uk/',
    images: [
      codebyedgeImgMain,
      codebyedgeImgAbout,
      codebyedgeImgRingCollection,
      codebyedgeImgCustomize1,
      codebyedgeImgCustomize2,
      codebyedgeImgCustomize3,
      codebyedgeImgCustomize4,
    ],
    tags: ['React.js', 'Three.js', 'GSAP', 'REST APIs', 'Full Stack', 'TypeScript', 'Docker', 'AWS', 'Stripe', 'PayPal', 'Shopify', 'E-commerce'],
  },
  {
    id: 3,
    title: 'Personal Portfolio',
    description:
      'A modern, performance‑focused portfolio built with React 19, Tailwind CSS v4, and the Motion API. Designed with accessibility, smooth scroll‑based animations, and subtle micro‑interactions to feel fast and polished on every device.',
    image: portfolioImg,
    link: 'https://benbuilds.vercel.app',
    images: [portfolioImg],
    githubLink: 'https://github.com/benbuilds2124/personal-portfolio',
    tags: ['React.js', 'TailwindCSS', 'Motion', 'Vercel', "Vite", "TypeScript", "EmailJS", "React Icons"],
  },
];

export const getSkillColor = (skill: string) => {
  const s = skill.toLowerCase();
  if (s.includes('node')) return 'text-emerald-500';
  if (s.includes('react')) return 'text-[#61DAFB]';
  if (s.includes('mongo')) return 'text-green-500';
  if (s.includes('redux')) return 'text-purple-500';
  if (s.includes('ios')) return 'text-slate-500 dark:text-slate-200';
  if (s.includes('android')) return 'text-emerald-400';
  if (s.includes('tailwind')) return 'text-cyan-400';
  if (s.includes('motion')) return 'text-pink-500';
  if (s.includes('full stack')) return 'text-fuchsia-500';
  if (s.includes('api')) return 'text-indigo-400';
  return 'text-slate-500 dark:text-slate-400';
};
