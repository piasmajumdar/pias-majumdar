"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { skillCategories } from "../data/skills";
import { 
  Brain, 
  Cpu, 
  LineChart, 
  FlaskConical, 
  TrendingUp, 
  Activity, 
  Network, 
  Eye, 
  Sparkles, 
  MessageSquareCode, 
  Volume2, 
  Layers, 
  Globe, 
  ShieldCheck, 
  Unplug, 
  MousePointerClick, 
  Laptop, 
  Zap,
  Code2,
  Database,
  Wrench,
  Boxes
} from "lucide-react";
import { 
  SiPython, 
  SiScikitlearn, 
  SiPytorch, 
  SiTensorflow, 
  SiOpencv, 
  SiNextdotjs, 
  SiReact, 
  SiJavascript, 
  SiTailwindcss, 
  SiFramer, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiFirebase, 
  SiGit, 
  SiGithub, 
  SiVercel,
  SiHtml5,
  SiCss
} from "react-icons/si";

// Map skills to icons & brand colors
const skillIconMap = {
  // AI & ML
  "Python": { icon: SiPython, color: "#3776AB" },
  "Machine Learning": { icon: Brain, color: "#ff5e14" },
  "Scikit-learn": { icon: SiScikitlearn, color: "#F7931E" },
  "Data Preprocessing": { icon: Cpu, color: "#0ea5e9" },
  "Model Evaluation": { icon: LineChart, color: "#22c55e" },
  "Research & Experimentation": { icon: FlaskConical, color: "#a855f7" },
  "Time Series Forecasting": { icon: TrendingUp, color: "#eab308" },
  "ARIMA": { icon: Activity, color: "#ec4899" },

  // DL & NLP
  "Deep Learning": { icon: Network, color: "#ef4444" },
  "PyTorch": { icon: SiPytorch, color: "#EE4C2C" },
  "TensorFlow": { icon: SiTensorflow, color: "#FF6F00" },
  "Transformers": { icon: Sparkles, color: "#f59e0b" },
  "Natural Language Processing": { icon: MessageSquareCode, color: "#06b6d4" },
  "Multimodal AI": { icon: Layers, color: "#8b5cf6" },
  "Computer Vision": { icon: Eye, color: "#10b981" },
  "OpenCV": { icon: SiOpencv, color: "#5C3EE8" },
  "MediaPipe": { icon: Cpu, color: "#3b82f6" },
  "T5 Transformer": { icon: Sparkles, color: "#ec4899" },
  "Wav2Vec2 / WavLM": { icon: Volume2, color: "#06b6d4" },
  "RoBERTa / DeBERTa": { icon: MessageSquareCode, color: "#6366f1" },
  "ViT / ResNet / LSTM": { icon: Layers, color: "#14b8a6" },

  // Frontend
  "HTML5": { icon: SiHtml5, color: "#E34F26" },
  "CSS3": { icon: SiCss, color: "#1572B6" },
  "Next.js (App Router)": { icon: SiNextdotjs, color: "#000000" },
  "React.js": { icon: SiReact, color: "#61DAFB" },
  "JavaScript (ES6+)": { icon: SiJavascript, color: "#F7DF1E" },
  "TailwindCSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "HeroUI": { icon: Boxes, color: "#ff5e14" },
  "Framer Motion": { icon: SiFramer, color: "#0055FF" },
  "SwiperJS": { icon: MousePointerClick, color: "#6366f1" },
  "UI/UX Design": { icon: Sparkles, color: "#ec4899" },
  "Responsive Design": { icon: Laptop, color: "#22c55e" },
  "Frontend Optimization": { icon: Zap, color: "#eab308" },

  // Backend
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  "Express.js": { icon: SiExpress, color: "#000000" },
  "REST APIs": { icon: Globe, color: "#3b82f6" },
  "SQL": { icon: Database, color: "#4479A1" },
  "MongoDB": { icon: SiMongodb, color: "#47A248" },
  "JWT Authentication": { icon: ShieldCheck, color: "#10b981" },
  "Firebase": { icon: SiFirebase, color: "#FFCA28" },
  "API Integration": { icon: Unplug, color: "#f59e0b" },

  // Tools
  "Git": { icon: SiGit, color: "#F05032" },
  "GitHub": { icon: SiGithub, color: "#181717" },
  "Vercel": { icon: SiVercel, color: "#000000" }
};

