function setup() {
  createCanvas(128,128);
}

function draw() {
  background(255);
  strokeWeight(4);
  // stroke(255);
  fill(180, 85, 160);
  triangle(12,120,116,120,116,10);
  fill(255);
  noStroke();
  triangle(0,108,106,108,106,0);
  fill(232, 190, 193);
  textSize(32);
  textFont("serif");
  text("46", 68, 100);
}
