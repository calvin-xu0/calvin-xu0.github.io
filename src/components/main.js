import About from './about';
import ResearchContainer from './researchContainer'
import SoftwareContainer from './softwareContainer';
const data = require('../data/historyData.json');

const Main = () => {
  const researchData = data.research;
  const softwareData = data.software;

  return (
    <main>
      <div className="carousel">
        <div className="carousel-viewport">
          <About />
          <SoftwareContainer { ...{softwareData} }/>
          <ResearchContainer { ...{researchData} }/>''
        </div>
      </div>
    </main>
  );
}


export default Main;