import React from "react";
import Image from "gatsby-image";

import CSS from "./ContactSection.module.css";
import { StaticQuery, graphql } from "gatsby";

const ContactSection = () => (
  <StaticQuery
    query={query}
    render={data => {
      const githubImg = data.githubImg.childImageSharp.fixed;
      const instaImg = data.instaImg.childImageSharp.fixed;
      const linkedinImg = data.linkedinImg.childImageSharp.fixed;

      return (
        <section className={CSS.Contact} id="Contact">
          <div className={CSS.sectionHeader}>
            <h1>Contact</h1>
            <div className={CSS.sectionArea}>
              <div className={CSS.emailLink}>
                <a
                  className={CSS.fancyLink}
                  href="mailto:noahryamamoto@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={`${CSS.fancyLinkText} ${CSS.email}`}>
                    NoahRYamamoto@gmail.com
                  </span>
                </a>
              </div>
              <p className={CSS.contactDesc}>
                Feel free to drop me an email if you have any inquiries or
                suggestions. I'm always looking for new opportunities to expand
                my skillset.
              </p>
              <div className={`${CSS.socialContainer} ${CSS.contact}`}>
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
                  rel="noopener noreferrer"
                  className={CSS.socialLink}
                >
                  <Image
                    fixed={githubImg}
                    className={CSS.socialImg}
                    alt="Github Link"
                  />
                </a>
              </div>
              <h5 className={CSS.copyright}>
                Copyright &copy; | {new Date().getFullYear()}
              </h5>
            </div>
          </div>
        </section>
      );
    }}
  />
);

export const query = graphql`
  query ContactQuery {
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

export default ContactSection;
