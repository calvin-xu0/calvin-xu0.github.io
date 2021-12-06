import ReactTooltip from 'react-tooltip';

const Research = data => {
  const { application, researchTopic, institution, group, pi, summaryImage, summaryText, publication } = data;
  const {doi, citation} = publication;
  const summaryTextParsed = summaryText.map((paragraph, i) => <p key={i}>{paragraph}</p>);
  const publicationURL = "https://doi.org/" + doi;

  return (
    <article id={pi.split(' ').slice(-1)} key={pi.split(' ').slice(-1)}>
      <header>
        <h1>{application}</h1>
        <div><strong>{researchTopic}</strong></div>
        <div>{institution}</div>
        <div><a href={group.url}>{group.name}</a> <span>(<em>Principal Investigator: {pi}</em>)</span></div>
      </header>
      <article className="summary">
        <figure>
          <img alt={doi} src={summaryImage.location} />
          <figcaption><cite>{summaryImage.caption}</cite></figcaption>
        </figure>
        {summaryTextParsed}
        {publication &&
        <>
          <p>
            For more detailed information, see <a href={publicationURL} className="doi" data-tip data-for={doi}><u>DOI: {doi}</u></a>.
          </p>
          <ReactTooltip id={doi} type="light" effect="solid" html={true}>
            {citation}
          </ReactTooltip>
        </>
        }
      </article>
    </article>
  );
}

export default Research;