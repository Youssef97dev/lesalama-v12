import React from "react";
import Details from "./components/Details";
import Mapbox from "./components/MapBox";

const page = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row-reverse justify-start gap-5 lg:justify-between items-center pb-28 px-2 lg:px-80 text-primary">
      <Mapbox />
      <Details />
    </div>
  );
};

export default page;
