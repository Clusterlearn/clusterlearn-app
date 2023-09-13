import React from "react";
import heroimage from "../../../src/asset/heroimage.png";
import "./Hero_Section1.css";

function Hero_Section1() {
  return (
    <>
      <section
        id="home"
        className="grid grid-cols-1 items-start justify-between gap-12 px-6 py-10 md:grid-cols-2 md:py-16 md:px-10 md:items-center xl:gap-38 xl:py-20 xl:px-10 xl:items-start"
      >
        <div className="flex flex-col gap-3">
          <p className="text-sm text-logo-left xl:text-xl md:text-base  font-ver font-normal">
            FROM DIFFERENT PLATFORM WE
          </p>
          <div className="flex justify-between text-logo-left font-ver font-normal">
            <h1 className="xl:text-[65px] md:text-3xl sm:text-[25px] xl:mb-12 md:mb-4 sm:mb-0">
              JOIN
              <span className="text-[#E76F51] ml-3">LEARNERS</span>
            </h1>
          </div>
          <div className="flex justify-between text-logo-left font-ver font-normal">
            <h1 className="xl:text-[65px] md:text-3xl sm:text-[25px]">
              WITH <span className="text-[#2A9D8F] ml-1">MENTORS</span>
            </h1>
          </div>
          {/* <img src={rectanglarLine} alt=""/> */}
          <p className="text-md md:text-xl md:mt-5">
            Connect with other learners, ask questions, share tips, get
            motivated and get matched with mentors.
          </p>
          <form
            action=""
            method="post"
            className="flex flex-col gap-3 mt-6 md:mt-10 xl:relative"
          >
            <input
              type="text"
              name=""
              id=""
              placeholder="Paste the URL of the online course"
              className="px-4 py-3 rounded-full text-logo-left outline  focus:px-6 placeholder:px-5 placeholder:text-lg placeholder:italic placeholder:text-slate-400 border-2 xl:p-5 xl:relative"
            />
            <button
              type="submit"
              className="pointer px-4 py-3 rounded-full bg-[#E76F51] text-white xl:absolute xl:inset-y-0 right-0 xl:m-2 xl:px-8 "
            >
              JOIN
            </button>
          </form>
        </div>
        <img src={heroimage} alt="" className="rounded-full mx-auto xl:w-2/3" />
      </section>
    </>
  );
}

export default Hero_Section1;
