import React from "react";
// import Image from "gatsby-image";
import ProfileImg from "../../static/profile.jpeg";
import GithubImg from "../../static/github.png";
import InstaImg from "../../static/instagram.svg";
import LinkedinImg from "../../static/linkedin.svg";

import CSS from "./HeaderSection.module.css";

const HeaderSection = () => (
  <header className={CSS.Header}>
    <div className={CSS.profileImgContainer}>
      <img src={ProfileImg} className={CSS.profileImg} alt="Noah Yamamoto" />
    </div>
    <div className={CSS.introContainer}>
      <div>Hi there, I'm</div>
      <span className={CSS.fancyGradient}>
        <span className={CSS.fancyName}>Noah Yamamoto</span>
      </span>
    </div>
    <div className={CSS.blurbContainer}>
      <p>
        I'm a CIS student at Baruch College. I love making things on the web and have worked for
        cool companies like Marvel, Refugees United, and Squarespace (2019)
      </p>
    </div>
    <div className={CSS.socialContainer}>
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
        rel="noreferrer noopener"
        className={CSS.socialLink}
      >
        <img src={GithubImg} alt="Github Link" className={CSS.socialImg} />
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

export default HeaderSection;
