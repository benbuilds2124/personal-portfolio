import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ExternalLink, Github, Images } from 'lucide-react';
import { BiLogoPlayStore } from 'react-icons/bi';
import { FaAppStore } from 'react-icons/fa';
import { getSkillIcon } from '../utils/icons';
import {
  getSkillColor,
  getProjectGalleryImages,
  hasProjectLink,
  type Project,
} from '../data/projects';
import ProjectGalleryModal from './ProjectGalleryModal';
import MarqueeTitle from './MarqueeTitle';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const showExternalLink = hasProjectLink(project);
  const galleryImages = getProjectGalleryImages(project);
  const detailPath = `/projects/${project.slug}`;

  const openGallery = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveImageIndex(0);
    setIsGalleryOpen(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="group relative flex flex-col bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/50 hover:z-20 transition-all duration-500 ease-out h-full"
      >
        <Link
          to={detailPath}
          className="relative w-full aspect-[4/3] overflow-hidden bg-slate-200 dark:bg-slate-800 shrink-0 rounded-t-2xl block"
          aria-label={`View ${project.title} details`}
        >
          <div className="absolute inset-0 opacity-40 dark:opacity-20 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <img
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:rotate-1 opacity-90 group-hover:opacity-100"
            src={project.image}
          />
          <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-slate-900/60 sm:from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="px-3 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
              View Project
            </span>
          </div>
        </Link>

        <div className="flex flex-col grow p-4 sm:p-5 space-y-2 justify-start rounded-b-2xl">
          <div className="flex flex-col gap-2 min-w-0">
            <div className="flex items-center justify-end gap-2 flex-wrap">
              <button
                type="button"
                aria-label={`View ${project.title} images`}
                onClick={openGallery}
                className="p-1.5 bg-white dark:bg-slate-800 rounded-full shadow-sm text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shrink-0 cursor-pointer"
              >
                <Images className="w-3.5 h-3.5" />
              </button>
              {project.playStoreLink && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on Play Store`}
                  href={project.playStoreLink}
                  onClick={(e) => e.stopPropagation()}
                  className="p-1.5 bg-white dark:bg-slate-800 rounded-full shadow-sm text-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors shrink-0"
                >
                  <BiLogoPlayStore className="w-3.5 h-3.5" />
                </a>
              )}
              {project.appStoreLink && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on App Store`}
                  href={project.appStoreLink}
                  onClick={(e) => e.stopPropagation()}
                  className="p-1.5 bg-white dark:bg-slate-800 rounded-full shadow-sm text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shrink-0"
                >
                  <FaAppStore className="w-3.5 h-3.5" />
                </a>
              )}
              {project.githubLink && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  href={project.githubLink}
                  onClick={(e) => e.stopPropagation()}
                  className="p-1.5 bg-white dark:bg-slate-800 rounded-full shadow-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors shrink-0"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
              )}
              {showExternalLink && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title} website`}
                  href={project.link}
                  onClick={(e) => e.stopPropagation()}
                  className="p-1.5 bg-white dark:bg-slate-800 rounded-full shadow-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors shrink-0"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
            <Link to={detailPath} className="block min-w-0 hover:opacity-80 transition-opacity">
              <MarqueeTitle text={project.title} />
            </Link>
          </div>

          <Link
            to={detailPath}
            className="relative group/desc block min-w-0 hover:opacity-80 transition-opacity"
          >
            <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
              {project.description}
            </p>
          </Link>

          <Link to={detailPath} className="pt-1.5 flex flex-wrap gap-1.5 hover:opacity-80 transition-opacity">
            {project.tags.slice(0, 4).map((tag, i) => {
              const Icon = getSkillIcon(tag);
              return (
                <span
                  key={i}
                  className="flex items-center gap-1 px-2 py-0.5 text-[9px] uppercase tracking-wider font-mono rounded-md bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400"
                >
                  <Icon className={`w-3 h-3 ${getSkillColor(tag)}`} strokeWidth={1.2} />
                  {tag}
                </span>
              );
            })}
            {project.tags.length > 4 && (
              <span className="flex items-center px-2 py-0.5 text-[9px] uppercase tracking-wider font-mono rounded-md bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500">
                +{project.tags.length - 4} more
              </span>
            )}
          </Link>
        </div>
      </motion.div>

      <ProjectGalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        title={project.title}
        images={galleryImages}
        activeIndex={activeImageIndex}
        onActiveIndexChange={setActiveImageIndex}
      />
    </>
  );
}
