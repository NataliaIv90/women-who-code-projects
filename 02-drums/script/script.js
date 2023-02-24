const drumItem = document.querySelectorAll(".drum__item");

drumItem.forEach(function (el) {
  el.addEventListener("click", playSound);
})

function playSound() {
  this.style.color = 'black';
}