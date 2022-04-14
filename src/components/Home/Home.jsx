import React from 'react'
import './Home.css'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-scroll'
import { motion } from "framer-motion"
// import photo from '../img/icon-1.png'
const Home = () => {
  const transition = { duration: 2,type: 'spring'}
  return (
    <div className='home section' id='home'>
      <div className="left">
        <div className="center">
          <motion.div className="temp1" initial={{ left:'-100px' }}
  whileInView={{ left: '0px' }}
  transition={transition}>
    <p></p> 
          </motion.div>
          <motion.div className="temp2"
           initial={{ right:'-100px' }}
  whileInView={{ right: '20px' }}
  transition={transition}>
    <div className="temp2-front">
    <p>😊</p>
    </div>
    <div className="temp2-back">
    <p>🥰</p>
    </div>
          </motion.div>
        </div>
      </div>
      <div className="right">
        <div className="h-name">
          <span> Hey, I'm</span>
          <span>Rohit Rajendra Barate</span>
        </div>
        <div className="info" >
          <span>Web Developer </span>
          <span>I Am A Computer Science Student. I Like To Make responsive Websites And Learn New Programming Languages.My favorite Programming Language is Javascript and this is the most powerfull language in the software industry.</span>
        </div>
        <div className="button">
          <button className='btn about-btn'>
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={-40} duration={500} > About Me </Link><BsArrowRight /> </button>
        </div>
      </div>
    </div>
  )
}

export default Home