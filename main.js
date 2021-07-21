$(function () {
  $('a[href^="#"]').click(function () {
    /* リンク先が#から始まる時 */ var speed = 400; /* スクロールにかける時間を設定 */
    var href = $(this).attr("href"); /* hrefの内容を取得 */
    var target = $(
      href == "#" ? "html" : href
    ); /* hrefが#だけだった場合、htmlに置き換えて、そうでない場合はhrefの値をtargetに格納 */
    var position = target.offset().top; /* 飛び先のIDの上からの位置を取得 */
    $("body,html").animate(
      { scrollTop: position },
      speed,
      "swing"
    ); /* cssのアニメーションを使ってスクロールさせる */
    return false;
  });
});

$("top-bottun").hide();

$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $("top-bottun").fadeIn();
  } else {
    $("top-bottun").fadeOut();
  }
});

$("top-bottun").on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, 500);
});
