/* eslint-disable no-script-url */
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link as InternalLink } from 'gatsby';
import FancyLink from './FancyLink';

import CSS from '../css/PostHeader.module.css';

function PostHeader({ post, listData }) {
  const [{ prevPost, nextPost }, setPosts] = useState({ prevPost: false, nextPost: false });

  const stickyRef = useRef();
  const fakeStickyRef = useRef();

  const handleScroll = () => {
    if (stickyRef.current.classList.contains(CSS.stickyHeader)) {
      // If it contains it, we're looking to remove it.
      // Remove it if our scroll hits the top of where it should be.
      if (window.pageYOffset < fakeStickyRef.current.offsetTop) {
        stickyRef.current.classList.remove(CSS.stickyHeader);
        fakeStickyRef.current.style.display = 'none';
      } // Else do nothing.
    } else if (window.pageYOffset > stickyRef.current.offsetTop) {
      // If it does not contain it, we're looking to add it.
      // Add it if our scroll hits the top of where it is.
      stickyRef.current.classList.add(CSS.stickyHeader);
      fakeStickyRef.current.style.display = 'block';
    }
  };

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    // On mount, calculate the prev/next links.
    // Loop through the listData, when we find our post we can infer prev and next links from the list.
    for (let i = 0; i < listData.length; ++i) {
      if (listData[i].node.id === post.id) {
        // When we find ours, add the previous and next then break (we only need one of each per page).
        setPosts({
          prevPost: (listData[i - 1] && listData[i - 1].node) || false,
          nextPost: (listData[i + 1] && listData[i + 1].node) || false,
        });
        // One of these will be undefined if we're on the first or last post.
        break;
      }
    }

    // And add scroll handler for header.
    window.addEventListener('scroll', handleScroll, false);

    return (() => window.removeEventListener('scroll', handleScroll, false));
  }, []);

  return (
    <header className={CSS.postHeader}>
      <div className={CSS.topHeader}>
        <InternalLink
          to={(prevPost && prevPost.frontmatter.path) || 'javascript:;'}
          className={`${CSS.leftArrowLink} ${!prevPost && CSS.disabled}`}
          title="Last Post"
        >
          <div className={CSS.arrow}>
            <div className={CSS.leftArrow} />
          </div>
        </InternalLink>
        <div className={CSS.nameContainer}>
          <FancyLink to="/" internal animated>
            Noah Yamamoto
          </FancyLink>
        </div>
        <InternalLink
          to={(nextPost && nextPost.frontmatter.path) || 'javascript:;'}
          className={`${CSS.rightArrowLink} ${!nextPost && CSS.disabled}`}
          title="Next Post"
        >
          <div className={CSS.arrow}>
            <div className={CSS.rightArrow} />
          </div>
        </InternalLink>
      </div>
      <div
        className={CSS.bottomHeader}
        style={{ display: 'none', visibility: 'hidden' }}
        ref={fakeStickyRef}
      >
        <h2 className={CSS.postTitle}>{post.frontmatter.title}</h2>
        <p className={CSS.postDate}>{post.frontmatter.date}</p>
      </div>
      <div className={CSS.bottomHeader} ref={stickyRef}>
        <h2 className={CSS.postTitle}>
          {/* eslint-disable-next-line */}
          <span
            onClick={scrollToTop}
            alt="Scroll back to top"
            role="button"
            tabIndex={0}
            title="Scroll back to top"
          >
            {post.frontmatter.title}
          </span>
        </h2>
        <p className={CSS.postDate}>{post.frontmatter.date}</p>
      </div>
    </header>
  );
}

PostHeader.propTypes = {
  post: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  listData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostHeader;
