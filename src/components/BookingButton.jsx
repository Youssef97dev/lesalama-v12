"use client";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoChatbubblesOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { FaInstagram, FaWhatsapp, FaMailBulk } from "react-icons/fa";

const BookingButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative w-full flex justify-center items-center gap-2 p-2">
      <Link
        to="#"
        className="w-[90%] py-3 rounded bg-primary text-primary_1 text-center text-[16px] leading-[24px] font-medium"
      >
        BOOK
      </Link>
      <div
        className="w-[10%] py-3 rounded bg-primary text-primary_1 flex justify-center items-center cursor-pointer transition-all duration-500"
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
        to=""
        className={`fixed bottom-[3.5rem] w-fit px-4 py-3 m-2  rounded bg-black text-primary_1 flex ${
          isOpen ? "right-0" : "-right-80"
        } justify-center items-center cursor-pointer transition-all duration-300 ease-in-out`}
      >
        <FaWhatsapp size={24} />
      </Link>

      <Link
        to=""
        className={`fixed bottom-[7rem] w-fit px-4 py-3 m-2  rounded bg-black text-primary_1 flex ${
          isOpen ? "right-0" : "-right-80"
        } justify-center items-center cursor-pointer transition-all duration-300 ease-in-out`}
      >
        <FaInstagram size={24} />
      </Link>

      <Link
        to=""
        className={`fixed right-0 bottom-[10.5rem] w-fit px-4 py-3 m-2  rounded bg-black text-primary_1 flex ${
          isOpen ? "right-0" : "-right-80"
        } justify-center items-center cursor-pointer transition-all duration-300 ease-in-out`}
      >
        <FaMailBulk size={24} />
      </Link>
    </div>
  );
};

export default BookingButton;
