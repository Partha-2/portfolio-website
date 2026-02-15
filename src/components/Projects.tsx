"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiExternalLink, FiGithub, FiServer, FiDatabase, FiCode } from "react-icons/fi";

const projects = [
  {
    title: "Career Agent AI",
    subtitle: "AI-Powered Job Matching Platform",
    description:
      "Full-stack career platform with AI-driven resume analysis, job matching scores, and intelligent chatbot powered by Groq LLaMA models.",
    features: [
      "RESTful API with Spring Boot",
      "JWT & Google OAuth2 Auth",
      "AI Chatbot Integration",
      "MySQL with JPA/Hibernate",
      "Docker Deployment",
    ],
    tech: ["Java", "Spring Boot", "React", "MySQL", "Docker", "Groq LLaMA"],
    icon: FiServer,
    liveUrl: "https://agent-backend-gttz.onrender.com/",
    githubUrl: "https://github.com/Partha-2/agent_backend",
  },
  {
    title: "Data Visualization Dashboard",
    subtitle: "Analytics & Reporting Platform",
    description:
      "Enterprise analytics platform with real-time data processing, interactive visualizations, and comprehensive metrics reporting.",
    features: [
      "REST APIs for Analytics",
      "JDBC & JPA Integration",
      "Real-time Processing",
      "Interactive Charts",
      "Cloud Deployment",
    ],
    tech: ["Spring Boot", "MySQL", "React", "JPA", "Zoho Catalyst"],
    icon: FiDatabase,
    liveUrl: "https://datavisualization-60030162551.development.catalystserverless.in/app/",
    githubUrl: "https://github.com/Partha-2/DataRecord_Backend",
  },
];

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 border-t border-neutral-800">
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
              Projects
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Featured <span className="text-yellow-500">Projects</span>
            </h2>
            <p className="text-neutral-500 text-sm sm:text-base max-w-xl mx-auto">
              Applications built with modern backend technologies
            </p>
          </div>

          {/* Projects */}
          <div className="space-y-6 sm:space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-neutral-900/80 border border-neutral-800 rounded-xl overflow-hidden hover:border-yellow-500/30 transition-colors"
              >
                <div className="p-5 sm:p-6 md:p-8">
                  {/* Header */}
                  <div className="flex items-start gap-3 sm:gap-4 mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center flex-shrink-0">
                      <project.icon className="text-yellow-500" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white">
                        {project.title}
                      </h3>
                      <p className="text-yellow-500 text-xs sm:text-sm">{project.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-400 text-sm mb-4 sm:mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-4 sm:mb-5">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-xs sm:text-sm">
                        <FiCode className="text-yellow-500 flex-shrink-0" size={12} />
                        <span className="text-neutral-500">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-neutral-800 border border-neutral-700 rounded-full text-xs text-neutral-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-neutral-800">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-black text-xs sm:text-sm font-medium rounded-lg transition-colors"
                    >
                      <FiExternalLink size={14} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800 border border-neutral-700 hover:border-yellow-500/50 text-white text-xs sm:text-sm font-medium rounded-lg transition-colors"
                    >
                      <FiGithub size={14} />
                      Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* GitHub Link */}
          <div className="mt-8 sm:mt-10 text-center">
            <a
              href="https://github.com/Partha-2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-neutral-500 hover:text-yellow-500 transition-colors text-sm"
            >
              <FiGithub size={18} />
              View more on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
