"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Contact from "../components/Contact";

type View =
  | "home"
  | "projects"
  | "skills"
  | "experience"
  | "education"
  | "contact";

export default function Home() {
  const [view, setView] = useState<View>("home");

  return (
    <>
      <Navbar onNavigate={setView} />

      <main className="pt-20">
        {view === "home" && <Hero onNavigate={setView} />}
        {view === "projects" && <Projects />}
        {view === "skills" && <Skills />}
        {view === "experience" && <Experience />}
        {view === "education" && <Education />}
        {view === "contact" && <Contact />}
      </main>
    </>
  );
}
