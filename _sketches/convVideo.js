let vid;
let x=0;
let simpleShader;
let edgeShader;
let sharpShader;
let blurShader;

function preload() {
  vid = createVideo(['data/video-sample.webm']);
  simpleShader = loadShader('shaders/base.vert', 'shaders/convid.frag');
  edgeShader = loadShader('shaders/base.vert', 'shaders/convedge.frag');
  sharpShader = loadShader('shaders/base.vert', 'shaders/convsharp.frag');
  convShader = loadShader('shaders/base.vert', 'shaders/convblur.frag');
}

function setup() {
  createCanvas(400, 400, WEBGL);
  canvas.parent('sketch-div');
  vid.loop();
  noStroke();
  fill(0);
  vid.hide(); 
  frameRate(10000000);
  shader(simpleShader);
  simpleShader.setUniform('tex0', vid);
  shader(edgeShader);
  edgeShader.setUniform('tex0', vid);
  shader(sharpShader);
  sharpShader.setUniform('tex0', vid);
  shader(convShader);
  convShader.setUniform('tex0', vid);
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
  console.log(1/(deltaTime/1000));
}

function mouseClicked() {
  if(x==3){
    x=0;
  }  else{
    x++;
  }
}

