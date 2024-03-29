import React from "react";
import AppContainer1 from "../AppContainer1/AppContainer1";
import Button from "../Button/Button";

function Mentor() {
  return (
    <div>
      <AppContainer1>
        <div
          id="contact"
          className="bg-darkblue rounded-2xl xl:mt-40 md:mt-40 sm:mt-60 h-[472px] w-full lg:pt-36 lg:px-48 md:px-18 sm:px-5  flex flex-col items-center justify-center text-center "
        >
          <h1 className=" font-ver font-normal text-white  text-center lg:text-[48px] md:text-[48px] sm:text-[18px] lg:leading-[60px] md:leading-[60px] sm:leading-[23px]">
            Unlock your potential to
            <span className="text-[#E76F51]"> learn</span> with great
            <span className="text-[#2A9D8F]"> mentors</span>
          </h1>
          <Button
          className="items-center justify-center "
            text={"Join groups"}
            bgColor={"#E76F51"}
            textColor={"#fff"}
            borderWidth={1}
            borderRadius={100}
            borderColor={"#0f172a"}
            width={"228px"}
            fontSize={"20px"}
            marginTop={"50px"}
            padding={"24px"}
          />
        </div>
      </AppContainer1>
    </div>
  );
}

export default Mentor;
