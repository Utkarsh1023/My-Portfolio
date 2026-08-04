import React from 'react';

export function SectionShell({
  title,
  eyebrow,
  children
}: {
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="scroll-mt-24 mx-auto w-full max-w-6xl px-4 py-14 sm:py-20">
      <div className="mb-8 flex flex-col gap-3">
        {eyebrow ? (
          <div className="text-xs font-semibold tracking-widest text-white/50">{eyebrow}</div>
        ) : null}
        <h2 className="text-2xl font-semibold sm:text-3xl">
          <span className="bg-gradient-to-r from-fuchsia-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            {title}
          </span>
        </h2>
      </div>
      {children}
    </section>
  );
}

