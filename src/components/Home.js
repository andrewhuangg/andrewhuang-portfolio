import React from 'react';
import Hero from './Hero';
import About from './About';
import Technologies from './Technologies';
import Projects from './Projects';
import Social from './Social';
import Contact from './Contact';

const Home = ({ isToggled, setIsToggled }) => {
  return (
    <div className={`home ${isToggled && 'home--active'}`} id='home'>
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
