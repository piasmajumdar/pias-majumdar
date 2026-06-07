"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Compass,
  Code2,
  User,
  Download,
  Calendar,
  Briefcase,
  Trophy,
  Sparkles,
  ChevronDown,
  Globe,
  Blocks,
  MonitorSmartphone,
  Brain,
  Lightbulb
} from "lucide-react";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";

export default function About() {
  const [githubContributions, setGithubContributions] = useState("500+");

  useEffect(() => {
    async function fetchGithubStats() {
      try {
        const res = await fetch("/api/github");
        const data = await res.json();
        if (data.totalContributions) {
          setGithubContributions(`${data.totalContributions}+`);
        }
      } catch (err) {
        console.error("Failed to load github stats", err);
      }
    }
    fetchGithubStats();
  }, []);

  const traits = [
    {
      icon: Globe,
      title: "Full Stack Web Development",
      desc: "End-to-end applications from database to user interface.",
    },
    {
      icon: Blocks,
      title: "React & Next.js Apps",
      desc: "Building performant, scalable, and modern applications.",
    },
    {
      icon: MonitorSmartphone,
      title: "Responsive UI Design",
      desc: "Crafting beautiful, mobile-first, and accessible interfaces.",
    },
    {
      icon: Brain,
      title: "AI-ML Model Train",
      desc: "Training and integrating intelligent machine learning models.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      desc: "Tackling complex challenges with efficient solutions.",
    },
    {
      icon: Code2,
      title: "Clean Code",
      desc: "Writing maintainable, scalable, and well-documented code.",
    },
  ];

  const stats = [
    {
      icon: Calendar,
      number: "2025",
      label: "Started Journey",
    },
    {
      icon: Briefcase,
      number: "20+",
      label: "Projects Completed",
    },
    {
      icon: FaGithub,
      number: githubContributions,
      label: "Total Contributions",
      isDynamic: true,
    },
    {
      icon: Sparkles,
      number: "40+",
      label: "Technologies Mastered",
    },
  ];

  const technologies = [
    { icon: SiJavascript, color: "#F7DF1E", name: "JavaScript", bg: "bg-black" },
    { icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
    { icon: SiReact, color: "#61DAFB", name: "React" },
    { icon: SiNextdotjs, color: "#000000", name: "Next.js" },
    { icon: SiNodedotjs, color: "#339933", name: "Node.js" },
    { icon: SiExpress, color: "#000000", name: "Express.js" },
    { icon: SiMongodb, color: "#47A248", name: "MongoDB" },
    { icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind CSS" },
    { icon: SiHtml5, color: "#E34F26", name: "HTML5" },
    { icon: SiCss, color: "#1572B6", name: "CSS3" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const traitVariant = {
    hidden: { opacity: 0, x: -15, y: 10 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  const statCardVariant = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 90, damping: 14 }
    }
  };

  return (
    <section id="about" className="relative py-28 overflow-hidden bg-white scroll-mt-24">
      {/* Background Soft Glows with slow float/pulse animation */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.6, 0.4],
          x: [0, 15, 0],
          y: [0, -15, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-0 w-80 h-80 bg-orange-100/40 rounded-full blur-[120px] -z-10"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, -20, 0],
          y: [0, 20, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] right-0 w-96 h-96 bg-orange-100/30 rounded-full blur-[140px] -z-10"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-20"
        >
          <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase text-orange-600 bg-orange-50 border border-orange-100/50 mb-4">
            ABOUT ME
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 tracking-tight leading-tight">
            Get to know <span className="text-orange-600">me better</span>
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-500 text-base md:text-lg leading-relaxed font-medium">
            I'm a passionate Full Stack Developer who loves turning ideas
            into real-world digital experiences.
          </p>
        </motion.div>

        {/* 3-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-16 items-center">

          {/* Column 1: Who I Am */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col"
          >
            <span className="text-orange-600 font-bold text-xs uppercase tracking-widest mb-3">
              WHO I AM
            </span>
            <h3 className="text-3xl md:text-4xl font-black text-zinc-900 leading-tight mb-5">
              I'm <span className="text-orange-600">Pias Majumdar</span>,<br />
              a Full Stack Developer
            </h3>
            <p className="text-zinc-600 leading-relaxed text-base mb-8">
              I build fast, scalable and user-centric web applications with clean code
              and modern technologies. I enjoy solving complex problems and turning
              ideas into impactful digital products.
            </p>

            {/* Traits List with Staggered Entrance */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6"
            >
              {traits.map((trait, index) => {
                const Icon = trait.icon;
                return (
                  <motion.div
                    key={index}
                    variants={traitVariant}
                    whileHover={{ x: 4 }}
                    className="flex gap-3 items-start group/trait cursor-default p-2 rounded-2xl hover:bg-orange-50/20 transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-10 h-10 rounded-full bg-orange-50 border border-orange-100/40 flex items-center justify-center text-orange-600 shrink-0 shadow-sm mt-0.5 group-hover/trait:bg-orange-600 group-hover/trait:text-white transition-colors duration-300"
                    >
                      <Icon size={18} strokeWidth={2.2} />
                    </motion.div>
                    <div>
                      <h4 className="text-zinc-800 font-bold text-[14px] leading-tight mb-1 group-hover/trait:text-orange-600 transition-colors duration-300">
                        {trait.title}
                      </h4>
                      <p className="text-zinc-500 text-[12px] leading-relaxed">
                        {trait.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Column 2: Profile Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="relative bg-[#fcfaf9] border border-zinc-200/80 rounded-[36px] shadow-sm flex items-center justify-center max-w-[380px] w-full aspect-[4/5] overflow-hidden group">

              {/* Background Concentric Rings & Circle */}
              <div className="absolute top-[10%] -left-[10%] w-[120%] h-[120%] z-0 pointer-events-none flex items-center justify-center">
                {/* Center Solid Orange Circle */}
                <motion.div
                  animate={{
                    scale: [1, 1.03, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute w-[240px] h-[240px] md:w-[280px] md:h-[280px] rounded-full bg-gradient-to-br from-[#ff5e14] to-[#ff8c42] shadow-[0_0_40px_rgba(255,94,20,0.25)]"
                />

                {/* Thin Outline Rings with Opposite Rotations */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[320px] h-[320px] md:w-[360px] md:h-[360px] rounded-full border-[1px] border-orange-600/10"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[400px] h-[400px] md:w-[460px] md:h-[460px] rounded-full border-[1px] border-orange-600/10"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 65, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[500px] h-[500px] md:w-[580px] md:h-[580px] rounded-full border-[1px] border-orange-600/10 flex items-center justify-center"
                >
                  {/* Glowing Dots on Outer Ring */}
                  <div className="absolute w-1.5 h-1.5 rounded-full bg-orange-400 shadow-[0_0_8px_2px_#ff5e14] top-[20%] right-[30%]" />
                </motion.div>

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute w-full h-full flex items-center justify-center"
                >
                  <div className="absolute w-1.5 h-1.5 rounded-full bg-orange-400 shadow-[0_0_8px_2px_#ff5e14] bottom-[30%] left-[25%]" />
                </motion.div>
              </div>

              {/* Profile Avatar with Floating Effect */}
              <motion.div
                animate={{
                  y: [0, -6, 0],
                  rotate: [0, 0.4, -0.4, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10 select-none pointer-events-none drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)] transition-transform duration-700 group-hover:scale-[1.03] mt-8 flex justify-center w-[300px] h-[300px]"
              >
                <Image
                  src="/pias-v2.png"
                  alt="Pias Majumdar"
                  width={400}
                  height={400}
                  priority
                  className="object-contain"
                />
              </motion.div>

              {/* Dark Bottom Gradient Overlay */}
              <div className="absolute bottom-0 left-0 w-full h-[55%] bg-gradient-to-t from-[#110c0a] via-[#110c0a]/60 to-transparent z-10 pointer-events-none" />

              {/* Download CV Pill Button Overlay */}
              <a
                href="https://drive.google.com/file/d/1cdZLuhxXI7b511bBiMWDBVuczv-2Dtzw/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] bg-white border border-zinc-100 shadow-xl rounded-2xl p-3 flex items-center gap-4 z-20 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 text-left cursor-pointer group/download"
              >
                <div className="w-10 h-10 rounded-full bg-[#ff5e14] flex items-center justify-center text-white shrink-0 group-hover/download:bg-[#e85512] transition-colors shadow-md group-hover/download:rotate-6">
                  <Download size={18} strokeWidth={2.5} />
                </div>
                <div className="flex flex-col flex-1">
                  <span className="text-zinc-900 font-bold text-[13px] leading-tight group-hover/download:text-orange-600 transition-colors">
                    Download CV
                  </span>
                  <span className="text-zinc-500 text-[11px] leading-tight mt-0.5 font-medium">
                    Resume.pdf
                  </span>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Column 3: Stats Stack */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 relative pl-8 lg:pl-10"
          >
            {/* SVG Decorative Dotted Line - Auto drawing on scroll */}
            <div className="absolute left-[14px] top-3 bottom-3 w-[2px] z-0 flex flex-col items-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-2.5 h-2.5 rounded-full bg-orange-600 shadow-[0_0_12px_rgba(234,88,12,0.8)] z-10"
              />

              <div className="relative w-[2px] flex-1 my-2 overflow-visible">
                <svg className="absolute inset-0 w-full h-full overflow-visible" pointerEvents="none">
                  <motion.line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="100%"
                    stroke="#ea580c"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
                  />
                </svg>
              </div>

              <motion.div
                initial={{ scale: 0, y: -10 }}
                whileInView={{ scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, type: "spring", stiffness: 150 }}
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-5 h-5 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 z-10 shadow-sm"
              >
                <ChevronDown size={11} strokeWidth={3} />
              </motion.div>
            </div>

            {/* Stats Cards Stack with Staggered Entrance & Interactive Hover Glows */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col gap-5"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    variants={statCardVariant}
                    whileHover={{
                      scale: 1.03,
                      y: -2,
                      boxShadow: "0 10px 25px -5px rgba(251, 146, 60, 0.1), 0 8px 10px -6px rgba(251, 146, 60, 0.1)"
                    }}
                    className="bg-white border border-zinc-150 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] p-4 flex items-center gap-4 transition-all duration-300 relative z-10 cursor-default group/stat"
                  >
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100/50 flex items-center justify-center text-orange-600 shrink-0 shadow-sm group-hover/stat:bg-orange-600 group-hover/stat:text-white transition-colors duration-300"
                    >
                      <Icon size={20} strokeWidth={2.2} />
                    </motion.div>
                    <div className="flex flex-col text-left">
                      <span className="text-xl md:text-2xl font-black text-zinc-900 leading-none group-hover/stat:text-orange-600 transition-colors duration-300">
                        {stat.number}
                      </span>
                      <span className="text-xs text-zinc-500 font-semibold mt-1 leading-tight">
                        {stat.label}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

        </div>

        {/* Technologies I work with Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 border border-zinc-100 bg-zinc-50/40 rounded-[32px] p-8 lg:p-10 shadow-sm relative overflow-hidden"
        >
          <h4 className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-8 text-center lg:text-left">
            Technologies I work with
          </h4>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-4 justify-items-center items-center"
          >
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.1,
                    y: -4,
                    borderColor: `${tech.color}33`,
                    boxShadow: `0 10px 20px -5px ${tech.color}1a`
                  }}
                  className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white border border-zinc-100 shadow-[0_4px_15px_rgba(0,0,0,0.01)] transition-all duration-300 w-24 h-24 cursor-default group"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className={`p-1.5 rounded-lg transition-transform duration-300 ${tech.bg || ""}`}
                  >
                    <Icon size={30} style={{ color: tech.color }} />
                  </motion.div>
                  <span className="text-[10px] text-zinc-400 font-bold uppercase mt-2 text-center tracking-tight leading-none group-hover:text-zinc-800 transition-colors">
                    {tech.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
