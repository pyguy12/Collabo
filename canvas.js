let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let canvasContainer = document.getElementById('canvas-container');

//Sets canvas height and width to the height and width of the window.
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

//Mouse object which stores position of cursor
let mouse = {
  x: null,
  y: null
};

//Line properties of brush stroke
ctx.lineWidth = 10;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

//Gets mouse position on mouse move.
canvas.addEventListener('mousemove', e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

//When mousedown event is triggered, begins a line and adds an event listner to the canvas which calls the draw function when the mouse is held down.
canvas.addEventListener('mousedown', () => {
  ctx.beginPath();
  ctx.moveTo(mouse.x, mouse.y);
  ctx.lineTo(mouse.x, mouse.y);
  ctx.stroke();
  canvas.addEventListener('mousemove', draw);
});

//Removes the mousemove listener which calls the draw function when the mouse is no longer being held down.
canvas.addEventListener('mouseup', () => {
  canvas.removeEventListener('mousemove', draw);
});

//Function which handles drawing to the canvas, including erasing
let draw = () => {
  ctx.lineTo(mouse.x, mouse.y);
  ctx.stroke();
};

//Click handlers for buttons
const handleBrushClick = () => {
  console.log('brush clicked');
};

const handleEraserClick = () => {
  draw = () => {
    ctx.clearRect(mouse.y, mouse.x, ctx.lineWidth, ctx.lineHeight);
  };
};

const handleClearCanvasClick = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};
