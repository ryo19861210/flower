// ハンバーガーメニューの実装
const ham = $("#js-hamburger"); //js-hamburgerの要素を取得し、変数hamに格納
const nav = $("#js-nav"); //js-navの要素を取得し、変数navに格納
ham.on("click", function () {
  //ハンバーガーメニューをクリックしたら
  ham.toggleClass("active"); // ハンバーガーメニューにactiveクラスを付け外し
  nav.toggleClass("active"); // ナビゲーションメニューにactiveクラスを付け外し
});

// メインビジュアルの拡大・縮小
$(window).scroll(function () {
  let scroll = $(window).scrollTop(); //スクロール値を定義
  mv_scale(scroll);
    /*=================================================
    ロゴ、ハンバーガーメニューの表示
    ===================================================*/
    // スクロール位置が520pxを超えた場合
    if (scroll > 520) {
      // ロゴとハンバーガ―メニュをfadeInで表示する
      $('.logo').fadeIn(500);
      $('.hamburger').fadeIn(500);
    // スクロール位置が520px未満の場合
    } else {
      // ロゴとハンバーガ―メニュをfadeOutで非表示にする
      $('.logo').fadeOut(500);
      $('.hamburger').fadeOut(500);
    }
    let gallery_position = $('#gallery').offset().top - $(window).height();
    // 画面下から#accessまでの距離を取得
    let access_position = $('#access').offset().top - $(window).height();

    let contact_position = $("#contact").offset().top - $(window).height();

      // #accessが表示された場合
  if (scroll > access_position) {
    // #contactが表示されるまでの間は、背景画像をfadeInで表示する
    if (scroll < contact_position) {
      $(".bg").fadeIn(500);
    } else {
      $(".bg").fadeOut(500);
    }
    // #accessが表示される前の場合
  } else {
    // 背景画像を表示しない
    $(".bg").fadeOut(500);
  }
 // window.innerWidthで画面幅を取得
    // PC表示の場合の処理（画面幅が900pxより大きい場合　※900pxはCSSのブレークポイントとあわせる）
    if (window.innerWidth > 900) {
      // #galleryが表示された場合（スクロール位置が、画面下から#galleryまでの距離を超えた場合）
      if(scroll > gallery_position){
        // #accessが表示されるまでの間は、#side-btnを横からスライドさせて表示する
        if(scroll < access_position){
          $('#side-btn').css({
            'transform': 'rotate(-90deg) translateY(0)'
          });
        // #accessが表示されたら、#side-btnをスライドさせて非表示にする
        } else {
          $('#side-btn').css({
            'transform': 'rotate(-90deg) translateY(60px)'
          });
        }
      // #galleryが表示される前は、#side-btnをスライドさせて非表示にする
      } else {
        $('#side-btn').css({
          'transform': 'rotate(-90deg) translateY(60px)'
        });
      }
    }
});

function mv_scale(scroll) {
  if (window.innerWidth > 900) {
    // メインビジュアルのCSS（width）を変更する
    // widthの値をスクロール量にあわせて増やすことで画像を拡大させる
    $(".mainvisual img").css({
      width: 100 / 3 + scroll / 10 + "%",
    });
    // スマホ表示の場合の処理（画面幅が900px以下の場合）
  } else {
    // メインビジュアルのCSS（width）を変更する
    // widthの値をスクロール量にあわせて減らすことで画像を縮小させる
    $(".mainvisual img").css({
      width: 100 - scroll / 10 + "%",
    });
  }
}

function fadeAnime() {
  //ふわっと動くきっかけのクラス名と動きのクラス名の設定
  $(".fadeUpTrigger").each(function () {
    //fadeInUpTriggerというクラス名が
    var elemPos = $(this).offset().top - 10; //要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("fadeUp");
      // 画面内に入ったらfadeInというクラス名を追記
    }
  });

  //関数でまとめることでこの後に違う動きを追加することが出来ます
  $(".fadeDownTrigger").each(function () {
    //fadeInDownTriggerというクラス名が
    var elemPos = $(this).offset().top - 50; //要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("fadeDown");
      // 画面内に入ったらfadeDownというクラス名を追記
    } else {
      $(this).removeClass("fadeDown");
      // 画面外に出たらfadeDownというクラス名を外す
    }
  });
} //ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  fadeAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on("load", function () {
  fadeAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面が読み込まれたらすぐに動かしたい場合の記述

// $("a[href^=#]").click(function () {
//   const speed = 500; // スクロール速度(ミリ秒)
//   let href = $(this).attr("href");
//   let target = $(href == "#" || href == "" ? "html" : href);
//   let position = target.offset().top;
//   $("body,html").animate({ scrollTop: position }, speed, "swing");
//   return false;
// });

/*=================================================
    Accessの背景画像を表示
    （表示されない！）
    ===================================================*/
// 画面下から#contactまでの距離を取得
$(function () {
  let access_position = $("#access").offset().top - $(window).height();
  let contact_position = $("#contact").offset().top - $(window).height();

  // #accessが表示された場合
  if (scroll > access_position) {
    // #contactが表示されるまでの間は、背景画像をfadeInで表示する
    if (scroll < contact_position) {
      $(".bg").fadeIn(500);
    } else {
      $(".bg").fadeOut(500);
    }
    // #accessが表示される前の場合
  } else {
    // 背景画像を表示しない
    $(".bg").fadeOut(500);
  }
});

