"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, ExternalLink, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

export default function ChallengePostModal({ post, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fullScreenImage, setFullScreenImage] = useState(null);

  // Reset indices when post changes
  useEffect(() => {
    setCurrentImageIndex(0);
    setFullScreenImage(null);
  }, [post]);

  // Support ESC key to close lightbox or modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (fullScreenImage) {
          setFullScreenImage(null);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [fullScreenImage, onClose]);

  if (!post) return null;

  const isLinkedIn = !!(post.iframe || post.link);

  // Extract URL for LinkedIn embeds
  let fullUrl = "";
  let rawUrl = "";
  if (isLinkedIn) {
    if (post.iframe) {
      const match = post.iframe.match(/src="([^"]+)"/);
      if (match) rawUrl = match[1];
    } else if (post.link) {
      rawUrl = post.link;
    }

    if (rawUrl) {
      fullUrl = rawUrl.replace(/[\?&]collapsed=1/, "");
    }
  }

  const title = post.title || (isLinkedIn ? "LinkedIn Progress Update" : "Challenge Progress Update");
  const date = post.date || (isLinkedIn ? "LinkedIn Feed" : "Manual Post");

  return (
    <>
      <AnimatePresence>
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-zinc-950/70 backdrop-blur-md"
          />

          {/* Modal Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-white border border-zinc-100 rounded-[32px] w-full max-w-[560px] shadow-2xl relative overflow-hidden flex flex-col z-10 my-8"
          >
            {/* Header */}
            <div className="px-6 py-5 flex items-center justify-between border-b border-zinc-100 shrink-0 bg-slate-50/50">
              <div className="flex flex-col gap-1 max-w-[80%]">
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
                  <span className="text-zinc-900 font-extrabold text-base tracking-tight truncate">
                    {title}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-zinc-400 font-medium">
                  <Calendar size={12} />
                  <span>{date}</span>
                </div>
              </div>

              {/* Actions: Close button */}
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-orange-600 hover:border-orange-500/50 hover:bg-orange-50/20 transition-all duration-300 cursor-pointer shadow-sm shrink-0"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Iframe or Manual Content Area */}
            <div className="relative w-full h-[65vh] max-h-[895px] min-h-[480px] bg-zinc-50 flex flex-col overflow-hidden">
              {isLinkedIn ? (
                /* LinkedIn Iframe */
                <iframe
                  src={fullUrl}
                  height="100%"
                  width="100%"
                  frameBorder="0"
                  allowFullScreen
                  title={title}
                  className="w-full h-full"
                />
              ) : (
                /* Manual post detail viewer */
                <div className="w-full h-full overflow-y-auto p-6 sm:p-8 flex flex-col text-left">
                  {/* Image Slider / Carousel */}
                  {post.imageUrls && post.imageUrls.length > 0 && (
                    <div className="w-full relative rounded-2xl overflow-hidden mb-6 shrink-0 bg-zinc-100 border border-zinc-200/40 shadow-sm min-h-[200px] max-h-[340px] group/carousel">
                      {/* Active Slide Image */}
                      <div 
                        className="relative w-full h-full cursor-zoom-in group/img"
                        onClick={() => setFullScreenImage(post.imageUrls[currentImageIndex])}
                      >
                        <img
                          src={post.imageUrls[currentImageIndex]}
                          alt={`${title} - Image ${currentImageIndex + 1}`}
                          className="w-full h-full object-cover transition-all duration-300 max-h-[340px] aspect-video group-hover/img:scale-[1.02] duration-500"
                        />
                        {/* Hover Overlay indicating click to zoom */}
                        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-bold text-zinc-800 shadow-md">
                            <ZoomIn size={14} className="text-orange-600" />
                            <span>Click to Zoom</span>
                          </div>
                        </div>
                      </div>

                      {/* Navigation Controls */}
                      {post.imageUrls.length > 1 && (
                        <>
                          {/* Left Arrow Button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex((prev) => (prev === 0 ? post.imageUrls.length - 1 : prev - 1));
                            }}
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/85 hover:bg-white backdrop-blur-sm flex items-center justify-center text-zinc-700 hover:text-orange-600 transition-all duration-200 cursor-pointer shadow-md opacity-0 group-hover/carousel:opacity-100 z-10"
                            aria-label="Previous image"
                          >
                            <ChevronLeft size={16} />
                          </button>

                          {/* Right Arrow Button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex((prev) => (prev === post.imageUrls.length - 1 ? 0 : prev + 1));
                            }}
                            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/85 hover:bg-white backdrop-blur-sm flex items-center justify-center text-zinc-700 hover:text-orange-600 transition-all duration-200 cursor-pointer shadow-md opacity-0 group-hover/carousel:opacity-100 z-10"
                            aria-label="Next image"
                          >
                            <ChevronRight size={16} />
                          </button>

                          {/* Slide indicators / dots */}
                          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 p-1.5 rounded-full bg-black/25 backdrop-blur-sm z-10">
                            {post.imageUrls.map((_, dotIdx) => (
                              <button
                                key={dotIdx}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setCurrentImageIndex(dotIdx);
                                }}
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                  dotIdx === currentImageIndex ? "bg-white w-3" : "bg-white/60 hover:bg-white/90"
                                }`}
                                aria-label={`Go to slide ${dotIdx + 1}`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  )}
                  
                  <h2 className="text-zinc-900 font-black text-xl mb-4 tracking-tight leading-snug">
                    {title}
                  </h2>
                  
                  <p className="text-zinc-600 text-sm leading-relaxed font-medium whitespace-pre-wrap flex-1">
                    {post.text}
                  </p>
                </div>
              )}
            </div>

            {/* Footer Actions */}
            <div className="px-6 py-4 border-t border-zinc-100 bg-slate-50/30 flex justify-end gap-3 shrink-0">
              <button
                onClick={onClose}
                className="px-5 py-2.5 border border-zinc-200 text-zinc-500 hover:text-zinc-800 hover:border-zinc-300 font-bold text-xs rounded-2xl transition-all duration-300 uppercase tracking-wider cursor-pointer"
              >
                Close
              </button>
              {isLinkedIn && (
                <motion.a
                  href={fullUrl.replace("/embed/", "/")}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-xs rounded-2xl shadow-md hover:shadow-orange-500/20 transition-all duration-300 uppercase tracking-wider cursor-pointer"
                >
                  <span>Open in LinkedIn</span>
                  <ExternalLink size={12} />
                </motion.a>
              )}
            </div>
          </motion.div>
        </div>
      </AnimatePresence>

      {/* Lightbox / Fullscreen Image Overlay */}
      <AnimatePresence>
        {fullScreenImage && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center overflow-hidden">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setFullScreenImage(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-sm cursor-zoom-out"
            />

            {/* Fullscreen Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative max-w-full max-h-full p-4 flex items-center justify-center z-10 select-none pointer-events-none"
            >
              <img
                src={fullScreenImage}
                alt="Fullscreen Preview"
                className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl border border-white/5 pointer-events-auto cursor-zoom-out"
                onClick={() => setFullScreenImage(null)}
              />
            </motion.div>

            {/* Top Close Button Controls */}
            <button
              onClick={() => setFullScreenImage(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg backdrop-blur-sm border border-white/10 z-20"
              aria-label="Close fullscreen view"
            >
              <X size={22} />
            </button>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
