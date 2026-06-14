import "./ProjectsPage.css";

export default function ProjectsPage({ projects, onBack }) {
  return (
    <div className="projects-page">
      <div className="projects-page-header">
        <button className="back-btn" onClick={onBack}>
          ← Back to Home
        </button>
        <h2 className="projects-page-title">All Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <div className="project-card-top">
              <h3 className="project-card-name">{p.project}</h3>
              <span className="project-card-type">{p.type}</span>
            </div>
            <ul className="project-card-descriptions">
              {p.descriptions.map((desc, j) => (
                <li key={j}>{desc}</li>
              ))}
            </ul>
            <div className="project-card-tags">
              {p.languages.map((lang, k) => (
                <span key={k} className="project-tag">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
