"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";

const images = [
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/yakitd32v7jwvcvm45s2",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/salama_20-min_m92cvb",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/po692czexw9alolb2qll",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/s9ddjvzdlmsosy5zywop",
];

const imagesMobile = [
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/salama-sah-1_bavl73",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/salama-sah-3_l2zn1q",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salamaV10/bgc6cpn0bkmf1rsz2dpd",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salamaV10/ukjkpsvpq0cxkhy7olzt",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 3000ms

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="relative w-full h-screen hidden lg:block">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="object-cover w-full h-full "
            />
          </div>
        ))}

        <div className="absolute w-[20%] h-20 bottom-2 right-2">
          <ReactPlayer
            url="https://soundcloud.com/trending-music-afrno/sets/soul?si=0118046bf1654f32877ee95798ce0c8a&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
            width="100%"
            height="100%"
            config={{
              soundcloud: {
                options: {
                  sharing: true,
                },
              },
            }}
          />
        </div>
      </div>
      <div className="relative w-full h-screen block lg:hidden">
        {imagesMobile.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              height={1000}
              width={500}
              className="object-cover h-screen"
            />
          </div>
        ))}
        <div className="absolute w-[60%] h-16 bottom-16 right-2">
          <ReactPlayer
            url="https://soundcloud.com/trending-music-afrno/sets/soul?si=0118046bf1654f32877ee95798ce0c8a&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
            width="100%"
            height="100%"
            config={{
              soundcloud: {
                options: {
                  sharing: true,
                },
              },
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
