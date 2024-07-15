import React from "react";
import wideImg from "../camera.jpg";

export default function Middle() {
    return (
    <div className="">
    <div className="relative  mx-auto z-10">
    <img className="object-fill max-w-full" src={wideImg} alt="Random image"/>
    <div className="absolute inset-0 flex flex-wrap text-center items-center justify-center sm:h-1/2">
    
        <h2 className=" text-black md:text-3xl font-bold w-full ">
        <span className="bg-white sm:py-20 sm:px-12 w-full ">Marketing & communications professional leveraging creativity and data to grow brand awareness.
{/* <span class="bg-black py-2 px-4">About</span> */}

</span></h2>   
{/* <div className=""><span className="bg-black py-2 px-4 sm:py-5 sm:px-12 mt-20 text-white md:text:2xl font-bold ">About</span> </div> */}

</div>
    </div>
{/* <div className="text-center  grid place-items-center content-center overflow-hidden">
<img src={wideImg} className="object-scale-down max-w-full "></img>
<div className="w-full"><p className="bg-white">Marketing, communications, & brand strategist 
leveraging data & creativity to grow brand awareness.</p></div>

</div> */}
    </div>)

};