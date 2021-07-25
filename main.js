$(function () {
  /* aタグのhref属性の内容の前方に#が付いている要素を取得する。 */
  $('a[href^="#"]').click(function () {
    /* スクロールにかける時間を設定 */
    var speed = 400;
    /* $('a[href^="#"]')　で取得した内容の属性の中身を取得 */
    var href = $(this).attr("href");
    /* hrefが#だけだった場合、htmlに置き換えて、そうでない場合はhrefの値をtargetに格納(?はif文のショートカット) */
    var target = $(href == "#" ? "html" : href);
    /* 飛び先のIDの上からの位置を取得 */
    var position = target.offset().top;
    /* cssのアニメーションを使ってスクロールさせる
    .animate({変化させるCSSのキーと値のマップ値} ,[ スピード] ,[ イージングの種類] ),
    [アニメーションが完了した時に実行したい処理] )
    */
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});
