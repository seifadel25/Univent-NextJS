"use client"; // Enable React hooks in Next.js

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
      className={`w-16 h-8 flex items-center px-1 rounded-full transition-colors ${
        isDarkMode ? "bg-blue-600" : "bg-gray-300"
      }`}
    >
      <span
        className={`w-6 h-6 flex items-center justify-center bg-white rounded-full transition-transform transform ${
          isDarkMode ? "translate-x-8" : "translate-x-0"
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
