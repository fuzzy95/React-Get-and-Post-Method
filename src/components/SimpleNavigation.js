import React from 'react';
import { Link } from 'react-router-dom';

const SimpleNavigation = () => {
  return (
    <div className='flex justify-center items-center space-x-12 pt-10'>
      <Link
        className='px-10 py-1 font-semibold text-xl bg-purple-400 hover:bg-transparent text-white hover:text-purple-400 border border-purple-400 gover:border-purple-400'
        to='/get-method'
      >
        Get Method
      </Link>
      <Link
        className='px-10 py-1 font-semibold text-xl bg-purple-400 hover:bg-transparent text-white hover:text-purple-400 border border-purple-400 gover:border-purple-400'
        to='/post-method'
      >
        Post Method
      </Link>
    </div>
  );
};

export default SimpleNavigation;
