import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { HashLink } from "react-router-hash-link";


function useTyping(words: string[], speed = 70, backSpeed = 45, pause = 900) {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, sub.length + 1);
        setSub(next);
        if (next === current) {
          setDeleting(true);
          return;
        }
      } else {
        const next = current.slice(0, Math.max(0, sub.length - 1));
        setSub(next);
        if (next.length === 0) {
          setDeleting(false);
          setIndex((v) => v + 1);
        }
      }
    }, deleting ? backSpeed : speed);

    return () => clearTimeout(t);
  }, [words, index, sub.length, deleting, speed, backSpeed]);

  useEffect(() => {
    const current = words[index % words.length];
    if (!deleting && sub === current) {
      const p = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(p);
    }
  }, [sub, deleting, index, pause, words]);

  return sub;
}

export function HeroSection() {
  const words = useMemo(
    () => [
      'MERN Stack Developer',
      'React Enthusiast',
      'DSA & Competitive Programmer',
      'Frontend Developer',
      'Backend Developer',
    ],
    []
  );

  const typed = useTyping(words);

  return (
    <section className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-20 sm:pt-24">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-green-500 to-green-500" />
          <span className="tracking-wide">Available for full-stack opportunities</span>
        </div>

        <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-6xl">
          <span className="bg-gradient-to-r from-fuchsia-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Utkarsh Anand
          </span>
          <br />
          <span className="text-white/85">{typed}</span>
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          I build premium full-stack experiences with scalable architecture, clean UX, and performance-first engineering.
          MERN stack by day & DSA and competitive programming by night.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <motion.a
            href="/Utkarsh_Anand_Resume.pdf"
            download
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition hover:shadow-fuchsia-500/40"
          >
            Download Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v10m0 0l-4-4m4 4l4-4M4 20h16"
              />
            </svg>
          </motion.a>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex"
          >
            <HashLink
              to="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
            >
              Contact Me
              <span className="opacity-80">↗</span>
            </HashLink>
          </motion.div>
        </div>

        <motion.div
          className="mt-10 grid gap-3 sm:grid-cols-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
        >
          {[
            { label: 'Clean Code', value: 'Production-ready' },
            { label: 'UX Focus', value: 'Premium interactions' },
            { label: 'Performance', value: 'Fast & scalable' }
          ].map((c) => (
            <div
              key={c.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
            >
              <div className="text-xs text-white/55">{c.label}</div>
              <div className="mt-1 text-sm font-semibold text-white/85">{c.value}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

