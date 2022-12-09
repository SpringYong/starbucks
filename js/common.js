// 공통적으로 사용하는 js

// search
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

// 올해 자동 계산
// this-year 라는 클래스 요소에 글자내용으로 삽입
const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
