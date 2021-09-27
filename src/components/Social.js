import React from 'react';
import GithubLogo from '../assets/images/github-logo.png';
import GmailLogo from '../assets/images/gmail-logo.png';
import LinkedinLogo from '../assets/images/linkedin-logo.png';

const Social = ({ refProp }) => {
  return (
    <section className='social adjust' id='social' ref={refProp}>
      <div className='social__title title'>
        <h2>Social</h2>
      </div>
      <div className='social__content'>
        <div className='social__social-container'>
          <div className='social__icon-container'>
            <img src={GithubLogo} alt='github logo' />
          </div>
          <h4>Github</h4>
        </div>
        <div className='social__social-container'>
          <div className='social__icon-container'>
            <img src={LinkedinLogo} alt='github logo' />
          </div>
          <h4>Lets connect!</h4>
        </div>
        <div className='social__social-container'>
          <div className='social__icon-container'>
            <img src={GmailLogo} alt='github logo' />
          </div>
          <h4>Email me!</h4>
        </div>
      </div>
    </section>
  );
};

export default Social;
