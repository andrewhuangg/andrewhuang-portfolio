import React from 'react';

const Projects = ({ refProp }) => {
  return (
    <section className='projects adjust' id='projects' ref={refProp}>
      <div className='projects__title title'>
        <h2>Recent Projects</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
      <div className='projects__content'>
        <div className='projects__proj-container'>
          <div className='projects__img-container'>
            <img src='https://media.giphy.com/media/lIIcOKSqXEUTbywgmK/giphy.gif' />
          </div>
          <div className='projects__text'>
            <h3>journii</h3>
          </div>
        </div>
        <div className='projects__proj-container'>
          <div className='projects__img-container'>
            <img src='https://media.giphy.com/media/KrOIq8SvE2bE6CynVk/giphy.gif' />
          </div>
          <div className='projects__text'>
            <h3>my_eonet</h3>
          </div>
        </div>
        <div className='projects__proj-container'>
          <div className='projects__img-container'>
            <img src='https://media.giphy.com/media/gU8CUCWHgrwG6OuUyu/giphy.gif' />
          </div>
          <div className='projects__text'>
            <h3>dmme</h3>
          </div>
        </div>
        <div className='projects__proj-container'>
          <div className='projects__img-container'>
            <img src='https://media.giphy.com/media/cmaFn8WxU0jTFbeuEz/giphy.gif' />
          </div>
          <div className='projects__text'>
            <h3>CampThrill</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
