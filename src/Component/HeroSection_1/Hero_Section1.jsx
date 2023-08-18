import React from "react";
import { ReactComponent as HeroWoman } from "../../../src/asset/hero1.svg";
// import { ReactComponent as WomenImage } from "../../../src/asset/WomenImage.webp";
// import WomenImage from "../../../src/asset/WomenImage.webp";
import "./Hero_Section1.css"
import AppContainer1 from "../AppContainer1/AppContainer1";

function Hero_Section1() {
  return (
    <div>
      <AppContainer1>
        <div
          id="home"
          className="relative md:flex justify-center items-center md:justify-between md:items-center md:gap-28 gap-0 overflow-hidden"
        >
          <div className="mt-6 text-center md:text-start ">
            <p className="md:my-7 my-3 text-logo-left md:text-base text-sm font-ver font-normal">
              FROM DIFFERENT PLATFORM WE
            </p>
            <h1 className="md:space-y-8 space-y-2 text-logo-left md:text-5xl text-3xl font-ver font-normal">
              JOIN <span className="text-[#E76F51]">LEARNERS</span>
              <h1 className="">
                WITH <span className="text-[#2A9D8F]">MENTORS</span>
              </h1>
            </h1>
            <p className="md:my-7 my-3 text-logo-left py-4 md:py-0 md:text-start text-center md:text-base text-sm font-ver font-normal">
              Connect with other learners, ask questions, share tips, get
              motivated, and get matched with mentors.
            </p>
            {/* Input section */}
            <div className="relative">
              <input
                type="text"
                name=""
                id=""
                placeholder="Paste the URL of the online course"
                className="outline border-2 w-full h-20 rounded-full focus:px-5 placeholder:px-3 placeholder:text-lg placeholder:italic placeholder:text-slate-400"
              ></input>
              <button
                type="submit"
                className="bg-[#E76F51] text-white p-3 w-32 h-16 items-center rounded-full absolute right-1 top-2"
              >
                JOIN
              </button>
            </div>
          </div>

          <div className="md:shrink-0">
            <div className="line sm:hidden"></div>
            <HeroWoman
              style={{ borderRadius: "19rem 19rem 19rem 19rem" }}
              className="w-full object-cover h-[667px] md:h-full md:w-[558px] md:mt-28 sm:mt-10"
              // className="w-full sm:h-[316px] md:h-[408px] md:w-[452px] sm:w-[253px] lg:w-[558px] lg:h-[667px] object-cover sm:mt-10"
            />
          </div>
        </div>
      </AppContainer1>
    </div>
  );
}

export default Hero_Section1;
