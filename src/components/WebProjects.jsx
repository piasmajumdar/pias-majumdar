'use client';

import { projects } from "../data/projects";
import ReusableCard from "./ReusableCard";
import { Code2 } from "lucide-react";

export default function WebProjects() {
  const webProjects = projects.filter((p) => p.category === "web");

  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Sub-section Header */}
        <div className="flex items-center gap-4 mb-10 pb-4 border-b border-slate-200/50 dark:border-slate-800/50">
          <div className="p-2 rounded-xl bg-slate-900 dark:bg-slate-800 text-white">
            <Code2 className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">
              Full Stack Web Applications
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              Next.js Applications, Dashboard Analytics, Booking Engines, JWT Portals, and Server Architectures.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webProjects.map((project) => (
            <ReusableCard key={project.id} {...project} />
          ))}
        </div>

      </div>
    </section>
  );
}
