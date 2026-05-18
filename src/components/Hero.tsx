import { motion } from "motion/react";
import {
  TbBrandNodejs,
  TbBrandTypescript,
  TbBrandJavascript,
  TbBrandTailwind,
  TbBrandReact,
  TbDatabase,
  TbBrandNextjs,
  TbApi,
  TbBrandReactNative,
  TbBrain,
} from "react-icons/tb";
import { Calendar, Folder, ArrowRight } from "lucide-react";
import { BsChat } from "react-icons/bs";

const techStack = [
  { name: "React", icon: TbBrandReact, color: "text-[#61DAFB]" },
  { name: "Next.js", icon: TbBrandNextjs, color: "text-slate-900 dark:text-white" },
  { name: "TypeScript", icon: TbBrandTypescript, color: "text-[#3178C6]" },
  { name: "JavaScript", icon: TbBrandJavascript, color: "text-[#F7DF1E]" },
  { name: "React Native", icon: TbBrandReactNative, color: "text-[#61DAFB]" },
  { name: "Node.js", icon: TbBrandNodejs, color: "text-[#339933]" },
  { name: "GraphQL", icon: TbApi, color: "text-pink-500" },
  { name: "AI Integration", icon: TbBrain, color: "text-purple-500" },
  { name: "LLM Applications", icon: TbBrain, color: "text-fuchsia-500" },
  { name: "Real-Time Systems", icon: TbApi, color: "text-cyan-500" },
  { name: "Frontend Architecture", icon: TbApi, color: "text-orange-500" },
  { name: "Tailwind CSS", icon: TbBrandTailwind, color: "text-[#06B6D4]" },
  { name: "MongoDB", icon: TbDatabase, color: "text-[#47A248]" },
  { name: "PostgreSQL", icon: TbDatabase, color: "text-[#4169E1]" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-6">
      <div className="pointer-events-none absolute left-1/2 top-[100px] h-[250px] w-[250px] -translate-x-1/2 rounded-full bg-blue-500/8 blur-[80px] dark:bg-blue-500/12" />

      <div className="relative z-10 space-y-7">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-white/70 px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-slate-600 shadow-sm backdrop-blur dark:bg-slate-900/60 dark:text-slate-300"
        >
          <TbBrain className="h-3.5 w-3.5 text-blue-500" />
          AI-Native Frontend Engineer
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="max-w-4xl text-3xl font-medium leading tracking-tight text-slate-900 dark:text-slate-50 md:text-4xl lg:text-5xl">
            <span className="font-dancing-script font-bold text-blue-600 dark:text-blue-400">
              Building
            </span>{" "}
            AI-powered products,
            <br className="hidden md:block" />

            <span className="relative inline-block">
              <span className="relative z-10">real-time experiences,</span>
            </span>{" "}
            <br className="hidden md:block" />

            <span className="relative inline-block">
              <span className="relative z-10">and scalable systems that</span>
            </span>

            <span className="relative ml-2 inline-block font-dancing-script font-bold text-amber-600 dark:text-amber-400">
              grow
              <motion.svg
                className="absolute -bottom-1 left-0 h-3 w-full text-amber-500/60 dark:text-amber-400/60"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                />
              </motion.svg>
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base"
        >
          Senior Frontend Engineer specializing in{" "}
          <span className="font-medium text-slate-800 dark:text-slate-200">
            modern React ecosystems,
          </span>{" "}
          conversational UX,{" "}
          <span className="relative inline-block">
            <span className="relative z-10 font-medium text-slate-800 dark:text-slate-200">
              AI integration
            </span>
            <span className="absolute bottom-0 left-0 -z-10 h-1.5 w-full bg-emerald-400/40 dark:bg-emerald-500/40" />
          </span>{" "}
          and scalable frontend applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new Event("open-chatbox"));
            }}
            className="group inline-flex items-center justify-center gap-2.5 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-300/40 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:shadow-violet-500/20 dark:hover:bg-slate-100"
          >
            <BsChat className="h-4.5 w-4.5 text-violet-400 dark:text-violet-500" />
            Work With Me
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2.5 rounded-2xl border border-slate-200 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/60 hover:bg-slate-50 dark:border-slate-700/80 dark:bg-slate-900/50 dark:text-white dark:hover:bg-slate-900"
          >
            <Folder className="h-4.5 w-4.5 text-slate-500 dark:text-slate-300" />
            View Projects
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.28 }}
          className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Available for select projects in 2026
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="relative w-full overflow-hidden pt-3"
        >
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-20 bg-gradient-to-r from-white to-transparent dark:from-slate-950" />
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-20 bg-gradient-to-l from-white to-transparent dark:from-slate-950" />

          <style>{`
            @keyframes slide-marquee {
              from { transform: translateX(0%); }
              to { transform: translateX(-50%); }
            }
            .animate-slide-marquee {
              animation: slide-marquee 32s linear infinite;
            }
            .group:hover .animate-slide-marquee {
              animation-play-state: paused !important;
            }
          `}</style>

          <div className="group flex overflow-hidden">
            <div className="animate-slide-marquee flex items-center gap-3 whitespace-nowrap py-2">
              {[...techStack, ...techStack].map((tech, i) => (
                <div
                  key={i}
                  className="flex cursor-default items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-slate-700 shadow-sm transition-transform hover:scale-105 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-300"
                >
                  <tech.icon className={`h-3.5 w-3.5 ${tech.color}`} strokeWidth={1.2} />
                  <span className="font-mono text-[11px] font-medium">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}