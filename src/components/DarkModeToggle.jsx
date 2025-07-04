import React, { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Page load par check karo mode
    const darkClass = document.documentElement.classList.contains("dark");
    setIsDark(darkClass);
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="px-4 py-2 text-sm font-medium bg-gray-200 dark:bg-gray-800 dark:text-white text-gray-800 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 transition"
    >
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
