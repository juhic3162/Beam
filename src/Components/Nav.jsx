import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav(){
  return(
    <nav>
      <Link to="/home" className="nav-link-home">
        <img id="logo-img" src="/beam_name_logo.png"/>
      </Link>
      <input type="checkbox" id="sidebar-active"/>
      <label htmlFor="sidebar-active" className="open-sidebar-button">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
      </label>

      <label id="overlay" htmlFor="sidebar-active"/>
      
      <div className="links-container">
        <label htmlFor="sidebar-active" className="close-sidebar-button">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
        </label>
        <Link to="/impact" className="nav-link">impact</Link>
        <Link to="/solutions" className="nav-link">solutions</Link>
        <Link to="/myDay" className="nav-link">myDay</Link>
        <Link to="/contact" className="nav-link">about beam</Link>
      </div>
    </nav>
    
  )
}

