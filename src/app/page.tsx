"use client";

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingNav from "@/components/FloatingNav";
import dynamic from "next/dynamic";

// Dynamically import the Particle Background to avoid SSR issues with Three.js
const ParticleBackground = dynamic(() => import("@/components/ParticleBackground"), {
  ssr: false,
});

export default function Home() {
  return (
    <main id="top" className="relative min-h-screen selection:bg-purple-500/30">
      <ParticleBackground />
      <FloatingNav />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
