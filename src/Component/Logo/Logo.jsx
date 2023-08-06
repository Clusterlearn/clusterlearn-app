import React from "react";

const Logo = ({ Text }) => {
  return (
    <div>
      <div className="font-times text-lg font-normal cursor-pointer">
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
