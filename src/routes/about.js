import "./about.scss"

export default function About() {
  return (
    <div className="page" id="about">
      <aside>
        <img alt="Profile" src="/t_l.jpeg" />
      </aside>

      <div className="content">
        <section>
          <h1>About Me</h1>
          <p>
            I'm a Software Engineer in the San Francisco Bay Area. I was recently working at Opener, a Palo Alto aerospace startup manufacturing electric ultralight aircraft.
          </p>
          <p>
            Previously, my academic background was in materials science and engineering for applications ranging from renewable energy to medicine, with interests extending further beyond. At the Karp Lab, I had the opportunity to collaborate with researchers under the Harvard-MIT Division of Health Sciences and Technology to research polymer nanomaterials for use as biomedical adhesives. Later at the University of Waterloo, I investigated graphene/alloy nanocomposite materials and the ability to increase their catalytic lifetime for energy generation.
          </p>
          <p>
            Here, you can see some of my software work as well as read more about my past research.
          </p>
        </section>
        <section id="education">
          <h2>Education</h2>
          <ul>
            <li>
              <strong>University of Waterloo</strong>, <span>MASc Chemical Engineering</span>
            </li>
            <li>
              <strong>University of Waterloo</strong>, <span>BASc Nanotechnology Engineering</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}