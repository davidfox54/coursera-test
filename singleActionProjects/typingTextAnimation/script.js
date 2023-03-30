var text = document.querySelector(".typing");

var textLoad = function() {

	setTimeout(function() {
		text.textContent = "Hooper";
	}, 0);

	setTimeout(function() {
		text.textContent = "Coach";
	}, 4000);

	setTimeout(function() {
		text.textContent = "Engineer";
	}, 8000);

	setTimeout(function() {
		text.textContent = "Baby daddy";
	}, 12000);
}

textLoad();
setInterval(textLoad, 16000)