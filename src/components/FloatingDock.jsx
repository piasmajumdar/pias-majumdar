"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimationControls } from "motion/react";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { Mail, MessageSquare, X } from "lucide-react";
import ContactForm from "./ContactForm";

export default function FloatingDock() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [constraints, setConstraints] = useState({ left: 0, right: 0, top: 0, bottom: 0 });
  const dockRef = useRef(null);
  const controls = useAnimationControls();

  const openModal = () => {
    setIsModalOpen(true);
    if (typeof window !== "undefined") {
      window.history.pushState({ modalOpen: true }, "");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    if (typeof window !== "undefined" && window.history.state?.modalOpen) {
      window.history.back();
    }
  };

  // Keyboard Escape and Phone Back button listeners
  useEffect(() => {
    if (!isModalOpen) return;

    const handlePopState = (e) => {
      // History pop state has been triggered by the phone back button, just close modal
      setIsModalOpen(false);
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  // Dynamically calculate drag constraints to keep the dock within viewport
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        const dockHeight = dockRef.current ? dockRef.current.offsetHeight : 300;
        const initialTop = window.innerHeight * 0.35;

        setConstraints({
          left: -window.innerWidth + 80,
          right: 8,
          top: -initialTop + 24,
          bottom: window.innerHeight - initialTop - dockHeight - 24
        });

        // Always snap back to closest side on window resize
        controls.start({
          x: 0,
          transition: { type: "spring", stiffness: 300, damping: 25 }
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [controls]);

  const handleDragEnd = (event, info) => {
    if (typeof window !== "undefined") {
      const screenWidth = window.innerWidth;
      const dragReleaseX = info.point.x;
      const snapToLeft = dragReleaseX < screenWidth / 2;

      // Calculate target offset:
      // - Snap to left: x offset = 102 - screenWidth (dock sits at left: 24px)
      // - Snap to right: x offset = 0 (dock sits at initial right: 24px position)
      const targetX = snapToLeft ? (102 - screenWidth) : 0;

      controls.start({
        x: targetX,
        transition: { type: "spring", stiffness: 350, damping: 25 }
      });
    }
  };

  return (
    <>
      {/* Draggable Sticky Vertical Dock (Light Glassmorphic Theme) */}
      <motion.div
        ref={dockRef}
        drag
        animate={controls}
        dragConstraints={constraints}
        dragElastic={0.15}
        dragMomentum={false}
        onDragEnd={handleDragEnd}
        className="fixed right-6 top-[35%] z-700 bg-white/90 border border-zinc-200/85 rounded-[32px] py-5 px-3 shadow-2xl flex flex-col items-center gap-4 cursor-grab active:cursor-grabbing text-zinc-800 w-[54px] select-none backdrop-blur-xl transition-shadow duration-300 hover:shadow-orange-500/5"
      >
        {/* Drag Handle Top (Small dot in circle) */}
        <div className="w-6 h-6 flex items-center justify-center opacity-65 hover:opacity-100 transition-opacity">
          <div className="w-5 h-5 rounded-full border border-orange-500/40 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
          </div>
        </div>

        {/* Separator line */}
        <div className="w-6 h-[1px] bg-zinc-200" />

        {/* Social Icons */}
        <a
          href="https://www.linkedin.com/in/piasmajumdar/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-2xl bg-zinc-50 border border-zinc-200/60 flex items-center justify-center text-zinc-500 hover:text-orange-600 hover:border-orange-500/30 hover:bg-orange-50/20 shadow-sm transition-all duration-300 hover:scale-105"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={18} />
        </a>

        <a
          href="https://github.com/piasmajumdar"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-2xl bg-zinc-50 border border-zinc-200/60 flex items-center justify-center text-zinc-500 hover:text-orange-600 hover:border-orange-500/30 hover:bg-orange-50/20 shadow-sm transition-all duration-300 hover:scale-105"
          aria-label="GitHub"
        >
          <FaGithub size={18} />
        </a>

        <a
          href="mailto:piasmajumdar@gmail.com"
          className="w-10 h-10 rounded-2xl bg-zinc-50 border border-zinc-200/60 flex items-center justify-center text-zinc-500 hover:text-orange-600 hover:border-orange-500/30 hover:bg-orange-50/20 shadow-sm transition-all duration-300 hover:scale-105"
          aria-label="Email"
        >
          <Mail size={18} />
        </a>

        {/* Separator line */}
        <div className="w-6 h-[1px] bg-zinc-200" />

        {/* Contact Me Trigger Icon (with Orange pulsing glow) */}
        <button
          onClick={openModal}
          className="w-10 h-10 rounded-2xl bg-orange-600 hover:bg-orange-500 flex items-center justify-center text-white shadow-md shadow-orange-500/20 hover:scale-110 active:scale-95 transition-all cursor-pointer relative group"
          aria-label="Contact Form Modal"
        >
          <MessageSquare size={18} strokeWidth={2.2} />

          {/* Pulsing Light Indicator */}
          <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
          </span>
        </button>
      </motion.div>

      {/* Modal Overlay and Form */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={closeModal}
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.92, y: 24, opacity: 0 }}
              animate={{
                scale: 1,
                y: 0,
                opacity: 1,
                transition: { type: "spring", stiffness: 350, damping: 26 }
              }}
              exit={{
                scale: 0.92,
                y: 24,
                opacity: 0,
                transition: { duration: 0.18, ease: "easeInOut" }
              }}
              className="bg-white border border-zinc-200/60 rounded-[32px] p-6 sm:p-10 max-w-lg w-full shadow-2xl relative z-10 overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 p-2 rounded-xl bg-zinc-50 border border-zinc-250 text-zinc-500 hover:text-orange-600 hover:border-orange-200/50 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={16} strokeWidth={2.5} />
              </button>

              {/* Title Header */}
              <div className="flex items-center gap-2 mb-6 border-b border-zinc-100 pb-4">
                <MessageSquare className="text-orange-600" size={20} />
                <h4 className="text-zinc-800 font-extrabold text-lg tracking-tight">Send a quick message</h4>
              </div>

              {/* Form Component */}
              <ContactForm onSuccess={closeModal} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
