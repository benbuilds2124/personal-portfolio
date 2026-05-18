import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, ExternalLink, ChevronDown } from 'lucide-react';
import { getSkillIcon } from '../utils/icons';

import shiftLogo from '../../assets/shift-technology.jpg';
import xmrLogo from '../../assets/xmr-gg.jpg';
import exoworldsLogo from '../../assets/exoworlds-logo.jpg';
import dkvLogo from '../../assets/dkv-logo.jpg';

const experiences = [
  {
    id: 1,
    role: "Senior Frontend Engineer | AI-Powered Applications",
    company: "Shift Technology",
    companyUrl: "https://www.shift-technology.com/",
    date: "Dec 2024 - Present",
    location: "Remote / France",
    current: true,
    logo: shiftLogo,
    description: [
    ],
    skills: ["Next.js", "React Native", "Node.js", "TypeScript", "AI Integration"]
  },
  {
    id: 2,
    role: "Senior Frontend Engineer | Real-Time Gaming Platforms",
    company: "XMRPlay Ltd",
    companyUrl: "https://xmr.gg/",
    date: "Aug 2023 - Dec 2024",
    location: "Remote / US",
    current: false,
    logo: xmrLogo,
    description: [
    ],
    skills: ["React.js", "JavaScript", "Architecture", "Performance Optimization"]
  },
  {
    id: 3,
    role: "Frontend Engineer | Web3 Marketplace Platform",
    company: "ExoWorlds",
    companyUrl: "https://exoworlds.io/",
    date: "Aug 2020 - Aug 2023",
    location: "Remote / Canada",
    current: false,
    logo: exoworldsLogo,
    description: [
    ],
    skills: ["React.js", "Node.js", "Full Stack Development", "API Design"]
  },
  {
    id: 4,
    role: "Frontend Developer",
    company: "Deep Knowledge Group",
    companyUrl: "https://www.dkv.global/",
    date: "Dec 2018 - Aug 2020",
    location: "Remote / Hong Kong",
    current: false,
    logo: dkvLogo,
    description: [
    ],
    skills: ["React.js", "Node.js", "MongoDB", "REST APIs", "E-commerce"]
  }
];

export default function Experience() {
  const [expandedId, setExpandedId] = useState<number>(1);
  const expandedIndex = experiences.findIndex(exp => exp.id === expandedId);

  return (
    <section id="experience" className="w-full relative py-8">
      <div className="mb-6 sm:pl-4">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl font-medium leading-tight tracking-tight text-slate-900 dark:text-slate-50"
        >
          My <span className="font-dancing-script font-bold text-blue-500">Work</span> History.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-1.5 text-slate-500 dark:text-slate-400 font-mono text-[10px] uppercase tracking-widest"
        >
          Some of my latest works
        </motion.p>
      </div>

      <div className="relative">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative pl-8 border-l-2 border-transparent ml-4 sm:ml-6 ${index !== experiences.length - 1 ? 'pb-6' : ''}`}
          >
            <div className="absolute -left-[2px] top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800" />
            <motion.div
              initial={false}
              animate={{
                height: expandedIndex === -1 ? '0%' : (index < expandedIndex ? '100%' : index === expandedIndex ? '20px' : '0%')
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute -left-[2px] top-0 w-[2px] bg-blue-500 origin-top"
            />
            <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full ring-4 ring-white dark:ring-slate-950 transition-colors duration-300 ${index <= expandedIndex ? 'bg-blue-500' : 'bg-slate-300 dark:bg-slate-700'}`}></div>

            <div className="group -ml-2">
              <div
                className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 cursor-pointer select-none"
                onClick={() => setExpandedId(expandedId === exp.id ? 0 : exp.id)}
              >
                <div className="flex items-start gap-3">
                  <img alt={exp.company} loading="lazy" className="w-10 h-10 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 object-cover mt-0.5" src={exp.logo} />
                  <div>
                    <h3 className="text-base font-medium font-inter text-slate-900 dark:text-slate-100 flex flex-wrap items-center gap-2 leading-tight">
                      {exp.role}
                      {exp.current && (
                        <span className="inline-flex gap-1 items-center px-1.5 py-0.5 rounded-full text-[9px] font-medium bg-emerald-50 border-emerald-200 border text-emerald-700 dark:bg-emerald-900/30 dark:border-emerald-800 dark:text-emerald-300">
                          <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></span>
                          Current
                        </span>
                      )}
                    </h3>
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 font-medium text-sm mt-1 flex items-center gap-1 w-fit transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {exp.company}
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    ) : (
                      <div className="text-slate-600 dark:text-slate-400 font-medium text-sm mt-1 flex items-center gap-1">
                        {exp.company}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start w-full sm:w-auto text-[11px] text-slate-600 dark:text-slate-400 font-mono gap-1 mt-2 sm:mt-0 relative">
                  <div className="flex flex-col sm:items-end gap-1">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      <span>{exp.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                      📍
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <div className="absolute sm:mr-0 sm:mt-1 lg:mt-9 ml-64">
                    <motion.div
                      animate={{ rotate: expandedId === exp.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                      <ChevronDown className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                    </motion.div>
                  </div>
                </div>
              </div>

              <AnimatePresence initial={false}>
                {expandedId === exp.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="sm:ml-14">
                      <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400 list-disc list-outside ml-4 mb-3">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="leading-relaxed">{desc}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.skills.map((skill, i) => {
                          const Icon = getSkillIcon(skill);
                          return (
                            <span key={i} className="flex items-center gap-1 px-2 py-0.5 text-[9px] font-mono rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/50">
                              <Icon className="w-3 h-3" strokeWidth={1.2} />
                              {skill}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
