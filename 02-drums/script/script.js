const drumItem = document.querySelectorAll(".drum__item");
const keys = document.querySelectorAll(".drum__key");

drumItem.forEach(function (el) {
  el.addEventListener("click", playSound);
})

function playSound() {
  let audioName = this.lastElementChild.innerText.toLowerCase();
  audioFile = new Audio(`./media/${audioName}.wav`);
  audioFile.play();
}

document.body.addEventListener("keypress", submitKeypress);

function submitKeypress(e) {
  for (let i = 0; i < keys.length; i++) {
    if (e.key === keys[i].innerText.toLowerCase()) {
      let audioName = keys[i].nextElementSibling.innerText.toLowerCase();
      audioFile = new Audio(`./media/${audioName}.wav`);
      audioFile.play();
    }
  }
}
