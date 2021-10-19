// 小手調べ
function setup(){
  createCanvas(200, 200)
  for(let i = 0; i < 5; i++){
    stroke(255, 0, 0);
    ellipse(100, 100, 100 - i * 10);
  }
  for(let i = 5; i < 10; i++){
    stroke(0, 0, 255);
    ellipse(100, 100, 100 - i * 10);
  }
}
