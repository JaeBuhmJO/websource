// container라는 클래스명을 가진 요소 찾기
const container = document.querySelector(".container");
console.log(container);

// pagination 클래스 명 안의 첫번쨰 li 요소 찾기
const firstLi = document.querySelector(".pagination li:first-child");
console.log(firstLi);

// data-target=#navbarNav 속성을 가진 요소 찾기
const navbar = document.querySelector("[data-target='#navbarNav']");
console.log(navbar);

// id가 navbarNav 인 요소 찾기
const navbarNav = document.querySelector("#navbarNav");
console.log(navbarNav);

// pagination 클래스 명 안의 모든 li 요소 찾기
const lis = document.querySelectorAll(".pagination li");
console.log(lis);

lis.forEach((element) => {
  console.log(element.innerHTML);
});
