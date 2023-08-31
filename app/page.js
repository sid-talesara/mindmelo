import React from "react";
import CTA_Card from "@/Components/Landing/CTA_Card";
import Hero from "@/Components/Landing/Hero";
import InfoCard from "@/Components/Landing/InfoCard";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/index";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CTA_Card>
        <h4 className="cta-card--heading">What is MindMelo?</h4>
        <p className="cta-card--desc">
          MindMelo is your digital companion, offering focus, relaxation, and
          more. Craft your unique sound environment by mixing a range of calming
          sounds. With 15 high-quality background options, customize your ideal
          blend and adjust volumes to your liking. MindMelo also brings you
          soothing Playlists, a handy Timer for work sessions.
        </p>
      </CTA_Card>
      <InfoCard />
      <CTA_Card>
        <h4 className="cta-card--heading">Love what you just saw?</h4>
        <p className="cta-card--desc">
          Want to Find Your Perfect Balance of Sounds for Optimal Focus and
          Productivity on MindMelo
        </p>
      </CTA_Card>
      <Footer />
    </div>
  );
}
