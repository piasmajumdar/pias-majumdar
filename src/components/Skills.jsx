'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "../data/skills";
import { Brain, Code, Database, Globe, Wrench } from "lucide-react";

const tabIcons = {
  "ai-ml": Brain,
  "dl-nlp": Brain,
  "frontend": Code,
  "backend": Database,
  "tools": Wrench,
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);

  const activeCategory = skillCategories.find((cat) => cat.id === activeTab);
  const IconComponent = tabIcons[activeTab] || Code;

  return (
    <section id="skills" className="py-24 bg-slate-50/50 dark:bg-slate-900/30 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-2">
            Expertise & Capabilities
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            Technical Skills
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-3 max-w-lg">
            A comprehensive overview of my domain knowledge across Artificial Intelligence, Deep Learning models, and Web Engineering.
          </p>
          <div className="w-12 h-1 bg-rose-600 dark:bg-rose-500 rounded-full mt-4" />
        </div>

        {/* Tab Buttons (Horizontal scrollable on mobile) */}
        <div className="flex overflow-x-auto no-scrollbar justify-start md:justify-center gap-2 p-1.5 bg-slate-200/50 dark:bg-slate-800/40 rounded-2xl max-w-3xl mx-auto mb-12 border border-slate-200/30 dark:border-slate-800/30">
          {skillCategories.map((category) => {
            const TabIcon = tabIcons[category.id] || Code;
            const isActive = category.id === activeTab;
            
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap cursor-pointer transition-all ${
                  isActive
                    ? "bg-white text-rose-600 shadow-sm dark:bg-slate-900 dark:text-rose-400"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                }`}
              >
                <TabIcon className="w-4 h-4" />
                {category.title}
              </button>
            );
          })}
        </div>

        {/* Skills Display (Animated tabs transition) */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200/50 dark:border-slate-800/50 shadow-sm relative min-h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-8"
            >
              {/* Category Description */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-display font-bold text-slate-900 dark:text-white">
                      {activeCategory.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {activeCategory.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Grid of Progress bars */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {activeCategory.skills.map((skill, idx) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-semibold">
                      <span className="text-slate-800 dark:text-slate-200">{skill.name}</span>
                      <span className="text-slate-500 dark:text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: idx * 0.05, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-rose-500 to-red-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Animated Badges Grid (showing skills at a glance) */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                <h5 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">
                  Technologies Quick Badges
                </h5>
                <div className="flex flex-wrap gap-2">
                  {activeCategory.skills.map((skill, idx) => (
                    <motion.span
                      key={skill.name + "-badge"}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2, delay: idx * 0.03 }}
                      className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 rounded-full border border-slate-200/10"
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
