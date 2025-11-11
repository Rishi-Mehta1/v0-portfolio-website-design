"use client"

import { useState, useEffect, useRef } from "react"

export default function Skills() {
  const [selectedTab, setSelectedTab] = useState("technical")
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

  const skillsData = {
    technical: [
      { name: "Python", level: 95 },
      { name: "React/Next.js", level: 90 },
      { name: "Machine Learning", level: 85 },
      { name: "Data Science", level: 88 },
      { name: "Full Stack Development", level: 92 },
      { name: "Cloud Technologies", level: 80 },
    ],
    creative: [
      { name: "UI/UX Design", level: 78 },
      { name: "Data Visualization", level: 85 },
      { name: "Research Writing", level: 92 },
      { name: "Presentation Design", level: 88 },
      { name: "Creative Problem Solving", level: 90 },
      { name: "Visual Communication", level: 82 },
    ],
    soft: [
      { name: "Leadership", level: 88 },
      { name: "Communication", level: 92 },
      { name: "Collaboration", level: 90 },
      { name: "Critical Thinking", level: 95 },
      { name: "Project Management", level: 85 },
      { name: "Adaptability", level: 88 },
    ],
  }

  const tabs = [
    { id: "technical", label: "Technical" },
    { id: "creative", label: "Creative" },
    { id: "soft", label: "Soft Skills" },
  ]

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 scroll-reveal">Advanced Skills</h2>

        {/* Tabs */}
        <div className="flex gap-4 mb-12 scroll-reveal overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`px-6 py-2 rounded-lg font-semibold whitespace-nowrap transition-all ${
                selectedTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 scroll-reveal">
          {skillsData[selectedTab as keyof typeof skillsData].map((skill, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-foreground">{skill.name}</span>
                <span className="text-sm text-primary font-bold">{skill.level}%</span>
              </div>
              <div className="w-full h-3 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Summary */}
        <div className="mt-12 p-6 rounded-lg glassmorphism dark:neon-glow scroll-reveal">
          <h3 className="text-2xl font-bold mb-6">Proficiency Breakdown</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: "Expert Level", value: "45%", color: "from-primary to-accent" },
              { label: "Advanced", value: "35%", color: "from-accent to-primary" },
              { label: "Intermediate", value: "20%", color: "from-primary/50 to-accent/50" },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className={`text-4xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                  {item.value}
                </div>
                <div className="text-muted-foreground mt-2">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
