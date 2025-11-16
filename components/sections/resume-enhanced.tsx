'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { resumeData } from '@/lib/resume-data';
import { ChevronDown, BookOpen, Briefcase, Award } from 'lucide-react';

interface TabType {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const tabs: TabType[] = [
  { id: 'education', label: 'Education', icon: <BookOpen className="w-5 h-5" /> },
  { id: 'experience', label: 'Experience', icon: <Briefcase className="w-5 h-5" /> },
  { id: 'skills', label: 'Skills', icon: <Award className="w-5 h-5" /> },
  { id: 'certifications', label: 'Certifications', icon: <Award className="w-5 h-5" /> },
];

export function Resume() {
  const [activeTab, setActiveTab] = useState('education');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="resume" className="min-h-screen bg-linear-to-b from-slate-950 to-slate-900 py-20 px-6 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        {/* Title */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Resume & CV
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Education, experience, skills & certifications
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 gap-4 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setExpandedItem(null);
              }}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg backdrop-blur-xl border transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-linear-to-r from-purple-500 to-pink-500 text-white border-purple-400/50'
                  : 'bg-slate-800/50 text-slate-300 border-purple-500/20 hover:border-purple-500/50'
              }`}
            >
              {tab.icon}
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6"
        >
          {/* Education Tab */}
          {activeTab === 'education' && (
            <AnimatePresence mode="wait">
              {resumeData.education.map((edu) => (
                <motion.div
                  key={edu.school}
                  variants={itemVariants}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="p-6 rounded-xl backdrop-blur-xl bg-linear-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                      <p className="text-purple-300">{edu.school}</p>
                    </div>
                    <span className="text-sm text-slate-400">{edu.year}</span>
                  </div>
                  <p className="text-slate-300 text-sm mb-3">{edu.details}</p>
                  {edu.highlights && (
                    <button
                      onClick={() => setExpandedItem(expandedItem === edu.school ? null : edu.school)}
                      className="text-purple-400 hover:text-purple-300 text-sm flex items-center gap-1 transition-colors"
                    >
                      {expandedItem === edu.school ? 'Hide' : 'Show'} Details
                      <ChevronDown className={`w-4 h-4 transition-transform ${expandedItem === edu.school ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                  {expandedItem === edu.school && edu.highlights && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 pt-3 border-t border-purple-500/20 space-y-1"
                    >
                      {edu.highlights.map((highlight, i) => (
                        <p key={i} className="text-slate-300 text-sm">• {highlight}</p>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          )}

          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <AnimatePresence mode="wait">
              {resumeData.experience.map((exp) => (
                <motion.div
                  key={exp.title}
                  variants={itemVariants}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="p-6 rounded-xl backdrop-blur-xl bg-linear-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <p className="text-pink-300">{exp.company}</p>
                    </div>
                    <span className="text-sm text-slate-400">{exp.period}</span>
                  </div>
                  <p className="text-slate-300 text-sm mb-3">{exp.description}</p>
                  <button
                    onClick={() => setExpandedItem(expandedItem === exp.title ? null : exp.title)}
                    className="text-pink-400 hover:text-pink-300 text-sm flex items-center gap-1 transition-colors"
                  >
                    {expandedItem === exp.title ? 'Hide' : 'Show'} Achievements
                    <ChevronDown className={`w-4 h-4 transition-transform ${expandedItem === exp.title ? 'rotate-180' : ''}`} />
                  </button>
                  {expandedItem === exp.title && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 pt-3 border-t border-pink-500/20 space-y-1"
                    >
                      {exp.achievements.map((achievement, i) => (
                        <p key={i} className="text-slate-300 text-sm">• {achievement}</p>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <AnimatePresence mode="wait">
              <motion.div
                variants={itemVariants}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                {Object.entries(resumeData.skills).map(([category, items]) => (
                  <div key={category}>
                    <h3 className="text-lg font-bold text-purple-300 mb-3 capitalize">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <motion.span
                          key={skill}
                          whileHover={{ scale: 1.05 }}
                          className="px-4 py-2 rounded-lg backdrop-blur-xl bg-linear-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-200 font-medium text-sm hover:border-purple-500/60 transition-all duration-300"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          )}

          {/* Certifications Tab */}
          {activeTab === 'certifications' && (
            <AnimatePresence mode="wait">
              {resumeData.certifications.map((cert) => (
                <motion.div
                  key={cert.name}
                  variants={itemVariants}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="p-4 rounded-lg backdrop-blur-xl bg-linear-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-white">{cert.name}</h3>
                      <p className="text-sm text-slate-400">{cert.issuer}</p>
                    </div>
                    <span className="text-xs text-slate-400">{cert.date}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </motion.div>
      </div>
    </section>
  );
}
