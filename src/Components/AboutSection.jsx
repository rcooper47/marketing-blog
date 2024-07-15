import React from "react";
import wideImg from "../camera.jpg";



export default function AboutSection() {
    return (
    <div className="text-center sm:mb-80 mb-10 flex flex-wrap sm:mx-40 justify-center max-w-6x">
    <div className="left half sm:w-1/2 break-words">
 
<h2 className="text-black font-bold text-2xl sm:my-6 mt-2">About</h2>
<p className="">
<span className="font-bold">Hi there! I'm Isis — a marketing and communications professional located in Atlanta, Georgia 🍑.</span> 
<p>
For the last 3 years, I've produced of B2B and B2C projects for corporate, small business, and nonprofit clients in agency, freelance, and in-house positions.  
</p>
<p>
<span className="font-bold">My professional passion is creating branded multi-channel campaigns that leverage data and storytelling to resonate with target audiences and get results. </span> 
</p></p>
</div>




  <div className="right half sm:w-1/2">

<div className=" mx-10 "><img className=" rounded-full" src={wideImg} alt="Random image"/></div>

</div>
    </div>)

};