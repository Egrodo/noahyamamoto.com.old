/* eslint-disable no-script-url */
import React from 'react';
import PropTypes from 'prop-types';
import FancyLink from './FancyLink';

import CSS from '../css/PostHeader.module.css';

class PostHeader extends React.Component {
  stickyRef = React.createRef();

  fakeStickyRef = React.createRef();

  state = {
    prevPost: false,
    nextPost: false,
  };

  componentDidMount = () => {
    // On mount, calculate the prev/next links.
    const { post: currPost } = this.props;
    const { listData } = this.props;

    // Loop through the listData, when we find our post we can infer prev and next links from the list.
    for (let i = 0; i < listData.length; ++i) {
      if (listData[i].node.id === currPost.id) {
        // When we find ours, add the previous and next then break (we only need one of each per page).
        this.setState({
          prevPost: (listData[i - 1] && listData[i - 1].node) || false,
          nextPost: (listData[i + 1] && listData[i + 1].node) || false,
        });
        // One of these will be undefined if we're on the first or last post.
        break;
      }
    }

    // And add scroll handler for header.
    window.addEventListener('scroll', this.handleScroll, false);
  };

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

  render = () => {
    const { post } = this.props;
    const { prevPost, nextPost } = this.state;
    return (
      <header className={CSS.postHeader}>
        <div className={CSS.topHeader}>
          <a
            href={(prevPost && prevPost.frontmatter.path) || 'javascript:;'}
            className={`${CSS.leftArrowLink} ${!prevPost && CSS.disabled}`}
            title="Last Post"
          >
            <div className={CSS.arrow}>
              <div className={CSS.leftArrow} />
            </div>
          </a>
          <div className={CSS.nameContainer}>
            <FancyLink to="/" internal animated>
              Noah Yamamoto
            </FancyLink>
          </div>
          <a
            href={(nextPost && nextPost.frontmatter.path) || 'javascript:;'}
            className={`${CSS.rightArrowLink} ${!nextPost && CSS.disabled}`}
            title="Next Post"
          >
            <div className={CSS.arrow}>
              <div className={CSS.rightArrow} />
            </div>
          </a>
        </div>
        <div
          className={CSS.bottomHeader}
          style={{ display: 'none', visibility: 'hidden' }}
          ref={this.fakeStickyRef}
        >
          <h2 className={CSS.postTitle}>{post.frontmatter.title}</h2>
          <p className={CSS.postDate}>{post.frontmatter.date}</p>
        </div>
        <div className={CSS.bottomHeader} ref={this.stickyRef}>
          <h2 className={CSS.postTitle}>{post.frontmatter.title}</h2>
          <p className={CSS.postDate}>{post.frontmatter.date}</p>
        </div>
      </header>
    );
  }
}

PostHeader.propTypes = {
  post: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  listData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostHeader;
