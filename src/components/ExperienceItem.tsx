/**
 * Timeline row component for work & open-source contributions.
 */

import type { OpenSourceExperience, WorkExperience } from "../data/experience";

interface WorkExperienceItemProps {
  id: string;
  experience: WorkExperience;
  isActive: boolean;
}

interface OpenSourceExperienceItemProps {
  id: string;
  experience: OpenSourceExperience;
  isActive: boolean;
}

function itemClassName(isActive: boolean): string {
  return `experience-item${isActive ? " experience-item--active" : ""}`;
}

export function WorkExperienceItem({
  id,
  experience,
  isActive,
}: WorkExperienceItemProps) {
  const { year, employer, logo, title, datestart, dateend, achievements } =
    experience;

  return (
    <article className={itemClassName(isActive)} data-experience-id={id}>
      <div className="experience-item__year">{year}</div>
      <div className="experience-item__middle">
        {logo ? (
          <img
            className="experience-item__logo"
            src={logo}
            alt=""
            loading="lazy"
          />
        ) : null}
        <div className="experience-item__role">
          <h4 className="experience-item__title">{title}</h4>
          <p className="experience-item__employer">{employer}</p>
          <p className="experience-item__dates">
            {datestart} – {dateend}
          </p>
        </div>
      </div>
      <ul className="experience-item__list">
        {achievements.map((text, index) => (
          <li key={`${id}-${index}`}>{text}</li>
        ))}
      </ul>
    </article>
  );
}

export function OpenSourceExperienceItem({
  id,
  experience,
  isActive,
}: OpenSourceExperienceItemProps) {
  const { year, project, url, achievements } = experience;

  return (
    <article className={itemClassName(isActive)} data-experience-id={id}>
      <div className="experience-item__year">{year}</div>
      <div className="experience-item__middle">
        <a
          className="experience-item__project"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {project}
        </a>
      </div>
      <ul className="experience-item__list">
        {achievements.map((text, index) => (
          <li key={`${id}-${index}`}>{text}</li>
        ))}
      </ul>
    </article>
  );
}
