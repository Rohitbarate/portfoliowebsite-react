import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {

  const handleClick = () => {
    let item = document.getElementById('items');

    // logic for show the navbar or hide
    if (item.style.left === "0%") {
      item.style.left = "-80%"
    }
    else {
      item.style.left = "0%"
    }

    // logic for the change the menu btn to cross btn
    let menuBtn = document.getElementById('menu-btn');

    if (menuBtn.classList.contains('non-active')) {
      menuBtn.classList.toggle('active');
      menuBtn.classList.remove('non-active');
      menuBtn.style.border="2px solid crimson"
    }
    else {
      menuBtn.classList.toggle('non-active');
      menuBtn.classList.remove('active');
      menuBtn.style.border="none"

    }
  }
  return (
    <div className="navbar">
      <div className="funct-row">
        <Link
          className="logo"
          to="home"
          activeClass="active"
          spy={false}
          smooth={true}
          offset={-70}
          duration={500}>portfolio </Link>
          {/* <sup style={{ color: "red", fontSize: "0.8rem" }}>beta</sup> */}
        <div onClick={handleClick} className="menu-btn non-active" id='menu-btn'>
          <span className='top' id='top'></span>
          <span className='mid' id='mid'></span>
          <span className='bot' id='bot'></span>
        </div>
      </div>
      <div className="items" id='items'>
        <ul>
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500} onClick={handleClick} >Home</Link>
          </li>
          <li><Link activeClass="active" to="about" spy={true} smooth={true} offset={-40} duration={500} onClick={handleClick} > About</Link></li>
          <li><Link activeClass="active" to="skills" spy={true} smooth={true} offset={-40} duration={500} onClick={handleClick} >Skills</Link></li>
          <li><Link activeClass="active" to="projects" spy={true} smooth={true} offset={-40} duration={500} onClick={handleClick}>Projects</Link></li>
        </ul>
        <button className='btn btn-contact'><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500} onClick={handleClick} >Contact</Link></button>
      </div>
    </div>
  )
}
export default Navbar