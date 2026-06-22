import React from 'react';
import SectionTag from '@/components/SectionTag';
import useReveal from '@/hooks/useReveal';

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'Flask', 'REST API', 'JWT Auth'],
  },
  {
    category: 'Database',
    skills: ['MongoDB', 'SQLite', 'Data Modeling', 'Query Optimization'],
  },
  {
    category: 'Tools & Other',
    skills: ['Git', 'PDFKit', 'Multer', 'Postman', 'VS Code', 'Linux'],
  },
];

export default function Skills() {
  const [ref, isVisible] = useReveal();

  return (
    <section id="skills" className="py-28 bg-surface border-b border-border">
      <div ref={ref} className="container mx-auto px-6">
        <div className={`max-w-2xl mb-16 ${isVisible ? 'reveal' : 'opacity-0'}`}>
          <SectionTag>skills</SectionTag>
          <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight">
            Technologies <span className="italic text-muted">I work with.</span>
          </h2>
          <p className="text-muted mt-4 leading-relaxed">
            A curated set of tools and frameworks I've used to build production-grade
            systems. Constantly learning and expanding.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={category.category}
              className={`card p-6 ${isVisible ? 'reveal' : 'opacity-0'}`}
              style={{ animationDelay: `${idx * 90}ms` }}
            >
              <h3 className="font-medium text-ink text-lg mb-4">{category.category}</h3>
              <div className="space-y-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span className="text-sm text-muted">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
