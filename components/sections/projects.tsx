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
      title: "Smart Traffic Signal System for Ambulance Detection",
      category: "Research & Innovation",
      image: "/report.png",
      description: "Developed an intelligent traffic control system that prioritizes ambulances using sensor-based detection.",
      details:
        "Designed and implemented a smart traffic management system that detects approaching ambulances through sensors and automatically switches traffic signals to provide a clear route. The project leverages IoT sensors and embedded systems for real-time decision-making and improved emergency response efficiency.",
      achievements: [
        "Reduced average ambulance delay by 40%",
        "Integrated IoT and sensor-based automation",
        "Presented as a mini research project on smart mobility",
      ]
    },
    {
      title: "EcoTransit – Sustainable Travel Reward System",
      category: "Sustainability",
      image: "/decoder.png",
      description: "Led Team Decoderz in developing a platform that rewards eco-friendly travelers during a national-level hackathon.",
      details:
        "As the team leader of Decoderz, I guided the development of EcoTransit — an innovative platform promoting sustainable travel. The system detects eco-friendly travel modes such as walking, cycling, or public transport and rewards users with redeemable points. Built using React, Node.js, and Firebase with integrated GPS tracking and a gamified reward system to motivate green commuting.",
      achievements: [
        "Led a 4-member team to develop a full prototype within 36 hours",
        "Shortlisted among top innovative sustainability projects",
        "Promoted awareness of eco-friendly transportation through gamification"
      ],
    },
    {
      title: "Green Hydrogen Blockchain – Decentralized Energy Tracking System Dashboard",
      category: "Environment Concern",
      image: "/gh.png",
      description: "Led the development of a blockchain-based solution to ensure transparency and traceability in green hydrogen production and distribution.",
      details:
        "Developed during a sustainability-focused hackathon, this project leverages blockchain technology to track and verify green hydrogen generation, storage, and supply chains. It ensures secure, immutable data records, promoting accountability and reducing carbon fraud. The system integrates IoT sensors to capture real-time energy data, which is then stored on a decentralized ledger for transparent auditing.",
      achievements: [
        "Led a 4-member team during a 48-hour hackathon",
        "Built a functional prototype integrating IoT and blockchain",
        "Recognized among top projects for sustainable energy innovation"
      ],
    },
    {
      title: "Tic Tac Toe – Interactive Game Development",
      category: "Development & Logic Design",
      image: "/game.jpg",
      description: "Developed a classic two-player Tic Tac Toe game with interactive UI and winning logic.",
      details:
        "Created an engaging version of the traditional Tic Tac Toe game using HTML, CSS, and JavaScript (or Python/React if you used another stack). Implemented real-time win detection, draw handling, and restart functionality. Designed a responsive user interface with smooth animations and logical gameplay flow to enhance the user experience.",
      achievements: [
        "Built a fully functional two-player game",
        "Integrated winning and draw algorithms",
        "Responsive and visually appealing design"
      ],
    },
    {
      title: "Mentorship Program Platform – GD Core Initiative",
      category: "Leadership & Education",
      image: "/mentorship-learning-platform.jpg",
      description: "As GD Core member, led subcommittees in developing a digital platform connecting mentors and mentees across domains.",
      details:
        "As part of the Encode Core team, I spearheaded the Mentorship Program initiative — a platform designed to connect mentors and mentees globally. Oversaw multiple subcommittees handling development, outreach, and community engagement. The platform includes smart mentor-mentee matching algorithms, progress tracking, and feedback analytics to ensure impactful learning experiences.",
      achievements: [
        "Guided 5+ subcommittees under GD Core",
        "Facilitated 100+ mentorship connections",
        "Achieved 92% participant satisfaction rate"
      ],
    },
    {
      title: "Tourist Safety Portal – Cybersecurity & Blockchain Dashboard",
      category: "Technology & Safety",
      image: "/ts.png",
      description: "Developed a blockchain-integrated portal ensuring traveler safety and secure data sharing.",
      details:
        "Contributed as a team member to the development of a Tourist Safety Portal aimed at enhancing traveler security using blockchain and cybersecurity technologies. The system features real-time incident reporting, location tracking, and a decentralized data dashboard that ensures transparency and tamper-proof recordkeeping. Focused on backend integration, user authentication, and secure data exchange mechanisms.",
      achievements: [
        "Collaborated in a 5-member development team",
        "Implemented blockchain-based data verification",
        "Enhanced security and transparency for traveler reports"
      ],
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
