import React from 'react';
import Nevbar from "./Components/Nevbar";
import Footer from "./Components/Footer";
import Heroimage2 from './Components/Heroimage2';
import AboutContent from './Components/AboutContent';

export default function About() {
  return (
    <div>
      <Nevbar />
      <Heroimage2 heading="ABOUT" text="I am friendly MERN stack Developer."/>
      <AboutContent />
      <Footer/>
    </div>
  )
}
