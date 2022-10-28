import data from "../data/softwareData"
import SoftwareProjectCard from "../components/softwareProjectCard"
import SoftwareJobCard from "../components/softwareJobCard"

export default function SoftwarePage() {
  const {experience, projects} = data
  
  const dataParsedSidebar = Object.entries(data).map( ([type, items]) => {
    const itemsParsed = items.map( item => {
      return (
        <strong key={item.title}><a href={`#${item.title.toLowerCase()}`}>{item.title}</a></strong>
      )
    })

    return (
      <div key={type}>
        <h3><a href={`#${type}`}>{type[0].toUpperCase() + type.slice(1)}</a></h3>
        <ul>
          {itemsParsed}
        </ul>
      </div>
    )
  })

  const experienceParsed = experience.map( workExperience => <SoftwareJobCard key={workExperience.title} {...workExperience} />)
  const projectsParsed = projects.map( project => <SoftwareProjectCard key={project.title} {...project} />)

  return (
    <main className="page">
      <aside>
        <h2>Software</h2>

        {dataParsedSidebar}
      </aside>

      <div className="content">
        {experienceParsed && (
          <>
            <h2 id="experience">Experience</h2>
            {experienceParsed}
          </>
        )}
        {projectsParsed && (
          <>
            <h2 id="projects">Projects</h2>
            {projectsParsed}
          </>
        )}
      </div>
    </main>
  )
}