import React from 'react';

function Nav() {

  const tabs= [
    { name: "About Me" },
    { name: "Portfolio" },
    { name: "Contact" }, 
    { name: "Resumé" }
  ];
  // function to change the tab displays on click
  function tabSelected(tab) {
    console.log(`${tab} clicked`)
  }

  return (
    <header>
      <h2>
        <a href="/">
          Nicola's Portfolio
        </a>
      </h2>

      <nav>
        <ul>
          {tabs.map((tab) => (
            <li key= {tab.name} >
              <a href="#{tab.name}" onClick={() => tabSelected(tab.name)}>{tab.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Nav;