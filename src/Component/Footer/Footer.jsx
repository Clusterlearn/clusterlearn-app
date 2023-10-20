import React from 'react'
import AppContainer1 from '../AppContainer1/AppContainer1'
import { BiLogoGmail } from "react-icons/bi"
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { ReactComponent as Green } from "../../../src/asset/green.svg";
import { ReactComponent as Orange } from "../../../src/asset/orange.svg";
// import { ReactComponent as Email } from "../../../src/asset/Email.svg";


function Footer() {
  return (
    <AppContainer1>
          <div className=" flex xl:flex-row sm:flex-col items-center justify-between gap-5 font-ver text-black my-8">
            <h1 className=" lg:text-center md:text-center lg:text-[40px] md:text-[40px] sm:text-[20px] lg:leading-[45px] md:leading-[45px]  font-normal">
              Get better at learning.
            </h1>
            <nav className="">
              <ul className="lg:grid md:grid lg:grid-cols-2 md:grid-cols-2 uppercase xl:gap-12 md:gap-14 xl:text-xl md:text-sm font-ver font-normal text-darkblue sm:items-center sm:justify-center cursor-pointer">
                <li className=" sm:mt-12">About Us</li>
                <li className=" sm:mt-12">Contact</li>
                <li className=" sm:mt-12">Testimonial</li>
                <li className=" sm:mt-12">Account</li>
              </ul>
            </nav>
            {/* socials */}
            <span className=" sm:mt-28 flex items-center lg:justify-between md:justify-center sm:justify-around xl:gap-3 md:gap-5 sm:gap-3 ">
              <a href="#">
                {/* <Email /> */}
                <BiLogoGmail className="xl:h-8 xl:w-9 md:h-8 md:w-9 sm:h-[20px] sm:w-[20px] sm:mb-8 text-[#E76F51]" />
              </a>
              <a href="#">
                <FaLinkedin className="xl:h-8 xl:w-9 md:h-8 md:w-9 sm:h-[20px] sm:w-[20px] sm:mb-8 text-[#E76F51]" />
              </a>
              <a href="#">
                <FaTwitter className="xl:h-8 xl:w-9 md:h-8 md:w-9 sm:h-[20px] sm:w-[20px] sm:mb-8 text-[#E76F51]" />
              </a>
              <a href="#">
                <FaFacebookF className="xl:h-8 xl:w-9 md:h-8 md:w-9 sm:h-[20px] sm:w-[20px] sm:mb-8 text-[#E76F51]" />
              </a>
            </span>
          </div>

          {/* line */}
          <div className=" bg-gray-200 h-1 w-full mt-40"></div>
          {/* end of line */}

          <div className="mt-24 mb-5 lg:flex md:flex sm:flex-col lg:flex-row md:flex-row sm:gap-3 items-center justify-between font-ver text-sm font-normal leading-normal lg:px-10 md:px-10">
            <div className=" sm:text-center sm:mt-10">
              <p className="text-logo-left lg:-mt-10 md:-mt-10">
                © Cluster learn limited. All rights reserved
              </p>
            </div>
            <div className=" sm:mt-10 flex lg:-mt-10 md:-mt-5 flex-row items-center justify-center gap-2">
              <Green />
              <p className="text-logo-left">Privacy Policy</p>
            </div>
            <div className=" sm:mt-10 flex lg:-mt-10 md:-mt-5  flex-row items-center justify-center gap-2">
              <Orange />
              <p className="text-logo-left">Terms and Condition</p>
            </div>
          </div>
    </AppContainer1>
  );
}

export default Footer