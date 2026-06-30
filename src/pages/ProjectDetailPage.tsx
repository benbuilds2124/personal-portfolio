import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStore } from "react-icons/fa";
import ProjectGalleryModal from "../components/ProjectGalleryModal";
import {
  getProjectBySlug,
  getProjectGalleryImages,
  getSkillColor,
  hasProjectLink,
} from "../data/projects";
import { getSkillIcon } from "../utils/icons";

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const galleryImages = getProjectGalleryImages(project);
  const showExternalLink = hasProjectLink(project);

  const openGallery = (index = 0) => {
    setActiveImageIndex(index);
    setIsGalleryOpen(true);
  };

  return (
    <section className="space-y-8 py-8">
      <div className="sm:pl-4">
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 mb-6 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <button
            type="button"
            onClick={() => openGallery(0)}
            className="relative w-full aspect-video sm:aspect-21/9 overflow-hidden rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-slate-200 dark:bg-slate-800 cursor-pointer group"
            aria-label={`View ${project.title} screenshots`}
          >
            <div className="absolute inset-0 opacity-40 dark:opacity-20 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] bg-size:[16px_16px]" />
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/50 via-transparent to-transparent" />
            {galleryImages.length > 1 && (
              <span className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                {galleryImages.length} screenshots
              </span>
            )}
          </button>

          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="space-y-2 min-w-0">
              <p className="font-mono text-[10px] uppercase tracking-widest text-emerald-500">
                Project Detail
              </p>
              <h1 className="text-2xl md:text-3xl font-medium leading-tight tracking-tight text-slate-900 dark:text-slate-50">
                {project.title}
              </h1>
            </div>

            <div className="flex items-center gap-2 flex-wrap shrink-0">
              {project.playStoreLink && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on Play Store`}
                  href={project.playStoreLink}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-emerald-600 dark:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <BiLogoPlayStore className="w-3.5 h-3.5" />
                  Play Store
                </a>
              )}
              {project.appStoreLink && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on App Store`}
                  href={project.appStoreLink}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-blue-600 dark:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <FaAppStore className="w-3.5 h-3.5" />
                  App Store
                </a>
              )}
              {project.githubLink && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  href={project.githubLink}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  GitHub
                </a>
              )}
              {showExternalLink && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title} website`}
                  href={project.link}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-500 text-white hover:bg-emerald-600 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Visit Site
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-slate-50 dark:bg-slate-900/40 p-5 sm:p-6 space-y-3"
      >
        <h2 className="font-mono text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400">
          About this project
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {project.description}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="space-y-4"
      >
        <h2 className="font-mono text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400 sm:pl-1">
          Technologies & Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => {
            const Icon = getSkillIcon(tag);
            return (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] sm:text-xs uppercase tracking-wider font-mono rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400"
              >
                <Icon
                  className={`w-3.5 h-3.5 ${getSkillColor(tag)}`}
                  strokeWidth={1.2}
                />
                {tag}
              </span>
            );
          })}
        </div>
      </motion.div>

      {galleryImages.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <h2 className="font-mono text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400 sm:pl-1">
            Screenshots
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {galleryImages.map((src, index) => (
              <button
                key={`${src}-${index}`}
                type="button"
                onClick={() => openGallery(index)}
                aria-label={`View screenshot ${index + 1}`}
                className="group relative aspect-4/3 overflow-hidden rounded-xl border border-slate-200/60 dark:border-slate-800/60 bg-slate-200 dark:bg-slate-800 cursor-pointer"
              >
                <img
                  src={src}
                  alt={`${project.title} screenshot ${index + 1}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors" />
              </button>
            ))}
          </div>
        </motion.div>
      )}

      <ProjectGalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        title={project.title}
        images={galleryImages}
        activeIndex={activeImageIndex}
        onActiveIndexChange={setActiveImageIndex}
      />
    </section>
  );
}
