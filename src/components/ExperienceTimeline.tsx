/**
 * Wrapper for a vertical experience timeline (rail styles hang off this root).
 */

import type { ReactNode } from "react";

/**
 * Renders the timeline container around experience row children.
 *
 * @param props - Component props.
 * @param props.children - Experience item rows.
 * @returns Timeline wrapper element.
 */
export function ExperienceTimeline({ children }: { children: ReactNode }) {
  return <div className="experience-timeline">{children}</div>;
}
