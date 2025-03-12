import React, { useState } from "react";

import { LOGO2, manish } from "../assets";
import Typewriter from "react-ts-typewriter";
import { Link } from "react-router-dom";

const Footer = () => {
  const [active, setActive] = useState("");

  return (
    <div className="bg-black-200 sm:px-16 px-6 sm:py-12 py-10 min-h-[250px] mt-20">
      <div className="flex justify-center items-center gap-4">
        <Link
          to="/"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
          
        >
          <img src={manish} alt="logo" className="w-14 h-14 object-contain rounded-full" />
        </Link>
        <p className="text-secondary text-[17px] leading-[30px] text-center select-none">
          {new Date().getFullYear()} &copy; Created by Manish keer. All rights
          reserved.
        </p>
      </div>
      <div className="w-full h-auto flex justify-center text-purple-500 font-bold self-start text-2xl">
        <Typewriter
          text={[
            "Thank's for visiting!",
            "Download my resume!",
            "<Love to Code/>",
          ]}
          loop
          speed={80}
          cursor={false}
        />
      </div>
    </div>
  );
};

export default Footer;
