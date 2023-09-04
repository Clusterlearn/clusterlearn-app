import React, { useState } from "react";
import "./Header.css";
import AppContainer1 from "../AppContainer1/AppContainer1";
import Logo from "../Logo/Logo";
import { ReactComponent as HamburgerNav } from "../../../src/asset/HamburgerNav.svg";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
import JoinGroup from "../JoinGroup/JoinGroup";
import ConfirmEmail from "../EmailVerification/ConfirmEmail";
import JoinLearnerCard from "../JoinLearner/JoinLearnerCard";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!showModal);
  };

  // if (modal) {
  //   document.body.classList.add("active-modal");
  // } else {
  //   document.body.classList.remove("active-modal");
  // }

  return (
    <>
      <AppContainer1>
        <div className="">
          <nav className=" relative md:flex md:justify-between md:items-center my-5 text-sm md:text-lg">
            <div className="flex justify-between items-center">
              <Logo Text={"CLUSTER"} />

              {/* Hamburger Icon */}
              <div className="md:hidden cursor-pointer block text-4xl">
                <button
                  onClick={() => setShowMenu(!showMenu)}
                  className="text- text-3xl hover:text-gray-200 duration-400 focus:outline-none"
                >
                  {!showMenu ? (
                    <HamburgerNav />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_626_2711)">
                        <path
                          d="M20.9174 11.3488C21.4683 10.8353 21.4987 9.97244 20.9852 9.42151C20.4717 8.87058 19.6088 8.84022 19.0579 9.3537L15.0677 13.0726L11.3488 9.08248C10.8353 8.53155 9.97244 8.50119 9.42151 9.01467C8.87058 9.52815 8.84022 10.391 9.3537 10.9419L13.0727 14.9321L9.08248 18.6511C8.53155 19.1646 8.50119 20.0274 9.01467 20.5784C9.52815 21.1293 10.391 21.1596 10.9419 20.6462L14.9321 16.9272L18.6511 20.9174C19.1646 21.4683 20.0274 21.4987 20.5784 20.9852C21.1293 20.4717 21.1596 19.6088 20.6462 19.0579L16.9272 15.0677L20.9174 11.3488Z"
                          fill="#0F172A"
                          fill-opacity="0.7"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 27.2727C8.22196 27.2727 2.72727 21.778 2.72727 15C2.72727 8.22196 8.22196 2.72727 15 2.72727C21.778 2.72727 27.2727 8.22196 27.2727 15C27.2727 21.778 21.778 27.2727 15 27.2727Z"
                          fill="#0F172A"
                          fill-opacity="0.7"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_626_2711">
                          <rect width="30" height="30" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  )}
                </button>
              </div>
            </div>
            {/* Desktop Navigation */}
            <ul className="hidden md:flex flex-wrap md:items-center font-ver text-base font-normal text-darkblue">
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
                  className="w-20 hidden md:flex items-center justify-center rounded-lg"
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

          {/* TOGGLE OF ALL THE MODAL CARDS */}
          {/* TOGGLE OF ALL THE MODAL CARDS */}
          <div className="">
            {/* card 1 */}
            <div className={`${showModal ? "block" : "hidden"}`}>
              <div>
                <JoinGroup />
              </div>
            </div>
            {/* card 2 */}
            <div className={`${showModal ? "block" : "hidden"}`}>
              <div>
                <ConfirmEmail />
              </div>
            </div>
            {/* card 3 */}
            <div className={`${showModal ? "block" : "hidden"}`}>
              <div>
                <JoinLearnerCard />
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {showMenu && (
            <div className=" flex w-full h-screen">
              <div className=" w-full md:hidden flex flex-col pt-20 ">
                <ul className=" flex flex-col gap-5 flex-wrap justify-between items-center font-ver text-base font-normal text-darkblue">
                  <li className=" pt-20 text-[20px] font-normal font-ver">
                    <a href="#about">About Us</a>
                  </li>
                  <li className=" pt-20 text-[20px] font-normal font-ver">
                    <a href="#testimonial">Testimonial</a>
                  </li>
                  <li className=" pt-20 text-[20px] font-normal font-ver">
                    <a href="#contact">Contact Us</a>
                  </li>
                </ul>
                <div className=" flex justify-center  mt-5 pt-20">
                  <div
                    className=" text-[20px] font-normal font-ver"
                    onClick={toggleModal}
                  >
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
              </div>
            </div>
          )}
        </div>
      </AppContainer1>
    </>
  );
};

export default Header;
