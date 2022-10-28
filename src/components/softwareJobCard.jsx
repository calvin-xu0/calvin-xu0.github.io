export default function SoftwareJobCard(job) {
  const { title, links, tools, logo, body } = job;

  return (
    <article id={title.toLowerCase()}>
      <header>
        <div><strong>{title}</strong></div>
        <div><em>(Tools: {tools.join(', ')})</em></div>
        <div><a href={links.website}><u>Website</u></a></div>
      </header>
      <article className="cardBody">
        <figure>
          <img alt={`${title} logo`} src={logo.location} />
        </figure>

        {body}
      </article>
    </article>
  );
}