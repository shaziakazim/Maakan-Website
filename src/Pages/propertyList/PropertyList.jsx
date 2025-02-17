import React, { useState } from 'react'

const PropertyList = () => {
  const btn = ["Featured", "For Sale", "For Rent"]
  const [isactive, setIsActive] = useState(0)
  const properties = [
    {
      price: "$12,345",
      title: "Golden Urban House For Sell",
      location: "123 Street, New York, USA",
      category:'For Sale',
      size: "1000 Sqft",
      bedrooms: 3,
      bathrooms: 2,
      image: "./img/property-1.jpg"
    },
    {
      price: "$25,000",
      title: "Modern Luxury Villa",
      location: "456 Avenue, Los Angeles, USA",
      category:'For Rent',
      size: "2500 Sqft",
      bedrooms: 5,
      bathrooms: 4,
      image: "./img/property-2.jpg"
    },
    {
      price: "$18,750",
      title: "Cozy Family Apartment",
      location: "789 Boulevard, Chicago, USA",
      category:'For Sale',
      size: "1500 Sqft",
      bedrooms: 4,
      bathrooms: 3,
      image: "./img/property-3.jpg"
    },
    {
      price: "$30,500",
      title: "Spacious Beachfront House",
      location: "321 Ocean Drive, Miami, USA",
      category:'For Rent',
      size: "3000 Sqft",
      bedrooms: 6,
      bathrooms: 5,
      image: "./img/property-4.jpg"
    },
    {
      price: "$15,600",
      title: "Downtown Studio Apartment",
      location: "654 Metro St, San Francisco, USA",
      category:'For Sale',
      size: "800 Sqft",
      bedrooms: 2,
      bathrooms: 1,
      image: "./img/property-5.jpg"
    },
    {
      price: "$22,800",
      title: "Elegant Suburban Home",
      location: "987 Greenway, Houston, USA",
      category:'For Rent',
      size: "2000 Sqft",
      bedrooms: 4,
      bathrooms: 3,
      image: "./img/property-6.jpg"
    }
  ];
const ActiveFun=(index)=>{
  setIsActive(index)

}
const filteredProperties = isactive === 0 ? properties : properties.filter((curEle) => curEle.category === btn[isactive]);

  return (
    <>
      <div className='w-full flex flex-col mx-auto mt-10'>
        <h1 className='text-4xl font-bold text-[#0F172A] mx-5'>Property Listing</h1>
        <div className='flex justify-between items-center mx-5'>
          <p className='mt-4 text-gray-600'>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit diam justo sed rebum.</p>
          <div className='flex gap-2'>
            {
              btn.map((data, index) => (
                <button key={index} onClick={()=> ActiveFun(index)} className={`border border-[#14B8A6] text-gray p-2 rounded-lg ${isactive === index ? "bg-[#14B8A6] text-white" : ""}`}>{data}
                </button>

              ))
            }
          </div>

        </div>
      
        <div className='w-full flex flex-wrap justify-center items-center gap-5  mt-10 ' >
          {filteredProperties.map((pdata, index) => (
            <div key={index} className='w-full sm:w-[45%] md:w-[30%] lg:w-[25%] overflow-hidden  shadow shadow-xl mx-auto'>
              <div className='w-full h-[200px] overflow-hidden transition-transform duration-500 hover:scale-105'>
                <img src={pdata.image} alt="" className='w-full h-full object-cover ' />
              </div>
              <div className="w-full p-5">
                <p className="text-lg font-semibold">{pdata.price}</p>
                <p className="text-md font-bold">{pdata.title}</p>
                <p className="text-sm text-gray-600">{pdata.location}</p>
                
              </div>
              <div className="w-full flex justify-between items-center border-t-2 border-dashed border-[#14B8A6]  p-2">
                  <p className="w-1/3 text-center border-r-2 border-dashed border-[#14B8A6]">{pdata.size}</p>
                  <p className="w-1/3 text-center border-r-2 border-dashed border-[#14B8A6]">{pdata.bedrooms} Beds</p>
                  <p className="w-1/3 text-center">{pdata.bathrooms} Baths</p>
                </div>

            </div>
          ))
          }
          
        </div>
        <button className='mx-auto px-6 py-4 bg-[#14B8A6] text-white mt-5 transition-transform duration-300 hover:scale-110 '>Browser More Properties</button>
      </div>
    </>
  )
}

export default PropertyList