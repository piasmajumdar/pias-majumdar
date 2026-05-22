'use client';

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { scholarships } from "../data/achievements";
import { Award, Percent, BookOpen, Star } from "lucide-react";

const stats = [
  { id: 1, value: 100, suffix: "%", label: "Tuition & Accommodation Cover", icon: Percent },
  { id: 2, value: 3, suffix: "+", label: "Merit-Based Scholarships", icon: Award },
  { id: 3, value: 15, suffix: "+", label: "AI/ML & Full-Stack Projects", icon: BookOpen },
  { id: 4, value: 4, suffix: "", label: "Industry Credentials", icon: Star }
];

export default function Achievements() {
  return (
    <section className="py-24 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-2">
            Academic Excellence
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            Scholarships & Achievements
          </h3>
          <div className="w-12 h-1 bg-rose-600 dark:bg-rose-500 rounded-full mt-4" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Scholarship Cards */}
          <div className="lg:col-span-7 space-y-6">
            <h4 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-4">
              Academic Recognitions
            </h4>
            
            <div className="grid grid-cols-1 gap-6">
              {scholarships.map((schol, idx) => (
                <motion.div
                  key={schol.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 shadow-sm relative overflow-hidden"
                >
                  {/* Highlight bar */}
                  <div className="absolute top-0 left-0 bottom-0 w-1 bg-rose-500" />
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-xl bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-lg font-display font-bold text-slate-900 dark:text-white leading-tight">
                        {schol.title}
                      </h5>
                      <span className="inline-block text-xs font-semibold text-rose-600 dark:text-rose-400 mt-1 uppercase tracking-wider">
                        Issued by {schol.issuer}
                      </span>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                        {schol.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Key Statistics Counters */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat) => {
              const StatIcon = stat.icon;
              return (
                <div
                  key={stat.id}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 shadow-sm text-center flex flex-col items-center justify-center hover:border-rose-100 dark:hover:border-rose-900/20 transition-colors"
                >
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 mb-4">
                    <StatIcon className="w-5 h-5" />
                  </div>
                  
                  <span className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
                    <CountUp
                      end={stat.value}
                      duration={3}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                    {stat.suffix}
                  </span>
                  
                  <span className="text-[11px] sm:text-xs font-medium text-slate-500 dark:text-slate-400 mt-2 leading-tight">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
