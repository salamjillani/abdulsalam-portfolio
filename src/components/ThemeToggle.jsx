import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <motion.div
      className="group relative"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <span
        className={`absolute inset-0 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-300 
          ${
            theme === "dark"
              ? "group-hover:bg-yellow-500/10 dark:group-hover:bg-yellow-400/10"
              : "group-hover:bg-blue-500/10 dark:group-hover:bg-blue-400/10"
          }`}
      />
      <button
        onClick={toggleTheme}
        className={`
          relative flex items-center justify-center w-10 h-10 rounded-lg
          text-neutral-600 dark:text-neutral-400 transition-all duration-300
          hover:shadow-lg
          ${
            theme === "dark"
              ? "hover:text-yellow-500 dark:hover:text-yellow-400 group-hover:shadow-yellow-500/20 dark:group-hover:shadow-yellow-400/20"
              : "hover:text-blue-500 dark:hover:text-blue-400 group-hover:shadow-blue-500/20 dark:group-hover:shadow-blue-400/20"
          }
        `}
        title={
          theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
        }
        aria-label={
          theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
        }
      >
        {theme === "dark" ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5" />
        )}
      </button>
    </motion.div>
  );
};

export default ThemeToggle;
