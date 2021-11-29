// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46");
}

function balloon(t){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  fill(0);
  ellipse(w / 2 + 2 * p, h / 2 + 4 * p, w + 4 * p, h + 4 * p);
  triangle(w + 4 * p / 5, h + 4 * p / 5, w / 4, w / 4, w + 4 * p + p, w / 4);
  fill(255);
  text(t, p, h + p);
}
