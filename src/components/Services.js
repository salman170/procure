import React from "react";

const Services = () => {
  return (
    <div id="service">
      <section className="text-gray-500 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-[#492dd5e6] uppercase">
              Services
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-800">
              Our business and technology services bring digital transformation,
              innovation, and growth to companies around the world
            </p>
            {/* <div className="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
              <button className="py-1 px-4 bg-indigo-500 text-white focus:outline-none">
                Monthly
              </button>
              <button className="py-1 px-4 focus:outline-none">Annually</button>
            </div> */}
            <hr />
          </div>
          <div className="flex flex-wrap -m-4 ">
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full ">
              <div className="h-full p-6 rounded-lg border-2 border-gray-300 hover:border-indigo-500 flex flex-col relative overflow-hidden shadow-lg shadow-indigo-500/50">
                <h1 className="text-3xl  text-purple-800 pb-4 mb-4 py-10 px-1 border-b border-[#492dd5e6] border-gray-200 leading-none rounded-md bg-gray-100">
                  Purchase / Supply Raw Materials
                </h1>
                <h3 className="text-lg px-1">
                  Streamline your direct materials sourcing and procurement
                  processes to capitalize on time and cost efficiencies,
                  minimize defect rates and boost brand value{" "}
                </h3>
                <button className="flex items-center mt-3 text-white bg-indigo-500 border-0  py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">
                  Know More...
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full ">
              <div className="h-full p-6 rounded-lg border-2 border-gray-300 hover:border-indigo-500 flex flex-col relative overflow-hidden shadow-lg shadow-indigo-500/50">
                <h1 className="text-3xl  text-purple-800 pb-4 mb-4 py-10 px-1 border-b border-[#492dd5e6] border-gray-200 leading-none rounded-md bg-gray-100">
                Purchase Order financing
                </h1>
                <h3 className="text-lg px-1">
                From requisition to invoice payment, ProcureN handles the full procure-to-pay process and gives complete visibility of the progress of your purchase orders at all times. Buyers can track the status of their requisition.
                </h3>
                <button className="flex items-center mt-3 text-white bg-indigo-500 border-0  py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">
                  Know More...
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full ">
              <div className="h-full p-6 rounded-lg border-2 border-gray-300 hover:border-indigo-500 flex flex-col relative overflow-hidden shadow-lg shadow-indigo-500/50">
                <h1 className="text-3xl  text-purple-800 pb-4 mb-4 py-10 px-1 border-b border-[#492dd5e6] border-gray-200 leading-none rounded-md bg-gray-100">
                Tracking Mechanism
                </h1>
                <h3 className="text-lg px-1">
                Buyers can track the status of their requisition - from submission through multi-stage approval, through flipping into a purchase order, submission to the supplier, acknowledgement by the supplier, to advanced shipping notice (ASN), and finally the invoice.
                </h3>
                <button className="flex items-center mt-16 text-white bg-indigo-500 border-0  py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">
                  Know More...
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full ">
              <div className="h-full p-6 rounded-lg border-2 border-gray-300 hover:border-indigo-500 flex flex-col relative overflow-hidden shadow-lg shadow-indigo-500/50">
                <h1 className="text-3xl  text-purple-800 pb-4 mb-4 py-10 px-1 border-b border-[#492dd5e6] border-gray-200 leading-none rounded-md bg-gray-100">
                Sales Management / ERP Dashboard
                </h1>
                <h3 className="text-lg px-1">
                An application that automates business processes and provides insights and internal controls, drawing on a central database that collects inputs from departments including accounting, manufacturing, supply chain management, sales, marketing and human resources (HR).
                </h3>
                <button className="flex items-center mt-2 text-white bg-indigo-500 border-0  py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">
                  Know More...
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
                <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                  POPULAR
                </span>
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                  PRO
                </h2>
                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>$38</span>
                  <span className="text-lg ml-1 font-normal text-gray-500">
                    /mo
                  </span>
                </h1>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Vexillologist pitchfork
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Tumeric plaid portland
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Hexagon neutra unicorn
                </p>
                <p className="flex items-center text-gray-600 mb-6">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Mixtape chillwave tumeric
                </p>
                <button className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">
                  Button
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p className="text-xs text-gray-500 mt-3">
                  Literally you probably haven't heard of them jean shorts.
                </p>
              </div>
            </div>
            */}
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
