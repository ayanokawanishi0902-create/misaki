//==================== ハンバーガーメニューの開閉　===============
// 1. 操作したい要素を取得する
const navBtn = document.getElementById('nav-btn');
const mainNav = document.getElementById('main-nav');
const navLinks = document.querySelectorAll('.main-nav a');

// 2. ボタンをクリックした時の動きを決める
navBtn.addEventListener('click', () => {
  // メニュー本体の表示・非表示を切り替える
  mainNav.classList.toggle('is-open');
  
  // ボタン自体の形（三本線 ⇄ ×）を切り替える
  navBtn.classList.toggle('is-open');
});

// 3. リンクをクリックした時にメニューを閉じる処理を追加
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // クラスを削除してメニューを閉じ、ボタンを三本線に戻す
    mainNav.classList.remove('is-open');
    navBtn.classList.remove('is-open');
  });
});


//==================== TOPに戻るボタンの出現　===============
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) { // 400px以上スクロールしたら
    backToTop.classList.add('is-show');
  } else {
    backToTop.classList.remove('is-show');
  }
});