import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

const HeadTag = ({ title, description }) => (
  <Helmet defaultTitle="Noah Yamamoto" titleTemplate={`${title} - Noah Yamamoto`}>
    <title>{title}</title>
    <html lang="en" />
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
    />
    <meta name="author" content="Noah Yamamoto" />
    <meta name="keywords" content="noah, yamamoto, site, website, personal, portfolio, blog" />
    <link rel="canonical" href="/" />
    <meta name="description" content={description} />
    <meta name="theme-color" content="#000000" />
    <meta name="msapplication-navbutton-color" content="#000000" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />

    <meta property="og:image" content="/android-chrome-512x512.png" />
    <meta property="og:site_name" content="Noah Yamamoto" />
    <meta property="og:description" content={description} />

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#b200f0" />
    <meta name="msapplication-TileColor" content="#b200f0" />
    <meta name="theme-color" content="#ffffff" />
  </Helmet>
);

HeadTag.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

HeadTag.defaultProps = {
  title: 'Personal Site',
  description: 'Personal website for Noah Yamamoto, frontend developer and student.',
};

export default HeadTag;
