let kernel = [
  [0, -1,0],
  [-1, 5, -1],
  [0, -1,0]
];

function preload() {
  img = loadImage("data/descarga.jpg");
  simpleShader = loadShader('shaders/base.vert', 'shaders/conv.frag');
}


function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent('sketch-div');
  noLoop();
}

function draw() {
  edgeImg = createImage(img.width, img.height);
  edgeImg.loadPixels();

  for (let x = 1; x < img.width; x++) {
    for (let y = 1; y < img.height; y++) {
      let rtotal = 0;
      let gtotal = 0;
      let btotal = 0;

      for (kx = -1; kx <= 1; kx++) {
        for (ky = -1; ky <= 1; ky++) {
          let xpos = x + kx;
          let ypos = y + ky;
          rtotal += red(img.get(xpos, ypos)) * kernel[ky + 1][kx + 1];
          gtotal += green(img.get(xpos, ypos)) * kernel[ky + 1][kx + 1];
          btotal += blue(img.get(xpos, ypos)) * kernel[ky + 1][kx + 1];
        }
      }
      edgeImg.set(x, y, color(rtotal, gtotal, btotal));
    }
  }
  edgeImg.updatePixels();
  image(edgeImg, 0, 0);
}