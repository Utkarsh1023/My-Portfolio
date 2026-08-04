import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaReact,
  FaServer,
  FaDatabase,
  FaMobileAlt,
  FaUserTie,
  FaChartBar,
  FaRocket,
} from "react-icons/fa";

import { GlassCard } from "./GlassCard";
import { SectionShell } from "./SectionShell";

const services = [
  {
    title: "Full Stack Development",
    icon: FaLaptopCode,
    description:
      "Complete MERN applications from planning to production deployment.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    title: "Frontend Development",
    icon: FaReact,
    description:
      "Responsive, beautiful interfaces with modern animations and UI/UX.",
    tech: ["React", "TypeScript", "Tailwind", "Javascript"],
  },
  {
    title: "Backend APIs",
    icon: FaServer,
    description:
      "Scalable REST APIs with authentication, security and performance.",
    tech: ["Node.js", "Express.js", "JWT", "REST"],
  },
  {
    title: "Database Design",
    icon: FaDatabase,
    description:
      "Efficient database schemas with MongoDB and optimization.",
    tech: ["MongoDB", "Mongoose", "Indexing",, "SQL",, "MySQL"],
  },
  {
    title: "Responsive Websites",
    icon: FaMobileAlt,
    description:
      "Pixel-perfect responsive websites for every screen size.",
    tech: ["HTML", "CSS", "JavaScript", "Tailwind"],
  },
  {
    title: "Portfolio Websites",
    icon: FaUserTie,
    description:
      "Premium portfolios with modern UI and smooth interactions.",
    tech: ["React.js", "Motion", "SEO"],
  },
  {
    title: "Admin Dashboards",
    icon: FaChartBar,
    description:
      "Interactive dashboards with charts, analytics and authentication.",
    tech: ["React.js", "Charts", "JWT"],
  },
  {
    title: "Deployment",
    icon: FaRocket,
    description:
      "Deploy applications using Vercel, Render, Railway and cloud services.",
    tech: ["Vercel", "Render", "Netlify"],
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
    >
      <GlassCard
        onMouseMove={(e: any) => {
          const rect = e.currentTarget.getBoundingClientRect();

          setMouse({
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100,
          });
        }}
        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 transition-all duration-500 hover:-translate-y-3 hover:border-fuchsia-500/40 hover:shadow-[0_20px_60px_rgba(192,38,211,0.35)]"
        style={
          {
            background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%,
            rgba(217,70,239,.18),
            transparent 45%)`,
          } as React.CSSProperties
        }
      >
        {/* Glow */}
        <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-fuchsia-500/20 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

        {/* Shine */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
          <div className="absolute -left-40 top-0 h-full w-24 rotate-12 bg-white/10 transition-all duration-700 group-hover:left-full" />
        </div>

        {/* Number */}
        <div className="absolute right-5 top-5 text-7xl font-black text-white/5">
          {String(index + 1).padStart(2, "")}
        </div>

        {/* Icon */}
        <motion.div
          whileHover={{
            rotate: 360,
            scale: 1.15,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 p-4"
        >
          <Icon className="text-4xl text-fuchsia-400" />
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white">
          {service.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm leading-7 text-white/65">
          {service.description}
        </p>

        {/* Tech */}
        <div className="mt-6 flex flex-wrap gap-2">
          {service.tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
            >
              {item}
            </span>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{
            opacity: 0,
            x: -10,
          }}
          whileHover={{
            opacity: 1,
            x: 0,
          }}
          className="mt-8 flex items-center gap-2 font-medium text-fuchsia-400"
        >
          Discuss Project
          <motion.span
            animate={{
              x: [0, 5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
          >
            →
          </motion.span>
        </motion.div>
      </GlassCard>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <SectionShell
      eyebrow="SERVICES"
      title="What I Can Do For You ?"
    >
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            service={service}
            index={index}
          />
        ))}
      </div>
    </SectionShell>
  );
}