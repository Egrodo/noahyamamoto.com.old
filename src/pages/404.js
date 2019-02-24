/* eslint-disable no-script-url */
import React from 'react';
import HeadTag from '../components/HeadTag';
import FancyLink from '../components/FancyLink';
import CSS from '../css/FourZeroFour.module.css';

import '../css/index.css';
import 'normalize.css';

const FourZeroFour = () => (
  <section className={CSS.FourZeroFour}>
    <HeadTag title="404 - Nothing Here" path="/404" />
    <div className={CSS.content}>
      <h1>404, no page found here.</h1>
      <FancyLink to="javascript:history.back()">Go back?</FancyLink>
    </div>
  </section>
);

export default FourZeroFour;
