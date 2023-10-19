import React from 'react';
import Nevbar from "./Components/Nevbar";
import Footer from "./Components/Footer";
import Heroimage2 from './Components/Heroimage2';
import Work from './Components/Work';

export default function Project() {
  return (
    <div>
      <Nevbar />
      <Heroimage2 heading="PROJECTS" text="Some of my most recent works"/>
      <Work/>
      <Footer/>
    </div>
  )
}
