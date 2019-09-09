let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let canvasContainer = document.getElementById('canvas-container');

canvas.height = canvasContainer.offsetHeight;
canvas.width = canvasContainer.offsetWidth;
