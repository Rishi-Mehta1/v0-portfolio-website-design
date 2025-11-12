"use client"

import { useEffect, useRef } from "react"
import { CheckCircle2, Zap, Star, Target, Award, Rocket, Sparkles, Crown } from "lucide-react"

const timelineItems = [
  {
    id: 1,
    year: "2023",
    title: "Foundation",
    description: "Started academic journey",
    icon: Star,
    milestone: "High School Excellence",
  },
  {
    id: 2,
    year: "2023",
    title: "Admission at PDEU",
    description: "Joined B.Tech in Computer Engineering",
    icon: Zap,
    milestone: "PDEU Enrollment",
  },
  {
    id: 3,
    year: "2023",
    title: "Learn First Coding Language",
    description: "Study core Btech subjects",
    icon: Rocket,
    milestone: "C/C++ Proficiency",
  },
  {
    id: 4,
    year: "2024",
    title: "First Project",
    description: "Built my first software and hardware project",
    icon: Zap,
    milestone: "Published First Paper",
  },
  {
    id: 5,
    year: "2024",
    title: "Initial Leadership",
    description: "Leading team projects",
    icon: Rocket,
    milestone: "Team Leadership",
  },
  {
    id: 6,
    year: "2024",
    title: "Leadership Peak",
    description: "Mentoring next generation",
    icon: Crown,
    milestone: "Mentor Role",
  },
  {
    id: 7,
    year: "2025",
    title: "Making various project and taking part in hackathon",
    description: "Learning new things",
    icon: CheckCircle2,
    milestone: "Explore outside world",
  },
  {
    id: 8,
    year: "2026+",
    title: "Future Vision",
    description: "It is not ending, but just a start of new evolution",
    icon: Target,
    milestone: "Global Impact",
  },
]

export default function HorizontalTimeline() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
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

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-background via-muted/50 to-background dark:from-background dark:via-card/30 dark:to-background"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="scroll-reveal mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Journey Timeline</h2>
          <p className="text-lg text-muted-foreground">Scroll left and right to explore milestones and achievements</p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Gradient Overlays for Scroll Effect */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent dark:from-background dark:to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent dark:from-background dark:to-transparent pointer-events-none z-10" />

          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide scroll-smooth px-4"
            style={{ scrollBehavior: "smooth" }}
          >
            <div className="flex gap-6 min-w-max pb-4">
              {/* Timeline Items */}
              {timelineItems.map((item, index) => {
                const Icon = item.icon
                const isActive = index <= 5 // First 6 items are "completed"

                return (
                  <div key={item.id} className="scroll-reveal">
                    <div
                      className={`
                        relative w-72 h-80 p-6 rounded-2xl transition-all duration-500 transform hover:scale-105
                        flex flex-col justify-between
                        ${isActive
                          ? "bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/50 dark:from-primary/20 dark:to-primary/10 dark:border-primary/80 dark:neon-glow"
                          : "bg-muted/50 border-2 border-muted-foreground/20 dark:bg-card/30 dark:border-muted-foreground/30"
                        }
                      `}
                    >
                      {/* Top Section */}
                      <div>
                        {/* Icon */}
                        <div
                          className={`
                            w-14 h-14 rounded-full flex items-center justify-center mb-4
                            ${isActive
                              ? "bg-primary/20 dark:bg-primary/40"
                              : "bg-muted-foreground/10 dark:bg-muted-foreground/20"
                            }
                          `}
                        >
                          <Icon
                            size={28}
                            className={isActive ? "text-primary dark:text-primary" : "text-muted-foreground"}
                          />
                        </div>

                        {/* Year */}
                        <div className="text-sm font-bold text-primary dark:text-primary/80 mb-1">{item.year}</div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>

                        {/* Description */}
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>

                      {/* Bottom Section */}
                      <div className="flex items-center justify-between pt-4 border-t border-muted-foreground/10">
                        <span
                          className={`text-xs font-semibold px-3 py-1 rounded-full ${isActive
                            ? "bg-primary/20 text-primary dark:bg-primary/30 dark:text-primary"
                            : "bg-muted-foreground/10 text-muted-foreground"
                            }`}
                        >
                          {item.milestone}
                        </span>
                        {isActive && (
                          <CheckCircle2 size={16} className="text-primary dark:text-primary animate-pulse" />
                        )}
                      </div>

                      {/* Background Decoration */}
                      {isActive && (
                        <div className="absolute top-2 right-2 w-20 h-20 bg-primary/5 rounded-full blur-2xl pointer-events-none dark:bg-primary/10" />
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors dark:bg-primary/20 dark:hover:bg-primary/30 dark:neon-glow-hover"
              aria-label="Scroll timeline left"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors dark:bg-primary/20 dark:hover:bg-primary/30 dark:neon-glow-hover"
              aria-label="Scroll timeline right"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center gap-1 mt-6">
            {timelineItems.map((_, idx) => (
              <div
                key={idx}
                className={`h-1 rounded-full transition-all ${idx <= 5 ? "w-6 bg-primary dark:bg-primary" : "w-2 bg-muted-foreground/30"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .dark .neon-glow-hover:hover {
          box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.5);
        }
      `}</style>
    </section>
  )
}
