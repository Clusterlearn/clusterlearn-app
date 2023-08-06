import React, { useState } from "react";
import "./Header.css";
import AppContainer1 from "../AppContainer1/AppContainer1";
import Logo from "../Logo/Logo";
// import JoinGroup from "../JoinGroup/JoinGroup"
import Accordion from "../JoinGroup/Accordion";
// import { Link } from 'react-router-dom';
import CloseCopy from "../../../src/asset/close-copy.png";
// import orange from "../../../src/asset/orange.svg";



  const Header = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal)
  }

   if (modal) {
     document.body.classList.add("active-modal");
   } else {
     document.body.classList.remove("active-modal");
   }

  return (
    <div>
      <AppContainer1>
        <nav className="flex flex-wrap flex-row justify-between items-center my-5 text-sm md:text-lg">
          <Logo Text={"CLUSTER"} />
          <ul className="flex flex-wrap justify-center items-center font-ver text-base font-normal text-darkblue">
            <li className="px-5">
              <a href="#about">About Us</a>
            </li>
            <li className="px-5">
              <a href="#testimonial">Testimonial</a>
            </li>
            <li className="px-5">
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
          <div>
            <div onClick={toggleModal}>
              <button
                className="w-20 flex items-center justify-center rounded-lg"
                style={{
                  border:
                    "1px solid var(--black-inactive, rgba(15, 23, 42, 0.50))",
                }}
              >
                Join
              </button>
            </div>
          </div>
        </nav>
        {modal && (
          <div className="modal">
            <div className="overlay"
              >
              <div className="modal-content font-ver mx-auto w-[602px] h-[646px] rounded-2xl bg-gray-100">
                <div className="flex items-center justify-between px-8 py-8">
                  <h1 className="text-darkblue text-2xl font-normal">
                    Join Group
                  </h1>
                  <img
                    onClick={toggleModal}
                    className="w-[22px] h-[20px] cursor-pointer"
                    src={CloseCopy}
                    alt="cancel"
                  />
                </div>
                <hr className="w-full h-[2px] bg-[rgba(15, 23, 42, 0.10);]" />
                <div className="flex flex-col gap-5 px-8 py-8">
                  {/* This is expected to take the email address that was written in the verify email section */}
                  {/* This is expected to take the email address that was written in the verify email section */}
                  <input
                    style={{
                      borderRadius: "30px",
                      border: "1px",
                      borderWidth: "solid",
                      borderColor: "var(--back, rgba(15, 23, 42, 0.30))",
                    }}
                    className="w-[522px] h-[66px] items-center px-5 py-7 text-base font-ver font-normal placeholder:text-darkblue"
                    type="text"
                    placeholder="Ayomidefrezi@gmail.com"
                  />
                  <input
                    style={{
                      borderRadius: "30px",
                      border: "1px",
                      borderWidth: "solid",
                      borderColor: "var(--back, rgba(15, 23, 42, 0.30))",
                      color: "var(--black-inactive, rgba(15, 23, 42, 0.50))",
                    }}
                    className="w-[522px] h-[66px] items-center px-5 py-7 text-base font font-normal"
                    type="text"
                    placeholder="Enter email verification code"
                  />
                  <Accordion />
                  <div className="mt-10">
                    <button
                      type="submit"
                      className="bg-[#E76F51] text-white text-center font-ver font-normal text-base w-[522px] h-[66px] rounded-[40px]"
                    >
                      Join Group
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </AppContainer1>
    </div>
  );
}

export default Header;
