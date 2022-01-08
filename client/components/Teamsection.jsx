import React from "react";
const Teamsection = () => {
  return (
      <div className="w-full flex md:justify-center justify-between items-center p-4">
    <div className="flex felx-col flex-1 text-bold from-neutral-200 uppercase ">
      <div className="grid grid-cols-4 text-white   p-2 gap-6 place-content-center items-center bg-glassmorphism-welcome">
     
          <div className=" white-glassmorphism space-x-2 space text-center align-middle">
            <div className="">
              <img
                className=" "
                src="https://www.notion.so/cdn-cgi/image/format=auto,width=664,quality=100/front-static/pages/product/home-page-hero-refreshed-v3.png"
              ></img>
              <h1 className="text-center  p-2">individual</h1>
            </div>
          </div>
          <div className=" white-glassmorphism space-x-2 space">
            <div className="">
              <img
                className=""
                src="https://www.notion.so/cdn-cgi/image/format=auto,width=664,quality=100/front-static/pages/product/home-page-hero-refreshed-v3.png"
              ></img>
              <h1 className="text-center font-thin  p-2 ">Join Team</h1>
            </div>
          </div>
          <div className=" white-glassmorphism space-x-2 space">
            <div className="">
              <img
                className=""
                src="https://www.notion.so/cdn-cgi/image/format=auto,width=664,quality=100/front-static/pages/product/home-page-hero-refreshed-v3.png"
              ></img>
              <h1 className="text-center md:text-sm  p-2">Join Organisation</h1>
            </div>
          </div>
          <div className=" white-glassmorphism space-x-2 space">
            <div className="">
              <img
                className=""
                src="https://www.notion.so/cdn-cgi/image/format=auto,width=664,quality=100/front-static/pages/product/home-page-hero-refreshed-v3.png"
              ></img>
              <h1 className="text-center  p-2  md:text-sm  ">Win NFTs</h1>
            </div>
          </div>
        </div>
      </div>
      </div>
  
  );
};

export default Teamsection;
