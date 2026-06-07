"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { ArrowUpRight } from "@gravity-ui/icons";
import { Menu, X } from "lucide-react";

const navItems = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Timeline",
  // "Testimonials",
  "Contact",
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when scrolling past a certain point
  useEffect(() => {
    if (hidden && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [hidden]);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (!previous) return;

    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{
        y: hidden ? -120 : 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.35,
      }}
      className="fixed top-6 left-0 right-0 z-500 px-6"
    >
      <div
        className="
          mx-auto
          max-w-7xl
          rounded-[28px]
          border
          border-white/60
          bg-white/85
          backdrop-blur-xl
          shadow-[0_8px_40px_rgba(0,0,0,0.08)]
        "
      >
        <div className="flex h-24 items-center justify-between px-8">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <h1 className="text-5xl font-bold tracking-tight text-orange-600">
                PM
              </h1>
            </motion.div>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-14">
            {navItems.map((item, index) => {
              const active = item === "Home";

              return (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `/#${item.toLowerCase()}`}
                  className="relative"
                >
                  <span
                    className={`text-[18px] font-medium transition-all ${active
                      ? "text-orange-600"
                      : "text-zinc-800 hover:text-orange-600"
                      }`}
                  >
                    {item}
                  </span>

                  {active && (
                    <motion.span
                      layoutId="navbar-indicator"
                      className="
                        absolute
                        left-1/2
                        -bottom-4
                        h-[3px]
                        w-8
                        -translate-x-1/2
                        rounded-full
                        bg-orange-600
                      "
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <motion.button
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="
              hidden
              lg:flex
              items-center
              gap-3
              rounded-2xl
              bg-gradient-to-r
              from-orange-600
              to-red-600
              px-8
              py-4
              text-white
              font-medium
              shadow-lg
            "
          >
            <span>Let's Connect</span>

            <ArrowUpRight
              width={18}
              height={18}
            />
          </motion.button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-3 bg-orange-50 text-orange-600 rounded-xl hover:bg-orange-100 transition-colors"
          >
            {isMobileMenuOpen ? <X size={26} strokeWidth={2.5} /> : <Menu size={26} strokeWidth={2.5} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden border-t border-orange-100/50"
            >
              <div className="flex flex-col px-8 py-8 gap-6 bg-white/40">
                {navItems.map((item) => (
                  <Link
                    key={item}
                    href={item === "Home" ? "/" : `/#${item.toLowerCase()}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-semibold text-zinc-800 hover:text-orange-600 transition-colors"
                  >
                    {item}
                  </Link>
                ))}
                <button className="flex items-center justify-center gap-3 mt-6 rounded-2xl bg-gradient-to-r from-orange-600 to-red-600 px-6 py-4 text-white font-medium shadow-md w-full">
                  <span>Let's Connect</span>
                  <ArrowUpRight width={18} height={18} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}