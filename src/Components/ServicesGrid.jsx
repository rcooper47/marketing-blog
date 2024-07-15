import React from "react";
import { Link } from "react-router-dom";
import wideImg from "../camera.jpg";
import socialMedia from "../media/social-media.jpg";
import email from "../media/email2.jpg";
import pr from "../media/pr.jpg";
import pm from "../media/try2.jpg";
import seo from "../media/seo.jpg";
import charts from "../media/1981.jpg";
import sma from "../media/trends.jpg";

export default function ServicesGrid() {
    return (
    <div className="Services text-center sm:mb-80 ">
<h2 className="text-black font-bold text-2xl my-6"> Services</h2>

<div className="flex flex-wrap justify-center"> 

<div className="flex flex-wrap sm:w-1/4 w-1/2 h-12 mx-4 sm:mb-4 mb-40 justify-center max-w-sm">
<div className=""><img className="transition duration-300 ease-in-out hover:" src={socialMedia} alt="Social Media"/></div>
<h2 className="text-black font-bold text-xl"><Link to="/Services">Social Media Marketing</Link></h2>
</div>

<div className="flex flex-wrap sm:w-1/4 w-1/2 h-12 mx-4 sm:mb-4 mb-40 justify-center">
<div className=" "><img className="" src={pm} alt="Email marketing"/></div>
<h2 className="text-black font-bold text-xl"><Link to="/Services">Project Management & Events</Link></h2>
</div>
<div className="flex flex-wrap sm:w-1/4 w-1/2 h-12 mx-4 sm:mb-4 mb-40 justify-center">
<div className=" "><img className="" src={seo} alt="Camera"/></div>
<h2 className="text-black font-bold text-xl"><Link to="/Services">SEO</Link></h2>
</div>


<div className="flex flex-wrap sm:ml-80 sm:mt-74 sm:w-1/4 w-1/2 h-12 mx-4 sm:mb-4 sm:my-72 mb-40 justify-center">
<div className=" "><img className="" src={pr} alt="PR pic"/></div>
<h2 className="text-black font-bold text-xl"><Link to="/Services">Media & Public Relations</Link></h2>
</div>
<div className="flex flex-wrap sm:mt-74 sm:w-1/4 w-1/2 h-12 mx-4 sm:mb-4 sm:my-72 mb-40 justify-center">
<div className=" "><img className="" src={charts} alt="Project management"/></div>
<h2 className="text-black font-bold text-xl"><Link to="/Services">Email Marketing</Link></h2>
</div>
<div className="flex flex-wrap sm:mt-74  sm:w-1/4 w-1/2 h-12 mx-4 sm:mb-4 sm:my-72 justify-center">
{/* <div className=" "><img className="" src={seo} alt="SEO"/></div>
<h2 className="text-black font-bold text-xl"><Link to="/Services">SEO</Link></h2> */}
</div>
</div>
    </div>)

};