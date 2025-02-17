import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-[55%] left-[-25px] bg-[#14B8A6] text-white rounded-full p-3 cursor-pointer shadow-lg z-10"
      onClick={onClick}
    >
      <FaChevronRight size={20} />
    </div>
  );
};
const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-[45%] left-[-25px] bg-[#14B8A6] text-white rounded-full p-3 cursor-pointer shadow-lg z-10"
      onClick={onClick}
    >
      <FaChevronLeft size={20} />
    </div>
  );
};
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative w-full">
      <Slider {...settings}>
        <div>
          <img src="./img/carousel-1.jpg" alt="" className="w-full h-auto" />
        </div>
        <div>
          <img src="./img/carousel-2.jpg" alt="" className="w-full h-auto" />
        </div>
      </Slider>
    </div>
  );
}
