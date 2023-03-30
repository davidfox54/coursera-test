var circularProgress = document.querySelector(".circular-progress");
var progressValue = document.querySelector(".progress-value");

var progression = 0;
var progressEndValue = 90;
var speed = 100;

var progress = setInterval(function() {
	progression++;

	progressValue.textContent = `${progression}%`;
	circularProgress.style.background = `conic-gradient(#7d2ae8 ${progression*3.6}deg, #ededed 0deg)`;

	if(progression === progressEndValue) {
		clearInterval(progress);
	}
}, speed);