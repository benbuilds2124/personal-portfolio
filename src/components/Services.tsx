import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Code2,
  BrainCircuit,
  LayoutTemplate,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const servicesData = [
  {
    title: "AI Integration & Automation",
    description:
      "Integrating LLMs, conversational AI, intelligent workflows, and automation systems into scalable digital products.",
    icon: Sparkles,
    number: "01",
    color: "text-rose-500",
    glow: "from-rose-500/20 to-orange-500/10",
  },
  {
    title: "AI-Powered Frontend Development",
    description:
      "Building modern AI-native user experiences including streaming chat interfaces, copilots, and conversational workflows.",
    icon: BrainCircuit,
    number: "02",
    color: "text-emerald-500",
    glow: "from-emerald-500/20 to-cyan-500/10",
  },
  {
    title: "Real-Time Web Applications",
    description:
      "Developing high-performance real-time systems with live updates, streaming data, analytics, and interactive experiences.",
    icon: LayoutTemplate,
    number: "03",
    color: "text-violet-500",
    glow: "from-violet-500/20 to-fuchsia-500/10",
  },
  {
    title: "Full Stack Architecture",
    description:
      "Designing scalable application architectures with modern frontend frameworks, backend services, APIs, databases, and cloud infrastructure.",
    icon: Code2,
    number: "04",
    color: "text-blue-500",
    glow: "from-blue-500/20 to-cyan-500/10",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % servicesData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="services"
      className="relative flex min-h-[55vh] w-full flex-col py-8"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[280px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[120px] dark:bg-blue-500/10" />
      </div>

      {/* Header */}
      <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xl font-medium leading-tight tracking-tight text-slate-900 dark:text-slate-50 md:text-2xl"
          >
            My{" "}
            <span className="font-dancing-script font-bold text-amber-500">
              Services
            </span>{" "}
            & Expertise.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-1.5 font-mono text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400"
          >
            What I can do for you
          </motion.p>
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        {/* Left Side */}
        <div className="order-2 flex flex-col justify-center space-y-2 lg:order-1">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              onClick={() => setActiveIndex(index)}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={`group relative cursor-pointer rounded-e-xl border px-5 py-5 transition-all duration-300 ${
                activeIndex === index
                  ? "border-slate-200 bg-slate-100/80 shadow-sm shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-black/30"
                  : "border-transparent hover:border-slate-200 hover:bg-slate-50/70 dark:hover:border-slate-800 dark:hover:bg-slate-900/40"
              }`}
            >
              {/* Active Indicator */}
              <div className="absolute left-0 top-0 h-full w-[3px] overflow-hidden rounded-full">
                {activeIndex === index && (
                  <motion.div
                    layoutId="activeService"
                    className="h-full w-full rounded-full bg-blue-500"
                  />
                )}
              </div>

              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3
                    className={`text-sm font-medium transition-colors duration-300 ${
                      activeIndex === index
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white"
                    }`}
                  >
                    {service.title}
                  </h3>
                </div>

                <div
                  className={`font-mono text-[10px] font-semibold tracking-widest ${
                    activeIndex === index
                      ? "text-blue-500"
                      : "text-slate-400 dark:text-slate-600"
                  }`}
                >
                  {service.number}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="order-1 h-[280px] w-full lg:order-2 lg:h-[320px]"
        >
          <div className="group relative flex h-full w-full flex-col overflow-hidden rounded-[30px] border border-slate-200/70 bg-white/70 p-6 shadow-2xl shadow-slate-200/50 backdrop-blur-xl transition-all duration-500 dark:border-slate-800/60 dark:bg-slate-900/50 dark:shadow-black/40">
            {/* Background Pattern */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.04] dark:opacity-[0.08] bg-[radial-gradient(#64748b_1.5px,transparent_1.5px)] [background-size:22px_22px]" />

            {/* Glow */}
            <div
              className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${servicesData[activeIndex].glow} opacity-70 blur-3xl`}
            />

            {/* Number */}
            <div className="absolute right-6 top-6 font-mono text-xs font-bold tracking-widest text-slate-300 dark:text-slate-700">
              {servicesData[activeIndex].number}
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col items-center"
                >
                  {/* Icon */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative mb-6 flex h-18 w-18 items-center justify-center rounded-2xl border border-slate-200/70 bg-white/80 shadow-lg backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/80"
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 to-transparent dark:from-white/5 dark:to-transparent" />

                    {(() => {
                      const Icon = servicesData[activeIndex].icon;

                      return (
                        <Icon
                          className={`relative z-10 h-8 w-8 ${servicesData[activeIndex].color}`}
                        />
                      );
                    })()}
                  </motion.div>

                  {/* Text */}
                  <div className="max-w-md">
                    <h4 className="mb-4 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                      {servicesData[activeIndex].title}
                    </h4>

                    <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">
                      {servicesData[activeIndex].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}