$(function() {

  $(window).load(function() {
    $('.Gallery__lists').masonry({
      itemSelector: '.item',
      isFitWidth: true
    });
  });

});