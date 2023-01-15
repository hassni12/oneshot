import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";

const ScreenShotsCarousel = () => {
  return (
    <section id="app-screenshots" className="ptb_100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section_heading text-center mb-5">
              <h2 className="section_title">App Screenshots</h2>
              <p className="section_sub_title">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium, saepe assumenda nihil, minima dolorum dolorem
                cupiditate magni ratione ullam atque neque beatae possimus 
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-slider">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
            {[1,2,3,4,5,6,7,8,9,10].map((index)=> <SwiperSlide className="swiper-fixed-width">
            <img src={`./screenshots/${index}.jpg`} alt="" />
          </SwiperSlide>)}
         
         </Swiper>
      </div>
    </section>
  );
};
export default ScreenShotsCarousel;
