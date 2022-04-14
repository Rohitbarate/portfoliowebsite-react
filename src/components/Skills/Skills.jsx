import React from 'react'
import './Skills.css'
import icon1 from '../img/icon-1.png'
import icon2 from '../img/icon-2.png'
import icon3 from '../img/icon-3.png'
import icon4 from '../img/icon-4.png'
import icon5 from '../img/icon-5.png'
import icon6 from '../img/icon-6.png'
import icon7 from '../img/icon-7.png'
import icon8 from '../img/icon-8.png'
import icon9 from '../img/icon-9.png'
import icon10 from '../img/icon-10.png'
import icon11 from '../img/icon-11.jpg'
import icon12 from '../img/icon-12.png'

const Skills = () => {
  return (
    <div className='skills section' id='skills'>
      <div className="heading about-head">
        <h1>MY <span className='head-sec'>SKILLS</span></h1>
      </div>
      <div className="skillsdiv">
        <div className="skillbox">
          <img src={icon1} alt="HTML" />
          <span>HTML</span>
          <div className="infolang">
            <p>90%</p>
          </div>
        </div>
        <div className="skillbox">
          <img src={icon2} alt="" />
          <span>CSS</span>
          <div className="infolang">
            <p>95%</p>
          </div>
        </div>
        <div className="skillbox">
          <img src={icon3} alt="" />
          <span>JAVASCRIPT</span>
          <div className="infolang">
            <p>70%</p>
          </div>
        </div>
        <div className="skillbox">
          <img src={icon4} alt="" />
          <span>C++</span>
          <div className="infolang">
            <p>80%</p>
          </div>
        </div>
        <div className="skillbox">
          <img src={icon5} alt="" />
          <span>C</span>
          <div className="infolang">
            <p>90%</p>
          </div>
        </div>
        <div className="skillbox">
          <img src={icon6} alt="" />
          <span>REACT.JS</span>
          <div className="infolang">
            <p>80%</p>
          </div>
        </div>
        <div className="skillbox">
          <img src={icon7} alt="" />
          <span>PYTHON</span>
          <div className="infolang">
            <p>50%</p>
          </div>
        </div>
        <div className="skillbox">
          <img src={icon8} alt="" />
          <span>JAVA</span>
          <div className="infolang">
            <p>40%</p>
          </div>
        </div>
        <div className="skillbox">
          <img src={icon9} alt="" />
          <span>BOOTSTRAP</span>
          <div className="infolang">
            <p>60%</p>
          </div>
        </div>
        <div className="skillbox">
          <img src={icon10} alt="" className='size' />
          <span>NODE.JS</span>
          <div className="infolang">
            <p>40%</p>
          </div>
        </div>
        <div className="skillbox">
          <img src={icon11} alt="" />
          <span>NODE.JS</span>
          <div className="infolang">
            <p>40%</p>
          </div>
        </div>
        <div className="skillbox">
          <img src={icon12} alt="" />
          <span>NODE.JS</span>
          <div className="infolang">
            <p>40%</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills