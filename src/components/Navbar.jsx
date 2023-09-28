import React from 'react'
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="logo"><img src={logo} alt="lonome logo" /></div>
      <ul className='nav-items'>
        <li><a href="">Home</a></li>
        <li><a href="">Products</a></li>
        <li><a href="">Location</a></li>
      </ul>
    </nav>
  )
}

export default Navbar