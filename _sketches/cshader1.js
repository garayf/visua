let x=0;
let simpleShader;
let edgeShader;
let sharpShader;
let blurShader;

function preload() {
  img = loadImage("data/descarga.jpg");
  simpleShader = loadShader('shaders/base.vert', 'shaders/convid.frag');
  edgeShader = loadShader('shaders/base.vert', 'shaders/convedge.frag');
  sharpShader = loadShader('shaders/base.vert', 'shaders/convsharp.frag');
  convShader = loadShader('shaders/base.vert', 'shaders/convblur.frag');
}


function setup() {
  createCanvas(400, 400, WEBGL);
  canvas.parent('sketch-div');
  shader(simpleShader);
  simpleShader.setUniform('tex0', img);
  shader(edgeShader);
  edgeShader.setUniform('tex0', img);
  shader(sharpShader);
  sharpShader.setUniform('tex0', img);
  shader(convShader);
  convShader.setUniform('tex0', img);
}

function draw() {

  if (x===0) {
    shader(simpleShader);
  } 
  if (x===1) {
    shader(edgeShader);
  } 
  if (x===2) {
    shader(sharpShader);
  } 
  if (x===3) {
    shader(convShader);
  } 
  rect(0,0,width, height);
}
function mouseClicked() {
  if(x==3){
    x=0;
  }  else{
    x++;
  }
}