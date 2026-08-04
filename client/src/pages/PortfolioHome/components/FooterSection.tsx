import React from 'react';
import { HashLink }from 'react-router-hash-link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode, SiCodeforces } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

export function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto w-full max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="text-sm font-semibold text-white/90">Utkarsh Anand</div>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Location : Ranchi, Jharkhand, India
            </p>

            <div className="mt-5 flex items-center gap-3">
              {/* GITHUB */}
              <motion.a
                href="https://github.com/utkarshanand1023"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.15,
                  y: -3,
                }}
                whileTap={{ scale: 0.95 }}
                className="group rounded-xl border border-white/10 bg-white/5 p-2 text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.35)]"
                aria-label="GitHub"
              >
                <FaGithub className="text-2xl" />
              </motion.a>
              {/* LINKEDIN */}
              <motion.a
                href="https://www.linkedin.com/in/utkarsh-anand-857a76293"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.15,
                  y: -3,
                }}
                whileTap={{ scale: 0.95 }}
                className="group rounded-xl border border-blue-500/30 bg-blue-500/10 p-2 text-[#0A66C2] transition-all duration-300 hover:border-blue-400 hover:bg-blue-500/20 hover:shadow-[0_0_30px_rgba(10,102,194,0.7)]"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-2xl" />
              </motion.a>
              {/* LEETCODE */}
              <motion.a
                href="https://leetcode.com/u/utkarsh_anand20/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.15,
                  y: -3,
                }}
                whileTap={{ scale: 0.95 }}
                className="group rounded-xl border border-orange-500/30 bg-orange-500/10 p-2 text-[#FFA116] transition-all duration-300 hover:border-orange-400 hover:bg-orange-500/20 hover:shadow-[0_0_30px_rgba(255,161,22,0.7)]"
                aria-label="LeetCode"
              >
                <SiLeetcode className="text-2xl" />
              </motion.a>
              {/* CODEFORCES */}
              <motion.a
                href="https://codeforces.com/profile/utkarsh20"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.15,
                  y: -3,
                }}
                whileTap={{ scale: 0.95 }}
                className="group rounded-xl border border-blue-500/30 bg-blue-500/10 p-2 text-[#1F8ACB] transition-all duration-300 hover:border-blue-400 hover:bg-blue-500/20 hover:shadow-[0_0_30px_rgba(31,138,203,0.7)]"
                aria-label="Codeforces"
              >
                <SiCodeforces className="text-2xl" />
              </motion.a>
              {/* EMAIL */}
              <motion.a
                href="mailto:utkarshanand1023@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.15,
                  y: -3,
                }}
                whileTap={{ scale: 0.95 }}
                className="group rounded-xl border border-red-500/30 bg-red-500/10 p-2 text-[#EA4335] transition-all duration-300 hover:border-red-400 hover:bg-red-500/20 hover:shadow-[0_0_30px_rgba(234,67,53,0.7)]"
                aria-label="Email"
              >
                <MdEmail className="text-2xl" />
              </motion.a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:col-span-2">
            <FooterColumn
              title="QUICK LINKS"
              links={[
                { label: 'Skills', to: '/#skills' },
                { label: 'Experience', to: '/#experience' },
                { label: 'Projects', to: '/#projects' },
                { label: 'Contact', to: '/#contact' }
              ]}
            />

            <FooterColumn
              title="SOCIALS"
              links={[
                { label: 'GitHub', to: 'https://github.com/utkarshanand1023' },
                {
                  label: 'LinkedIn',
                  to: 'https://www.linkedin.com/in/utkarsh-anand-857a76293'
                },
                { label: 'LeetCode', to: 'https://leetcode.com/u/utkarsh_anand20/' },
                { label: 'Codeforces', to: 'https://codeforces.com/profile/utkarsh20' }
              ]}
            />

            <FooterColumn
              title="RESUME"
              links={[{ label: 'Download', to: '#' }]}
            />

            <div>
              <div className="text-xs font-semibold tracking-widest text-white/50">Back to Top</div>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                href="#"
                className="mt-3 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500/90 to-cyan-500/80 px-4 py-2 text-sm font-semibold text-black shadow-[0_0_0_1px_rgba(255,255,255,0.10),0_16px_60px_rgba(236,72,153,0.18)]"
              >
                ↑ Top
              </motion.a>
              <p className="mt-3 text-xs text-white/55">Smooth UX. Minimal distractions.</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/5 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs text-white/50">© {year} Utkarsh Anand. All rights reserved.</div>
          <div className="text-xs text-white/40">Built with MERN • Tailwind • Framer Motion</div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links
}: {
  title: string;
  links: { label: string; to: string }[];
}) {
  return (
    <div>
      <div className="text-xs font-semibold tracking-widest text-white/50">{title}</div>

      <ul className="mt-4 space-y-3">
        {links.map((link) => {
          const isExternal = link.to.startsWith('http');
          const isHashRoute = link.to.startsWith('/#');

          return (
            <li key={link.label}>
              {isExternal || !isHashRoute ? (
                <a
                  href={link.to}
                  {...(isExternal && {
                    target: '_blank',
                    rel: 'noopener noreferrer'
                  })}
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  {link.label}
                </a>
              ) : (
                <HashLink
                  smooth
                  to={link.to}
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  {link.label}
                </HashLink>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}


