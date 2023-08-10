import React, { useState } from "react";
import { useFormik } from "formik";
import "./Header.css";
import AppContainer1 from "../AppContainer1/AppContainer1";
import Logo from "../Logo/Logo";
import Accordion from "../JoinGroup/Accordion";
import CloseCopy from "../../../src/asset/close-copy.png";
import { ReactComponent as HamburgerNav } from "../../../src/asset/HamburgerNav.svg";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const [modal, setModal] = useState(false);

  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");


  const formik = useFormik({
    initialValues: {
      email: "",
      number: "",
    }
  })

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div>
      <AppContainer1>
        <div className="">
          <nav className="md:flex  md:justify-between md:items-center my-5 text-sm md:text-lg">
            <div className="flex justify-between items-center">
              <Logo Text={"CLUSTER"} />

              {/* Hamburger Icon */}
              <div className="md:hidden cursor-pointer block text-3xl">
                <button
                  onClick={() => setShowMenu(!showMenu)}
                  className="text- text-3xl hover:text-gray-200 duration-400 focus:outline-none"
                >
                  <HamburgerNav />
                </button>
              </div>
            </div>
            {/* Desktop Navigation */}
            <ul className="hidden md:flex flex-wrap md:items-center z-[1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[400px] transition-all ease-in duration-500  font-ver text-base font-normal text-darkblue">
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

        {modal && (
          <div className="modal">
            <div className="overlay">
              <div className="modal-content font-ver mx-auto w-[525px] h-[522px] rounded-2xl bg-gray-100">
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
                {/* Form */}
                {/* Form */}
                <form onSubmit={""}>
                  <div className="flex flex-col gap-3 py-12 items-center">
                    {/* This is expected to take the email address that was written in the verify email section */}
                    {/* This is expected to take the email address that was written in the verify email section */}
                    <input
                      style={{
                        borderRadius: "30px",
                        border: "1px",
                        borderWidth: "solid",
                        borderColor: "var(--back, rgba(15, 23, 42, 0.30))",
                      }}
                      className="w-[490px] h-[66px] items-center  px-5 py-7 text-base font-ver font-normal placeholder:text-darkblue"
                      type="email"
                      placeholder="Ayomidefrezi@gmail.com"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                    <input
                      style={{
                        borderRadius: "30px",
                        border: "1px",
                        borderWidth: "solid",
                        borderColor: "var(--back, rgba(15, 23, 42, 0.30))",
                        color: "var(--black-inactive, rgba(15, 23, 42, 0.50))",
                      }}
                      className="w-[490px] h-[66px] items-center px-5 py-7 text-base font font-normal"
                      type="number"
                      placeholder="Enter email verification code"
                      onChange={(e) => setNumber(e.target.value)}
                      value={number}
                    />
                    <Accordion />

                    <div className="mt-8">
                      <button
                        type="submit"
                        className="bg-[#E76F51] text-white text-center font-ver font-normal text-base w-[490px] h-[66px] rounded-[40px]"
                      >
                        Join Group
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </AppContainer1>
    </div>
  );
};

export default Header;
