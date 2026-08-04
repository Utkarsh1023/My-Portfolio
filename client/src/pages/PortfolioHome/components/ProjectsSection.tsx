import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaBookOpen,
} from "react-icons/fa";
import { GlassCard } from "./GlassCard";
import { SectionShell } from "./SectionShell";

const projects = [
  
  {
  title: "ChatVerse – Real-Time Social Media Platform",
  image: "/chatverse.jpeg",
  description:
    "A modern full-stack social media platform built with the MERN stack, and a beautiful responsive UI inspired by Instagram and Messenger.",
  tech: [
    "React.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Socket.IO",
    "Tailwind CSS",
    "Cloudinary",
    "JWT"
  ],
  features: [
    "Real-Time One-to-One Chat",
    "Friend Requests & Connections",
    "Live Notifications",
    "Message Delivery & Read Receipts",
    "Create, Like & Comment on Posts",
    "Responsive Mobile & Desktop UI",
    "JWT Authentication & Authorization"
  ],
  github: "https://github.com/Utkarsh1023/ChatVerse",
  demo: "https://chat-verse-gules.vercel.app",
},
{
  title: "Smart Attendance System",
  image: "/attendance.jpg",
  description:
    "An AI-powered attendance management system that uses facial recognition for secure, contactless attendance tracking with real-time monitoring, analytics, and an intuitive admin dashboard.",
  tech: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "OpenCV",
    "Python",
    "face_recognition"
  ],
  features: [
    "AI Face Recognition",
    "Automated Attendance Tracking",
    "Real-Time Attendance Reports",
    "Admin Dashboard",
    "Student & Faculty Management",
    "JWT Authentication",
    "Responsive UI",
    "Attendance Analytics"
  ],
  github: "https://github.com/yourusername/smart-attendance-system",
  demo: "https://your-demo.vercel.app",
},
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <GlassCard className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-500 hover:border-green-500/40 hover:shadow-[0_20px_60px_rgba(34,197,94,0.35)]">

        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-green-500/20 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
          <div className="absolute -left-40 top-0 h-full w-24 rotate-12 bg-white/10 transition-all duration-700 group-hover:left-full" />
        </div>

        <div className="absolute right-5 top-4 text-7xl font-black text-white/5">
          {String(index + 1).padStart(2, "0")}
        </div>

        <div className="overflow-hidden rounded-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="h-52 w-full object-cover transition duration-700 group-hover:scale-110"
          />
        </div>

        <h3 className="mt-6 inline-block bg-[length:200%_auto] bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-indigo-400 bg-clip-text text-2xl font-bold text-transparent transition-all duration-700 group-hover:bg-right">
          {project.title}
        </h3> 

        <p className="mt-3 text-sm leading-7 text-white/65">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6">
          <h4 className="mb-3 text-sm font-semibold text-fuchsia-400">
            Key Features
          </h4>

          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-white/70">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-4 py-2 text-white transition hover:scale-105"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>
        </div>
      </GlassCard>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <SectionShell
      eyebrow="PROJECTS"
      title="Featured Projects"
    >
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
          />
        ))}
      </div>
    </SectionShell>
  );
}
