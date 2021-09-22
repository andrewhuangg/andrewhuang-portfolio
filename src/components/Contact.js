import React from 'react';

const Contact = () => {
  return (
    <section className='contact adjust' id='contact'>
      <div className='contact__title title'>
        <h2>Contact</h2>
        <p>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className='contact__form'>
        <div className='contact__form-group group1'>
          <input type='text' name='' placeholder='First Name' />
          <input type='text' name='' placeholder='Last Name' />
        </div>
        <div className='contact__form-group group1'>
          <input type='text' name='' placeholder='Email Address' />
          <input type='text' name='' placeholder='Phone Number' />
        </div>
        <div className='contact__form-group group2'>
          <textarea placeholder='Message' />
        </div>
        <div className='contact__form-group group2'>
          <input type='submit' value='send' />
        </div>
      </div>
    </section>
  );
};

export default Contact;
