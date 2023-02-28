import React from "react";

const Track = () => {
  return (
    <div className="bg-indigo-400">
      <section className="text-white body-font">
        <div className="container px-0 py-24 mx-auto">
          <div className="lg:w-2/3 flex flex-col justify-between sm:flex-row sm:items-center items-start mx-auto">
            <div>
              <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font ">
                Track Your Order
              </h1>
              <h1 className="flex-grow sm:pr-16 text-md mt-2 title-font">
              Track the order and keep your customers informed via SMS and email notifications
              </h1>
            </div>
            <div>
            <button className="inline-flex   border-2 rounded-full border-white py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg hover:bg-gradient-to-b from-purple-500 to-pink-500 hover:text-white shadow-lg shadow-indigo-500/50">
                Teack
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Track;
