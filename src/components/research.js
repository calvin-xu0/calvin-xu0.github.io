const Research = data => {
  const { application, researchTopic, institution, group, pi } = data;

  return (
    <article id={pi.split(' ').slice(-1)}>
      <h1>{application}</h1>
      <h4>{researchTopic}</h4>
      <h4>{institution}</h4>
      <h4>{group} - (Principal Investigator: {pi}</h4>
    </article>
  );
}

export default Research;