function About() {
  return (
    <div className="page slide" id="about">
      <img alt="Profile picture" src="/t_l.jpeg" />

      <div className="content">
        <section>
          <h1>About Me</h1>
          <p>My undergraduate studies were in Nanotechnology Engineering at the University of Waterloo, during which I had the opportunity to perform research at the Karp Lab in polymer nanomaterials for biomedicine. Afterwards, I conducted graduate research under Dr. Zhongwei Chen as a part of the UWaterloo's Chemical Engineering department, where I investigated the ability to increase the catalytic lifetime of graphene/alloy nanocomposite materials. My overall academic focus is in materials science and engineering for broad applications.</p>
          <p>I am currently developing software skills to round out my background. Here, you can see some of my software projects as well as read more about my previous work.</p>
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

export default About;