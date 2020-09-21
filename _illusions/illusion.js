// p5 sketch template
function setup() {
  var canvas = createCanvas(400, 400); // Keep canvas reference
  canvas.parent('sketch-div'); // Necessary to position canvas
}

function draw() {
  background(255);
  ellipse(mouseX,mouseY,80,80);
}

