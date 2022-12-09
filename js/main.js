const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (window.scrollY > 500) {
      // 배지 숨기기
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
      //  To-Top 버튼 보이기
      gsap.to(toTopEl, 0.2, {
        x: 0, // 원래 위치 0으로 이동
      });
    } else {
      // 배지 보이기
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      // To-Top 버튼 숨기기
      gsap.to(toTopEl, 0.2, {
        x: 100, // 숨어지도록 오른쪽으로 이동
      });
    }
  }, 300)
);
// _.throttle(함수, 시간) - lodash cdn
// gsap.to(요소, 지속시간, 옵션) - gsap cdn

// 클릭하면 TOP으로 이동
toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

// swiper (promotion)
const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.5,
    opacity: 1,
  });
});

new Swiper(".notice-line .swiper-container", {
  direction: "vertical", // 상하로 움직임
  autoplay: true, // 자동재생
  loop: true,
  // loop: true - 마지막 슬라이드에서 다시 첫번째 슬라이드로 이동(반복재생)
});

new Swiper(".promotion .swiper-container", {
  direction: "horizontal", // 기본값
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  // autoplay: {
  //   delay: 5000, // 기본값은 3초
  // },
  pagination: {
    el: ".promotion .swiper-pagination", //  페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: ".promotion .swiper-prev", // 적용할 위치, 클래스 입력
    nextEl: ".promotion .swiper-next",
  },
});
// swiper (awards)
new Swiper(".awards .swiper-container", {
  direction: "horizontal", // 기본값
  autoplay: true,
  loop: true,
  spaceBetween: 30, // 사이사이 여백 30px
  slidesPerView: 5, // 보여지는 슬라이드 개수
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

// swiper hide
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion; // 반대값 반환
  if (isHidePromotion) {
    // 숨김 처리
    promotionEl.classList.add("hide");
  } else {
    // 보이기 처리
    promotionEl.classList.remove("hide");
  }
});

// float
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, // -1은 무한반복
    yoyo: true, // 이동 후 되돌아옴
    ease: Power1.easeOut,
    delay: random(0, delay),
  });
}
floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 25);

// scrollMagic
const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8, // 뷰포트에서 감시될 지점을 지정 0(위) ~ 1(아래)
  })
    .setClassToggle(spyEl, "show") // 인수 2개
    .addTo(new ScrollMagic.Controller());
  // Scene() - 특정한 옵션을 감지해주는 라이브러리
});
