// lenis
const lenis = new Lenis();

lenis.on('scroll', (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// gnb
$(function () {
  $('.gnb > li > a').on('mouseenter focus', function () {
    const gnbIndex = $('.gnb > li > a').index($(this));
    $('.gnb .inner').removeClass('on');
    $(`.gnb .inner:eq(${gnbIndex})`).addClass('on');
  });
  $('header').on('mouseleave focus', function () {
    $('.gnb .inner').removeClass('on');
  });
});

// fixed header
const scrollFix = 0;
scrollFix = $(document).scrollTop();
fixHeader();

// window사이즈 조절 시 이벤트
$(window).on('scroll resize', function () {
  scrollFix = $(document).scrollTop();
  fixHeader();
});
