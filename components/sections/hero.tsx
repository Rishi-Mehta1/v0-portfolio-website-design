"use client"

import { ArrowDown } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-slideInUp">
            <div className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
              Welcome to my portfolio ✨
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold leading-tight text-balance">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Kunj Shah</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Academic excellence meets creative innovation. I'm passionate about research, development, and making
              meaningful contributions to the world through technology and collaboration.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="#projects"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                View My Portfolio <ArrowDown size={18} />
              </Link>
              <Link
                href="#resume"
                className="px-8 py-3 border border-border rounded-lg font-semibold hover:bg-muted transition-colors"
              >
                Download CV
              </Link>
            </div>

            <div className="pt-8 space-y-2">
              <p className="text-sm text-muted-foreground">Quick Facts:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Academic Leader & Researcher
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  Technology & Innovation Enthusiast
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Global Impact Focused
                </li>
              </ul>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-full min-h-[500px] hidden md:flex items-center justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <div className="absolute inset-0 border border-primary/20 rounded-3xl glassmorphism dark:neon-glow animate-float" />
              <div className="absolute inset-4 bg-gradient-to-br from-primary to-accent rounded-3xl opacity-5" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary dark:text-accent">KS</div>
                  <p className="text-muted-foreground mt-2">Academic Leader</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground">Scroll to explore</span>
        <ArrowDown size={20} className="text-primary" />
      </div>
    </section>
  )
}
