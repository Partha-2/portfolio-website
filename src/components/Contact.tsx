"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCode } from "react-icons/fi";

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    { icon: FiMail, label: "Email", value: "mparthasarathy0000@gmail.com", href: "mailto:mparthasarathy0000@gmail.com" },
    { icon: FiPhone, label: "Phone", value: "+91 93447 76999" },
    { icon: FiMapPin, label: "Location", value: "Bengaluru, India" },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 border-t border-neutral-800">
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
              Contact
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Get In <span className="text-yellow-500">Touch</span>
            </h2>
            <p className="text-neutral-500 text-sm sm:text-base max-w-xl mx-auto">
              Have a project in mind? Let&apos;s discuss and build something great together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              {/* Info Cards */}
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info) => (
                  <div
                    key={info.label}
                    className="flex items-center gap-4 p-4 bg-neutral-900/80 border border-neutral-800 rounded-xl"
                  >
                    <div className="w-10 h-10 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-yellow-500" size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-neutral-500 text-xs">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-white text-sm hover:text-yellow-500 transition-colors truncate block">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white text-sm truncate">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <p className="text-neutral-500 text-xs sm:text-sm mb-3">Connect with me</p>
                <div className="flex gap-3">
                  {[
                    { icon: FiGithub, href: "https://github.com/Partha-2" },
                    { icon: FiLinkedin, href: "https://www.linkedin.com/in/partha-sarathy-026121273" },
                    { icon: FiCode, href: "https://leetcode.com/u/partha02/" },
                  ].map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-500 hover:text-yellow-500 hover:border-yellow-500/50 transition-colors"
                    >
                      <link.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-4 sm:p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                  <span className="text-yellow-500 text-sm font-medium">Available for opportunities</span>
                </div>
                <p className="text-neutral-500 text-xs sm:text-sm">
                  Looking for new opportunities as a Java Backend Developer.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm text-neutral-400 mb-1.5">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  required
                  className="w-full px-4 py-2.5 sm:py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white text-sm placeholder-neutral-600 focus:border-yellow-500 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm text-neutral-400 mb-1.5">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  required
                  className="w-full px-4 py-2.5 sm:py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white text-sm placeholder-neutral-600 focus:border-yellow-500 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm text-neutral-400 mb-1.5">Message</label>
                <textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-4 py-2.5 sm:py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white text-sm placeholder-neutral-600 focus:border-yellow-500 focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className={`w-full py-2.5 sm:py-3 rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-colors ${
                  submitted
                    ? "bg-green-500 text-white"
                    : "bg-yellow-500 hover:bg-yellow-400 text-black"
                }`}
              >
                {isSubmitting ? (
                  <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                ) : submitted ? (
                  "Message Sent!"
                ) : (
                  <>
                    <FiSend size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
