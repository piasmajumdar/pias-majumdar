"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "../data/projects";
import { ExternalLink, Code2, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("web"); // "web" or "ai"

  const filteredProjects = projects.filter(project => project.category === activeTab);

  // Tab configuration
  const tabs = [
    { id: "web", title: "Web Development" },
    { id: "ai", title: "AI & Machine Learning" }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 } 
    }
  };

  return (
    <section id="projects" className="relative py-28 overflow-hidden bg-white scroll-mt-24">
      {/* Ambient background glows */}
      <div className="absolute top-[30%] left-0 w-80 h-80 bg-orange-50/50 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-[30%] right-0 w-96 h-96 bg-orange-50/40 rounded-full blur-[140px] -z-10 animate-pulse" />

      {/* Decorative Dotted Grid */}
      <div className="absolute top-12 left-12 w-24 h-24 pointer-events-none -z-10 opacity-20 bg-[radial-gradient(#ff5e14_1.5px,transparent_1.5px)] [background-size:12px_12px]" />
      <div className="absolute bottom-12 right-12 w-24 h-24 pointer-events-none -z-10 opacity-20 bg-[radial-gradient(#ff5e14_1.5px,transparent_1.5px)] [background-size:12px_12px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-[1.5px] bg-orange-600/40" />
            <span className="text-orange-600 font-bold text-xs uppercase tracking-widest">
              PORTFOLIO
            </span>
            <div className="w-6 h-[1.5px] bg-orange-600/40" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 tracking-tight leading-tight">
            Featured <span className="text-orange-600">Projects</span>
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-500 text-sm md:text-base leading-relaxed font-medium">
            Explore a curated selection of full-stack web platforms and cutting-edge artificial intelligence implementations.
          </p>
        </motion.div>

        {/* Double-layered Outline Toggle Bar */}
        <div className="flex justify-center mb-16">
          <div className="flex p-1.5 bg-white border border-zinc-200/50 rounded-[24px] shadow-[0_6px_25px_rgba(0,0,0,0.01)] backdrop-blur-xl">
            <div className="flex items-center gap-1.5">
              {tabs.map((tab, index) => {
                const isActive = tab.id === activeTab;
                return (
                  <div key={tab.id} className="relative flex items-center">
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative px-6 py-3 rounded-[18px] text-[13px] font-bold tracking-tight cursor-pointer transition-colors duration-300 select-none z-10 min-w-[150px] sm:min-w-[180px] ${
                        isActive ? "text-orange-600 font-extrabold" : "text-zinc-600 hover:text-orange-600"
                      }`}
                    >
                      {isActive && (
                        <>
                          <motion.div
                            layoutId="activeProjTabOuter"
                            className="absolute -inset-[2px] border border-orange-500/20 rounded-[20px]"
                            transition={{ type: "spring", stiffness: 350, damping: 28 }}
                          />
                          <motion.div
                            layoutId="activeProjTabInner"
                            className="absolute inset-0 border-2 border-orange-600 rounded-[18px]"
                            transition={{ type: "spring", stiffness: 350, damping: 28 }}
                          />
                        </>
                      )}
                      {tab.title}
                    </button>
                    {index === 0 && !isActive && tabs[1].id !== activeTab && (
                      <div className="h-5 w-[1px] bg-zinc-200/50 mx-1" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Grid of Projects */}
        <div className="min-h-[450px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-wrap gap-8 justify-center items-stretch"
            >
              {filteredProjects.slice(0, 3).map((project) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -8, 
                    boxShadow: "0 25px 50px -12px rgba(255, 94, 20, 0.08)"
                  }}
                  className="bg-white border border-zinc-100 hover:border-orange-100/60 rounded-[32px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.005)] transition-all duration-300 w-full md:w-[350px] lg:w-[370px] flex flex-col group"
                >
                  {/* Card Image Cover */}
                  <div className="relative h-48 w-full overflow-hidden shrink-0">
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out select-none pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Card Details */}
                  <div className="p-6 md:p-8 flex flex-col flex-1">
                    <h3 className="text-zinc-900 font-extrabold text-xl mb-3 tracking-tight group-hover:text-orange-600 transition-colors leading-tight">
                      {project.title}
                    </h3>
                    
                    <p className="text-zinc-500 text-[13px] leading-relaxed mb-6 font-medium flex-1">
                      {project.description}
                    </p>

                    {/* Tech Badges List */}
                    <div className="flex flex-wrap gap-2 mb-6 shrink-0">
                      {project.tech.slice(0, 5).map((t) => (
                        <span 
                          key={t}
                          className="px-2.5 py-1 text-[11px] font-extrabold text-zinc-600 bg-zinc-50 border border-zinc-200/50 rounded-lg cursor-default transition-all hover:bg-orange-50 hover:text-orange-600 hover:border-orange-100/40"
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 5 && (
                        <span className="px-2.5 py-1 text-[11px] font-extrabold text-zinc-400 bg-zinc-50 border border-zinc-200/50 rounded-lg cursor-default">
                          +{project.tech.length - 5} more
                        </span>
                      )}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-4 mt-auto pt-4 border-t border-zinc-100 shrink-0">
                      <motion.a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ 
                          scale: 1.05,
                          borderColor: "rgb(234, 88, 12)",
                          color: "rgb(234, 88, 12)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-1.5 px-3.5 py-1.5 border border-zinc-200 text-zinc-500 rounded-full text-[11px] font-extrabold uppercase tracking-wider cursor-pointer transition-colors duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.02)]"
                      >
                        <FaGithub size={12} />
                        <span>Code</span>
                      </motion.a>
                      
                      {project.demo && project.demo !== "#" && (
                        <motion.a 
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          animate={{
                            scale: [1, 1.03, 1],
                            boxShadow: [
                              "0 4px 12px rgba(234,88,12,0.05)",
                              "0 4px 20px rgba(234,88,12,0.25)",
                              "0 4px 12px rgba(234,88,12,0.05)"
                            ]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          whileHover={{ 
                            scale: 1.08,
                            backgroundColor: "rgb(234, 88, 12)",
                            borderColor: "rgb(234, 88, 12)",
                            color: "#ffffff",
                            transition: { duration: 0.2 }
                          }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-1.5 px-3.5 py-1.5 border border-orange-600 text-orange-600 bg-white rounded-full text-[11px] font-extrabold uppercase tracking-wider ml-auto cursor-pointer transition-colors duration-300 group/demo"
                        >
                          <span>Live Demo</span>
                          <ExternalLink size={12} className="transition-transform duration-300 group-hover/demo:translate-x-0.5 group-hover/demo:-translate-y-0.5" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* View All Projects Button */}
        <div className="flex justify-center mt-12">
          <Link 
            href="/projects" 
            className="group flex items-center gap-2 px-6 py-3 border-2 border-orange-600 rounded-full font-bold text-sm text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300 shadow-[0_4px_12px_rgba(234,88,12,0.05)] hover:shadow-[0_4px_20px_rgba(234,88,12,0.2)]"
          >
            <span>View All Projects</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
