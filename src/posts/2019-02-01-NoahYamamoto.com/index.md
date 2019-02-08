---
layout: post
path: '/blog/NoahYamamoto'
title: This Site
date: '2019-02-01'
excerpt: Welcome to my personal website! I hand-coded every corner of it using Gatsbyjs and React but with no extraneous dependencies! Built to be super fast and pleasant to use, there's a ton of fun features.
---

I've always known the importance of having a personal website, if not just for domain security, but the last time I updated mine was way back in 2016 - before I even got into front end development! I followed a tutorial and used a theme for a Jekyll site on Digital Ocean, and while it worked just fine, I wanted to create something of my own that I could be proud (and didn't cost me anything to host!) So, using the hottest new tech, I took my winter break and did just that.

The site you're on currently uses the fantastic [Gatsbyjs framework](https://www.gatsbyjs.org/), which allowed me to create a super fast static single-page-applications with React and Webpack. Was also my first time using Graphql, and while there was a bit of a learning curve, I'm a big fan of the way it enables you to write components to be flexible to data flow and [highly reusable](https://medium.com/programming-philosophy/reactive-manifesto-by-jonas-bon%C3%A9r-ab8c36493fa3).

I used AdobeXD to plan/prototype the design beforehand as I find having a completed design in front of you increases productivity massively. I wanted to give my site plenty of flavor, so I added a bunch of little colorful animations throughout. The most obvious one to a desktop user is the mouse trail animation that greets you in the background of pages. I went through many iterations with this component before finally settling on the gradient-changing 60fps HTML5 Canvas version you see now. If you'd like to see how that's coded (or implement one for your own site), check out the source [here!](https://github.com/Egrodo/noahyamamoto.com/blob/master/src/components/Canvas.js)

There are also aplenty of other little animations and UI treats to maintain a premium feel, including a [FancyLink](https://github.com/Egrodo/noahyamamoto.com/blob/master/src/components/FancyLink.js) component and an [inline navigation header](https://github.com/Egrodo/noahyamamoto.com/blob/master/src/components/PostHeader.js) for the blog posts that lets the user navigate through the blog posts and dynamically display content, as well as a bunch of other small things that I think add to the user experience.

Thanks for checking out my site, if you have any recommendations or questions don't hesitate to contact me at the email below!