import React from 'react';

const Sidebar = ({ isToggled, setIsToggled, toggleRef }) => {
  const handleToggle = (e) => {
    setIsToggled(() => false);
  };

  return (
    <div className='sidebar'>
      <div className={`sidebar__menu ${isToggled && 'sidebar__menu--active'}`}>
        <ul className='sidebar__ul'>
          <li className='sidebar__li'>
            <a href='#home' onClick={toggleRef}>
              {/* <a
              href='#home'
              onClick={(e) => {
                toggleRef();
                handleToggle(e);
              }}
            > */}
              Home
            </a>
          </li>
          <li className='sidebar__li'>
            <a href='#about' onClick={toggleRef}>
              {/* <a
              href='#about'
              onClick={(e) => {
                toggleRef();
                handleToggle(e);
              }}
            > */}
              About
            </a>
          </li>
          <li className='sidebar__li'>
            <a href='#technologies' onClick={toggleRef}>
              {/* <a
              href='#technologies'
              onClick={(e) => {
                toggleRef();
                handleToggle(e);
              }}
            > */}
              Technologies
            </a>
          </li>
          <li className='sidebar__li'>
            <a href='#projects' onClick={toggleRef}>
              {/* <a
              href='#projects'
              onClick={(e) => {
                toggleRef();
                handleToggle(e);
              }}
            > */}
              Projects
            </a>
          </li>
          <li className='sidebar__li'>
            <a href='#social' onClick={toggleRef}>
              Social
            </a>
            {/* <a
              href='#social'
              onClick={(e) => {
                toggleRef();
                handleToggle(e);
              }}
            >
              Social
            </a> */}
          </li>
          <li className='sidebar__li'>
            <a href='#contact' onClick={toggleRef}>
              Contact
            </a>
            {/* <a
              href='#contact'
              onClick={(e) => {
                toggleRef();
                handleToggle(e);
              }}
            >
              Contact
            </a> */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
