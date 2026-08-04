import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { SectionShell } from "./SectionShell";

import {
  FaCode,
  FaLaptopCode,
  FaBrain,
  FaRocket,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaUserTie,
} from "react-icons/fa";

const features = [
  {
    icon: <FaLaptopCode />,
    title: "Full Stack Development",
    color: "text-fuchsia-400",
  },
  {
    icon: <FaBrain />,
    title: "DSA & Competitive Programming",
    color: "text-cyan-400",
  },
  {
    icon: <FaRocket />,
    title: "Performance Focused",
    color: "text-purple-400",
  },
  {
    icon: <FaCode />,
    title: "Clean UI/UX & Clean Code",
    color: "text-green-400",
  },
];

const stats = [
  {
    value: "10+",
    label: "Projects",
    color: "text-fuchsia-400",
  },
  {
    value: "500+",
    label: "DSA Problems",
    color: "text-cyan-400",
  },
  {
    value: "15+",
    label: "Technologies",
    color: "text-purple-400",
  },
  {
    value: "100%",
    label: "Dedication",
    color: "text-green-400",
  },
];

export function AboutSection() {
  return (
    <SectionShell eyebrow="ABOUT" title="About Me">
      <div className="relative">

        {/* Background Glow */}
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[140px]" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-indigo-500 blur-3xl opacity-30 animate-pulse" />

              {/* Image Border */}
              <motion.div
                whileHover={{
                  rotate: 3,
                  scale: 1.5,
                }}
                transition={{ duration: 0.4 }}
                className="relative rounded-full bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-indigo-500 p-1"
              >
                <img
                  src="/profile.jpeg"
                  alt="Utkarsh Anand"
                  className="h-80 w-80 rounded-full border-4 border-[#09090f] object-cover shadow-2xl"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <GlassCard className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 via-transparent to-cyan-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative">

                <h3 className="text-3xl font-bold text-white">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                    Utkarsh Anand
                  </span>
                </h3>

                <p className="mt-2 text-lg text-fuchsia-300">
                  Full Stack Developer
                </p>

                <p className="mt-6 leading-8 text-white/70">
                  I specialize in building scalable, secure, and modern web
                  applications using the MERN Stack. I enjoy transforming ideas
                  into responsive digital experiences with clean architecture
                  and intuitive UI.
                </p>
                <p className="mt-4 leading-8 text-white/70">
                  Beyond development, I actively practice Data Structures,
                  Algorithms, and Competitive Programming to continuously
                  improve my problem-solving skills.
                </p>

                {/* Personal Info */}
                <div className="mt-8 grid gap-4 sm:grid-cols-3">

                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <FaGraduationCap className="text-fuchsia-400" />
                    <div>
                      <p className="text-xs text-white/50">Education</p>
                      <p className="text-white">IIIT Ranchi</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <FaMapMarkerAlt className="text-cyan-400" />
                    <div>
                      <p className="text-xs text-white/50">Location</p>
                      <p className="text-white">India</p>
                    </div>
                  </div>


                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <FaCode className="text-green-400" />
                    <div>
                      <p className="text-xs text-white/50">Specialization</p>
                      <p className="text-white">MERN Stack</p>
                    </div>
                  </div>

                </div>

                {/* Feature Cards */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {features.map((item) => (
                    <motion.div
                      key={item.title}
                      whileHover={{
                        y: -6,
                        scale: 1.03,
                      }}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-fuchsia-500/30"
                    >
                      <div className={`text-2xl ${item.color}`}>
                        {item.icon}
                      </div>

                      <p className="text-white/80">
                        {item.title}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Statistics */}
        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -8,
                scale: 1.05,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl transition hover:border-fuchsia-500/30 hover:shadow-[0_0_35px_rgba(217,70,239,0.18)]"
            >
              <h3 className={`text-3xl font-bold ${stat.color}`}>
                {stat.value}
              </h3>

              <p className="mt-2 text-sm text-white/60">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}