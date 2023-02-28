import React from "react";
import faq from "../assets/faq.png";
import Accordion from "./Accordion";
const Frequently = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-10 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full ">
            <div className="lg:w-3/5 md:w-1/2 md:pr-10 md:py-6">
              <h2 className="title-font sm:text-4xl text-3xl mb-4  text-[#ae3989] uppercase ">
                Frequently Asked Questions
              </h2>
              <p className="mb-8 leading-relaxed">
                This list of frequently asked questions (FAQs) was developed to
                briefly address any questions you may still have about the
                business with ProcureN. If you do not see your question below,
                contact us at info@procuren.com.
              </p>
              <Accordion />
            </div>
            <div>
              <img
                
                src={faq}
                alt="step"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Frequently;



//className="sm:w-1/2 lg:w-2/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
//  <div className="flex relative pb-12">
//           <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
//             <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
//           </div>
//           <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
//             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
//               <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
//             </svg>
//           </div>
//           <div className="flex-grow pl-4">
//             <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 1</h2>
//             <p className="leading-relaxed">ProcureN manages the entire supply needs of a construction contractor from developing detailed bill of materials to ordering to delivery at site.</p>
//           </div>
//         </div>
//         <div className="flex relative pb-12">
//           <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
//             <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
//           </div>
//           <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
//             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
//               <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
//             </svg>
//           </div>
//           <div className="flex-grow pl-4">
//             <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 2</h2>
//             <p className="leading-relaxed">Logistics Management is that part of Supply Chain Management that plans, implements, and controls the efficient, effective forward and reverse flow and storage of goods, services and related information between the point of origin and the point of consumption in order to meet customers' requirements.</p>
//           </div>
//         </div>
//         <div className="flex relative pb-12">
//           <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
//             <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
//           </div>
//           <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
//             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
//               <circle cx="12" cy="5" r="3"></circle>
//               <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
//             </svg>
//           </div>
//           <div className="flex-grow pl-4">
//             <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 3</h2>
//             <p className="leading-relaxed">Supply Chain Management encompasses the planning and management of all activities involved in sourcing and procurement, conversion, and all logistics management activities. Importantly, it also includes coordination and collaboration with channel partners, which can be suppliers, intermediaries, third party service providers, and customers.</p>
//           </div>
//         </div> */
//               {/* <div className="flex relative pb-12">
//           <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
//             <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
//           </div>
//           <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
//             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
//               <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
//               <circle cx="12" cy="7" r="4"></circle>
//             </svg>
//           </div>
//           <div className="flex-grow pl-4">
//             <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 4</h2>
//             <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
//           </div>
//         </div> */
//               {/* <div className="flex relative">
//           <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
//             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
//               <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
//               <path d="M22 4L12 14.01l-3-3"></path>
//             </svg>
//           </div>
//           <div className="flex-grow pl-4">
//             <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">FINISH</h2>
//             <p className="leading-relaxed">Pitchfork ugh tattooed scenester echo park gastropub whatever cold-pressed retro.</p>
//           </div>
//         </div>
