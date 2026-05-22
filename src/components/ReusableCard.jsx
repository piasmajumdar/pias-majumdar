'use client';

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

export default function ReusableCard({
  title,
  description,
  tech,
  github,
  demo,
  image,
  category
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative flex flex-col h-full rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 overflow-hidden shadow-sm hover:shadow-lg dark:hover:shadow-rose-950/10 hover:border-rose-200/50 dark:hover:border-rose-900/30 transition-all glow-red"
    >
      {/* Project Image Box */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800 border-b border-slate-100 dark:border-slate-800/80">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        {/* Category Badge overlay */}
        <div className="absolute top-4 left-4 z-10">
          <span className={`px-2.5 py-1 text-xs font-semibold uppercase tracking-wider rounded-lg shadow-sm ${
            category === 'ai'
              ? 'bg-rose-500 text-white'
              : 'bg-slate-900 text-white dark:bg-white dark:text-slate-950'
          }`}>
            {category === 'ai' ? 'AI / ML' : 'Full Stack'}
          </span>
        </div>
      </div>

      {/* Details Box */}
      <div className="flex flex-col flex-grow p-6">
        <h4 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
          {title}
        </h4>
        
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {tech.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 text-slate-600 dark:bg-slate-800/80 dark:text-slate-400 border border-slate-200/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800/80 mt-auto">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-xs font-medium text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              <FaGithub className="w-4 h-4" />
              Source Code
            </a>
          )}
          {demo && demo !== '#' && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-rose-600 hover:text-rose-700 dark:text-rose-400 dark:hover:text-rose-300 ml-auto transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
