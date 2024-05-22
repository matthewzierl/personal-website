import React from 'react';
import Page from './Page';
import { Routes, Route, NavLink as Link } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Technologies from './Technologies';
import Navbar from './Navbar';

import { useMediaQuery } from 'react-responsive'


function useIsMobile() {
  const isMobile = useMediaQuery({ query: '(max-width: 560px)' });
  return isMobile
}

function App() {
  const isMobile = useIsMobile()

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {(isMobile) ?
        <div className="nav-mobile" style={{textAlign:"center"}} > 
           <img src={process.env.PUBLIC_URL +'/cat.png'} className="App-logo" alt="logo" />
        <Navbar />
        </div> :
        <nav>
          <ul>
            <li>
              <img src={process.env.PUBLIC_URL +'/cat.png'} className="App-logo" alt="logo" />
            </li>
            <li>
              <Link to="/" activeClassName="active" end>Home</Link>
            </li>
            <li>
              <Link to="aboutme" activeClassName="active">About</Link>
            </li>
            <li>
              <Link to="technologies" activeClassName="active">Technologies</Link>
            </li>
            <li>
              <Link to="contact" activeClassName="active">Contact</Link>
            </li>
          </ul>
        </nav>
      }

      <div className='routes'>
        <Routes>
          <Route path='/' element={<Page />} />
          <Route path='aboutme' element={<About />} />
          <Route path='technologies' element={<Technologies />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </div>
      <footer>
        Matthew Zierl @ 2024
      </footer>
    </div>

  )
}

export default App;