const Software = data => {
  const { name, links, tools, summaryImage, summaryText } = data;
  const summaryTextParsed = summaryText.map((paragraph, i) => <p key={i}>{paragraph}</p>);

  return (
    <article id={name}>
      <header>
        <h1>{name}</h1>
        <div><em>(Tools: {tools.join(', ')})</em></div>
        <div><a className="repo" href={links.repo}>Repository</a></div>
      </header>
      <article className="summary">
        <figure>
          <img alt={name} src={summaryImage.location} />
          <figcaption><em>{summaryImage.caption}</em></figcaption>
        </figure>

        {summaryTextParsed}
      </article>
    </article>
  );
}

export default Software;