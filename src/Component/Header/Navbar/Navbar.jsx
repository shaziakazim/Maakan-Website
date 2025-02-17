import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const [isPropertyDropdownOpen, setIsPropertyDropdownOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center bg-white shadow-md py-4 px-12">
  
        <div className="">
          {/* <img src="logo.png" alt="" className="h-10" /> */}
          <p className="text-[#14B8A6] text-3xl font-bold">Makaan</p>
        </div>


        <div className="flex gap-8 text-[#0F172A] text-lg font-semibold ">
          <NavLink
            to="/"
            className="hover:text-[#14B8A6] py-3"
          >
            Home
          </NavLink>
          <NavLink to="/about" className="hover:text-[#14B8A6] py-3">
            About
          </NavLink>
          <div className="relative group">
            <button
              onClick={() => setIsPropertyDropdownOpen(!isPropertyDropdownOpen)}
              className="hover:text-[#14B8A6] focus:outline-none flex items-center py-3"
            >
              Property 
            </button>
            {isPropertyDropdownOpen && (
              <ul className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg  w-52 border border-gray-200 overflow-hidden">
                <li className="hover:bg-[#14B8A6] hover:text-white ">
                  <NavLink to="/property/list" className="block px-5 py-2">
                    Property List
                  </NavLink>
                </li>
                <li className="hover:bg-[#14B8A6] hover:text-white ">
                  <NavLink to="/property/agent" className="block px-5 py-2">
                    Property Agent
                  </NavLink>
                </li>
                <li className="hover:bg-[#14B8A6] hover:text-white ">
                  <NavLink to="/property/type" className="block px-5 py-2">
                    Property Type
                  </NavLink>
                </li>
              </ul>
            )}
          </div>

          {/* Pages Dropdown */}
          <div className="relative group">
            <button
              onClick={() => setIsPagesDropdownOpen(!isPagesDropdownOpen)}
              className="hover:text-[#14B8A6] focus:outline-none flex items-center py-3"
            >
              Pages
            </button>
            {isPagesDropdownOpen && (
              <ul className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg  w-52 border border-gray-200 overflow-hidden">
                <li className="hover:bg-[#14B8A6] hover:text-white ">
                  <NavLink to="testimonial" className="block px-5 py-2">
                    Testimonial
                  </NavLink>
                </li>
              </ul>
            )}
          </div>

          <NavLink to="/contact" className="hover:text-[#14B8A6] py-3">
            Contact
          </NavLink>
          <button className="bg-[#14B8A6] text-white px-6  rounded">Add Property</button>
        </div>

      </div>
    </>
  );
};

export default Navbar;
