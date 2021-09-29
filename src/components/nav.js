const Navigation = () => {
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
        <a href="#about">About</a>
        <a href="#software">Software Projects</a>
        <a href="#research">Academic Research</a>
      </div>

      <div className="settings">
      </div>
    </nav>
  );
}


export default Navigation;