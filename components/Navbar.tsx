"use client";

import { useEffect, useState } from "react";

type View =
  | "home"
  | "projects"
  | "skills"
  | "experience"
  | "education"
  | "contact";

export default function Navbar({
  onNavigate,
}: {
  onNavigate: (view: View) => void;
}) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  return (
    <div className="navbar fixed top-0 z-50 bg-base-100 shadow">
      <div className="container mx-auto">
        <button
          onClick={() => onNavigate("home")}
          className="text-xl font-bold"
        >
          Ganavi
        </button>

        <div className="ml-auto flex gap-2">
          <button onClick={() => onNavigate("projects")} className="btn btn-ghost">
            Projects
          </button>
          <button onClick={() => onNavigate("skills")} className="btn btn-ghost">
            Skills
          </button>
          <button onClick={() => onNavigate("experience")} className="btn btn-ghost">
            Experience
          </button>
          <button onClick={() => onNavigate("education")} className="btn btn-ghost">
            Education
          </button>
          <button onClick={() => onNavigate("contact")} className="btn btn-ghost">
            Contact
          </button>

          <button onClick={toggleTheme} className="btn btn-outline">
            {theme === "light" ? "dark" : "light"}
          </button>
        </div>
      </div>
    </div>
  );
}
