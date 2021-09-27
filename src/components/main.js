import About from './about';
import Research from './research'

function Main() {
  return (
    <main>
      <div className="carousel">
        <div class="carousel-viewport">
          <About />
          <Research />
        </div>
      </div>
    </main>
  );
}


export default Main;