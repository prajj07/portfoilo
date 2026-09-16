"use client";

import { IntroLoader } from "@/components/intro/IntroLoader";
import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { SystemSection } from "@/components/system/SystemSection";
import { WorkSection } from "@/components/work/WorkSection";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { ThinkingSection } from "@/components/thinking/ThinkingSection";
import { LabSection } from "@/components/lab/LabSection";
import { NowSection } from "@/components/now/NowSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <IntroLoader />
      <a
        href="#main-content"
        className="sr-only fixed left-4 top-4 z-[60] bg-foreground px-4 py-2 text-background focus:not-sr-only"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" aria-label="Portfolio content">
        <Hero />
        <SystemSection />
        <WorkSection />
        <ExperienceSection />
        <ThinkingSection />
        <LabSection />
        <NowSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
