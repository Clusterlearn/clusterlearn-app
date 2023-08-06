import React from 'react'
import AppContainer1 from '../AppContainer1/AppContainer1'
import { BiLogoGmail } from "react-icons/bi"
import { AiOutlineLinkedin } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import { ReactComponent as Green } from "../../../src/asset/green.svg";
import { ReactComponent as Orange } from "../../../src/asset/orange.svg";


function Footer() {
  return (
    <div>
      <AppContainer1>
        <div className="flex flex-row items-center justify-between gap-5 font-ver text-black my-8">
          <h1 className="text-center text-[40px] leading-[45px] font-normal">
            Get better at learning.
          </h1>
          <nav className="">
            <ul className="grid grid-cols-2 uppercase gap-10 text-xl font-ver font-normal text-darkblue cursor-pointer">
              <li className="">About Us</li>
              <li className="">Contact</li>
              <li className="">Testimonial</li>
              <li className="">Account</li>
            </ul>
          </nav>
          {/* socials */}
          <span className="flex items-center justify-between gap-3">
            <a href="#">
              <BiLogoGmail className="h-8 w-9 text-[#E76F51]" />
            </a>
            <a href="#">
              {" "}
              <AiOutlineLinkedin className="h-8 w-9 text-[#E76F51]" />
            </a>
            <a href="#">
              <CiTwitter className="h-8 w-9 text-[#E76F51]" />
            </a>
            <a href="#">
              <FiFacebook className="h-8 w-9 text-[#E76F51]" />
            </a>
          </span>
        </div>

        <div className="mt-24 mb-5 flex flex-row items-center justify-between font-ver text-sm font-normal leading-normal">
          <span>
            <p className="text-logo-left">
              © Cluster learn limited. All rights reserved
            </p>
          </span>
          <span className='flex flex-row items-center justify-center gap-2'>
          <Green/>
            <p className="text-logo-left">Privacy Policy</p>
          </span>
          <span className='flex flex-row items-center justify-center gap-2'>
            <Orange />
            <p className="text-logo-left">Terms and Condition</p>
          </span>
        </div>
      </AppContainer1>
    </div>
  );
}

export default Footer