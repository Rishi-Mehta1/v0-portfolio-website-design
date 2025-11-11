"use client"

import { useEffect, useRef } from "react"

export default function Conclusion() {
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
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center scroll-reveal">Reflections & SWOT Analysis</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Personal Reflection */}
          <div className="scroll-reveal p-6 rounded-lg glassmorphism dark:neon-glow">
            <h3 className="text-2xl font-bold mb-4">Personal Reflection</h3>
            <p className="text-muted-foreground leading-relaxed">
              My journey has been defined by curiosity, perseverance, and a genuine desire to make a positive impact.
              Every challenge has been a learning opportunity, and every achievement has reinforced my commitment to
              excellence and innovation.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              I believe that true success is measured not by personal accolades, but by the positive change we create
              and the people we inspire along the way.
            </p>
          </div>

          {/* Key Learnings */}
          <div className="scroll-reveal p-6 rounded-lg glassmorphism dark:neon-glow">
            <h3 className="text-2xl font-bold mb-4">Key Learnings</h3>
            <ul className="space-y-3">
              {[
                "Collaboration multiplies impact",
                "Failures are stepping stones to success",
                "Continuous learning is essential",
                "Empathy drives innovation",
                "Persistence overcomes obstacles",
              ].map((learning, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span className="text-foreground">{learning}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SWOT Analysis */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 scroll-reveal">
          {[
            {
              title: "Strengths",
              color: "from-primary",
              items: ["Strong analytical skills", "Leadership abilities", "Research expertise", "Communication skills"],
            },
            {
              title: "Weaknesses",
              color: "from-accent",
              items: ["Limited industry experience", "Work-life balance", "Perfectionism", "Delegation challenges"],
            },
            {
              title: "Opportunities",
              color: "from-primary",
              items: ["Global collaboration", "Emerging technologies", "Policy influence", "Educational initiatives"],
            },
            {
              title: "Threats",
              color: "from-accent",
              items: ["Rapid tech changes", "Competition", "Resource constraints", "Market uncertainties"],
            },
          ].map((section, idx) => (
            <div key={idx} className="p-6 rounded-lg border border-border hover:border-primary transition-all">
              <div
                className={`text-xl font-bold bg-gradient-to-r ${section.color} to-accent bg-clip-text text-transparent mb-4`}
              >
                {section.title}
              </div>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
