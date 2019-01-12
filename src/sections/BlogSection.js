import React from "react";
import CSS from "./BlogSection.module.css";

class BlogSection extends React.Component {
  render() {
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
          <div className={CSS.blogPost}>
            <div className={CSS.blogTitle}>
              <div className={CSS.postTitle}>
                <h2>
                  <a href="{{ post.url }}">post.title</a>
                </h2>
              </div>
              <div className={CSS.postDate}>
                <span>post.date</span>
              </div>
            </div>

            <p className={CSS.blogDesc}>post.excerpt</p>
            <div className={CSS.blogLink}>
              <a
                className={CSS.fancyLink}
                href="{{ post.url }}"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={CSS.fancyLinkText}> Read More... </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default BlogSection;
