import React from "react";
import GoodFace from "../../../src/asset/good-faces.png";
import AppContainer1 from "../AppContainer1/AppContainer1";


function Testimonial() {
  return (
    <AppContainer1>
      <div class="grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 sm:gap-5 w-[692px] h-[612px] sm:w-[362px] md:h-full md:w-full">
        <div class="bg-testimonial-color-bg-1 rounded-xl shadow-md xl:mt-20 sm:mt-20  py-8 px-7">
          <h1 className="font-ver text-center font-normal xl:leading-[45px] px-7  text-darkblue lg:text-[28px]  sm:text-[14px] ">
            “I have connected with up to 10 groups through my development
            process. And my groups has been so helpful throughout”
          </h1>

          {/* image and text */}
          <div className="flex lg:mt-20 md:mt-7 sm:mt-7">
            <img
              style={{ borderRadius: "3rem 3rem 3rem 3rem" }}
              src={GoodFace}
              alt="face"
            />
            <span className="flex flex-col gap-3 px-3 mt-10 font-var">
              <h1 className=" text-darkblue font-normal lg:text-[24px] md:text-[24px] sm:text-14px lg:leading-[30px] md:leading-[30px] sm:leading-[20px]">
                Ayomide Frezi
              </h1>
              <p className="text-custom-color text-base font-normal">
                Student at UNILAG
              </p>
            </span>
          </div>
        </div>

        {/* second testimonial section */}
        {/* second testimonial section */}
        <div class="bg-testimonial-color-bg-2 rounded-xl shadow-md xl:mt-20 md:mt-20 sm:mt-0 py-8 px-7">
          <h1 className="font-ver text-center font-normal xl:leading-[45px] text-darkblue  lg:text-[28px]  sm:text-[14px] ">
            “I have connected with up to 10 groups through my development
            process. And my groups has been so helpful throughout”
          </h1>

          {/* image and text */}
          <div className="flex lg:mt-20 md:mt-7 sm:mt-7">
            <img
              style={{ borderRadius: "3rem 3rem 3rem 3rem" }}
              src={GoodFace}
              alt="face"
            />
            <span className="flex flex-col gap-3 px-3 mt-10 font-var">
              <h1 className=" text-darkblue font-normal lg:text-[24px] md:text-[24px] sm:text-14px lg:leading-[30px] md:leading-[30px] sm:leading-[20px]">
                Ayomide Frezi
              </h1>
              <p className="text-custom-color text-base font-normal">
                Student at UNILAG
              </p>
            </span>
          </div>
        </div>
      </div>
    </AppContainer1>
  );
}

export default Testimonial;
