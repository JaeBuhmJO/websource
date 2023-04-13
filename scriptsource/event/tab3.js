//tab.js => 이벤트 버블링으로 변경
//이벤트 버블링 : 자식에서 발생한 이벤트가 부모로 전달
//e.target : 이벤트가 일어난 대상
//e.currentTarget : 이벤트가 일어난 대상 + 버블링 된 대상

const tabParent = document.querySelector(".list");
const tabBtns = document.querySelectorAll(".tab-button");
const tabCnts = document.querySelectorAll(".tab-content");

function tabOpen(idx) {
  tabBtns.forEach((tabBtn) => tabBtn.classList.remove("orange"));
  tabCnts.forEach((tabCnt) => tabCnt.classList.remove("show"));
  tabBtns[idx].classList.add("orange");
  tabCnts[idx].classList.add("show");
}

// tabParent.addEventListener("click", (e) => {
//   if (e.target == tabBtns[0]) {
//     tabOpen(0);
//   } else if (e.target == tabBtns[1]) {
//     tabOpen(1);
//   } else {
//     tabOpen(2);
//   }
// });

// data- 이용 : 조건문 안 쓸려고
// data- : 전역속성
// - 다음에는 이름은 자유롭게

// <h1 data-index-number="1234">헤드</h1>
// data-index-number(지정) : dataset.indexNumber(접근)
// 스크립트에서 접근
// const h1 = document.querySelector("h1")
// h1.dataset.indexNumber

tabParent.addEventListener("click", (e) => {
  // 이벤트가 일어난 대상의 data- 값 가져오기
  tabOpen(e.target.dataset.id);
});
