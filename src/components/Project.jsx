function Card() {

    const projects = [
        {
            image: require('../data/img/one.jpg'),
            altText: 'Portfolio Project One',
            title: 'Note Take 10000',
            body: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
            gitHubLink: 'https://github.com/troywiegel/note-taker',
            gitHubTitle: 'Github',
            deployedLink: 'https://note-taker-10000.herokuapp.com',
            deployedTitle: 'Deployed'
        },
        {
            image: require('../data/img/two.jpg'),
            altText: 'Portfolio Project Two',
            title: 'Weather Dashboard',
            body: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
            gitHubLink: 'https://github.com/troywiegel/weather-dashboard',
            gitHubTitle: 'Github',
            deployedLink: 'https://troywiegel.github.io/weather-dashboard/',
            deployedTitle: 'Deployed'
        },
        {
            image: require('../data/img/three.jpg'),
            altText: 'Portfolio Project Three',
            title: 'Work Day Scheduler',
            body: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
            gitHubLink: 'https://github.com/troywiegel/work-day-scheduler',
            gitHubTitle: 'Github',
            deployedLink: 'https://troywiegel.github.io/work-day-scheduler',
            deployedTitle: 'Deployed'
        },
        {
            image: require('../data/img/four.jpg'),
            altText: 'Portfolio Project Four',
            title: 'Feedback App',
            body: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
            gitHubLink: 'https://github.com/troywiegel/feedback-app',
            gitHubTitle: 'Github',
            deployedLink: '#',
            deployedTitle: 'Deployed'
        }
    ]

    return (
        // <div>
        //     <container>
        //         <row>
        //             <col>
        //                 {projects.map((project) => (
        //                     <Card className="bg-dark text-white">
        //                         <Card.Img src={project.image} alt={project.altText} />
        //                         <Card.ImgOverlay>
        //                             <Card.Title>{project.title}</Card.Title>
        //                             <Card.Text>{project.body}</Card.Text>
        //                             <Card.Text href={project.gitHubLink}>{project.gitHubTitle}</Card.Text>
        //                             <Card.Text href={project.deployedLink}>{project.deployedTitle}</Card.Text>
        //                         </Card.ImgOverlay>
        //                     </Card>
        //                 ))}
        //             </col>
        //         </row>
        //     </container>
        // </div>

        <div className="container-fluid">
            <div className="row">
                {projects.map((project) => (
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={project.image} alt={project.altText} />
                        <div className="card-body">
                            <h5 className="card-title">{project.title}</h5>
                            <p className="card-text">{project.body}</p>
                            <a href={project.gitHubLink} target="_blank" rel="noreferrer" className="btn btn-primary">{project.gitHubTitle}</a>
                            <a href={project.deployedLink} target="_blank" rel="noreferrer" className="btn btn-primary">{project.deployedTitle}</a>
                        </div>
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default Card