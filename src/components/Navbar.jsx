import React from "react";
import LogoNetflix from "../assets/Netflix_Logo_RGB.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-2 md:px-7 z-[100] absolute w-full">
      <img
        className="cursor-pointer md:w-[225px] md:h-[90px] w-[120px] h-[75px]"
        src={LogoNetflix}
        alt=""
      />
      <div>
        <button className="text-white px-4 py-[4px] mr-2 md:mr-7 border border-white md:text-sm text-xs">
          Sign In
        </button>
        <button className="bg-red-600 px-4 py-1 rounded cursor-pointer text-white md:text-sm text-xs">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
