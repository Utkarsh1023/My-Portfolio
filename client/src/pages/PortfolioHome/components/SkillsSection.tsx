import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { SectionShell } from "./SectionShell";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaPython,
  FaBootstrap,
  FaCode,
  FaDatabase,
  FaTools,
  FaCloud,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiVercel,
  SiRender,
  SiNetlify,
  SiJsonwebtokens,
} from "react-icons/si";

const categories = [
  {
    title: "Frontend",
    icon: <FaReact />,
    skills: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "React", icon: <FaReact /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
    ],
  },
  {
    title: "Backend",
    icon: <FaNodeJs />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "REST API", icon: <FaCode /> },
      { name: "JWT", icon: <SiJsonwebtokens /> },
      { name: "Authentication", icon: "🔐" },
    ],
  },
  {
    title: "Languages",
    icon: <FaJava />,
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "Python", icon: <FaPython /> },
      { name: "C Programming", icon: "C" },
    ],
  },
  {
    title: "Tools",
    icon: <FaTools />,
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "VS Code", icon: "💻" },
    ],
  },
  {
    title: "Database",
    icon: <FaDatabase />,
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
    ],
  },
  {
    title: "Cloud",
    icon: <FaCloud />,
    skills: [
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Netlify", icon: <SiNetlify /> },
      { name: "Render", icon: <SiRender /> },
    ],
  },
];

export function SkillsSection() {
  return (
    <SectionShell eyebrow="TECH STACK" title="Skills & Technologies">
      <div className="relative">
        {/* Background Glow */}
        <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-[120px]" />
        <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative grid gap-6 md:grid-cols-2">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
            >
              <GlassCard className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-fuchsia-500/40 hover:shadow-[0_0_50px_rgba(217,70,239,0.18)]">

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-fuchsia-500/5 via-transparent to-cyan-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* Heading */}
                <div className="relative mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-3xl text-white shadow-lg">
                    {category.icon}
                  </div>

                  <div>
                    <h3 className="bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-indigo-400 bg-clip-text text-2xl font-bold text-transparent">
                      {category.title}
                    </h3>

                    <p className="text-sm text-white/50">
                      {category.skills.length} Technologies
                    </p>
                  </div>
                </div>

                {/* Skill Chips */}
                <div className="relative flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{
                        scale: 1.08,
                        y: -4,
                      }}
                      whileTap={{
                        scale: 0.96,
                      }}
                      className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/90 backdrop-blur-md transition-all duration-300 hover:border-fuchsia-500/40 hover:bg-fuchsia-500/10 hover:shadow-lg hover:shadow-fuchsia-500/20"
                    >
                      <span className="text-xl">{skill.icon}</span>
                      <span className="text-sm font-medium">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}