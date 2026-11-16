import { useState } from "react";
import projects from "./data/projects";
import FilterBar from "./components/FilterBar";
import ProjectList from "./components/ProjectList";
import "./App.css";

// "All" plus every technology that appears in the data, with no duplicates
const technologies = ["All", ...new Set(projects.flatMap((p) => p.tech))];

function App() {
  const [active, setActive] = useState("All");

  const visible =
    active === "All"
      ? projects
      : projects.filter((p) => p.tech.includes(active));

  return (
    <div className="app">
      <header className="top">
        <h1>My Project Gallery</h1>
        <p>Projects from my web programming course. Filter them by technology.</p>
      </header>
      <main>
        <FilterBar technologies={technologies} active={active} onChange={setActive} />
        <p className="count" aria-live="polite">
          Showing {visible.length} of {projects.length} projects
        </p>
        <ProjectList projects={visible} />
      </main>
    </div>
  );
}

export default App;
