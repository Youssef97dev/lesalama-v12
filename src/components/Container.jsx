"use client";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import Hero from "./Hero";

const Container = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsClient(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return <>{isClient ? <Hero /> : <Loader />}</>;
};

export default Container;
