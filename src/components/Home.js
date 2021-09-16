import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';

const Home = ({ isToggled, setIsToggled }) => {
  return (
    <div className={`home ${isToggled && 'home--active'}`}>
      <Navbar isToggled={isToggled} setIsToggled={setIsToggled} />
      <Hero />
    </div>
  );
};

export default Home;
