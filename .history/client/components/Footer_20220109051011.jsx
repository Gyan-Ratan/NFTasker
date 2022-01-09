import React from "react";
import {LinkProps} from 'next/link'
// import logo from "../../images/logo.png";
import Link from 'next/link'
const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <div className="border-2">
          <Link href="/" className="flex flex-row items-center flex-1 text-center">
            <h1 className="text-3xl text-white text-x-bold  p-3 ">N | </h1>
            <h3 className="text-white px-2">N F T a s k e r </h3>
          </>
        </div>
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
       
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Wallets
        </p>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">
        Come join us and hear for the unexpected miracle
      </p>
      {/* <p className="text-white text-sm text-center font-medium mt-2">info@kryptomastery.com</p> */}
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">@2022</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;
