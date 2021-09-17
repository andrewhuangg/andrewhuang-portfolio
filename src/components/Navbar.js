import React from 'react';
import { Tween } from 'react-gsap';

const Navbar = ({ isToggled, setIsToggled }) => {
  const handleToggle = (e) => {
    e.preventDefault();
    setIsToggled((prevToggle) => !prevToggle);
  };

  return (
    <div className={`navbar ${isToggled && 'navbar--active'}`}>
      <Tween
        from={('.navbar__logo', { opacity: 0, delay: 0.8, y: 5 })}
        duration={1.5}
        ease='expo.out'
      >
        <a href='#' className='navbar__logo'>
          Andrew Huang
        </a>
      </Tween>
      <div
        className={`navbar__toggle ${isToggled && 'navbar__toggle--active'}`}
        onClick={(e) => handleToggle(e)}
      >
        <Tween
          from={('.navbar__toggle', { opacity: 0, delay: 0.8, y: 5 })}
          duration={1.5}
          ease='expo.out'
        >
          <i className='fas fa-bars' />
        </Tween>
      </div>
    </div>
  );
};

export default Navbar;
