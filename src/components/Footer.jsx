function Footer() {
    return (
        <footer className="page-footer">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">Troy Wiegel</h5>
                        <p className="grey-text text-lighten-4">I'm excited you are here! Feel free to look around and get to know me more.</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Links</h5>
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="https://github.com/troywiegel" target="_blank" rel="noreferrer">GitHub</a></li>
                            <li><a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/troywiegel" target="_blank" rel="noreferrer">LinkedIn</a></li>
                            <li><a className="grey-text text-lighten-3" href="https://drive.google.com/file/d/1r7d-sjCiZrErljQyMMZj-Os_A9gBQ11b/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a></li>
                            <li><a className="grey-text text-lighten-3" href="mailto: troywiegel@gmail.com">Email</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container" id="copyright">Copyright © 2022 - Troy Wiegel</div>
            </div>
        </footer>
    )
}

export default Footer