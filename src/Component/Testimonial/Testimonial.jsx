import React from "react";
import GoodFace from "../../../src/asset/good-faces.png";
import AppContainer1 from "../AppContainer1/AppContainer1";
import Button from "../Button/Button";

function Testimonial() {


  return (
    <AppContainer1>
      <div>
        <div id="testimonial" className="md:flex md:flex-row gap-10 w-full mt-40 overflow-hidden">
          <span className=" max-w-1/2 lg:bg-testimonial-color-bg-1 md:bg-testimonial-color-bg-1 w-[660px] h-[512px] rounded-xl"
          >
            <h1 className=" sm:text-[14px] font-ver font-normal md:leading-[45px] lg:leading-[45px] text-center px-5 py-20 md:w-[540px] lg:w-[540px] nmd:h-[220px] lg:h-[220px] text-darkblue md:text-[28px] lg:text-[28px]">
              “I have connected with up to 10 groups through my development
              process. And my groups has been so helpful throughout”
            </h1>
            {/* image and text */}
            <div className="flex px-7 lg:mt-20 md:mt-0 sm:mt-0">
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
          </span>

          <span className="max-w-1/2 bg-testimonial-color-bg-2 w-[660px] h-[512px] rounded-xl">
            <h1 className="sm:text-[14px] font-ver font-normal md:leading-[45px] lg:leading-[45px] text-center px-5 py-20 md:w-[540px] lg:w-[540px] nmd:h-[220px] lg:h-[220px] text-darkblue md:text-[28px] lg:text-[28px]">
              “I have connected with up to 10 groups through my development
              process. And my groups has been so helpful throughout”
            </h1>
            {/* image and text */}
            <div className="flex px-7 lg:mt-20  md:mt-0 sm:mt-0">
              <img
                style={{ borderRadius: "3rem 3rem 3rem 3rem" }}
                src={GoodFace}
                alt="face"
              />
              <span className="flex flex-col gap-3 px-3 mt-10 font-var">
                <h1 className=" text-darkblue font-normal lg:text-[24px] md:text-[24px] sm:text-[14px] lg:leading-[30px] md:leading-[30px] sm:leading-[20px]">
                  Chioma Idris
                </h1>
                <p className="text-custom-color text-base font-normal">
                  Data Analyst
                </p>
              </span>
            </div>
          </span>
        </div>
        {/* view more button */}
        <div className="flex items-center justify-center mt-10">
          <Button
            text={"View more"}
            textColor={"#E76F51"}
            width={"124px"}
            height={"46px"}
            padding={"10px"}
            borderWidth={1}
            borderRadius={40}
            borderColor={"#E76F51"}
          />
        </div>
      </div>
    </AppContainer1>
  );
}

export default Testimonial;
