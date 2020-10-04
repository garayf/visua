---
title: Convolution 3
---

This is a convolution using the sharpen kernel:

P5.js code:
```js
let kernel = [
  [0, -1,0],
  [-1, 5, -1],
  [0, -1,0]
];

function preload() {
  img = loadImage("data/descarga.jpg");
}


function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  img2 = createImage(img.width, img.height);
  img2.loadPixels();

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
      img2.set(x, y, color(rtotal, gtotal, btotal));
    }
  }
  img2.updatePixels();
  image(img2, 0, 0);
}

```
<!-- Sketch file location, (pending organization) -->
<script src="conv3.js"></script>
<!-- Necessary element to position p5 canvas -->
<div id="sketch-div"></div>