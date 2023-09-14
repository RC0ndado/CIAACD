import React from "react";
import { FiMenu } from "react-icons/fi";
import { HiOutlineUser } from "react-icons/hi";
import logo from "../assets/azulSinFondo.png";
import NavBtn from "./NavBtn";

const Navbar = () => {
  const buttons = [
    { title: "Compra", underline: "-bottom-[1.3rem]" },
    { title: "Venta", underline: "-bottom-[1.3rem]" },
    { title: "Renta", underline: "-bottom-[1.3rem]" },
    { title: "My Home", underline: "-bottom-[1.3rem]" },
    { title: "Propiedades más vistas", underline: "-bottom-[1.3rem]" },
    {
      title: "Aviso de privacidad",
      border: "border p-1 rounded-[0.3rem] border-gray-400",
    },
  ];
  return (
    <div className="bg-white">
      {" "}
      <div className="flex  justify-between  px-4 items-center max-w-[98vw] sm:max-w-[90vw]  lg:max-w-[85vw]  mx-auto whitespace-nowrap">
        {/* Left Menu */}
        <div className=" lg:hidden flex items-center ">
          <FiMenu className="w-7 h-7" />
        </div>
        {/* Mid Logo */}
        <div className="shrink-0 pr-2">
          {/* Logo */}
          <div className=" -my-[0.7rem] ">
            <img src={logo} className="w-32  shrink-0" />
          </div>
        </div>
        {/* Links */}
        <div className="hidden lg:flex   ">
          <ul className="flex   space-x-1 items-center     py-4 ">
            {buttons.map((button) => (
              <NavBtn
                title={button.title}
                border={button.border}
                underline={button.underline}
              />
            ))}
          </ul>
        </div>
        {/* Right Authentification */}
        <div className="flex h-full items-center  lg:hidden">
          <div className="w-10 h-10 bg-[#4bb6b7] rounded-full text-white flex items-center justify-center ">
            <HiOutlineUser className="text-[28px] " />
          </div>
        </div>

        <div className="hidden lg:flex   items-center pl-6 text-[15px]">
          <button>Iniciar sesión</button>
          <div className="   bg-[#4bb6b7] py-[6px] text-white rounded-full px-4 ml-6 flex items-center ">
            <button>Registrarse</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
