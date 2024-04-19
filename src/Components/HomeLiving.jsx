import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import Appliances from './Appliances';
import Styleformen from './Styleformen';
import StyleHome from './StyleHome';
import Homeimprovement from './Homeimprovement';
import ElectricGadget from './ElectricGadget';


const HomeLiving = () => {
  const SlideRef = useRef;
  return (
    <div className='relative  min-h-fit'>
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
        <SwiperSlide><img className='min-w-full' src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/ATFGW/MHS_GW_Candle-holders_PC-under._CB560634205_.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='min-w-full' src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Consumables/GW/Unrec/Pets-PC_GW_Hero_3000x1200_01._CB578900116_.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='min-w-full' src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG24/Smart_Watches/3000X1200_New_Launch_March_hero1._CB580055456_.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='min-w-full' src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg" alt="" /></SwiperSlide>
        ...
      </Swiper>
      <div className=" flex md:justify-between md:gap-16 gap-4 px-[2vw] flex-wrap md:-mt-[33vh] -mt-[10vh] absolute z-[99] ">
        <Appliances />
        <Styleformen/>
        <StyleHome/>
        <Homeimprovement/>
        <ElectricGadget/>
        <StyleHome/>
        <Appliances />
        <Styleformen/>
      </div>
    </div>
  )
}

export default HomeLiving