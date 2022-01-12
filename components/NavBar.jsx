import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import { Login } from "../pages/Login";
import logo from "../assets/logo.png";
import { useMoralis } from "react-moralis";
import Todo from "./Todo";
import Main from "./Main";
import Onecdot from "./Onecdot";
import LoginMoralis from "./LoginMoralis";
const NavbarItem = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer${classProps}`}>{title}</li>;
};

const NavBar = () => {
  // const { authenticate } = useMoralis();
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="">
      <nav className="w-full flex md:justify-center justify-between items-center p-4">
        <div className="md:flex-[0.5] flex-initial justify-center items-center">
          <div className="flex flex-row items-center text-center flex-1  ">
            <div className="border-2">
              <span className="flex flex-row items-center flex-1 text-center">
                <h1 className="text-3xl text-white text-x-bold  p-3 ">N | </h1>
                <h3 className="text-white px-2">N F T a s k e r</h3>
              </span>
            </div>
          </div>
        </div>
        <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
          <NavbarItem title="Wallets" classProps=" " />

          <button
            // onClick={authenticate}
            className={'py-2 px-7 mx-4 rounded-full cursor-pointer white-glassmorphism hover:'}
          >
            LOGIN
            {/* <LoginMoralis  onClick={`${<Todo/>}`}/> */}
          </button>
          <Onecdot />
          <button className="" logoutOnPress={`${(<Main />)}`}>
            <span className="py-2 px-7 mx-4 rounded-full cursor-pointer white-glassmorphism">Logout</span>
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
              className="z-10 fixed top-0 -right-2 p-3 w-[40vw] h-screen shadow-2xl md:hidden list-none
                        flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
            >
              <li className="text-xl w-full my-2">
                <AiOutlineClose onClick={() => setToggleMenu(false)} />
              </li>
              <li className="text-xl w-full my-2">
                <NavbarItem title="Wallets" className='py-2 px-7 mx-4 rounded-full cursor-pointer white-glassmorphism' classProps=" " />
              </li>
              <li className="text-xl w-full my-2">
                <button
                
                  className=" py-2 px-7 mx-4 rounded-full cursor-pointer white-glassmorphism"
                >
                  LOGIN
                
                </button>
              </li>
              <li className="text-xl w-full my-2"></li>
              <li className="py-2 px-7 mx-4 rounded-full cursor-pointer">
                <button className="py-2 px-7 mx-4 rounded-full cursor-pointer" logoutOnPress={`${(<Main />)}`}>
                  <span className=" py-2 px-7 mx-4 rounded-full cursor-pointer white-glassmorphism ">Logout</span>
                </button>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
