"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "../../data/projects";
import { ExternalLink, Search, X, ArrowLeft } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("web"); // "web" or "ai"
  const [searchQuery, setSearchQuery] = useState("");

  const tabs = [
    { id: "web", title: "Web Development" },
    { id: "ai", title: "AI & Machine Learning" }
  ];

  // Filtering Logic
  const filteredProjects = projects.filter((project) => {
    const matchesCategory = project.category === activeTab;
    const matchesSearch =
      searchQuery.trim() === "" ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (project.details && project.details.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 17 }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation Header */}
      <Navbar />

      <main className="flex-1 pt-36 pb-24 relative overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-[10%] left-0 w-80 h-80 bg-orange-50/50 rounded-full blur-[120px] -z-10 animate-pulse" />
        <div className="absolute bottom-[20%] right-0 w-96 h-96 bg-orange-50/40 rounded-full blur-[140px] -z-10 animate-pulse" />

        {/* Decorative Dotted Grid */}
        <div className="absolute top-24 left-12 w-24 h-24 pointer-events-none -z-10 opacity-20 bg-[radial-gradient(#ff5e14_1.5px,transparent_1.5px)] [background-size:12px_12px]" />
        <div className="absolute bottom-24 right-12 w-24 h-24 pointer-events-none -z-10 opacity-20 bg-[radial-gradient(#ff5e14_1.5px,transparent_1.5px)] [background-size:12px_12px]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Back Navigation Link */}
          <div className="mb-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-zinc-500 hover:text-orange-600 transition-colors text-sm font-bold uppercase tracking-wider group"
            >
              <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Page Header */}
          <div className="flex flex-col items-center text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 tracking-tight leading-tight">
              All My <span className="text-orange-600">Projects</span>
            </h1>
            <p className="mt-4 max-w-2xl text-zinc-500 text-sm md:text-base leading-relaxed font-medium">
              A complete list of my engineering accomplishments, research architectures, and platforms.
            </p>
          </div>

          {/* Unified Filter & Search Bar */}
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-16 border border-zinc-100 rounded-[28px] p-6 bg-slate-50/30 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.01)]">
            {/* Search Input Box */}
            <div className="relative w-full md:w-[360px] lg:w-[420px]">
              <Search className="absolute left-4.5 top-1/2 -translate-y-1/2 text-zinc-400 w-4.5 h-4.5" />
              <input
                type="text"
                placeholder="Search by name, tech stack, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-10 py-3.5 bg-white border border-zinc-200 hover:border-zinc-300 rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 transition-all font-medium text-zinc-800 placeholder:text-zinc-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-orange-600 transition-colors p-1 rounded-full hover:bg-zinc-100"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Double-layered Outline Toggle Bar */}
            <div className="flex p-1 bg-white border border-zinc-200/50 rounded-[22px] shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
              <div className="flex items-center gap-1">
                {tabs.map((tab, index) => {
                  const isActive = tab.id === activeTab;
                  return (
                    <div key={tab.id} className="relative flex items-center">
                      <button
                        onClick={() => {
                          setActiveTab(tab.id);
                        }}
                        className={`relative px-5 py-2.5 rounded-[16px] text-xs font-bold tracking-tight cursor-pointer transition-colors duration-300 select-none z-10 min-w-[130px] sm:min-w-[160px] ${isActive ? "text-orange-600 font-extrabold" : "text-zinc-500 hover:text-orange-600"
                          }`}
                      >
                        {isActive && (
                          <>
                            <motion.div
                              layoutId="activeProjPageTabOuter"
                              className="absolute -inset-[2px] border border-orange-500/20 rounded-[18px]"
                              transition={{ type: "spring", stiffness: 350, damping: 28 }}
                            />
                            <motion.div
                              layoutId="activeProjPageTabInner"
                              className="absolute inset-0 border-2 border-orange-600 rounded-[16px]"
                              transition={{ type: "spring", stiffness: 350, damping: 28 }}
                            />
                          </>
                        )}
                        {tab.title}
                      </button>
                      {index === 0 && !isActive && tabs[1].id !== activeTab && (
                        <div className="h-4 w-[1px] bg-zinc-200/50 mx-1" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Grid of Filtered Projects */}
          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              {filteredProjects.length > 0 ? (
                <motion.div
                  key={activeTab + "-" + searchQuery}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
                >
                  {filteredProjects.map((project) => (
                    <motion.div
                      key={project.id}
                      variants={cardVariants}
                      whileHover={{
                        y: -8,
                        boxShadow: "0 25px 50px -12px rgba(255, 94, 20, 0.08)"
                      }}
                      className="bg-white border border-zinc-100 hover:border-orange-100/60 rounded-[32px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.005)] transition-all duration-300 w-full max-w-[380px] flex flex-col group"
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
              ) : (
                <motion.div
                  key="no-results"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-6">
                    <Search size={28} />
                  </div>
                  <h3 className="text-zinc-900 font-extrabold text-xl mb-2">No Projects Found</h3>
                  <p className="text-zinc-500 text-sm max-w-sm mb-6">
                    We couldn't find any projects matching <strong className="text-orange-600 font-bold">"{searchQuery}"</strong> in this category.
                  </p>
                  <button
                    onClick={() => setSearchQuery("")}
                    className="px-6 py-2.5 bg-zinc-900 hover:bg-orange-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm"
                  >
                    Clear Search
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Signature Footer */}
      <Footer />
    </div>
  );
}
