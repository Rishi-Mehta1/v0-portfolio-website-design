'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { resumeData } from '@/lib/resume-data';
import { Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: resumeData.skills.programming,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Data & Analytics',
    skills: resumeData.skills.data,
    color: 'from-pink-500 to-purple-500',
  },
  {
    title: 'Tools & Platforms',
    skills: resumeData.skills.tools,
    color: 'from-purple-500 to-blue-500',
  },
  {
    title: 'Soft Skills',
    skills: resumeData.skills.soft,
    color: 'from-blue-500 to-purple-500',
  },
  {
    title: 'Creative Skills',
    skills: resumeData.skills.creative,
    color: 'from-pink-500 to-blue-500',
  },
];

export function AdvancedSkills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!skillsContainerRef.current) return;

    const skillElements = skillsContainerRef.current.querySelectorAll('.skill-item');

    gsap.fromTo(
      skillElements,
      { opacity: 0, y: 30, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.05,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
        },
      }
    );
  }, []);

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
    <section
      ref={sectionRef}
      id="skills"
      className="relative min-h-screen flex items-center justify-center py-20 px-6 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl" />

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
          <h2 className="text-5xl md:text-6xl font-bold mb-4 flex items-center justify-center gap-3">
            <Zap className="w-10 h-10 text-purple-400" />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-300 via-pink-300 to-purple-300">
              Advanced Skills
            </span>
          </h2>
          <p className="text-purple-200/70 text-lg mb-4">
            Core competencies across multiple domains
          </p>
          <div className="h-1 w-20 bg-linear-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          ref={skillsContainerRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="p-8 rounded-2xl backdrop-blur-xl bg-linear-to-br from-slate-800/50 to-slate-900/50 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
            >
              <h3 className={`text-xl font-bold bg-clip-text text-transparent bg-linear-to-r ${category.color} mb-6`}>
                {category.title}
              </h3>

              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    className="skill-item flex items-center gap-3"
                    whileHover={{ x: 5 }}
                  >
                    <div className={`w-2 h-2 rounded-full bg-linear-to-r ${category.color}`} />
                    <span className="text-purple-200/80 font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mastery Statement */}
        <motion.div
          variants={itemVariants}
          className="mt-16 p-8 rounded-2xl backdrop-blur-xl bg-linear-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 text-center"
        >
          <p className="text-lg text-purple-100/80 italic">
            "{`Continuous learning and practical application of diverse skills to solve real-world challenges`}"
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default AdvancedSkills;
