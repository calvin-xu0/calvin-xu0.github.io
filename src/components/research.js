

const Research = data => {
  const { application, researchTopic, institution, group, pi, summaryImage, summaryText, publication } = data;
  console.log(publication)
  const {doi, citation} = publication;
  const summaryTextParsed = summaryText.map((paragraph, i) => <p key={i}>{paragraph}</p>);
  const publicationURL = "https://doi.org/" + doi;

  return (
    <article id={pi.split(' ').slice(-1)} key={pi.split(' ').slice(-1)}>
      <header>
        <h1>{application}</h1>
        <div><strong>{researchTopic}</strong></div>
        <div>{institution}</div>
        <div><span>{group}</span> <span>(<em>Principal Investigator: {pi}</em>)</span></div>
      </header>
      <article className="summary">
        {summaryTextParsed}
        <p>For more detailed information, see <a href={publicationURL} className="doi" onHover={}><u>DOI: {doi}</u></a>.</p>
      </article>
    </article>
  );
}

export default Research;