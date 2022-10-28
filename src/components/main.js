import About from './about';

const data = require('../data/historyData.json');


export default function Main() {
  const researchData = data.research;
  const softwareData = data.software;

  return (
    <main>
      <div className="carousel">
        <div className="carousel-viewport">
          
        </div>
      </div>
    </main>
  );
}