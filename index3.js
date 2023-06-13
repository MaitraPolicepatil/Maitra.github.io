// Get the canvas element
const canvas = document.getElementById('canvas');

// Get the 2D rendering context
const ctx = canvas.getContext('2d');

// Get the canvas width and height
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

// Handle mouse movement
canvas.addEventListener('mousemove', (event) => {
  // Clear the canvas
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  // Get the mouse position relative to the canvas
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  // Draw the circle in the current quadrant
  ctx.beginPath();
  ctx.arc(x, y, 30, 0, 2 * Math.PI);
  ctx.stroke();

  // Calculate the mirror positions in the other quadrants
  const mirrorX = canvasWidth - x;
  const mirrorY = canvasHeight - y;

  // Draw the mirror images in the other quadrants
  ctx.beginPath();
  ctx.arc(mirrorX, y, 30, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x, mirrorY, 30, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(mirrorX, mirrorY, 30, 0, 2 * Math.PI);
  ctx.stroke();
});
