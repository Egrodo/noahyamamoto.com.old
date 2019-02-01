import React from 'react';

// TODO: Refactor this. make it not work on mobile?
class Canvas extends React.Component {
  state = {
    cHeight: 0,
    cWidth: 0,
  };

  canvas = React.createRef();


  componentDidMount = () => {
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

    const mouseMove = () => {
      window.removeEventListener('mousemove', mouseMove, false);
      this.startAnimation();
    };

    // If we detect a mousemove event once, that means the user is browsing with a mouse.
    // If we don't, it's probably a touchscreen, don't waste computation.
    window.addEventListener('mousemove', mouseMove, false);

    // Set height and width on load because if set in state body isn't defined yet.
    this.setState({
      cHeight: document.body.clientHeight,
      cWidth: document.body.clientWidth,
    });
  }

  startAnimation = () => {
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
      ctx.strokeStyle = '#fff';
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

  render = () => {
    const { cHeight, cWidth } = this.state;
    return <canvas ref={this.canvas} className={CSS.canvas} width={cWidth} height={cHeight} />;
  }
}

export default Canvas;
