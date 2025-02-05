import Hero from "./components/Hero";
import React from "react";
import About from "./components/About";

const page = () => {
  return (
    <div className="w-full h-full pb-28 flex flex-col justify-start items-start gap-10">
      <Hero />
      <About />
    </div>
  );
};

export default page;
