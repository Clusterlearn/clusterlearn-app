import React, { useState } from "react";
import axios from "axios";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ReactComponent as CloseCircle } from "../../../src/asset/CloseCircle.svg";
import { ReactComponent as EmailIcon } from "../../../src/asset/EmailIcon.svg";


const JoinGroup = ({toConfirmEmail , toggleModal}) => {
 const [isChecked, setIsChecked] = useState(false);

 const dynamicBorderStyle = isChecked ? "border-[#E76F51]" : "border-[#0F172A]";


  const initialValues = {
    email: "",
    rememberEmail: false,
  };

   const validationSchema = Yup.object().shape({
     email: Yup.string()
       .email("Invalid email address")
       .required("Email is required"),
     rememberEmail: Yup.boolean()
       .oneOf([true], "check the button if you want your email remembered")
       .required("check the button if you want your email remembered"),
   });

     const handleSubmit = async (values, { setSubmitting, resetForm }) => {
       try {
         const response = await axios.post(
           "https://clusterlearn.cyclic.app/",
           values
         );

         if (response.status === 200) {
           console.log("Form submitted successfully.");
           resetForm();
         } else {
           console.error("Form submission failed.");
         }
       } catch (error) {
         console.error("Error:", error);
       }

       setSubmitting(false);
     };


    return (
      <>
        {/* fixed z-10 inset-0 overscroll-none bg-black bg-opacity-50 */}
        <div className="modal">
          <div className="">
            <div className="h-screen flex justify-center items-center">
              <div className="relative modal-content font-ver sm:w-[342px]   w-[602px] md:w-[80%] lg:w-[70%] xl:w-[50%] 2xl:w-[40%]  rounded-2xl bg-gray-100">
                <div className="flex items-center justify-between px-8 lg:py-8 sm:mt-4 ">
                  <h1 className="text-darkblue md:text-2xl lg:text-2xl sm:text-[16px] font-normal">
                    Verify Email
                  </h1>
                  <span className="cursor-pointer" onClick={toggleModal}>
                    <CloseCircle />
                  </span>
                </div>
                <hr className="w-full h-[2px] bg-[rgba(15, 23, 42, 0.10);]" />
                {/* Form */}
                {/* Form */}
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <div className="flex flex-col px-8">
                        <label className="lg:text-xl md:text-xl sm:[16px] text-darkblue font-normal leading-6 md:mt-16 lg:mt-16 sm:mt-8">
                          Email
                        </label>
                        <div className="relative flex items-center text-darkblue focus-within:text-darkblue ">
                          <EmailIcon className="absolute ml-3 mt-5 text-darkblue pointer-events-none" />
                          <Field
                            // onChange={handleInput}
                            className="pr-3 pl-12 py-3  w-full text-xl text-darkblue font-normal rounded-[30px] placeholder:text-darkblue placeholder:text-xl border-none ring-2 ring-darkblue focus:ring-2 leading-6 mt-5 "
                            type="email"
                            id="email"
                            name="email"
                            autoComplete="disable"
                            placeholder="Enter email address"
                          />
                        </div>
                        <div className="text-red-600 mt-2">
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="error"
                          />
                        </div>

                        <div className="flex flex-row-reverse">
                          <div className="flex flex-row gap-2 lg:mr-8 mt-5 items-center">
                            <p>Remember me </p>
                            <label
                              htmlFor="check"
                              className={`relative cursor-pointer bg-white w-6 h-[14px] border-2 ${dynamicBorderStyle} rounded-full`}
                            >
                              <input
                                type="checkbox"
                                id="check"
                                name="rememberEmail"
                                className="peer sr-only"
                                onClick={() => setIsChecked(!isChecked)}
                              />
                              <span
                                className="w-2/5 h-5/5  bg-darkblue absolute  rounded-full
                                top-0 bottom-0 peer-checked:bg-[#E76F51]  peer-checked:left-3 transition-all duration-500"
                              ></span>
                            </label>
                            <ErrorMessage
                              name="agreeToTerms"
                              component="div"
                              className="error"
                            />
                          </div>
                        </div>
                        <div className="lg:pt-20 sm:pt-2 lg:mb-10">
                          <button
                            disabled={isSubmitting}
                            onClick={toConfirmEmail}
                            type="button"
                            className="bg-[#E76F51] p-[12px] text-white text-center font-ver font-normal text-base w-full rounded-[30px] sm:mb-5"
                          >
                            Join Group
                          </button>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default JoinGroup;