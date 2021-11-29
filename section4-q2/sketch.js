// テキスト「配列を使った描画」練習問題：円グラフ
let dx, stop;

function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(60, 100); // 60以上100未満のランダムな数を代入
  }

  // 円グラフを描くには割合が必要なので合計を計算しておく
  let total = 0;
  let start = PI + HALF_PI;
  for(let i = 0; i < scores.length; i++){
    total += scores[i];
    dx = scores[i] / total;
    stop = PI + HALF_PI + (2 * PI / dx);
    start += stop;
    arc(width / 2, height / 2, width, height, start, stop)
  }
}
//PI + HALF_PI + 2 * PI / 全体に対する割合dx
