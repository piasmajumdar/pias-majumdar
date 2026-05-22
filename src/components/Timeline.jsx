'use client';

import { motion } from "framer-motion";
import { timelineData } from "../data/achievements";
import { GraduationCap, Users, Heart } from "lucide-react";

const icons = {
  education: GraduationCap,
  experience: Users,
  volunteer: Heart
};

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-white dark:bg-slate-950 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-2">
            Journey & Leadership
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            Experience & Education
          </h3>
          <div className="w-12 h-1 bg-rose-600 dark:bg-rose-500 rounded-full mt-4" />
        </div>

        {/* Vertical Timeline Track */}
        <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-32 space-y-12 pb-4">
          
          {timelineData.map((item, idx) => {
            const Icon = icons[item.type] || Users;
            
            return (
              <div key={item.id} className="relative pl-8 md:pl-12">
                {/* Node Icon on Track */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="absolute -left-5 top-1 z-10 w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-500 to-red-600 text-white flex items-center justify-center shadow-md shadow-red-500/20"
                >
                  <Icon className="w-5 h-5" />
                </motion.div>

                {/* Left Side Label (Only visible on medium and larger screens) */}
                <div className="absolute left-[-150px] top-2 hidden md:block w-28 text-right">
                  <span className="text-sm font-semibold text-rose-600 dark:text-rose-400">
                    {item.period}
                  </span>
                </div>

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/50 shadow-sm"
                >
                  {/* Mobile Period Label */}
                  <span className="inline-block md:hidden text-xs font-semibold text-rose-600 dark:text-rose-400 mb-2">
                    {item.period}
                  </span>
                  
                  <h4 className="text-xl font-display font-bold text-slate-900 dark:text-white leading-tight">
                    {item.role}
                  </h4>
                  
                  <h5 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">
                    {item.organization}
                  </h5>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
