"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, TrendingUp, Calendar, Info } from "lucide-react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { challengePosts } from "../../data/challengePosts";
import ChallengePostCard from "../../components/ChallengePostCard";
import ChallengePostModal from "../../components/ChallengePostModal";

export default function ChallengePage() {
  const [selectedPost, setSelectedPost] = useState(null);

  // Normalize posts to ensure every post has an associated day and unique ID
  const normalizedPosts = challengePosts.map((post, idx) => {
    const inferredDay = post.day || (challengePosts.length - idx);
    return {
      ...post,
      id: post.id || `challenge-day-${inferredDay}`,
      day: inferredDay
    };
  });

  // Compute stats based on normalized posts
  const totalDays = normalizedPosts.length;
  const latestDay = normalizedPosts.length > 0 ? Math.max(...normalizedPosts.map(p => p.day)) : 0;
  const progressPercent = Math.min(Math.round((latestDay / 100) * 100), 100);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation Header */}
      <Navbar />

      <main className="flex-1 pt-36 pb-24 relative overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-[10%] left-0 w-80 h-80 bg-orange-50/50 rounded-full blur-[120px] -z-10 animate-pulse" />
        <div className="absolute bottom-[20%] right-0 w-96 h-96 bg-orange-50/40 rounded-full blur-[140px] -z-10 animate-pulse" />

        {/* Decorative Dotted Grid */}
        <div className="absolute top-24 left-12 w-24 h-24 pointer-events-none -z-10 opacity-20 bg-[radial-gradient(#ff5e14_1.5px,transparent_1.5px)] [background-size:12px_12px]" />
        <div className="absolute bottom-24 right-12 w-24 h-24 pointer-events-none -z-10 opacity-20 bg-[radial-gradient(#ff5e14_1.5px,transparent_1.5px)] [background-size:12px_12px]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Back Navigation Link */}
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-zinc-500 hover:text-orange-600 transition-colors text-sm font-bold uppercase tracking-wider group"
            >
              <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Page Header */}
          <div className="flex flex-col items-center text-center mb-12">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-[1.5px] bg-orange-600/40" />
              <span className="text-orange-600 font-bold text-xs uppercase tracking-widest flex items-center gap-1.5">
                <TrendingUp size={12} />
                Challenge Tracker
              </span>
              <div className="w-6 h-[1.5px] bg-orange-600/40" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 tracking-tight leading-tight">
              100 Steps <span className="text-orange-600">Challenge</span>
            </h1>
            <p className="mt-4 max-w-2xl text-zinc-500 text-sm md:text-base leading-relaxed font-medium">
              Tracking my daily progress, coding insights, architectures, and system designs as I share them on LinkedIn.
            </p>
          </div>

          {/* Progress Dashboard Banner */}
          <div className="max-w-3xl mx-auto mb-16 border border-zinc-100 rounded-[28px] p-6 sm:p-8 bg-slate-50/40 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.01)]">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
              {/* Stat 1 */}
              <div className="text-center sm:text-left sm:border-r border-zinc-100 sm:pr-6">
                <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest block mb-1">
                  Current Status
                </span>
                <span className="text-2xl font-black text-zinc-800">
                  Step {latestDay} / 100
                </span>
              </div>

              {/* Stat 2 */}
              <div className="text-center sm:text-left sm:border-r border-zinc-100 sm:px-6">
                <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest block mb-1">
                  Total Posts Added
                </span>
                <span className="text-2xl font-black text-zinc-800">
                  {totalDays} {totalDays === 1 ? "Update" : "Updates"}
                </span>
              </div>

              {/* Stat 3 */}
              <div className="text-center sm:text-left sm:pl-6">
                <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest block mb-1">
                  Completion Progress
                </span>
                <span className="text-2xl font-black text-orange-600">
                  {progressPercent}% Complete
                </span>
              </div>
            </div>

            {/* Custom Progress Bar */}
            <div className="mt-6 w-full h-3 bg-zinc-100 rounded-full overflow-hidden border border-zinc-200/20 relative">
              <div
                className="h-full bg-gradient-to-r from-orange-500 to-red-600 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <div className="mt-4 flex items-start gap-2 text-[11px] text-zinc-400 font-medium">
              <Info size={14} className="text-zinc-400 shrink-0 mt-0.5" />
              <span>Daily updates are added at the top. Click on any card below to view the full detailed post and read comments.</span>
            </div>
          </div>

          {/* Grid of Challenge Posts */}
          {normalizedPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {normalizedPosts.map((post) => (
                <ChallengePostCard
                  key={post.id}
                  post={post}
                  onClick={() => setSelectedPost(post)}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-6">
                <Calendar size={28} />
              </div>
              <h3 className="text-zinc-900 font-extrabold text-xl mb-2">No Updates Found</h3>
              <p className="text-zinc-500 text-sm max-w-sm">
                Check back soon! Daily posts will start showing up here once added to the tracker.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Full Post Modal Popup */}
      <ChallengePostModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
      />

      {/* Signature Footer */}
      <Footer />
    </div>
  );
}
