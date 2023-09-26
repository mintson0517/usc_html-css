// スクロールの速度を調整する場合は、適切な値を設定します。
const scrollSpeed = 2; // 速度調整用の値

function scrollPage() {
  // ページを指定した速度でスクロールする関数
  window.scrollBy(0, scrollSpeed); // 指定した速度で縦方向にスクロール
  setTimeout(scrollPage, 20); // 20ミリ秒ごとにスクロールを繰り返す
}

// ページの読み込みが完了したら自動スクロールを開始
window.onload = function () {
  scrollPage();
};
