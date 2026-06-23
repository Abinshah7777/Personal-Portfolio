import React, { useEffect, useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import Button from '@/components/Button';
import abinshahImg from '@/assets/abinshah.jpg';
import resumeCV from '@/assets/Abinshah_CV.pdf';

const LOG_LINES = [
  '$ whoami',
  '> abinshah — software engineer',
  '$ status --current',
  '> intern @ litmus7 · b.tech AI & DS, ktu',
  '$ stack --primary',
  '> python · flask · react · node · mongodb',
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= LOG_LINES.length) {
      const resetTimer = setTimeout(() => setVisibleLines(0), 2000);
      return () => clearTimeout(resetTimer);
    }
    const timer = setTimeout(() => setVisibleLines((v) => v + 1), 450);
    return () => clearTimeout(timer);
  }, [visibleLines]);

  return (
    <section className="relative pt-24 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-24 overflow-hidden w-full">
      <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Left: statement */}
        <div className="space-y-6 sm:space-y-7 max-w-full">
          <span className="tag-label inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 max-w-full">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
            <span className="text-xs sm:text-sm text-balance">Open to internships &amp; junior roles</span>
          </span>

          {/* Adjusted responsive text scaling for extra small viewports */}
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl leading-[1.15] sm:leading-[1.08] text-ink break-words">
            Backend systems,
            <br />
            built to <span className="italic text-accent">hold weight.</span>
          </h1>

          <p className="text-sm sm:text-lg text-muted max-w-md leading-relaxed">
            I'm Abinshah — a software engineer studying AI &amp; Data Science, currently
            building catalogue and course-management systems with Python, Flask,
            and the MERN stack.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a href="#contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto justify-center">
                Let's talk <ArrowRight size={17} />
              </Button>
            </a>
            <a href={resumeCV} download="Abinshah_CV.pdf" className="w-full sm:w-auto">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto justify-center">
                Resume <Download size={16} />
              </Button>
            </a>
          </div>
        </div>

        {/* Right: profile photo + terminal */}
        {/* Removed rigid shrink-0 properties and optimized layout wrappers */}
        <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row justify-center items-center gap-6 xl:gap-6 w-full max-w-full">
          
          {/* Photo */}
          <div className="relative w-full max-w-[240px] h-64 sm:h-80 xs:max-w-[280px]">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent via-accent/20 to-background opacity-40 blur-2xl" />
            <img
              src={abinshahImg}
              alt="Abinshah"
              className="relative w-full h-full rounded-2xl object-cover border-2 border-accent/30 shadow-[0_40px_80px_-40px_rgba(21,23,28,0.18)]"
            />
          </div>

          {/* Terminal snippet */}
          <div className="card p-5 shadow-[0_40px_80px_-40px_rgba(21,23,28,0.18)] w-full max-w-[320px] sm:max-w-xs">
            <div className="flex items-center gap-2 pb-3 border-b border-border mb-4">
              <span className="h-2.5 w-2.5 rounded-full border border-border" style={{ backgroundColor: '#f5b8a8' }} />
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: '#f5dca8' }} />
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: '#b8e0c4' }} />
              <span className="font-mono text-xs text-muted ml-2">status.sh</span>
            </div>
            <div className="font-mono text-xs space-y-2 min-h-[150px]">
              {LOG_LINES.slice(0, visibleLines).map((line, idx) => (
                <p
                  key={idx}
                  className={line.startsWith('$') ? 'text-ink' : 'text-muted pl-2'}
                >
                  {line}
                </p>
              ))}
              {visibleLines < LOG_LINES.length && (
                <span className="caret inline-block w-1.5 h-3 bg-ink align-middle" />
              )}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}