import React from "react";
import wideImg from "../camera.jpg";

export default function ProjectsGrid() {
    return (
        <div className="text-center sm:mb-60 mb-10">
        <h2 className="text-black font-bold text-2xl mb-6">Projects</h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mx-10 sm:mx-40"> 
        <div class=" "><img className="" src={wideImg} alt="Random image"/></div>
        <div class=" "><img className="" src={wideImg} alt="Random image"/></div>
        <div class="  "><img className="" src={wideImg} alt="Random image"/></div>
        
        </div>
    </div>)

};