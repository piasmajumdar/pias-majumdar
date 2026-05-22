'use client';

import { projects } from "../data/projects";
import ReusableCard from "./ReusableCard";
import { BrainCircuit } from "lucide-react";

export default function AIProjects() {
  const aiProjects = projects.filter((p) => p.category === "ai");

  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-900/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Sub-section Header */}
        <div className="flex items-center gap-4 mb-10 pb-4 border-b border-slate-200/50 dark:border-slate-800/50">
          <div className="p-2 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400">
            <BrainCircuit className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">
              AI & Machine Learning Research Projects
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              Deep Learning, Natural Language Processing, Multimodal Fusion, and Neural Time Series Models.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiProjects.map((project) => (
            <ReusableCard key={project.id} {...project} />
          ))}
        </div>

      </div>
    </section>
  );
}
