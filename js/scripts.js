var link = document.querySelector(".contacts-feedback a");
var popup = document.querySelector(".write-us-modal");
var overlay = document.querySelector(".overlay");
var close = document.querySelector(".close-cross");
var focus = document.querySelector("#write-us-name");
var email = popup.querySelector("#write-us-email");
var form = popup.querySelector("form");
var storage = localStorage.getItem("focus"); 

link.addEventListener("click", function (evt) { 
	evt.preventDefault();
	popup.classList.add("write-us-modal-show");
	overlay.classList.add("overlay-show");
	if (storage) {
		focus.value = storage;
		email.focus();
	} else {
		focus.focus();
	}
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("write-us-modal-show");
	popup.classList.remove("write-us-modal-error");
	overlay.classList.remove("overlay-show");
});

overlay.addEventListener("click", function () {
	popup.classList.remove("write-us-modal-show");
	popup.classList.remove("write-us-modal-error");
	overlay.classList.remove("overlay-show");
});

form.addEventListener("submit", function (evt) {
	if (!focus.value || !email.value) {
		evt.preventDefault();
		popup.classList.add("write-us-modal-error");	
	}
});

window.addEventListener("keydown", function (evt){
	if (evt.keyCode === 27) {
		if (popup.classList.contains("write-us-modal-show")) {
			popup.classList.remove("write-us-modal-show");
			popup.classList.remove("write-us-modal-error");
		}
	}
});

window.addEventListener("keydown", function (evt){
	if (evt.keyCode === 27) {
		if (overlay.classList.contains("overlay-show")) {
			overlay.classList.remove("overlay-show");
		}
	}
});