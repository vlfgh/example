$(document).ready(function () {
  //menu
  $('.nav > ul > li').mouseover(function () {
    $(this).find('.submenu').stop().slideDown(200);
  });
  $('.nav > ul > li').mouseout(function () {
    $(this).find('.submenu').stop().slideUp(200);
  });

  //이미지슬라이드 좌우
  var imgs = 1;
  var now = 0;

  start();

  function start() {
    $('.imgSlide>a').eq(0).siblings().animate({ width: '-1200px' });

    setInterval(function () {
      now = now == imgs ? 0 : (now += 1);
      $('.imgSlide>a')
        .eq(now - 1)
        .animate({ width: '-1200px' });
      $('.imgSlide>a').eq(now).animate({ width: '1200px' });
    }, 3000);
  }
});
