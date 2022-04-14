import React from 'react'
import { BsGithub, BsLinkedin, BsInstagram, BsFacebook, BsWhatsapp } from 'react-icons/bs';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <div className="heading contact-head">
                <h1>CONTACT <span className='head-sec'>ME</span></h1>
            </div>
            <div className="wrapper">
                <div className="cont-left left">
                    <h2>GET IN TOUCH :</h2>
                    <p>I Am A Computer Science Student. If You Want To Tell Something To Me ,Then Message Me . Also I Want Advice From You for Increase My Knowledge And Boost My Skills. <strong> THANK YOU ....! </strong>😊😊</p>
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
                <div className="cont-right right">
                    <form action="">
                        <div class="inputBox">
                            <input type="text" placeholder="your name"/>
                                <input type="number" placeholder="your number"/>
                                </div>

                                <div class="inputBox">
                                    <input type="email" placeholder="your email"/>
                                        <input type="text" placeholder="your subject"/>
                                        </div>

                                        <textarea name="" placeholder="your message" id="" cols="30" rows="10"></textarea>

                                        <input type="submit" value="send message" class="btn submit-btn"/>

                                        </form>
                                </div>
                        </div>

                </div>
                )
}

                export default Contact