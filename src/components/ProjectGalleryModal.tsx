import { useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  images: string[];
  activeIndex: number;
  onActiveIndexChange: (index: number) => void;
}

export default function ProjectGalleryModal({
  isOpen,
  onClose,
  title,
  images,
  activeIndex,
  onActiveIndexChange,
}: ProjectGalleryModalProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const goPrev = useCallback(() => {
    onActiveIndexChange((activeIndex - 1 + images.length) % images.length);
  }, [activeIndex, images.length, onActiveIndexChange]);

  const goNext = useCallback(() => {
    onActiveIndexChange((activeIndex + 1) % images.length);
  }, [activeIndex, images.length, onActiveIndexChange]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [activeIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, goPrev, goNext]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} portfolio gallery`}
        >
          <button
            type="button"
            aria-label="Close gallery"
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/70 dark:bg-slate-950/80 backdrop-blur-sm cursor-pointer"
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-5xl max-h-[90vh] flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 px-4 sm:px-5 py-3 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 shrink-0">
              <div className="min-w-0">
                <h3 className="font-mono text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-100 truncate">
                  {title}
                </h3>
                <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-0.5">
                  Portfolio · {activeIndex + 1} / {images.length} · scroll to view details
                </p>
              </div>
              <button
                type="button"
                aria-label="Close gallery"
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 dark:hover:text-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex flex-1 flex-row min-h-0 overflow-hidden">
              <div className="w-[72px] sm:w-28 shrink-0 flex flex-col gap-2 p-2 sm:p-3 overflow-y-auto border-r border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 [background-image:radial-gradient(#cbd5e1_1px,transparent_1px)] dark:[background-image:radial-gradient(#334155_1px,transparent_1px)] [background-size:12px_12px]">
                {images.map((src, index) => (
                  <button
                    key={`${src}-${index}`}
                    type="button"
                    aria-label={`View image ${index + 1}`}
                    aria-current={index === activeIndex ? 'true' : undefined}
                    onClick={() => onActiveIndexChange(index)}
                    className={`group relative w-full aspect-square rounded-md overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                      index === activeIndex
                        ? 'border-blue-500 dark:border-blue-400 ring-2 ring-blue-500/25 dark:ring-blue-400/25 scale-[1.02]'
                        : 'border-slate-200/80 dark:border-slate-700 opacity-70 hover:opacity-100 hover:border-slate-300 dark:hover:border-slate-600'
                    }`}
                  >
                    <img
                      src={src}
                      alt={`${title} thumbnail ${index + 1}`}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </button>
                ))}
              </div>

              <div className="relative flex-1 min-w-0 min-h-0 flex flex-col bg-slate-100 dark:bg-slate-950">
                <div
                  ref={scrollRef}
                  className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden overscroll-contain scroll-smooth"
                >
                  <motion.img
                    key={images[activeIndex]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    src={images[activeIndex]}
                    alt={`${title} screenshot ${activeIndex + 1}`}
                    className="w-full h-auto max-w-full block"
                    draggable={false}
                  />
                </div>

                <div className="pointer-events-none absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-slate-100 dark:from-slate-950 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-slate-100 dark:from-slate-950 to-transparent" />

                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      aria-label="Previous image"
                      onClick={goPrev}
                      className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 shadow-md hover:bg-white dark:hover:bg-slate-800 transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      aria-label="Next image"
                      onClick={goNext}
                      className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 shadow-md hover:bg-white dark:hover:bg-slate-800 transition-colors cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
