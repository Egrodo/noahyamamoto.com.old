import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import HeadTag from '../components/HeadTag';
import CSS from '../css/blog.module.css';
import FancyLink from '../components/FancyLink';
import ContentBlock from '../components/ContentBlock';
import ContactSection from '../sections/ContactSection';
import Canvas from '../components/Canvas';

import 'normalize.css';
import '../css/index.css';

// Blog index.
class blog extends React.Component {
  stickyRef = React.createRef();

  fakeStickyRef = React.createRef();

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll, false);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll, false);
  };

  handleScroll = () => {
    const { current: sticky } = this.stickyRef;
    const { current: fakeSticky } = this.fakeStickyRef;
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

  render() {
    const { data: { allMarkdownRemark: { edges } } } = this.props;
    return (
      <section className={CSS.blog}>
        <HeadTag title="Blog Posts" description="Blog index for NoahYamamoto.com" path="/blog" />
        <Canvas />
        <header className={CSS.blogHeader}>
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
            ref={this.fakeStickyRef}
          >
            <h2 className={CSS.postTitle}>Write-Ups</h2>
            <span className={CSS.postCount}>n posts</span>
          </div>
          <div className={CSS.bottomHeader} ref={this.stickyRef}>
            <h2 className={CSS.postTitle}>Write-Ups</h2>
            <p className={CSS.postCount}>{`${edges.length || 0} posts`}</p>
          </div>
        </header>
        <div className={CSS.content}>
          <p className={CSS.indexBlurb}>
            Thanks for checking out my blog! Here I plan to post small to medium-length write-ups about various
            frontend topics from little-known API&apos;s to guides.
          </p>
          <div className={CSS.postsArea}>
            {edges.map(({ node }) => <ContentBlock type="blog" node={node} key={node.frontmatter.title} />)}
          </div>
          <ContactSection />
        </div>
      </section>
    );
  }
}

// When I hit 10 blog posts I need to figure out a pagination thingy.
export const pageQuery = graphql`
  query postsQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 10) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            title
            excerpt
            date(formatString: "MMM Do, YYYY")
            path
          }
        }
      }
    }
  }
`;

blog.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default blog;
