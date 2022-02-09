function Nav() {
  return (
    <>
      <nav>
        <div className="nav-wrapper black">
          <a href="" className="brand-logo">TW</a>
          <a href="" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons"></i></a>
          <ul className="right hide-on-med-and-down">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </>
  )
}

export default Nav