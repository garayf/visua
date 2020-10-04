// Constants
var Y_AXIS = 1;
var X_AXIS = 2;
var b1, b2, c1, c2;

function setup() {
  var canvas = createCanvas(640, 360);
  canvas.parent('sketch-div');

  // Define colors
  b1 = color(255);
  b2 = color(0);
  c1 = color(204, 102, 0);
  c2 = color(0, 102, 153);

}

function draw() {
  // Background
  if(isKeyPressed){
    if(key=='G' || key=='g'){
      //print("Key G pressed");
    setGradient(0, 0, width/2, height, b2, b2, X_AXIS);
    setGradient(width/2, 0, width/2, height, b2, b2, X_AXIS);
    }
  }else{
  setGradient(0, 0, width/2, height, b1, b2, X_AXIS);
  setGradient(width/2, 0, width/2, height, b2, b1, X_AXIS);
  }
  // Foreground
  noStroke(); //Removes the line outside the figure to be able to see the visual effect
  fill('#7a7a7a');
  rect(50, 190, 540, 80);
  
}

function setGradient( x,  y,  w,  h,  c1,  c2,  axis ) {

  noFill();

  if (axis == Y_AXIS) {  // Top to bottom gradient
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }  
  else if (axis == X_AXIS) {  // Left to right gradient
    for (var i = x; i <= x+w; i++) {
      var inter = map(i, x, x+w, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y+h);
    }
  }
}
