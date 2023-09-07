import { useState } from "react";
import close from "../../asset/close-o.svg";

const JoinLearnerCard = ({toSuccess, toggleModal}) => {
  const [showSelectStage, setShowSelectStage] = useState(false);
  const [selectedStage, setSelectedStage] = useState(null);
  const [showSelectedSession, setShowSelectedSession] = useState(false);
  const [selectedSession, setSelectedSession] = useState(null);

  // const click = () => {
  //   console.log("Clicked");
  // }

  return (
    <div className="">
      <div className="h-screen flex justify-center items-center">
        <div className="relative font-ver bg-gray-100 lg:w-[602px] sm:w-[342px] rounded-[15px] md:w-[80%] xl:w-[50%] 2xl:w-[40%]">
          <div className=" flex justify-between px-8 mt-10 border-b border-gray-200 pb-4">
            <span className=" text-darkblue font-normal lg:text-2xl sm:text-[20px]">
              Join Group
            </span>
            <div onClick={toggleModal} className="cursor-pointer">
              <img src={close} alt="close" width={24} height={24} />
            </div>
          </div>
          {/* Email */}
          <div className=" px-8">
            <div className=" pt-4 text-darkblue font-normal text-base">
              Email
            </div>

            <div className=" rounded-full flex gap-2 bg-white border border-[#0F172A4D] op30 px-7 py-3">
              <div className=" items-center flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="18"
                  viewBox="0 0 21 18"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.0113932 1.25661C0.0113932 0.562605 0.533728 0 1.17806 0H19.8333C20.4777 0 21 0.562605 21 1.25661V15.4868C21 16.8748 19.9553 18 18.6667 18H2.33333C1.04467 18 0 16.8748 0 15.4868V1.66403C0 1.60419 0.00388332 1.54533 0.0113932 1.48772V1.25661ZM2.33333 4.05101V15.4868H18.6667V4.05144L12.9751 10.1818C11.6082 11.6541 9.39216 11.6541 8.02533 10.1818L2.33333 4.05101ZM4.16771 2.47258H16.8327L11.3252 8.40472C10.8695 8.89546 10.1309 8.89546 9.67524 8.40472L4.16771 2.47258Z"
                    fill="#0F172A"
                    fillOpacity="0.5"
                  />
                </svg>
              </div>

              <input
                type="text"
                placeholder="izebeayotei@gmail.com"
                className=" w-full"
              />
            </div>
          </div>
          {/* Verification */}
          <div className=" px-8">
            <div className=" pt-4 text-darkblue font-normal text-base">
              Verification Code
            </div>
            <div className=" rounded-full flex gap-2 bg-white border border-[#0F172A4D] px-7 py-3">
              <div className=" items-center flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <path
                    d="M18.9 2.22222H6.3V6.66667H4.2V0H21V20H4.2V13.3333H6.3V17.7778H18.9V2.22222Z"
                    fill="#0F172A"
                    fillOpacity="0.7"
                  />
                  <path
                    d="M11.628 15.4998L10.1431 13.9284L12.8054 11.1111H0V8.8889H12.8054L10.1431 6.07167L11.628 4.50033L16.8252 10L11.628 15.4998Z"
                    fill="#0F172A"
                    fillOpacity="0.7"
                  />
                </svg>
              </div>

              <input
                type="text"
                placeholder="Enter verification code"
                className=" w-full"
              />
            </div>
          </div>

          {/* Select */}
          <div className=" sm:-mt-3 relative ">
            <div className=" px-8 pt-10 relative">
              <div className=" bg-white sm:pl-20 sm:w-[270px] p-2  px-8 border rounded-2xl absolute z-50">
                <div className=" flex gap-3">
                  <span className=" pr-2 text-[#0F172A80]">
                    {selectedStage ? selectedStage : "Select stage"}
                  </span>
                  <div
                    onClick={() => {
                      setShowSelectStage(!showSelectStage);
                    }}
                    className=" cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M7.75745 10.5858L9.17166 9.17154L12.0001 12L14.8285 9.17157L16.2427 10.5858L12.0001 14.8284L7.75745 10.5858Z"
                        fill="#0F172A"
                        fillOpacity="0.7"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                        fill="#0F172A"
                        fillOpacity="0.7"
                      />
                    </svg>
                  </div>
                </div>
                {showSelectStage && (
                  <div className=" p-2 relative text-[#0F172A80]">
                    <div className=" sm:-ml-10 flex gap-2 p-2">
                      <input
                        onChange={(e) => {
                          setSelectedStage(e.target.value);
                          setShowSelectStage(!showSelectStage);
                        }}
                        type="radio"
                        name="stage"
                        value="Biginner"
                      />
                      <p>Beginner</p>
                    </div>
                    <div className="sm:-ml-10 flex gap-2 p-2">
                      <input
                        onChange={(e) => {
                          setSelectedStage(e.target.value);
                          setShowSelectStage(!showSelectStage);
                        }}
                        type="radio"
                        name="stage"
                        value="Intermediate"
                      />
                      <p>Intermediate</p>
                    </div>
                    <div className="sm:-ml-10 flex gap-2 p-2 sm:pr-10">
                      <input
                      className=""
                        onChange={(e) => {
                          setSelectedStage(e.target.value);
                          setShowSelectStage(!showSelectStage);
                        }}
                        type="radio"
                        name="stage"
                        value="Advance"
                      />
                      <p>Advanced</p>
                    </div>
                  </div>
                )}
              </div>
            </div>


            {/* schedule session */}
            <div className=" bg-white sm:w-[270px] sm:mt-14 float-right p-2  px-8 mr-8  border rounded-2xl absolute sm:right-0 md:-mt-0">
              <div className="">
                <div className=" flex gap-3 ">
                  <span className=" sm:pl-5 md:pl-0 pr-2 text-[#0F172A80]">
                    {selectedSession ? selectedSession : "Schedule session"}
                  </span>
                  <div
                    onClick={() => {
                      setShowSelectedSession(!showSelectedSession);
                    }}
                    className=" cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M7.75745 10.5858L9.17166 9.17154L12.0001 12L14.8285 9.17157L16.2427 10.5858L12.0001 14.8284L7.75745 10.5858Z"
                        fill="#0F172A"
                        fillOpacity="0.7"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                        fill="#0F172A"
                        fillOpacity="0.7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              {showSelectedSession && (
                <div className=" text-[#0F172A80] left-0 right-0 bg-white top-7 z-30  mt-2">
                  <div className=" flex gap-2 p-2">
                    <input
                      onChange={(e) => {
                        setSelectedSession(e.target.value);
                        setShowSelectedSession(!showSelectedSession);
                      }}
                      type="radio"
                      name="session"
                      value="Morning"
                    />
                    <p>Morning</p>
                  </div>
                  <div className=" flex gap-2 p-2">
                    <input
                      onChange={(e) => {
                        setSelectedSession(e.target.value);
                        setShowSelectedSession(!showSelectedSession);
                      }}
                      type="radio"
                      name="session"
                      value="Afternoon"
                    />
                    <p>Afternoon</p>
                  </div>
                  <div className=" flex gap-2 p-2">
                    <input
                      onChange={(e) => {
                        setSelectedSession(e.target.value);
                        setShowSelectedSession(!showSelectedSession);
                      }}
                      type="radio"
                      name="session"
                      value="Evening"
                    />
                    <p>Evening</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Button */}
          <div className=" sm:mt-10 px-8 pt-20 mb-10">
            <button onClick={toSuccess} className=" text-white w-full bg-[#E76F51] rounded-full p-[10px] text-base font-normal">
              Join Group
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinLearnerCard;

//  text-[#0F172A80] z-30 absolute mt-2 bg-white border rounded-lg shadow-md
