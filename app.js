const counter = document.querySelector(".counter");
const counterBtns = document.querySelectorAll(".btn");
const resetBtn = document.querySelector(".reset");

counter.textContent = 0;

counterBtns.forEach(function (btn) {
  btn.addEventListener("mouseup", function (e) {
    if (e.target.classList.contains("decrease")) {
      counter.textContent--;
    } else if (e.target.classList.contains("increase")) {
      counter.textContent++;
    }
  });
});

resetBtn.addEventListener("mouseup", function () {
  counter.textContent = 0;
});
