'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { resumeData } from '@/lib/resume-data';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials = resumeData.testimonials;

  useEffect(() => {
    if (!autoplay) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoplay, testimonials.length]);

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

  const slideVariants = {
    enter: { opacity: 0, scale: 0.8 },
    center: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
  };

  return (
    <section
      id="testimonials"
      className="relative min-h-screen flex items-center justify-center py-20 px-6 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl" />

      <motion.div
        className="relative z-10 max-w-4xl w-full"
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
              Testimonials
            </span>
          </h2>
          <p className="text-purple-200/70 text-lg">
            Words from mentors, professors, and collaborators
          </p>
          <div className="h-1 w-20 bg-linear-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          variants={itemVariants}
          className="relative"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          {/* Main Carousel */}
          <div className="relative min-h-96 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute w-full"
              >
                <div className="p-8 md:p-12 rounded-2xl backdrop-blur-xl bg-linear-to-br from-purple-500/10 to-pink-500/10 border-2 border-purple-500/30 hover:border-purple-500/50 transition-all duration-300">
                  {/* Quote Icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-purple-400">
                      <Quote className="w-8 h-8" />
                    </div>
                    <div className="h-1 w-12 bg-linear-to-r from-purple-500 to-pink-500 rounded-full" />
                  </div>

                  {/* Quote Text */}
                  <p className="text-xl md:text-2xl text-purple-100 italic mb-8 leading-relaxed">
                    "{testimonials[current].quote}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center justify-between md:flex-row flex-col gap-6">
                    <div>
                      <h4 className="text-lg font-bold text-purple-200 mb-1">
                        {testimonials[current].name}
                      </h4>
                      <p className="text-purple-300/70 text-sm">
                        {testimonials[current].role}
                      </p>
                      <p className="text-purple-400/60 text-sm">
                        {testimonials[current].organization}
                      </p>
                    </div>

                    {/* Avatar Placeholder */}
                    <div className="w-16 h-16 rounded-full bg-linear-to-br from-purple-500/30 to-pink-500/30 border-2 border-purple-500/50 flex items-center justify-center shrink-0">
                      <span className="text-2xl font-bold text-purple-300">
                        {testimonials[current].name.charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="p-2 rounded-full backdrop-blur-xl bg-purple-500/20 border border-purple-500/40 text-purple-300 hover:bg-purple-500/30 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrent(index)}
                  animate={{
                    scale: index === current ? 1.2 : 1,
                    backgroundColor: index === current ? 'rgb(168, 85, 247)' : 'rgb(168, 85, 247, 0.5)',
                  }}
                  className="w-2 h-2 rounded-full transition-all"
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
              className="p-2 rounded-full backdrop-blur-xl bg-purple-500/20 border border-purple-500/40 text-purple-300 hover:bg-purple-500/30 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Counter */}
          <div className="text-center mt-8 text-purple-300/60 text-sm">
            {current + 1} / {testimonials.length}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Testimonials;
