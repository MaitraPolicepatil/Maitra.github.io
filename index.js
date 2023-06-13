// Get the canvas element
const canvas = document.getElementById('canvas');

// Get the 2D rendering context
const ctx = canvas.getContext('2d');

// Handle mouse movement
canvas.addEventListener('mousemove', (event) => {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Get the mouse position relative to the canvas
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  // Draw the circle
  ctx.beginPath();
  ctx.arc(x, y, 30, 0, 2 * Math.PI);
  ctx.stroke();
});
