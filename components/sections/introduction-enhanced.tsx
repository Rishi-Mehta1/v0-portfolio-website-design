'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { resumeData } from '@/lib/resume-data';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Introduction() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current) return;

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 50%',
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
      transition: { duration: 0.8 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="introduction"
      className="relative min-h-screen flex items-center justify-center py-20 px-6 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Background Elements */}
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
          <h2
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
          >
            <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-300 via-pink-300 to-purple-300">
              My Academic Journey
            </span>
          </h2>
          <div className="h-1 w-20 bg-linear-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Journey */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Journey Card */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="p-8 rounded-2xl backdrop-blur-xl bg-linear-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-purple-200 mb-4 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-500" />
                Academic Journey
              </h3>
              <p className="text-purple-100/80 leading-relaxed">
                {resumeData.introduction.academicJourney}
              </p>
            </motion.div>

            {/* Philosophy Card */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="p-8 rounded-2xl backdrop-blur-xl bg-linear-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 flex items-start gap-4"
            >
              <Quote className="w-8 h-8 text-pink-400 flex-shrink-0 mt-2" />
              <div>
                <h3 className="text-xl font-bold text-pink-200 mb-2">Philosophy</h3>
                <p className="text-pink-100/80 italic">
                  "{resumeData.introduction.philosophyStatement}"
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Values & Motivation */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Core Values */}
            <motion.div
              variants={cardVariants}
              className="p-8 rounded-2xl backdrop-blur-xl bg-linear-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20"
            >
              <h3 className="text-2xl font-bold text-purple-200 mb-6">Core Values</h3>
              <div className="space-y-3">
                {resumeData.introduction.coreValues.map((value, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                    <p className="text-purple-100/80">{value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Learning Motivation */}
            <motion.div
              variants={cardVariants}
              className="p-8 rounded-2xl backdrop-blur-xl bg-linear-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/20"
            >
              <h3 className="text-2xl font-bold text-pink-200 mb-4">Learning Motivation</h3>
              <p className="text-pink-100/80 leading-relaxed">
                {resumeData.introduction.learningMotivation}
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="text-center py-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById('cv')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 rounded-lg bg-linear-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
          >
            Continue to Resume
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Introduction;
