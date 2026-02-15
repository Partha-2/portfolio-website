"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
          scrolled ? "bg-black/90 backdrop-blur-sm border-b border-neutral-800" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <a href="#" className="text-lg sm:text-xl font-bold text-white">
              PS<span className="text-yellow-500">.</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollTo(item.href)}
                  className="text-sm text-neutral-400 hover:text-yellow-500 transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#contact")}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-black text-sm font-medium rounded-lg transition-colors"
              >
                Get in Touch
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-2 -mr-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/95" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-64 bg-neutral-900 border-l border-neutral-800 p-6 pt-20">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollTo(item.href)}
                  className="text-left text-neutral-400 hover:text-yellow-500 transition-colors py-3 border-b border-neutral-800"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#contact")}
                className="mt-4 px-4 py-3 bg-yellow-500 hover:bg-yellow-400 text-black text-sm font-medium rounded-lg transition-colors text-center"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
