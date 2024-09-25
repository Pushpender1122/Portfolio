import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation(); // Get the current route path

  return (
    <header className='header'>
      <NavLink 
        to='/' 
        className='w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md'
      >
        <p className='blue-gradient_text'>P</p>
      </NavLink>

      <nav className='flex text-lg gap-7 font-medium'>
        {location.pathname !== '/' && ( 
          <NavLink 
            to='/' 
            className={({ isActive }) => 
              isActive ? "text-blue-600" : "text-black"
            }
          >
            Home
          </NavLink>
        )}

        <NavLink 
          to='/about' 
          className={({ isActive }) => 
            isActive ? "text-blue-600" : "text-black"
          }
        >
          About
        </NavLink>
        
        <NavLink 
          to='/projects' 
          className={({ isActive }) => 
            isActive ? "text-blue-600" : "text-black"
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
