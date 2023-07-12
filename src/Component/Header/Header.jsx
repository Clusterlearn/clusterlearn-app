import React from "react";
import "./Header.css";
import AppContainer1 from "../AppContainer1/AppContainer1";
import Logo from "../Logo/Logo";

function Header() {
  return (
    <div>
      <AppContainer1>
        <nav className="flex flex-wrap flex-row justify-between items-center my-5 text-sm md:text-lg">
         <Logo Text={"CLUSTER"}/>
          <ul className="flex flex-wrap justify-center items-center font-ver text-base font-normal text-darkblue">
            <li className="px-5">About Us</li>
            <li className="px-5">Testimonial</li>
            <li className="px-5">Contact Us</li>
          </ul>
          <div>
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
        </nav>
      </AppContainer1>
    </div>
  );
}

export default Header;
