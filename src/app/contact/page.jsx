import React from "react";
import Details from "./components/Details";
import Mapbox from "./components/MapBox";

const page = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-start lg:justify-between items-center px-5 lg:px-96 text-primary">
      <Details />
      <Mapbox />
    </div>
  );
};

export default page;
