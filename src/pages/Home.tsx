import { ContactForm } from "../components/ContactForm";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";

export function Home() {

  return (
    <div className="container">
      <section className="section" aria-labelledby="about-heading">
        <h1 className="about__title" id="about-heading">
          George Ciesinski
          <span className="about__subtitle">Software Developer</span>
        </h1>
        <div className="about">
          <img
            className="about__photo"
            src="/img/front-page/me.png"
            alt="George Ciesinski"
          />
          <div>
            <h2>About</h2>
            <p>
              I am an avid programmer who enjoys learning new things about
              programming. I am most experienced in Javascript and Python, but I
              also have experience with C#, HTML/CSS, SASS and SQL.
            </p>
            <p>
              I received an Advanced Diploma in Electro-Mechanical Engineering
              (Robotics &amp; automation) from Humber College in Toronto,
              Ontario. I learned how to program PLCs, six-axis robots, and
              integrated circuits. After graduating, I built bots, desktop apps,
              and focused on back-end development before setting my sights on a
              full-stack development career.
            </p>
          </div>
        </div>
      </section>

      <section
        className="projects"
        id="projects"
        aria-labelledby="projects-heading"
      >
        <h2 className="section__title" id="projects-heading">
          Projects
        </h2>
        <div className="grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section
        className="section"
        id="contact"
        aria-labelledby="contact-heading"
      >
        <div className="contact">
          <h2 className="contact__title" id="contact-heading">
            Contact Me
          </h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
