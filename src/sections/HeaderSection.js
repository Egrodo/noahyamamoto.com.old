import React from "react";
import Image from "gatsby-image";

import CSS from "./HeaderSection.module.css";
import { StaticQuery, graphql } from "gatsby";

const HeaderSection = () => (
  <StaticQuery
    query={query}
    render={data => {
      const profilePic = data.profilePic.childImageSharp.fixed;
      const githubImg = data.githubImg.childImageSharp.fixed;
      const instaImg = data.instaImg.childImageSharp.fixed;
      const linkedinImg = data.linkedinImg.childImageSharp.fixed;

      return (
        <header className={CSS.Header}>
          <div className={CSS.profileImgContainer}>
            <Image
              fixed={profilePic}
              className={CSS.profileImg}
              alt="Noah Yamamoto"
            />
          </div>
          <div className={CSS.introContainer}>
            <div>Hi there, I'm</div>
            <span className={CSS.fancyGradient}>
              <span className={CSS.fancyName}>Noah Yamamoto</span>
            </span>
          </div>
          <div className={CSS.blurbContainer}>
            <p>
              I'm a CIS student at Baruch College. I love making things on the
              web and have worked for cool companies like Marvel, Refugees
              United, and Squarespace (2019)
            </p>
          </div>
          <div className={CSS.socialContainer}>
            <a
              href="https://instagram.com/egrodo"
              target="_blank"
              rel="noopener noreferrer"
              className={CSS.socialLink}
            >
              <Image
                fixed={instaImg}
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
              <Image
                fixed={linkedinImg}
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
              <Image
                fixed={githubImg}
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
    profilePic: file(absolutePath: { regex: "/profilePic.jpeg/" }) {
      childImageSharp {
        fixed(width: 500, height: 500) {
          src
        }
      }
    }
    instaImg: file(relativePath: { eq: "instagram.png" }) {
      relativePath
      childImageSharp {
        fixed(width: 150, height: 150) {
          src
        }
      }
    }
    linkedinImg: file(relativePath: { eq: "linkedin.png" }) {
      relativePath
      childImageSharp {
        fixed(width: 150, height: 150) {
          src
        }
      }
    }
    githubImg: file(relativePath: { eq: "github.png" }) {
      relativePath
      childImageSharp {
        fixed(width: 150, height: 150) {
          src
        }
      }
    }
  }
`;

export default HeaderSection;
