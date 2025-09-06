import React from 'react'


const Navbar = () => {

  
  return (
    <div>
        <header className="header">
    <a href="#" className="logo">
      Hardik Raiyani
    </a>
    <div className="bx bx-menu" id="menu-icon" />
    <nav className="navbar">
      <a href="#home" className="active">
        Home
      </a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#contact">Contact</a>
      <a href="cv.html">CV</a>
      <a href="login.html">
        <i className="fas fa-user" /> &nbsp;&nbsp;Login
      </a>
    </nav>
  </header>
    </div>
  )
}

export default Navbar
