import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import FancyLink from '../components/FancyLink';

import CSS from './ProjectSection.module.css';

const ProjectSection = () => (
  <StaticQuery
    query={query}
    render={data => (
      <section className={CSS.Projects} id="Projects">
        <div className={CSS.sectionArea}>
          {data.allProjectsJson.edges.map(({ node }) => (
            <div className={CSS.project} key={node.title}>
              <div className={CSS.projImgContainer}>
                <img
                  src={node.image.childImageSharp.fixed.src}
                  className={CSS.projImg}
                  alt={node.title}
                />
              </div>
              <div className={CSS.projDescContainer}>
                <h2 className={CSS.projDescTitle}>{node.title}</h2>
                <p className={CSS.projDesc}>{node.description}</p>
                <div className={CSS.projLink}>
                  <FancyLink to={node.link} newTab>
                    Check it out
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

export default ProjectSection;
