import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setVisible(true);
    } else if (scrolled <= 500) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div
      onClick={scrollToTop}
      className="text-white bg-blue-600 p-4 rounded-full fixed right-5 bottom-5 z-10"
      style={{ display: visible ? "inline" : "none" }}
    >
      <FaArrowUp />
    </div>
  );
};

export default ScrollButton;
