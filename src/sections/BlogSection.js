import React from 'react';
import { Link as InternalLink, StaticQuery, graphql } from 'gatsby';
import FancyLink from '../components/FancyLink';

import CSS from '../css/BlogSection.module.css';

const BlogSection = () => (
  <StaticQuery
    query={query}
    render={({ allMarkdownRemark: { edges } }) => (
      <section className={CSS.Blog} id="Blog">
        <div className={CSS.sectionHeader}>
          <InternalLink
            to="BlogIndex"
            className={CSS.headerLink}
            target="_blank"
            rel="noopener noreferrer"
            alt="Link to blog"
            title="Click to go to blog index"
          >
            <h1>Write-Ups</h1>
          </InternalLink>
        </div>
        <div className={CSS.sectionArea}>
          {edges.map(({ node }) => (
            <div
              className={CSS.blogPost}
              key={node.frontmatter.title}
            >
              <div className={CSS.blogTitle}>
                <div className={CSS.postTitle}>
                  <h2>
                    <InternalLink to={node.frontmatter.path}>
                      {node.frontmatter.title}
                    </InternalLink>
                  </h2>
                </div>
                <div className={CSS.postDate}>
                  <span>{node.frontmatter.date}</span>
                </div>
              </div>
              <div className={CSS.blogContent}>
                <p className={CSS.blogDesc}>{node.frontmatter.excerpt}</p>
                <div className={CSS.blogLink}>
                  <FancyLink
                    to={node.frontmatter.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    internal
                  >
                    <span className={CSS.fancyLinkText}> Read More... </span>
                  </FancyLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    )}
  />
);

export const query = graphql`
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

export default BlogSection;
