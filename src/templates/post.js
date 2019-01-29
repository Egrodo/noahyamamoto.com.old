import React from 'react';
import { graphql } from 'gatsby';
import Canvas from '../components/Canvas';
import CSS from '../css/postTemplate.module.css';
import FancyLink from '../components/FancyLink';

// TODO: See mockup. Keep arrows fixed to top, when scroll over fix post title on top too.
export default class Template extends React.Component {
  constructor(props) {
    super(props);

    this.stickyRef = React.createRef();
    this.fakeStickyRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', (() => {
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
    }));
  }

  render() {
    const { data: { markdownRemark: post } } = this.props;
    return (
      <>
        <div className={CSS.canvas}>
          <Canvas />
        </div>
        <div className={CSS.content}>
          <header className={CSS.postHeader}>
            <div className={CSS.topHeader}>
              <a href="/" className={CSS.leftArrowLink} title="Last Post">
                <div className={CSS.arrow}>
                  <div className={CSS.leftArrow} />
                </div>
              </a>
              <div className={CSS.nameContainer}>
                <FancyLink to="/" internal animated>
                  Noah Yamamoto
                </FancyLink>
              </div>
              <a href="/" className={CSS.rightArrowLink} title="Next Post">
                <div className={CSS.arrow}>
                  <div className={CSS.rightArrow} />
                </div>
              </a>
            </div>
            <div className={CSS.bottomHeader} style={{ display: 'none', visibility: 'hidden' }} ref={this.fakeStickyRef}>
              <h2 className={CSS.postTitle}>{post.frontmatter.title}</h2>
              <span className={CSS.postDate}>{post.frontmatter.date}</span>
            </div>
            <div className={CSS.bottomHeader} ref={this.stickyRef}>
              <h2 className={CSS.postTitle}>{post.frontmatter.title}</h2>
              <p className={CSS.postDate}>{post.frontmatter.date}</p>
            </div>
          </header>
          <div className={CSS.postContent}>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </div>
      </>
    );
  }
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date
      }
    }
  }
`;
