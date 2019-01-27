import React from 'react';
import { Link as InternalLink, graphql } from 'gatsby';
import CSS from '../css/BlogIndex.module.css';

// sectionHeader needs to be outside of content so it can have a transparent bg.
const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <section className={CSS.BlogIndex}>
      <h1>Blog Index!</h1>
      {posts.map(post => (
        <div className={CSS.post}>{post.node.frontmatter.title}</div>
      ))}
    </section>
  );
};

// TODO: Limit and paginate.
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

export default BlogIndex;
