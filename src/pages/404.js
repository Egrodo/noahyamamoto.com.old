import React from 'react';
import FancyLink from '../components/FancyLink';
import CSS from '../css/FourZeroFour.module.css';

const FourZeroFour = () => (
  <section className={CSS.FourZeroFour}>
    <div className={CSS.content}>
      <h1>404, no page found here.</h1>
      <FancyLink to="/">Go back?</FancyLink>
    </div>
  </section>
);

export default FourZeroFour;
