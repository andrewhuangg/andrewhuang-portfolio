import React from 'react';
import Hero from './Hero';
import About from './About';
import Technologies from './Technologies';
import Projects from './Projects';
import Social from './Social';
import Contact from './Contact';

const Home = ({ isToggled, refProp }) => {
  return (
    <div className={`home ${isToggled && 'home--active'}`} id='home' ref={refProp}>
      <Hero refProp={refProp} />
      <About refProp={refProp} />
      <Technologies refProp={refProp} />
      <Projects refProp={refProp} />
      <Social refProp={refProp} />
      <Contact refProp={refProp} />
    </div>
  );
};

export default Home;
