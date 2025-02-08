"use client";
import { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { LuShieldAlert } from "react-icons/lu";
import guests from "../../../data/guestAccess.json";

const Guests = () => {
  const [accessCode, setAccessCode] = useState("");
  const [errorCode, setErrorCode] = useState(false);

  const router = useRouter();

  const { t } = useTranslation();

  const validateGuests = async (code) => {
    const codeExist = await guests.filter((guest) => guest.guestCode === code);
    if (codeExist.length > 0) {
      router.push(`/events?accessCode=${code}`);
    } else {
      setErrorCode(true);
    }
  };

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
              value={accessCode}
              onChange={(e) => setAccessCode(e.target.value)}
              type="text"
              placeholder={t("events.placeholder")}
              className="p-3 text-black focus:outline-none"
            />
            <button
              className="py-3 px-4 bg-[#CA8A04]"
              onClick={() => validateGuests(accessCode)}
            >
              {t("events.button")}
            </button>
          </div>
          {errorCode && (
            <div className="flex justify-center items-center gap-3 px-16 py-2 text-[#DC2626] bg-[#FECACA]">
              <LuShieldAlert size={18} />
              <span className="text-[12.8px]  leading-[20px]  font-medium">
                Incorrect access code
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Guests;
