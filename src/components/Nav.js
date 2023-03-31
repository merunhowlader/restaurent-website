import React from 'react';
// import data
import { navData } from '../data';

import {NavLink} from "react-router-dom"
const Nav = () => {
  return (
    <nav className='w-full h-full'>
      <ul className='h-full flex flex-col justify-center items-center gap-y-6'>
        {navData.map((item, index) => {
          return (
            <li key={index}>
              <NavLink
                className={(navlInk)=>navlInk.isActive?"text-xl text-blue-900 capitalize font-primary italic hover:text-dark transition-all duration-300":'text-xl capitalize font-primary italic hover:text-dark transition-all duration-300'}
                to={item.href}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
