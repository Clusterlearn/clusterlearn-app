import React from "react";

const Logo = ({ Text }) => {
  return (
    <div>
      <div className="relative font-times text-lg mr-10 font-normal cursor-pointer">
        <a href="#home">
          <h2 className="text-logo-left">
            {Text}
            <span className="text-logo-right">LEARN</span>
          </h2>
        </a>
      </div>
    </div>
  );
};

export default Logo;
