import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return isVisible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 p-3 bg-violet-700 text-white rounded-full shadow-lg hover:bg-violet-800 transition"
    >
      <FaArrowUp />
    </button>
  ) : null;
};

export default ScrollToTopButton;
