import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import CSS from '../css/blog.module.css';
import FancyLink from '../components/FancyLink';
import ContactSection from '../sections/ContactSection';

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
    // const posts = data.allMarkdownRemark.edges;
    console.log(this.props);
    return (
      <section className={CSS.blog}>
        <header>
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
            <p className={CSS.postCount}>3 posts</p>
          </div>
        </header>
        <div className={CSS.content}>

          <ContactSection footer />
        </div>
      </section>
    );
  }
}

export const pageQuery = graphql`
  query postsQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
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
