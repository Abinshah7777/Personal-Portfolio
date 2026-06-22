import React from 'react';
import { Download } from 'lucide-react';
import SectionTag from '@/components/SectionTag';
import useReveal from '@/hooks/useReveal';
import internCertificate from '@/assets/Intern Certificate of Abinshah PM .pdf';

const experiences = [
  {
    period: '2025 — Present',
    role: 'Software Engineering Intern',
    company: 'Litmus7',
    desc: 'Developing transactional catalogue management systems using Python and Flask micro-frameworks.',
    tech: ['Python', 'Flask', 'REST APIs', 'SQL'],
  },
  {
    period: '2024 — 2028',
    role: 'B.Tech, AI & Data Science',
    company: 'KTU',
    desc: 'Building foundations in algorithmic complexity, data pipelines, and machine learning models.',
    tech: ['C', 'C++', 'Java', 'Data Structures'],
  },
];

export default function Experience() {
  const [ref, isVisible] = useReveal();

  return (
    <section id="experience" className="py-28">
      <div ref={ref} className="container mx-auto px-6">
        <div className={`max-w-2xl mb-16 ${isVisible ? 'reveal' : 'opacity-0'}`}>
          <SectionTag>experience</SectionTag>
          <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight">
            Career <span className="italic text-muted">so far.</span>
          </h2>
        </div>

        <div className="relative max-w-3xl">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`relative pl-10 pb-12 last:pb-0 ${isVisible ? 'reveal' : 'opacity-0'}`}
              style={{ animationDelay: `${idx * 120}ms` }}
            >
              <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full bg-accent ring-4 ring-accent-soft" />
              <p className="font-mono text-xs text-accent mb-2">{exp.period}</p>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-display text-2xl text-ink">{exp.role}</h3>
                {exp.role === 'Software Engineering Intern' && (
                  <a
                    href={internCertificate}
                    download="Internship_Certificate_Abinshah.pdf"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-accent-soft text-accent rounded-lg hover:bg-accent hover:text-white transition-all"
                    title="Download internship certificate"
                  >
                    <Download size={14} />
                    Certificate
                  </a>
                )}
              </div>
              <p className="text-muted text-sm font-medium mt-1">{exp.company}</p>
              <p className="text-muted text-sm mt-3 max-w-xl leading-relaxed">{exp.desc}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-2.5 py-1 rounded-full border border-border text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
