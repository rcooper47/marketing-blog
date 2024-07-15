import { Link } from "react-router-dom";
import wideImg from "../camera.jpg";

export default function Studies() {
    return (
        <div className="">
        <div className="text-center ">
       <h1 className=" text-3xl font-bold">STUDIES</h1></div>
    
    <div className="sm:grid grid-cols-2 gap-4 mt-10 sm:mt-10">
      <div className="left half mx-16 sm:ml-40">
        <h2 className=" sm:text-2xl text-xl font-bold">SOCIAL MEDIA MARKETING</h2>
        <p><h3 className=" sm:text-l text-m font-bold">Strategy, copywriting, design application + media outreach</h3></p><br/>
        <p>Identities created with clear positioning and applied to collateral materials consistently help elevate recognition and lay the foundation for ongoing relationships by building trust with audiences.
    
    The California Museum's branding was updated with modern illustrations of two symbols associated with the state, a grizzly bear and a star, to visually communicate the Museum's purview and establish it as a destination dedicated to the Golden State. Prior to the refresh, the organization's logo used the California Hall of Fame medal as its primary iconography, which was mistaken for a coin and failed to illustrate the Museum's mission and the range of California-centric topics covered in programming.
    
    Additional projects are available by request.</p>
      </div>
    
    
      <div className="right half sm:w-3/5 w-2/3 mx-14 mt-4 sm:ml-40 ">
      <img className="" src={wideImg} alt="Random image"/>
      
      </div>
      
    
    
    
      
      </div>
      <div className="sm:grid grid-cols-2 gap-4 mt-10 sm:mt-20">
      <div className="left half  mx-12 sm:ml-40">
        <h2 className="text-xl  sm:text-2xl font-bold">EMAIL MARKETING</h2>
        <p><h3 className=" sm:text-l text-m font-bold">Strategy, copywriting, design application + media outreach</h3></p><br/>

        <p>Identities created with clear positioning and applied to collateral materials consistently help elevate recognition and lay the foundation for ongoing relationships by building trust with audiences.
    
    The California Museum's branding was updated with modern illustrations of two symbols associated with the state, a grizzly bear and a star, to visually communicate the Museum's purview and establish it as a destination dedicated to the Golden State. Prior to the refresh, the organization's logo used the California Hall of Fame medal as its primary iconography, which was mistaken for a coin and failed to illustrate the Museum's mission and the range of California-centric topics covered in programming.
    
    Additional projects are available by request.</p>
      </div>
    
    
      <div className="right half sm:w-3/5 w-2/3 mx-14 mt-4 sm:ml-40 ">
      <img className="" src={wideImg} alt="Random image"/>
      
      </div>
      
      </div>
    
      <div className="sm:grid grid-cols-2 gap-4 mt-10 sm:mt-20">
      <div className="left half  mx-12 sm:ml-40">
        <h2 className=" text-xl sm:text-2xl font-bold">PROJECT MANAGEMENT & EVENTS</h2>
        <p><h3 className=" sm:text-l text-m font-bold">Strategy, copywriting, design application + media outreach</h3></p><br/>

        <p>Identities created with clear positioning and applied to collateral materials consistently help elevate recognition and lay the foundation for ongoing relationships by building trust with audiences.
    
    The California Museum's branding was updated with modern illustrations of two symbols associated with the state, a grizzly bear and a star, to visually communicate the Museum's purview and establish it as a destination dedicated to the Golden State. Prior to the refresh, the organization's logo used the California Hall of Fame medal as its primary iconography, which was mistaken for a coin and failed to illustrate the Museum's mission and the range of California-centric topics covered in programming.
    
    Additional projects are available by request.</p>
      </div>
    
    
      <div className="right half sm:w-3/5 w-2/3 mx-12 mt-4 sm:ml-40 ">
      <img className="" src={wideImg} alt="Random image"/>
      
      </div>
      
    
    
    
      
      </div><div className="flex justify-center mt-4">
      <button className="bg-[#00df9a] hover:bg-blue-500 text-black font-bold py-2 px-4 rounded">
 <Link to="https://www.medium.com" >Read More</Link> 
</button></div>
        </div>
    );
  }
  
  