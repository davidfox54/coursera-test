var button = document.querySelector(".button");
var text = document.querySelector(".btn-text");
var spinner = document.querySelector(".spinner");
var checkmark = document.querySelector(".check");

button.addEventListener("click", function() {
	button.classList.add("checked");
	spinner.classList.add("active");
	text.innerText = "Loading";

	setTimeout(function() {
		spinner.classList.remove("active");
		checkmark.classList.add("active");
		text.innerText = "Done!";
	}, 5000);
});