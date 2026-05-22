import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import FeaturedProjects from "../components/FeaturedProjects";
import AIProjects from "../components/AIProjects";
import WebProjects from "../components/WebProjects";
import Skills from "../components/Skills";
import Timeline from "../components/Timeline";
import Achievements from "../components/Achievements";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-full flex flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
      {/* Navigation Header */}
      <Navbar />

      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Featured Projects Slider */}
        <FeaturedProjects />

        {/* AI & ML Deep Learning Projects Grid */}
        <AIProjects />

        {/* Full-Stack Web Development Projects Grid */}
        <WebProjects />

        {/* Skills & Proficiency Section */}
        <Skills />

        {/* Timeline of Achievements, CSI, Isha Volunteer */}
        <Timeline />

        {/* Scholarships & CountUp Stats Section */}
        <Achievements />

        {/* Professional Certifications Grid */}
        <Certifications />

        {/* Contact Form using Web3Forms Server Action */}
        <Contact />
      </main>

      {/* Signature Footer */}
      <Footer />
    </div>
  );
}
