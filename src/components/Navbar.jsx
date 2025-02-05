"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { Transition } from "@headlessui/react";
import {
  FaWhatsappSquare,
  FaInstagramSquare,
  FaMailBulk,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="fixed left-0 top-0 z-20 w-[25%] h-full lg:flex flex-col justify-between items-start gap-7 px-3 bg-gradient-to-r from-primary_2 to-transparent hidden">
        <div className="w-fit flex justify-start items-start">
          <Image
            src="/logo-salama-humberger.png"
            width={180}
            height={180}
            className="cursor-pointer w-52 h-52 z-30"
          />
        </div>
        <ul className="w-1/2 flex flex-col justify-start items-start gap-4 text-[18px] leading-[24px] uppercase font-light px-6">
          <li className="w-full px-3 py-2 hover:bg-primary hover:text-primary_1 transition-colors duration-150 ease-in-out">
            <Link href="/">Home</Link>
          </li>
          <li className="w-full px-3 py-2 hover:bg-primary hover:text-primary_1 transition-colors duration-150 ease-in-out">
            <Link href="/about">About</Link>
          </li>
          <li className="w-full px-3 py-2 hover:bg-primary hover:text-primary_1 transition-colors duration-150 ease-in-out">
            <Link href="/">Menu</Link>
          </li>
          <li className="w-full px-3 py-2 hover:bg-primary hover:text-primary_1 transition-colors duration-150 ease-in-out">
            <Link href="/">Gallery</Link>
          </li>
          <li className="w-full px-3 py-2 hover:bg-primary hover:text-primary_1 transition-colors duration-150 ease-in-out">
            <Link href="/">Events</Link>
          </li>
          <li className="w-full px-3 py-2 hover:bg-primary hover:text-primary_1 transition-colors duration-150 ease-in-out">
            <Link href="/">Contact</Link>
          </li>
          <li className="w-full flex justify-start items-center gap-4 px-3 py-2">
            <Link href="#">
              <img src="/english.png" className="w-7 h-7" />
            </Link>
            <Link href="#">
              <img src="/france.png" className="w-7 h-7" />
            </Link>
          </li>
        </ul>
        <div className="w-1/2 flex flex-col justify-center items-center bg-black">
          <Link
            href="/"
            className="w-full bg-primary_9 text-primary_1 text-center py-3"
          >
            Book
          </Link>
          <div className="w-full bg-primary_2 text-black py-3 flex justify-evenly items-center">
            <Link href="#">
              <FaWhatsappSquare size={25} color="#128c7e" />
            </Link>
            <Link href="#">
              <FaInstagramSquare size={25} color="#ec0075" />
            </Link>
            <Link href="#">
              <FaMailBulk size={25} color="#034fa0" />
            </Link>
          </div>
        </div>
      </nav>

      <nav className="fixed z-30 left-0 top-0 w-full flex justify-between items-center py-1 px-5 bg-primary_2 lg:hidden">
        <div className="w-fit flex justify-center items-center">
          <Image
            src="/logo-salama-humberger.png"
            width={150}
            height={150}
            className="cursor-pointer w-20 h-20"
          />
        </div>
        <div
          className="text-black transition-transform duration-500 pl-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <AiOutlineClose
              size={30}
              className="transform transition-transform duration-500 rotate-180"
            />
          ) : (
            <CiMenuBurger
              size={30}
              className="transform transition-transform duration-300 rotate-0"
            />
          )}
        </div>
      </nav>

      {/* Full-screen mobile menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-700"
        enterFrom="transform -translate-y-full opacity-0"
        enterTo="transform translate-y-0 opacity-100"
        leave="transition ease-in duration-500"
        leaveFrom="transform translate-y-0 opacity-100"
        leaveTo="transform -translate-y-full opacity-0"
      >
        <div className="fixed top-6 right-0 z-20 w-full h-screen bg-primary_2 flex flex-col items-center justify-center gap-10">
          <ul className="w-1/2 flex flex-col justify-center items-center text-center text-[18px] leading-[24px] uppercase px-6">
            <li className="w-full px-3 py-2 hover:bg-primary hover:text-primary_1 transition-colors duration-150 ease-in-out">
              <Link href="/">Home</Link>
            </li>
            <li className="w-full px-3 py-2 hover:bg-primary hover:text-primary_1 transition-colors duration-150 ease-in-out">
              <Link href="/about">About</Link>
            </li>
            <li className="w-full px-3 py-2 hover:bg-primary hover:text-primary_1 transition-colors duration-150 ease-in-out">
              <Link href="/">Menu</Link>
            </li>
            <li className="w-full px-3 py-2 hover:bg-primary hover:text-primary_1 transition-colors duration-150 ease-in-out">
              <Link href="/">Gallery</Link>
            </li>
            <li className="w-full px-3 py-2 hover:bg-primary hover:text-primary_1 transition-colors duration-150 ease-in-out">
              <Link href="/">Events</Link>
            </li>
            <li className="w-full px-3 py-2 hover:bg-primary hover:text-primary_1 transition-colors duration-150 ease-in-out">
              <Link href="/">Contact</Link>
            </li>
            <li className="w-full flex justify-center items-center gap-4 px-3 py-2">
              <Link href="#">
                <img src="/english.png" className="w-7 h-7" />
              </Link>
              <Link href="#">
                <img src="/france.png" className="w-7 h-7" />
              </Link>
            </li>
          </ul>
          <div className="w-1/2 flex flex-col justify-center items-center gap-3">
            <Link
              href="/"
              className="w-full bg-primary_9 text-primary_1 text-center py-3"
            >
              Book
            </Link>
            <div className="w-full bg-primary_2 text-black py-3 flex justify-evenly items-center">
              <Link href="#">
                <FaWhatsappSquare size={25} color="#128c7e" />
              </Link>
              <Link href="#">
                <FaInstagramSquare size={25} color="#ec0075" />
              </Link>
              <Link href="#">
                <FaMailBulk size={25} color="#034fa0" />
              </Link>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
};

export default Navbar;
