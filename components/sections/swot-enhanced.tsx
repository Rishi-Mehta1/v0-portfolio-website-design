'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { resumeData } from '@/lib/resume-data';

gsap.registerPlugin(ScrollTrigger);

interface SwotItem {
  category: 'Strengths' | 'Weaknesses' | 'Opportunities' | 'Threats';
  items: string[];
  color: string;
  bgColor: string;
  borderColor: string;
  icon: string;
}

const swotData: SwotItem[] = [
  {
    category: 'Strengths',
    items: resumeData.swot.strengths,
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
    icon: '',
  },
  {
    category: 'Weaknesses',
    items: resumeData.swot.weaknesses,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
    icon: '',
  },
  {
    category: 'Opportunities',
    items: resumeData.swot.opportunities,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    icon: '',
  },
  {
    category: 'Threats',
    items: resumeData.swot.threats,
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/30',
    icon: '',
  },
];

export function SwotAnalysis() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const quadrantRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeQuadrant, setActiveQuadrant] = useState<number | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Stagger animation for quadrants
    quadrantRefs.current.forEach((ref, index) => {
      if (!ref) return;

      gsap.fromTo(
        ref,
        { opacity: 0, scale: 0.8, rotateY: -45 },
        {
          opacity: 1,
          scale: 1,
          rotateY: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: 'back.out',
          scrollTrigger: {
            trigger: sectionRef.current!,
            start: 'top 70%',
            end: 'top 30%',
            scrub: 1,
          },
        }
      );
    });
  }, []);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const quadrantVariants = {
    initial: { rotateY: -45, opacity: 0, scale: 0.8 },
    animate: { rotateY: 0, opacity: 1, scale: 1 },
    hover: { scale: 1.05, y: -10 },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  return (
    <section
      ref={sectionRef}
      id="conclusion"
      className="relative min-h-screen flex items-center justify-center py-20 px-6 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl" />

      <motion.div
        className="relative z-10 max-w-7xl w-full"
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
              SWOT Analysis
            </span>
          </h2>
          <p className="text-purple-200/70 text-lg">
            Self-Assessment & Strategic Overview
          </p>
          <div className="h-1 w-20 bg-linear-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* SWOT Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
        >
          {swotData.map((item, index) => (
            <motion.div
              key={index}
              ref={(el) => {
                quadrantRefs.current[index] = el;
              }}
              variants={quadrantVariants}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              viewport={{ once: true, margin: '-100px' }}
              onClick={() => setActiveQuadrant(activeQuadrant === index ? null : index)}
              className="cursor-pointer p-8 rounded-2xl backdrop-blur-xl border-2 transition-all duration-300"
              style={{
                backgroundColor: item.bgColor,
                borderColor: item.color,
              }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{item.icon}</span>
                <h3 className={`text-2xl font-bold ${item.color}`}>
                  {item.category}
                </h3>
              </div>

              {/* Items List */}
              <motion.div
                className="space-y-3"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {item.items.map((itemText, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={listItemVariants}
                    className="flex items-start gap-3"
                  >
                    <span className={`${item.color} text-lg font-bold flex-shrink-0`}>
                      •
                    </span>
                    <span className="text-purple-100/80 text-sm">
                      {itemText}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Interaction Indicator */}
              <motion.div
                className="mt-6 pt-4 border-t border-purple-500/20 text-xs text-purple-300/60"
                animate={{ opacity: activeQuadrant === index ? 1 : 0.5 }}
              >
                {activeQuadrant === index ? '✓ Click to collapse' : 'Click to expand'}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Statement */}
        <motion.div
          variants={itemVariants}
          className="p-8 rounded-2xl backdrop-blur-xl bg-linear-to-r from-purple-500/10 to-pink-500/10 border-2 border-purple-500/30 text-center"
        >
          <p className="text-lg text-purple-100/80 mb-4">
            <span className="font-bold text-purple-200">Self-Reflection:</span>
          </p>
          <p className="text-purple-100/70 leading-relaxed">
            {resumeData.selfAssessment.reflection}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default SwotAnalysis;
