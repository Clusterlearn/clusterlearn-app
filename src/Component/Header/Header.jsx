import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <nav className="flex flex-wrap flex-row justify-between items-center my-5 text-sm md:text-lg">
        <div className="logo font-times">
          <h2 className="text-logo-left">
            Cluster<span className="text-logo-right">Learn</span>
          </h2>
        </div>
        <ul className="flex flex-wrap justify-center items-center font-ver text-base font-normal text-darkblue">
          <li className="px-5">About Us</li>
          <li className="px-5">Testimonial</li>
          <li className="px-5">Contact Us</li>
        </ul>
        <div>
          <button
            className="w-20 flex items-center justify-center rounded-lg"
            style={{
              border: "1px solid var(--black-inactive, rgba(15, 23, 42, 0.50))",
            }}
          >
            Join
          </button>
        </div>
      </nav>
    </>
  );
}

export default Header;
