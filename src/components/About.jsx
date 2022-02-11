function About() {

  const aboutMe = [
    {
      title: 'Hey There!',
      body: "I'm Troy and this is my portfolio. I'm excited you are here! Feel free to look around and get to know me more."
    },
    {
      title: 'Location',
      body: "I currently live in Portland, OR. I love being outside, exploring the city and trying the latest coffee shop or brewery."
    },
    {
      title: 'Skills',
      body: "I am proficient in React, MongoDB/Mongoose, Node and Express. I am also skilled in several other languages including html, css, javascript and jquery."
    },
    {
      title: "Let's Talk!",
      body: "I'd love to get to know you, hear your ideas and talk more about how I can make them happen."
    }
  ]

  return (
    <>
      <section className="container-fluid pt-1 pb-4 bg-success" id="aboutMe">
        <div className="row">
          {aboutMe.map((item) => {
            return (
              <div className="card col-sm-6 col-md-3 col-lg-3">
                <div className="card-body">
                  <h5 className="card-title mb-4" style={{ fontSize: "50px" }}>&#10163;</h5>
                  <h6 className="card-subtitle mb-2" style={{ fontSize: "20px" }}>{item.title}</h6>
                  <p className="card-text">{item.body}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default About