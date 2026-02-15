"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Dynamic import for 3D scene to avoid SSR issues
const BatmanScene = dynamic(() => import("@/components/BatmanScene"), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]" />
  ),
});

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent relative">
      {/* 3D Batman Background */}
      <BatmanScene />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <div className="bg-[#0a0a0a]/90 backdrop-blur-sm">
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </div>
      </div>

          </main>
  );
}
