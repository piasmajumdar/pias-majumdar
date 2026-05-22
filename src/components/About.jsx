'use client';

import { motion } from "framer-motion";
import { Brain, Globe, Sparkles, Database, CheckCircle2 } from "lucide-react";

const interests = [
  { name: "Multimodal AI", icon: Brain },
  { name: "NLP (Natural Language Processing)", icon: Sparkles },
  { name: "Deep Learning Architectures", icon: Database },
  { name: "Intelligent Web Applications", icon: Globe },
  { name: "AI Product Engineering", icon: CheckCircle2 },
  { name: "Scalable Full Stack Systems", icon: CheckCircle2 },
  { name: "Human-centered AI systems", icon: Brain }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50/50 dark:bg-slate-900/30 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-2">
            Professional Overview
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            About Me
          </h3>
          <div className="w-12 h-1 bg-rose-600 dark:bg-rose-500 rounded-full mt-4" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Biography paragraphs */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 dark:text-slate-300">
            <h4 className="text-2xl font-display font-semibold text-slate-950 dark:text-white leading-tight">
              Bridging the gap between <span className="text-rose-600 dark:text-rose-400 font-bold">Research</span> and <span className="text-rose-600 dark:text-rose-400 font-bold">Production</span>.
            </h4>
            
            <p className="text-base sm:text-lg leading-relaxed">
              I am a Computer Science and Engineering undergraduate with strong interests in Artificial Intelligence, Deep Learning, and intelligent product engineering.
            </p>
            
            <p className="text-base leading-relaxed">
              My work focuses on building AI-powered applications that combine research-driven machine learning systems with scalable full-stack web technologies. I enjoy transforming complex ML ideas into practical real-world products using modern frontend frameworks, backend systems, and deep learning architectures.
            </p>

            {/* Interest Badges / Grid */}
            <div className="pt-6">
              <h5 className="text-sm font-semibold text-slate-950 dark:text-white uppercase tracking-wider mb-4">
                Core Focus Areas
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {interests.map((interest, idx) => {
                  const Icon = interest.icon;
                  return (
                    <motion.div
                      key={interest.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 shadow-sm"
                    >
                      <div className="p-1.5 rounded-lg bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                        {interest.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Key Professional Pillars (Premium Cards) */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 shadow-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-lg bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-4">
                <Brain className="w-5 h-5" />
              </div>
              <h5 className="text-lg font-display font-semibold text-slate-900 dark:text-white mb-2">
                AI Engineering Mindset
              </h5>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Applying advanced deep learning and transformer architectures to solve real problems. Fluent in model curation, pipeline optimization, and late-fusion multimodal learning.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 shadow-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-lg bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-4">
                <Globe className="w-5 h-5" />
              </div>
              <h5 className="text-lg font-display font-semibold text-slate-900 dark:text-white mb-2">
                Full-Stack Delivery
              </h5>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Designing end-to-end applications using Next.js, Express, MongoDB, and secure APIs. Emphasizing responsive interfaces, secure authentication flows, and high performance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 shadow-sm hover:shadow-md transition-all bg-gradient-to-br from-white to-rose-50/10 dark:from-slate-900 dark:to-rose-950/5">
              <div className="w-10 h-10 rounded-lg bg-rose-600 text-white flex items-center justify-center mb-4 shadow-md shadow-rose-500/20">
                <Sparkles className="w-5 h-5" />
              </div>
              <h5 className="text-lg font-display font-semibold text-slate-900 dark:text-white mb-2">
                Intelligent Products
              </h5>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Focusing on the convergence of machine intelligence and user experience. Deploying responsive layouts that present compound AI models as intuitive SaaS features.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
