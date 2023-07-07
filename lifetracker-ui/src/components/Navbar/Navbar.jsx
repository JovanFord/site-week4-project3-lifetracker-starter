import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom"
import logo from '../../assets/codepath.svg' 

const Navbar = ({signedIn, setSignedIn}) => {

  const logout = () => {
    setSignedIn(false)
    console.log(signedIn)
  }

  if (signedIn){
    return (
      <div className='navbar'>
        <Link to="/" >
          <img className='logo' src={logo}/>
        </Link>

        <Link to="/Activity" >
          <span className="nav-btn">Activity</span>
        </Link>
      
        <Link to="/Exercise" >
          <span className="nav-btn">Exercise</span>
        </Link>

        <Link to="/Nutrition" >
          <span className="nav-btn">Nutrition</span>
        </Link>

        <Link to="/Sleep" >
          <span className="nav-btn">Sleep</span>
        </Link>

        <button className='logout' onClick={logout}>
            Logout
        </button>
    </div>
    )
  } else {
    return(
      <div className='navbar'>
        <Link to="/" >
          <img className='logo' src={logo}/>
        </Link>

        <Link to="/Activity" >
          <span className="nav-btn">Activity</span>
        </Link>
      
        <Link to="/Exercise" >
          <span className="nav-btn">Exercise</span>
        </Link>

        <Link to="/Nutrition" >
          <span className="nav-btn">Nutrition</span>
        </Link>

        <Link to="/Sleep" >
          <span className="nav-btn">Sleep</span>
        </Link>

        <Link to="/Login" >
        <span className="nav-btn">Login</span>
        </Link>

        <Link to="/Signup" >
          <span className="nav-btn">Signup</span>
        </Link>
      </div>
    )

  }
}
export default Navbar;