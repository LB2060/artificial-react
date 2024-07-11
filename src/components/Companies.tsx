import React from 'react'
import Company from './company'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import required modules
import { Autoplay } from 'swiper/modules';


const Companies: React.FC= () => {
  return (
    <div className='companies'>
        <div className="container">
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}

        
        className="company-logo">
        <SwiperSlide><Company  compimg='/companies/comp1.svg'/></SwiperSlide>
        <SwiperSlide><Company  compimg='/companies/comp2.svg'/></SwiperSlide>
        <SwiperSlide><Company  compimg='/companies/comp3.svg'/></SwiperSlide>
        <SwiperSlide><Company  compimg='/companies/comp4.svg'/></SwiperSlide>
        </Swiper>
    
        </div>


    
   
    </div>
  )
}

export default Companies