import React from "react";

const Track = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-0 py-24 mx-auto">
          <div className="lg:w-2/3 flex flex-col justify-between sm:flex-row sm:items-center items-start mx-auto">
            <div>
              <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
                Track your Order
              </h1>
              <h1 className="flex-grow sm:pr-16 text-md mt-2 title-font text-gray-900">
              Track the order and keep your customers informed via SMS and email notifications
              </h1>
            </div>
            <div>
              <button className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Track;
