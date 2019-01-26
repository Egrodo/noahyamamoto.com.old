import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import FancyLink from '../components/FancyLink';

import CSS from './HeaderSection.module.css';

const HeaderSection = () => (
  <StaticQuery
    query={query}
    render={(data) => {
      const profilePic = data.profilePic.childImageSharp.fixed;
      const githubImg = data.githubImg.childImageSharp.fixed;
      const instaImg = data.instaImg.childImageSharp.fixed;
      const linkedinImg = data.linkedinImg.childImageSharp.fixed;

      return (
        <header className={CSS.Header}>
          <div className={CSS.profileImgContainer}>
            <img src={profilePic.src} className={CSS.profileImg} alt="Noah Yamamoto" />
          </div>
          <div className={CSS.introContainer}>
            <div>Hi there, I&apos;m</div>
            <span className={CSS.fancyGradient}>
              <span className={CSS.fancyName}>Noah Yamamoto</span>
            </span>
          </div>
          <div className={CSS.blurbContainer}>
            <p>
              I&apos;m a CIS student at Baruch College. I love making things on the
              web and have worked for cool companies like Marvel, Refugees
              United, and Squarespace (2019)
            </p>
            <FancyLink
              to="#resume"
              style={{
                fontFamily: 'Work Sans',
              }}
            >
              Full Résumé
            </FancyLink>
          </div>
          <div className={CSS.socialContainer}>
            <a
              href="https://instagram.com/egrodo"
              target="_blank"
              rel="noopener noreferrer"
              className={CSS.socialLink}
            >
              <img
                src={instaImg.src}
                className={CSS.socialImg}
                alt="Instagram Link"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/~noah"
              target="_blank"
              rel="noopener noreferrer"
              className={CSS.socialLink}
            >
              <img
                src={linkedinImg.src}
                className={CSS.socialImg}
                alt="Linkedin Link"
              />
            </a>
            <a
              href="https://github.com/Egrodo/"
              target="_blank"
              rel="noreferrer noopener"
              className={CSS.socialLink}
            >
              <img
                src={githubImg.src}
                className={CSS.socialImg}
                alt="Github Link"
              />
            </a>
          </div>
          <a href="#Projects" className={CSS.scrollContainer}>
            <div className={CSS.chevronContainer}>
              <div className={CSS.scrollChevron} />
              <div className={CSS.scrollChevron} />
              <div className={CSS.scrollChevron} />
            </div>
          </a>
        </header>
      );
    }}
  />
);

export const query = graphql`
  query HeaderQuery {
    profilePic: file(relativePath: { eq: "profilePic.jpeg" }) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          src
          srcSet
          width
          height
        }
      }
    }
    instaImg: file(relativePath: { eq: "instagram.png" }) {
      relativePath
      childImageSharp {
        fixed(width: 32, height: 32) {
          src
          srcSet
          width
          height
        }
      }
    }
    linkedinImg: file(relativePath: { eq: "linkedin.png" }) {
      relativePath
      childImageSharp {
        fixed(width: 32, height: 32) {
          src
          srcSet
          width
          height
        }
      }
    }
    githubImg: file(relativePath: { eq: "github.png" }) {
      relativePath
      childImageSharp {
        fixed(width: 32, height: 32) {
          src
          srcSet
          width
          height
        }
      }
    }
  }
`;

export default HeaderSection;
