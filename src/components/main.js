import About from './about';
import ResearchContainer from './researchContainer'
const data = require('../data/historyData.json');

const Main = () => {
  const researchData = data.research;
  return (
    <main>
      <div className="carousel">
        <div className="carousel-viewport">
          <About />
          <ResearchContainer { ...{researchData} }/>
        </div>
      </div>
    </main>
  );
}


export default Main;