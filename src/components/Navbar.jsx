"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { Transition } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import i18next from "../../i18n";
import {
  FaWhatsappSquare,
  FaInstagramSquare,
  FaMailBulk,
  FaDivide,
} from "react-icons/fa";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  const { t } = useTranslation();

  const changeLanguage = (lang) => {
    localStorage.removeItem("lang");
    i18next.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  useEffect(() => {
    setIsClient(true);
    i18next.changeLanguage(i18next.language);
  }, []);

  // Render nothing if on the event page
  if (pathname === "/guests") {
    return null;
  }
  return (
    isClient && (
      <>
        <nav className="fixed left-0 top-0 z-20 w-[18%] h-screen lg:flex flex-col justify-between items-start gap-7 px-3 bg-gradient-to-r from-primary_2 to-transparent hidden">
          <Link href="/" className="w-fit flex justify-start items-start">
            <Image
              src="/logo-salama-humberger.png"
              width={180}
              height={180}
              className="cursor-pointer w-48 h-48 z-30"
            />
          </Link>
          <ul className="w-[80%] flex flex-col justify-start items-start gap-0 text-[18px] leading-[24px] uppercase font-light px-6">
            <li className="w-full px-3 py-2 hover:bg-primary hover:text-primary_1 transition-all duration-150 ease-in-out">
              <Link href="/">{t("menu.home")}</Link>
            </li>
            <li className="w-full px-3 py-2 hover:bg-primary hover:text-primary_1 transition-all duration-150 ease-in-out">
              <Link href="/about">{t("menu.about")}</Link>
            </li>
            <li className="w-full px-3 py-2 hover:bg-primary hover:text-primary_1 transition-all duration-150 ease-in-out">
              <Link
                target="_blank"
                href="https://www.lesalamamarrakech.com/menu/"
              >
                {t("menu.menu")}
              </Link>
            </li>
            <li className="w-full px-3 py-2 hover:bg-primary hover:text-primary_1 transition-all duration-150 ease-in-out">
              <Link href="/gallery">{t("menu.gallery")}</Link>
            </li>
            <li className="w-full px-3 py-2 hover:bg-primary hover:text-primary_1 transition-all duration-150 ease-in-out">
              <Link href="/guests">{t("menu.events")}</Link>
            </li>
            <li className="w-full px-3 py-2 hover:bg-primary hover:text-primary_1 transition-all duration-150 ease-in-out">
              <Link href="/contact">{t("menu.contact")}</Link>
            </li>
            <li className="w-full flex justify-start items-center gap-4 px-3 py-2">
              <div
                className="cursor-pointer"
                onClick={() => changeLanguage("en")}
              >
                <img src="/english.png" className="w-7 h-7" />
              </div>
              <div
                className="cursor-pointer"
                onClick={() => changeLanguage("fr")}
              >
                <img src="/france.png" className="w-7 h-7" />
              </div>
            </li>
          </ul>
          <div className="w-[80%] flex flex-col justify-center items-center bg-black">
            <Link
              href="https://www.sevenrooms.com/explore/lessalamamarrakech/reservations/create/search/"
              target="_blank"
              className="w-full bg-primary_9 text-primary_1 text-center py-2"
            >
              {t("menu.book")}
            </Link>
            <div className="w-full bg-primary_2 text-black py-2 flex justify-evenly items-center">
              <Link href="http://wa.me/212675480018" target="_blank">
                <FaWhatsappSquare size={25} color="#128c7e" />
              </Link>
              <Link
                href="https://www.instagram.com/lesalamamarrakech/"
                target="_blank"
              >
                <FaInstagramSquare size={25} color="#ec0075" />
              </Link>
              <Link
                href="mailto:reservations@lesalamamarrakech.com"
                target="_blank"
              >
                <FaMailBulk size={25} color="#034fa0" />
              </Link>
            </div>
          </div>
        </nav>

        <nav className="fixed z-30 left-0 top-0 w-full flex justify-between items-center py-1 px-5 bg-primary_2 lg:hidden">
          <Link href="/" className="w-fit flex justify-center items-center">
            <Image
              src="/logo-salama-humberger.png"
              width={150}
              height={150}
              className="cursor-pointer w-20 h-20"
            />
          </Link>
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
              <li
                onClick={() => setIsOpen(false)}
                className="w-full px-3 py-2 hover:bg-primary hover:text-primary_1 transition-colors duration-150 ease-in-out"
              >
                <Link href="/">{t("menu.home")}</Link>
              </li>
              <li
                onClick={() => setIsOpen(false)}
                className="w-full px-3 py-2 hover:bg-primary hover:text-primary_1 transition-colors duration-150 ease-in-out"
              >
                <Link href="/about">{t("menu.about")}</Link>
              </li>
              <li
                onClick={() => setIsOpen(false)}
                className="w-full px-3 py-2 hover:bg-primary hover:text-primary_1 transition-colors duration-150 ease-in-out"
              >
                <Link
                  target="_blank"
                  href="https://www.lesalamamarrakech.com/menu/"
                >
                  {t("menu.menu")}
                </Link>
              </li>
              <li
                onClick={() => setIsOpen(false)}
                className="w-full px-3 py-2 hover:bg-primary hover:text-primary_1 transition-colors duration-150 ease-in-out"
              >
                <Link href="/gallery">{t("menu.gallery")}</Link>
              </li>
              <li
                onClick={() => setIsOpen(false)}
                className="w-full px-3 py-2 hover:bg-primary hover:text-primary_1 transition-colors duration-150 ease-in-out"
              >
                <Link href="/guests">{t("menu.events")}</Link>
              </li>
              <li
                onClick={() => setIsOpen(false)}
                className="w-full px-3 py-2 hover:bg-primary hover:text-primary_1 transition-colors duration-150 ease-in-out"
              >
                <Link href="/contact">{t("menu.contact")}</Link>
              </li>
              <li
                onClick={() => setIsOpen(false)}
                className="w-full flex justify-center items-center gap-4 px-3 py-2"
              >
                <div onClick={() => changeLanguage("en")}>
                  <img src="/english.png" className="w-7 h-7" />
                </div>
                <div onClick={() => changeLanguage("fr")}>
                  <img src="/france.png" className="w-7 h-7" />
                </div>
              </li>
            </ul>
            <div className="w-1/2 flex flex-col justify-center items-center gap-3">
              <Link
                href="https://www.sevenrooms.com/explore/lessalamamarrakech/reservations/create/search/"
                target="_blank"
                className="w-full bg-primary_9 text-primary_1 text-center py-3"
              >
                {t("menu.book")}
              </Link>
              <div className="w-full bg-primary_2 text-black py-3 flex justify-evenly items-center">
                <Link href="http://wa.me/212675480018" target="_blank">
                  <FaWhatsappSquare size={25} color="#128c7e" />
                </Link>
                <Link
                  href="https://www.instagram.com/lesalamamarrakech/"
                  target="_blank"
                >
                  <FaInstagramSquare size={25} color="#ec0075" />
                </Link>
                <Link
                  href="mailto:reservations@lesalamamarrakech.com"
                  target="_blank"
                >
                  <FaMailBulk size={25} color="#034fa0" />
                </Link>
              </div>
            </div>
          </div>
        </Transition>
      </>
    )
  );
};

export default Navbar;
