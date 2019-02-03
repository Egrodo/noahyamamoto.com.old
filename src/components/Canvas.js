import React from 'react';

/* Mouse trail adapted from a jQuery Codepen by Bryan C https://codepen.io/bryjch/pen/QEoXwA */

class Point {
  // Class for point math.
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.lifetime = 0;
  }

  // Get the distance between a & b
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.sqrt(dx * dx + dy * dy);
  }

  // Get the mid point between a & b
  static midPoint(a, b) {
    const mx = a.x + (b.x - a.x) * 0.5;
    const my = a.y + (b.y - a.y) * 0.5;

    return new Point(mx, my);
  }

  // Get the angle between a & b
  static angle(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.atan2(dy, dx);
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

      let point;
      let lastPoint;

      for (let i = 0; i < points.length; ++i) {
        point = points[i];
        if (points[i - 1] !== undefined) {
          lastPoint = points[i - 1];
        } else lastPoint = point;

        point.lifetime += 1;

        if (point.lifetime > duration) {
          // If the point dies, remove it.
          points.shift();
        } else {
          // Otherwise animate it.

          // As the lifetime goes on, inc goes from 0 to 1.
          const inc = (point.lifetime / duration);
          const spreadRate = 7 * (1 - inc);

          ctx.lineJoin = 'round';
          ctx.lineWidth = spreadRate;

          // As time increases decrease r and b, increase g to go from purple to green.
          const red = Math.floor(190 - (190 * inc));
          const green = 0;
          const blue = Math.floor(210 + (210 * inc));
          ctx.strokeStyle = `rgb(${red},${green},${blue}`;

          ctx.beginPath();

          ctx.moveTo(lastPoint.x, lastPoint.y);
          // ctx.lineTo(point.x, point.y);
          // TODO: If I can calculate
          const ctrlPoint = points[i - 1] || point;
          ctx.quadraticCurveTo(ctrlPoint.x, ctrlPoint.y, point.x, point.y);

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
