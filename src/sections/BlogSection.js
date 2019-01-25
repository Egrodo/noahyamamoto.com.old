import React from "react";
import FancyLink from "../components/FancyLink";
import { Link as InternalLink, StaticQuery } from "gatsby";

import CSS from "./BlogSection.module.css";

const BlogSection = () => {
  return (
    <StaticQuery
      query={query}
      render={({ allMarkdownRemark: { edges } }) => (
        <section className={CSS.Blog} id="Blog">
          <div className={CSS.sectionHeader}>
            <a
              href="{{ site.url }}/blog"
              className={CSS.headerLink}
              target="_blank"
              rel="noopener noreferrer"
              alt="Link to blog"
              title="Click to go to blog index"
            >
              <h1>Write-Ups</h1>
            </a>
          </div>
          <div className={CSS.sectionArea}>
            {edges.map(({ node }, i) => (
              <div
                className={CSS.blogPost}
                key={`${node.frontmatter.title}_${i}`}
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
            ))}
          </div>
        </section>
      )}
    />
  );
};

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(limit: 3) {
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
