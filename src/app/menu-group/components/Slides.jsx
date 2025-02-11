"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination, Navigation } from "swiper/modules";

import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

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
        modules={[EffectCube, Navigation]}
        navigation={{
          nextEl: ".swiper-button-next-ex1",
          prevEl: ".swiper-button-prev-ex1",
        }}
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
        <button className="swiper-button-prev-ex1 grid place-content-center left-[41%] lg:-left-16 px-0.5 py-0.5 lg:px-4 lg:py-4 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-[95%] lg:top-1/2 -translate-y-1/2">
          <RiArrowLeftSLine size={25} />
        </button>
        <button className="swiper-button-next-ex1 grid place-content-center right-[41%] lg:-right-16 px-0.5 py-0.5 lg:px-4 lg:py-4 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-[95%] lg:top-1/2 -translate-y-1/2">
          <RiArrowRightSLine size={25} />
        </button>
      </Swiper>
    </>
  );
};

export default Slides;
