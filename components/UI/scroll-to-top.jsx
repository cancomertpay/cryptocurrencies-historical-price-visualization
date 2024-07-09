"use client";

import React, { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-primary text-lg hover:bg-primary/50 text-white hover:text-black/50 py-3 px-4 rounded-full shadow-md hover:drop-shadow-custom focus:outline-none focus:ring-2 focus:ring-primary/50 hover:scale-110 transition-all duration-300"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
