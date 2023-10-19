import React from 'react';
import Nevbar from "./Components/Nevbar";
import Footer from "./Components/Footer";
import Heroimage2 from './Components/Heroimage2';
import Form from './Components/Form';

export default function Contact() {
  return (
    <div>
       <Nevbar />
       <Heroimage2 heading="CONTACT" text="Let's have a chat"/>
       <Form/>
      <Footer/>
    </div>
  )
}
