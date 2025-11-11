"use client"

import { useState, useEffect, useRef } from "react"
import { ExternalLink, X } from "lucide-react"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
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

  const projects = [
    {
      title: "AI Research Platform",
      category: "Research",
      image: "/ai-research-platform-dashboard.jpg",
      description: "Developed an innovative platform for collaborative AI research",
      details:
        "Led the development of a comprehensive AI research platform using React and Python. Implemented machine learning algorithms for data analysis and created interactive visualizations for research findings.",
      achievements: ["Published 2 papers", "Used by 50+ researchers", "3x faster analysis"],
    },
    {
      title: "Sustainable Solutions Hub",
      category: "Sustainability",
      image: "/sustainable-tech.png",
      description: "Platform promoting global sustainability initiatives",
      details:
        "Created a hub connecting sustainable projects worldwide. Built with modern web technologies and a focus on user experience and accessibility.",
      achievements: ["500+ active users", "Global reach", "Award winner"],
    },
    {
      title: "Academic Collaboration Network",
      category: "Social Impact",
      image: "/academic-network-platform.jpg",
      description: "Connecting scholars across continents for research collaboration",
      details:
        "Designed and developed a network for academic collaboration featuring real-time communication, project management tools, and publication sharing.",
      achievements: ["1000+ members", "200+ collaborations", "Fast growing"],
    },
    {
      title: "Data Visualization Dashboard",
      category: "Development",
      image: "/data-visualization-analytics-dashboard.jpg",
      description: "Real-time analytics dashboard for large-scale data",
      details:
        "Built an interactive dashboard for visualizing complex datasets using Recharts and D3.js. Handles millions of data points with smooth performance.",
      achievements: ["Real-time updates", "Scalable", "Mobile responsive"],
    },
    {
      title: "Mentorship Program Platform",
      category: "Education",
      image: "/mentorship-learning-platform.jpg",
      description: "Digital platform connecting mentors and mentees globally",
      details:
        "Developed a comprehensive mentorship platform with matching algorithms, progress tracking, and community features. Facilitated over 100 mentoring relationships.",
      achievements: ["92% satisfaction", "100+ mentors", "Growing daily"],
    },
    {
      title: "Research Data Management System",
      category: "Technology",
      image: "/research-data-management-system.jpg",
      description: "Centralized system for managing research data and collaboration",
      details:
        "Created a secure, scalable data management system for research teams. Includes version control, access management, and automated backup features.",
      achievements: ["Enterprise grade", "Secure", "User friendly"],
    },
  ]

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 scroll-reveal">Projects & Research</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-reveal">
          {projects.map((project, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-lg overflow-hidden border border-border hover:border-primary transition-all hover:shadow-lg dark:neon-glow"
            >
              <div className="relative h-48 bg-muted overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              </div>
              <div className="p-4">
                <div className="text-xs font-semibold text-primary mb-2">{project.category}</div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-background rounded-2xl max-w-2xl w-full max-h-screen overflow-y-auto glassmorphism">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <X size={20} />
              </button>

              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-6 space-y-6">
                <div>
                  <div className="text-sm font-semibold text-primary mb-2">{selectedProject.category}</div>
                  <h2 className="text-3xl font-bold text-foreground">{selectedProject.title}</h2>
                </div>

                <p className="text-lg text-muted-foreground">{selectedProject.details}</p>

                <div>
                  <h3 className="font-bold text-foreground mb-3">Key Achievements</h3>
                  <ul className="space-y-2">
                    {selectedProject.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-foreground">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all inline-flex items-center justify-center gap-2">
                  <ExternalLink size={18} /> View Details
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
