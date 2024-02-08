import React from "react";
import toast from "react-hot-toast";
import heroimage from "../../../src/asset/heroimage.png";
import "./Hero_Section1.css";
import FirstVerificationEmail from "../Firstmodal/FirstVerificationEmail";
import EmailConfirmationCode from "../SecondModal/EmailConfirmationCode";
import JoinLearnerCard from "../ThirdModal/JoinLearnerCard";
import Success from "../Success/Success";
import { useState } from "react";

function Hero_Section1() {
  const [showModal, setModal] = useState(false);
  const [joinGroupBtn, setJoinGroupBtn] = useState(false);
  const [joinLearnerBtn, setJoinLearnerBtn] = useState(false);
  const [success, setSuccess] = useState(false);
  const [url, setUrl] = useState("");
  const [isChecked, setIsChecked] = useState(true);
  const [rememberToken, setRememberToken] = useState("");
  const [resData, setResData] = useState();

  // JOIN GROUP MODAL
  const toggleModal = () => {
    if (url.trim(" ").length < 3) {
      return toast.error("URL connot be empty!");
    }
    localStorage.setItem("url", url);

    setModal(!showModal);
    setJoinGroupBtn(false);
    setJoinLearnerBtn(false);
    setSuccess(false);
  };


  // CONFIRM EMAIL MODEL
  const toEmailConfirmationCode = () => {
    setJoinGroupBtn(!joinGroupBtn); //true
    setModal(false); //false
  };

  const closeToEmailConfirmationCode= () => {
    setJoinGroupBtn(!joinGroupBtn); //
    setModal(false)
  };

  // JOIN LEARNER MODEL
  const toJoinLearner = () => {
    setJoinLearnerBtn(!joinLearnerBtn); //true
    setJoinGroupBtn(!joinGroupBtn); //false
    // setModal(!showModal)
  };

  const closeToJoinLearner = () => {
    setJoinLearnerBtn(false);
  };

  // SUCCESS MODAL
  const toSuccess = () => {
    setJoinLearnerBtn(!joinLearnerBtn);
    setJoinGroupBtn(!joinGroupBtn)
    setSuccess(!success);
    setModal(!showModal)
  };
  const closeSuccess = () => {
    setSuccess(false);
  };

  const monitorIsChecked = () => {
    setIsChecked(!isChecked);
  };

  const toSetToken = () => {};

  if (resData !== undefined) {
    console.log("From Hero_Section1 RESDATA: ", resData);
  }

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
          <div className="flex flex-col gap-3 mt-6 md:mt-10 xl:relative">
            <input
              type="text"
              name=""
              id=""
              onChange={(e) => {
                setUrl(e.target.value);
              }}
              placeholder="Paste the URL of the online course"
              className="px-4 py-3 rounded-full text-logo-left outline  focus:px-6 placeholder:px-5 placeholder:text-lg placeholder:italic placeholder:text-slate-400 border-2 xl:p-5 xl:relative"
            />
            <button
              onClick={toggleModal}
              className="pointer px-4 py-3 rounded-full bg-[#E76F51] text-white xl:absolute xl:inset-y-0 right-0 xl:m-2 xl:px-8 "
            >
              JOIN
            </button>
          </div>
        </div>
        <img src={heroimage} alt="" className="rounded-full mx-auto xl:w-2/3" />
      </section>

      {/* TOGGLE OF ALL THE MODEAL */}
      <div className="">
        {/* card 1 */}
        <div className={` ${showModal ? "block" : "hidden"}`}>
          <div className=" bg-gray-400 bg-opacity-50 fixed inset-0 z-50 ">
            <FirstVerificationEmail
              toEmailConfirmationCode={toEmailConfirmationCode}
              toSuccess={toSuccess}
              setJoinLearnerBtn={setJoinLearnerBtn}
              toJoinLearner={toJoinLearner}
              setJoinGroupBtn={setJoinGroupBtn}
              toggleModal={toggleModal}
              monitorIsChecked={monitorIsChecked}
            />
          </div>
        </div>
        {/* card 2 */}
        <div className={`${joinGroupBtn ? "block" : "hidden"}`}>
          <div className="  bg-gray-400 bg-opacity-50 fixed inset-0 z-50 ">
            <EmailConfirmationCode
              toJoinLearner={toJoinLearner}
              toggleModal={closeToEmailConfirmationCode}
            />
          </div>
        </div>
        {/* card 3 */}
        <div className={`${joinLearnerBtn ? "block" : "hidden"}`}>
          <div className=" bg-gray-400 bg-opacity-50 fixed inset-0 z-50 ">
            <JoinLearnerCard
              toggleModal={closeToJoinLearner}
              isChecked={isChecked}
              toSetToken={toSetToken}
              setResData={setResData}
            />
          </div>
        </div>
        {/* card 4 */}
        <div className={`${success ? "block" : "hidden"}`}>
          <div className=" bg-gray-400 bg-opacity-50 fixed inset-0 z-50 ">
            <Success toggleModal={closeSuccess} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero_Section1;
