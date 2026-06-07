"use client";

import { motion } from "motion/react";
import { timelineData } from "../data/achievements";
import { GraduationCap, Briefcase, Heart } from "lucide-react";

// Map types to Lucide icons
const icons = {
  education: GraduationCap,
  experience: Briefcase,
  volunteer: Heart
};

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-28 overflow-hidden bg-white scroll-mt-24">
      {/* Background Soft Glows */}
      <div className="absolute top-[20%] left-0 w-80 h-80 bg-orange-50/60 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[20%] right-0 w-96 h-96 bg-orange-50/50 rounded-full blur-[140px] -z-10" />

      {/* Decorative Dotted Grid */}
      <div className="absolute top-10 left-10 w-24 h-24 pointer-events-none -z-10 opacity-20 bg-[radial-gradient(#ff5e14_1.5px,transparent_1.5px)] [background-size:12px_12px]" />
      <div className="absolute bottom-10 right-10 w-24 h-24 pointer-events-none -z-10 opacity-20 bg-[radial-gradient(#ff5e14_1.5px,transparent_1.5px)] [background-size:12px_12px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-20"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-[1.5px] bg-orange-600/40" />
            <span className="text-orange-600 font-bold text-xs uppercase tracking-widest">
              MY JOURNEY
            </span>
            <div className="w-6 h-[1.5px] bg-orange-600/40" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 tracking-tight leading-tight">
            Education & <span className="text-orange-600">Experience</span>
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-500 text-sm md:text-base leading-relaxed font-medium">
            A chronological timeline of my academic path, professional milestones, and leadership engagements.
          </p>
        </motion.div>

        {/* Centralized Alternating Timeline */}
        <div className="relative mt-20 max-w-5xl mx-auto">
          
          {/* Central Vertical Line (drawing animation) */}
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute left-6 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-orange-600 via-orange-400 to-orange-100/20 origin-top"
          />

          <div className="space-y-16">
            {timelineData.map((item, idx) => {
              const Icon = icons[item.type] || Briefcase;
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={item.id} 
                  className="relative flex flex-col md:flex-row md:justify-between items-center w-full"
                >
                  {/* Glowing Icon Node on the Vertical Track */}
                  <motion.div
                    initial={{ scale: 0, x: "-50%" }}
                    whileInView={{ scale: 1, x: "-50%" }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: idx * 0.1 }}
                    className="absolute left-6 md:left-1/2 z-20 w-10 h-10 rounded-full bg-white border-2 border-orange-600 flex items-center justify-center text-orange-600 shadow-[0_0_15px_rgba(234,88,12,0.15)] group hover:bg-orange-600 hover:text-white transition-colors duration-300 cursor-default"
                  >
                    <Icon size={16} strokeWidth={2.2} />
                  </motion.div>

                  {/* alternating columns in DOM to prevent flex-ordering bugs */}
                  {isEven ? (
                    <>
                      {/* Left Column: Card */}
                      <div className="w-full md:w-[calc(50%-2.5rem)] pl-16 md:pl-0 md:text-right">
                        <motion.div
                          initial={{ opacity: 0, x: -45 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: false, margin: "-100px" }}
                          transition={{ type: "spring", stiffness: 85, damping: 15 }}
                          whileHover={{ 
                            y: -6, 
                            boxShadow: "0 20px 40px -15px rgba(255, 94, 20, 0.06)",
                            borderColor: "rgba(234, 88, 12, 0.2)"
                          }}
                          className="bg-white border border-zinc-100 hover:border-orange-100/60 p-6 md:p-8 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.005)] transition-all duration-300 relative group flex flex-col"
                        >
                          {/* Period Badge */}
                          <div className="flex mb-4 md:justify-end justify-start">
                            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase text-orange-600 bg-orange-50 border border-orange-100/40">
                              {item.period}
                            </span>
                          </div>

                          <h4 className="text-zinc-900 font-extrabold text-xl mb-1 group-hover:text-orange-600 transition-colors tracking-tight">
                            {item.role}
                          </h4>
                          
                          <h5 className="text-zinc-500 font-bold text-[13px] mb-4">
                            {item.organization}
                          </h5>

                          <p className="text-zinc-600 text-sm leading-relaxed font-medium">
                            {item.description}
                          </p>
                        </motion.div>
                      </div>

                      {/* Right Column: Spacer */}
                      <div className="hidden md:block w-[calc(50%-2.5rem)]" />
                    </>
                  ) : (
                    <>
                      {/* Left Column: Spacer */}
                      <div className="hidden md:block w-[calc(50%-2.5rem)]" />

                      {/* Right Column: Card */}
                      <div className="w-full md:w-[calc(50%-2.5rem)] pl-16 md:pl-0">
                        <motion.div
                          initial={{ opacity: 0, x: 45 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: false, margin: "-100px" }}
                          transition={{ type: "spring", stiffness: 85, damping: 15 }}
                          whileHover={{ 
                            y: -6, 
                            boxShadow: "0 20px 40px -15px rgba(255, 94, 20, 0.06)",
                            borderColor: "rgba(234, 88, 12, 0.2)"
                          }}
                          className="bg-white border border-zinc-100 hover:border-orange-100/60 p-6 md:p-8 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.005)] transition-all duration-300 relative group flex flex-col"
                        >
                          {/* Period Badge */}
                          <div className="flex mb-4 justify-start">
                            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase text-orange-600 bg-orange-50 border border-orange-100/40">
                              {item.period}
                            </span>
                          </div>

                          <h4 className="text-zinc-900 font-extrabold text-xl mb-1 group-hover:text-orange-600 transition-colors tracking-tight">
                            {item.role}
                          </h4>
                          
                          <h5 className="text-zinc-500 font-bold text-[13px] mb-4">
                            {item.organization}
                          </h5>

                          <p className="text-zinc-600 text-sm leading-relaxed font-medium">
                            {item.description}
                          </p>
                        </motion.div>
                      </div>
                    </>
                  )}

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
