import React, { useEffect, useState } from 'react'
import Award from './Award'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

//import axios
import axios from 'axios';

//gelen melumatlarin tipini interfase ile verilmesi
interface Award{
  title:string;
  image:string;
  info:string;

}

const Awards:React.FC= () => {


  const[award,setAward] = useState<Award[]>([])
  useEffect (() => {
    axios.get('src/awardinfo.json')
    .then(answer => setAward(answer.data))
    .catch(error=> console.error(error))
  })

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
      award.map((oneinfo,index)=>(
           <SwiperSlide key={index}><Award cardimg={oneinfo.image} cardtitle={oneinfo.title} cardinfo={oneinfo.info}/></SwiperSlide>
        ))
        }

        
      </Swiper>
      
        
        
    </div>
  )
}

export default Awards