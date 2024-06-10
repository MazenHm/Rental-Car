import React, { useEffect, useState } from "react";
import Navbar from "../Layout/Navbar";
import HeroSection from "../Layout/HeroSection";
import BookSection from "../Layout/BookSection";
import PlanSection from "../Layout/PlanSection";
import FleetSection from "../Layout/FleetSection";
import BannerSection from "../Layout/BannerSection";
import ChooseSection from "../Layout/ChooseSection";
import Faq from "../Layout/Faq";
import ReviewSection from "../Layout/ReviewSection";
import Footer from "../Layout/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import CustomScrollbar from "../components/CustomScrollbar";
import "../components/CustomScrollbar.css";
const HomePage = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="custom-scroll-container">
      <CustomScrollbar />
      <Navbar />
      <HeroSection />
      <BookSection />
      <PlanSection />
      <FleetSection />
      <BannerSection />
      <ChooseSection />
      <ReviewSection />
      <Faq />
      <Footer />

      {showScrollButton && <ScrollToTopButton />}
    </div>
  );
};

export default HomePage;
