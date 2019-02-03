import React from 'react';
import { Link as InternalLink } from 'gatsby';
import HeadTag from '../components/HeadTag';
import Canvas from '../components/Canvas';
import HeaderSection from '../sections/HeaderSection';
import ProjectSection from '../sections/ProjectSection';
import BlogSection from '../sections/BlogSection';
import ContactSection from '../sections/ContactSection';

import 'normalize.css';
import '../css/index.css';

// sectionHeader needs to be outside of content so it can have a transparent bg.
const indexPage = () => (
  <>
    <HeadTag />
    <header className="IndexHeader">
      <Canvas />
      <HeaderSection />
    </header>
    <div className="IndexSectionHeader" id="Projects">
      <h1>
        <InternalLink
          to="projects"
          className={CSS.headerLink}
          target="_blank"
          rel="noopener noreferrer"
          alt="Link to my projects"
          title="Link to my projects"
        >
          Projects
        </InternalLink>
      </h1>
    </div>
    <div className="IndexContent">
      <ProjectSection />
      <BlogSection />
      <ContactSection />
    </div>
  </>
);

export default indexPage;
