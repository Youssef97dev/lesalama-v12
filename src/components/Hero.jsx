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
  "/hero/1.jpg",
  "/hero/2.jpg",
  "/hero/3.jpg",
  "/hero/4.jpg",
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
            url="https://soundcloud.com/trndmusik/sting-desert-rose-zuma-dionys-edit-trndmsk?in=le-salama/sets/le-salama-marrakech&si=e9fef4f93333453a94e2ebd378695db8&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
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
        <div className="absolute w-full h-full flex justify-center items-center">
          <Image
            src="/logo-salama-humberger-white.png"
            alt={`logo le salama`}
            height={180}
            width={180}
            className="object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
