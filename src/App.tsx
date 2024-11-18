import React from "react";
import './App.css'
import Nav from "./components/Nav";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import PinScrubAnimation from "./components/PinScrubAnimation";
import Image from "./components/Image";
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'



function App() {

  // useGSAP(()=>{
  //   gsap.from(".images",{
  //     xPercent:100,
  //     duration:1
  //   })

  //   gsap.utils.toArray(".images img").forEach((item, index)=>{
  //     gsap.fromTo(item,{
  //       scaleY:index +1
  //     },{
  //       scaleY:1,
  //       duration:1
  //     })
  //   })
  // })
  return (
    <>
    {/* <Nav></Nav> */}
    {/* <SectionOne></SectionOne> */}
    {/* <PinScrubAnimation/> */}
    {/* <SectionTwo></SectionTwo> */}
    <Image/>
    </>
  );
}

export default App;
