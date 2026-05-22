'use client';

import { motion } from "framer-motion";
import { certifications } from "../data/achievements";
import { ShieldCheck, ExternalLink } from "lucide-react";

export default function Certifications() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-2">
            Industry Credentials
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            Professional Certifications
          </h3>
          <div className="w-12 h-1 bg-rose-600 dark:bg-rose-500 rounded-full mt-4" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 hover:border-rose-100 dark:hover:border-rose-900/30 transition-all flex flex-col justify-between h-full"
            >
              <div>
                {/* Certificate Icon */}
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 text-rose-600 dark:text-rose-400 flex items-center justify-center border border-slate-200/30 dark:border-slate-700/30 shadow-sm mb-5 group-hover:scale-105 transition-transform duration-300">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                
                <h4 className="text-base font-display font-bold text-slate-900 dark:text-white leading-snug group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                  {cert.title}
                </h4>
                
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-2">
                  {cert.issuer}
                </p>
              </div>

              {/* Lower metadata / Verification */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-200/20 dark:border-slate-800/50">
                <span className="text-[11px] font-medium text-slate-400">
                  Earned {cert.date}
                </span>
                
                <a
                  href={cert.link}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-600 hover:text-rose-700 dark:text-rose-400 dark:hover:text-rose-300 transition-colors"
                >
                  Verify
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
