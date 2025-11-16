'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { resumeData } from '@/lib/resume-data';
import { ExternalLink, ChevronRight, Code2, Target, Zap } from 'lucide-react';

type ProjectTab = 'overview' | 'methodology' | 'outcomes' | 'challenges';

interface ProjectCardState {
  [key: number]: ProjectTab;
}

export function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(0);
  const [projectTab, setProjectTab] = useState<ProjectCardState>({
    0: 'overview',
    1: 'overview',
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, rotateY: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.6, type: 'spring' },
    },
  };

  const tabs: ProjectTab[] = ['overview', 'methodology', 'outcomes', 'challenges'];

  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center justify-center py-20 px-6 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl" />

      <motion.div
        className="relative z-10 max-w-6xl w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Section Header */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-300 via-pink-300 to-purple-300">
              Projects & Research
            </span>
          </h2>
          <p className="text-purple-200/70 text-lg">
            Interdisciplinary work combining technology, data, and human-centered design
          </p>
          <div className="h-1 w-20 bg-linear-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
        >
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              onClick={() => setActiveProject(activeProject === index ? null : index)}
              className="cursor-pointer"
            >
              <div className="h-full rounded-2xl backdrop-blur-xl bg-linear-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 overflow-hidden p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-200 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-purple-300/70 text-sm">{project.description}</p>
                  </div>
                  <motion.div
                    animate={{ rotate: activeProject === index ? 90 : 0 }}
                    className="text-purple-400"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </motion.div>
                </div>

                {/* Technologies */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Expandable Content */}
                <AnimatePresence>
                  {activeProject === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6 pt-6 border-t border-purple-500/20 space-y-4"
                    >
                      {/* Tab Navigation */}
                      <div className="flex gap-2 p-2 rounded-lg bg-slate-800/50 flex-wrap">
                        {tabs.map((tab) => (
                          <button
                            key={tab}
                            onClick={(e) => {
                              e.stopPropagation();
                              setProjectTab({ ...projectTab, [index]: tab });
                            }}
                            className={`text-sm font-medium px-3 py-1 rounded capitalize transition-all ${
                              projectTab[index] === tab
                                ? 'bg-linear-to-r from-purple-500 to-pink-500 text-white'
                                : 'text-purple-300 hover:text-purple-200'
                            }`}
                          >
                            {tab}
                          </button>
                        ))}
                      </div>

                      {/* Tab Content */}
                      <motion.div
                        key={projectTab[index]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-purple-100/70 text-sm space-y-3"
                      >
                        {projectTab[index] === 'overview' && (
                          <div>
                            <p className="font-semibold text-purple-300 mb-2">Overview</p>
                            <p>{project.overview}</p>
                          </div>
                        )}

                        {projectTab[index] === 'methodology' && (
                          <div>
                            <p className="font-semibold text-purple-300 mb-2 flex items-center gap-2">
                              <Code2 className="w-4 h-4" />
                              Methodology
                            </p>
                            <ul className="space-y-1">
                              {project.methodologies.map((method, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="text-purple-400 mt-1">→</span>
                                  {method}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {projectTab[index] === 'outcomes' && (
                          <div>
                            <p className="font-semibold text-purple-300 mb-2 flex items-center gap-2">
                              <Zap className="w-4 h-4" />
                              Outcomes
                            </p>
                            <ul className="space-y-1">
                              {project.outcomes.map((outcome, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="text-green-400 mt-1">✓</span>
                                  {outcome}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {projectTab[index] === 'challenges' && (
                          <div>
                            <p className="font-semibold text-purple-300 mb-2 flex items-center gap-2">
                              <Target className="w-4 h-4" />
                              Challenges & Solutions
                            </p>
                            <p>{project.challenges}</p>
                          </div>
                        )}
                      </motion.div>

                      {/* View More Link */}
                      {project.link && (
                        <motion.a
                          whileHover={{ x: 5 }}
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-semibold"
                        >
                          View Project <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Projects;
