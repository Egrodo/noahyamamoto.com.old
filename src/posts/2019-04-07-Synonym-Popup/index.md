---
layout: post
path: '/blog/synonym-popup'
title: Synonym Popup
date: '2019-04-07'
excerpt: The first ever Javascript project I made was a site that would allow you to find synonyms of a given word. So when I decided to learn Electron, I figured I'd make another one!
---

The first ever Javascript project I made was a site that would allow you to find synonyms of a given word. It was super rudimentary, but it taught me a lot about how webapps work. So when I decided I wanted to learn Electron, I figured I'd rehash that old idea for my first project.

<div align="center">
  <img src="https://i.imgur.com/729DiyD.gif" alt="Syonyms Anywhere" height="500">
</div>

This app runs in the background and allows you to use a hotkey (ctrl+shift+aspstrophe) to pop up a quick synonym finder on the top right of your screen. It appears on top of any content and disappears after a few seconds so it's super useful while writing a paper or responding to emails when you just can't think of a good word to use. You can click on the words themselves to copy it and get right back to your work!

It runs in the background and uses very little data (the only request it makes is when you search for a word), plus it's all open source! The code is separated into the "main" and "renderer" folder, where the main folder contains the Electron setup code and the renderer folder contains the React app that runs everything inside the popup window. [Check out the source here!](https://github.com/Egrodo/synPopup)

You can download the prepackaged setup exe [here](https://github.com/Egrodo/synPopup/tree/master/main/dist) (Synonyms Anywhere Setup 1.0.0.exe) or you can clone the code and build it yourself using by running the commands `npm run build:renderer` then `npm run dist` in the main folder.

Thanks for reading!