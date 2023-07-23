import React from 'react'
// import { ReactComponent as Accordi } from "../../../src/asset/accordion.svg";

function Accordion() {
  return (
    <div>
      <div
        className=""
        style={{
          width: "540px",
          height: "66px",
          border: "1px solid #111",
          borderRadius: "30px",
          overflow: "hidden",
        }}
      >
        <select
          style={{
            width: "553px",
            height: "66px",
            borderRadius: "30px",
            padding: "10px",
            cursor: "pointer",
          }}
        >
            <option value="" disabled selected hidden>
              Select your learning stage
            </option>
            <option value="">
              <p>Beginner</p>
            </option>
            <option value="">Intermediate</option>
            <option value="">Advanced</option>
        </select>
      </div>
    </div>
  );
}

export default Accordion















// import React, { useState } from 'react';
// import Acco from "../../../src/asset/accordion.svg";


// const Accordion = () => {
//   const [isSectionExpanded, setIsSectionExpanded] = useState(false);

//   const toggleAccordion = () => {
//     setIsSectionExpanded(!isSectionExpanded);
//   };

//   return (
//     <div
//       className="accordion bg-red-500 w-[522px] h-[66px] items-center px-5 py-7 text-base font font-normal cursor-pointer"
//       style={{
//         borderRadius: "30px",
//         border: "1px",
//         borderWidth: "solid",
//         borderColor: "var(--back, rgba(15, 23, 42, 0.30))",
//         color: "var(--black-inactive, rgba(15, 23, 42, 0.50))",
//       }}
//     >
//       <div className="accordion-header flex flex-row justify-between" onClick={toggleAccordion}>
//         <p>Accordion Header</p>
//         <img src={Acco} alt="accordion drop down" srcset="drop" />
//       </div>
//       {isSectionExpanded && (
//         <div className="accordion-content">
//           {/* Content of the accordion section */}
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...
//         </div>
//       )}
//     </div>
//   );
// };

// export default Accordion;






// import { Accordion, AccordionItem } from "@szhsin/react-accordion";

// export default function Example() {
//   return (
//     <Accordion>
//       <AccordionItem header="What is Lorem Ipsum?">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//         tempor incididunt ut labore et dolore magna aliqua.
//       </AccordionItem>

//       <AccordionItem header="Where does it come from?">
//         Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel erat
//         quis sodales. Nam ex enim, eleifend venenatis lectus vitae, accumsan
//         auctor mi.
//       </AccordionItem>

//       <AccordionItem header="Why do we use it?">
//         Suspendisse massa risus, pretium id interdum in, dictum sit amet ante.
//         Fusce vulputate purus sed tempus feugiat.
//       </AccordionItem>
//     </Accordion>
//   );
// }