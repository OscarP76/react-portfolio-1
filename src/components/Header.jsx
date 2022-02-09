function header() {

  return (
    <>
      <nav>
        <div class="nav-wrapper">
          <a href="#!" class="brand-logo">TW</a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul class="right hide-on-med-and-down">
            <li><a href="sass.html">Home</a></li>
            <li><a href="badges.html">About</a></li>
            <li><a href="collapsible.html">Projects</a></li>
            <li><a href="mobile.html">Contact</a></li>
          </ul>
        </div>
      </nav>

      <ul class="sidenav" id="mobile-demo">
        <li><a href="sass.html">Home</a></li>
        <li><a href="badges.html">About</a></li>
        <li><a href="collapsible.html">Projects</a></li>
        <li><a href="mobile.html">Contact</a></li>
      </ul>
    </>
  )
}

export default header