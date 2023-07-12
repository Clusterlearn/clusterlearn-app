import React from "react";
import Button from "../Button/Button";
import AppContainer1 from "../AppContainer1/AppContainer1";
import Logo from "../Logo/Logo";

function GetInTouch() {
  return (
    <AppContainer1>
      <div className="flex items-center justify-center mt-40 relative cursor-pointer font-ver font-normal">
        <h1 className=" text-white text-2xl text-center absolute">
          Get In touch
          <br /> with the <br />
          latest <span className="text-logo-left text-[32px]">NEWS</span>
        </h1>
        <Button
          bgColor={"#E76F51"}
          width={"392px"}
          height={"392px"}
          borderColor={"#E76F51"}
          borderRadius={392}
        ></Button>
      </div>
      <div className="mt-40">
        <Logo Text={"CLUSTER"} />
      </div>
    </AppContainer1>
  );
}

export default GetInTouch;
