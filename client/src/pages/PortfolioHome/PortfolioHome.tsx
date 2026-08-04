import React from 'react';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ServicesSection } from './components/ServicesSection';

import { ContactSection } from './components/ContactSection';
import { FooterSection } from './components/FooterSection';
import { PortfolioLayout } from './PortfolioLayout';
import { AchievementSection } from './components/AchievementSection';
import { ProjectsSection } from './components/ProjectsSection';


export function PortfolioHome() {
  return (
    <PortfolioLayout>
      <div className="relative overflow-hidden">

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-fuchsia-500/20 via-indigo-500/10 to-cyan-500/20 blur-3xl" />
        <div className="absolute top-[60%] -left-24 h-[320px] w-[320px] rounded-full bg-gradient-to-tr from-indigo-500/15 via-cyan-500/10 to-fuchsia-500/10 blur-3xl" />
      </div>

      <div id="home">
        <HeroSection />
      </div>

      <div id="about-me">
        <AboutSection />
      </div>

      <div id="skills">
        <SkillsSection />
      </div>

      <div id="experience">
        <ExperienceTimeline />
      </div>
      <div id="achievement">
        <AchievementSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>

      <div id="services">
        <ServicesSection />
      </div>


      <div id="contact" className="pb-20">
        <ContactSection />
      </div>

      <FooterSection />

      <div className="h-10" />
    </div>
    </PortfolioLayout>

  );
}




