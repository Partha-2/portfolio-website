"use client";

import { motion } from "framer-motion";
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiCode } from "react-icons/fi";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 md:pt-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-yellow-500/20"
          >
            {/* Status */}
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm text-neutral-400">Available for opportunities</span>
            </div>

            {/* Name */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-3">
              Partha <span className="text-yellow-500">Sarathy</span>
            </h1>

            {/* Title */}
            <h2 className="text-base sm:text-lg md:text-xl text-yellow-500 font-medium mb-3 sm:mb-4 flex items-center gap-2">
              <span className="w-4 sm:w-6 h-px bg-yellow-500" />
              Java Backend Developer
            </h2>

            {/* Description */}
            <p className="text-sm text-neutral-400 mb-3 sm:mb-4 leading-relaxed">
              Passionate about building robust and scalable backend systems.
              Specializing in{" "}
              <span className="text-yellow-500">Spring Boot</span>,{" "}
              <span className="text-yellow-500">REST APIs</span>, and{" "}
              <span className="text-yellow-500">Microservices</span>.
            </p>

            {/* Location */}
            <p className="text-xs text-neutral-500 mb-4 sm:mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
              <span className="text-yellow-500">TCS</span> • Bengaluru, India
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mb-4 sm:mb-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-lg transition-colors text-sm sm:text-base"
              >
                <FiMail size={16} />
                Contact Me
              </a>
              <a
                href="https://drive.google.com/file/d/1lPkSyRNXf8BY2POEvE7QnHNTIyvtEETy/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-black/50 border border-yellow-500/50 hover:border-yellow-500 text-white font-semibold rounded-lg transition-colors text-sm sm:text-base"
              >
                <FiDownload size={16} />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { icon: FiGithub, href: "https://github.com/Partha-2", label: "GitHub" },
                { icon: FiLinkedin, href: "https://www.linkedin.com/in/partha-sarathy-026121273", label: "LinkedIn" },
                { icon: FiCode, href: "https://leetcode.com/u/partha02/", label: "LeetCode" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-black/50 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-yellow-500 hover:border-yellow-500/50 transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 rounded-full bg-yellow-500/10 blur-2xl" />

              {/* Profile Photo */}
              <div className="relative w-64 h-64 xl:w-72 xl:h-72 rounded-full overflow-hidden border-4 border-yellow-500/30 shadow-xl shadow-yellow-500/10">
                <Image
                  src="/profile.png"
                  alt="Partha Sarathy"
                  width={288}
                  height={288}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

              {/* Decorative ring */}
              <div className="absolute -inset-6 rounded-full border border-yellow-500/20" />

              {/* Badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-black border border-yellow-500/50 rounded-full px-4 py-1.5 shadow-lg">
                <span className="text-yellow-500 text-xs font-bold">BACKEND DEVELOPER</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator - hidden on mobile */}
        <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-neutral-500 hover:text-yellow-500 transition-colors"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <div className="w-5 h-8 border border-current rounded-full flex justify-center pt-1.5">
              <div className="w-1 h-1.5 bg-current rounded-full animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
