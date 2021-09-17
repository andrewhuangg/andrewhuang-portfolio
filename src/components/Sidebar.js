import React from 'react';

const Sidebar = ({ isToggled }) => {
  return (
    <div className='sidebar'>
      <div className={`sidebar__menu ${isToggled && 'sidebar__menu--active'}`}>
        <ul className='sidebar__ul'>
          <li className='sidebar__li'>
            <a href='#home'>Home</a>
          </li>
          <li className='sidebar__li'>
            <a href='#about'>About</a>
          </li>
          <li className='sidebar__li'>
            <a href='#projects'>Projects</a>
          </li>
          <li className='sidebar__li'>
            <a href='#technologies'>Technologies</a>
          </li>
          <li className='sidebar__li'>
            <a href='#social'>Social</a>
          </li>
          <li className='sidebar__li'>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
