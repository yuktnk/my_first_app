// $(window).load(function() {
//   $('.Gallery__lists').masonry({
//     itemSelector: '.item',
//     isFitWidth: true
//   });
// });


$(function() {
  $(window).load(function() {
    // $('.Gallery__lists').masonry({
    //   itemSelector: '.item',
    //   isFitWidth: true
    // });
    $(function () {
      $('.huwahuwa').hide(); //ページ上の画像を隠す
    });
  });
});

// $(function () {
//   $('.GalleryPicture').hide(); //ページ上の画像を隠す
// });

var i = 0;
var int =0;
$(window).bind("load", function() {
//ページコンテンツのロードが完了後、機能させる
  var int = setInterval("doThis(i)",150);
//フェードするスピード
  $('.Gallery__lists').masonry({
    itemSelector: '.item',
    isFitWidth: true
  });
});

function doThis() {
  var images = $('img').length;//画像の数を数える
  if (i >= images) {// ループ
      clearInterval(int);//最後の画像までいくとループ終了
  }
  $('img:hidden').eq(0).fadeIn(1000);//一つずつ表示する
  i++;
} 