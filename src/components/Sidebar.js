import React from 'react';

const Sidebar = () => {
  return (
    <div clasName='sidebar'>
      <div className='sidebar__menu'>
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
