import React from "react";
import AppContainer1 from "../../Component/AppContainer1/AppContainer1";
import CloseCopy from "../../../src/asset/close-copy.png";
// import orange from "../../../src/asset/orange.svg";

function VerifyEmail() {
  return (
    <AppContainer1>
      <div className="font-ver mx-auto w-[602px] h-[435px] rounded-2xl bg-gray-100">
        <div className="flex items-center justify-between px-8 py-8">
          <h1 className="text-darkblue text-2xl font-normal">Verify Email</h1>
          <img className="w-[22px] h-[20px]" src={CloseCopy} alt="cancel" />
        </div>
        <hr className="w-full h-[2px] bg-[#0F172A]" />
        <div className="flex flex-col px-8 py-6 mt-10">
          <input
            style={{
              borderRadius: "30px",
              border: "1px",
              borderWidth: "solid",
              borderColor: "var(--back, rgba(15, 23, 42, 0.30))",
            }}
            className="w-[522px] h-[66px] items-center px-5 py-7 "
            type="text"
            placeholder="Enter email address"
          />
          <p className="flex flex-row gap-1 mt-10 text-darkblue font-normal text-sm ">
            Remember me
            <span className="mt-2 w-3 h-3 bg-[#E76F51] rounded-full">
              {/* <input type="radio"></input> */}
            </span>
          </p>
          <div className="mt-10">
            <button
              type="submit"
              className="bg-[#E76F51] text-white text-center font-ver font-normal text-base w-[522px] h-[66px] rounded-[40px]"
            >
              Send verification code
            </button>
          </div>
        </div>
      </div>
    </AppContainer1>
  );
}

export default VerifyEmail;
