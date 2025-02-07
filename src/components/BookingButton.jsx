"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { IoChatbubblesOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { FaInstagram, FaWhatsapp, FaMailBulk } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

const BookingButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const { t } = useTranslation();
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Render nothing if on the event page
  if (pathname === "/events") {
    return null;
  }
  return (
    isClient && (
      <div className="relative w-full flex justify-center items-center gap-2 p-2">
        <Link
          href="https://www.sevenrooms.com/explore/lessalamamarrakech/reservations/create/search/"
          target="_blank"
          className="w-[85%] py-3 rounded bg-primary text-primary_1 text-center text-[16px] leading-[24px] font-medium uppercase"
        >
          {t("menu.book")}
        </Link>
        <div
          className="w-[15%] py-3 rounded bg-primary text-primary_1 flex justify-center items-center cursor-pointer transition-all duration-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <AiOutlineClose
              size={24}
              className="transform transition-transform duration-500 rotate-180"
            />
          ) : (
            <IoChatbubblesOutline
              size={24}
              className="transform transition-transform duration-300 rotate-0"
            />
          )}
        </div>

        <Link
          href="http://wa.me/212675480018"
          target="_blank"
          className={`fixed bottom-[3.5rem] w-fit px-4 py-3 m-2  rounded bg-black text-primary_1 flex ${
            isOpen ? "right-0" : "-right-80"
          } justify-center items-center cursor-pointer transition-all duration-300 ease-in-out`}
        >
          <FaWhatsapp size={24} />
        </Link>

        <Link
          href="https://www.instagram.com/lesalamamarrakech/"
          target="_blank"
          className={`fixed bottom-[7rem] w-fit px-4 py-3 m-2  rounded bg-black text-primary_1 flex ${
            isOpen ? "right-0" : "-right-80"
          } justify-center items-center cursor-pointer transition-all duration-300 ease-in-out`}
        >
          <FaInstagram size={24} />
        </Link>

        <Link
          href="mailto:reservations@lesalamamarrakech.com"
          target="_blank"
          className={`fixed bottom-[10.5rem] w-fit px-4 py-3 m-2  rounded bg-black text-primary_1 flex ${
            isOpen ? "right-0" : "-right-80"
          } justify-center items-center cursor-pointer transition-all duration-300 ease-in-out`}
        >
          <FaMailBulk size={24} />
        </Link>
      </div>
    )
  );
};

export default BookingButton;
