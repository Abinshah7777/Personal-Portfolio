import React from 'react';

export default function SectionTag({ children }) {
  return (
    <p className="tag-label mb-3 flex items-center gap-2">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </p>
  );
}
