/**
 * Landing page: about section, project grid, and contact form.
 */

import { ContactForm } from "../components/ContactForm";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";

/** Landing page: about, project grid, and contact form. */
export function Home() {
  return (
    <div className="container">
      <section 
        className="about" 
        id="about" 
        aria-labelledby="about-heading"
      >
        <div className="about__container">
          <img
            className="about__photo"
            src="/img/front-page/me.png"
            alt="George Ciesinski"
          />
          <div>
            <h2 className="section__title about__title" id="about-heading">About</h2>
            <p>
              I am an avid programmer who enjoys learning new things about
              programming. I am most experienced in Javascript and Python, but I
              also have experience with C#, HTML/CSS, SASS and SQL.
            </p>
            <p>I enjoy building websites, bots, desktop apps.</p>
          </div>
        </div>
      </section>

      <section
        className="projects"
        id="projects"
        aria-labelledby="projects-heading"
      >
        <h2 className="section__title projects__title" id="projects-heading">
          Projects
        </h2>
        <div className="grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section
        className="contact-me"
        id="contact"
        aria-labelledby="contact-heading"
      >
        <div className="contact">
          <h2 className="section__title contact__title" id="contact-heading">
            Contact Me
          </h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
