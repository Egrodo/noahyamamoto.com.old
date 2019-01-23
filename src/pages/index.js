import React from "react";
import { graphql } from "gatsby";
import Canvas from "../components/Canvas";
import HeaderSection from "../sections/HeaderSection";
import ProjectSection from "../sections/ProjectSection";
import BlogSection from "../sections/BlogSection";
import ContactSection from "../sections/ContactSection";

import "normalize.css";
import "./index.css";

const indexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(post => {
    return post.node.frontmatter;
  });

  return (
    <>
      <Canvas />
      <HeaderSection />
      <ProjectSection />
      <BlogSection posts={posts} />
      <ContactSection />
    </>
  );
};

export const pageQuery = graphql`
  query indexQuery {
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

export default indexPage;
