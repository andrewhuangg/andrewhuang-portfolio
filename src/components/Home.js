import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';

const Home = ({ isToggled, setIsToggled }) => {
  return (
    <div className={`home ${isToggled && 'home--active'}`} id='home'>
      <Navbar isToggled={isToggled} setIsToggled={setIsToggled} />
      <Hero />
      <About />
    </div>
  );
};

export default Home;
