/**
 * Project detail page resolved from the `/projects/:slug` route.
 */

import { Link, Navigate, useParams } from "react-router-dom";
import { ProjectCarousel } from "../components/ProjectCarousel";
import { getProjectBySlug } from "../data/projects";

/** Resolves `:slug` and redirects home when the project is missing. */
export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="container">
      <Link className="back-link" to="/#projects">
        ← Back to projects
      </Link>

      <h1 className="about__title">
        <span
          className="badge badge--primary"
          style={{ marginRight: "0.65rem" }}
        >
          {project.category}
        </span>
        {project.title}
      </h1>

      <div className="project-detail">
        <ProjectCarousel slides={project.slides} title={project.title} />

        <div>
          <p>{project.description}</p>

          <div className="project-detail__meta">
            {project.tech.map((item) => (
              <span key={item} className="badge badge--secondary">
                {item}
              </span>
            ))}
          </div>

          <div className="project-detail__actions">
            {project.github ? (
              <a
                className="btn btn--primary"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            ) : null}
            {project.demo ? (
              <a
                className="btn btn--ghost"
                href={project.demo}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
