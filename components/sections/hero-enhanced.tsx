'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { resumeData } from '../../lib/resume-data';

interface HeroProps {
  onReady?: () => void;
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 30, 1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.fillStyle = `rgba(148, 113, 255, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  );
};

export function Hero({ onReady }: HeroProps) {
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Stagger animations
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
      0
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        0.2
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out' },
        0.4
      );

    onReady?.();
  }, [onReady]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-linear-to-b from-slate-950 via-purple-950 to-slate-950">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-purple-900/20 to-transparent opacity-50" />
      <AnimatedBackground />

      {/* Glassmorphic Content Container */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 sm:px-8 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-purple-500/30 backdrop-blur-xl bg-linear-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center overflow-hidden shadow-2xl hover:border-purple-400/50 transition-all duration-300">
            {resumeData.personal?.profileImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={resumeData.personal.profileImage}
                alt={resumeData.personal.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-linear-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-4xl font-bold">
                {resumeData.personal?.name
                  ? resumeData.personal.name
                      .split(' ')
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join('')
                      .toUpperCase()
                  : 'RM'}
              </div>
            )}
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.div
          ref={titleRef}
          className="mb-4"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gradient-primary mb-2">
            {resumeData.personal?.name || 'Rishi Dharmeshkumar Mehta'}
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-200/80">
            {resumeData.personal?.title || 'Full-Stack & Blockchain Developer'}
          </h2>
        </motion.div>

        {/* Academic Info */}
        <motion.div
          ref={subtitleRef}
          className="mb-8 space-y-2"
        >
          <p className="text-lg sm:text-xl text-gray-200 font-medium">
            {resumeData.education?.[0]?.degree || 'Bachelor Degree'}
          </p>
          <p className="text-base sm:text-lg text-gray-300/80">
            {resumeData.education?.[0]?.institution || 'University Name'} | Expected Graduation: {resumeData.education?.[0]?.duration?.split('-').pop()?.trim() || '2027'}
          </p>
          <p className="text-sm sm:text-base text-gray-400/70">
            CGPA: {resumeData.education?.[0]?.gpa || '9.87/10'}
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.div
          variants={itemVariants}
          className="mb-12 max-w-2xl"
        >
          <p className="text-lg sm:text-xl text-gray-100 italic leading-relaxed">
            "{resumeData.tagline || `Bridging Technology, Analytics, and Human-Centered Design Through Innovative Solutions`}"
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg bg-linear-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            onClick={() => {
              document.getElementById('introduction')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore My Story
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 rounded-lg btn-cta font-semibold"
            href={resumeData.personal?.cvLink || '#'}
            target="_blank"
            rel="noreferrer"
          >
            View CV
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-purple-400"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl" />
    </section>
  );
}

export default Hero;
