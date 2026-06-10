"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Maximize2, Calendar, FileText } from "lucide-react";

export default function ChallengePostCard({ post, onClick }) {
  const [currentImgIdx, setCurrentImgIdx] = useState(0);
  const isLinkedIn = !!(post.iframe || post.link);

  // Auto-slide effect for manual posts with multiple images
  useEffect(() => {
    if (isLinkedIn || !post.imageUrls || post.imageUrls.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImgIdx((prev) => (prev + 1) % post.imageUrls.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [post.imageUrls, isLinkedIn]);

  // Extract URL for LinkedIn embeds
  let collapsedUrl = "";
  if (isLinkedIn) {
    let url = "";
    if (post.iframe) {
      const match = post.iframe.match(/src="([^"]+)"/);
      if (match) url = match[1];
    } else if (post.link) {
      url = post.link;
    }

    if (url) {
      collapsedUrl = url.includes("collapsed=1")
        ? url
        : `${url}${url.includes("?") ? "&" : "?"}collapsed=1`;
    }
  }

  const title = post.title || (isLinkedIn ? "LinkedIn Progress Update" : "Challenge Progress Update");
  const date = (isLinkedIn ? "LinkedIn Feed" : "Manual Post");

  return (
    <motion.div
      whileHover={{
        y: -6,
        boxShadow: "0 20px 40px -12px rgba(255, 94, 20, 0.1)"
      }}
      className="bg-white border border-zinc-100 hover:border-orange-100/60 rounded-[28px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.005)] transition-all duration-300 w-full max-w-[420px] flex flex-col group relative min-h-[400px]"
    >
      {/* Header Info */}
      <div className="px-6 py-4 flex items-center justify-between border-b border-zinc-50 shrink-0">
        <div className="flex items-center gap-2">
          {post.day ? (
            <span className="px-2.5 py-1 text-[11px] font-extrabold text-orange-600 bg-orange-50 border border-orange-100/40 rounded-lg">
              Step {post.day}
            </span>
          ) : (
            <span className="px-2.5 py-1 text-[11px] font-extrabold text-orange-600 bg-orange-50 border border-orange-100/40 rounded-lg">
              {isLinkedIn ? "LinkedIn" : "Update"}
            </span>
          )}
          <span className="text-zinc-800 font-extrabold text-sm tracking-tight truncate max-w-[180px]">
            {title}
          </span>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-zinc-400 font-semibold shrink-0">
          <Calendar size={12} />
          <span>{date}</span>
        </div>
      </div>

      {/* Card Content Area */}
      <div className="relative w-full flex-1 bg-zinc-50 flex flex-col overflow-hidden">
        {isLinkedIn ? (
          /* LinkedIn Embed Card Body */
          <div className="w-full h-[559px]">
            <iframe
              src={collapsedUrl}
              height="559"
              width="100%"
              frameBorder="0"
              allowFullScreen
              title={title}
              className="w-full h-full select-none"
            />
          </div>
        ) : (
          /* Manual Post Card Body */
          <div className="p-6 flex flex-col flex-1 h-full select-none text-left">
            {post.imageUrls && post.imageUrls.length > 0 ? (
              <div className="w-full h-40 relative rounded-xl overflow-hidden mb-4 shrink-0 bg-zinc-100 border border-zinc-200/40">
                <img
                  src={post.imageUrls[currentImgIdx]}
                  alt={title}
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out"
                />

                {/* Dots indicator for card auto-slider */}
                {post.imageUrls.length > 1 && (
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 p-1 rounded-full bg-black/25 backdrop-blur-sm z-10">
                    {post.imageUrls.map((_, dotIdx) => (
                      <div
                        key={dotIdx}
                        className={`w-1 h-1 rounded-full transition-all duration-300 ${dotIdx === currentImgIdx ? "bg-white w-2" : "bg-white/60"
                          }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 mb-4 shrink-0">
                <FileText size={20} />
              </div>
            )}

            <h3 className="text-zinc-800 font-extrabold text-base mb-2 line-clamp-2">
              {title}
            </h3>

            <p className="text-zinc-500 text-xs leading-relaxed font-medium line-clamp-[8] whitespace-pre-wrap flex-1">
              {post.text}
            </p>
          </div>
        )}

        {/* Click Interception Overlay (consistent for both cards) */}
        <div
          onClick={onClick}
          className="absolute inset-0 bg-transparent hover:bg-black/[0.02] cursor-pointer flex items-center justify-center transition-all duration-300 group"
          role="button"
          aria-label={`View details of post`}
        >
          {/* Zoom/Expand indicator */}
          <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 bg-white/95 backdrop-blur-md border border-zinc-100 px-4 py-2.5 rounded-full flex items-center gap-2 text-xs font-bold text-orange-600 shadow-lg transition-all duration-300">
            <Maximize2 size={14} className="animate-pulse" />
            <span>Click to Expand Post</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
