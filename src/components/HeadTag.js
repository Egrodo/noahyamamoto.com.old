import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

const HeadTag = ({ title }) => (
  <Helmet defaultTitle="Noah Yamamoto" titleTemplate={`${title} - Noah Yamamoto`}>
    <title>{title}</title>
    <html lang="en" />
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
    />
    <link rel="canonical" href="/" />
    <meta name="description" content="Personal website for Noah Yamamoto, frontend developer and student." />
    <meta name="theme-color" content="#000000" />
    <meta name="msapplication-navbutton-color" content="#000000" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
  </Helmet>
);

HeadTag.propTypes = {
  title: PropTypes.string,
};

HeadTag.defaultProps = {
  title: '',
};

export default HeadTag;
