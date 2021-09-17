import React from 'react';
import HeadShot from '../assets/images/headshot.jpg';
import Parallax from 'react-rellax';

const Hero = () => {
  return (
    <>
      <div className='hero'>
        <Parallax centered speed={-9} className='hero__pllx hero__pllx-img1' />
        <Parallax centered speed={-7} className='hero__pllx hero__pllx-img2' />
        <Parallax centered speed={-6} className='hero__pllx hero__pllx-img3' />
        <Parallax centered speed={-3} className='hero__pllx hero__pllx-img4' />

        <section className='hero__about'>
          <div className='hero__content'>
            <Parallax centered speed={-6} className='hero__img-container'>
              <img src={HeadShot} className='hero__img' draggable='false' />
            </Parallax>
            <Parallax centered speed={-6} className='hero__title'>
              <h3>Andrew Huang</h3>
            </Parallax>
            <Parallax centered speed={-5} className='hero__subtitle'>
              <p>Software Developer</p>
            </Parallax>
            {/* Attach Link to Resume */}
            <Parallax centered speed={-5} className='hero__cta'>
              <a href='#'>Download My Resume!</a>
            </Parallax>
          </div>
        </section>
      </div>
      Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It
      has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
      Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
      the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the
      cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum
      comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of
      Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics,
      very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
      amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since
      the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de
      Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form,
      accompanied by English versions from the 1914 translation by H. Rackham. Where does it come
      from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
      piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
      McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more
      obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of
      the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from
      sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
      Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very
      popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
      comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s
      is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus
      Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by
      English versions from the 1914 translation by H. Rackham. Where does it come from? Contrary to
      popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
      Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
      professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
      words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in
      classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections
      1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
      Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during
      the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a
      line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced
      below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
      by Cicero are also reproduced in their exact original form, accompanied by English versions
      from the 1914 translation by H. Rackham. Where does it come from? Contrary to popular belief,
      Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
      from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
      Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
      consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
      literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
      1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written
      in 45 BC. This book is a treatise on the theory of ethics, very popular during the
      Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
      in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below
      for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
      Cicero are also reproduced in their exact original form, accompanied by English versions from
      the 1914 translation by H. Rackham. Where does it come from? Contrary to popular belief, Lorem
      Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45
      BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
      College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
      Ipsum passage, and going through the cites of the word in classical literature, discovered the
      undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum
      et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
      treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem
      Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard
      chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections
      1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in
      their exact original form, accompanied by English versions from the 1914 translation by H.
      Rackham. Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random
      text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000
      years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked
      up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going
      through the cites of the word in classical literature, discovered the undoubtable source.
      Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
      Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory
      of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum
      dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum
      used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33
      from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original
      form, accompanied by English versions from the 1914 translation by H. Rackham.
    </>
  );
};

export default Hero;
