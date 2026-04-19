// import React from "react";
import AboutSection from "../components/AboutSection";
import FounderDesk from "../components/FounderDesk";
import SectionH from "../components/SectionH";
import WelcomeSection from "../components/WelcomeSection";
import WhychooseUs from "../components/WhychooseUs";
import { ASSETS } from "../constants/assets";

const About = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Navbar */}
      {/* <nav className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-indigo-600">MyWebsite</a>
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:text-indigo-600">Home</a></li>
            <li><a href="/about" className="text-indigo-600 font-semibold">About</a></li>
            <li><a href="/services" className="hover:text-indigo-600">Services</a></li>
            <li><a href="/contact" className="hover:text-indigo-600">Contact</a></li>
          </ul>
        </div>
      </nav> */}

      <div
        className="relative min-h-[80vh] w-full bg-cover bg-center before:absolute before:inset-0 before:bg-[rgba(4,9,30,0.7)] flex items-center justify-center"
        style={{ backgroundImage: `url('${ASSETS.aboutHero}')` }}
      />
      
      {/* About Section */}
      <AboutSection />
      <WelcomeSection />
      <FounderDesk />
      <WhychooseUs />
      <SectionH />
      
      
      
      {/* Footer */}
      {/* <footer className="bg-gray-900 text-white text-center py-6 mt-12">
        <p>&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default About;
