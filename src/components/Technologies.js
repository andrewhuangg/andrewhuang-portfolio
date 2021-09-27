import React from 'react';
import MongodbLogo from '../assets/images/mongodb-logo.png';
import NasaLogo from '../assets/images/nasa-api-logo.png';
import NodeLogo from '../assets/images/node-logo.png';
import ReactLogo from '../assets/images/react-logo.png';
import S3Logo from '../assets/images/s3-logo.png';
import SendgridLogo from '../assets/images/sendgrid-logo.png';

const Technologies = ({ refProp }) => {
  return (
    <section className='technologies adjust' id='technologies' ref={refProp}>
      <div className='technologies__title title'>
        <h2>Some Familiar Technologies</h2>
        <p>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className='technologies__content'>
        <div className='technologies__tech-container'>
          <img src={ReactLogo} alt='react-logo' />
          <h2>React</h2>
          <p>
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout.{' '}
          </p>
        </div>
        <div className='technologies__tech-container'>
          <img src={NodeLogo} alt='react-logo' />
          <h2>Node</h2>
          <p>
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout.{' '}
          </p>
        </div>
        <div className='technologies__tech-container'>
          <img src={MongodbLogo} alt='react-logo' />
          <h2>MongoDB</h2>
          <p>
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout.{' '}
          </p>
        </div>
        <div className='technologies__tech-container'>
          <img src={S3Logo} alt='react-logo' />
          <h2>AWS-S3</h2>
          <p>
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout.{' '}
          </p>
        </div>
        <div className='technologies__tech-container'>
          <img src={SendgridLogo} alt='react-logo' />
          <h2>SendGrid</h2>
          <p>
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout.{' '}
          </p>
        </div>
        <div className='technologies__tech-container'>
          <img src={NasaLogo} alt='react-logo' />
          <h2>Nasa Api</h2>
          <p>
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout.{' '}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
