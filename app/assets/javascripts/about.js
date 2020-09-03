//クリックするとアプリの概要説明がにゅるっと出てくる
$(function(){
  $('.AboutPage').hide();
  $('#About').click(function(){
    $('.AboutPage').slideToggle(500);
  })
})