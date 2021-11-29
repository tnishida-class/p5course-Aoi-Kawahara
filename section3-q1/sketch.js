// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
let size;
let vsize;
const g = 1;

function setup(){
  createCanvas(200, 200);
  size = 200;
  vsize = 5;
  // count = 0;
  // cycle = 100;
}

function draw(){
  background(160, 192, 255);
  // count = (count + 1) % cycle;
  // BLANK[1]

  ellipse(width / 2, height / 2, size);
  size += vsize;
  if(size < 60 || size > width){
    vsize = -1 * vsize;
  }
  if(vsize < 0){
    vsize -= g;
  }
  size = constrain(size, 0, width)
  vsize = constrain(vsize, -10, 10)
}
