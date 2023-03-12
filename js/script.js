var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var parent = this.parentElement;
    var card = this.nextElementSibling;
    var mainCard = document.querySelector(".main-card");
    if (card.style.maxHeight) {
      card.style.maxHeight = null;
    } else {
      card.style.maxHeight = card.scrollHeight + "px";
      parent.style.maxHeight =
        parseInt(parent.style.maxHeight) + card.scrollHeight + "px";
    }
  });
}
