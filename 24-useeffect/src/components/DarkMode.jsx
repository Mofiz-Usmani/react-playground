import React from "react";
import { useState, useEffect } from "react";

function DarkMode() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", dark);
    document.body.style.backgroundColor = dark ? "#111" : "#fff";
    document.body.style.color = dark ? "#fff" : "#000";
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="mt-40 ml-170 border-3 border-amber-600 h-12 w-33 rounded-2xl"
    >
      {dark ? "Dark Mode ON" : "Light Mode ON"}
    </button>
  );
}

export default DarkMode;
