"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    title: "Analyst (Java Developer)",
    company: "Tata Consultancy Services (TCS)",
    period: "February 2025 - Present",
    description: [
      "Developed backend modules using Java and Spring Boot for enterprise web applications",
      "Designed and implemented REST APIs for data processing and business workflows",
      "Built CRUD functionality using Hibernate/JPA with MySQL database",
      "Improved application stability by fixing backend defects and optimizing features",
      "Tested APIs using Postman and validated data consistency with SQL queries",
    ],
  },
  {
    title: "Web Development Intern",
    company: "Net Tel Solutions Pvt Ltd",
    period: "June 2022 - July 2022",
    description: [
      "Developed responsive UI using HTML, CSS, JavaScript, and React",
      "Integrated frontend with backend REST APIs",
    ],
  },
];

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 border-t border-neutral-800">
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
              Experience
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Work <span className="text-yellow-500">Experience</span>
            </h2>
            <p className="text-neutral-500 text-sm sm:text-base max-w-xl mx-auto">
              My professional journey in software development
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-8 sm:space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative pl-6 sm:pl-8 border-l-2 border-neutral-800"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[7px] sm:-left-[9px] top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-neutral-950 border-2 border-yellow-500" />

                {/* Content */}
                <div>
                  <span className="text-yellow-500 text-xs sm:text-sm">{exp.period}</span>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mt-1">{exp.title}</h3>
                  <p className="text-neutral-500 text-sm mb-3 sm:mb-4">{exp.company}</p>

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-neutral-400">
                        <span className="w-1 h-1 bg-yellow-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
