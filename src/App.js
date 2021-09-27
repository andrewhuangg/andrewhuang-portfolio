import './assets/styles/style.scss';
import React, { useState, useRef } from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Navbar from './components/Navbar';

const App = () => {
  const [isToggled, setIsToggled] = useState(false);
  const myRef = useRef(null);

  const toggleRef = () => {
    setIsToggled((prevToggle) => !prevToggle);
    myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    // myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // window.scrollTo({ behavior: 'smooth', top: myRef.current.offsetTop });
  };

  return (
    <div className='app'>
      <Sidebar isToggled={isToggled} setIsToggled={setIsToggled} toggleRef={toggleRef} />
      <Navbar isToggled={isToggled} setIsToggled={setIsToggled} />
      <Home isToggled={isToggled} setIsToggled={setIsToggled} refProp={myRef} />
    </div>
  );
};

export default App;
