import React from 'react';
//import swiper react component
import {Swiper, SwiperSlide} from 'swiper/react';
//import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../slider.css';
//import required modules
import {Pagination} from 'swiper';
//img
import CameraImg from '../img/promo_img2.png';
//data
const sliderData = [
  {
    img:CameraImg,
    pretitle:'special offer',
    titlePart1:'Save 20%',
    titlePart2:'On your',
    titlePart3:'first order',
    btnText:'Shop now',
  },
  {
    img:CameraImg,
    pretitle:'special offer',
    titlePart1:'Save 20%',
    titlePart2:'On your',
    titlePart3:'first order',
    btnText:'Shop now',
  },
  {
    img:CameraImg,
    pretitle:'special offer',
    titlePart1:'Save 20%',
    titlePart2:'On your',
    titlePart3:'first order',
    btnText:'Shop now',
  },
]

const MainSlider = () => {
  return (
    <Swiper modules={[Pagination]} loop={true} navigation={false}
    pagination={{
      clickable:true,
    }}
    className='mainSlider h-full bg-primary xl:bg-mainSlider xl:bg-no-repeat
      max-w-lg lg:max-w-none rounded-[8px] overflow-hidden drop-shadow-2xl'>
    <>
      {
      sliderData.map((slide,index)=>{
        return (
        <SwiperSlide key={index}>
          <div className='flex flex-col lg:flex-row h-full p-[20px] md:p-[60px]'>
            {/* text */}
            <div className='w-full lg:flex-1'>
              <div className='uppercase mb-1 text-center lg:text-left'>
                {slide.pretitle}
              </div>
              <div className='text-3xl md:text-[46px] font-semibold uppercase leading-none
              text-center lg:text-left mb-8 xl:mb20'>
                {slide.titlePart1}<br/>
                {slide.titlePart2}<br/>
                {slide.titlePart3}
              </div>
            </div>
            {/* image */}
            <div className='flex-1'>
              <img width="500px" height="600px" className='xl:absolute xl:-right-16 xl:-bottom-12' src={slide.img} />
            </div>
          </div>
        </SwiperSlide>
        )
      })}
    </>
    </Swiper>
  );
};

export default MainSlider;
