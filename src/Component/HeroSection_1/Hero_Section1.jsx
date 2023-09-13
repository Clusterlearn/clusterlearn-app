import React from "react";
import heroimage from "../../../src/asset/heroimage.png";
// import { ReactComponent as HeroWoman } from "../../../src/asset/hero1.svg";
import "./Hero_Section1.css"
// import AppContainer1 from "../AppContainer1/AppContainer1";


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

//    <div
//           id="home"
//           className=" relative md:flex lg:justify-center md:justify-center lg:items-center md:items-center md:gap-28 gap-0 overflow-hidden"
//         >

// //  <div className="lg:-mt-20 lg:text-start md:text-start sm:mt-20 ">
// //             <p className="md:my-7 lg:my-7 my-3 text-logo-left lg:text-[16] md:text-base  font-ver font-normal sm:text-[12px] sm:text-[#0F172A]">
// //               FROM DIFFERENT PLATFORM WE
// //             </p>
        //  lg:space-y-12 md:space-y-12 space-y-2 text-logo-left lg:text-[72px] md:text-3xl sm:text-[32px] font-ver font-normal */} */}
            // <div className="flex justify-between text-logo-left font-ver font-normal">
            //   <h1 className="lg:text-[75px] md:text-3xl sm:text-[32px] lg:mb-12 md:mb-10 sm:mb-0">
            //     JOIN
            //     <span className="text-[#E76F51] ml-5">LEARNERS</span>
            //   </h1>
            // </div>
            // <div className="flex justify-between text-logo-left font-ver font-normal">
            //   <h1 className="lg:text-[75px] md:text-3xl sm:text-[32px]">
            //     WITH <span className="text-[#2A9D8F] ml-1">MENTORS</span>
            //   </h1>
            // </div>
            // <p className="lg:my-7 md:my-7 my-3 text-logo-left py-4 lg:py-0 md:py-0 lg:text-[16px] md:text-base sm:text-[14px] sm:text-[#0F172A] sm:opacity-50 text-sm font-ver font-normal">
            //   Connect with other learners, ask questions, share tips, get
            //   motivated, and get matched with mentors.
            // </p>
          //  Input section
            // <div className="lg:relative md:relative">
              // <input
              //   type="text"
              //   name=""
              //   id=""
              //   placeholder="Paste the URL of the online course"
              //   className="outline border-2 w-full h-20 rounded-full focus:px-5 placeholder:px-3 placeholder:text-lg placeholder:italic placeholder:text-slate-400"
              // ></input>
              // <button
              //   type="submit"
              //   className="bg-[#E76F51] text-white p-3 lg:w-32 lg:-mt-0 h-16 items-center rounded-full lg:absolute md:absolute right-1 top-2 sm:w-full sm:mt-5"
              // >
              //   JOIN
              // </button>
          //   </div>

          // </div>
          // <div className="md:shrink-0">
          //   <div className="line sm:hidden"></div>
          //   <HeroWoman

          //     className=" w-full object-cover lg:h-[676px] md:h-[676px] lg:w-[451px] md:w-[451px] lg:rounded-[19rem] md:rounded-[19rem] rounded-[19rem]  sm:mt-10"

          //   />
          // </div>


export default Hero_Section1;
