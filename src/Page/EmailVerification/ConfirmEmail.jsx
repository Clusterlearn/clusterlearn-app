import React from "react";
import AppContainer1 from "../../Component/AppContainer1/AppContainer1";
import CloseCopy from "../../../src/asset/close-copy.png";

function ConfirmEmail() {
  return (
    <AppContainer1>
      <div className="font-ver mx-auto w-[602px] h-[456px] rounded-xl bg-[#E76F51]  px-8 py-8 relative">
        <img
          className="w-[22px] h-[20px] absolute top-5 right-5"
          src={CloseCopy}
          alt="cancel"
        />
        <h1 className="text-white text-center mt-10 text-4xl font-normal">
          Verification code <br /> sent!
        </h1>
        <div className="flex flex-row justify-evenly items-center mt-40">
          <button
            type="button"
            className="w-[175px] h-[60px] text-borderEmail text-xl font-normal bg-transparent border-2 rounded-[30px] border-borderEmail"
          >
            Join Group
          </button>
          <button className="w-[175px] h-[60px] text-[#E76F51] text-xl font-normal bg-white border-2 rounded-[30px] border-transparent">
            Go to mail
          </button>
        </div>
      </div>
    </AppContainer1>
  );
}

export default ConfirmEmail;
