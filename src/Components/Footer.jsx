import React from "react";
import { Link } from "react-router-dom";
import {
    FaLinkedin,
    FaTwitter,
  } from "react-icons/fa";


export default function Footer() {
    const sections = [
        { title:'HOME', items: []},
        { title: 'SERVICES',items: [] },
        { title: 'STUDIES',items: [] },
        { title: 'PROJECTS',items: [] },
        { title: 'ABOUT',items: [] },
        // { title: 'CONTACT',items: [] },
      ];
      
      const social = [
        { name: "LinkedIn", icon: FaLinkedin, link: "https://www.linkedin.com/in/isis-braimbridge" },
        { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/BraimbridgeIsis" },
      ];

   return (
    <div className="w-full mt-24 sm:mt-96 bg-slate-900 text-gray-300 py-y px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        {sections.map((section, index) => (
          <div key={index}>
            <h6 className="font-bold uppercase pt-2"><Link to={section.title}>{section.title}</Link></h6>
            <ul>
              {section.items.map((item, i) => (
                <li key={i} className="py-1 text-gray-500 hover:text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-2 pt-8 md:pt-2">
          {/* <p className="font-bold uppercase">Subscribe to our newsletter</p>
          <p className="py-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Enter email.."
            />
            <button className="p-2 mb-4">Subscribe</button>
          </form> */}
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">Made in 2024 with Love ❤️ and React. All rights reserved.</p>
        <div className="flex justify-between w-[100px] sm:w-[100px] pt-4 text-2xl">
          {social.map((x, index) => {
            return <Link to={x.link}><x.icon key={index} className="hover:text-white" /></Link>;
          })}
        </div>
      </div>
    </div>
  );
};

