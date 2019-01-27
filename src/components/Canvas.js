import React from 'react';

class Canvas extends React.Component {
  constructor() {
    super();

    this.state = {
      cHeight: 0,
      cWidth: 0,
    };

    this.canvas = React.createRef();
    this.startAnimation = this.startAnimation.bind(this);
  }

  componentDidMount() {
    const canvas = this.canvas.current;

    window.addEventListener(
      'resize',
      () => {
        canvas.width = document.body.clientWidth;
        canvas.height = document.body.clientHeight;
      },
      false,
    );

    const mouseMove = () => {
      window.removeEventListener('mousemove', mouseMove, false);
      this.startAnimation();
    };

    // If we detect a mousemove event once, that means the user is browsing with a mouse.
    // If we don't, it's probably a touchscreen, don't waste computation.
    window.addEventListener('mousemove', mouseMove, false);

    // Set height and width on load because if set in state body isn't defined yet.
    this.setState({
      cHeight: document.body.clientWidth,
      cWidth: document.body.clientWidth,
    });
  }

  startAnimation() {
    const canvas = this.canvas.current;
    const ctx = canvas.getContext('2d');

    // Use a closure here to keep internal state.
    let lastX = 0;
    let lastY = 0;
    let currX = 0;
    let currY = 0;

    const update = () => {
      ctx.beginPath();
      ctx.lineWidth = 7;
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(currX, currY);
      ctx.strokeStyle = '#b200f0';
      ctx.stroke();

      lastX = currX;
      lastY = currY;

      // Fade out the previous tails
      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      requestAnimationFrame(update);
    };

    // On mouse move update.
    window.addEventListener(
      'mousemove',
      ({ clientX, clientY }) => {
        currX = clientX;
        currY = clientY;
      },
      false,
    );

    update();
  }

  render() {
    const { cHeight, cWidth } = this.state;
    return (
      <canvas
        ref={this.canvas}
        className={CSS.canvas}
        width={cWidth}
        height={cHeight}
      />
    );
  }
}

export default Canvas;
