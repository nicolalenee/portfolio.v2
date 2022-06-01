import React from 'react';
import photo from '../../../src/image/board.png';

function Portfolio(props) {
  const currentProject = {
    name: "Tech Blog",
    description: "a social media application that allows users to discuss their thoughts on tech",
    repo: "https://github.com/nicolalenee/tech-blog",
    deployment: []
  }


  return (
    <section id="portfolio" className="portfolio-wrapper">
      <h1>{currentProject.name}</h1>
      <p>{currentProject.description}</p>

      <div className="img_container">
        <img src={photo} alt="algorhytm screenshot"/>
      </div>

    </section>

  );
}

export default Portfolio;