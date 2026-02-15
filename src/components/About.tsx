"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiExternalLink, FiAward } from "react-icons/fi";

const certifications = [
  { name: "TCS iON NQT (IT)", file: "/tcs-nqt.pdf" },
  { name: "Core Java (Udemy)", file: "/core-java.pdf" },
  { name: "Java Programming", file: "/java-cert.pdf" },
  { name: "Web Development", file: "/web-development.pdf" },
  { name: "NPTEL IoT", file: "/nptel-iot.pdf" },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 border-t border-neutral-800">
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
              About
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              About <span className="text-yellow-500">Me</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left - Description */}
            <div className="space-y-4 sm:space-y-6">
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                I&apos;m a Java Backend Developer currently working at{" "}
                <span className="text-white">Tata Consultancy Services (TCS)</span>.
                With expertise in Spring Boot, REST APIs, and database-driven applications,
                I specialize in building secure, scalable backend systems.
              </p>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                My journey includes developing full-stack platforms like{" "}
                <span className="text-yellow-500">Career Agent AI</span> - an AI-powered job matching platform,
                and <span className="text-yellow-500">Data Visualization Dashboard</span> for analytics and reporting.
              </p>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                I believe in writing clean, maintainable code and building systems that make a real impact.
              </p>
            </div>

            {/* Right - Quick Info */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Education</h3>
                <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-4 sm:p-5">
                  <p className="text-white font-medium text-sm sm:text-base">B.Sc. Computer Science</p>
                  <p className="text-neutral-500 text-xs sm:text-sm">Rathinam College of Arts and Science</p>
                  <p className="text-neutral-600 text-xs sm:text-sm mt-1">2020 - 2023 • CGPA: 7.0</p>
                </div>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                  <FiAward className="text-yellow-500" size={16} />
                  Certifications
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {certifications.map((cert) => (
                    <a
                      key={cert.name}
                      href={cert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-3 p-3 bg-neutral-900/80 border border-neutral-800 rounded-lg hover:border-yellow-500/50 transition-colors group"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full flex-shrink-0" />
                        <span className="text-neutral-300 text-xs sm:text-sm group-hover:text-white transition-colors truncate">
                          {cert.name}
                        </span>
                      </div>
                      <FiExternalLink className="text-neutral-600 group-hover:text-yellow-500 transition-colors flex-shrink-0" size={14} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
