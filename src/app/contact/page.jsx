import React from "react";
import Details from "./components/Details";
import Mapbox from "./components/MapBox";
import ContactForm from "./components/ContactForm";

const page = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-2 pb-28 px-2 lg:px-80">
      <div className="w-full flex flex-col lg:flex-row-reverse justify-start gap-5 lg:justify-between items-center text-primary">
        <Mapbox />
        <Details />
      </div>

      <ContactForm />
    </div>
  );
};

export default page;
