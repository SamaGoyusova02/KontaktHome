import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

import logo1 from "../assets/logo1.webp"
import logo2 from "../assets/logo2.webp"
import logo3 from "../assets/logo3.webp"
import logo4 from "../assets/logo4.webp"
import logo5 from "../assets/logo5.webp"
import logo6 from "../assets/logo6.webp"
import logo7 from "../assets/logo7.webp"
import logo8 from "../assets/logo8.webp"
import logo9 from "../assets/logo9.webp"
import logo10 from "../assets/logo10.webp"
import logo11 from "../assets/logo11.webp"
import logo12 from "../assets/logo12.webp"
import logo13 from "../assets/logo13.webp"
import logo14 from "../assets/logo14.webp"
import logo15 from "../assets/logo15.webp"
import logo16 from "../assets/logo16.webp"
import logo17 from "../assets/logo17.webp"

const logos = [
  logo1, logo2, logo3, logo4, logo6, logo7, logo8, logo9,
  logo10, logo11, logo12, logo13, logo14, logo15, logo16, logo17
];

function Logos() {
  return (
    <div className="max-w-[14850px] mx-auto  lg:mx-9 mx-3">
      <div className="bg-white rounded-[10px] p-4 shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 2000, 
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 6 },
            768: { slidesPerView: 6 },
            1024: { slidesPerView: 8 },
            1280: { slidesPerView: 10 },
          }}
          className="w-full flex items-center"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-[12px] h-[66px] flex justify-center items-center cursor-pointer">
                <img 
                  src={logo} 
                  alt={`brand-logo-${index + 1}`} 
                  className="max-h-full w-[50px] object-contain  border-[#e9e3e3] rounded-[10px] border px-0.5 py-1 "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Logos;