import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { SectionShell } from "./SectionShell";
import {
  GraduationCap,
  School,
  BookOpen,
  Award,
} from "lucide-react";
import { FiEye  } from "react-icons/fi";
const education = [
  {
    year: "2019",
    title: <>Matriculation (10<sup>th</sup>)</>,
    institute: "Central English School, Sasaram",
    grade: "Percentage : 84.20 ",
    icon: School,
    certificate: "/certificates/10th.pdf",
  },
  {
    year: "2021",
    title: <>Intermediate (12<sup>th</sup>)</>,
    institute: "Delhi Public School, Bhabua",
    grade: "Percentage : 75.00 ",
    icon: BookOpen,
    certificate: "/certificates/12th.pdf",
  },
  {
    year: "2023 - 2027",
    title: "B.Tech. | CSE",
    institute: "Indian Institute of Information Technology, Ranchi",
    grade: "CGPA: 8.77 (Sem: 6) ",
    icon: GraduationCap,
    certificate: "/certificates/btech.pdf",
  },
  {
    year: "2026",
    title: "Software Engineering Intern",
    institute: "Company Name",
    grade: "MERN Stack",
    icon: Award,
    certificate: "/certificates/10th.pdf",
  },
];

export function ExperienceTimeline() {
  return (
    <SectionShell eyebrow="EDUCATION" title="Academic Journey">

      {/* ================= MOBILE TIMELINE ================= */}
      <div className="relative mx-auto mt-10 max-w-xl px-5 md:hidden">

        {/* Vertical Line */}
        <div className="absolute left-10 top-0 h-full w-[3px] rounded-full bg-gradient-to-b from-fuchsia-500 via-violet-500 to-cyan-500" />

        <div className="space-y-10">
          {education.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                className="relative flex gap-5"
              >
                {/* Timeline Node */}
                <motion.div
                  animate={{
                    scale: [1, 1.12, 1],
                    boxShadow: [
                      "0 0 0px rgba(236,72,153,.4)",
                      "0 0 20px rgba(236,72,153,.8)",
                      "0 0 0px rgba(236,72,153,.4)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500"
                >
                  <Icon className="h-6 w-6 text-white" />
                </motion.div>

                {/* Card */}
                <GlassCard className="group flex-1 rounded-2xl border border-white/10 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-fuchsia-500/40">
                  <p className="text-xs uppercase tracking-widest text-fuchsia-300">
                    {item.year}
                  </p>

                  <h3 className="mt-2 text-lg font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-white/70">
                    {item.institute}
                  </p>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <div className="rounded-full bg-fuchsia-500/10 px-4 py-2 text-sm font-medium text-fuchsia-300">
                      {item.grade}
                    </div>

                    {item.certificate && (
                      <a
                        href={item.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-sm font-medium text-emerald-300 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:shadow-lg hover:shadow-emerald-500/30"
                        title="View Certificate"
                      >
                        <FiEye size={18} />
                        <span className="hidden sm:inline">View</span>
                      </a>
                    )}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ================= DESKTOP TIMELINE ================= */}
      <div className="relative mt-10 hidden h-[650px] w-full overflow-x-auto md:block">

        {/* Horizontal Line */}
        <div className="absolute left-0 right-0 top-[320px] h-[4px] rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500 shadow-[0_0_30px_rgba(168,85,247,.5)]" />

        <div className="relative flex min-w-[1000px] justify-between px-8">
          {education.map((item, index) => {
            const Icon = item.icon;
            const isTop = index % 2 === 0;

            return (
              <div
                key={index}
                className="relative flex flex-1 justify-center"
              >
                {/* Card */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: isTop ? -80 : 80,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                  }}
                  whileHover={{
                    y: isTop ? -8 : 8,
                    scale: 1.03,
                  }}
                  className={`absolute w-72 ${
                    isTop ? "top-12" : "top-[395px]"
                  }`}
                >
                  <GlassCard className="group relative overflow-hidden rounded-2xl border border-white/10 p-6 backdrop-blur-xl">

                    {/* Glow */}
                    <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-fuchsia-500/20 blur-3xl" />
                    </div>

                    <div className="relative z-10">
                      <div className="mb-5 flex items-center gap-4">
                        <div className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 p-3 shadow-lg">
                          <Icon className="h-6 w-6 text-white" />
                        </div>

                        <div>
                          <p className="text-xs uppercase tracking-widest text-fuchsia-300">
                            {item.year}
                          </p>

                          <h3 className="text-lg font-bold text-white">
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-white/70">
                        {item.institute}
                      </p>

                      <div className="mt-4 flex items-center justify-between gap-3">
                    <div className="rounded-full bg-fuchsia-500/10 px-4 py-2 text-sm font-medium text-fuchsia-300">
                      {item.grade}
                    </div>

                    {item.certificate && (
                      <a
                        href={item.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-sm font-medium text-emerald-300 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:shadow-lg hover:shadow-emerald-500/30"
                        title="View Certificate"
                      >
                        <FiEye size={18} />
                        
                      </a>
                    )}
                  </div>
                    </div>
                  </GlassCard>

                  {isTop && (
                    <div className="absolute left-1/2 top-full h-16 w-[2px] -translate-x-1/2 bg-gradient-to-b from-fuchsia-500 to-cyan-500" />
                  )}

                  {!isTop && (
                    <div className="absolute bottom-full left-1/2 h-16 w-[2px] -translate-x-1/2 bg-gradient-to-b from-cyan-500 to-fuchsia-500" />
                  )}
                </motion.div>

                {/* Timeline Node */}
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  animate={{
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      "0 0 0px rgba(236,72,153,.4)",
                      "0 0 20px rgba(236,72,153,.9)",
                      "0 0 0px rgba(236,72,153,.4)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="absolute top-[310px] h-7 w-7 -translate-y-1/2 rounded-full border-4 border-[#09090f] bg-gradient-to-r from-fuchsia-500 to-cyan-500"
                />
              </div>
            );
          })}
        </div>
      </div>

    </SectionShell>
  );
}