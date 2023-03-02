import React from 'react';
import LoginBack from '../assets/LoginBack.jpg';

const SignUp = () => {
  return (
    <div className='relative h-400px bg-indigo-50'>
      <img src={LoginBack} alt='logo' srcset='' className='rounded-3xl' />

      <div className=' bg-indigo-100 rounded-3xl flex justify-center items-center absolute top-1/3 left-1/2 -translate-x-1/2 lg:w-3/5 md:w-2/3 w-2/3 '>
        <form className='px-10 py-10'>
          <h1 className='text-center text-2xl  text-gray-600 font-bold font-sans mb-10'>
            Register
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
            <div>
              <label
                className='text-gray-800 font-semibold block text-md'
                htmlFor='username'
              >
                Username
              </label>
              <input
                className='w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none'
                type='text'
                name='username'
                id='username'
                placeholder='username'
              />
            </div>
            <div className='col-span-2'>
              <label
                className='text-gray-800 font-semibold block text-md'
                htmlFor='email'
              >
                Email
              </label>
              <input
                className='w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none'
                type='text'
                name='email'
                id='email'
                placeholder='@email'
              />
            </div>
            <div>
              <label
                className='text-gray-800 font-semibold block text-md'
                htmlFor='password'
              >
                Password
              </label>
              <input
                className='w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none'
                type='text'
                name='password'
                id='password'
                placeholder='password'
              />
            </div>
            {/* <div>
              <label
                className='text-gray-800 font-semibold block text-md'
                htmlFor='confirm'
              >
                Confirm password
              </label>
              <input
                className='w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none'
                type='text'
                name='confirm'
                id='confirm'
                placeholder='confirm password'
              />
            </div> */}
            <div className='col-span-2'>
              <label
                className='text-gray-800 font-semibold block text-md'
                htmlFor='Company'
              >
                Company Name
              </label>
              <input
                className='w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none'
                type='text'
                name='Company'
                id='Company'
                placeholder='Company Name'
              />
            </div>

            <div>
              <label
                className='text-gray-800 font-semibold block text-md'
                htmlFor='role'
              >
                Select Role
              </label>
              <select
                className='select w-full max-w-xs p-2 rounded-md bg-gray-100 '
                name='role'
                id='role'
              >
                <option disabled selected></option>
                <option>Retailer</option>
                <option>Manufacturer</option>
              </select>
            </div>
            <div>
              <label
                className='text-gray-800 font-semibold block text-md'
                htmlFor='job'
              >
                Job Title
              </label>
              <input
                className='w-full  bg-gray-100 px-4 py-2 rounded-lg focus:outline-none'
                type='text'
                name='job'
                id='job'
                placeholder='Job Title'
              />
            </div>
            <div>
              <label
                className='text-gray-800 font-semibold block text-md'
                htmlFor='number'
              >
                Bussiness Phone Number
              </label>
              <input
                className='w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none'
                type='number'
                name='number'
                id='number'
                placeholder='Number'
              />
            </div>
          </div>
          <button
            type='submit'
            className='w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans'
          >
            Register
          </button>
          <button
            type='submit'
            className='w-full mt-6 mb-3 rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-semibold font-sans'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

// style={ {backgroundImage: `url(${LoginBack})`,width: '80%',height: '400px' ,backgroundSize: 'cover', }}
