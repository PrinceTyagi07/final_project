import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
const Men = ({setChanges}) => {
  const setchange = setChanges;
  function changehandler() {
    setchange(false);
  }
  const SlideRef = useRef;
  return (
    <div onClick={changehandler} className='h-screen'>
    
    <Swiper
        pagination={false}
        modules={[FreeMode, Pagination, Navigation, Autoplay]}
        ref={SlideRef}
        className=" flex items-center justify-center text-center h-full w-full"
        loop={true}
        freeMode={true}
        slidesPerView={1}
        spaceBetween={50}
        autoplay={{ 
          delay: 3000,
        }}
      >
        <SwiperSlide><img className='min-w-full' src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/a7f174fd-8941-4a6b-9291-d95b4d0d1fe2._CR0%2C0%2C3000%2C600_SX1920_.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='min-w-full' src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/3b0236eb-e081-4f48-8aa9-38a6973aec55._CR0%2C0%2C3000%2C600_SX1920_.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='min-w-full' src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/29efca34-ec0e-4a21-9204-f4409cd09cf7._CR0%2C0%2C3000%2C600_SX1920_.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='min-w-full' src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/4c29ed65-57bf-44a4-b849-8bfb2a995cc7._CR0%2C0%2C3000%2C600_SX1920_.jpg" alt="" /></SwiperSlide>
        ...
      </Swiper></div>
  )
}

export default Men