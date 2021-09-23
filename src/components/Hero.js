import React from 'react';
import HeadShot from '../assets/images/headshot.jpg';
import Parallax from 'react-rellax';
import RellaxWrapper from 'react-rellax-wrapper';
import { Tween } from 'react-gsap';

const Hero = () => {
  return (
    <>
      <div className='hero'>
        <RellaxWrapper
          speed={-9}
          mobile={-8}
          breakpoints={[639, 1023, 1399]}
          vertical
          className='hero__pllx hero__pllx-img1'
        />
        <RellaxWrapper
          speed={-8}
          mobile={-7}
          breakpoints={[639, 1023, 1399]}
          vertical
          className='hero__pllx hero__pllx-img2'
        />
        <RellaxWrapper
          speed={-7}
          mobile={-6}
          breakpoints={[639, 1023, 1399]}
          vertical
          className='hero__pllx hero__pllx-img3'
        />
        <RellaxWrapper
          speed={-3}
          mobile={-2}
          breakpoints={[639, 1023, 1399]}
          vertical
          className='hero__pllx hero__pllx-img4'
        />
        <section className='hero__about'>
          <div className='hero__content'>
            <RellaxWrapper
              speed={-8}
              mobile={-7}
              breakpoints={[639, 1023, 1399]}
              vertical
              className='hero__img-container'
            >
              <Tween
                from={('.hero__img-container', { opacity: 0, delay: 0.8, y: 35 })}
                duration={1.5}
                ease='expo.out'
              >
                <img src={HeadShot} className='hero__img' draggable='false' />
              </Tween>
            </RellaxWrapper>

            <RellaxWrapper
              speed={-6}
              mobile={-5}
              breakpoints={[639, 1023, 1399]}
              vertical
              className='hero__title'
            >
              <Tween
                from={('.hero__title', { opacity: 0, delay: 0.7, y: 35 })}
                duration={1.5}
                ease='expo.out'
              >
                <h3>Andrew Huang</h3>
              </Tween>
            </RellaxWrapper>

            <RellaxWrapper
              speed={-4}
              mobile={-3}
              breakpoints={[639, 1023, 1399]}
              vertical
              className='hero__subtitle'
            >
              <Tween
                from={('.hero__subtitle', { opacity: 0, delay: 0.6, y: 35 })}
                duration={1.5}
                ease='expo.out'
              >
                <p>Software Developer</p>
              </Tween>
            </RellaxWrapper>

            {/* Attach Link to Resume */}
            <RellaxWrapper
              speed={-3}
              mobile={-2}
              breakpoints={[639, 1023, 1399]}
              vertical
              className='hero__cta'
            >
              <Tween
                from={('.hero__cta', { opacity: 0, delay: 0.5, y: 35 })}
                duration={1.5}
                ease='expo.out'
              >
                <a href='#'>Download My Resume!</a>
              </Tween>
            </RellaxWrapper>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
