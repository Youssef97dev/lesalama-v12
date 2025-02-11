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
          <img src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/menu%20group%20salama%20v2/izansgrgyoohfvh8saia" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/menu%20group%20salama%20v2/itjdxpweehgruwmwbkg9" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/menu%20group%20salama%20v2/t5c1wl17obzd6qquqgcy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/menu%20group%20salama%20v2/vqxkltibkq2npsnmbukx" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/menu%20group%20salama%20v2/i1kbrsui0kmbjq3eehzq" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slides;
