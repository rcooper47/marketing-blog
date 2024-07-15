import wideImg from "../camera.jpg";

export default function Services() {
  return (
    <div className="App">
    <div className="text-center">
   <h1 className=" text-3xl font-bold">SERVICES</h1></div>

<div className="sm:grid grid-cols-2 gap-4 mt-10 sm:mt-10">
  <div className="left half mx-16 sm:ml-40">
    <h2 className=" sm:text-2xl text-xl font-bold">SOCIAL MEDIA MARKETING</h2>
    <p>Social media marketing enhances awareness, builds credibility, and generates leads.
     It provides consumers with engaging interactions and direct access to products and services, while offering marketers real-time feedback and valuable insights into consumer behavior.
    </p>
<br/>
    <p>
    The California Museum hosted the special event “A Charlie Brown Christmas Party” as a holiday promotion for its presentation of the traveling exhibit “Pigskin Peanuts.” 
    Festivities aimed at families with children including free admission and refreshments, an appearance by Snoopy, live performance of “Peanuts” music, local SPCA adoptions, discount on “Peanuts” merchandise, and hands-on crafts for kids help boost general attendance by 320% and store sales by 140%.
    
    </p>
  </div>


  <div className="right half sm:w-3/5 w-2/3 mx-14 mt-4 sm:ml-40 ">
  <img className="" src={wideImg} alt="Random image"/>
  
  </div>
  



  
  </div>
  <div className="sm:grid grid-cols-2 gap-4 mt-10 sm:mt-20">
  <div className="left half  mx-12 sm:ml-40">
    <h2 className="text-xl  sm:text-2xl font-bold">EMAIL MARKETING</h2>
    <p>Email campaigns boost awareness, establish credibility, and generate leads. 
    They offer personalized communication with consumers, delivering tailored product and service information directly to their inboxes, while providing marketers with valuable feedback and conversion opportunities.
    </p>
<br/>
    <p>
    The California Museum hosted the special event “A Charlie Brown Christmas Party” as a holiday promotion for its presentation of the traveling exhibit “Pigskin Peanuts.” 
    Festivities aimed at families with children including free admission and refreshments, an appearance by Snoopy, live performance of “Peanuts” music, local SPCA adoptions, discount on “Peanuts” merchandise, and hands-on crafts for kids help boost general attendance by 320% and store sales by 140%.
    
    </p>
  </div>


  <div className="right half sm:w-3/5 w-2/3 mx-14 mt-4 sm:ml-40 ">
  <img className="" src={wideImg} alt="Random image"/>
  
  </div>
  
  </div>

  <div className="sm:grid grid-cols-2 gap-4 mt-10 sm:mt-20">
  <div className="left half  mx-12 sm:ml-40">
    <h2 className=" text-xl sm:text-2xl font-bold">PROJECT MANAGEMENT & EVENTS</h2>
    <p>As a marketing strategy, events enhance awareness, build credibility, and generate leads. 
    They provide consumers with personal experiences of products and services, while offering marketers real-time feedback and sales opportunities.</p>
<br/>
    <p>
    The California Museum hosted the special event “A Charlie Brown Christmas Party” as a holiday promotion for its presentation of the traveling exhibit “Pigskin Peanuts.” 
    Festivities aimed at families with children including free admission and refreshments, an appearance by Snoopy, live performance of “Peanuts” music, local SPCA adoptions, discount on “Peanuts” merchandise, and hands-on crafts for kids help boost general attendance by 320% and store sales by 140%.
    
    </p>
  </div>


  <div className="right half sm:w-3/5 w-2/3 mx-12 mt-4 sm:ml-40 ">
  <img className="" src={wideImg} alt="Random image"/>
  
  </div>
  



  
  </div>
    </div>
  );
}


