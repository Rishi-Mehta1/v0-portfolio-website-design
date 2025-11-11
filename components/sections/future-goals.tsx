"use client"

import { useEffect, useRef } from "react"
import { Rocket, Target } from "lucide-react"

export default function FutureGoals() {
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
        <h2 className="text-4xl md:text-5xl font-bold mb-12 scroll-reveal">Future Goals & Vision</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="scroll-reveal space-y-6">
            <div className="flex items-center gap-3">
              <Rocket className="text-primary" size={32} />
              <h3 className="text-2xl font-bold">My Vision</h3>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              To become a catalyst for innovation and positive change, leveraging technology and research to address
              global challenges while mentoring the next generation of leaders and creators.
            </p>

            <div className="space-y-4">
              {[
                "Build impactful research initiatives that change the world",
                "Lead interdisciplinary teams on complex challenges",
                "Contribute to policy-making through evidence-based research",
                "Create educational programs for underrepresented communities",
              ].map((goal, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                  <span className="text-primary font-bold mt-1">→</span>
                  <span className="text-foreground">{goal}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="scroll-reveal space-y-6">
            <div className="flex items-center gap-3">
              <Target className="text-accent" size={32} />
              <h3 className="text-2xl font-bold">My Next Steps</h3>
            </div>

            <div className="space-y-6">
              {[
                {
                  timeframe: "2025",
                  goal: "Complete Graduate Studies",
                  desc: "Pursue advanced degree in specialized research area",
                },
                {
                  timeframe: "2025-2026",
                  goal: "Publish Breakthrough Research",
                  desc: "Publish 3+ papers in top-tier journals",
                },
                {
                  timeframe: "2026",
                  goal: "Establish Research Center",
                  desc: "Create innovation hub for collaborative research",
                },
                {
                  timeframe: "2027+",
                  goal: "Global Leadership",
                  desc: "Lead international initiatives for positive change",
                },
              ].map((item, idx) => (
                <div key={idx} className="relative pl-8 pb-4 border-l-2 border-primary/30">
                  <div className="absolute -left-4 top-0 w-6 h-6 rounded-full bg-primary border-4 border-background dark:border-card" />
                  <div className="text-sm font-bold text-primary">{item.timeframe}</div>
                  <div className="text-lg font-bold text-foreground mt-1">{item.goal}</div>
                  <div className="text-muted-foreground mt-1">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
