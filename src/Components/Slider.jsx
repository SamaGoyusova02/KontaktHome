import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; 
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";

import slider1 from "../assets/slider1.webp";
import slider2 from "../assets/slider2.webp";
import slider3 from "../assets/slider3.webp";
import slider4 from "../assets/slider4.webp";
import slider5 from "../assets/slider5.webp";
import slider6 from "../assets/slider6.webp";
import slider7 from "../assets/slider7.webp";
import slider8 from "../assets/slider8.webp";
import slider9 from "../assets/slider9.webp";
import slider10 from "../assets/slider10.webp";
import slider11 from "../assets/slider11.webp";
import slider12 from "../assets/slider12.webp";
import slider13 from "../assets/slider13.webp";
import slider14 from "../assets/slider14.webp";
import slider15 from "../assets/slider15.webp";

export function Slider() {
  const slides = [
    slider1, slider2, slider3, slider4, slider5, 
    slider6, slider7, slider8, slider9, slider10, 
    slider11, slider12, slider13, slider14 , slider15
  ];

  return (
    <div className="relative w-full h-[185px] sm:h-[210px] md:h-full group px-3 lg:px-0 md:px-0">
      
      <div className="w-full h-full overflow-hidden rounded-[10px]">
        <Swiper
          modules={[Navigation, Autoplay]}
          grabCursor
          autoplay={{
            delay: 2500, 
            disableOnInteraction: false, 
          }}
          navigation={{
            prevEl: '.custom-slider-prev',
            nextEl: '.custom-slider-next',
          }}
    
          slidesPerView={slides.length === 1 ? 1 : 2.5} 
          spaceBetween={10} 
          centeredSlides={slides.length <= 2}
          breakpoints={slides.length <= 2 ? {} : {
            390: {
              slidesPerView: 2.8, 
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 3.2, 
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3.8,
              spaceBetween: 12,
            },
            768: {
              slidesPerView: "auto", 
              spaceBetween: 7,
            }
          }}
          className="w-full h-full"
        >
          {slides.map((img, index) => (
            <SwiperSlide key={index} className={`w-full md:!w-[550px] md:!h-[540px] ${slides.length <= 2 ? '!flex !justify-center !items-center' : ''}`}>
              <div className="w-full h-full overflow-hidden rounded-[10px]">
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
    
                  className="w-full h-full object-fill rounded-[10px]" 
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <button className="custom-slider-prev absolute left-2 top-1/2 -translate-y-1/2 z-50 w-8 h-8 bg-white hover:bg-gray-100 text-gray-700 rounded-full hidden md:flex justify-center items-center shadow-md border border-gray-200 transition-all duration-200 opacity-0 group-hover:opacity-100 disabled:!pointer-events-none disabled:opacity-0">
        <IoIosArrowBack className="text-[14px]" />
      </button>
      <button className="custom-slider-next absolute right-2 top-1/2 -translate-y-1/2 z-50 w-8 h-8 bg-white hover:bg-gray-100 text-gray-700 rounded-full hidden md:flex justify-center items-center shadow-md border border-gray-200 transition-all duration-200 opacity-0 group-hover:opacity-100 disabled:!pointer-events-none disabled:opacity-0">
        <IoIosArrowForward className="text-[14px]" />
      </button>

    </div>
  );
}

export default Slider;