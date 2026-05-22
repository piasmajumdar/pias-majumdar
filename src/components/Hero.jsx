'use client';

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { ArrowRight, Mail, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-4rem)] flex items-center bg-dots py-16 lg:py-24">
      {/* Background radial gradient overlay for ambient glow */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/50 to-white dark:via-slate-950/50 dark:to-slate-950" />
      
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Copywriting & CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
          
          {/* Subtle Tag/Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 self-center lg:self-start px-3 py-1 rounded-full bg-rose-50 text-rose-600 dark:bg-rose-950/30 dark:text-rose-400 text-xs font-semibold uppercase tracking-wider mb-6 border border-rose-100 dark:border-rose-900/30"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
            Core Philosophy: I build AI-powered products
          </motion.div>

          {/* Name & Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-slate-950 dark:text-white"
          >
            PIAS MAJUMDAR
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl font-display font-semibold mt-3 text-slate-700 dark:text-slate-300"
          >
            AI/ML Engineer & Full Stack Web Developer
          </motion.h2>

          {/* Animated Typing Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-12 mt-4 text-lg md:text-xl font-medium text-rose-600 dark:text-rose-400"
          >
            <TypeAnimation
              sequence={[
                "I train deep learning models.",
                2000,
                "I design intelligent web apps.",
                2000,
                "I build intelligent products.",
                3000,
                "I build AI-powered products.",
                4000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal"
          >
            I build intelligent full-stack applications using Machine Learning, Deep Learning, and modern web technologies. Focused on scalable AI systems, multimodal learning, NLP, and production-ready web applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-rose-500 to-red-600 text-white font-medium hover:from-rose-600 hover:to-red-700 transition-all shadow-md shadow-red-500/20 active:scale-98"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 dark:bg-slate-900 dark:text-white dark:border-slate-800 dark:hover:bg-slate-800/80 transition-all font-medium active:scale-98"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </a>

            <a
              href="#resume"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800/60 dark:text-slate-300 dark:hover:bg-slate-800 transition-all font-medium active:scale-98"
            >
              <FileText className="w-4 h-4" />
              Download CV
            </a>
          </motion.div>
        </div>

        {/* Right Column: Animated AI/ML Graph Art */}
        <div className="lg:col-span-5 hidden lg:flex justify-center items-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-[400px] aspect-square relative"
          >
            {/* Ambient Background Blur */}
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/10 to-red-500/5 rounded-full blur-3xl" />
            
            {/* Interactive SVG Neural Network */}
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full relative z-10 text-slate-300 dark:text-slate-800"
            >
              {/* Connection Lines with Pulsing Dash Array */}
              <motion.line
                x1="20" y1="50" x2="50" y2="25"
                stroke="currentColor" strokeWidth="0.5"
                strokeDasharray="4,4"
                animate={{ strokeDashoffset: [-20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              />
              <motion.line
                x1="20" y1="50" x2="50" y2="50"
                stroke="currentColor" strokeWidth="0.5"
                strokeDasharray="4,4"
                animate={{ strokeDashoffset: [-20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              <motion.line
                x1="20" y1="50" x2="50" y2="75"
                stroke="currentColor" strokeWidth="0.5"
                strokeDasharray="4,4"
                animate={{ strokeDashoffset: [-20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />

              <motion.line
                x1="50" y1="25" x2="80" y2="35"
                stroke="currentColor" strokeWidth="0.5"
                strokeDasharray="4,4"
                animate={{ strokeDashoffset: [-20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              <motion.line
                x1="50" y1="50" x2="80" y2="35"
                stroke="currentColor" strokeWidth="0.5"
                strokeDasharray="4,4"
                animate={{ strokeDashoffset: [-20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              />
              <motion.line
                x1="50" y1="50" x2="80" y2="65"
                stroke="currentColor" strokeWidth="0.5"
                strokeDasharray="4,4"
                animate={{ strokeDashoffset: [-20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <motion.line
                x1="50" y1="75" x2="80" y2="65"
                stroke="currentColor" strokeWidth="0.5"
                strokeDasharray="4,4"
                animate={{ strokeDashoffset: [-20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              />

              {/* Glowing Nodes (Framer Motion scale pulse) */}
              {/* Input Node */}
              <motion.circle
                cx="20" cy="50" r="5"
                className="fill-slate-800 stroke-slate-400 dark:fill-slate-100 dark:stroke-slate-700"
                strokeWidth="1.5"
                animate={{ r: [5, 6, 5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Hidden Layer Nodes */}
              <motion.circle
                cx="50" cy="25" r="4.5"
                className="fill-rose-50 stroke-rose-500 dark:fill-rose-950 dark:stroke-rose-400"
                strokeWidth="1.5"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.2 }}
              />
              <motion.circle
                cx="50" cy="50" r="4.5"
                className="fill-slate-800 stroke-slate-400 dark:fill-slate-100 dark:stroke-slate-700"
                strokeWidth="1.5"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              />
              <motion.circle
                cx="50" cy="75" r="4.5"
                className="fill-rose-50 stroke-rose-500 dark:fill-rose-950 dark:stroke-rose-400"
                strokeWidth="1.5"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2.8, repeat: Infinity, delay: 0.8 }}
              />

              {/* Output Layer Nodes */}
              <motion.circle
                cx="80" cy="35" r="5.5"
                className="fill-rose-500 stroke-rose-600 dark:fill-rose-400 dark:stroke-rose-300"
                strokeWidth="1.5"
                animate={{ r: [5.5, 6.5, 5.5] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
              <motion.circle
                cx="80" cy="65" r="5.5"
                className="fill-slate-900 stroke-slate-950 dark:fill-slate-100 dark:stroke-white"
                strokeWidth="1.5"
                animate={{ r: [5.5, 6.2, 5.5] }}
                transition={{ duration: 3.2, repeat: Infinity, delay: 0.6 }}
              />
            </svg>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
