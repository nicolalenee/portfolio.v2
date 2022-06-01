import React from 'react';
import Bootstrap from 'bootstrap';

function Nav() {

  const tabs = [
    {
      name: 'About Me',
      description: 'Get to know a little bit more about me'
    },
    {
      name: 'Portfolio',
      description: "View the projects that I've worked on"
    },
    {
      name: 'Contact',
      description: 'Reach out'
    },
    {
      name: 'Resumé',
      description: 'A downloadable PDF of my current Resumé'
    }
  ]
  function tabSelected(name) {
    console.log(`${name} clicked`)
  }


  return (
    <header>
      <h1>
        <a href="/">
          🌻 Nicola Marble
        </a>
      </h1>

      <nav>
        <ul>
          {tabs.map((tab) => (
            <li key= {tab.name}>
              <a href={tab.name} onClick={tabSelected}>
                {tab.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Nav;