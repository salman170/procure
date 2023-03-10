import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../../assets/procuren-logo-white.png';
import { Link } from 'react-scroll';


const navigation = [
  { name: 'Home', href: 'hero' },
  { name: 'About', href: 'about' },
  { name: 'Services', href: 'service' },
  { name: 'Track Order', href: 'trackorder' },
  { name: 'Contact', href: 'contact' },
];

export default function Headers() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='isolate  bg-indigo-800 fixed z-10 w-full px-1 py-1 '>
      <div className='px-6  lg:px-8 '>
        <nav
          className='flex items-center py-4 justify-between'
          aria-label='Global'
        >
          <div className='flex lg:flex-1'>
            <Link
              className='flex title-font font-medium items-center text-gray-900 '
              to='hero'
              spy={true}
              smooth={true}
              duration={500}
            >
              <span className=' text-xl'>
                <img src={logo} alt='logo' className='h-12' />
              </span>
            </Link>
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon
                className='h-6 w-6 bg-white border-1 rounded-md'
                aria-hidden='true'
              />
            </button>
          </div>
          <div className='hidden lg:flex lg:gap-x-10 cursor-pointer'>
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className='text-lg font-semibold leading-6 text-white hover:text-yellow-500'
                spy={true}
                smooth={true}
                offset={50}
                duration={400}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
            <a target={'_blank'} href='login'> <button
              type='button'
              className='text-white hover:bg-gradient-to-b from-purple-500 to-pink-500  focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-lg px-2.5 py-1.5 text-center  flex items-center'
            >
              Login
              <svg
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='w-4 h-4 ml-1'
                viewBox='0 0 24 24'
              >
                <path d='M5 12h14M12 5l7 7-7 7'></path>
              </svg>
            </button></a>
           
          </div>
        </nav>
        <Dialog as='div' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel className='fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden'>
            <div className='flex items-center justify-between'>
              <a href='/' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Your Company</span>
                <img
                  className='h-8'
                  src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                  alt=''
                />
              </a>
              <button
                type='button'
                className=' rounded-md p-2.5 text-gray-700'
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-8 w-8' aria-hidden='true' />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className='space-y-2 py-6'>
                  {navigation.map((item) => (
                    <Link
                      onClick={() => setMobileMenuOpen(false)}
                      key={item.name}
                      to={item.href}
                      className='-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10'
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={400}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className='py-6'>
                  <a
                    target={'_blank'} href='login'
                    className='-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10'
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
      {/* <header className=" text-white body-font bg-indigo-800 fixed  z-50 w-full px-5 py-1 flex justify-between items-center">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <a
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            href="/"
          >
            <span className="ml-3 text-xl">
              <img src={logo} alt="logo" className="h-14" />
            </span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-yellow-500" href="/">
              Home
            </a>
            <a className="mr-5 hover:text-yellow-500" href="/">
              About
            </a>
            <a className="mr-5 hover:text-yellow-500" href="/">
              Services
            </a>
            <a className="mr-5 hover:text-yellow-500" href="/">
              Track Order
            </a>
            <a className="mr-5 hover:text-yellow-500" href="/">
              Contact
            </a>
          </nav>
          <button
            type="button"
            className="text-white hover:bg-gradient-to-b from-purple-500 to-pink-500  focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center  flex items-center"
          >
            Login
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>  */}
      {/* <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Announcing our next round of funding.{' '}
                <a href="/" className="font-semibold text-indigo-600">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Data to enrich your online business
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat aliqua.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg
              className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
            >
              <path
                fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <Link key={item.name} to={item.href} spy={true} smooth={true} className="text-lg font-semibold leading-6 text-white hover:text-yellow-500">
                    {item.name}
                  </Link>
    </main>*/}
    </div>
  );
}
