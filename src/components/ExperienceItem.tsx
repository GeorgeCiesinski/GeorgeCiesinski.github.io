/**
 * Timeline row components for work and open-source experience entries.
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

/**
 * Builds the BEM class list for an experience row, including the active modifier.
 *
 * @param isActive - Whether this row is the scroll-spy focus.
 * @returns Class string for the row `<article>`.
 */
function itemClassName(isActive: boolean): string {
  return `experience-item${isActive ? " experience-item--active" : ""}`;
}

/**
 * Timeline row for a paid/work experience entry.
 *
 * @param props - Component props.
 * @param props.id - Stable row id used for keys and scroll-spy (`data-experience-id`).
 * @param props.experience - Work experience data to display.
 * @param props.isActive - Whether this row is highlighted by the scroll-spy.
 * @returns One work experience timeline row.
 */
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

/**
 * Timeline row for an open-source contribution (linked project name).
 *
 * @param props - Component props.
 * @param props.id - Stable row id used for keys and scroll-spy (`data-experience-id`).
 * @param props.experience - Open-source experience data to display.
 * @param props.isActive - Whether this row is highlighted by the scroll-spy.
 * @returns One open-source experience timeline row.
 */
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
