"use client"

import { useEffect, useRef } from "react"
import { Globe } from "lucide-react"

export default function GlobalAwareness() {
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
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 scroll-reveal">Global Awareness & Ethics</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Global Initiatives */}
          <div className="scroll-reveal space-y-6">
            <div className="flex items-center gap-3">
              <Globe className="text-primary" size={32} />
              <h3 className="text-2xl font-bold">Global Initiatives</h3>
            </div>

            {[
              {
                title: "Sustainable Development Goals",
                description: "Actively contributing to UN SDGs through research and community projects",
              },
              {
                title: "Climate Action Research",
                description: "Collaborating on data-driven climate solutions across continents",
              },
              {
                title: "Education Equity",
                description: "Mentoring underprivileged students and promoting inclusive learning",
              },
              {
                title: "Tech for Good",
                description: "Using technology to solve real-world social and environmental challenges",
              },
            ].map((initiative, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg border border-border hover:border-primary transition-all dark:neon-glow"
              >
                <h4 className="font-bold text-primary mb-2">{initiative.title}</h4>
                <p className="text-muted-foreground">{initiative.description}</p>
              </div>
            ))}
          </div>

          {/* Ethics & Values */}
          <div className="scroll-reveal space-y-6">
            <h3 className="text-2xl font-bold">Ethics & Values</h3>

            {[
              {
                value: "Integrity",
                description: "Committed to honest and ethical practices in all endeavors",
              },
              {
                value: "Inclusivity",
                description: "Celebrating diversity and ensuring equal opportunities for all",
              },
              {
                value: "Accountability",
                description: "Taking responsibility for actions and their impact on society",
              },
              {
                value: "Sustainability",
                description: "Making environmentally and socially conscious decisions",
              },
              {
                value: "Collaboration",
                description: "Believing in the power of collective action and shared knowledge",
              },
              {
                value: "Impact",
                description: "Focused on creating meaningful and measurable positive change",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">{idx + 1}</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{item.value}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 scroll-reveal">
          {[
            { icon: "🌍", stat: "6", label: "Countries Engaged" },
            { icon: "👥", stat: "200+", label: "Lives Impacted" },
            { icon: "📚", stat: "15", label: "Research Projects" },
            { icon: "🎯", stat: "8", label: "UN SDGs Addressed" },
          ].map((item, idx) => (
            <div key={idx} className="text-center p-6 rounded-lg glassmorphism dark:neon-glow">
              <div className="text-4xl mb-2">{item.icon}</div>
              <div className="text-3xl font-bold text-primary">{item.stat}</div>
              <div className="text-muted-foreground mt-2">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
