function setup() {
  createCanvas(800, 400);
  noStroke();
}

function draw() {
  background(220);
  
  let a = color(0, 126, 255, 255);
  let b = color(255, 225, 0, 255)
  let c = color(255, 0, 00, 255)
  fill(a);
  rect(0, 0, 400, 400); // Sets 'value' to 102
  fill(c);
  circle(200, 200, 350);
  fill(b);
  rect(400, 0, 400, 400);
    for (let i = 0; i < width/2; i+=12) {
    rect(i, 0, 6, 400);
  }
  fill(c);
  circle(600, 200, 350);
  fill(a);
  for (let i = width/2+2; i < width; i+=12) {
    rect(i, 0, 6, 400);
  }
}
