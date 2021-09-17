import React from 'react';
import HeadShot from '../assets/images/headshot.jpg';
import Parallax from 'react-rellax';
import { Tween } from 'react-gsap';

const Hero = () => {
  return (
    <>
      <div className='hero'>
        <Parallax centered speed={-9} className='hero__pllx hero__pllx-img1' />
        <Parallax centered speed={-8} className='hero__pllx hero__pllx-img2' />
        <Parallax centered speed={-7} className='hero__pllx hero__pllx-img3' />
        <Parallax centered speed={-3} className='hero__pllx hero__pllx-img4' />

        <section className='hero__about'>
          <div className='hero__content'>
            <Parallax centered speed={-8} className='hero__img-container'>
              <Tween
                from={('.hero__img-container', { opacity: 0, delay: 0.8, y: 35 })}
                duration={1.5}
                ease='expo.out'
              >
                <img src={HeadShot} className='hero__img' draggable='false' />
              </Tween>
            </Parallax>

            <Parallax centered speed={-6} className='hero__title'>
              <Tween
                from={('.hero__title', { opacity: 0, delay: 0.7, y: 35 })}
                duration={1.5}
                ease='expo.out'
              >
                <h3>Andrew Huang</h3>
              </Tween>
            </Parallax>

            <Parallax centered speed={-5} className='hero__subtitle'>
              <Tween
                from={('.hero__subtitle', { opacity: 0, delay: 0.6, y: 35 })}
                duration={1.5}
                ease='expo.out'
              >
                <p>Software Developer</p>
              </Tween>
            </Parallax>

            {/* Attach Link to Resume */}
            <Parallax centered speed={-5} className='hero__cta'>
              <Tween
                from={('.hero__cta', { opacity: 0, delay: 0.5, y: 35 })}
                duration={1.5}
                ease='expo.out'
              >
                <a href='#'>Download My Resume!</a>
              </Tween>
            </Parallax>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
