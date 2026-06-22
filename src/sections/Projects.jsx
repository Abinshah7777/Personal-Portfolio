import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import SectionTag from '@/components/SectionTag';
import ProjectCover from '@/components/ProjectCover';
import useReveal from '@/hooks/useReveal';

const projects = [
  {
    title: 'LearnHub — Course Management Portal',
    label: 'LMS',
    type: 'lms',
    desc: 'A full LMS with JWT auth, role-based access control, Multer file uploads, and PDFKit-generated certificates on completion.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'PDFKit'],
    link: 'https://github.com/Abinshah7777/LearnHub',
  },
  {
    title: 'Catalogue Management System',
    label: 'API',
    type: 'api',
    desc: 'A full-stack inventory system built with Flask and a RESTful API layer to handle stock workflows end to end.',
    tags: ['Flask', 'Python', 'REST API', 'SQLite'],
    link: 'https://github.com/Abinshah7777/E-Commerce-Catalogue-Manager',
  },
  {
    title: 'Forever — E-commerce Frontend',
    label: 'UI',
    type: 'ecommerce',
    desc: 'A React + Vite storefront with Tailwind CSS, built from a guided tutorial and extended with independent component work.',
    tags: ['React', 'Vite', 'Tailwind CSS'],
    link: 'https://github.com/Abinshah7777/E-Commerce-REACT.JS-'
  },
  {
    title: 'React Weather App',
    label: 'WEATHER',
    type: 'weather',
    desc: 'A real-time weather application built with React that displays current weather, forecasts, and location-based data with a responsive design.',
    tags: ['React', 'Tailwind CSS', 'JavaScript', 'Weather API'],
    link: 'https://github.com/Abinshah7777/Weather-app',
  },
];

export default function Projects() {
  const [ref, isVisible] = useReveal();

  return (
    <section id="projects" className="py-28 bg-surface border-y border-border">
      <div ref={ref} className="container mx-auto px-6">
        <div className={`max-w-2xl mb-16 ${isVisible ? 'reveal' : 'opacity-0'}`}>
          <SectionTag>projects</SectionTag>
          <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight">
            Things I've <span className="italic text-muted">shipped.</span>
          </h2>
          <p className="text-muted mt-4 leading-relaxed">
            A mix of guided builds extended past their tutorials, and independent
            projects built to solve a specific backend or data problem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              key={proj.title}
              className={`group card card-hover overflow-hidden flex flex-col ${isVisible ? 'reveal' : 'opacity-0'}`}
              style={{ animationDelay: `${idx * 90}ms` }}
            >
              <div className="aspect-[16/9] overflow-hidden border-b border-border">
                <ProjectCover label={proj.label} type={proj.type} />
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="flex justify-between items-start gap-3">
                  <h3 className="font-medium text-ink leading-snug">{proj.title}</h3>
                  <ArrowUpRight
                    size={18}
                    className="text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-0.5"
                  />
                </div>
                <p className="text-sm text-muted leading-relaxed">{proj.desc}</p>
                <div className="flex flex-wrap gap-2 pt-1 mt-auto">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2.5 py-1 rounded-full bg-accent-soft text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* See all projects link */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://github.com/Abinshah7777"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-accent bg-accent/5 text-accent hover:bg-accent/10 transition-colors font-medium"
          >
            See all projects on GitHub
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
