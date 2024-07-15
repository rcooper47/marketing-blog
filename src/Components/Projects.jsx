import wideImg from "../camera.jpg";
import alloy from "../media/alloy.gif";

export default function Projects() {
  return (
    <div className="App">
    <div className="text-center">
   <h1 className=" text-3xl font-bold">PROJECTS</h1></div>

<div className="sm:grid grid-cols-2 gap-4 mt-10 sm:mt-10">
  <div className="left half mx-16 sm:ml-40">
    
    <img className="" src={alloy} alt="Random image"/> 
  </div>


  <div className="right half sm:w-3/5 w-2/3 mx-14 mt-4 sm:ml-40 ">
  <h2 className=" sm:text-2xl text-xl font-bold">SOCIAL MEDIA MARKETING</h2>
  <p>Identities created with clear positioning and applied to collateral materials consistently help elevate recognition and lay the foundation for ongoing relationships by building trust with audiences.
</p><br/>
<p>
  I spearheaded a digital marketing campaign for a B2B tech marketing company, focusing on LinkedIn and Twitter. By targeting younger, tech-savvy industry professionals and decision-makers, our strategy aligned with market trends and company objectives. The campaign included a mix of insightful content, case studies, and engaging visuals, resulting in significant engagement. We achieved a 20% increase in LinkedIn post interactions and a 10% growth in Twitter followers, culminating in an uplift in qualified leads.
</p><br/>
<p>
Additional projects are available by request.</p>
  </div>
  



  
  </div>
  <div className="sm:grid grid-cols-2 gap-4 mt-10 sm:mt-20">
  <div className="left half  mx-12 sm:ml-40">
    <h2 className="text-xl  sm:text-2xl font-bold">PROJECT MANAGEMENT & EVENTS</h2>
    <p>Identities created with clear positioning and applied to collateral materials consistently help elevate recognition and lay the foundation for ongoing relationships by building trust with audiences.

The Book Tour Museum's branding was updated with modern illustrations of two symbols associated with the state, a grizzly bear and a star, to visually communicate the Museum's purview and establish it as a destination dedicated to the Golden State. Prior to the refresh, the organization's logo used the California Hall of Fame medal as its primary iconography, which was mistaken for a coin and failed to illustrate the Museum's mission and the range of California-centric topics covered in programming.

Additional projects are available by request.</p>
  </div>


  <div className="right half sm:w-3/5 w-2/3 mx-14 mt-4 sm:ml-40 ">
  <img className="" src={wideImg} alt="Random image"/>
  
  </div>
  
  </div>

  <div className="sm:grid grid-cols-2 gap-4 mt-10 sm:mt-20">
  <div className="left half  mx-12 sm:ml-40">
  <img className="" src={wideImg} alt="Random image"/>

  </div>


  <div className="right half sm:w-3/5 w-2/3 mx-12 mt-4 sm:ml-40 ">
  {/*  */}
  <h2 className=" text-xl sm:text-2xl font-bold">EMAIL MARKETING</h2>
    <p>Identities created with clear positioning and applied to collateral materials consistently help elevate recognition and lay the foundation for ongoing relationships by building trust with audiences.

The California Museum's branding was updated with modern illustrations of two symbols associated with the state, a grizzly bear and a star, to visually communicate the Museum's purview and establish it as a destination dedicated to the Golden State. Prior to the refresh, the organization's logo used the California Hall of Fame medal as its primary iconography, which was mistaken for a coin and failed to illustrate the Museum's mission and the range of California-centric topics covered in programming.

Additional projects are available by request.</p>
  </div>
  



  
  </div>
    </div>
  );
}


