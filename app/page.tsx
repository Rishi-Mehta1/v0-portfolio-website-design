"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/sections/hero"
import Introduction from "@/components/sections/introduction"
import Resume from "@/components/sections/resume"
import Projects from "@/components/sections/projects"
import Skills from "@/components/sections/skills"
import Leadership from "@/components/sections/leadership"
import GlobalAwareness from "@/components/sections/global-awareness"
import FutureGoals from "@/components/sections/future-goals"
import Conclusion from "@/components/sections/conclusion"
import Testimonials from "@/components/sections/testimonials"
import Footer from "@/components/footer"
import BackToTop from "@/components/back-to-top"
import HorizontalTimeline from "@/components/sections/horizontal-timeline"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <section id="home">
          <Hero />
        </section>
        <section id="introduction">
          <Introduction />
        </section>
        <section id="timeline">
          <HorizontalTimeline />
        </section>
        <section id="resume">
          <Resume />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="leadership">
          <Leadership />
        </section>
        <section id="global-awareness">
          <GlobalAwareness />
        </section>
        <section id="future-goals">
          <FutureGoals />
        </section>
        <section id="conclusion">
          <Conclusion />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
