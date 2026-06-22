import React from 'react';
import { Code2, Gauge, Users2, Lightbulb } from 'lucide-react';
import SectionTag from '@/components/SectionTag';
import useReveal from '@/hooks/useReveal';

const highlights = [
  { icon: Code2, title: 'Clean code', desc: 'Predictable, self-documenting structures that the next engineer can pick up without a walkthrough.' },
  { icon: Gauge, title: 'Performance', desc: 'Optimizing queries, algorithms, and the overhead micro-frameworks tend to hide.' },
  { icon: Users2, title: 'Collaboration', desc: 'Comfortable in cross-functional teams, working off Git workflows and shared standards.' },
  { icon: Lightbulb, title: 'Curiosity', desc: 'Extending tutorials and assignments into independently-built, production-shaped projects.' },
];

export default function About() {
  const [ref, isVisible] = useReveal();

  return (
    <section id="about" className="py-28">
      <div ref={ref} className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        {/* Left: bio */}
        <div className={`space-y-7 ${isVisible ? 'reveal' : 'opacity-0'}`}>
          <SectionTag>about</SectionTag>
          <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight">
            Building the backend,
            <br />
            <span className="italic text-muted">one system at a time.</span>
          </h2>

          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              I'm a Computer Science and Engineering student specializing in AI and Data
              Science at KTU. My focus sits on backend components and API infrastructure —
              the layer most people never see, but always notice when it's slow.
            </p>
            <p>
              I bridge theoretical compute logic with real, scalable architecture:
              turning structured data into services that hold up under traffic.
            </p>
          </div>

          <blockquote className="border-l-2 border-accent pl-5 py-1 font-display italic text-lg text-ink">
            "Engineer the data layer first. The interface is easier to fix later than
            a database schema."
          </blockquote>
        </div>

        {/* Right: highlight grid */}
        <div
          className={`grid sm:grid-cols-2 gap-5 ${isVisible ? 'reveal' : 'opacity-0'}`}
          style={{ animationDelay: '120ms' }}
        >
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="card card-hover p-6">
                <div className="w-11 h-11 rounded-xl bg-accent-soft flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-medium text-ink mb-1.5">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
