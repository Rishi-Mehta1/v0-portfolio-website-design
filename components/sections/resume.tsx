"use client"

import { useEffect, useRef } from "react"
import { Download } from "lucide-react"

export default function Resume() {
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
        <div className="flex justify-between items-start mb-12">
          <h2 className="text-4xl md:text-5xl font-bold scroll-reveal">Education & Experience</h2>
          <a 
            href="/Kunj_Shah_CV.pdf"
            download="Kunj_Shah_CV.pdf"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all inline-flex items-center gap-2 scroll-reveal">
          Download CV</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="space-y-6 scroll-reveal">
            <h3 className="text-2xl font-bold">Education</h3>
            {[
              {
                school: "Pandit Deendayal Energy University",
                degree: "B.Tech in Computer Science",
                year: "2023 - 2027",
                highlights: "CGPA: 9.57",
              },
              {
                school: "NTA",
                degree: "Jee Mains",
                year: "2021 - 2023",
                highlights: "94.2 percentile",
              },
            ].map((edu, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg border border-border hover:border-primary hover:bg-muted/50 transition-all cursor-pointer"
              >
                <div className="text-sm text-primary font-semibold">{edu.year}</div>
                <div className="text-xl font-bold text-foreground mt-2">{edu.degree}</div>
                <div className="text-muted-foreground">{edu.school}</div>
                <div className="text-sm text-muted-foreground mt-2">{edu.highlights}</div>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div className="space-y-6 scroll-reveal">
            <h3 className="text-2xl font-bold">Experience</h3>
            {[
              {
                role: "Research Lead",
                company: "MP Lab",
                year: "2024",
                highlights: "Leading research paper",
              },
              {
                role: "GD Mentor",
                company: "University Club",
                year: "2024 - 2025",
                highlights: "Mentoring 10+ students",
              },
              {
                role: "Project Coordinator",
                company: "Tech Nova",
                year: "2024",
                highlights: "Coordinated cross-functional teams",
              },
            ].map((exp, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg border border-border hover:border-accent hover:bg-muted/50 transition-all cursor-pointer"
              >
                <div className="text-sm text-accent font-semibold">{exp.year}</div>
                <div className="text-xl font-bold text-foreground mt-2">{exp.role}</div>
                <div className="text-muted-foreground">{exp.company}</div>
                <div className="text-sm text-muted-foreground mt-2">{exp.highlights}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Overview */}
        <div className="mt-12 p-6 rounded-lg glassmorphism dark:neon-glow scroll-reveal">
          <h3 className="text-2xl font-bold mb-6">Key Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                category: "Technical",
                skills: ["Python", "React", "Node.js", "Machine Learning", "Data Science"],
              },
              {
                category: "Research",
                skills: ["Literature Review", "Data Analysis", "Academic Writing", "Presentation"],
              },
              {
                category: "Leadership",
                skills: ["Team Management", "Project Planning", "Communication", "Strategic Thinking"],
              },
            ].map((skillGroup, idx) => (
              <div key={idx}>
                <h4 className="font-bold text-primary mb-3">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill) => (
                    <span key={skill} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
