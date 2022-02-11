function Home() {
  return (
    <>
      <section className="container-fluid" id="aboutContact">

        <img src={require("../data/img/Me.jpg")} className="" id="aboutImg" alt="Troy Wiegel" />

        <br></br><br></br>

        <div className="container-fluid" id="aboutSocial">

          <a href="https://github.com/troywiegel" target="_blank" rel="noreferrer" className="btn btn-lg btn-outline-light col-sm-3"
            role="button">GitHub</a>
          <a href="https://www.linkedin.com/in/troywiegel" target="_blank" rel="noreferrer"
            className="btn btn-lg btn-outline-light col-sm-3" role="button">LinkedIn</a>
          <a href="mailto: troywiegel@gmail.com" className="btn btn-lg btn-outline-light col-sm-3"
            role="button">Email</a>
          <a href="https://drive.google.com/file/d/1r7d-sjCiZrErljQyMMZj-Os_A9gBQ11b/view?usp=sharing"
            target="_blank" rel="noreferrer" className="btn btn-lg btn-outline-light col-sm-3" role="button">Resume</a>

        </div>

      </section>

      <br></br>
    </>
  )
}

export default Home