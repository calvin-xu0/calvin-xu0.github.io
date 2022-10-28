import researchData from "../data/researchData"
import ResearchCard from "../components/researchCard"

export default function SoftwarePage() {
  const sidebarParsed = researchData.map(item => {
    const piSurname = item.pi.split(' ').slice(-1);
    const anchor = `#${piSurname}`;
    return (
      <h3 key={piSurname}>
        <a href={anchor}>{item.application}</a>
      </h3>
    );
  });
  const researchDataParsed = researchData.map( datum => <ResearchCard key={datum.pi.split(' ').slice(-1)} {...datum} /> )

  return (
    <main className="page">
      <aside>
        <h2>Research</h2>
        <ul>
          {sidebarParsed}
        </ul>
      </aside>

      <div className="content">
        {researchDataParsed}
      </div>
    </main>
  )
}