import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar'>
      <a href='#' className='navbar__logo'>
        Portfolio
      </a>
      <div className='navbar__toggle'>
        <i class='fas fa-bars' />
      </div>
    </div>
  );
};

export default Navbar;
