import React from "react";
import HeroSection from "./Luxe/HeroSection";
import AboutLuxe from "./Luxe/AboutLuxe";
import LuxeEvents from "./Luxe/LuxeEvents";
import LuxeGallery from "./Luxe/LuxeGallery";
import ContactForm from "./ContactForm";

export default function LuxePage() {
  return (
    <div className="app__bg">
      <HeroSection />   
      <AboutLuxe />
      <LuxeEvents />
      <LuxeGallery />
      <ContactForm />
    </div>
  );
}
