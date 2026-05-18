import { motion } from "motion/react";
import {
  Folder,
  Briefcase,
  Brain,
  Zap,
  Layers,
  ArrowRight,
} from "lucide-react";

import CalendlyButton from "./CalendlyButton";
import { BsChat } from "react-icons/bs";

const cards = [
  {
    title: "8+",
    subtitle: "Years Experience",
    description: "Building robust and scalable web applications.",
    icon: Briefcase,
    color: "text-violet-500 dark:text-violet-400",
  },
  {
    title: "AI-Powered",
    subtitle: "Applications",
    description: "Integrating AI into products that solve real problems.",
    icon: Brain,
    color: "text-blue-500 dark:text-blue-400",
  },
  {
    title: "Real-Time",
    subtitle: "Systems",
    description: "High-performance apps with live data and interactions.",
    icon: Zap,
    color: "text-emerald-500 dark:text-emerald-400",
  },
  {
    title: "Full Stack",
    subtitle: "Architecture",
    description: "End-to-end solutions with modern architecture.",
    icon: Layers,
    color: "text-amber-500 dark:text-amber-400",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-white px-4 py-8 transition-colors duration-300 dark:bg-slate-950"
    >
      {/* Background Effect */}
      <img
        src="/assets/ai_cta_background_effect.png"
        alt=""
        className="pointer-events-none absolute inset-0 h-auto w-full object-contain opacity-[0.18] transition-opacity duration-300 dark:opacity-80"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-medium leading-tight tracking-tight text-slate-900 transition-colors duration-300 dark:text-white md:text-4xl"
          >
            Let’s Build{" "}
            <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-blue-600 bg-clip-text font-bold text-transparent">
              AI-Native
            </span>{" "}
            Products Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-slate-600 transition-colors duration-300 dark:text-slate-400 sm:text-base"
          >
            I help startups and teams build scalable frontend systems,
            conversational AI interfaces, real-time applications, and modern
            SaaS platforms.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="mx-auto mt-10 flex w-full max-w-xs flex-col gap-4 sm:max-w-none sm:flex-row sm:items-center sm:justify-center"
          >
            {/* Primary Button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new Event("open-chatbox"));
              }}
              className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-slate-300/40 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800 hover:shadow-2xl dark:bg-white dark:text-slate-950 dark:shadow-violet-500/20 dark:hover:bg-slate-100 dark:hover:shadow-violet-400/30 sm:w-auto"
            >
              <BsChat className="h-5 w-5 text-violet-400 dark:text-violet-500" />
              Work With Me

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Secondary Button */}
            <a
              href="#projects"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-slate-200/40 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/60 hover:bg-slate-50 dark:border-slate-700/80 dark:bg-slate-900/50 dark:text-white dark:shadow-black/20 dark:hover:bg-slate-900 sm:w-auto"
            >
              <Folder className="h-5 w-5 text-slate-500 dark:text-slate-300" />
              View Projects
            </a>

            <CalendlyButton />
          </motion.div>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + index * 0.08 }}
              className="group rounded-3xl border border-slate-200/60 bg-slate-50 p-6 shadow-slate-200/50 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-xl hover:shadow-slate-200/70 dark:border-slate-800/60 dark:bg-slate-900/40 dark:shadow-black/50 dark:hover:border-slate-700 dark:hover:bg-slate-900/60 dark:hover:shadow-black/50"
            >
              {/* Icon */}
              <div
                className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm transition-transform duration-300 group-hover:scale-105 dark:border-slate-700 dark:bg-slate-950 dark:shadow-lg ${card.color}`}
              >
                <card.icon className="h-8 w-8" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold leading-tight text-slate-900 dark:text-white">
                {card.title}
              </h3>

              <p className="text-sm font-medium text-slate-600 dark:text-slate-200">
                {card.subtitle}
              </p>

              <div className="my-4 h-px w-4 bg-slate-300 dark:bg-slate-600" />

              <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mx-auto mt-10 flex w-fit max-w-full flex-wrap items-center justify-center gap-x-4 gap-y-3 rounded-full border border-slate-200 bg-slate-50 px-10 py-3.5 text-xs shadow-slate-200/40 backdrop-blur transition-all duration-300 dark:border-slate-800/60 dark:bg-slate-900/40 dark:shadow-black/30 sm:gap-x-5 sm:px-20"
        >
          {stackItems.map((item, index) => (
            <span key={item.name} className="contents">
              {index > 0 && (
                <span
                  className="select-none text-slate-400 dark:text-slate-600"
                  aria-hidden
                >
                  ·
                </span>
              )}

              <span className="inline-flex items-center gap-2.5">
                <span className="relative flex h-8 w-8 shrink-0 items-center justify-center">
                  {(() => {
                    const Icon = item.icon;

                    return (
                      <Icon
                        className={`relative h-7 w-7 ${item.color}`}
                      />
                    );
                  })()}
                </span>

                <span className="font-mono text-[11px] font-medium text-slate-700 dark:text-white">
                  {item.name}
                </span>
              </span>
            </span>
          ))}

          <span
            className="select-none text-slate-400 dark:text-slate-600"
            aria-hidden
          >
            ·
          </span>

          <span className="font-mono text-[11px] font-medium text-slate-700 dark:text-white">
            and more
          </span>
        </motion.div> */}
      </div>
    </section>
  );
}