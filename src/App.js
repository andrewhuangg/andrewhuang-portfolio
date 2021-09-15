import './assets/styles/style.scss';
import React from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';

const App = () => {
  return (
    <div className='app'>
      <Sidebar />
      <Home />
    </div>
  );
};

export default App;
