import React from 'react';
import { BsShop } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';
import { GiFamilyHouse, GiHomeGarage } from 'react-icons/gi';
import { HiBuildingOffice2, HiBuildingStorefront } from 'react-icons/hi2';
import { MdHolidayVillage } from 'react-icons/md';
import { PiBuildingApartmentFill } from 'react-icons/pi';

const PropertyType = () => {
  const data = [
    { 
      icon:<PiBuildingApartmentFill/>,
      title: "Apartment", 
      description: '123 Properties' },
    { 
      icon:<MdHolidayVillage/>,
      title: "Villa", 
      description: '98 Properties' },
    { 
      icon:<FaHome/>,
      title: "Home", 
      description: '76 Properties' },
    { 
      icon:<HiBuildingOffice2/>,
      title: "Office", 
      description: '45 Properties' },
    { 
      icon:<HiBuildingStorefront />,
      title: "Building", 
      description: '30 Properties' },
    { 
      icon:<GiFamilyHouse />,
      title: "Townhouse", 
      description: '22 Properties' },
    { 
      icon:<BsShop />,
      title: "Shope", 
      description: '15 Properties' },
    { 
      icon:<GiHomeGarage />,
      title: "Garage", 
      description: '12 Properties' },
  ];

  return (
    <>
      <div className='w-full flex flex-col justify-center items-center mx-auto my-5'>
        <div className='w-[50%] mx-auto text-center'>
          <h1 className='text-4xl font-bold text-[#0F172A]'>Property Types</h1>
          <p className='mt-4 text-gray-600'>
            Explore different types of properties available in various locations.
          </p>
        </div>
        <div className='w-full flex flex-wrap justify-center gap-6 mx-auto p-4'>
          {data.map((item, index) => (
            <div key={index} className='lg:w-[22%] w-full border-[12px] border-[#14B8A6] border-opacity-20 p-4 rounded-lg'>
              <div className='bg-white border border-dashed border-[#14B8A6] p-4 rounded-lg flex flex-col justify-center items-center hover:bg-[#14B8A6] hover:text-white transition duration-300'>
                <div className='w-[60px] h-[60px] flex justify-center items-center rounded-full border border-dashed border-[#14B8A6] p-4'>
                  <p className='text-4xl text-[#14B8A6] transition duration-300 group-hover:text-white'>{item.icon}</p>
                </div>
                <h1 className="mt-3 text-xl font-semibold text-gray-900">{item.title}</h1>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='w-full flex justify-center mt-10 items-center gap-5'>
          <div className='w-full flex justify-center items-center relative'>
            <div
              className='bg-[#14B8A6] w-[80%] h-[550px] relative'
              style={{ clipPath: "polygon(0 0, 14% 0, 57% 100%, 0% 100%)" }}
            ></div>
            <div className='absolute inset-0 flex justify-center items-center'>
              <img
                src="/img/about.jpg"
                alt="About"
                className="w-[65%] max-w-[500px] h-auto object-cover"
              />
            </div>
          </div>
          <div className="w-[80%] mx-auto">
            <h1 className="text-4xl font-bold text-[#0F172A] mb-4">
            Place To Find The Perfect Property
            </h1>
            <p className="text-gray-600">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
              Clita erat ipsum et lorem et sit, sed stet lorem <br />sit clita duo justo magna dolore erat amet.
              <br /><br />
              ✔ Tempor erat elitr rebum at clita <br />
              ✔ Aliqu diam amet diam et eos <br />
              ✔ Clita duo justo magna dolore erat amet
            </p>
            <button className='mt-5 px-6 py-3 bg-[#14B8A6] text-white rounded-lg shadow-md hover:bg-[#0F172A] transition duration-300'>
              Read More
            </button>
          </div>
        </div>

      </div>
    </>
  );
};

export default PropertyType;
