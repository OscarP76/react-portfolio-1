function Contact() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h2>Contact</h2>
            <div className="input-field col s6">
              <input id="first_name" type="text" className="validate" />
              <label htmlFor="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="last_name" type="text" className="validate" />
              <label htmlFor="last_name">Last Name</label>
            </div>
            <div className="input-field col s12">
              <input id="email" type="email" className="validate" />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field col s12">
              <textarea id="review-content" className="materialize-textarea"></textarea>
              <label htmlFor="textarea1">Message</label>
            </div>
            <div className="form-group">
              <button className="btn btn-primary #e57373 red lighten-2" id="contactSubmit" type="submit">Submit</button>
            </div>
          </div>
        </div>
      </div>
      <br></br><br></br>
    </>
  )
}

export default Contact