import "./Heroimage.css";
import {Link} from "react-router-dom";
import React from 'react';

export default function Heroimage() {
  return (
    <div className="hero">
       <div className="mask">
        <img  className="into-img" src="photo8.avif"/>
       </div>
       <div className="content">
        <p>HI, I AM YOGITA</p>
        <h1>Mern Stack Developer.</h1>
        <div>
          <Link to="/project" className="btn">Projects</Link>
          <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
       </div>
    </div>
  )
}
