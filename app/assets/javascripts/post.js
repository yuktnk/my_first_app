// フェードインでスタート
$(function() {
	setTimeout(function(){
		$('.start p').fadeIn(1600);
	},500); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start').fadeOut(500);
	},3500); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
});

// トップに戻るボタン
$(function(){
  $('.ToTop__Btn').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
});


// ドロップダウンメニュー
$(function() {
  $(".accordion dd").css("display","none");
  $(".accordion dt").click(function(){
      $(this).toggleClass("open").next().slideToggle("fast");
  });
});

// ナビゲーションを固定
$(function() {
  var menu = $('.Header__wrap--menu'),
  offset = menu.offset();
  $(window).scroll(function () {
    if($(window).scrollTop() > offset.top) {
      menu.addClass('fixed');
    } else {
      menu.removeClass('fixed');
    }
  });
});

// ラベルフォーカス
$(function () {
  $("form :input").focus(function() {
      $("label[for='" + this.id + "']").addClass("labelfocus");
  });
  
  $("form :input").blur(function() {
      $("label[for='" + this.id + "']").removeClass("labelfocus");
  });
});


//キャプション下から
$(function () {
  $('.item').hover(function () {
      $('.caption', this).animate({
          top: "0px"
      }, 500);
  }, function () {
      $('.caption', this).animate({
          top: "360px"
      }, 500);
  });
});