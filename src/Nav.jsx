import React from 'react'
import './App.css'

const Nav = () => {
  return (
    <div>
      <nav>
        <header>
          <div className="title">ticz</div>
          <ul>
            <li className='active'>Events</li>
            <li>My Tickets</li>
            <li>About Project</li>
          </ul>
          <button className="btn">MY TICKETS <ArrowRight /></button>
        </header>
      </nav>
    </div>
  )
}

export default Nav
