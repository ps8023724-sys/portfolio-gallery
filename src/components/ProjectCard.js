function ProjectCard({ project }) {
  return (
    <article className="card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul className="tags" aria-label="Tech stack">
        {project.tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <div className="links">
        <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={project.demo} target="_blank" rel="noopener noreferrer">Live demo</a>
      </div>
    </article>
  );
}

export default ProjectCard;
