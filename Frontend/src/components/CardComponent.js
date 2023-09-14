import React from "react";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";

const CardComponent = ({ photo, price }) => {
  return (
    <div className="min-w-[20rem] shadow-md rounded-[0.3rem]">
      <div className="relative">
        <img src={photo} className="rounded-t-[0.3rem]" />
        <div className="absolute right-2 bottom-2 rounded-full text-white text-[30px] group">
          <AiOutlineHeart />
          <AiTwotoneHeart className="text-red-500 absolute top-0 hidden group-hover:flex duration-200 ease-out" />
        </div>
        <div className="absolute bg-[#1a52b8] text-white px-3 py-[2px] rounded-[0.5rem] text-[12px] top-2 left-2"><p>Nuevo</p></div>
      </div>
      <div className="mt-2 ml-4 text-[15px]">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-green-600 rounded-full mr-1"></div>
          <p>Casa habitación familiar</p>
        </div>

        <p className="text-[22px] font-bold">{price}</p>
        <div className="space-x-1">
          <div className="flex">
            <span className="font-bold pr-1 pl-1">5</span>bed
            <span className="font-bold pr-1 pl-1">3</span>bath
            <span className="font-bold pr-1 pl-1">3,747</span>sqft
            <span className="font-bold pr-1 pl-1">8,655</span>sqft lot
          </div>
          <p>2052 Superior Ct</p>
          <p>Tracy, CA 95304</p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
