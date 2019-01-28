import React from 'react';
import Image from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';
import FancyLink from '../components/FancyLink';

import CSS from '../css/ContactSection.module.css';

const ContactSection = () => (
  <StaticQuery
    query={query}
    render={(data) => {
      const githubImg = data.githubImg.childImageSharp.fixed;
      const instaImg = data.instaImg.childImageSharp.fixed;
      const linkedinImg = data.linkedinImg.childImageSharp.fixed;

      // TODO: Protect email from spammers somehow
      return (
        <section className={CSS.Contact} id="Contact">
          <div className={CSS.sectionHeader}>
            <h1>Contact</h1>
            <div className={CSS.sectionArea}>
              <div className={CSS.emailLink}>
                <FancyLink to="mailto:noahryamamoto@gmail.com" newTab animated>
                  NoahRYamamoto@gmail.com
                </FancyLink>
              </div>
              <p className={CSS.contactDesc}>
                Feel free to drop me an email if you have any inquiries or suggestions. I&apos;m
                always looking for new opportunities to expand my skillset.
              </p>
              <div className={`${CSS.socialContainer} ${CSS.contact}`}>
                <a
                  href="https://instagram.com/egrodo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={CSS.socialLink}
                >
                  <Image fixed={instaImg} className={CSS.socialImg} alt="Instagram Link" />
                </a>
                <a
                  href="https://www.linkedin.com/in/~noah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={CSS.socialLink}
                >
                  <Image fixed={linkedinImg} className={CSS.socialImg} alt="Linkedin Link" />
                </a>
                <a
                  href="https://github.com/Egrodo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={CSS.socialLink}
                >
                  <Image fixed={githubImg} className={CSS.socialImg} alt="Github Link" />
                </a>
              </div>
              <h5 className={CSS.copyright}>
                Noah Yamamoto | &copy;
                {' '}
                {new Date().getFullYear()}
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
