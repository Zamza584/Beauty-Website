import React from 'react'

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="logo"><img src="/assets/logo.png" alt="lonome logo" /></div>
      <ul className='nav-items'>
        <li><a href="">Home</a></li>
        <li><a href="">Products</a></li>
        <li><a href="">Location</a></li>
      </ul>
    </nav>
  )
}

export default Navbar