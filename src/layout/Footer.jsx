import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const socials = [
  { href: 'https://github.com/your-username', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com/in/your-username', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://twitter.com/your-username', icon: Twitter, label: 'Twitter' },
  { href: 'mailto:youremail@example.com', icon: Mail, label: 'Email' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="font-mono text-xs text-muted">
          © {currentYear} Abinshah P M. Built with React &amp; Tailwind.
        </p>

        <div className="flex gap-5">
          {socials.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="text-muted hover:text-accent transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <a href="#" className="text-sm font-medium text-muted hover:text-ink transition-colors">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
