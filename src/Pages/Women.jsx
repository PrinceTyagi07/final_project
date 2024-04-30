import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef } from 'react';
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";

const Women = ({setChanges}) => {
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
        <SwiperSlide><img className='min-w-full' src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/d3468f08-7e05-4205-8455-94e94b361129._CR0%2C0%2C3000%2C600_SX1920_.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='min-w-full' src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/28b88624-e749-4a5c-9697-a4441edd7369._CR0%2C0%2C4125%2C825_SX1920_.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='min-w-full' src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/02ade769-a528-4694-9013-989863ef1e0f._CR0%2C0%2C3000%2C600_SX1920_.jpeg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='min-w-full' src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/826df682-3804-491d-b93c-b7f9646491d3._CR0%2C0%2C3000%2C600_SX1920_.jpg" alt="" /></SwiperSlide>
        ...
      </Swiper>
    </div>
  )
}

export default Women