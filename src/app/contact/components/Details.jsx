import { FiMapPin } from "react-icons/fi";
import { FaInstagram, FaWhatsapp, FaMailBulk } from "react-icons/fa";

const Details = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-5 px-2 text-primary">
      <h1 className="text-[16px] lg:text-[16px] lg:leading-[24px] leading-[24px] uppercase font-medium">
        Le Salama Restaurant
      </h1>
      <div className="w-full flex justify-start items-center gap-3">
        <FiMapPin size={18} />
        <span>40 Rue des Banques, Marrakech 40000, Maroc</span>
      </div>
      <div className="w-full flex justify-start items-center gap-3">
        <FaInstagram size={18} />
        <span>@lesalamamarrakech</span>
      </div>
      <div className="w-full flex justify-start items-center gap-3">
        <FaWhatsapp size={18} />
        <span>+212 6 75 48 00 18</span>
      </div>
      <div className="w-full flex justify-start items-center gap-3">
        <FaMailBulk size={18} />
        <span>reservations@lesalamamarrakech.com</span>
      </div>
    </div>
  );
};

export default Details;
