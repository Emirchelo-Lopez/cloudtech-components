var plusButton = document.querySelector(".plus-button");
var minusButton = document.querySelector(".minus-button");
var counter = document.querySelector(".number");

plusButton.addEventListener("click", function () {
  var counterInt = Number(counter.innerHTML);

  if (counterInt < 16) {
    counterInt++;
    counter.innerHTML = counterInt;
  }
});

minusButton.addEventListener("click", function () {
  var counterInt = Number(counter.innerHTML);

  if (counterInt > 1) {
    counterInt--;
    counter.innerHTML = counterInt;
  }
});

const optionMenu = document.querySelector(".select-menu"),
  selectBtn = optionMenu.querySelector(".select-btn"),
  options = optionMenu.querySelectorAll(".option"),
  sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () =>
  optionMenu.classList.toggle("active")
);

options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.innerText;
    sBtn_text.innerText = selectedOption;

    optionMenu.classList.remove("active");
  });
});
