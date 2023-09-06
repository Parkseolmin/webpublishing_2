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
  // 첫 번째 슬라이드
  $('.visual .slide').slick({
    arrow: true, //화살표
    dots: true, //인디케이터
    autoplay: true, // 자동재생
    fade: true, // 페이드인 효과
    autoplaySpeed: 7000, // 재생시간
    pauseOnHover: false, // 호버 시 멈추는 것을 해제
    pauseOnFocus: false,
  });
  $('.slick-prev').text('prev');

  // 두 번째 슬라이드
  $('.slide2').slick({
    arrows: false, //화살표
    dots: true, //인디케이터
    autoplay: true, //자동재생
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 6000, //재생시간
    pauseOnHover: true, //호버시 멈추는 멈추도록 설정함
    pauseOnFocus: true,
  });
  $('.slide2 #slick-slide-control10').text('서울 마곡지구 업무용지');
  $('.slide2 #slick-slide-control11').text('서울 마곡지구 대방디엠시티2차');
  $('.slide2 #slick-slide-control12').text(
    '화성 동탄 1차 대방디엠시티 더 센텀'
  );
  $('.slide2 #slick-slide-control13').text('광주 수완 대방노블랜드6차');
});

// 스크롤라 애니메이션(scrolla.js)
$(function () {
  $('.animate').scrolla({
    mobile: true, // 모바일버전시 활성화
    once: false, //스크롤이 딱 한번만 하고 싶을 때는 true
  });
});

// 스크롤다운
$(function () {
  $('.scroll').on('click', function () {
    let scrollBtn = $('#scroll').offset().top; //$scroll이 끝나는 지점으로 스크롤바 이동
    $('html, body').animate({ scrollTop: scrollBtn }, 400); //그 위치로 부드럽게 스크롤이동
  });
});
