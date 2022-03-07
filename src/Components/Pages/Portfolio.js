import React from 'react';
import techBlogger from './images/techBlogger.png';
import getMoving from './images/getMoving.png';
import FeedMe from './images/FeedMe.png';
import RegexMyEmail from './images/RegexMyEmail.png';
import noteTaker from './images/noteTaker.png';
import portfolioMain from './images/portfolioMain.png';
import './Portfolio.css';

const projects = [
  {
    title: "Tech Blog - Full Stack App",
    alt: "Tech Blog",
    description: "This project is a blog viewing and writing platform. Users can log into the site to comment on blogs, contribute a technical blog posts, or edit or delete a blog they have written. Without logging into the site, blogs can be read. This project is a full stack application using Model-View-Controller (MVC).",
    image: techBlogger,
    website: "https://iamatechbloggernow.herokuapp.com/",
    github: "https://github.com/lauragupta/IAmATechBloggerNow",
    technology: "Handlebars, SQL, Sequelize, Express, Heroku and several NPM Node Modules",
    softskill: "Persistance, Determination, Troubleshooting"
  },
  {
    "title": "Get Moving - Full Stack App",
    "alt": "Get Moving",
    "description": "This app is a social exercise activity app, where users can view activities added by other people. If signed up and logged in, you can create and event or delete an event you created, as well as register to events. There is also a fun background color-changer at the bottom of each page.",
    "image": getMoving,
    "website": "https://pacific-wildwood-76799.herokuapp.com/",
    "github": "https://github.com/lauragupta/get-moving",
    "technology": "JavaScript, Express, Handlebars, MySQL, Sequelize, Simonwep/pickr, bcrypt, dotenv, connect-session-sequelize, Express-handlebars, Express-session, Google Slides",
    "softskill": "Teamwork, Communication,  Learning New Technologies, Website Planning, Speaking and Presenting, "
  },
  {
    "title": "Full Stack Portfolio - Full Stack App",
    "alt": "Portfolio",
    "description": "My full stack portfolio",
    "image": portfolioMain,
    "website": "https://lauraguptaportfoliofullstack.herokuapp.com/",
    "github": "https://github.com/lauragupta/portfolioFullStack",
    "technology": "Handlebars, Heroku, JavaScript, MySQL, Sequelize, Express, Mysqul2 NPM, Bootstrap, HTML",
    "softskill": "Designing and building the protfolio and it's content"
  },
  {
    "title": "Note Taker - Back End",
    "alt": "Note Taker",
    "description": "This is a live server project where you can enter a note title and note text that you can then save it. The note title will populate on the list at the left-hand side.",
    "image": noteTaker,
    "website": "http://fierce-eyrie-06541.herokuapp.com/",
    "github": "https://github.com/lauragupta/noteTaker",
    "technology": "JavaScript, Express, Heroku",
    "softskill": "Persistance, Asking for help, Asking good questions"
  },
  {
    "title": "Regex MY Email - Gist Article",
    "alt": "Regex Gist",
    "description": "This is an explaination of the components of an email Regex expression",
    "image": RegexMyEmail,
    "website": "https://gist.github.com/lauragupta/5edc0432970bb322c981aa47aa0b5871",
    "github": "https://gist.github.com/lauragupta/5edc0432970bb322c981aa47aa0b5871",
    "technology": "Gist, Markdown",
    "softskill": "Writing, Independently learning new technology"
  },
  {
    "title": "Feed Me - Front End",
    "alt": "Feed Me",
    "description": "If you can't decide where to eat, this restaurant finder site randomly shows a nearby restaurant after the user inputs city name, cost preference, and type of restaurant.",
    "image": FeedMe,
    "website": "https://pentazoned.github.io/feed-me/",
    "github": "https://github.com/lauragupta/feed-me",
    "technology": "HTML, CSS, Bulma CSS Framework",
    "softskill": "Site planning, Teamwork, Independently learning new technology"
  }
];

function makeCard(project) {
  return(
      <div className="card column col-11 col-md-5 col-lg-3 p-3 m-3" >
        <img className="card-img-top" src={project.image} alt={project.alt} />
        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
          <a href={project.website} target="_blank" className="btn btn-primary cardButton">View  Site</a>
          <a href={project.github} target="_blank" className="btn btn-primary cardButton">View Code</a>
        </div>
      </div>
  )
}

function Portfolio() {
  const cards = projects.map(makeCard);
  return(
    <div className="container">
      <h1>Portfolio Projects</h1>
      <div className='row portfolioRow'>
        {cards}
      </div>
    </div>
  )
}

export default Portfolio;