import './assets/styles/style.scss';
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Navbar from './components/Navbar';

const App = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className='app'>
      <Sidebar isToggled={isToggled} />
      <Navbar isToggled={isToggled} setIsToggled={setIsToggled} />
      <Home isToggled={isToggled} setIsToggled={setIsToggled} />
    </div>
  );
};

export default App;
