"use client"

import { useEffect, useRef } from "react"
import { Award } from "lucide-react"

export default function Leadership() {
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
        <h2 className="text-4xl md:text-5xl font-bold mb-12 scroll-reveal">Leadership & Collaboration</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Leadership Experience */}
          <div className="space-y-6 scroll-reveal">
            <h3 className="text-2xl font-bold">Leadership Roles</h3>
            {[
              {
                title: "Research Lead",
                org: "Innovation Research Lab",
                desc: "Led 3 concurrent research projects with 12+ team members",
              },
              {
                title: "Department Representative",
                org: "Academic Council",
                desc: "Represented 200+ students in university decisions",
              },
              {
                title: "Mentor Coordinator",
                org: "University Mentorship Program",
                desc: "Managed mentoring relationships for 50+ students",
              },
              {
                title: "Event Organizer",
                org: "Global Tech Summit",
                desc: "Organized international conference with 500+ attendees",
              },
            ].map((role, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg border border-border hover:border-primary transition-all hover:shadow-md dark:neon-glow"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground">{role.title}</h4>
                    <p className="text-sm text-primary font-medium">{role.org}</p>
                    <p className="text-sm text-muted-foreground mt-1">{role.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Awards & Recognition */}
          <div className="space-y-6 scroll-reveal">
            <h3 className="text-2xl font-bold">Awards & Recognition</h3>
            {[
              {
                award: "Excellence in Research Award",
                year: "2024",
                org: "National Academic Institute",
              },
              {
                award: "Young Leader of the Year",
                year: "2023",
                org: "Global Scholars Forum",
              },
              {
                award: "Innovation Excellence Prize",
                year: "2023",
                org: "Tech Innovation Awards",
              },
              {
                award: "Academic Achievement Award",
                year: "2022",
                org: "University Honors",
              },
              {
                award: "Leadership Recognition",
                year: "2022",
                org: "Student Leadership Council",
              },
              {
                award: "Scholarship Excellence",
                year: "2021",
                org: "Merit-Based Award",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-4 rounded-lg border border-border hover:border-accent transition-all dark:neon-glow"
              >
                <Award size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-foreground">{item.award}</h4>
                  <p className="text-sm text-accent font-medium">{item.org}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
