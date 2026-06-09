import portfolioImg from "../../assets/portfolio.png";

import xmrggThumbnailImg from "../../assets/projects/xmr.gg/thumbnail.png";
import xmrggHomepageImg from "../../assets/projects/xmr.gg/main.png";
import xmrggCrashImg from "../../assets/projects/xmr.gg/crash.png";
import xmrggMinesImg from "../../assets/projects/xmr.gg/mines.png";
import xmrggPlinkoImg from "../../assets/projects/xmr.gg/plinko.png";
import xmrggTowerImg from "../../assets/projects/xmr.gg/tower.png";
import xmrggAffiliateImg from "../../assets/projects/xmr.gg/affiliate.png";
import xmrggRewardsImg from "../../assets/projects/xmr.gg/rewards.png";
import xmrggUserImg from "../../assets/projects/xmr.gg/user.png";
import xmrggSportsImg from "../../assets/projects/xmr.gg/sports.png";

import codebyedgeImgCustomize1 from "../../assets/projects/codebyedge/customize-1.png";
import codebyedgeImgCustomize2 from "../../assets/projects/codebyedge/customize-2.png";
import codebyedgeImgCustomize3 from "../../assets/projects/codebyedge/customize-3.png";
import codebyedgeImgCustomize4 from "../../assets/projects/codebyedge/customize-4.png";
import codebyedgeImgMain from "../../assets/projects/codebyedge/main.png";
import codebyedgeImgAbout from "../../assets/projects/codebyedge/about.png";
import codebyedgeImgRingCollection from "../../assets/projects/codebyedge/ring-collection.png";

import aiDateAssistantImgThumbnail from "../../assets/projects/ai-date-assistant-rn/thumbnail.png";
import aiDateAssistantImg1 from "../../assets/projects/ai-date-assistant-rn/1.png";
import aiDateAssistantImg2 from "../../assets/projects/ai-date-assistant-rn/2.png";
import aiDateAssistantImg3 from "../../assets/projects/ai-date-assistant-rn/3.png";
import aiDateAssistantImg4 from "../../assets/projects/ai-date-assistant-rn/4.png";
import aiDateAssistantImg5 from "../../assets/projects/ai-date-assistant-rn/5.png";
import aiDateAssistantImg6 from "../../assets/projects/ai-date-assistant-rn/6.png";
import aiDateAssistantImg7 from "../../assets/projects/ai-date-assistant-rn/7.png";
import aiDateAssistantImg8 from "../../assets/projects/ai-date-assistant-rn/8.png";

import aktaThumnailImg from "../../assets/projects/akta.pro/thmbnail.png";
import aktaLandingImg from "../../assets/projects/akta.pro/landing.png";

import rakuearnImg from "../../assets/projects/rakuearn/rakuearn.webp";
import rakuearnImgHowItWorks from "../../assets/projects/rakuearn/how-it-work.png";
import rakuearnImgPointExchange from "../../assets/projects/rakuearn/point-exchange.png";

import onewheelThumnailImg from "../../assets/projects/onewheel/thumbnail.png";
import onewheel1Img from "../../assets/projects/onewheel/1.png";
import onewheel2Img from "../../assets/projects/onewheel/2.png";
import onewheel3Img from "../../assets/projects/onewheel/3.png";
import onewheel4Img from "../../assets/projects/onewheel/4.png";
import onewheel5Img from "../../assets/projects/onewheel/5.png";
import onewheel6Img from "../../assets/projects/onewheel/6.png";
import onewheel7Img from "../../assets/projects/onewheel/7.png";

import teamDryftImg from "../../assets/projects/teamdryft.png";

import medicareThumbImg from "@/assets/projects/medicare/thumb.png";
import medicareHomeImg from "@/assets/projects/medicare/home.png";

