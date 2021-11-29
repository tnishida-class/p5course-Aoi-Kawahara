// 最終課題を制作しよう
function setup(){
  createCanvas(windowWidth, windowHeight);
  background(160, 192, 255);
  for(let i = 0; i < 3; i++){
      rect(i * 200, 0, 150, 150);
  }
  for(let i = 3; i < 6; i++){
      rect((i - 3) * 200, 200, 150, 150);
  }
  for(let i = 6; i < 9; i++){
      rect((i - 6) * 200, 400, 150, 150);
  }
  let texts = ["博(Q)", "性(W)", "割(E)", "勤(A)", "面(S)", "勝(D)", "創(Z)", "献(X)", "転(C)"];
  textSize(30);
  for (let i = 0; i < 3; i++){
      text(texts[i], 45 + i * 200, 75);
  }
  for (let i = 3; i < 6; i++){
      text(texts[i], 45 + (i - 3) * 200, 275);
  }
  for (let i = 6; i < 9; i++){
      text(texts[i], 45 + (i - 6) * 200, 475);
  }
}

function draw(){
  if(keyIsDown("Q".charCodeAt(0))){
    noFill();
    stroke(255, 0, 0);
    strokeWeight(5);
    ellipse(75, 75, 100);
  }
  if(keyIsDown("E".charCodeAt(0))){
    noFill();
    stroke(255, 0, 0);
    strokeWeight(5);
    ellipse(475, 75, 100);
  }
  if(keyIsDown("A".charCodeAt(0))){
    noFill();
    stroke(255, 0, 0);
    strokeWeight(5);
    ellipse(75, 275, 100);
  }
  if(keyIsDown("D".charCodeAt(0))){
    noFill();
    stroke(255, 0, 0);
    strokeWeight(5);
    ellipse(475, 275, 100);
  }
  if(keyIsDown("Z".charCodeAt(0))){
    noFill();
    stroke(255, 0, 0);
    strokeWeight(5);
    ellipse(75, 475, 100);
  }
  if(keyIsDown("W".charCodeAt(0))){
    checkmark(270, 130);
  }
  if(keyIsDown("S".charCodeAt(0))){
    checkmark(270, 330);
  }
  if(keyIsDown("X".charCodeAt(0))){
    checkmark(270, 530);
  }
  if(keyIsDown("C".charCodeAt(0))){
    checkmark(470, 530);
  }
}

function checkmark(cx, cy){
  stroke(255, 0, 0);
  strokeWeight(5);
  line(cx-30, cy-30, cx, cy);
  line(cx+80, cy-90, cx, cy);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
