import React from 'react';
// import { BiCaretLeftCircle } from "react-icons/bi";
import heroImag from '../assets/heroImag.png';

const Hero = () => {
  return (
    <div>
      <section className='text-gray-600 body-font bg-indigo-800 h-screen'>
        <div className='container mx-auto flex px-5  h-full  md:flex-row  flex-col items-center justify-center '>
          <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col   '>
            <div>
              <h1 className='title-font text-4xl  md:text-5xl  font-medium text-white'>
                Leading Procurement
                
              </h1>
            </div>
            <div>
              <h1 className='title-font text-4xl md:text-5xl mb-4 font-medium text-white'>
                Management Expert
              </h1>
            </div>
            <p className='mb-8 leading-relaxed text-xl text-gray-400 text-left md:text-2xl'>
              Working closely with top architectures and developers, we raise
              the bar for <b className='text-gray-300'>Quality</b> and{' '}
              <b className='text-gray-300'>Perfection.</b>
            </p>
            <div className='flex justify-start'>
              <button className='inline-flex text-white bg-indigo-500 hover:bg-gradient-to-b from-purple-500 to-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-lg'>
                Get Started
              </button>
              <button className='ml-4 inline-flex text-gray-700 bg-gray-100 rounded-full border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 text-lg'>
                Watch Video
              </button>
            </div>
          </div>
          <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
            <img
              className='object-cover object-center rounded'
              alt='hero'
              src={heroImag}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
