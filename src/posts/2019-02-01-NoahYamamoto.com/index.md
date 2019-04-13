---
layout: post
path: '/blog/mousetrailanimation'
title: Mouse Trail
date: '2019-02-01'
excerpt: For my personal site I made a gradient mouse trail animation that utilizes requestAnimationFrame to run at 60fps throughout the site, here's a little info on how I did that.
---

I wanted to make something that would add some flair to my website, and after seeing another developer implement something similar on [their website](https://electerious.com) I figured I'd give it a shot. My first attempt was much simpler, just drawing a line from the last point to the new point then fading out the whole canvas. Check out [version 1 here](https://repl.it/@NoahYamamoto/Mouse-trail-animation-v1).

However this method had some issues and was very inflexible, so I eventually went about making a better version that keeps track of all active points and animates them individually. Perhaps a bit more complicated, but doing it by hand allows for much more customization without any noticeable drop in performance.

The new version works by keeping track of all visible points in an array and updating them all on every (requestAnimation)Frame:

```javascript
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.lifetime = 0;
  }
}

const points = [];

const addPoint = (x, y) => {
  const point = new Point(x, y);
  points.push(point);
};

document.addEventListener('mousemove', ({ clientX, clientY }) => {
  addPoint(clientX - canvas.offsetLeft, clientY - canvas.offsetTop);
}, false);
...
```

Each point gets a different color and width depending on how long its been alive until it reaches a set maximum lifetime and dies (is removed from the queue). This allows the trail to "fade" out into a different color before disappearing. In my example I have the point going from purple to blue as it fits the theme of my site:

```javascript
// As the lifetime goes on, lifePercent goes from 0 to 1.
const lifePercent = (point.lifetime / duration);
const spreadRate = 7 * (1 - lifePercent);

ctx.lineJoin = 'round';
ctx.lineWidth = spreadRate;

// As time increases red, increase blue to go from purple to blue.
const red = Math.floor(190 - (190 * lifePercent));
const green = 0;
const blue = Math.floor(210 + (210 * lifePercent));
ctx.strokeStyle = `rgb(${red},${green},${blue}`;
```

Another concern of mine was mobile; for whatever reason it seems that some mobile devices emit the mousemove event on touch/drag, and this was causing weird jumpy cursor trails to appear for mobile users. Since smartphones don't (usually) have cursors anyways, I decided to just disable the animation if the user had no pointer device attached by checking a matchMedia conditional before starting it:

```javascript
if (matchMedia('(pointer:fine)').matches) {
  this.startAnimation();
}
```
(This surprisingly has [94.28% support](https://caniuse.com/#feat=matchmedia), how had I not heard of it before‽)

Anyways, throw all this into a component and you'll get a fancy mouse trail animation! Full code below:

```javascript
import React from 'react';

/* Mouse trail adapted from a jQuery Codepen by Bryan C https://codepen.io/bryjch/pen/QEoXwA */

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.lifetime = 0;
  }
}

class Canvas extends React.Component {
  state = {
    cHeight: 0,
    cWidth: 0,
  };

  canvas = React.createRef();

  componentDidMount = () => {
    // Set height and width on load because if set in state body isn't defined yet.
    this.setState({
      cHeight: document.body.clientHeight,
      cWidth: document.body.clientWidth,
    });

    window.addEventListener(
      'resize',
      () => {
        this.setState({
          cHeight: document.body.clientHeight,
          cWidth: document.body.clientWidth,
        });
      },
      false,
    );

    // If the device supports cursors, start animation.
    if (matchMedia('(pointer:fine)').matches) {
      this.startAnimation();
    }
  }

  startAnimation = () => {
    const canvas = this.canvas.current;
    const ctx = canvas.getContext('2d');

    const points = [];

    const addPoint = (x, y) => {
      const point = new Point(x, y);
      points.push(point);
    };

    document.addEventListener('mousemove', ({ clientX, clientY }) => {
      addPoint(clientX - canvas.offsetLeft, clientY - canvas.offsetTop);
    }, false);

    const animatePoints = () => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      const duration = 0.7 * (1 * 1000) / 60; // Last 80% of a frame per point

      for (let i = 0; i < points.length; ++i) {
        const point = points[i];
        let lastPoint;

        if (points[i - 1] !== undefined) {
          lastPoint = points[i - 1];
        } else lastPoint = point;

        point.lifetime += 1;

        if (point.lifetime > duration) {
          // If the point dies, remove it.
          points.shift();
        } else {
          // Otherwise animate it:

          // As the lifetime goes on, lifePercent goes from 0 to 1.
          const lifePercent = (point.lifetime / duration);
          const spreadRate = 7 * (1 - lifePercent);

          ctx.lineJoin = 'round';
          ctx.lineWidth = spreadRate;

          // As time increases decrease r and b, increase g to go from purple to green.
          const red = Math.floor(190 - (190 * lifePercent));
          const green = 0;
          const blue = Math.floor(210 + (210 * lifePercent));
          ctx.strokeStyle = `rgb(${red},${green},${blue}`;

          ctx.beginPath();

          ctx.moveTo(lastPoint.x, lastPoint.y);
          ctx.lineTo(point.x, point.y);

          ctx.stroke();
          ctx.closePath();
        }
      }
      requestAnimationFrame(animatePoints);
    };

    animatePoints();
  }

  render = () => {
    const { cHeight, cWidth } = this.state;
    return <canvas ref={this.canvas} width={cWidth} height={cHeight} />;
  }
}

export default Canvas;
```

Thanks for reading, hope you find this useful!