import React from "react";

const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-20 items-center justify-center flex-col">
          {/* <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          /> */}
          <div className="text-center lg:w-2/3 w-full">
            <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-purple-700 uppercase ">
              About us
            </h2>
            <hr className="m-2"/>
            <p className="mb-8 leading-relaxed">
            ProcureN's unified approach — encompassing strategy, Software and Managed services — helps enterprises rapidly build the infrastructure and capabilities required to power high-performance procurement and supply chain organizations
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-indigo-600  border-2 rounded-md border-indigo-400 py-2 px-4 focus:outline-none hover:bg-indigo-600  text-lg hover:bg-gradient-to-b from-purple-500 to-pink-500 hover:text-white shadow-lg shadow-indigo-500/50">
                Know More...
              </button>
              {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
