"use client";
import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Loader from "./Loader";
import MainLayout from "./MainLayout";
import Hero from "./Hero";

const Container = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsClient(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isClient ? (
        <BrowserRouter>
          <MainLayout>
            <Hero />
          </MainLayout>
        </BrowserRouter>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Container;