// Map category IDs to headers & icons
const categoryMeta = {
  "ai-ml": { icon: Brain, title: "AI & Machine Learning" },
  "dl-nlp": { icon: Network, title: "Deep Learning & NLP" },
  "frontend": { icon: Code2, title: "Frontend Engineering" },
  "backend": { icon: Database, title: "Backend & Databases" },
  "tools": { icon: Wrench, title: "Tools & Deployment" }
};

export default function Skills() {
  const [activeWebTab, setActiveWebTab] = useState("frontend");
  const [activeAiTab, setActiveAiTab] = useState("ai-ml");

  const webCategories = skillCategories.filter(cat => ["frontend", "backend", "tools"].includes(cat.id));
  const aiCategories = skillCategories.filter(cat => ["ai-ml", "dl-nlp"].includes(cat.id));

  const activeWebCategory = skillCategories.find((cat) => cat.id === activeWebTab);
  const activeAiCategory = skillCategories.find((cat) => cat.id === activeAiTab);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 } 
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      transition: { duration: 0.18, ease: "easeInOut" } 
    }
  };

  const badgeContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03 }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 6 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 12 }
    }
  };

  return (
    <section id="skills" className="relative py-28 overflow-hidden bg-white scroll-mt-24">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] pointer-events-none -z-10 translate-x-[20%] -translate-y-[20%] opacity-40">
        <div className="absolute w-[300px] h-[300px] rounded-full border-[1.5px] border-orange-600/10 right-0 top-0" />
        <div className="absolute w-[400px] h-[400px] rounded-full border-[1.5px] border-orange-600/10 right-0 top-0" />
        <div className="absolute w-[500px] h-[500px] rounded-full border-[1.5px] border-orange-600/10 right-0 top-0 animate-[spin_80s_linear_infinite]" />
      </div>

      <div className="absolute top-24 left-10 w-24 h-24 pointer-events-none -z-10 opacity-20 bg-[radial-gradient(#ff5e14_1.5px,transparent_1.5px)] [background-size:12px_12px]" />
      <div className="absolute top-24 right-20 w-24 h-24 pointer-events-none -z-10 opacity-20 bg-[radial-gradient(#ff5e14_1.5px,transparent_1.5px)] [background-size:12px_12px]" />
      <div className="absolute top-36 left-4 w-3.5 h-3.5 rounded-full bg-orange-600/60 shadow-[0_0_10px_rgba(234,88,12,0.4)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-[1.5px] bg-orange-600/40" />
            <span className="text-orange-600 font-bold text-xs uppercase tracking-widest">
              MY SKILLS
            </span>
            <div className="w-6 h-[1.5px] bg-orange-600/40" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 tracking-tight leading-tight">
            Technologies I <span className="text-orange-600">Work With</span>
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-500 text-sm md:text-base leading-relaxed font-medium">
            A blend of tools and technologies I use to build intelligent,
            scalable and impactful solutions.
          </p>
        </motion.div>

        {/* Two-Column Grid for Parallel Toggles & Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Web Engineering */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col w-full max-w-xl mx-auto"
          >
            {/* Toggle Bar - Professional Text-only Double-layer Outline capsules */}
            <div className="flex overflow-x-auto no-scrollbar p-1.5 bg-white border border-zinc-200/50 rounded-[24px] mb-8 shadow-[0_6px_25px_rgba(0,0,0,0.01)] backdrop-blur-xl shrink-0">
              <div className="flex items-center w-full gap-1">
                {webCategories.map((category, index) => {
                  const isActive = category.id === activeWebTab;
                  const catMeta = categoryMeta[category.id] || { title: category.title };
                  
                  return (
                    <div key={category.id} className="flex-1 flex items-center justify-center relative">
                      <button
                        onClick={() => setActiveWebTab(category.id)}
                        className={`relative w-full flex items-center justify-center py-3 px-3 rounded-[18px] cursor-pointer transition-colors duration-300 select-none z-10 ${
                          isActive ? "text-orange-600 font-extrabold" : "text-zinc-600 hover:text-orange-600 group"
                        }`}
                      >
                        {/* Animated sliding double outline capsule */}
                        {isActive && (
                          <>
                            <motion.div
                              layoutId="activeWebTabOuter"
                              className="absolute -inset-[2px] border border-orange-500/20 rounded-[20px]"
                              transition={{ type: "spring", stiffness: 350, damping: 28 }}
                            />
                            <motion.div
                              layoutId="activeWebTabInner"
                              className="absolute inset-0 border-2 border-orange-600 rounded-[18px]"
                              transition={{ type: "spring", stiffness: 350, damping: 28 }}
                            />
                          </>
                        )}

                        {/* Text Label */}
                        <span className="text-[12px] sm:text-[13px] font-bold tracking-tight text-center leading-tight transition-colors duration-300">
                          {catMeta.title}
                        </span>
                      </button>
                      
                      {index < webCategories.length - 1 && (
                        <div className={`h-5 w-[1px] bg-zinc-200/50 mx-1 transition-opacity duration-300 ${
                          isActive || webCategories[index+1].id === activeWebTab ? "opacity-0" : "opacity-100"
                        }`} />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Active Card Content */}
            <div className="relative min-h-[380px] w-full">
              <AnimatePresence mode="wait">
                {activeWebCategory && (
                  <motion.div
                    key={activeWebCategory.id}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="w-full"
                  >
                    <div className="bg-[#fafafa]/40 border border-zinc-100 rounded-[32px] p-6 sm:p-8 flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.01)] group relative bg-white min-h-[380px]">
                      
                      <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100/30 flex items-center justify-center text-orange-600 mb-5 shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm">
                        {(() => {
                          const Icon = categoryMeta[activeWebCategory.id]?.icon || Code2;
                          return <Icon size={20} strokeWidth={2.2} />;
                        })()}
                      </div>
                      
                      <h3 className="text-zinc-900 font-bold text-xl mb-1.5 tracking-tight">
                        {categoryMeta[activeWebCategory.id]?.title}
                      </h3>
                      <p className="text-zinc-500 text-[12px] sm:text-[13px] leading-relaxed mb-5 font-medium">
                        {activeWebCategory.description}
                      </p>

                      <div className="w-10 h-0.5 bg-orange-600/40 rounded-full mb-6" />

                      <div>
                        <h4 className="text-orange-600 font-bold text-xs uppercase tracking-widest mb-4">
                          Technologies Quick Badges
                        </h4>
                        
                        <motion.div 
                          variants={badgeContainer}
                          initial="hidden"
                          animate="visible"
                          className="flex flex-wrap gap-2"
                        >
                          {activeWebCategory.skills.map((skill) => {
                            const skillInfo = skillIconMap[skill.name] || {};
                            const SkillIcon = skillInfo.icon || null;
                            const iconColor = skillInfo.color || "#ff5e14";

                            return (
                              <motion.div
                                key={skill.name}
                                variants={badgeVariants}
                                whileHover={{ 
                                  scale: 1.05, 
                                  y: -1.5,
                                  borderColor: `${iconColor}44`,
                                  boxShadow: `0 4px 10px -2px ${iconColor}12`
                                }}
                                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-zinc-200/60 shadow-[0_2px_6px_rgba(0,0,0,0.01)] transition-all duration-300 text-zinc-700 font-bold text-[12px] cursor-default select-none group/badge"
                              >
                                {SkillIcon && (
                                  <span className="shrink-0 flex items-center justify-center">
                                    <SkillIcon size={12} style={{ color: iconColor }} />
                                  </span>
                                )}
                                <span className="tracking-tight group-hover/badge:text-zinc-900 transition-colors">{skill.name}</span>
                              </motion.div>
                            );
                          })}
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right Column: AI & Machine Learning */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col w-full max-w-xl mx-auto"
          >
            {/* Toggle Bar - Professional Text-only Double-layer Outline capsules */}
            <div className="flex overflow-x-auto no-scrollbar p-1.5 bg-white border border-zinc-200/50 rounded-[24px] mb-8 shadow-[0_6px_25px_rgba(0,0,0,0.01)] backdrop-blur-xl shrink-0">
              <div className="flex items-center w-full gap-1">
                {aiCategories.map((category, index) => {
                  const isActive = category.id === activeAiTab;
                  const catMeta = categoryMeta[category.id] || { title: category.title };
                  
                  return (
                    <div key={category.id} className="flex-1 flex items-center justify-center relative">
                      <button
                        onClick={() => setActiveAiTab(category.id)}
                        className={`relative w-full flex items-center justify-center py-3 px-3 rounded-[18px] cursor-pointer transition-colors duration-300 select-none z-10 ${
                          isActive ? "text-orange-600 font-extrabold" : "text-zinc-600 hover:text-orange-600 group"
                        }`}
                      >
                        {/* Animated sliding double outline capsule */}
                        {isActive && (
                          <>
                            <motion.div
                              layoutId="activeAiTabOuter"
                              className="absolute -inset-[2px] border border-orange-500/20 rounded-[20px]"
                              transition={{ type: "spring", stiffness: 350, damping: 28 }}
                            />
                            <motion.div
                              layoutId="activeAiTabInner"
                              className="absolute inset-0 border-2 border-orange-600 rounded-[18px]"
                              transition={{ type: "spring", stiffness: 350, damping: 28 }}
                            />
                          </>
                        )}

                        {/* Text Label */}
                        <span className="text-[12px] sm:text-[13px] font-bold tracking-tight text-center leading-tight transition-colors duration-300">
                          {catMeta.title}
                        </span>
                      </button>
                      
                      {index < aiCategories.length - 1 && (
                        <div className={`h-5 w-[1px] bg-zinc-200/50 mx-1 transition-opacity duration-300 ${
                          isActive || aiCategories[index+1].id === activeAiTab ? "opacity-0" : "opacity-100"
                        }`} />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Active Card Content */}
            <div className="relative min-h-[380px] w-full">
              <AnimatePresence mode="wait">
                {activeAiCategory && (
                  <motion.div
                    key={activeAiCategory.id}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="w-full"
                  >
                    <div className="bg-[#fafafa]/40 border border-zinc-100 rounded-[32px] p-6 sm:p-8 flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.01)] group relative bg-white min-h-[380px]">
                      
                      <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100/30 flex items-center justify-center text-orange-600 mb-5 shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm">
                        {(() => {
                          const Icon = categoryMeta[activeAiCategory.id]?.icon || Brain;
                          return <Icon size={20} strokeWidth={2.2} />;
                        })()}
                      </div>
                      
                      <h3 className="text-zinc-900 font-bold text-xl mb-1.5 tracking-tight">
                        {categoryMeta[activeAiCategory.id]?.title}
                      </h3>
                      <p className="text-zinc-500 text-[12px] sm:text-[13px] leading-relaxed mb-5 font-medium">
                        {activeAiCategory.description}
                      </p>

                      <div className="w-10 h-0.5 bg-orange-600/40 rounded-full mb-6" />

                      <div>
                        <h4 className="text-orange-600 font-bold text-xs uppercase tracking-widest mb-4">
                          Technologies Quick Badges
                        </h4>
                        
                        <motion.div 
                          variants={badgeContainer}
                          initial="hidden"
                          animate="visible"
                          className="flex flex-wrap gap-2"
                        >
                          {activeAiCategory.skills.map((skill) => {
                            const skillInfo = skillIconMap[skill.name] || {};
                            const SkillIcon = skillInfo.icon || null;
                            const iconColor = skillInfo.color || "#ff5e14";

                            return (
                              <motion.div
                                key={skill.name}
                                variants={badgeVariants}
                                whileHover={{ 
                                  scale: 1.05, 
                                  y: -1.5,
                                  borderColor: `${iconColor}44`,
                                  boxShadow: `0 4px 10px -2px ${iconColor}12`
                                }}
                                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-zinc-200/60 shadow-[0_2px_6px_rgba(0,0,0,0.01)] transition-all duration-300 text-zinc-700 font-bold text-[12px] cursor-default select-none group/badge"
                              >
                                {SkillIcon && (
                                  <span className="shrink-0 flex items-center justify-center">
                                    <SkillIcon size={12} style={{ color: iconColor }} />
                                  </span>
                                )}
                                <span className="tracking-tight group-hover/badge:text-zinc-900 transition-colors">{skill.name}</span>
                              </motion.div>
                            );
                          })}
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
