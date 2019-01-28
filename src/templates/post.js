import React from 'react';
import { graphql } from 'gatsby';
import Canvas from '../components/Canvas';
import CSS from '../css/postTemplate.module.css';
import FancyLink from '../components/FancyLink';

// TODO: See mockup. Keep arrows fixed to top, when scroll over fix post title on top too.
export default function Template({ data }) {
  const { markdownRemark: post } = data;
  // const post = data.markdownRemark;
  return (
    <>
      <div className={CSS.canvas}>
        <Canvas />
      </div>
      <div className={CSS.content}>
        <header className={CSS.postHeader}>
          <a href="/" className={CSS.link} title="Last Post">
            <div className={CSS.arrow}>
              <div className={CSS.leftArrow} />
            </div>
          </a>
          <div className={CSS.nameContainer}>
            <FancyLink to="/" internal animated>
              Noah Yamamoto
            </FancyLink>
          </div>
          <a href="/" className={CSS.link} title="Next Post">
            <div className={CSS.arrow}>
              <div className={CSS.rightArrow} />
            </div>
          </a>
        </header>
        {/* <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
      </div>
    </>
  );
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
