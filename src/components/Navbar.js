import React, { useState } from 'react';

const Navbar = ({ isToggled, setIsToggled }) => {
  const handleToggle = (e) => {
    e.preventDefault();
    setIsToggled((prevToggle) => !prevToggle);
  };

  return (
    <div className={`navbar ${isToggled && 'navbar--active'}`}>
      <a href='#' className='navbar__logo'>
        Andrew Huang
      </a>
      <div
        className={`navbar__toggle ${isToggled && 'navbar__toggle--active'}`}
        onClick={(e) => handleToggle(e)}
      >
        <i className='fas fa-bars' />
      </div>
    </div>
  );
};

export default Navbar;
