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

//Object that keeps track of which tools are currently in use.
let tools = {
  brush: true,
  eraser: false
};

//Object which stores color-button elements
let colors = {
  black: document.getElementById('color-button-black'),
  blue: document.getElementById('color-button-blue'),
  red: document.getElementById('color-button-red'),
  olive: document.getElementById('color-button-olive')
};

//Loops through colors object and adds an event listener to each button which assigns appropriate color to ctx.strokeStyle variable on window load
window.onload = () => {
  for (color in colors) {
    let selectedColor = getComputedStyle(colors[color]).backgroundColor;
    colors[color].addEventListener('click', () => {
      ctx.strokeStyle = selectedColor;
    });
  }
};

//Line properties of brush stroke
ctx.lineWidth = 10;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.strokeStyle = '#000000';

//Gets mouse position on mouse move.
canvas.addEventListener('mousemove', e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

//When mousedown event is triggered, begins a line and adds an event listner to the canvas which calls the draw function when the mouse is held down.
canvas.addEventListener('mousedown', () => {
  if (tools.eraser) {
    canvas.addEventListener('mousemove', erase);
  } else if (tools.brush) {
    ctx.beginPath();
    ctx.moveTo(mouse.x, mouse.y);
    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();
    canvas.addEventListener('mousemove', draw);
  }
});

//Removes the mousemove listener which calls the draw function when the mouse is no longer being held down.
canvas.addEventListener('mouseup', () => {
  canvas.removeEventListener('mousemove', draw);
  canvas.removeEventListener('mousemove', erase);
});

//Makes sure canvas scales to the size of the window
window.addEventListener('resize', () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  ctx.lineWidth = 10;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.strokeStyle = strokeColor;
});

//Function which handles drawing to the canvas, including erasing
let draw = () => {
  ctx.lineTo(mouse.x, mouse.y);
  ctx.stroke();
};

//Eraser functionality
let erase = () => {
  ctx.clearRect(mouse.x, mouse.y, ctx.lineWidth, ctx.lineWidth);
};

//Click handlers for buttons
const handleBrushClick = () => {
  tools.brush = true;
  tools.eraser = false;
};

//Handles switching between tools
const handleEraserClick = () => {
  tools.eraser = true;
  tools.brush = false;
};

//Clears canvas
const handleClearCanvasClick = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};
