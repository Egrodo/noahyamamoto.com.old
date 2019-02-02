import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import ContentBlock from '../components/ContentBlock';

import CSS from '../css/ProjectSection.module.css';

const query = graphql`
  query ProjectQuery {
    allProjectsJson(limit: 3) {
      edges {
        node {
          title
          description
          link
          image {
            childImageSharp {
              fixed {
                src
              }
            }
          }
        }
      }
    }
  }
`;

const ProjectSection = () => (
  <StaticQuery
    query={query}
    render={data => (
      <section className={CSS.Projects}>
        <div className={CSS.sectionArea}>
          {data.allProjectsJson.edges.map(({ node }) => <ContentBlock type="project" node={node} key={node.title} />)}
        </div>
      </section>
    )}
  />
);

export default ProjectSection;
