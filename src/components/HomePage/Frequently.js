import React from 'react';
import faq from '../../assets/faq.png';
import Accordion from './Accordion';
const Frequently = () => {
  return (
    <div>
      <section className=' body-font px-2'>
        <div className='container py-24 mx-auto flex flex-wrap'>
          <h2 className='title-font sm:text-4xl text-3xl mb-4  text-[#ae3989] uppercase '>
            Frequently Asked Questions
          </h2>
          <p className='mb-8 leading-relaxed'>
            This list of frequently asked questions (FAQs) was developed to
            briefly address any questions you may still have about the business
            with ProcureN. If you do not see your question below, contact us at
            info@procuren.com.
          </p>
          <div className='grid  grid-cols-1 md:grid-cols-3'>
            <div className='grid grid-cols-1 md:col-span-2 lg:h-8'>
              <Accordion />
            </div>
            <div className='flex items-center  lg:-mt-10'>
              <div >
                <img src={faq} alt='FAQs' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Frequently;

//className="sm:w-1/2 lg:w-2/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
