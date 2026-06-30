import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <section className="space-y-4 py-8">
      <div className="mb-6 sm:pl-4">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 mb-4 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Home
        </Link>
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl md:text-2xl font-medium leading-tight tracking-tight text-slate-900 dark:text-slate-50"
        >
          All{" "}
          <span className="font-dancing-script font-bold text-emerald-500">
            Projects
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-1.5 text-slate-500 dark:text-slate-400 font-mono text-[10px] uppercase tracking-widest"
        >
          A complete showcase of my work
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
