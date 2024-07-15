import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Services from './Components/Services';
import { Redirect} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Middle from './Components/Middle';
import ProjectsGrid from './Components/ProjectsGrid';
import ServicesGrid from './Components/ServicesGrid';
import Main from './Components/Main';
import Projects from './Components/Projects';
import About from './Components/About';
import Studies from './Components/Studies';
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    
    element: <App/>, 
    children : [
      {path: "/",
                element: <Main/>},
      {path: "/Home",
                element: <Main/>},
      {path: "/Services",
                element: <Services/>},
      {path: "/Studies",
                element: <Studies/>},
      {path: "/Projects",
                element: <Projects/>},
      {path: "/About",
                element: <About/>},
      //  {path: "/Contact",
      //           element: <Main/>},
      ],
  },
]);

root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
  