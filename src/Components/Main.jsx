import ProjectsGrid from './ProjectsGrid';
import ServicesGrid from './ServicesGrid';
import AboutSection from './AboutSection';
import Middle from './Middle';

export default function Main() {
    return (
      <div className="">
        <Middle /> 
    <ServicesGrid/>
   <ProjectsGrid/>
   <AboutSection/>
    
      </div>
    );
  }
  
  