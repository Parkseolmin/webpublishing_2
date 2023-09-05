// lenis
const lenis = new Lenis();

lenis.on('scroll', (e) => {
  // console.log(e);
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
let scrollFix = 0;
scrollFix = $(document).scrollTop();
fixHeader();

// window사이즈 조절 시 이벤트
$(window).on('scroll resize', function () {
  scrollFix = $(document).scrollTop();
  fixHeader();
});

// 고정헤더 함수 =>fixHeader
function fixHeader() {
  if (scrollFix > 150) {
    $('header').addClass('on');
  } else {
    $('header').removeClass('on');
  }
}

//글자애니메이션  Splitting 데모사이트 그대로 작성 따라하기
$(function () {
  Splitting();
});

// .top-visual 이미지 슬라이드
$(document).ready(function () {
  $('.visual .slide').slick({
    arrow: true, //화살표
    dots: false, //인디케이터
    autoplay: true, // 자동재생
    fade: true, // 페이드인 효과
    autoplaySpeed: 7000, // 재생시간
    pauseOnHover: false, // 호버 시 멈추는 것을 해제
    pauseOnFocus: false,
  });
  $('.slick-prev').text('prev');
});
