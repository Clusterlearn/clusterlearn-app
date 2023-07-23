import React from "react";
import { ReactComponent as HeroWoman } from "../../../src/asset/hero1.svg";
import "./Hero_Section1.css"
import AppContainer1 from "../AppContainer1/AppContainer1";

function Hero_Section1() {
  return (
    <div>
      <AppContainer1>
          <div id="home" className="flex flex-row flex-nowrap justify-between gap-20 w-full h-full  mt-28">
            <div className="h-44 w-2/5 space-y-10">
              <p className="text-logo-left text-base font-ver font-normal">
                FROM DIFFERENT PLATFORM WE
              </p>
              <h1 className=" text-logo-left text-5xl font-ver font-normal">
                JOIN <span className="text-[#E76F51]">LEARNERS</span>
                <h1 className="space-y-10 py-7">WITH <span className="text-[#2A9D8F]">MENTORS</span></h1>
              </h1>
              <p className="text-logo-left text-base font-ver font-normal">
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
                  className="outline border-2 w-[100%] h-20 rounded-full focus:px-5 placeholder:px-3 placeholder:text-lg placeholder:italic placeholder:text-slate-400"
                ></input>
                <button
                  type="submit"
                  className="bg-[#E76F51] text-white p-3 w-32 h-16 items-center rounded-full absolute right-5 top-2"
                >
                  JOIN
                </button>
              </div>
            </div>

            <div className="">
            <div className="line"></div>
              <HeroWoman className="womanImg"/>
            </div>
          </div>

      </AppContainer1>
    </div>
  );
}

export default Hero_Section1;
