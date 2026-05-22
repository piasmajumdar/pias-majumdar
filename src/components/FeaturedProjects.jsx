'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { projects } from "../data/projects";
import ReusableCard from "./ReusableCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-24 scroll-mt-16 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-2">
            Selected Work
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            Featured Projects
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-3 max-w-lg">
            A handpicked collection of machine learning systems, natural language pipelines, and full-stack solutions.
          </p>
          <div className="w-12 h-1 bg-rose-600 dark:bg-rose-500 rounded-full mt-4" />
        </div>

        {/* Swiper Slider Wrapper */}
        <div className="w-full relative px-2 pb-12">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              }
            }}
            className="w-full"
          >
            {featured.map((project) => (
              <SwiperSlide key={project.id} className="h-auto py-4">
                <ReusableCard {...project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
