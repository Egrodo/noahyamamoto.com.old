import React from "react";
import { Link as InternalLink } from "gatsby";

import CSS from "./FancyLink.module.css";

const FancyLink = ({ to, children, style, animated, newTab, internal }) => {
  const { fancyLink } = CSS;
  return internal ? (
    <InternalLink to={to} className={fancyLink}>
      <span className={CSS.fancyLinkText} style={style}>
        {children}
      </span>
    </InternalLink>
  ) : (
    <a
      href={to}
      className={CSS.fancyLink}
      target={newTab ? "_blank" : "_self"}
      rel={newTab ? "noopener noreferrer" : ""}
    >
      <span
        className={`${CSS.fancyLinkText} ${animated && CSS.animated}`}
        style={style}
      >
        {children}
      </span>
    </a>
  );
};

export default FancyLink;
