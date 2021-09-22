import React from 'react';

const Projects = () => {
  return (
    <section className='projects adjust' id='projects'>
      <div className='projects__title title'>
        <h2>Recent Projects</h2>
        <p>
          About the project - - -Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
          release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
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
