"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiCode, FiServer, FiDatabase, FiCpu, FiLayers, FiLayout } from "react-icons/fi";

const skillCategories = [
  {
    title: "Languages",
    icon: FiCode,
    skills: ["Java", "SQL", "JavaScript"],
  },
  {
    title: "Frameworks",
    icon: FiLayers,
    skills: ["Spring Boot", "Spring MVC", "Hibernate/JPA", "Spring Security"],
  },
  {
    title: "Backend & APIs",
    icon: FiServer,
    skills: ["REST APIs", "API Design", "JWT Auth", "Google OAuth2"],
  },
  {
    title: "Database",
    icon: FiDatabase,
    skills: ["MySQL"],
  },
  {
    title: "AI & APIs",
    icon: FiCpu,
    skills: ["Groq LLaMA", "JSearch API"],
  },
  {
    title: "Frontend",
    icon: FiLayout,
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
];

const tools = [
  "Git", "Docker", "Postman", "MySQL Workbench", "Render", "Zoho Catalyst",
  "Aiven", "Google Cloud", "Eclipse IDE", "VS Code"
];

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-16 sm:py-20 md:py-24 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <p className="text-yellow-500 text-xs sm:text-sm font-medium tracking-wider uppercase mb-2 sm:mb-3">
              Skills
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Technical <span className="text-yellow-500">Expertise</span>
            </h2>
            <p className="text-neutral-500 text-sm sm:text-base max-w-xl mx-auto">
              Technologies and tools I use to build robust backend systems
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12 md:mb-16">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-4 sm:p-5 hover:border-yellow-500/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
                    <category.icon className="text-yellow-500" size={18} />
                  </div>
                  <h3 className="text-white font-semibold text-sm sm:text-base">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 bg-neutral-800/80 border border-neutral-700 rounded-md text-xs sm:text-sm text-neutral-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tools */}
          <div className="text-center">
            <h3 className="text-neutral-500 text-xs sm:text-sm mb-4 sm:mb-6 uppercase tracking-wide">
              Tools & Platforms
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-neutral-900/80 border border-neutral-800 rounded-lg text-xs sm:text-sm text-neutral-400 hover:border-yellow-500/50 hover:text-yellow-500 transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
