export default function Sidebar(props) {
  const {page, data} = props

  const dataParsed = Object.entries(data).map( ([type, items]) => {
    const itemsParsed = items.map( item => {
      return (
        <strong key={item.title}><a href={`#${item.title.toLowerCase()}`}>{item.title}</a></strong>
      )
    })

    return (
      <div>
        <h3 key={type}><a href={`#${type}`}>{type[0].toUpperCase() + type.slice(1)}</a></h3>
        <ul>
          {itemsParsed}
        </ul>
      </div>
    )
  })

  return (
    <aside>
      <h2>{page}</h2>

      {dataParsed}
    </aside>
  )
}