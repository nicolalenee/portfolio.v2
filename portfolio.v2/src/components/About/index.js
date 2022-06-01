import React from 'react';
import avatar from '../../assets/avatar.png';
function About() {
  return (
    <section className="component-wrapper">
      <div className="top">
        <h1 id="about" className="page-title">About Me</h1>
      </div>
      <div className="bottom">
        <div className="img-container left">
          <img src={avatar} alt="Nicola Marble"/>
          <div className="side-button">
            <p><a href="http://github.com/nicolalenee">GitHub</a></p>
          </div>
          <div className="side-button">
            <p><a href="https://www.linkedin.com/in/nicolamarble/">Linkedin</a></p>
          </div>
          <div className="side-button">
            <p><a href="https://twitter.com/nicola_lenee">Twitter</a></p>
          </div>
        </div>

        <div className="about-wrapper right">
          <p>Hey there!</p>
          <p>My name's Nicola and I am a budding full stack web developer!</p>
          <p>I began my journey into web development in 2020 after toying around with the <a href="https://notion-enhancer.github.io/">Notion Enhancer</a> extension. The experience was so exciting that I felt compelled to keep going with it. While I had some brief knowleddge of HTML and CSS, I began to dive deeper into development on my own. Finally, I decided to take a more involved approach and enrolled myself in a coding bootcamp at Butler University, with a focus on the MERN stack. As of May 3rd, I have graduated the course and am currently in pursuit of new career opportunities and absorbing even more information!</p>
          <p>I've recently relocated to Virginia and spend my free time playing video games, building mechanical keyboards, and reading. 👾</p>
          <h3>Brand Statement</h3>
          <p><i>Full stack web developer equipped with a psychology background and strong interpersonal skills to best understand user needs and create intuitive web applications. Recently awarded a certificate in full stack development from Butler University’s Executive Education program harnessing new knowledge and skills in HTML, CSS, JavaScript, Node.js, and SQL and nonSQL databases. Acknowledged as intuitive and enthusiastic with passion about developing creative apps, with a focal point on mobile-first design and efficient user experience. I utilized strong interpersonal skills and agile project management in previous group projects. In a recent group project, I worked on a team of four to develop an application with the MVC paradigm that allows musical artists and venues to seek out other artists or help needed in scheduling live performances. I’m thrilled to employ my skills as a part of an inventive, ever-evolving team to build impressive user-focused web applications. </i></p>
        </div>
      </div>
      
    </section>
  );
}

export default About;