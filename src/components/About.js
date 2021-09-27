import React, { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'react-gsap';
import { gsap } from 'gsap';
import AboutPhoto from '../assets/images/about-photo.jpg';

const About = ({ refProp }) => {
  // const ref = useRef();

  return (
    <section className='about adjust' id='about' ref={refProp}>
      <div className='about__title title'>
        <h2>About Me</h2>
      </div>
      <div className='about__content'>
        <div className='about__text'>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
            the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
            the cites of the word in classical literature, discovered the undoubtable source. Lorem
            Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
            Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the
            theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
            "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Contrary to
            popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
            classical Latin literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
            the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
          </p>
        </div>
        <div className='about__img-container'>
          <img src={AboutPhoto} draggable='false' alt='about-photo' className='about__img' />
        </div>
      </div>
    </section>
  );
};

export default About;
