var show = document.querySelector (".button-search");
var popup = document. querySelector (".hotel-search-form-modal");
var checkin = document.getElementById("checkin");
var checkout = document.getElementById("checkout");
var adults = document.getElementById("adults");
var form = document.querySelector(".hotel-search-form");

    show.addEventListener("click", function (evt) {
          evt.preventDefault();
          popup.classList.toggle("modal-show");
          checkin.focus();
    });

    form.addEventListener("submit", function (evt) {
            if(!checkin.value || !checkout.value || !adults.value){
            evt.preventDefault();
            }
    });
    window.addEventListener("keydown", function (evt) {
          if (evt.keyCode === 27) {
            evt.preventDefault();
            popup.classList.toggle("modal-show");
            }
        });
