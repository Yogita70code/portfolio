import "./AboutContent.css";
import {Link} from "react-router-dom";
import React from 'react'

export default function AboutContent() {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I ?</h1>
            <p> My name is Yogita Nigam, it's a begning of my carrer in IT field .During my training session learn many languages to grow my self and also gain more Knowledge . With this i can create new more effective projects. </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>


        <div className="right">
            <div className="img-container">
                <div className="img-stack ">
                    <img src="pic.jpeg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
