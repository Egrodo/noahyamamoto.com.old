import React from 'react';
import Canvas from '../components/Canvas';
import HeaderSection from '../sections/HeaderSection';
import ProjectSection from '../sections/ProjectSection';
import BlogSection from '../sections/BlogSection';
import ContactSection from '../sections/ContactSection';

import 'normalize.css';
import './index.css';

// sectionHeader needs to be outside of content so it can have a transparent bg.
const indexPage = () => (
  <>
    <header className="header">
      <Canvas />
      <HeaderSection />
    </header>
    <div className="sectionHeader" id="Projects">
      <h1>
        <a
          href="https://github.com/egrodo"
          target="_blank"
          rel="noopener noreferrer"
          alt="Link to my Github"
        >
          Projects
        </a>
      </h1>
    </div>
    <div className="content">
      <ProjectSection />
      <BlogSection />
      <ContactSection />
    </div>
  </>
);

export default indexPage;
