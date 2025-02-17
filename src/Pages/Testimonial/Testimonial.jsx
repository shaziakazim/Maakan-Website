import React from 'react';
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ onClick }) => {
  return (
    <div 
      className="absolute top-1/2 right-[-30px] transform -translate-y-1/2 bg-[#14B8A6] text-white rounded-full p-3 cursor-pointer shadow-lg z-10"
      onClick={onClick}
    >
      <FaChevronRight size={20} />
    </div>
  );
};
const PrevArrow = ({ onClick }) => {
  return (
    <div 
      className="absolute top-1/2 left-[-30px] transform -translate-y-1/2 bg-[#14B8A6] text-white rounded-full p-3 cursor-pointer shadow-lg z-10"
      onClick={onClick}
    >
      <FaChevronLeft size={20} />
    </div>
  );
};


const clientReviews = [
  {
    image: "./img/testimonial-2.jpg",
    name: "Rahul Sharma",
    profession: "Software Engineer",
    description: "Finding a rental home was never this easy! Thanks to Makaan, I got a perfect apartment in just a few days."
  },
  {
    image: "./img/testimonial-1.jpg",
    name: "Ananya Patel",
    profession: "Doctor",
    description: "Makaan made my home-buying journey smooth and hassle-free. The team was very professional."
  },
  {
    image: "./img/testimonial-3.jpg",
    name: "Amit Verma",
    profession: "Entrepreneur",
    description: "I needed a house on rent for my business stay, and Makaan provided excellent options within my budget."
  },
  {
    image: "./img/testimonial-4.jpg",
    name: "Priya Kapoor",
    profession: "Freelancer",
    description: "Great platform with genuine property listings! I found a beautiful home at an affordable price."
  }
];

function Testimonial() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />, 
    prevArrow: <PrevArrow />, 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='relative w-full flex flex-col justify-center items-center mt-10'>
      <div className='w-[50%] text-center'>
        <h1 className='text-4xl font-bold text-[#0F172A]'>Our Clients Say!</h1>
        <p className='mt-4 text-gray-600'>
          Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
        </p>
      </div>
      <div className='relative w-[92%] mx-auto mt-10'>
        <Slider {...settings}>
          {clientReviews.map((review, index) => (
            <div key={index} className='flex justify-center'>
              <div className=' w-[85%] mx-auto h-auto flex border-[12px] border-[#14B8A6] border-opacity-20 p-3 rounded-xl shadow-lg'>
                <div className='w-full h-full border border-dashed border-[#14B8A6] p-5 rounded-lg'>
                  <p className="text-gray-700 leading-relaxed">{review.description}</p>
                  <div className='flex gap-5 mt-3 items-center'>
                    <div className='w-14 h-14 rounded-full overflow-hidden border-2 border-[#14B8A6]'>
                      <img src={review.image} alt={review.name} className='w-full h-full object-cover'/>
                    </div>
                    <div className='flex flex-col'>
                      <h3 className="text-lg font-semibold text-[#0F172A]">{review.name}</h3>
                      <p className="text-sm text-gray-500">{review.profession}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonial;
