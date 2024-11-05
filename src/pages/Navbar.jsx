import React from 'react'
import {Link} from 'react-router-dom'
import "../index.css"

export default function Navbar() {
  return (
    <>
      <div>
        <h1 className='main'>CAKEIFBUY</h1>
          <ul className="mainNav">
              <li><Link className='subnav' to="/">Home</Link></li>
              <li><Link className='subnav' to="/pages/Contact">Contact</Link></li>
              <li><Link className='subnav' to="/pages/Cart">Cart</Link></li>
              <li className='subnav'>
                <div id="search">
                  <input id="search_bar" type="text" placeholder="Search.."></input>
                  <input type="submit" id="submit"></input>
                </div>
              </li>
          </ul>
      </div>
    </>
  )
}
