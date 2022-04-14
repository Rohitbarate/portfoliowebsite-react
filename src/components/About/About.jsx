import React from 'react'
import './About.css'
import { BsGithub, BsLinkedin, BsInstagram, BsFacebook, BsWhatsapp, BsFillFileArrowDownFill } from 'react-icons/bs';

const About = () => {
    return (
        <div className='about section' id='about'>
            <div className="heading about-head">
                <h1>ABOUT <span className='head-sec'>ME</span></h1>
            </div>
            <div className="wrapper about-body">
                <div className="left pers-info">
                    <div className="name">
                        <span className='head-sec bold'>Name : </span>Rohit Rajendra Barate
                    </div>
                    <div className="email">
                        <span className='head-sec bold'>Email : </span>rohitbarate100@gmail.com

                    </div>
                    <div className="age">
                        <span className='head-sec bold'>Age : </span>21

                    </div>
                    <div className="add">
                        <span className='head-sec bold'>Address : </span>Pune,Maharashtra,india-411062

                    </div>
                    <div className="mob">
                        <span className='head-sec bold'>Phone : </span>9822544067
                    </div>
                    <div className="lang">
                        <span className='head-sec bold'>Languages : </span>Marathi,Hindi,English
                    </div>
                    <div className="hobby">
                        <span className='head-sec bold'>Hobbies : </span> Cricket, Coding, Swimming, Online_Games
                    </div>
                    <div className="about-con">
                        <div className="label">Connect with Me :</div>
                        <div className="icon-cont">
                            <a href="https://github.com/Rohitbarate" target="_blank" rel="noreferrer" ><BsGithub />  </a>
                            <a href="https://www.instagram.com/__rohit_barate/" target="_blank" rel="noreferrer" > <BsInstagram /> </a>
                            <a href="https://www.linkedin.com/in/rohit-barate100/" target="_blank" rel="noreferrer" > <BsLinkedin /> </a>
                            <a href="https://www.facebook.com/rohit.barate.31/" target="_blank" rel="noreferrer" > <BsFacebook /> </a>
                            <a href="https://api.whatsapp.com/send/?phone=919822544067&text=hi" target="_blank" rel="noreferrer" > <BsWhatsapp /> </a>
                        </div>
                    </div>
                </div>
                <div className="right educ-infodiv ">
                    <div className="educ-info">
                        <div className="box">
                            <div className="content">
                                Project Completed :
                            </div>
                            <div className="val">
                                15+
                            </div>
                        </div>
                        <div className="box">
                            <div className="content">
                                Programming Languages :
                            </div>
                            <div className="val">
                                8+
                            </div>
                        </div>
                        <div className="box">
                            <div className="content">
                                Awards Won :
                            </div>
                            <div className="val">
                                2
                            </div>
                        </div>
                        <div className="box">
                            <div className="content">
                                Github Repositories :
                            </div>
                            <div className="val">
                                2
                            </div>
                        </div>
                        <div className="box">
                            <div className="content">
                                Years Of Experience :
                            </div>
                            <div className="val">
                                0
                            </div>
                        </div>
                    </div>
                    <button className='btn downloadcv-btn'>
                        <a href="https://drive.google.com/file/d/1IHZOBsYVoX5KF0mb6t-NbyV9eMS5nuAM/view" target="_blank" rel="noreferrer" > Download CV <BsFillFileArrowDownFill /></a> </button>
                </div>
            </div>
        </div>
    )
}

export default About