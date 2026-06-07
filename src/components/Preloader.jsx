"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const greetings = [
  "Hello",
  "Hola",
  "Bonjour",
  "Ciao",
  "Namaste",
  "Welcome"
];

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scroll while loading to prevent scrolling in background
    if (isLoading) {
      document.body.style.overflow = "hidden";
      // To prevent layout shift when scrollbar hides
      document.body.style.paddingRight = "15px"; 
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "0px";
    }

    if (index === greetings.length - 1) {
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
      return;
    }

    const timer = setTimeout(() => {
      setIndex(index + 1);
    }, index === 0 ? 800 : 180);

    return () => clearTimeout(timer);
  }, [index, isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ 
            y: "-100vh", 
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.2 } 
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white text-zinc-900 overflow-hidden"
        >
          {/* Animated Background Gradient Orbs */}
          <motion.div 
            className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-orange-100 mix-blend-multiply blur-[100px] pointer-events-none"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-orange-200/60 mix-blend-multiply blur-[100px] pointer-events-none"
            animate={{
              scale: [1, 1.5, 1],
              x: [0, -80, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative flex items-center text-5xl md:text-7xl font-black tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {/* Pulsing Orange Dot */}
            <motion.span 
              animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-orange-500 mr-5 md:mr-6 shadow-lg" 
            />
            {greetings[index]}
          </motion.div>
          
          {/* Animated Loading Bar */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 h-[4px] bg-orange-500"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
