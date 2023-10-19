 import React from 'react';
import "./index.css";
import "./Home.jsx";
import "./Project.jsx";
import "./About.jsx";
import "./Contact.jsx";
import {Route,Routes} from "react-router-dom";
import Project from './Project.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
