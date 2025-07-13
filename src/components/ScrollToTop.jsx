import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

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
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full
            bg-neutral-900 dark:bg-neutral-100
            hover:bg-neutral-800 dark:hover:bg-neutral-200
            text-white dark:text-neutral-900
            shadow-2xl border-4 border-white dark:border-neutral-900
            transition-all duration-300 ease-in-out hover:scale-110
            focus:outline-none focus:ring-2 focus:ring-neutral-500
            focus:ring-offset-2 dark:focus:ring-offset-neutral-900 z-50
            flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;