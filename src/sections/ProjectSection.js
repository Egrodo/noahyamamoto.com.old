import React from "react";
import CSS from "./ProjectSection.module.css";

class ProjectSection extends React.Component {
  render() {
    return (
      <section className={CSS.Projects} id="Projects">
        <div className={CSS.sectionHeader}>
          <h1>Projects</h1>
        </div>
        <div className={CSS.sectionArea}>
          <div className={CSS.project}>
            <div className={CSS.projImgContainer}>
              <img src="{{ post.image }}" className={CSS.projImg} alt="{{ post.title }} Image" />
            </div>
            <div className={CSS.projDescContainer}>
              <h2 className={CSS.projDescTitle}>{/* post.title */}</h2>
              <p className={CSS.projDesc}>{/* post.description */}</p>
              <div className={CSS.projLink}>
                <a
                  className={CSS.fancyLink}
                  href="{{ post.link }}"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={CSS.fancyLinkText}> Check it out </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ProjectSection;
