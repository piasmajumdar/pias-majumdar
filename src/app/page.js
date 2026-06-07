import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Timeline from "../components/Timeline";
import Achievements from "../components/Achievements";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-full flex flex-col">
      {/* Navigation Header */}
      <Navbar />

      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Skills & Proficiency Section */}
        <Skills />

        {/* Unified Projects Showcase */}
        <Projects />


        {/* Timeline of Achievements, CSI, Isha Volunteer */}
        <Timeline />

        {/* Scholarships & CountUp Stats Section */}
        {/* <Achievements /> */}

        {/* Professional Certifications Grid */}
        {/* <Certifications /> */}

        {/* Contact Form using Web3Forms Server Action */}
        {/* <Contact /> */}
      </main>

      {/* Signature Footer */}
      <Footer />
    </div>
  );
}
