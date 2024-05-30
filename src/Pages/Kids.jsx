import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef } from 'react';
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";


const Kids = ({setChanges}) => {
  const setchange=setChanges;
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
        <SwiperSlide><img className='min-w-full' src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/d4960185-6afc-4727-88b9-61e707181427._CR0%2C0%2C3000%2C600_SX1920_.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='min-w-full' src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/d7d0918d-eed0-49fd-b9e6-1c59799642ef._CR0%2C0%2C3000%2C600_SX1920_.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='min-w-full' src="https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/f/AmazonStores/A21TJRUUN4KGV/dd141cdc628f47ddc08cd098644d4b18.w3000.h600._CR0%2C0%2C3000%2C600_SX1920_.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='min-w-full' src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/b781dcf5-4d45-41b8-8f0c-d178ebe5b12f._SL5000_CR0%2C0%2C5000%2C997_SX1920_.png" alt="" /></SwiperSlide>
        ...
      </Swiper>
    </div>
  )
}

export default Kids