let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let canvasContainer = document.getElementById('canvas-container');

//Sets canvas height and width to the height and width of the div containing the canvas element.
canvas.height = canvasContainer.offsetHeight;
canvas.width = canvasContainer.offsetWidth;

let mouse = {
  x: null,
  y: null
};

ctx.lineWidth = 10;

canvas.addEventListener('mousemove', e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

canvas.addEventListener('mousedown', () => {
  ctx.beginPath();
  ctx.moveTo(mouse.x, mouse.y);

  canvas.addEventListener('mousemove', draw);
});

canvas.addEventListener('mouseup', () => {
  canvas.removeEventListener('mousemove', draw);
});

const draw = () => {
  ctx.lineTo(mouse.x, mouse.y);
  ctx.stroke();
};

//Click handlers for buttons
const handleBrushClick = () => {
  console.log('brush clicked');
};

const handleEraserClick = () => {
  console.log('eraser clicked');
};
