import Research from "./research";

const ResearchContainer = data => {
  const { researchData } = data;
  const sidebarParsed = researchData.map(item => {
    const piSurname = item.pi.split(' ').slice(-1);
    const anchor = `#${piSurname}`;
    return (
      <h3 key={piSurname}>
        <a href={anchor}>{item.application}</a>
      </h3>
    );
  });
  const researchParsed = researchData.map(item => <Research key={item.pi.split(' ').slice(-1)} {...item} />);

  return (
    <div className="page" id="research" onSelect={(ev => console.log("target:", ev.currentTarget))}>
      <aside>
        <h2>Research</h2>
        <ul>
          {sidebarParsed}
        </ul>
      </aside>

      <div className="content">
        {researchParsed}
      </div>
    </div>
  );
}


export default ResearchContainer;