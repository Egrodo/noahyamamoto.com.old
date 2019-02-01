/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Canvas from '../components/Canvas';
import ContactSection from '../sections/ContactSection';
import PostHeader from '../components/PostHeader';

import CSS from '../css/postTemplate.module.css';

const Template = ({ data }) => (
  <section>
    <div className={CSS.canvas}>
      <Canvas />
    </div>
    <div className={CSS.content}>
      <PostHeader post={data.markdownRemark} listData={data.allMarkdownRemark.edges} />
      <div className={CSS.postContent}>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </div>
      <ContactSection footer />
    </div>
  </section>
);

Template.propTypes = {
  data: PropTypes.objectOf(PropTypes.object),
};

Template.defaultProps = {
  data: {},
};

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      id
      frontmatter {
        path
        title
        date
      }
    }
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }, limit: 100) {
      edges {
        node {
          frontmatter {
            title
            date
            path
          }
          id
        }
      }
    }
  }
`;

export default Template;
