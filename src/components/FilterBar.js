function FilterBar({ technologies, active, onChange }) {
  return (
    <div className="filters" role="group" aria-label="Filter projects by technology">
      {technologies.map((tech) => (
        <button
          key={tech}
          type="button"
          className={tech === active ? "filter active" : "filter"}
          aria-pressed={tech === active}
          onClick={() => onChange(tech)}
        >
          {tech}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
