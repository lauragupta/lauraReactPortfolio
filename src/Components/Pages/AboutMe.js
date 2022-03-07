import React from 'react';
import photo from '../Pages/Napa-1.jpg';
import './AboutMe.css';


export default function AboutMe() {


  return (
    <div className="container">
      <div className='row'>
        <h1 className='column offset-md-1'>About Me</h1>
      </div>
      <div className="row">
        <div className="column col-12 col-md-5 offset-md-1">
          <div>
            <img className='myPhoto' src={photo} alt="Laura" />
          </div>
        </div>
        <div className="column col-12 col-md-5">
          <p>
            I am a full stack web developer. One of my core values is to always be learning new things. I also really enjoy helping people and teaching/mentoring others. I have done a lot of independent work as well as groupwork and paraprograming.  
          </p>
          <p>
            I have a lot of work experience and have a history of staying with a company and advancing within the company. 
          </p>
          <p>
            I love to travel and meet new people. I am interested in the environment, personal finance, real estate, health and fitness, writing, and mental health. I also love playing games, from board games to videogames, sports, and solving puzzles. 
          </p>
        </div>
      </div>
    </div>
  );
}
