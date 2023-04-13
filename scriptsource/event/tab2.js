const arr = [1, 2, 3, 4];
for (let i = 0; i < arr.length; i++) {
  // 첫번째 요소 가져오기
  let 가져온요소 = 배열명[i];
  console.log(가져온요소);
}

arr.forEach((item) => {});

const tabButtons = document.querySelectorAll(".list > li");
const tabContents = document.querySelectorAll(".container > .tab-content");

tabButtons.forEach((tabButton, idx) => {
  tabButton.addEventListener("click", () => {
    tabButtons.forEach((tbtn) => tbtn.classList.remove("orange"));
    tabButton.classList.add("orange");

    tabContents.forEach((content) => content.classList.remove("show"));
    tabContents[idx].classList.add("show");
  });
});
