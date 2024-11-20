let btns = document.getElementsByClassName("btn");
let output = document.querySelector("#head-title");

btns[0].addEventListener("click", function () {
  output.childNodes[0].textContent++;
});

btns[1].addEventListener("click", function () {
  if (output.childNodes[0].textContent > 0) {
    output.childNodes[0].textContent--;
  }
});
