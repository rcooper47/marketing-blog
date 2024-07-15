import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
   <Navbar className=""/>
   <Outlet/>
   {/* <Middle className=""/> 
    <ServicesGrid/>
   <ProjectsGrid/>
   <AboutSection/> */}
   <Footer/>
  
    </div>
  );
}

export default App;
