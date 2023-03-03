import React from 'react';

const UserDashboard = () => {
  return (
    <>
      <div className='grid grid-cols-8 h-screen'>
        <div className='bg-gray-200 col-span-2'>
          hello world this is sidebar
          <ul >
            <a href='/'><li className='py-1 bg-green-800 text-yellow-300 '>i</li></a>
            <li className='py-1 bg-green-800 text-yellow-300'>I</li>
            <li className='py-1 bg-green-800 text-yellow-300'>I</li>
            <li className='py-1 bg-green-800 text-yellow-300'>I</li>
            <li className='py-1 bg-green-800 text-yellow-300'>I</li>
          </ul>
        </div>
        <div className='bg-red-200 col-span-6'>This is main content</div>
      </div>
    </>
  );
};

export default UserDashboard;
