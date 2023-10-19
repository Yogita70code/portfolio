import "./Footer.css";
import {FaHome,FaPhone,FaMailBulk,FaFacebook,FaLinkedin,FaInstagram} from "react-icons/fa";
import React from 'react'

export default function Footer() {
  return (
    <div className="footer">
    <div className="footer-container">
        <div className="left">
        <div className="location">
            <FaHome size={30} style={{color:"#fff",marginRight:"2rem"}}/>
            <div>
                <p>5 Meena Shree Green City</p>
                <p>Dewas</p>
            </div>
            </div>
            <div className="phone">
                <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                70893-51841</h4>
            </div>
            <div className="email">
                <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            yogitanigam493@gmail.com</h4>
            
            </div>
        </div>
        


        <div className="right">
          <h4>About Myself</h4>
          <p>I am constantly learning and exploring new technologies to stay at the front of web development. </p>
          <div className="social">
          <FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}}/>
          <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}}/>
          <FaInstagram size={30} style={{color:"#fff",marginRight:"1rem"}}/>
          </div>
        </div>
    </div>
    </div>
  )
}
