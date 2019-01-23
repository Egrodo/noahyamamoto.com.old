import React from "react";
import CSS from "./BlogSection.module.css";
import { Link } from "gatsby";

const BlogSection = ({ posts }) => {
  return (
    <section className={CSS.Blog} id="Blog">
      <div className={CSS.sectionHeader}>
        <a
          href="{{ site.url }}/blog"
          className={CSS.headerLink}
          target="_blank"
          rel="noopener noreferrer"
          alt="Link to blog"
          title="Click to go to blog
      index"
        >
          <h1>Write-Ups</h1>
        </a>
      </div>
      <div className={CSS.sectionArea}>
        {posts.map((post, i) => (
          <div className={CSS.blogPost} key={`${post.title}_${i}`}>
            <div className={CSS.blogTitle}>
              <div className={CSS.postTitle}>
                <h2>
                  <Link to={post.path}>{post.title}</Link>
                </h2>
              </div>
              <div className={CSS.postDate}>
                <span>{post.date}</span>
              </div>
            </div>

            <p className={CSS.blogDesc}>{post.excerpt}</p>
            <div className={CSS.blogLink}>
              <Link
                className={CSS.fancyLink}
                to={post.path}
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
  );
};

export default BlogSection;
