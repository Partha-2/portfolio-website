"use client";

import { motion } from "framer-motion";
import { FaJava, FaDocker, FaGitAlt, FaReact } from "react-icons/fa";
import {
  SiSpringboot,
  SiMysql,
  SiHibernate,
  SiPostman,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";

const technologies = [
  { icon: FaJava, name: "Java", color: "#f89820" },
  { icon: SiSpringboot, name: "Spring Boot", color: "#6db33f" },
  { icon: SiHibernate, name: "Hibernate", color: "#59666c" },
  { icon: SiMysql, name: "MySQL", color: "#00758f" },
  { icon: FaDocker, name: "Docker", color: "#2496ed" },
  { icon: FaGitAlt, name: "Git", color: "#f05032" },
  { icon: SiPostman, name: "Postman", color: "#ff6c37" },
  { icon: FaReact, name: "React", color: "#61dafb" },
  { icon: SiJavascript, name: "JavaScript", color: "#f7df1e" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178c6" },
];

export default function TechMarquee() {
  const duplicatedTech = [...technologies, ...technologies];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0f] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0f] to-transparent z-10" />

      {/* Marquee Container */}
      <div className="flex overflow-hidden">
        <motion.div
          animate={{ x: [0, -50 * technologies.length] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex gap-8"
        >
          {duplicatedTech.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center gap-3 px-6 py-4 rounded-2xl glass whitespace-nowrap"
            >
              <tech.icon className="w-8 h-8" style={{ color: tech.color }} />
              <span className="text-zinc-300 font-medium">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
