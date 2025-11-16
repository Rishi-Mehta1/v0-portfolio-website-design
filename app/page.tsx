'use client';

import React from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar-enhanced';
import { Hero } from '@/components/sections/hero-enhanced';
import { Introduction } from '@/components/sections/introduction-enhanced';
import { Resume } from '@/components/sections/resume-enhanced';
import { Projects } from '@/components/sections/projects-enhanced';
import { AdvancedSkills } from '@/components/sections/skills-enhanced';
import { SwotAnalysis } from '@/components/sections/swot-enhanced';
import { Testimonials } from '@/components/sections/testimonials-enhanced';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-slate-950 text-white scroll-smooth">
        {/* Fixed Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="relative">
          {/* Hero Section */}
          <Hero />

          {/* Introduction Section */}
          <Introduction />

          {/* Resume/CV Section */}
          <Resume />

          {/* Projects Section */}
          <Projects />

          {/* Advanced Skills Section */}
          <AdvancedSkills />

          {/* SWOT Analysis Section */}
          <SwotAnalysis />

          {/* Testimonials Section */}
          <Testimonials />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
