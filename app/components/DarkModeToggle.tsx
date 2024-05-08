"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFan } from "@fortawesome/free-solid-svg-icons";

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialTheme = localStorage.getItem("theme");
    setIsDarkMode(initialTheme === "dark");
    root.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleDarkMode = () => {
    const root = window.document.documentElement;
    const newTheme = isDarkMode ? "light" : "dark";
    root.classList.toggle("dark", newTheme === "dark");
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleDarkMode}
      aria-label="Toggle Dark Mode"
      aria-pressed={isDarkMode}
      className={`lg:w-16 w-10 h-6 lg:h-8 flex items-center px-1 rounded-full transition-colors ${
        isDarkMode ? "bg-blue-900" : "bg-gray-300"
      }`}
    >
      <span
        className={`w-6 h-6 flex items-center justify-center bg-white rounded-full transition-transform transform ${
          isDarkMode ? "lg:translate-x-8 translate-x-3" : "lg:translate-x-0 -translate-x-2"
        }`}
      >
        <FontAwesomeIcon
          icon={faFan}
          className={`transition-transform ${
            isDarkMode ? "rotate-180 text-black" : "rotate-0 text-black"
          }`}
        />
      </span>
    </button>
  );
}
