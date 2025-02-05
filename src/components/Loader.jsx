import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center">
      {/* Initial white background animation */}
      <div className="absolute inset-0 flex z-50">
        <div className="bg-color_1  flex-1 animate-slide-left"></div>
        <div className="bg-color_1  flex-1 animate-slide-right"></div>
      </div>

      {/* Beige background with logo animation */}
      <div className="absolute inset-0 bg-color_2 flex items-center justify-center">
        <img
          src="/logo-salama-humberger-white.png" // Replace with your logo path
          alt="Logo"
          className="w-32 h-32 animate-scale-3d"
        />
      </div>
    </div>
  );
};

export default Loader;
