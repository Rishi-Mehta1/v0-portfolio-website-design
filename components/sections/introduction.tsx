"use client"

import { useEffect, useRef } from "react"

export default function Introduction() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active")
        }
      })
    })

    const elements = ref.current?.querySelectorAll(".scroll-reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => elements?.forEach((el) => observer.unobserve(el))
  }, [])

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Content */}
          <div className="md:col-span-2 space-y-6 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold">
              Learning Philosophy <span className="text-primary">&</span> Values
            </h2>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                My approach to learning is rooted in curiosity, critical thinking, and practical application. I believe
                that knowledge gains true value when it's shared and used to make a positive impact on society.
              </p>
              <p>
                I'm driven by a commitment to excellence in everything I pursue—whether it's academic work, research
                projects, or collaborative initiatives. I value integrity, continuous growth, and the power of diverse
                perspectives.
              </p>
              <p>
                As a global citizen, I'm passionate about understanding complex challenges and working toward solutions
                that benefit humanity. My interests span across technology, ethics, sustainability, and social impact.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
              {[
                { label: "Projects Completed", value: "15+" },
                { label: "Research Papers", value: "1" },
                { label: "Awards & Recognition", value: "5" },
                { label: "Freelancing", value: "6" },
              ].map((stat) => (
                <div key={stat.label} className="p-4 rounded-lg glassmorphism dark:neon-glow">
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="scroll-reveal space-y-6">
            <h3 className="text-2xl font-bold">Journey</h3>
            <div className="space-y-6">
              {[
                 
                { year: "2025", title: "Academic Achievements", desc: "Earned top grades and recognition for consistent performance and dedication" },
                { year: "2024", title: "Collaborative Projects", desc: "Participated in interdisciplinary team projects and hackathons" },
                { year: "2023", title: "New Beginnings", desc: "Embarked on my B.Tech journey in Computer Engineering at PDEU" },

              ].map((item) => (
                <div key={item.year} className="relative pl-6 pb-4 border-l-2 border-primary/30">
                  <div className="absolute -left-2.5 top-1 w-4 h-4 rounded-full bg-primary" />
                  <div className="text-sm font-bold text-primary">{item.year}</div>
                  <div className="font-semibold text-foreground">{item.title}</div>
                  <div className="text-sm text-muted-foreground">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
