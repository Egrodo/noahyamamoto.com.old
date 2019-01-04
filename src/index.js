import "normalize.css";
import "./index.css";

function Initialize() {
  console.log("Welcome to my site.");
  StartCanvas();
}

window.addEventListener("load", Initialize, false);

function StartCanvas() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  // Get proper height and width for canvas, then set resize handler.
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  window.addEventListener(
    "resize",
    ({ target: { innerWidth, innerHeight } }) => {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
    },
    false
  );

  const startAnimation = () => {
    // Use a closure here to keep internal state.
    let lastX = 0;
    let lastY = 0;
    let currX = 0;
    let currY = 0;

    // Update the cursor position
    window.addEventListener(
      "mousemove",
      ({ pageX, pageY }) => {
        currX = pageX;
        currY = pageY;
      },
      false
    );

    const update = () => {
      ctx.beginPath();
      ctx.lineWidth = 7;
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(currX, currY);
      ctx.strokeStyle = "purple";
      ctx.stroke();

      lastX = currX;
      lastY = currY;

      // Fade out the previous tails
      ctx.fillStyle = `rgba(0, 0, 0, 0.1)`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Request an animation frame to update it for a smooth 60fps independent of mousemove updates.
      requestAnimationFrame(update);
    };

    update();
  };

  startAnimation();
}
