import React from 'react'
import "./Footer.css"
import { FaFacebookF } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
function Footer() {
    return (
        <div className="footer">
        <div className="container">
                <div className="display-footer">
                    <div>
                        <div className="header__middle__logo">
                            <h2>Auto<span style={{color:"#f7b71d"}}>Road</span></h2>
                        </div>
                        <div className="contact-social">
                            <FaFacebookF type="fbk" className="contact-socialNet" />
                            <IoLogoGoogleplus type="goo" className="contact-socialNet" />
                            <AiOutlineTwitter type="twt" className="contact-socialNet" />
                            <FaLinkedinIn type="lnk" className="contact-socialNet" />
                        </div>
                        <div className="text">
                            <p>Copyright ©2022 All rights reserved | This website is made with  by <span style={{color:"#fc983c",fontWeight:600}}>Emin</span></p>
                        </div>
                    </div>
                    <div className="phone">
                        <p><a href="tel:+8000">Telephone: *1000</a></p>
                        <div className='footer-input'>
                            <input placeholder='enter your email..' type="email" />
                            <button type='submit'>Subscribe</button>
                        </div>
                    </div>
                    <div className="link1">
                        <p><a href="#about">About</a></p>
                        <p type='mar'><a href="#blog">Blog</a></p>
                    </div>
                    <div className="link2">
                        <p><a href="#ourCar">Our Car</a></p>
                        <p type='mar'><a href="#contact">Contact</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer