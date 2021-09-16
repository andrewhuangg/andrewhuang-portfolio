import React from 'react';

const Sidebar = ({ isToggled }) => {
  return (
    <div className='sidebar'>
      <div className={`sidebar__menu ${isToggled && 'sidebar__menu--active'}`}>
        <ul className='sidebar__ul'>
          <li className='sidebar__li'>
            <a href='#'>Home</a>
          </li>
          <li className='sidebar__li'>
            <a href='#'>About</a>
          </li>
          <li className='sidebar__li'>
            <a href='#'>Projects</a>
          </li>
          <li className='sidebar__li'>
            <a href='#'>Technologies</a>
          </li>
          <li className='sidebar__li'>
            <a href='#'>Social</a>
          </li>
          <li className='sidebar__li'>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
