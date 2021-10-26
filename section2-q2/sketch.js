// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      if((i + j) % 2 == 0){
        fill(255);
      }else{
        fill(122);
      }
      rect(size * i, size * j, size, size);
      if((i + j) % 2 == 0){
        fill(255);
      }else if(j < 3){
        fill(255, 0, 0);
        circle(size * i + size / 2, size * j + size / 2, size);
      }else if(j > 4){
        fill(0);
        circle(size * i + size / 2, size * j + size / 2, size);
      }



    }
  }
}
//まずはひとつずつ
// function setUp() {
//   createCanvas(200, 200);
//   let size = width / 8;
//   noStroke();
//
//   rect(0, 0, size, size);
//   fill(255);
//   rect(size, 0, size, size);
//   fill(0);
// }
