"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Guests = () => {
  const { t } = useTranslation();
  return (
    <div className="relative w-full h-screen">
      <Image
        src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/d1gdfswhhqvzjnpa6lng"
        alt={`Guests Page`}
        layout="fill"
        objectFit="cover"
        className="object-cover w-full h-full "
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <div className="w-full flex flex-col justify-center items-center gap-5 text-white">
          <img
            src="/logo-salama-humberger-white.png"
            alt="Logo"
            className="mb-4 w-44 h-44"
          />
          <div className="w-full flex justify-center items-center">
            <input
              type="text"
              placeholder={t("events.placeholder")}
              className="p-3 text-black focus:outline-none"
            />
            <button className="py-3 px-4 bg-[#CA8A04]">
              {t("events.button")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guests;
