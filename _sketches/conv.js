function preload() {
  img = loadImage("data/descarga.jpg");
}


function setup() {
  createCanvas(400, 400);
  canvas.parent('sketch-div');
}

function draw() {
  image(img, 0, 0);
}
