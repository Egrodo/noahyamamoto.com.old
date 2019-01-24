import React from "react";
import CSS from "./BlogSection.module.css";
import { Link, StaticQuery } from "gatsby";

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
                      <Link to={node.frontmatter.path}>
                        {node.frontmatter.title}
                      </Link>
                    </h2>
                  </div>
                  <div className={CSS.postDate}>
                    <span>{node.frontmatter.date}</span>
                  </div>
                </div>

                <p className={CSS.blogDesc}>{node.frontmatter.excerpt}</p>
                <div className={CSS.blogLink}>
                  <Link
                    className={CSS.fancyLink}
                    to={node.frontmatter.path}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={CSS.fancyLinkText}> Read More... </span>
                  </Link>
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
