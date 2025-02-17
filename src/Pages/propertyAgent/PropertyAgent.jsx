import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
const teamMembers = [
  {
    fullName: "Emma Johnson",
    designation: "Software Engineer",
    image:"./img/team-1.jpg"
  },
  {
    fullName: "Liam Anderson",
    designation: "Project Manager",
    image: "./img/team-2.jpg"
  },
  {
    fullName: "Sophia Martinez",
    designation: "UI/UX Designer", 
    image: "./img/team-3.jpg"
  },
  {
    fullName: "Noah Smith",
    designation: "Data Analyst",
    image: "./img/team-4.jpg"
  }
];
const PropertyAgent = () => {
  return (
    <div className='w-[92%] mx-auto flex flex-col justify-center items-center mt-10'>
        <div className='w-[50%] text-center'>
          <h1 className='text-4xl font-bold text-[#0F172A]'>Property Agents</h1>
          <p className="mt-3 text-gray-600">
            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
          </p>
        </div>
        <div className='w-full flex flex-wrap justify-center items-center mt-10 gap-5'>
          {teamMembers.map((memb, index) => (
            <div key={index} className='w-[23%] min-h-[400px] shadow-lg rounded-lg overflow-hidden  relative'>
              <div className='relative w-full h-[250px] overflow-hidden'>
                <img src={memb.image} alt={memb.fullName} className='w-full h-full object-cover' />
              </div>
                 
              <div className='px-5 pt-10 text-center relative '>
                <h3 className='text-2xl font-bold text-gray-700'>{memb.fullName}</h3>
                <p className='text-lg text-gray-600'>{memb.designation}</p>
              </div>
              <div className='absolute top-[55%] left-[20%] flex justify-center items-center gap-5 p-3 '>
                  <div className='w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#14B8A6] text-xl  shadow-gray-700  shadow-lg '>
                    <FaFacebook />
                  </div>
                  <div className='w-10 h-10  shadow-gray-700  shadow-lg flex items-center justify-center bg-white rounded-full text-[#14B8A6] text-xl '>
                    <FaTwitter />
                  </div>
                  <div className='w-10 h-10  shadow-gray-700  shadow-lg flex items-center justify-center bg-white rounded-full text-[#14B8A6] text-xl '>
                    <FaInstagram />
                  </div>
                </div>
      
            </div>
          ))}
        </div>
      </div>
  )
}

export default PropertyAgent