import Link from "next/link";
import Image from "next/image";

const Mapbox = () => {
  return (
    <div className="flex justify-center items-center w-full mt-20 lg:mt-0 ">
      <Link
        href="https://maps.app.goo.gl/Zq999WxGBS6JFBYc8"
        target="_blank"
        className=" w-full"
      >
        <Image
          src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/l2si8ubntyyvkmzpo9vk"
          alt="le salama map"
          width={1000}
          height={500}
          className=" w-full object-cover"
        />
      </Link>
    </div>
  );
};

export default Mapbox;
