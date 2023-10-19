import { NavLink } from "react-router-dom";
import "./Workcard.css";
import React from 'react'

export default function Workcard(props) {
  return (
    <div className="work-container"> 
     <div className="project-card">
            <img src={props.imgsrc} alt="image"/>
            <h2 className="project-title">{props.title}</h2>
            <div className="pro-details">
                <p>{props.text}</p>
                <div className="pro-btns">
                 <NavLink to="url.com" className="btn" >View</NavLink> 
                 <NavLink to="url.com" className="btn" >Source</NavLink>  
                </div>
            </div>
        </div>
    </div>
  )
}
