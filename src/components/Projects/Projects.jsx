import React from 'react'
import './Projects.css'
import project1 from '../img/project-1.png'
import project2 from '../img/project-2.png'
import project3 from '../img/project-3.png'
import project4 from '../img/project-4.png'
import project5 from '../img/project-5.png'
import project6 from '../img/project-6.jpeg'
import project7 from '../img/project-7.jpeg'
const Projects = () => {
    return (
        <div className='Projects section' id='projects' >
            <div className="heading project-head">
                <h1>MY <span className='head-sec'>PROJECTS</span></h1>
            </div>
            <div className="projectsdiv">
                <div className="projectbox">
                    <img src={project6} alt="" style={{transform:"scaleX(1.5)"}}/>
                    <div className='projectinfo'> <p>TIC-TAC-TOE GAME</p>
                    <p>In This My Project I Make A Tic Tac Toe Game. This Game Is The Most Popular Game. And This Is Responsive And Working. It's Works On Javascript Functions</p>
                    </div>
                </div>
                <div className="projectbox">
                    <img src={project4} alt="" style={{transform:"scaleX(1.5)"}} />
                    <div className='projectinfo'> <p>CALCULATOR </p>
                    <p>In This My Project I Make A Calculator Which Is Responsive And Working. It's Works On Javascript Language!</p>
                    </div>
                </div>
                <div className="projectbox">
                    <img src={project5} alt="" />
                    <div className='projectinfo'> <p>NOTES TAKING APP</p>
                    <p>In This Project I Make Notes Taking Webpage. This Project Is Fully Functional. We Can Add Notes And Also Delete That Added Notes.</p>
                    </div>
                </div>
                <div className="projectbox">
                    <img src={project3} alt="" style={{transform:"scaleX(0.8)"}} />
                    <div className='projectinfo'> <p>E-COMMERCE WEBSITE</p>
                    <p>I Make The Shoes Website. I Use Some Shoes Photos In The Snipper Scrollable Container With Good Animation and the fully Responsive</p>
                    </div>
                </div>
                <div className="projectbox">
                    <img src={project7} alt="" style={{transform:"scaleX(1.2)"}} />
                    <div className='projectinfo'> <p>MY PORTFOLIO WEBSITE</p>
                    <p>In this project i make my portfolio website and I provide the only true information. I gain more knowledge from this project  </p>
                    </div>
                </div>
                <div className="projectbox">
                    <img src={project2} alt="" style={{transform:"scaleX(1.2)"}} />
                    <div className='projectinfo'> <p>MUSIC PLAYER</p>
                    <p>I Make This Project Of Music Player And In This Project I Apload My Favorite Songs. In This Project I Use Javascript Concepts and the css for the all animation and the design</p>
                    </div>
                </div>
                <div className="projectbox">
                    <img src={project1} alt="" />
                    <div className='projectinfo'> <p>ALARM CLOCK</p>
                    <p>An alarm clock (or sometimes just an alarm) is a clock that is designed to alert an individual or group of individuals at a specified time.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects