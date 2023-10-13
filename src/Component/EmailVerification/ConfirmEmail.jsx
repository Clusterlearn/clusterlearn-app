import React, { useState } from "react";

const ConfirmEmail = ({ toJoinLearner, toggleModal }) => {
  const [getEmail, setGetEmail] = useState(false);
  const [email, setEEmail] = useState("");
  // const [modal, setModal] = useState(false);

  // const toggleModal = () => {
  //   setModal(!modal);
  // };

  const interval = setInterval(() => {
    const email = localStorage.getItem("email");
    // console.log("in this page", email);
    setEEmail(email);
    if (getEmail !== "") {
      setGetEmail(true);
    }

    if (getEmail !== "") {
      clearInterval(interval);
    }
  }, [5000]);

  const redirectToEmail = () => {
    const atPos = email.indexOf("@")
    const hoester = email.substring(atPos + 1);
    return `https://www.${hoester}`
  };
  const handleRedirect = () => {
    const emailLink = redirectToEmail();

    window.open(emailLink, "_blank")
  }


  return (
    // fixed z-10 inset-0 overscroll-none bg-black bg-opacity-50
    <div className="">
      <div className="h-screen flex justify-center items-center">
        <div className="relative modal-content font-ver sm:w-[342px] lg:w-[602px] xl:w-[50%] 2xl:w-[40%]  rounded-2xl  bg-[#E76F51]  lg:px-12 sm:px-8 lg:py-12">
          <span
            className="cursor-pointer absolute top-7 right-6"
            onClick={toggleModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16.7339 9.07903C17.1747 8.66825 17.1989 7.97795 16.7882 7.53721C16.3774 7.09647 15.6871 7.07218 15.2463 7.48296L12.0542 10.4581L9.07903 7.26598C8.66825 6.82524 7.97795 6.80095 7.53721 7.21173C7.09647 7.62252 7.07218 8.31282 7.48296 8.75356L10.4581 11.9457L7.26598 14.9209C6.82524 15.3316 6.80095 16.0219 7.21174 16.4627C7.62252 16.9034 8.31282 16.9277 8.75356 16.5169L11.9457 13.5418L14.9209 16.7339C15.3316 17.1747 16.0219 17.1989 16.4627 16.7882C16.9034 16.3774 16.9277 15.6871 16.5169 15.2463L13.5418 12.0542L16.7339 9.07903Z"
                fill="white"
                fill-opacity="0.7"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM12 21.8182C6.57757 21.8182 2.18182 17.4224 2.18182 12C2.18182 6.57757 6.57757 2.18182 12 2.18182C17.4224 2.18182 21.8182 6.57757 21.8182 12C21.8182 17.4224 17.4224 21.8182 12 21.8182Z"
                fill="white"
                fill-opacity="0.7"
              />
            </svg>
          </span>
          <h1 className="text-white text-center sm:pt-20 md:mt-20 md:text-4xl sm:text-[20px] font-normal :w-[245px]">
            Verification code <br /> sent!
          </h1>
          <div className="md:flex flex-row justify-evenly items-center md:mt-20 sm:mt-10 sm:mb-5 md:mb-0">
            <button
              onClick={toJoinLearner}
              type="button"
              className="lg:w-[175px] sm:w-[282px] lg:h-[60px] sm:h-[48px] sm:text-[14px] text-borderEmail lg:text-xl font-normal bg-transparent border-2 rounded-[30px] border-borderEmail"
            >
              Join Group
            </button>

            
              <button
                onClick={handleRedirect}
                className=" sm:mt-4 md:mt-0 lg:w-[175px] sm:w-[282px] lg:h-[60px] sm:h-[48px] sm:text-[14px] text-[#E76F51] text-xl font-normal bg-white border-2 rounded-[30px] border-transparent"
              >
                Go to mail
              </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmEmail;
