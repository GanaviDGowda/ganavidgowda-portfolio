import { Project } from "../types/project";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card bg-base-100 shadow-xl transition hover:-translate-y-1">
      <div className="card-body">
        <h3 className="card-title">{project.title}</h3>
        <p className="text-sm">{project.desc}</p>

        <p className="text-sm italic text-base-content/60 mt-2">
          Impact: {project.impact}
        </p>

        <div className="flex flex-wrap gap-2 mt-3">
          {project.tech.map((t) => (
            <span key={t} className="badge badge-outline badge-primary">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-4">
          <a
            href={project.link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline"
          >
            {project.link.type === "github" ? "GitHub" : "Figma"}
          </a>
        </div>
      </div>
    </div>
  );
}
