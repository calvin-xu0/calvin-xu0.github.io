import Software from "./software";

const SoftwareContainer = data => {
  const { softwareData } = data;
  const sidebarParsed = softwareData.map(item => {
  const anchor = `#${item.name}`;
  return (
    <h3 key={item.name}>
      <a href={anchor}>{item.name}</a>
    </h3>
  );
  });
  const softwareParsed = softwareData.map(item => <Software key={item.name} {...item} />);

  return (
    <div className="page" id="software" onSelect={(ev => console.log("target:", ev.currentTarget))}>
      <aside>
        <h2>Software</h2>
        <ul>
          {sidebarParsed}
        </ul>
      </aside>

      <div className="content">
        {softwareParsed}
      </div>
    </div>
  );
}


export default SoftwareContainer;