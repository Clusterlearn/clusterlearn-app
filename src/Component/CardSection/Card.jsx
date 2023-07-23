import React from "react";
import Frame from "./Frame";
import Card1 from "../../../src/asset/card1.png";
import Card2 from "../../../src/asset/card-2.png";
import Card3 from "../../../src/asset/card-3.png";
import Card4 from "../../../src/asset/card4.png";
import Card5 from "../../../src/asset/card5.png";
import AppContainer1 from "../AppContainer1/AppContainer1";

function Card() {
  return (
    <div>
      <AppContainer1>
        <div>
          <div id="about" className="flex flex-col-reverse lg:flex-row md:flex-row sm:flex-col-reverse  flex-nowrap justify-between gap-10 w-full h-full  mt-40">
            <div className="flex w-1/2 space-y-8">
              <Frame digit={"01"} color={"#E76F51"} />
              <div className="font-ver mt-5 ml-5">
                <h1 className="text-4xl font-normal leading-9">
                  Connect with other learners
                </h1>
                <p className="mt-20 text-custom-color text-xl font-normal leading-[28px]">
                  Meet other learners who are taking the same course as you and
                  get help and support from each other.
                </p>
              </div>
            </div>
            <div className=" max-h-full">
              <img src={Card1} className="h-auto" alt="card one" />
            </div>
          </div>
          {/* second card */}
          <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col-reverse  flex-nowrap justify-between gap-10 w-full h-full  mt-40">
            <div className="flex w-1/2 space-y-8">
              <Frame digit={"02"} color={"#2A9D8F"} />
              <div className="font-ver mt-5 ml-5">
                <h1 className="text-4xl font-normal leading-9">
                  Ask questions
                </h1>
                <p className="mt-20 text-custom-color text-xl font-normal leading-[28px]">
                  Ask questions about the course material and get answers from
                  other learners or mentors
                </p>
              </div>
            </div>
            <div className=" max-h-full order-first">
              <img src={Card2} alt="card two" />
            </div>
          </div>
          {/* Third card */}
          <div className="flex flex-col-reverse lg:flex-row md:flex-row sm:flex-col-reverse  flex-nowrap justify-between gap-10 w-full h-full  mt-40">
            <div className="flex w-1/2 space-y-8">
              <Frame digit={"03"} color={"#E9C46A"} />
              <div className="font-ver mt-5 ml-5">
                <h1 className="text-4xl font-normal leading-9">Share tips</h1>
                <p className="mt-20 text-custom-color text-xl font-normal leading-[28px]">
                  Share tips and trick that you have learned with other learners
                </p>
              </div>
            </div>
            <div className=" max-h-full">
              <img src={Card3} alt="card 3" />
            </div>
          </div>
          {/* fourth card */}
          <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col-reverse  flex-nowrap justify-between gap-10 w-full h-full  my-40">
            <div className="flex w-1/2 space-y-8">
              <Frame digit={"04"} color={"#0F172A"} />
              <div className="font-ver mt-5 ml-5">
                <h1 className="text-4xl font-normal leading-9">
                  Get motivated
                </h1>
                <p className="mt-20 text-custom-color text-xl font-normal leading-[28px]">
                  Stay motivated and on track with your learning by connecting
                  with other learners who are currently working towards same
                  goals.
                </p>
              </div>
            </div>
            <div className=" max-h-full order-first">
              <img src={Card4} alt="card 4" />
            </div>
          </div>
          {/* fifth card */}
          <div className="flex flex-col-reverse lg:flex-row md:flex-row sm:flex-col-reverse  flex-nowrap justify-between gap-10 w-full h-full  mt-40">
            <div className="flex w-1/2 space-y-8">
              <Frame
                digit={"05"}
                color={"#fff"}
                textColor={"black"}
                borderWidth={1}
                borderRadius={100}
                borderColor={"#0f172a"}
              />
              <div className="font-ver mt-5 ml-5">
                <h1 className="text-4xl font-normal leading-9">
                  Get matched with mentors
                </h1>
                <p className="mt-20 text-custom-color text-xl font-normal leading-[28px]">
                  Get matched with mentors who can help you with learning and
                  give you personalized advice.
                </p>
              </div>
            </div>
            <div className=" max-h-full">
              <img src={Card5} alt="card 5" />
            </div>
          </div>
        </div>
      </AppContainer1>
    </div>
  );
}

export default Card;
