"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination } from "swiper/modules";

const Slides = () => {
  return (
    <>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Menu%20group%20salama/ehklbo86e9mcefxvrbxr" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Menu%20group%20salama/y7u9srzcg7x47pub2kbf" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Menu%20group%20salama/bkvedlpwnet2njazs2z5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Menu%20group%20salama/a7ajvhbtcyb8wtap96nw" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Menu%20group%20salama/gfrvahutf5rnz1vkmpzx" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Menu%20group%20salama/bkvedlpwnet2njazs2z5" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slides;
