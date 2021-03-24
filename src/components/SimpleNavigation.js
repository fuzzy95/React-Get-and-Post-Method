import React from 'react';
import { NavLink } from 'react-router-dom';

const SimpleNavigation = () => {
  return (
    <div className='flex justify-center items-center space-x-12 pt-10'>
      <NavLink
        activeClassName='nm-concave-purple-600'
        exact={true}
        className='px-10 py-1 font-semibold text-xl nm-flat-purple-400 hover:bg-transparent text-white hover:text-purple-400 border border-purple-600 hover:border-purple-600 rounded'
        to='/get-method'
      >
        Get Method
      </NavLink>
      <NavLink
        activeClassName='nm-concave-purple-600'
        exact={true}
        className='px-10 py-1 font-semibold text-xl nm-flat-purple-400 hover:bg-transparent text-white hover:text-purple-400 border border-purple-600 hover:border-purple-600 rounded'
        to='/post-method'
      >
        Post Method
      </NavLink>
    </div>
  );
};

export default SimpleNavigation;
