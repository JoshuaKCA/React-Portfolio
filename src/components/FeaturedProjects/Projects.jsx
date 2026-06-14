import { useState } from "react";
import { createPortal } from "react-dom";
import ProjectsPage from "./ProjectsPage";
import "./Projects.css";

const projects = [
  {
    project: "React Portfolio",
    languages: ["JavaScript", "HTML", "CSS", "React.js", "Vite"],
    type: "Personal Project 2026",
    descriptions: [
      "Built a responsive single-page portfolio using React.js and Vite featuring a bento-grid layout and mobile-first responsive design with CSS Grid.",
      "Used an interactive border glow card component using pointer tracking, CSS custom properties, and trigonometric angle calculations to produce a cursor-reactive lighting effect.",
      "Used a custom animated background using a WebGL-style floating line shader with parallax scrolling and configurable wave parameters.",
      "Used a smooth infinite scrolling marquee component for dynamic tech stack display using CSS transforms and configurable velocity controls.",
    ],
  },
  {
    project: "Travel Bloom",
    languages: ["JavaScript", "HTML", "CSS", "JSON"],
    type: "Personal Project 2026",
    descriptions: [
      "Developed an interactive single-page travel recommendation web application that handles asynchronous data fetching and real-time state changes without browser refreshes.",
      "Engineered a dynamic search viewport layout using the JavaScript Fetch API to parse relational array schemas from an internal JSON database and programmatically inject structured DOM elements.",
    ],
  },
  {
    project: "TCDD Detection",
    languages: ["Flask", "Python", "JavaScript", "CSS", "HTML", "Shell"],
    type: "Thesis Project 2025-2026",
    descriptions: [
      "Co-developed an edge-computing ADAS utilizing YOLOv8 on a Raspberry Pi 5 with an AI HAT+ NPU to detect and classify 10 distinct classes of Philippine traffic control devices.",
      "Built an asynchronous full-stack web environment using a Flask REST API, WebSockets, and JavaScript to orchestrate multi-sign monitoring.",
      "Designed a user feedback framework implementing synchronous LCD alerts and Text-to-Speech (TTS) voice output to safely augment driver situational awareness.",
      "Evaluated software performance matrices against the ISO/IEC 25010 standard, executing 27 testing conditions to secure a comprehensive system verification pass rate of 88.89%.",
    ],
  },
  {
    project: "EnerCheck – Energy Management System",
    languages: ["Python", "CustomTkinter", "Matplotlib"],
    type: "Academic Project 2024",
    descriptions: [
      "Built using custom Python libraries such as CustomTkinter and Matplotlib.",
      "Provides functional energy visualization, login functionalities, and customizable settings.",
    ],
  },
  {
    project: "Bookbyte – Web-Based Library System",
    languages: ["BudiBase"],
    type: "Academic Project 2023",
    descriptions: [
      "Built using low-code environment BudiBase.",
      "Key functionalities include login, admin functionalities, book catalog, and customizable settings.",
    ],
  },
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="projects-wrapper">
      <h2 className="projects-header">Featured Projects</h2>
      <div className="project-cards">
        {projects.map((p, i) => (
          <div
            key={i}
            className="project-pill"
            onClick={() => setShowAll(true)}
          >
            <span className="project-pill-name">{p.project}</span>
            <span className="project-pill-type">{p.type}</span>
          </div>
        ))}
      </div>

      {showAll &&
        createPortal(
          <ProjectsPage projects={projects} onBack={() => setShowAll(false)} />,
          document.body,
        )}
    </div>
  );
}
