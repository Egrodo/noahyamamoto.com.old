import React from "react";
import CSS from "./ContactSection.module.css";
import GithubImg from "../../static/github.png";
import InstaImg from "../../static/instagram.svg";
import LinkedinImg from "../../static/linkedin.svg";

class ContactSection extends React.Component {
  render() {
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
                <span className={`${CSS.fancyLinkText} ${CSS.email}`}>NoahRYamamoto@gmail.com</span>
              </a>
            </div>
            <p className={CSS.contactDesc}>
              Feel free to drop me an email if you have any inquiries or suggestions. I'm always
              looking for new opportunities to expand my skillset.
            </p>
            <div className={`${CSS.socialContainer} ${CSS.contact}`}>
              <a
                href="https://instagram.com/egrodo"
                target="_blank"
                rel="noopener noreferrer"
                className={CSS.socialLink}
              >
                <img src={InstaImg} alt="Instagram Link" className={CSS.socialImg} />
              </a>
              <a
                href="https://www.linkedin.com/in/~noah"
                target="_blank"
                rel="noopener noreferrer"
                className={CSS.socialLink}
              >
                <img src={LinkedinImg} alt="Linkedin Link" className={CSS.socialImg} />
              </a>
              <a
                href="https://github.com/Egrodo/"
                target="_blank"
                rel="noreferral noopener"
                className={CSS.socialLink}
              >
                <img src={GithubImg} alt="Github Link" className={CSS.socialImg} />
              </a>
            </div>
            <h5 className={CSS.copyright}>Copyright &copy; site.time | date: '%Y' </h5>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactSection;
