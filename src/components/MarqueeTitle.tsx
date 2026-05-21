import { useRef, useState, useEffect } from 'react';

interface MarqueeTitleProps {
  text: string;
  className?: string;
}

const MARQUEE_GAP_PX = 48;
const MARQUEE_SPEED_PX_PER_SEC = 24;

export default function MarqueeTitle({ text, className = '' }: MarqueeTitleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const segmentRef = useRef<HTMLSpanElement>(null);
  const [overflows, setOverflows] = useState(false);
  const [duration, setDuration] = useState('24s');

  useEffect(() => {
    const measure = () => {
      const container = containerRef.current;
      const segment = segmentRef.current;
      if (!container || !segment) return;

      const overflow = segment.scrollWidth - container.clientWidth;
      const doesOverflow = overflow > 2;
      setOverflows(doesOverflow);

      if (doesOverflow) {
        const segmentWidth = segment.offsetWidth;
        const seconds = Math.max(20, (segmentWidth + MARQUEE_GAP_PX) / MARQUEE_SPEED_PX_PER_SEC);
        setDuration(`${seconds}s`);
      }
    };

    measure();
    const observer = new ResizeObserver(measure);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [text]);

  return (
    <div ref={containerRef} className="overflow-hidden min-w-0 w-full">
      <h3
        className={`font-mono text-lg font-semibold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 ${className}`}
      >
        {overflows ? (
          <span
            className="inline-flex whitespace-nowrap animate-project-title-marquee will-change-transform"
            style={{ '--marquee-duration': duration } as React.CSSProperties}
          >
            <span ref={segmentRef} className="inline-block shrink-0" style={{ paddingRight: MARQUEE_GAP_PX }}>
              {text}
            </span>
            <span aria-hidden className="inline-block shrink-0" style={{ paddingRight: MARQUEE_GAP_PX }}>
              {text}
            </span>
          </span>
        ) : (
          <span ref={segmentRef} className="inline-block whitespace-nowrap">
            {text}
          </span>
        )}
      </h3>
    </div>
  );
}
