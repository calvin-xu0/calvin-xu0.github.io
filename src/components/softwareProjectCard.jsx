export default function SoftwareProjectCard(project) {
  const { title, links, tools, image, body } = project;

  const linksParsed = Object.entries(links).map( ([type, url]) => (
    <a key={`${title}-${type}`} href={url}><u>{type[0].toUpperCase() + type.slice(1)}</u></a>
  ))
  for (let i = linksParsed.length - 1; i > 0; i--) {
    linksParsed.splice(i, 0, " — ")
  }

  return (
    <article id={title.toLowerCase()}>
      <header>
        <div><strong>{title}</strong></div>
        <div><em>(Tools: {tools.join(', ')})</em></div>
        <div>{linksParsed}</div>
      </header>
      <article className="cardBody">
        <figure>
          <img alt={title} src={image.location} />
          <figcaption><em>{image.caption}</em></figcaption>
        </figure>

        {body}
      </article>
    </article>
  );
}