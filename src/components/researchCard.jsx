export default function ResearchCard(data) {
  const { application, researchTopic, institution, group, pi, summaryImage, body, doi } = data;

  return (
    <article id={pi.split(' ').slice(-1)} key={pi.split(' ').slice(-1)}>
      <header>
        <h1>{application}</h1>
        <div><strong>{researchTopic}</strong></div>
        <div>{institution}</div>
        <div className="lab"><a href={group.url}><u>{group.name}</u></a> <span>(<em>Principal Investigator: {pi}</em>)</span></div>
      </header>
      <article className="cardBody">
        <figure>
          <img alt={doi} src={summaryImage.location} />
          <figcaption><cite>{summaryImage.caption}</cite></figcaption>
        </figure>

        {body}
      </article>
    </article>
  );
}