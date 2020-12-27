var s;

function setup() {
  createCanvas(windowWidth, windowHeight);
  s = 10;
  background('#D1D1D1');
  stroke('#D9D9D9');
  strokeWeight(1);
  for (var i = -height; i < width; i+=20) {
    line(i, 0, i+height, height);
  }
  for (var j = 0; j < height + width; j+=20) {
    line(0, j, width, j-width);
  }
}

function draw() {
  
  
  noStroke();
  mX = 5+(int(mouseX/(s*2)))*(s*2);
  mY = 6+(int(mouseY/(s*2)))*(s*2);
  if (mouseIsPressed) {
    fill('#9972ED');
    quad(mX, mY-s, mX+s, mY, mX, mY+s, mX-s, mY);
  } 
  
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}