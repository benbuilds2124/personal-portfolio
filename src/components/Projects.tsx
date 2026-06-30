import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="space-y-4 py-8">
      <div className="mb-6 sm:pl-4">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl font-medium leading-tight tracking-tight text-slate-900 dark:text-slate-50"
        >
          My <span className="font-dancing-script font-bold text-emerald-500">Projects</span> Featured.
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex justify-center mt-6"
      >
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
        >
          See all Projects
        </Link>
      </motion.div>
    </section>
  );
}
