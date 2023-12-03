import { useEffect, useState } from "react";
import close from "../../asset/close-o.svg";
import { IoMdRadioButtonOn } from "react-icons/io";
import axios from "axios";
import toast from "react-hot-toast";

const JoinLearnerCard = ({ toSuccess, toggleModal, isChecked, setResData }) => {
  const [showSelectStage, setShowSelectStage] = useState(false);
  const [selectedStage, setSelectedStage] = useState(null);
  const [showSelectedSession, setShowSelectedSession] = useState(false);
  const [selectedSession, setSelectedSession] = useState(null);
  const [txtColorSelected, setTxtColorSelected] = useState(false);
  const [txtColorSelected2, setTxtColorSelected2] = useState(false);
  const [getEmail, setGetEmail] = useState(false);
  const [email, setEEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [err, setErr] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const interval = setInterval(() => {
    const email = localStorage.getItem("email");
    // console.log("in this page", email);
    setEEmail(email);
    if (getEmail !== "") {
      setGetEmail(true);
    }

    if (getEmail !== "") {
      clearInterval(interval);
    }
  }, [5000]);

  // function to verify if the code sent === the code inputed
  const verifyCodeAndProceed = async () => {
    setSubmitting(true);
    if (!verificationCode) {
      console.log("Rubbish code");
      setErr(true);
      return;
    }

    const data = {
      email,
      code: verificationCode,
      rememberMe: true,
    };

    try {
      const response = await axios.post(
        "https://clusterlearn.cyclic.app/user/verify",
        data
      );

      const message = response?.data?.data?.message;
      const deviceToken = response?.data?.data?.deviceToken;
      console.log("message:", message);
      console.log("deviceToken:", deviceToken);

      if (isChecked === true) {
        localStorage.setItem("deviceToken", deviceToken);
      }

      toast.success(message);


      // function to run before proceeding to Success modal
      try {
        const devToken = localStorage.getItem("deviceToken");
        const devEmail = localStorage.getItem("email");
        const devUrl = localStorage.getItem("url");

        const dataTosend = {
          email: devEmail,
          url: devUrl,
          rememberToken: devToken,
        };

         const headers = {
           "Access-Control-Allow-Origin": "*",
           Accept: "application/json",
           "Content-Type": "application/json",
         };

        const res = await axios.post(
          // "https://clusterlearn.onrender.com",
          "https://clusterlearn.cyclic.app/user/register",
          dataTosend, { headers }
        );
        const responseFromBackend = res?.data?.data;

        setResData(responseFromBackend);

        console.log("JoinLearnerCard :", responseFromBackend);
      } catch (error) {
        const message =
          error.response.data.data.error ||
          error.response.data.data.status ||
          (error.response &&
            error.response.data &&
            error.response.data.data.message) ||
          error.message ||
          error.toString();

        toast.error(message);
        console.log(message);
      }

      toSuccess();
      setSubmitting(false);
    } catch (error) {
      const message =
        error?.response?.data?.data?.message ||
        error?.response?.data?.data?.status ||
        (error?.response &&
          error?.response?.data &&
          error?.response?.data?.data?.message) ||
        error?.message ||
        error?.toString();

      toast.error(message);

      setSubmitting(false);
    }
  };


  return (
    <div className="">
      <div className="h-screen flex justify-center items-center">
        <div className="relative font-ver bg-gray-100 lg:w-[602px] sm:w-[342px] rounded-[15px] md:w-[80%] xl:w-[50%] 2xl:w-[40%]">
          <div className=" flex justify-between px-8 mt-10 border-b border-gray-200 pb-4">
            <span className=" font-normal lg:text-2xl sm:text-[20px] text-darkblue">
              Join Group
            </span>
            <div onClick={toggleModal} className="cursor-pointer">
              <img src={close} alt="close" width={24} height={24} />
            </div>
          </div>
          {/* Email */}
          <div className=" px-8">
            {/* <IoMdRadioButtonOn width={50} height={50} className=" text-[#E76F51]" /> */}

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
                value={email}
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
                onChange={(e) => {
                  setVerificationCode(e.target.value);
                  // console.log(e.target.value);
                }}
                type="text"
                placeholder="Enter verification code"
                className=" w-full"
              />
            </div>
            {err && (
              <div className=" ml-2 text-red-500">
                Verification can't be empty!
              </div>
            )}
          </div>

          {/* Select */}
          <div className=" sm:-mt-3 relative ">
            {/* <div className=" px-8 pt-10 relative">
              <div className=" bg-white sm:pl-20 sm:w-[270px] p-2  px-8 border rounded-2xl absolute z-50">
                <div className=" flex gap-3">
                  {txtColorSelected && (
                    <span className="pt-[5px] -ml-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <circle cx="7" cy="7" r="6.5" stroke="#E76F51" />
                        <circle cx="7" cy="7" r="3" fill="#E76F51" />
                      </svg>
                    </span>
                  )}
                  <span
                    className={` pr-2 ${
                      txtColorSelected ? "text-black" : "text-[#0F172A80]"
                    }`}
                  >
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
                    <div className=" sm:-ml-10 flex gap-2 p-2 hover:text-[#0F172A] font-ver">
                      <input
                        onChange={(e) => {
                          setSelectedStage(e.target.value);
                          setShowSelectStage(!showSelectStage);
                          setTxtColorSelected(true);
                        }}
                        type="radio"
                        name="stage"
                        value="Biginner"
                        id="beginner"
                      />
                      <label
                        htmlFor="beginner"
                        className=" hover:cursor-pointer"
                      >
                        Beginner
                      </label>
                    </div>

                    <div className="sm:-ml-10 flex gap-2 p-2 hover:text-[#0F172A] font-ver">
                      <input
                        onChange={(e) => {
                          setSelectedStage(e.target.value);
                          setShowSelectStage(!showSelectStage);
                          setTxtColorSelected(true);
                        }}
                        type="radio"
                        name="stage"
                        value="Intermediate"
                        id="intermediate"
                      />
                      <label
                        htmlFor="intermediate"
                        className=" hover:cursor-pointer"
                      >
                        Intermediate
                      </label>
                    </div>

                    <div className="sm:-ml-10 flex gap-2 p-2 sm:pr-10 hover:text-[#0F172A] font-ver">
                      <input
                        className=""
                        onChange={(e) => {
                          setSelectedStage(e.target.value);
                          setShowSelectStage(!showSelectStage);
                          setTxtColorSelected(true);
                        }}
                        type="radio"
                        name="stage"
                        value="Advance"
                        id="advance"
                      />
                      <label
                        htmlFor="advance"
                        className=" hover:cursor-pointer"
                      >
                        Advance
                      </label>
                    </div>
                  </div>
                )}
              </div>
            </div> */}

            {/* schedule session */}
            {/* <div className=" bg-white sm:w-[270px] sm:mt-14 float-right p-2  px-8 mr-8  border rounded-2xl absolute sm:right-0 md:-mt-0">
              <div className="">
                <div className=" flex gap-3 ">
                  {txtColorSelected2 && (
                    <span className=" ml-5 pt-[5px] ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <circle cx="7" cy="7" r="6.5" stroke="#E76F51" />
                        <circle cx="7" cy="7" r="3" fill="#E76F51" />
                      </svg>
                    </span>
                  )}
                  <span
                    className={`sm:pl-5 md:pl-0 pr-2 text-[#0F172A80] ${
                      txtColorSelected2 ? "text-black" : "text-[#0F172A80]"
                    }`}
                  >
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
                  <div className=" flex gap-2 p-2 hover:text-[#0F172A] font-ver">
                    <input
                      onChange={(e) => {
                        setSelectedSession(e.target.value);
                        setShowSelectedSession(!showSelectedSession);
                        setTxtColorSelected2(true);
                      }}
                      type="radio"
                      name="session"
                      value="Morning"
                      id="morning"
                    />
                    <label htmlFor="morning" className=" hover:cursor-pointer">
                      Morning
                    </label>
                  </div>

                  <div className=" flex gap-2 p-2 hover:text-[#0F172A] font-ver">
                    <input
                      onChange={(e) => {
                        setSelectedSession(e.target.value);
                        setShowSelectedSession(!showSelectedSession);
                        setTxtColorSelected2(true);
                      }}
                      type="radio"
                      name="session"
                      value="Afternoon"
                      id="afternoon"
                    />
                    <label
                      htmlFor="afternoon"
                      className=" hover:cursor-pointer"
                    >
                      Afternoon
                    </label>
                  </div>

                  <div className=" flex gap-2 p-2 hover:text-[#0F172A] font-ver">
                    <input
                      onChange={(e) => {
                        setSelectedSession(e.target.value);
                        setShowSelectedSession(!showSelectedSession);
                        setTxtColorSelected2(true);
                      }}
                      type="radio"
                      name="session"
                      value="Evening"
                      id="evening"
                    />
                    <label htmlFor="evening" className=" hover:cursor-pointer">
                      Evening
                    </label>
                  </div>
                </div>
              )}
            </div> */}
          </div>

          {/* Button */}
          <div className=" sm:mt-10 px-8 pt-16 mb-10">
            <button
              // onClick={toSuccess}
              disabled={submitting}
              onClick={verifyCodeAndProceed}
              className=" text-white w-full bg-[#E76F51] rounded-full p-[10px] text-base font-normal"
            >
              {submitting ? <span>Joining...</span> : <span>Join Group</span>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinLearnerCard;

//  text-[#0F172A80] z-30 absolute mt-2 bg-white border rounded-lg shadow-md
