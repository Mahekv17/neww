
import React from 'react';
import Navigation from "../components/Navigation.jsx";
import HeroSection from "../components/HeroSection.jsx";
import FeatureSection from "../components/FeatureSection.jsx";
import CareersExplore from "../components/CareersExplore.jsx";
import TestimonialsSection from "../components/TestimonialsSection.jsx";
import CTASection from "../components/CTASection.jsx";
import Footer from "../components/Footer.jsx";

const Index = () => {
  return (
    <div className="min-h-screen bg-pathscout-dark text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <FeatureSection />
      <CareersExplore />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
