import React from "react";
import { BiCaretLeftCircle } from "react-icons/bi";
import heroImag from "../assets/heroImag.png";

const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-indigo-800">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Leading Procurement
              <br className="hidden lg:inline-block " /> Management Expert
            </h1>
            <p className="mb-8 leading-relaxed text-gray-400">
              Working closely with top architectures and developers, we raise
              the bar for <b className="text-gray-200">Quality</b> and{" "}
              <b className="text-gray-200">Perfection.</b>
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 hover:bg-gradient-to-b from-purple-500 to-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">
                Get Started
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 rounded-full border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Watch Video
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={heroImag}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
