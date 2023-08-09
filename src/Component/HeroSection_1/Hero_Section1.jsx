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
          className="grid grid-cols-1 justify-center items-center md:justify-between md:grid-cols-2 gap-36 md:mt-28 mt-18"
          // className="md:flex block flex-col md:flex-row md:flex-nowrap md:justify-between gap-20 w-full h-full md:mt-28 mt-18 md:h-44 h-full md:w-2/5 w-full space-y-20 text-center "
        >
          <div className="md:space-y-12 space-y-0 text-center md:text-start mt-10 md:mt-0">
            <p className="text-logo-left md:text-base text-sm font-ver font-normal">
              FROM DIFFERENT PLATFORM WE
            </p>
            <h1 className=" text-logo-left md:text-5xl text-3xl font-ver font-normal">
              JOIN <span className="text-[#E76F51]">LEARNERS</span>
              <h1 className="space-y-10 py-7">
                WITH <span className="text-[#2A9D8F]">MENTORS</span>
              </h1>
            </h1>
            <p className="text-logo-left md:text-start text-center md:text-base text-sm font-ver font-normal">
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
                className="bg-[#E76F51] text-white p-3 md:w-32 w-22 h-16 items-center rounded-full absolute right-1 top-2"
              >
                JOIN
              </button>
            </div>
          </div>

          <div className="">
            <div className="line hidden"></div>
            {/* <ImageWebp srcWebp={WomenImage.src} /> */}
            <HeroWoman className="w-full womanImg" />
            {/* <WomenImage className="w-full" /> */}
          </div>
        </div>
      </AppContainer1>
    </div>
  );
}

export default Hero_Section1;
