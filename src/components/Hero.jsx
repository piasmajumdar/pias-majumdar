"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

import { Button } from "@heroui/react";

import {
  Code,
  ChartColumn,
  Database,
} from "@gravity-ui/icons";

import { Code2, Box, Calendar, Download, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

export default function Hero() {
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

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <Image
        src="/bg_banner.png"
        alt="Background"
        fill
        priority
        className="object-cover -z-10"
      />

      <div className="container mx-auto px-6 lg:px-12 pt-32">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-3 rounded-full bg-orange-50/90 px-6 py-3">
              <Box className="text-orange-600" size={24} strokeWidth={2.5} />
              <span className="text-xl font-medium text-zinc-800 tracking-tight">
                Hello, I'm
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-2 text-4xl md:text-6xl md:text-7xl xl:text-8xl font-black leading-none">
              <span className="text-zinc-900">
                Pias
              </span>{" "}
              <span className="text-orange-600">
                Majumdar
              </span>
            </h1>

            <h2 className="mt-6 text-2xl md:text-3xl font-bold leading-tight text-zinc-900">
              I build{" "}
              <TypeAnimation
                sequence={[
                  'Intelligent Web Apps.',
                  2000,
                  'Scalable AI Solutions.',
                  2000,
                  'Modern Digital Experiences.',
                  2000,
                  'Next-Gen Software.',
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-orange-600 block sm:inline"
              />
            </h2>

            <p className="mt-2 max-w-xl text-lg text-zinc-600 leading-relaxed">
              Full Stack Developer crafting fast,
              scalable and user-centric web
              applications with modern technologies.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                size="lg"
                radius="lg"
                className="group bg-orange-600 hover:bg-orange-500 hover:scale-105 transition-all text-white px-8 font-medium shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:shadow-[0_0_30px_rgba(234,88,12,0.6)]"
              >
                <div className="flex items-center gap-2">
                  <span>View My Work</span>
                  <ArrowRight size={18} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                </div>
              </Button>

              <Button
                as="a"
                href="https://drive.google.com/file/d/1cdZLuhxXI7b511bBiMWDBVuczv-2Dtzw/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                variant="bordered"
                size="lg"
                radius="lg"
                className="group bg-white/80 hover:bg-white backdrop-blur-xl border-zinc-200 hover:border-zinc-300 hover:scale-105 transition-all font-medium text-zinc-800 shadow-sm hover:shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <Download size={18} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-y-1" />
                  <span>Download CV</span>
                </div>
              </Button>
            </div>

            {/* Tech Stack */}
            <div className="mt-4">
              <p className="text-zinc-500 mb-6 font-medium text-[15px]">
                Tech I work with
              </p>

              <div className="flex flex-wrap items-center gap-6 text-[38px]">
                <SiHtml5 className="text-[#E34F26]" title="HTML5" />
                <SiCss className="text-[#1572B6]" title="CSS3" />
                <div className="bg-black rounded-[4px] leading-none flex items-center justify-center">
                  <SiJavascript className="text-[#F7DF1E]" title="JavaScript" />
                </div>
                <div className="bg-white rounded-[4px] leading-none flex items-center justify-center">
                  <SiTypescript className="text-[#3178C6]" title="TypeScript" />
                </div>
                <SiReact className="text-[#61DAFB]" title="React" />
                <div className="bg-white rounded-full leading-none flex items-center justify-center">
                  <SiNextdotjs className="text-black" title="Next.js" />
                </div>
                <SiNodedotjs className="text-[#339933]" title="Node.js" />
                <SiTailwindcss className="text-[#06B6D4]" title="Tailwind CSS" />
                <SiMongodb className="text-[#47A248]" title="MongoDB" />
                <SiPostgresql className="text-[#4169E1]" title="PostgreSQL" />
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center w-full h-[450px] sm:h-[550px] lg:h-[700px] -mt-10 lg:-mt-16 xl:-mt-24"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[700px] w-[700px] origin-top scale-[0.55] sm:scale-[0.75] lg:scale-100">
              {/* Geometric Orange Background Circles */}
              <div
                className="
                absolute
                left-1/2
                top-[45%]
                h-[600px]
                w-[600px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-orange-100/40
                z-0
                "
              />
              <div
                className="
                absolute
                left-[55%]
                top-[55%]
                h-[450px]
                w-[450px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-[45%]
                rotate-[20deg]
                bg-gradient-to-br
                from-orange-500/90
                to-orange-400/40
                shadow-[0_0_80px_rgba(255,100,0,0.4)]
                z-0
                "
              />

              {/* Background Flat Rings */}
              <div className="absolute inset-0 rounded-full border border-orange-200/20 scale-105 z-0" />
              <div className="absolute inset-10 rounded-full border border-orange-200/20 z-0" />
              <div className="absolute inset-20 rounded-full border border-dashed border-orange-300/20 z-0" />

              {/* Tilted Main Orbit - BACK HALF (Behind Avatar) */}
              <div
                className="absolute inset-0 rotate-[35deg] scale-110 z-10"
                style={{ clipPath: "inset(0 0 50% 0)" }}
              >
                <svg
                  className="w-full h-full"
                  viewBox="0 0 700 700"
                >
                  <defs>
                    <linearGradient
                      id="orbitGradientBack"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#ff5e14" />
                      <stop offset="100%" stopColor="#ff9f43" />
                    </linearGradient>
                  </defs>
                  <ellipse
                    cx="350"
                    cy="350"
                    rx="320"
                    ry="120"
                    fill="none"
                    stroke="url(#orbitGradientBack)"
                    strokeWidth="3"
                    opacity="0.4"
                  />
                </svg>

                {/* Moving Glow Dot (Back half) */}
                <motion.div
                  className="
                  absolute
                  h-4
                  w-4
                  rounded-full
                  bg-white
                  shadow-[0_0_30px_5px_#ff5e14]
                  "
                  animate={{
                    offsetDistance: ["0%", "100%"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    offsetPath:
                      "path('M 30 350 A 320 120 0 1 1 670 350 A 320 120 0 1 1 30 350')",
                    left: "-8px",
                    top: "-8px",
                  }}
                />
              </div>

              {/* Profile Image (Static, NO motion y animation) */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <Image
                  src="/pias-v2.png"
                  alt="Pias"
                  width={380}
                  height={380}
                  priority
                  className="object-contain"
                  style={{
                    filter: "drop-shadow(0px 0px 40px rgba(255, 255, 255, 0.6)) drop-shadow(0px 0px 80px rgba(255, 100, 20, 0.4))",
                  }}
                />
              </div>

              {/* Tilted Main Orbit - FRONT HALF (In front of Avatar) */}
              <div
                className="absolute inset-0 rotate-[35deg] scale-110 z-30 pointer-events-none"
                style={{ clipPath: "inset(50% 0 0 0)" }}
              >
                <svg
                  className="w-full h-full"
                  viewBox="0 0 700 700"
                >
                  <defs>
                    <linearGradient
                      id="orbitGradientFront"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#ff5e14" />
                      <stop offset="50%" stopColor="#ffffff" />
                      <stop offset="100%" stopColor="#ff9f43" />
                    </linearGradient>
                    <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="8" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>
                  <ellipse
                    cx="350"
                    cy="350"
                    rx="320"
                    ry="120"
                    fill="none"
                    stroke="url(#orbitGradientFront)"
                    strokeWidth="6"
                    filter="url(#glowEffect)"
                  />
                </svg>

                {/* Moving Glow Dot (Front half) */}
                <motion.div
                  className="
                  absolute
                  h-4
                  w-4
                  rounded-full
                  bg-white
                  shadow-[0_0_30px_5px_#ff5e14]
                  "
                  animate={{
                    offsetDistance: ["0%", "100%"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    offsetPath:
                      "path('M 30 350 A 320 120 0 1 1 670 350 A 320 120 0 1 1 30 350')",
                    left: "-8px",
                    top: "-8px",
                  }}
                />
              </div>

              {/* Floating Cards */}
              <FloatingCard
                icon={<Code width={28} />}
                className="left-0 top-44 z-40"
                delay={0}
              />

              <FloatingCard
                icon={<Database width={28} />}
                className="right-6 top-24 z-40"
                delay={1}
              />

              <FloatingCard
                icon={<ChartColumn width={28} />}
                className="right-0 bottom-40 z-40"
                delay={2}
              />

            </div>

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="
                absolute
                bottom-6
                lg:bottom-12
                left-1/2
                -translate-x-1/2
                w-[90%]
                md:w-full
                max-w-[650px]
                rounded-[20px]
                border
                border-white/50
                bg-white/95
                backdrop-blur-2xl
                shadow-[0_8px_40px_rgba(0,0,0,0.06)]
                px-2
                md:px-6
                py-4
                md:py-6
                z-50
              "
            >
              <div className="flex flex-row justify-between items-center w-full">
                <Stat icon={<Code2 size={24} strokeWidth={2.5} />} number="20+" text="Projects Completed" hasBorder />
                <Stat icon={<FaGithub size={24} />} number={githubContributions} text="Total Contributions" hasBorder />
                <Stat icon={<Calendar size={24} strokeWidth={2.5} />} number="2025" text="Started Journey" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FloatingCard({
  icon,
  className,
  delay,
}) {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay,
      }}
      className={`
      absolute
      z-30
      ${className}
      rounded-3xl
      bg-white/85
      backdrop-blur-xl
      border
      border-white
      shadow-xl
      p-6
      `}
    >
      <div className="text-orange-600">
        {icon}
      </div>
    </motion.div>
  );
}

function Stat({
  icon,
  number,
  text,
  hasBorder,
}) {
  return (
    <div className={`flex flex-col items-center flex-1 px-1 md:px-5 ${hasBorder ? 'border-r border-gray-200/80' : ''}`}>
      <div className="text-[#ff5e14] mb-1 md:mb-3">
        {icon}
      </div>
      <h3 className="text-xl md:text-3xl font-bold text-zinc-900 leading-none">
        {number}
      </h3>
      <p className="text-[10px] md:text-[12px] text-zinc-500 mt-1 md:mt-2 font-medium leading-tight text-center">
        {text}
      </p>
    </div>
  );
}