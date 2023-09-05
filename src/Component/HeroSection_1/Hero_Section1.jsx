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
          className=" relative md:flex lg:justify-center md:justify-center lg:items-center md:items-center md:gap-28 gap-0 overflow-hidden"
        >
          <div className="lg:-mt-20 lg:text-start md:text-start sm:mt-20 ">
            <p className="md:my-7 lg:my-7 my-3 text-logo-left lg:text-[16] md:text-base  font-ver font-normal sm:text-[12px] sm:text-[#0F172A]">
              FROM DIFFERENT PLATFORM WE
            </p>
            <h1 className="lg:space-y-8 md:space-y-8 space-y-2 text-logo-left lg:text-[72px] md:text-3xl sm:text-[32px] font-ver font-normal">
              JOIN <span className="text-[#E76F51]">LEARNERS</span>
              <h1 className="">
                WITH <span className="text-[#2A9D8F]">MENTORS</span>
              </h1>
            </h1>
            <p className="lg:my-7 md:my-7 my-3 text-logo-left py-4 lg:py-0 md:py-0 lg:text-[16px] md:text-base sm:text-[14px] sm:text-[#0F172A] sm:opacity-50 text-sm font-ver font-normal">
              Connect with other learners, ask questions, share tips, get
              motivated, and get matched with mentors.
            </p>
            {/* Input section */}
            <div className="lg:relative md:relative">
              <input
                type="text"
                name=""
                id=""
                placeholder="Paste the URL of the online course"
                className="outline border-2 w-full h-20 rounded-full focus:px-5 placeholder:px-3 placeholder:text-lg placeholder:italic placeholder:text-slate-400"
              ></input>
              <button
                type="submit"
                className="bg-[#E76F51] text-white p-3 lg:w-32 lg:-mt-0 h-16 items-center rounded-full lg:absolute md:absolute right-1 top-2 sm:w-full sm:mt-5"
              >
                JOIN
              </button>
            </div>
          </div>

          <div className="md:shrink-0">
            <div className="line sm:hidden"></div>
            <HeroWoman
              style={{ borderRadius: "19rem 19rem 19rem 19rem" }}
              className=" w-full object-cover lg:h-[676px] md:h-[676px] lg:w-[551px] md:w-[551px]  sm:mt-10"
              // className="w-full sm:h-[316px] md:h-[408px] md:w-[452px] sm:w-[253px] lg:w-[558px] lg:h-[667px] object-cover sm:mt-10"
            />
          </div>
        </div>
      </AppContainer1>
    </div>
  );
}

export default Hero_Section1;
