import React from 'react';
import HeadShot from '../assets/images/headshot.jpg';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__pllx hero__pllx-img1'></div>
      <div className='hero__pllx hero__pllx-img2'></div>
      <div className='hero__pllx hero__pllx-img3'></div>
      <div className='hero__pllx hero__pllx-img4'></div>

      <section className='hero__about'>
        <div className='hero__content'>
          <div className='hero__img-container'>
            <img src={HeadShot} className='hero__img' />
          </div>
          <h3>Andrew Huang</h3>
          <p>Software Developer</p>
          <a href='#' className='hero__cta'>
            Download My Resume!
          </a>
        </div>
      </section>
    </div>
  );
};

export default Hero;
