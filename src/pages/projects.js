import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import HeadTag from '../components/HeadTag';
import Spinner from '../components/Spinner';
import CSS from '../css/projects.module.css';
import FancyLink from '../components/FancyLink';
import ContentBlock from '../components/ContentBlock';
import ContactSection from '../sections/ContactSection';
import Canvas from '../components/Canvas';

import 'normalize.css';
import '../css/index.css';

export const pageQuery = graphql`
  query projectPageQuery {
    allProjectsJson(limit: 3) {
      edges {
        node {
          title
          description
          link
          image {
            childImageSharp {
              fixed {
                src
              }
            }
          }
        }
      }
    }
  }
`;

function projects({ data: { allProjectsJson: { edges } } }) {
  const [imgLoaded, setLoaded] = useState(false);

  const stickyRef = useRef();
  const fakeStickyRef = useRef();

  const handleScroll = () => {
    const { current: sticky } = stickyRef;
    const { current: fakeSticky } = fakeStickyRef;
    if (sticky.classList.contains(CSS.stickyHeader)) {
      // If it contains it, we're looking to remove it.
      // Remove it if our scroll hits the top of where it should be.
      if (window.pageYOffset < fakeSticky.offsetTop) {
        sticky.classList.remove(CSS.stickyHeader);
        fakeSticky.style.display = 'none';
      } // Else do nothing.
    } else if (window.pageYOffset > sticky.offsetTop) {
      // If it does not contain it, we're looking to add it.
      // Add it if our scroll hits the top of where it is.
      sticky.classList.add(CSS.stickyHeader);
      fakeSticky.style.display = 'block';
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, false);
    return (() => window.removeEventListener('scroll', handleScroll, false));
  }, []);

  return (
    <section className={CSS.blog}>
      <HeadTag title="Projects" description="Projects index for NoahYamamoto.com" path="/projects" />
      <Canvas />
      <header className={CSS.projectsHeader}>
        <div className={CSS.topHeader}>
          <div className={CSS.nameContainer}>
            <FancyLink to="/" internal animated>
              Noah Yamamoto
            </FancyLink>
          </div>
        </div>
        <div
          className={CSS.bottomHeader}
          style={{ display: 'none', visibility: 'hidden' }}
          ref={fakeStickyRef}
        >
          <h2 className={CSS.postTitle}>Projects</h2>
        </div>
        <div className={CSS.bottomHeader} ref={stickyRef}>
          <h2 className={CSS.postTitle}>Projects</h2>
        </div>
      </header>
      <div className={CSS.content}>
        <p className={CSS.indexBlurb}>
          Below are a few personal projects I&apos;ve done that I&apos;m proud of, to see more check out my&nbsp;
          <FancyLink to="https://github.com/egrodo" newTab>
            Github page
          </FancyLink>
          !
        </p>
        <div className={CSS.GHChart}>
          <div className={`${CSS.imgPlaceholder} ${imgLoaded ? CSS.hide : ''}`}>
            <Spinner />
          </div>
          <img
            src="https://ghchart.rshah.org/7a0ba5/egrodo"
            alt="My Github contributions this year"
            title="My Github contributions this year"
            className={imgLoaded ? '' : CSS.hide}
            onLoad={() => setLoaded(true)}
          />
        </div>
        <div className={CSS.postsArea}>
          {edges.map(({ node }) => <ContentBlock type="project" node={node} key={node.title} />)}
        </div>
        <ContactSection />
      </div>
    </section>
  );
}

projects.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default projects;
