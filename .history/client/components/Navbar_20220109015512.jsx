import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
// import {Router,Route } from 'react-router-dom'
import { Login } from "../pages/Login";
import logo from "../assets/logo.png";
import { useMoralis } from "react-moralis";

const NavbarItem = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer${classProps}`}>{title}</li>;
};
const { authenticate } = useMoralis();
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="">
      <nav className="w-full flex md:justify-center justify-between items-center p-4">
        <div className="md:flex-[0.5] flex-initial justify-center items-center">
          <div className="flex flex-row items-center text-center flex-1  ">
            <div className="border-2">
              <a
                href="/"
                className="flex flex-row items-center flex-1 text-center"
              >
                <h1 className="text-3xl text-white text-x-bold  p-3 ">N | </h1>
                <h3 className="text-white px-2">N F T a s k e r</h3>
              </a>
            </div>
          </div>
        </div>
        <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
          <NavbarItem title="Wallets" classProps=" " />

          <button
            onClick={authenticate}
            className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]"
          >
            Login
          </button>
        </ul>
        <div className="flex relative">
          {toggleMenu ? (
            <AiOutlineClose
              fontSize={28}
              className="text-white md:hidden cursor-pointer"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <HiMenuAlt4
              fontSize={28}
              className="text-white md:hidden cursor-pointer"
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <ul
              className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
                        flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
            >
              <li className="text-xl w-full my-2">
                <AiOutlineClose onClick={() => setToggleMenu(false)} />
              </li>
              {["Market", "Exchange", "Tutorials", "Wallet"].map(
                (item, index) => (
                  <NavbarItem
                    key={item + index}
                    title={item}
                    classProps={"my-2 text-lg"}
                  />
                )
              )}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
