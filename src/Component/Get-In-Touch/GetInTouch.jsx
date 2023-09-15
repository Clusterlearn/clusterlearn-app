import React from "react";
import Logo from "../Logo/Logo";
// import {Link} from "react-router-dom"

function GetInTouch() {
  return (
    <>
      <div className="relative grid place-items-center w-full h-full mt-40 cursor-pointer font-ver font-normal">
        <h1 className="text-2xl text-white bg-logo-right xl:px-[182px] xl:py-[182px] md:px-[100px] md:py-[100px] sm:px-[80px] sm:py-[80px] rounded-[100%]">
          Get In touch <br /> with the <br />
          latest
          <span className="text-logo-left text-[32px] pl-2">NEWS</span>
        </h1>
      </div>
      <div className="mt-40">
        <Logo Text={"CLUSTER"} />
      </div>
    </>
  );
}

export default GetInTouch;
