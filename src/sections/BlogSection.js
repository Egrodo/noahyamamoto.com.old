import React from 'react';
import { Link as InternalLink, StaticQuery, graphql } from 'gatsby';
import ContentBlock from '../components/ContentBlock';

import CSS from '../css/BlogSection.module.css';

const query = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 3) {
      edges {
        node {
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

const BlogSection = () => (
  <StaticQuery
    query={query}
    render={({ allMarkdownRemark: { edges } }) => (
      <section className={CSS.Blog} id="Blog">
        <div className={CSS.sectionHeader}>
          <h1>
            <InternalLink
              to="blog"
              className={CSS.headerLink}
              target="_blank"
              rel="noopener noreferrer"
              alt="Link to blog"
              title="Click to go to blog index"
            >
              Write-Ups
            </InternalLink>
          </h1>
        </div>
        <div className={CSS.sectionArea}>
          {edges.map(({ node }) => <ContentBlock type="blog" node={node} key={node.frontmatter.title} />)}
        </div>
      </section>
    )}
  />
);

export default BlogSection;
