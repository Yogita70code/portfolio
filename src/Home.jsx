import React from 'react'
import Nevbar from "./Components/Nevbar";
import Heroimage from "./Components/Heroimage";
import Footer from "./Components/Footer";
import Work from "./Components/Work";
export default function Home() {
  return (
    <div>
        <Nevbar />
        <Heroimage/>
        <Work/>
        <Footer/>
    </div>
  )
}
