import React from "react";
import HeroSection from "../components/HeroSection";
import "../stylesheets/HomepageRow.css";
import Navbar from "../components/Navbar";

const WelcomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <main className="text-center">
        <hr className="featurette-divider" id="divider" />
      </main>
    </>
  );
};

export default WelcomePage;
