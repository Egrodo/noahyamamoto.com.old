---
layout: post
path: '/blog/ChooChoo-App'
title: Choochoo App
date: '2019-01-03'
excerpt: In my final project for the CIS2200 class I was TA'ing for I knew I wanted to make something that the students might find useful. I thought about the painpoints in my day, and being a New Yorker, the MTA instantly came to mind.
---

In my final project for the CIS2200 class I was TA'ing for I knew I wanted to make something that the students might find useful. I thought about the painpoints in my day, and being a New Yorker, the MTA instantly came to mind.

![choochoo image](https://i.imgur.com/kpTRta1.png)

Any New Yorker could attest to the frustration of arriving at the station just for the train to be leaving, forcing you to wait tens of minutes for the next train, potentially making you late. Being someone who is obsessed with optimizing processes I came up with Choochoo, an app to display arrival times with a simple and pleasant interface while also providing the extra value of showing the weather conditions.

My biggest project yet, I wanted to get as much as I could out of the opportunity. I used it as an excuse to learn a litany of new tools and techniques, including React Hooks, Adobe XD, CSS Modules, and a bunch of asynchronous stuff. I also wrote a [Node and Express backend](https://github.com/Egrodo/choochooServer) to parse and serve the data from the MTA (boy they don't make it easy), and I set up continuous integration with Heroku.

The goal with this project, like with all my personal projects, was to learn as much as I could about best-practice front-end programming. As such, I wrote this project with **zero** external libraries or dependencies (outside of next-gen React with Hooks and Suspense). I wrote my own [error handling input component](https://github.com/Egrodo/choochoo/blob/master/src/components/reusables/Input.js), a [debouncing hook](https://github.com/Egrodo/choochoo/blob/master/src/components/hooks/useDebounce.js), an [auto-retrying network issue handler](https://github.com/Egrodo/choochoo/blob/master/src/components/App.js#L22), and more.

I'd recommend checking out the [source of the backend server](https://github.com/Egrodo/choochooServer) to see how I battled against the MTA API to get workable data, and the [entrypoint to my React frontend](https://github.com/Egrodo/choochoo/blob/master/src/components/App.js) to see the cool tricks I used to make a lightweight and optimized PWA.

<h3 align="center">
<a href="https://choochoo.app/">Check it out here!</a>
</h3>
