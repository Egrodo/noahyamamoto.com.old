---
layout: post
path: '/blog/Sudoku-App'
title: Sudoku App
date: '2018-06-26'
excerpt: This project started as a Leetcode algorithm challenge to solve Sudoku puzzles, but then I thought heck, I'm a front end developer aren't I? Let's use this as an excuse to learn Progressive Web Apps and write the best possible React Sudoku app there ever was.
---

This project started as a Leetcode algorithm challenge to solve Sudoku puzzles, but then I thought, heck, I'm a front-end developer aren't I? Let's use this as an excuse to learn Progressive Web Apps and write the best possible React Sudoku app there ever was.

![Gameplay GIF](https://i.imgur.com/fictjrN.gif)


There were a lot of (un)expected challenges with the development of the logic (figuring out how to generate puzzles took 5x as long as solving them), but I wanted to learn how to do everything on my own with no extraneous library use.

This game has just about every feature I could think of, including four difficulty levels with infinite potential games, cookie saving, responsive design, PWA, and an overly complicated error displaying system.

I'd recommend checking out the source of the [modularized Sudoku logic](https://github.com/Egrodo/sudoku/blob/master/src/sudoku.js) to see how I did that stuff, and the [game container component](https://github.com/Egrodo/sudoku/blob/master/src/components/GameContainer.js) to explore the React codebase.

<h3 align="center">
<a href="https://egrodo.github.io/sudoku/">Play it here!</a>
</h3>
