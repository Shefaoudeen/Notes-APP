import React from "react";
import { Shefa } from "../assets";

const Navbar = () => {
  return (
    <div className="h-[75px] bg-white absolute w-full flex justify-between items-center px-10">
      <div>
        <h1 className="font-bold text-3xl max-md:text-lg">
          {"</>"} Shefa Notes
        </h1>
      </div>
      <div>
        <img src={Shefa} alt="" width={100} className="max-md:scale-75" />
      </div>
    </div>
  );
};

export default Navbar;
