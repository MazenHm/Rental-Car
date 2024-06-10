import React from "react";
import "./ScrollToTopButton.css";

const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button className="scroll-to-top-button" onClick={handleScrollToTop}>
      <i class="fas fa-chevron-up"></i>
    </button>
  );
};

export default ScrollToTopButton;
