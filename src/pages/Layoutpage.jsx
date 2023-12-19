import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import { FaArrowUp } from "react-icons/fa";

function Layoutpage() {
  return (
    <>
    <Nav/>
    <Outlet/>
    <Footer/>
    <a href='#top' className='to-top-btn'><FaArrowUp /></a>
    </>
  )
}

export default Layoutpage
