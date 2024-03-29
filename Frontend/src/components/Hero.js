import React from "react";
import houses from "../assets/wp11143511.jpg";
import HeroBtn from "./HeroBtn";
import { RiSearchLine } from "react-icons/ri";

const Hero = () => {
  const buttons = [
    { title: "COMPRA", },
    { title: "VENDIDAS" },
    { title: "AVALUO" },
  ];
  return (
    <div className="h-[25rem] sm:h-[27rem] flex bg-red-400 overflow-hidden">
      <div className="absolute  w-full z-20     ">
        <div className="bg-gray-900/10 absolute z-10 w-full h-[25rem]  "></div>
        <img
          src={houses}
          className="object-cover w-full  h-[27rem] sm:h-[27rem] "
        />
      </div>
      <div className="relative z-30 flex flex-col items-center w-full pt-12">
        <p className="text-white text-[32px] sm:text-[57px] font-bold">
          Busca la casa de tus sueños
        </p>
        <p className="text-white  pt-2 sm:pt-0  sm:text-[23px]  ">
          Nosotros haremos la magia por ti
        </p>
        <ul className="">
          <div className="pt-8 flex space-x-4 sm:space-x-2">
            {buttons.map((button) => (
              <HeroBtn
                title={button.title}
                underline={button.underline}
                css={button.css}
              />
            ))}
          </div>
        </ul>
        {/* Input */}
        <div className="relative mt-9  ">
          <input
            type="search"
            className="bg-white py-4  w-[28rem] sm:w-[37rem] rounded-full pl-5 placeholder:text-gray-500 placeholder:text-[20px] outline-0 "
            placeholder="Dirección, ciudad, estado o código postal"
          />
          <div className="absolute w-[2.7rem] h-[2.7rem] rounded-full  bg-[#4bb6b7] top-[0.4rem] right-1 flex items-center justify-center">
            <RiSearchLine className="text-white text-[22px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
