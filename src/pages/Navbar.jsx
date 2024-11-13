import React from 'react'
import {Link} from 'react-router-dom'
import "../index.css"

export default function Navbar() {
  return (
    <>
      <div>
        <h1 className='main'>CAKEIFBUY</h1>
          <nav>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/pages/Contact">Contact</Link></li>
              <li>
                <div id="search">
                  <input id="search_bar" type="text" placeholder="Search.."></input>
                  <input type="submit" id="submit"></input>
                </div>
              </li>
          </ul>
          </nav>
      </div>
    </>
  )
}
