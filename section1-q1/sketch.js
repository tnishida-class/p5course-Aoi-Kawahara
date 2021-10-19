// 練習問題：神戸市のマーク
function setup(){
  createCanvas(200, 400);
  background(255);

  const green = color(22, 131, 46);
  // 空欄を埋めて神戸市のロゴマークを完成させよう
  noFill();
  strokeWeight(25);　//線の幅を指定
  strokeCap(SQUARE); //弧の端を四角形に指定
  stroke(green);
  //円の中心のx座標、y座標、円の幅、円の高さ、弧の開始角度、弧の停止角度
  arc(100 + 25, 100, 100, 100, QUARTER_PI * 3, QUARTER_PI * 3 + PI);
  // BLANK[1]
  arc(100 - 25, 100, 100, 100, QUARTER_PI * 5, QUARTER_PI);
  // おまけ：神戸大学のロゴを作りたい人向けに色情報だけ置いておきます
  const red = color(196, 0, 0);
  const blue = color(14, 47, 146);

  const gray = color(77);

  //外の青い円を描画
  strokeWeight(10);
  stroke(blue);
  arc(100, 300, 100, 100, PI + HALF_PI, QUARTER_PI * 3);
  //内の緑の円を描画
  stroke(green);
  arc(95, 300, 85, 85, PI, QUARTER_PI);
}
