import { NavLink } from "react-router-dom";
import './nav.scss'

export default function Navigation() {
  return (
    <nav>
      <div className="personal">
        <span>Calvin Xu</span>
        <span id="contact">
          <a href="https://github.com/calvin-xu0"><i className="fab fa-github"></i></a>
          <a href="https://linkedin.com/in/calvin-xu0"><i className="fab fa-linkedin"></i></a>
        </span>
      </div>  

      <div className="pages">
        <NavLink to="/">About</NavLink>
        <NavLink to="/software">Software</NavLink>
        <NavLink to="/research">Academic Research</NavLink>
      </div>

      <div className="settings">
      </div>
    </nav>
  );
}