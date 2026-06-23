import React from 'react';
import { Trophy, ExternalLink, Calendar } from 'lucide-react';
import SectionTag from '@/components/SectionTag';
import useReveal from '@/hooks/useReveal';
import internCert from '@/assets/Intern Certificate of Abinshah PM .pdf';

const certificationsData = [
  {
    name: 'Internship Completion Certificate',
    platform: 'Litmus7',
    year: '2024',
    credentialUrl: internCert,
    description: 'Internship at Litmus7 - Building scalable backend systems and APIs.',
  },
  {
    name: 'IT Workshop — 5G & IoT',
    platform: 'IICT GMBH',
    year: '2025',
    credentialUrl: '#',
    description: 'Completed introduction to modern 5G cellular systems, networking layers, and IoT hardware interaction frameworks.',
  },
  // Add more certifications as needed
];

export default function Certifications() {
  const [ref, isVisible] = useReveal();

  return (
    <section id="certifications" className="py-28">
      <div ref={ref} className="container mx-auto px-6">
        <SectionTag>certifications</SectionTag>

        <h2 className={`font-display text-4xl md:text-5xl text-ink leading-tight mb-16 ${
          isVisible ? 'reveal' : 'opacity-0'
        }`}>
          Professional Credentials
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificationsData.map((cert, idx) => (
            <div
              key={idx}
              className={`card p-5 border border-border hover:border-accent/50 transition-all group ${
                isVisible ? 'reveal' : 'opacity-0'
              }`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <Trophy className="w-6 h-6 text-accent flex-shrink-0" />
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity"
                  title="View credential"
                >
                  <ExternalLink size={18} className="text-accent hover:text-accent/80" />
                </a>
              </div>

            <div>
              <h3 className="font-display text-lg text-ink font-semibold mb-2">
                {cert.name}
              </h3>

              <p className="text-muted text-sm mb-3">{cert.platform}</p>

              {cert.description && (
                <p className="text-muted text-sm mb-3">{cert.description}</p>
              )}

              <div className="flex items-center gap-2 text-muted text-xs">
                <Calendar size={14} />
                <span>{cert.year}</span>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}