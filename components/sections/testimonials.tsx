"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export default function Testimonials() {
  const ref = useRef(null)
  const [current, setCurrent] = useState(0)

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

  const testimonials = [
    {
      quote:
        "Kunj is an exceptional researcher with an unwavering commitment to excellence. Their work has significantly contributed to our lab's research outcomes.",
      author: "Dr. Deepak Sahu",
      role: "Assistant Professor",
      organization: "Pandit Deendayalal Energy University",
    },
    {
      quote:
        "As a mentor, Kunj brings warmth, guidance, and genuine care. They make complex concepts accessible and inspire confidence in their mentees.",
      author: "Unknown",
      role: "2nd Year CSE student",
      organization: "Pandit Deendayalal Energy University",
    },
    {
      quote:
        "Kunj's leadership transformed our team dynamics. Their ability to inspire and coordinate diverse talents is remarkable.",
      author: "Maurya Darji",
      role: "Team Member",
      organization: "Team Rocket",
    },
    {
      quote:
        "The commitment to global safety, ethical innovation, and community well-being that Kunj brings to the Tourist Safety Project is truly inspiring. Their dedication to protecting travelers and promoting responsible tourism is making a real difference.",
      author: "Dr Santosh Kumar Bharti",
      role: "Hackathon Coordinator",
      organization: "TeenTitansGo",
    },
  ]

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center scroll-reveal">Testimonials & Recognition</h2>

        {/* Testimonial Carousel */}
        <div className="relative scroll-reveal">
          <div className="p-8 rounded-xl glassmorphism dark:neon-glow min-h-64 flex flex-col justify-between">
            <div>
              <Quote className="w-8 h-8 text-primary mb-4" />
              <p className="text-lg md:text-xl text-foreground leading-relaxed italic mb-6">
                &ldquo;{testimonials[current].quote}&rdquo;
              </p>
            </div>

            <div>
              <p className="font-bold text-foreground">{testimonials[current].author}</p>
              <p className="text-sm text-primary">{testimonials[current].role}</p>
              <p className="text-xs text-muted-foreground">{testimonials[current].organization}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prev}
              className="p-2 rounded-lg border border-border hover:border-primary hover:bg-muted transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${idx === current ? "bg-primary w-8" : "bg-muted"}`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 rounded-lg border border-border hover:border-primary hover:bg-muted transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Additional Recognition */}
        <div className="mt-12 p-6 rounded-lg border border-border scroll-reveal">
          <h3 className="text-2xl font-bold mb-6">Recognition & Media</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { publication: "Tech Innovation Weekly", title: "Rising Star in Research" },
              { publication: "Academic Excellence Magazine", title: "Future Leaders Feature" },
              { publication: "Global Scholars Platform", title: "Change Maker Profile" },
              { publication: "University News", title: "Academic Achievement Highlight" },
            ].map((item, idx) => (
              <div key={idx} className="p-3 rounded hover:bg-muted transition-colors">
                <p className="text-sm text-primary font-medium">{item.publication}</p>
                <p className="font-semibold text-foreground">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
