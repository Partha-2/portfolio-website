"use client";

import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiCode } from "react-icons/fi";

const navLinks = ["About", "Skills", "Projects", "Experience", "Contact"];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 sm:py-12 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <a href="#" className="text-lg sm:text-xl font-bold text-white">
              PS<span className="text-yellow-500">.</span>
            </a>
            <nav className="hidden sm:flex items-center gap-4 lg:gap-6">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-xs sm:text-sm text-neutral-500 hover:text-yellow-500 transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Social & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Partha-2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-yellow-500 transition-colors p-2"
              aria-label="GitHub"
            >
              <FiGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/partha-sarathy-026121273"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-yellow-500 transition-colors p-2"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href="https://leetcode.com/u/partha02/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-yellow-500 transition-colors p-2"
              aria-label="LeetCode"
            >
              <FiCode size={18} />
            </a>
            <a
              href="mailto:mparthasarathy0000@gmail.com"
              className="text-neutral-500 hover:text-yellow-500 transition-colors p-2"
              aria-label="Email"
            >
              <FiMail size={18} />
            </a>
            <div className="w-px h-5 bg-neutral-800 mx-1" />
            <button
              onClick={scrollToTop}
              className="text-neutral-500 hover:text-yellow-500 transition-colors p-2"
              aria-label="Back to top"
            >
              <FiArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs sm:text-sm text-neutral-600">
          <p>© {new Date().getFullYear()} Partha Sarathy</p>
          <p>Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
