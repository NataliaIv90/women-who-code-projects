const inpAmount = document.querySelector("#form__inpAmount");
const inpArticle = document.querySelector("#form__inpArticle");
const receipe = document.querySelector(".receipt__content");
const form = document.querySelector(".form__body")
const receipeTotal = document.querySelector("#receipt__total");

form.addEventListener("submit", addReceiptItem);

function addReceiptItem(e) {
  e.preventDefault();
  if (inpAmount.value != "" && inpArticle.value != "") {
    let div = document.createElement("div");
    div.classList.add("receipt__item");
    div.innerHTML = `<div class="receipt__article">${inpArticle.value}</div>
            <div>$<span class="receipt__amount">${inpAmount.value}</span></div>`
    receipe.appendChild(div);
    inpAmount.value = "";
    inpArticle.value = "";
  }
}
form.addEventListener("submit", calculateTotal);
function calculateTotal() {
  const receipeAmount = document.querySelectorAll(".receipt__amount");
  let sum = 0;
  for (let i = 0; i < receipeAmount.length; i++) {
    sum += receipeAmount[i].innerText * 1;
  }
  receipeTotal.innerHTML = sum;
}