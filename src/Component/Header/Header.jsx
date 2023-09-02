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
          <nav className="relative md:flex md:justify-between md:items-center my-5 text-sm md:text-lg">
            <div className="flex justify-between items-center">
              <Logo Text={"CLUSTER"} />

              {/* Hamburger Icon */}
              <div className="md:hidden cursor-pointer block text-4xl">
                <button
                  onClick={() => setShowMenu(!showMenu)}
                  className="text- text-3xl hover:text-gray-200 duration-400 focus:outline-none"
                >
                  <HamburgerNav />
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
            <div className="md:hidden flex flex-col justify-between items-center">
              <ul className="flex flex-col gap-5 pl-32 flex-wrap justify-between items-center font-ver text-base font-normal text-darkblue">
                <li className="">
                  <a href="#about">About Us</a>
                </li>
                <li className="">
                  <a href="#testimonial">Testimonial</a>
                </li>
                <li className="">
                  <a href="#contact">Contact Us</a>
                </li>
              </ul>
              <div className="pl-32 mt-5">
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
            </div>
          )}
        </div>
      </AppContainer1>
    </>
  );
};

export default Header;
