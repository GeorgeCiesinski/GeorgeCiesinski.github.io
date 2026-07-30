/**
 * Project thumbnail card for the home-page grid.
 */

import { Link } from "react-router-dom";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

/**
 * Thumbnail card linking to a project's detail page.
 *
 * @param props - Component props.
 * @param props.project - Project to display and link to.
 * @returns Linked thumbnail card for the home-page grid.
 */
export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link className="project-card" to={`/projects/${project.slug}`}>
      <img
        className="project-card__image"
        src={project.thumbnail}
        alt={`${project.title} thumbnail`}
        loading="lazy"
      />
      <h3 className="project-card__title">{project.title}</h3>
    </Link>
  );
}
