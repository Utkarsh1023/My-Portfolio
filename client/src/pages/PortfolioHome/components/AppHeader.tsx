import React from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';

const navItems = [
  { to: '/#about-me', label: 'About' },
  { to: '/#skills', label: 'Skills' },
  { to: '/#experience', label: 'Experience' },
  { to: '/#achievement', label: 'Achievements' },
  { to: '/#projects', label: 'Projects' },
  { to: '/#services', label: 'Services' },
  { to: '/#contact', label: 'Contact' }
];

type SectionId = 'about-me' | 'skills' | 'experience' |'achievement' | 'projects' | 'services' | 'contact';
const SECTION_IDS: SectionId[] = ['about-me', 'skills', 'experience','achievement', 'projects','services', 'contact'];

function useScrollSpy(ids: SectionId[]) {
  const [active, setActive] = React.useState<SectionId | null>(null);

  React.useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Prefer the most visible intersecting entry.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        if (visible[0]?.target) {
          setActive(visible[0].target.id as SectionId);
        }
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.65],
        // Accounts for fixed header.
        rootMargin: '-64px 0px -50% 0px'
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

export function AppHeader() {
  const location = useLocation();
  const activeSection = useScrollSpy(SECTION_IDS);
  const isPortfolioPage = location.pathname === '/';

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <div>
            <span className="text-2xl font-bold bg-gradient-to-r from-fuchsia-500/90 to-cyan-500/90 bg-clip-text text-transparent">
              UTKARSH ANAND
            </span>
          </div>
        </motion.div>

        <nav className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => {
            const sectionId = (item.to.split('#')[1] ?? null) as SectionId | null;
            const isActive = isPortfolioPage && sectionId && activeSection === sectionId;

            return (
              <HashLink
                key={item.label}
                smooth
                to={item.to}
                
                className={
                  'text-sm transition ' +
                  (isActive ? 'text-white/95' : 'text-white/65 hover:text-white/90')
                }
              >
                <span className="relative">
                  {item.label}
                  <span
                    className={
                      'absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400 transition ' +
                      (isActive ? 'opacity-100' : 'opacity-0')
                    }
                  />
                </span>
              </HashLink>
            );
          })}
        </nav>
      </div>
    </header>
  );
}


