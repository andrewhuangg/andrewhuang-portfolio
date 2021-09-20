import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Technologies from './Technologies';
import Projects from './Projects';
import Social from './Social';
import Contact from './Contact';

const Home = ({ isToggled, setIsToggled }) => {
  return (
    <div className={`home ${isToggled && 'home--active'}`} id='home'>
      <Navbar isToggled={isToggled} setIsToggled={setIsToggled} />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Social />
      <Contact />
    </div>
  );
};

export default Home;
