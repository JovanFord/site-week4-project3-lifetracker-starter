import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom"
import { useState } from 'react'
import logo from '../../assets/codepath.svg' 

const Navbar = ({signedIn}, logout) => {
  

  return (

    <div className='navbar'>
      <Link to="/" >
        <img className='logo' src={logo}/>
      </Link>
    
      <Link to="/Exercise" >
        <span className="nav-btn">Exercise</span>
      </Link>

      <Link to="/Activity" >
        <span className="nav-btn">Activity</span>
      </Link>

      <Link to="/Nutrition" >
        <span className="nav-btn">Nutrition</span>
      </Link>

      <Link to="/Sleep" >
        <span className="nav-btn">Sleep</span>
      </Link>
      { 
        {signedIn} ? 

        <div>
          <Link to="/Login" >
          <span className="nav-btn">Login</span>
          </Link>

          <Link to="/Signup" >
            <span className="nav-btn">Signup</span>
          </Link>
        </div> : 
        
        <a className='logout' onClick={logout.logout}>
          Logout
        </a>
      }

      

    </div>
  )
}

export default Navbar