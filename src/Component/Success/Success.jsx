import { useState } from "react";

const Success = ({ toggleModal }) => {
  const [getEmail, setGetEmail] = useState(false);
  const [email, setEEmail] = useState("");

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
    const atPos = email.indexOf("@");
    const hoester = email.substring(atPos + 1);
    return `https://www.${hoester}`;
  };
  const handleRedirect = () => {
    const emailLink = redirectToEmail();

    window.open(emailLink, "_blank");
  };

  return (
    <div>
      <div className="h-screen flex justify-center items-center">
        <div className="relative modal-content font-ver sm:w-[342px] md:w-[602px] xl:w-[50%] 2xl:w-[40%]  rounded-2xl  bg-[#E76F51]  px-12 py-12">
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

          <div className=" text-white">
            <div className=" justify-center flex md:mt-10 sm:mt-5  ">
              <h1 className=" w-[309px] leading-[44px] font-ver font-normal text-center lg:text-[36px] sm:text-[25px]">
                Successful
              </h1>
            </div>
            <div className=" mt-5 flex text-center justify-center">
              <p className=" md:w-[457px] sm:w-[243px] md:text-[20px] sm:text-[14px] font-normal font-ver">
                You have been added to a group, check your email for the invite.
              </p>
            </div>

            <div className=" flex justify-center lg:mt-10 sm:mt-10">
              <button
                onClick={handleRedirect}
                className=" bg-white md:w-[185px] sm:w-[282px] md:h-[50px] sm:h-[40px] p-[10px] md:rounded-[30px] sm:rounded-[45px] "
              >
                <span className="w-[117px] leading-[24px] font-ver font-normal text-[20px] text-[#E76F51]">
                  Go to Email
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
