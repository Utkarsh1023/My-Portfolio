import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { SectionShell } from "./SectionShell";
import {
  Medal,
  Award,
  FolderKanban,
  CheckCircle2,
  ArrowUpRight,
  
} from "lucide-react";
import{
    SiLeetcode,
    SiCodechef,
    SiCodeforces
} from "react-icons/si";
const achievements = [
  {
    title: "CodeChef",
    badge: "⭐⭐⭐",
    value: "Rating 1672",
    highlights: ["Global Rank: 9,412", "600+ Problems Solved"],
    icon: SiCodechef,
    color: "from-amber-900 to-amber-400",
    link: "https://www.codechef.com/users/utkarsh_an",
  },
  {
    title: "LeetCode",
    badge: "Knight",
    value: "Rating 2122",
    highlights: ["Global Rank: 11,593", "400+ Problems Solved"],
    icon: SiLeetcode,
    color: "from-yellow-500 to-amber-400",
    link: "https://leetcode.com/u/utkarsh_anand20/",
  },
  {
    title: "Codeforces",
    badge: "Pupil",
    value: "Rating 1226",
    highlights: ["Maximum Rating: 1319"],
    icon: SiCodeforces,
    color: "from-blue-500 to-purple-500",
    link: "https://codeforces.com/profile/utkarsh20",
  },
  {
    title: "Projects",
    badge: "Portfolio",
    value: "5+ Completed",
    highlights: [
      "MERN Stack Projects",
      "Java Applications",
      "Responsive UI",
    ],
    icon: FolderKanban,
    color: "from-cyan-500 to-sky-500",
  },
  {
    title: "Certifications",
    badge: "Professional",
    value: "5+ Certificates",
    highlights: [
      "Web Development",
      "Cloud Computing",
      "Data Structures & Algorithms",
    ],
    icon: Award,
    color: "from-violet-500 to-indigo-500",
  },
  {
    title: "Naukri Campus's EROH",
    badge: "🥉 Bronze",
    value: "3rd Rank",
    highlights: [
      "Secured 3rd Rank in our College in 1st Round",
      "Secured 242nd Rank in All India Level in 2nd Round",
    ],
    icon: Medal,
    color: "from-amber-500 via-yellow-400 to-orange-500",
  },
];

export function AchievementSection() {
  return (
    <SectionShell
      eyebrow="ACHIEVEMENTS"
      title="Achievements & Recognition"
    >
      <div className="relative">

        {/* Background Glow */}
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-[140px]" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="relative grid gap-7 md:grid-cols-2 lg:grid-cols-4">

          {achievements.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
              >
                <GlassCard className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:border-fuchsia-500/40 hover:shadow-[0_0_50px_rgba(217,70,239,.18)]">

                  {/* Hover Gradient */}
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition duration-500 group-hover:opacity-10`}
                  />

                  {/* Glow */}
                  <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-fuchsia-500/20 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                  {/* Icon */}
                  <motion.div
                    animate={{
                      y: [-2, 2, -2],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                    }}
                    className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color} shadow-lg`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  {/* Badge */}
                  <div className="mt-3 inline-flex rounded-full border border-fuchsia-500/20 bg-fuchsia-500/10 px-3 py-1 text-xs font-medium text-fuchsia-300">
                    {item.badge}
                  </div>

                  {/* Rating */}
                  <p className="mt-4 text-xl font-semibold text-cyan-300">
                    {item.value}
                  </p>

                  {/* Highlights */}
                  <ul className="mt-5 space-y-3">
                    {item.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm text-white/70"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-fuchsia-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  {item.link && (
                    <motion.a
                      whileHover={{ x: 5 }}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-fuchsia-300 transition hover:text-cyan-300"
                    >
                      View Profile
                      <ArrowUpRight className="h-4 w-4" />
                    </motion.a>
                  )}

                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}