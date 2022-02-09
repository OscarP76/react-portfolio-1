function Card() {

    const projects = [
        {
            image: require('../data/img/one.jpg'),
            altText: 'Portfolio Project One',
            title: 'Note Take 10000',
            body: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
            gitHubLink: 'https://github.com/troywiegel/note-taker',
            gitHubTitle: 'Note Taker Github',
            deployedLink: 'https://note-taker-10000.herokuapp.com',
            deployedTitle: 'Note Taker Deployed'
        },
        {
            image: require('../data/img/two.jpg'),
            altText: 'Portfolio Project Two',
            title: 'Weather Dashboard',
            body: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
            gitHubLink: 'https://github.com/troywiegel/weather-dashboard',
            gitHubTitle: 'WD Github',
            deployedLink: 'https://troywiegel.github.io/weather-dashboard/',
            deployedTitle: 'WD Deployed'
        },
        {
            image: require('../data/img/one.jpg'),
            altText: 'Portfolio Project One',
            title: 'Note Take 10000',
            body: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
            gitHubLink: 'https://github.com/troywiegel/note-taker',
            gitHubTitle: 'Note Taker Github',
            deployedLink: 'https://note-taker-10000.herokuapp.com',
            deployedTitle: 'Note Taker Deployed'
        },
        {
            image: require('../data/img/two.jpg'),
            altText: 'Portfolio Project Two',
            title: 'Weather Dashboard',
            body: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
            gitHubLink: 'https://github.com/troywiegel/weather-dashboard',
            gitHubTitle: 'WD Github',
            deployedLink: 'https://troywiegel.github.io/weather-dashboard/',
            deployedTitle: 'WD Deployed'
        },
        {
            image: require('../data/img/one.jpg'),
            altText: 'Portfolio Project One',
            title: 'Note Take 10000',
            body: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
            gitHubLink: 'https://github.com/troywiegel/note-taker',
            gitHubTitle: 'Note Taker Github',
            deployedLink: 'https://note-taker-10000.herokuapp.com',
            deployedTitle: 'Note Taker Deployed'
        },
        {
            image: require('../data/img/two.jpg'),
            altText: 'Portfolio Project Two',
            title: 'Weather Dashboard',
            body: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
            gitHubLink: 'https://github.com/troywiegel/weather-dashboard',
            gitHubTitle: 'WD Github',
            deployedLink: 'https://troywiegel.github.io/weather-dashboard/',
            deployedTitle: 'WD Deployed'
        }
    ]

    return (
        <div className="container">
            <div className="row center-align">
                {projects.map((project) => (
                    <div className="col s12 m6">
                        <div className="card large z-depth-2">
                            <div className="card-image">
                                <img src={project.image} alt={project.altText} />
                                <span className="card-title">{project.title}</span>
                            </div>
                            <div className="card-content">
                                <p>{project.body}</p>
                            </div>
                            <div className="card-action">
                                <a href={project.gitHubLink} target="_blank" rel="noreferrer">{project.gitHubTitle}</a>
                                <a href={project.deployedLink} target="_blank" rel="noreferrer">{project.deployedTitle}</a>
                            </div>
                        </div>
                    </div>
                )
                )}
            </div>
        </div>
    )

}

export default Card