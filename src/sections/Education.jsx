import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import SectionTag from '@/components/SectionTag';
import useReveal from '@/hooks/useReveal';

const educationData = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    specialization: 'AI & Data Science',
    institution: 'Kerala Technological University (KTU)',
    year: '2022 - 2026',
    cgpa: '8.5 / 10',
    highlights: ['Specialization in AI & Data Science', 'Active in hackathons and coding competitions'],
  },
  // Add more education entries as needed
];

export default function Education() {
  const [ref, isVisible] = useReveal();

  return (
    <section id="education" className="py-28 bg-surface/40">
      <div ref={ref} className="container mx-auto px-6">
        <SectionTag>education</SectionTag>

        <h2 className={`font-display text-4xl md:text-5xl text-ink leading-tight mb-16 ${
          isVisible ? 'reveal' : 'opacity-0'
        }`}>
          Academic Background
        </h2>

        <div className="space-y-6">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className={`card p-6 border border-border hover:border-accent/50 transition-all ${
                isVisible ? 'reveal' : 'opacity-0'
              }`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 pt-1">
                  <GraduationCap className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-grow">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="font-display text-xl text-ink font-semibold">
                        {edu.degree}
                      </h3>
                      <p className="text-accent font-medium mt-1">
                        {edu.specialization}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-muted text-sm">
                      <Calendar size={16} />
                      {edu.year}
                    </div>
                  </div>

                  <p className="text-muted mb-3">{edu.institution}</p>

                  {edu.cgpa && (
                    <div className="flex items-center gap-2 text-sm text-ink mb-3">
                      <Award size={16} className="text-accent" />
                      <span>CGPA: {edu.cgpa}</span>
                    </div>
                  )}

                  {edu.highlights && edu.highlights.length > 0 && (
                    <ul className="space-y-1">
                      {edu.highlights.map((highlight, i) => (
                        <li key={i} className="text-muted text-sm flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
