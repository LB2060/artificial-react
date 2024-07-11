import React from 'react'
import Award from './Award'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import awardinfo from '../awardinfo.json'

const Awards:React.FC= () => {
  return (
    <div className='awards'>
         <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            992: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        modules={[Pagination]}
        className="mySwiper py-5"
      >
        {
        awardinfo.map((oneinfo)=>(
           <SwiperSlide><Award cardimg={oneinfo.image} cardtitle={oneinfo.title} cardinfo={oneinfo.info}/></SwiperSlide>
        ))
        }

        
      </Swiper>
      
        
        
    </div>
  )
}

export default Awards