import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {
    edge: 'left',
    inDuration: 250
  });
})

function Navigation({ currentPage, handlePageChange }) {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">Troy Wiegel</a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">TW</i></a>
          <ul className="right hide-on-med-and-down">
            <li><a href="#home" onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Home</a></li>
            <li><a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</a></li>
            <li><a href="#project" onClick={() => handlePageChange('Project')} className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}>Projects</a></li>
            <li><a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a></li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li><a href="#home" onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Home</a></li>
        <li><a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</a></li>
        <li><a href="#project" onClick={() => handlePageChange('Project')} className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}>Projects</a></li>
        <li><a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a></li>
      </ul>
    </>
  )
}

export default Navigation