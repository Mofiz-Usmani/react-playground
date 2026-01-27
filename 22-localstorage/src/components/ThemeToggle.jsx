import React, { useState, useEffect } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    // Load theme from localStorage or default to "light"
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    // Save theme to localStorage whenever it changes
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={theme === "dark" ? "dark-mode" : "light-mode"}>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeToggle;
