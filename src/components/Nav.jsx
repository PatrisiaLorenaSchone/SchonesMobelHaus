import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/logopng.png'
import { IoIosMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

function Nav() {
  const [navbar, setNavbar] = React.useState(false)
  return (
    <nav>
      <Link to="/"><img height={80} src={logo} alt="Schones Mobelhaus logo" /></Link>
      {navbar ? <IoIosClose className='hamburger-menu' onClick={()=> setNavbar(!navbar)}/> : <IoIosMenu className='hamburger-menu' onClick={()=> setNavbar(!navbar)}/> }
      {navbar && <div className='mobile-nav'>
        <NavLink className={({isActive})=> isActive ? "active" : null} to="/"> Home </NavLink>
        <NavLink className={({isActive})=> isActive ? "active" : null} to="/menu"> Menü </NavLink>
        <NavLink className={({isActive})=> isActive ? "active" : null} to="/prices"> Angebote </NavLink>
        <Link to="#contact"> Kontakt </Link>
      </div>}
      <div className="nav-bar">
        <NavLink className={({isActive})=> isActive ? "active" : null} to="/"> Home </NavLink>
        <NavLink className={({isActive})=> isActive ? "active" : null} to="/menu"> Menü </NavLink>
        <NavLink className={({isActive})=> isActive ? "active" : null} to="/prices"> Angebote </NavLink>
        <a href="#contact"> Kontakt </a>
      </div>
    </nav>
  )
}

export default Nav
