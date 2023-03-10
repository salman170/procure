import React from 'react';
import logo from '../../assets/procuren-logo-white.png';

const Footer = () => {
  return (
    <div>
      <footer className='text-white body-font bg-indigo-300'>
        <div className='container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col'>
          <div className='w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left'>
            <a
              className='flex title-font font-medium items-center md:justify-start justify-center text-gray-900 '
              href='/'
            >
              
              <span className='ml-3 text-xl'><img src={logo} alt='logo' className='h-12' /></span>
            </a>
            <p className='mt-2 text-sm text-black'>
              Air plant banjo lyft occupy retro adaptogen indego
            </p>
          </div>
          <div className='flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center'>
            <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
              <h2 className='title-font font-medium text-gray-900 tracking-widest text-md underline underline-offset-8 mb-3'>
                Useful Links
              </h2>
              <nav className='list-none mb-10'>
                <li>
                  <a className='text-black hover:text-gray-800' href='/about'>
                    Home
                  </a>
                </li>
                <li>
                  <a className='text-black hover:text-gray-800' href='/about'>
                    About us
                  </a>
                </li>
                <li>
                  <a className='text-black hover:text-gray-800' href='/about'>
                    Services
                  </a>
                </li>
                <li>
                  <a className='text-black hover:text-gray-800' href='/about'>
                    Terms of service
                  </a>
                </li>
                <li>
                  <a className='text-black hover:text-gray-800' href='/about'>
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a className='text-black hover:text-gray-800' href='/about'>
                    Inventory Management
                  </a>
                </li>
              </nav>
            </div>
            <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
              <h2 className='title-font font-medium text-gray-900 tracking-widest text-md underline underline-offset-8 mb-3'>
                Our Services
              </h2>
              <nav className='list-none mb-10'>
                <li>
                  <a className='text-black hover:text-gray-800' href='/about'>
                    Supply Raw Materials
                  </a>
                </li>
                <li>
                  <a className='text-black hover:text-gray-800' href='/about'>
                    Purchase Raw Maerials
                  </a>
                </li>
                <li>
                  <a className='text-black hover:text-gray-800' href='/about'>
                    Purchase Order Finacncing
                  </a>
                </li>
                <li>
                  <a className='text-black hover:text-gray-800' href='/about'>
                    Order Tracking Mechanism
                  </a>
                </li>
                <li>
                  <a className='text-black hover:text-gray-800' href='/about'>
                    Sales Management
                  </a>
                </li>
                <li>
                  <a className='text-black hover:text-gray-800' href='/about'>
                    ERP Dashboard
                  </a>
                </li>
              </nav>
            </div>
            <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
              <h2 className='title-font font-medium text-gray-900 tracking-widest text-sm mb-3'>
                SUBSCRIBE
              </h2>
              <div className='flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start'>
                <div className='relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2'>
                  <label
                    htmlFor='footer-field'
                    className='leading-7 text-sm text-black'
                  >
                    Placeholder
                  </label>
                  <input
                    type='text'
                    id='footer-field'
                    name='footer-field'
                    className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  />
                </div>
                <button className='lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded'>
                  Button
                </button>
              </div>
              <p className='text-black text-sm mt-2 md:text-left text-center'>
                Bitters chicharrones fanny pack
                <br className='lg:block hidden' />
                waistcoat green juice
              </p>
            </div>
          </div>
        </div>
        <div className='bg-indigo-500'>
          <div className='container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row'>
            <p className='text-gray-200 text-sm text-center sm:text-left'>
              ?? Copyright <span className='font-medium'>ProcureN</span>. All
              Rights Reserved
              {/* <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@knyttneve</a> */}
            </p>
            <span className='inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start'>
              {/* <a className="text-gray-500">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
          
        </a> */}
              <p className='text-gray-200'>
                Designed by{' '}
                <a
                  href='https://www.broaddcast.com/'
                  rel='noopener noreferrer'
                  className='text-black rounded-full px-1 hover:bg-gradient-to-b from-purple-500 to-pink-500 ml-1'
                  target='_blank'
                >
                  BroaddCast
                </a>{' '}
              </p>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
