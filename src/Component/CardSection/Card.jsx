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
    <>
      <AppContainer1>
        <div className="">
          <div
            id="about"
            className="flex xl:flex-row md:flex-row sm:flex-col flex-nowrap justify-between items-center xl:gap-10 md:gap-5 w-full h-full  mt-40
            "
          >
            <div className="xl:flex md:flex md:w-1/2 h-[340px] sm:mt-10">
              <Frame className="" digit={"01"} color={"#E76F51"} />
              <div className="sm:text-start md:text-start font-ver lg:-mt-8 md:mt-5 sm:mt-0 md:ml-5 sm:ml-0">
                <h1 className="sm:mt-10 lg:text-4xl md:text-3xl sm:text-[20px] font-ver font-normal leading-9">
                  Connect with other learners
                </h1>
                <p className="md:mt-20 sm:my-6 md:my-0 text-custom-color text-xl font-normal leading-[28px] lg:text-[20px] sm:text-[16px] sm:leading-6 sm:mt-8">
                  Meet other learners who are taking the same course as you and
                  get help and support from each other.
                </p>
                <div className=" lg:mt-20 md:mt-3 ">
                  <span className="text-[16px] font-normal text-[#E76F51] font-ver cursor-pointer border-b border-[#E76F51]">
                    Join Learner &gt;
                  </span>
                </div>
              </div>
            </div>
            <div className="xl:max-h-full xl:w-[500px] lg:w-[500px] md:w-[250px]">
              <img src={Card1} className="h-auto object-cover" alt="card one" />
            </div>
          </div>

          {/* line */}
          <div className=" w-full bg-gray-300 h-[2px] mt-32 lg:hidden md:hidden"></div>

          {/* second card */}
          <div className=" px-10 flex lg:flex-row md:flex-row sm:flex-col-reverse flex-nowrap justify-between items-center gap-10 w-full h-full  mt-40">
            <div className="lg:flex md:flex md:w-1/2 h-[340px] sm:mt-10">
              <Frame digit={"02"} color={"#2A9D8F"} />
              <div className="sm:text-start md:text-start font-ver lg:-mt-8 md:mt-5 sm:mt-0 md:ml-5 sm:ml-0">
                <h1 className="sm:mt-10 lg:text-4xl md:text-3xl sm:text-[20px] font-ver font-normal leading-9">
                  Ask questions
                </h1>
                <p className="md:mt-20 sm:my-6 md:my-0 text-custom-color text-xl font-normal leading-[28px] lg:text-[20px] sm:text-[16px] sm:leading-6 sm:mt-8">
                  Ask questions about the course material and get answers from
                  other learners or mentors
                </p>
                <div className=" lg:mt-20 md:mt-3 ">
                  <span className="text-[16px] font-normal text-[#2A9D8F] font-ver cursor-pointer border-b border-[#2A9D8F]">
                    Join Learner &gt;
                  </span>
                </div>
              </div>
            </div>
            <div className=" max-h-full xl:w-[500px] lg:w-[500px] md:w-[250px] order-first">
              <img src={Card2} alt="card two" />
            </div>
          </div>

          {/* line */}
          <div className=" w-full bg-gray-300 h-[2px] mt-32 lg:hidden md:hidden"></div>

          {/* Third card */}
          <div className="px-10 flex lg:flex-row md:flex-row sm:flex-col flex-nowrap justify-between items-center gap-10 w-full h-full  mt-40">
            <div className="lg:flex md:flex md:w-1/2 h-[340px] sm:mt-10">
              <Frame digit={"03"} color={"#E9C46A"} />
              <div className="sm:text-start md:text-start font-ver lg:-mt-8 md:mt-5 sm:mt-0 md:ml-5 sm:ml-0">
                <h1 className="sm:mt-10 lg:text-4xl md:text-3xl sm:text-[20px] font-ver font-normal leading-9">
                  Share tips
                </h1>
                <p className="md:mt-20 sm:my-6 md:my-0 text-custom-color text-xl font-normal leading-[28px] lg:text-[20px] sm:text-[16px] sm:leading-6 sm:mt-8">
                  Share tips and trick that you have learned with other learners
                </p>
                <div className=" lg:mt-20 md:mt-3 ">
                  <span className="text-[16px] font-normal text-[#E9C46A] font-ver cursor-pointer border-b border-[#E9C46A]">
                    Join Learner &gt;
                  </span>
                </div>
              </div>
            </div>
            <div className=" max-h-full xl:w-[500px] lg:w-[500px] md:w-[250px]">
              <img src={Card3} alt="card 3" />
            </div>
          </div>

          {/* line */}
          <div className=" w-full bg-gray-300 h-[2px] mt-32 lg:hidden md:hidden"></div>

          {/* fourth card */}
          <div className="px-10 flex lg:flex-row md:flex-row sm:flex-col-reverse flex-nowrap justify-between items-center gap-10 w-full h-full  mt-40">
            <div className="lg:flex md:flex md:w-1/2 h-[340px] sm:mt-10">
              <Frame digit={"04"} color={"#0F172A"} />
              <div className="sm:text-start md:text-start font-ver lg:-mt-8 md:mt-5 sm:mt-0 md:ml-5 sm:ml-0">
                <h1 className="sm:mt-10 lg:text-4xl md:text-3xl sm:text-[20px] font-ver font-normal leading-9">
                  Get motivated
                </h1>
                <p className="md:mt-20 sm:my-6 md:my-0 text-custom-color text-xl font-normal leading-[28px] lg:text-[20px] sm:text-[16px] sm:leading-6 sm:mt-8">
                  Stay motivated and on track with your learning by connecting
                  with other learners who are currently working towards same
                  goals.
                </p>
                <div className=" lg:mt-20 md:mt-3 ">
                  <span className="text-[16px] font-normal text-[#0F172A] font-ver cursor-pointer border-b border-[#0F172A]">
                    Join Learner &gt;
                  </span>
                </div>
              </div>
            </div>
            <div className="sm:mt-3 max-h-full xl:w-[500px] lg:w-[500px] md:w-[250px] order-first">
              <img src={Card4} alt="card 4" />
            </div>
          </div>

          {/* line */}
          <div className=" w-full bg-gray-300 h-[2px] mt-32 lg:hidden md:hidden"></div>

          {/* fifth card */}
          <div className="px-10 flex lg:flex-row md:flex-row sm:flex-col flex-nowrap justify-between items-center gap-10 w-full h-full  my-40">
            <div className="lg:flex md:flex md:w-1/2 h-[340px] sm:mt-10">
              <Frame
                digit={"05"}
                color={"#fff"}
                textColor={"black"}
                borderWidth={1}
                borderRadius={100}
                borderColor={"#0f172a"}
              />
              <div className="sm:text-start md:text-start font-ver lg:-mt-8 md:mt-5 sm:mt-0 md:ml-5 sm:ml-0">
                <h1 className="sm:mt-10 lg:text-4xl md:text-3xl sm:text-[20px] font-ver font-normal leading-9">
                  Get matched with mentors
                </h1>
                <p className="md:mt-20 sm:my-6 md:my-0 text-custom-color text-xl font-normal leading-[28px] lg:text-[20px] sm:text-[16px] sm:leading-6 sm:mt-8">
                  Get matched with mentors who can help you with learning and
                  give you personalized advice.
                </p>
                <div className=" xl:mt-20 md:mt-3 ">
                  <span className="text-[16px] font-normal text-[#0F172A] font-ver cursor-pointer border-b border-[#0F172A]">
                    Join Learner &gt;
                  </span>
                </div>
              </div>
            </div>
            <div className="max-h-full xl:w-[500px] lg:w-[500px] md:w-[250px]">
              <img src={Card5} alt="card 5" />
            </div>
          </div>
        </div>
      </AppContainer1>
    </>
  );
}

export default Card;
