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