import noverThumbnailImg from "@/assets/projects/nover/nover_landing.png";
import noverAppImg from "@/assets/projects/nover/nover_app.png";
import nover1Img from "@/assets/projects/nover/nover_1.png";
import nover2Img from "@/assets/projects/nover/nover_2.png";
import nover3Img from "@/assets/projects/nover/nover_3.png";
import nover4Img from "@/assets/projects/nover/nover_4.png";
import nover5Img from "@/assets/projects/nover/nover_5.png";
import nover6Img from "@/assets/projects/nover/nover_6.png";
import nover7Img from "@/assets/projects/nover/nover_7.png";

export interface Project {
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

export const hasProjectLink = (project: Project) =>
  Boolean(project.link?.trim());

export const getProjectGalleryImages = (project: Project) =>
  project.images?.length ? project.images : [project.image];

export const projects: Project[] = [
  {
    title: "Nover Studio",
    description:
      "A professional AI visual generation suite built for designers, creators, artists, and creative teams who need precise control over AI-generated content. I designed and optimized the frontend experience across the marketing website and product onboarding flows, focusing on communicating Nover's unique 'design-first' approach to AI image creation. The platform enables users to generate, edit, remix, and control visual content through an intuitive interface with real-time scene manipulation, camera positioning, lighting controls, pose adjustments, depth management, object placement, text editing, and advanced AI workflow orchestration. I worked on conversion-focused landing pages, feature showcase sections, interactive product demonstrations, creator-focused messaging, pricing and onboarding experiences, workflow education, and trust-building content that highlights Nover's ability to replace prompt-heavy image generation with precise visual design controls. The platform combines multiple state-of-the-art AI models, node-based creative workflows, live editing capabilities, image generation, in-painting, out-painting, scene composition tools, and professional production features within a unified creative environment.",
    image: noverThumbnailImg,
    link: "https://www.nover.studio",
    images: [
      noverThumbnailImg,
      nover1Img,
      nover2Img,
      nover3Img,
      nover4Img,
      nover5Img,
      nover6Img,
      nover7Img,
      noverAppImg,
    ],
    tags: [
      "Next.js",
      "Supabase", 
      "PostgreSQL",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "AI Image Generation",
      "OpenAI",
      "Claude",
      "Visual Editing",
      "Generative AI",
      "Designer Experience",
      "SaaS Platform",
    ],
  },
  {
    title: "RakuEarn",
    description:
      "Raku Earn is an AI-powered rewards platform that helps users earn points by automatically completing surveys through a browser-based automation assistant. The platform combines a point-earning website, Chrome extension, AI dashboard, and reward redemption system where users can exchange points for bank transfers, PayPay, and gift cards. Its core experience focuses on profile-based AI form completion, real-time point tracking, and a simple rewards workflow designed to reduce manual survey effort.",
    image: rakuearnImg,
    link: "https://rakuearn.com/en",
    images: [rakuearnImg, rakuearnImgHowItWorks, rakuearnImgPointExchange],
    tags: [
      "Next.js",
      "Supabase",
      "PostgreSQL",
      "TypeScript",
      "React.js",
      "OpenAI API",
      "AI",
      "LLM",
      "Automation",
      "UI/UX",
      "Pixel Perfect Design",
      "Payment Processing",
    ],
  },
  {
    title: "AmoreAI",
    description:
      "Amore AI is an AI-powered dating coach that helps users improve their dating profiles, choose stronger photos, rewrite bios, and generate better conversation starters. The platform uses personalized AI analysis to review profile quality, rank dating photos, suggest engaging openers, and coach users through chat replies. Built for users across Tinder, Bumble, Hinge, and other dating apps, it focuses on improving match rates, reducing messaging anxiety, and creating more confident online dating experiences.",
    image: aiDateAssistantImgThumbnail,
    link: "",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=tech.asoasis.amore_ai",
    appStoreLink:
      "https://apps.apple.com/in/app/amoreai-ai-dating-coach/id6761085824",
    images: [
      aiDateAssistantImg1,
      aiDateAssistantImg2,
      aiDateAssistantImg3,
      aiDateAssistantImg4,
      aiDateAssistantImg5,
      aiDateAssistantImg6,
      aiDateAssistantImg7,
      aiDateAssistantImg8,
    ],
    tags: [
      "Expo",
      "Supabase",
      "PostgreSQL",
      "TypeScript",
      "React Native",
      "OpenAI API",
      "AI",
      "LLM",
      "Automation",
      "UI/UX",
      "Pixel Perfect Design",
    ],
  },
  {
    title: "MediCare AI",
    description:
      "MediCare AI is a modern AI-powered healthcare platform that helps users access healthcare information, discover relevant medical services, and receive intelligent guidance through conversational AI. The platform leverages advanced LLM technology to provide personalized healthcare assistance, answer medical-related questions, streamline patient interactions, and improve access to healthcare resources. Built with a scalable cloud-native architecture, MediCare AI delivers a seamless user experience through AI-driven conversations, secure data management, and responsive web interfaces.",
    image: medicareThumbImg,
    link: "https://aimedicare.vercel.app",
    githubLink: "https://github.com/benbuilds2124/medicare-ai",
    images: [medicareHomeImg, medicareThumbImg],
    tags: [
      "Next.js",
      "Supabase",
      "PostgreSQL",
      "React.js",
      "TypeScript",
      "OpenAI API",
      "AI",
      "LLM",
      "Healthcare",
      "Conversational AI",
      "UI/UX",
      "Automation",
      "Web Application",
    ],
  },
  {
    title: "XMR Play | Real-Time iGaming Platform",
    description:
      "A high-concurrency real-time iGaming platform for web and mobile users, supporting live gameplay, betting systems, wallet operations, and real-time user engagement. Built with React, Next.js, TypeScript, and WebSocket-based infrastructure, the platform delivers low-latency gameplay synchronization, live chat, transaction tracking, AI-assisted moderation, and scalable user experiences for thousands of concurrent players.",
    image: xmrggThumbnailImg,
    link: "https://xmr.gg",
    images: [
      xmrggHomepageImg,
      xmrggCrashImg,
      xmrggMinesImg,
      xmrggPlinkoImg,
      xmrggTowerImg,
      xmrggAffiliateImg,
      xmrggRewardsImg,
      xmrggUserImg,
      xmrggSportsImg,
    ],
    tags: [
      "Next.js",
      "MongoDB",
      "TypeScript",
      "Zustand",
      "Node.js",
      "WebSocket",
      "AI Integration",
      "Real-Time Systems",
      "Docker",
      "AWS",
    ],
  },

  {
    title: "Onewheel",
    description:
      "A large-scale connected mobility ecosystem supporting smart electric vehicles, mobile applications, rider communities, GPS route tracking, real-time board telemetry, firmware management, and personalized ride experiences. The platform integrates Bluetooth-connected hardware, cloud-based analytics, live ride monitoring, digital ride customization, social engagement systems, and performance tracking infrastructure. Designed to support thousands of active riders globally, the system delivers seamless communication between hardware devices, mobile applications, and cloud services while maintaining responsive user experiences and reliable telemetry synchronization.",
    image: onewheelThumnailImg,
    link: "https://onewheel.com",
    images: [
      onewheel1Img,
      onewheel2Img,
      onewheel3Img,
      onewheel4Img,
      onewheel5Img,
      onewheel6Img,
      onewheel7Img,
    ],
    tags: [
      "E-commerce",
      "Shopify",
      "React",
      "Next.js",
      "TypeScript",
      "Real-Time Systems",
      "GPS Tracking",
      "WebSocket",
      "Mobile App",
      "Node.js",
      "AWS",
      "Geolocation",
      "Mailchimp",
    ],
  },
  {
    title: "Code by Edge | Luxury Jewelry E-Commerce & Morse Code Customizer",
    description:
      "A luxury jewelry e-commerce platform and Morse code customization studio built for a UK-based bespoke jewelry brand. As a Senior Frontend Engineer, I developed interactive product customization experiences using React and Three.js, enabling users to personalize rings and jewelry with encoded Morse code messages, gemstone selections, metal options, and real-time visual previews. The platform also included a polished e-commerce experience with product browsing, dynamic configuration flows, checkout integration, and secure payment processing to support high-value personalized jewelry purchases.",
    image: codebyedgeImgCustomize4,
    link: "https://codebyedge.co.uk/",
    images: [
      codebyedgeImgMain,
      codebyedgeImgAbout,
      codebyedgeImgRingCollection,
      codebyedgeImgCustomize1,
      codebyedgeImgCustomize2,
      codebyedgeImgCustomize3,
      codebyedgeImgCustomize4,
    ],
    tags: [
      "E-commerce",
      "React.js",
      "Three.js",
      "GSAP",
      "REST APIs",
      "Full Stack",
      "TypeScript",
      "Docker",
      "AWS",
      "Stripe",
      "PayPal",
      "Shopify",
    ],
  },

  {
    title: "Personal Portfolio",
    description:
      "A modern, performance‑focused portfolio built with React 19, Tailwind CSS v4, and the Motion API. Designed with accessibility, smooth scroll‑based animations, and subtle micro‑interactions to feel fast and polished on every device.",
    image: portfolioImg,
    link: "https://benbuilds.vercel.app",
    images: [portfolioImg],
    githubLink: "https://github.com/benbuilds2124/personal-portfolio",
    tags: [
      "React.js",
      "TailwindCSS",
      "Motion",
      "Vercel",
      "Vite",
      "TypeScript",
      "EmailJS",
      "React Icons",
    ],
  },

  {
    title: "Dryft | Automotive Parts Discovery Platform",
    description:
      "Dryft is a fitment-first automotive parts discovery platform that helps drivers and car enthusiasts find compatible aftermarket parts for their exact vehicle. Users can search by make, model, year, and trim, compare trusted brands and vendors, review compatibility, and discover parts across key automotive categories in one streamlined interface.",
    image: teamDryftImg,
    link: "https://www.teamdryft.com/",
    images: [teamDryftImg],
    tags: [
      "Framer",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "US/UX",
      "Frontend Development",
      "Animation",
    ],
  },
  {
    title: "Akta | AI-Native News Intelligence API",
    description:
      "A developer-focused news intelligence platform that provides structured company news data for AI agents, data teams, and enterprise workflows. I built and optimized the frontend experience for the public marketing site and product-facing API entry points, focusing on clear positioning, conversion-driven CTAs, responsive layouts, pricing presentation, feature education, and developer onboarding. The platform highlights private entity resolution across 20M+ parent companies, subsidiaries, trading names, and namesakes, custom endpoint configuration, contextual intelligence, materiality scoring, sentiment analysis, geographic tagging, topic classification, and source scoring. I also worked on UI sections for API sample responses, use-case segmentation, pricing tiers, enterprise trust messaging, and playground/documentation navigation to help technical users quickly understand the value of the API and start testing it.",
    image: aktaThumnailImg,
    link: "https://www.akta.pro",
    images: [aktaLandingImg],
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "API Integration",
      "AI Workflows",
      "Developer Experience",
      "Enterprise SaaS",
      "Responsive UI",
      "Performance Optimization",
    ],
  },
];

export const getSkillColor = (skill: string) => {
  const s = skill.toLowerCase();
  if (s.includes("node")) return "text-emerald-500";
  if (s.includes("react")) return "text-[#61DAFB]";
  if (s.includes("mongo")) return "text-green-500";
  if (s.includes("redux")) return "text-purple-500";
  if (s.includes("ios")) return "text-slate-500 dark:text-slate-200";
  if (s.includes("android")) return "text-emerald-400";
  if (s.includes("tailwind")) return "text-cyan-400";
  if (s.includes("motion")) return "text-pink-500";
  if (s.includes("full stack")) return "text-fuchsia-500";
  if (s.includes("api")) return "text-indigo-400";
  return "text-slate-500 dark:text-slate-400";
};
