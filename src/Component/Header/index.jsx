import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Slider from "../SlickSlider/Slider";

const Header = () => {
  const location = useLocation();

  const getHeaderContent = () => {
    switch (location.pathname) {
      case "/about":
        return {
          title: "About Us",
          titleSpan: "",
          subtitle: "Learn more about our mission, vision, and values.",
         
        };
      case "/contact":
        return {
          title: "Contact Us",
          titleSpan: "",
          subtitle: "We're here to help. Reach out to us anytime!",
         
        };
      case "/property/list":
        return {
          title: "Property Listings",
          titleSpan: "",
          subtitle: "Explore a variety of properties available for you.",
         
        };
      case "/property/agent":
        return {
          title: "Meet Our Agents",
          titleSpan: "",
          subtitle: "Experienced professionals ready to assist you.",
         
        };
      case "/property/type":
        return {
          title: "Property Types",
          titleSpan: "",
          subtitle: "Find the perfect type of property that suits your needs.",
         
        };
      case "/testimonial":
        return {
          title: "What Our Clients Say",
          titleSpan: "",
          subtitle: "Read success stories from our satisfied clients.",
         
        };
      default:
        return {
          title: "Find A Perfect Home",
          titleSpan: "To Live With Your Family",
          subtitle: "Discover the best properties tailored for you.",
         
        };
    }
  };

  const { title, titleSpan, subtitle} = getHeaderContent();

  return (
    <div className="w-[100%] overflow-hidden min-h-screen mx-auto">
      <div className="w-[90%] absolute top-10 left-0 right-0 mx-auto z-50 shadow-lg bg-white rounded-lg">
        <Navbar />
      </div>
      <div className="flex justify-center items-center relative min-h-screen">
        <div className="w-[50%] mt-[39px] mx-20">
          <h1 className="text-5xl font-bold text-[#0F172A]">
            {title} {titleSpan && <span className="text-[#14B8A6]">{titleSpan}</span>}
          </h1>
          <p className="mt-4 text-gray-600">{subtitle}</p>
          <button className="mt-6 px-10 py-4 bg-[#14B8A6] text-white shadow-md hover:bg-[#0F172A]">
            {location.pathname === "/" ? "Get Started" : "Learn More"}
          </button>
        </div>
        
          <div className="w-[50%] relative">
            <Slider />
          </div>
       
      </div>
    </div>
  );
};

export default Header;
