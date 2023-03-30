var minus = document.querySelector(".minus");
var num = document.querySelector(".number");
var plus = document.querySelector(".plus");

let i = 1;

plus.addEventListener("click", function() {
	i++;
	i = (i < 10) ? "0" + i : i;
	num.innerText = i;
});

minus.addEventListener("click", function() {
	if(i > 1) {
		i--;
		i = (i < 10) ? "0" + i : i;
		num.innerText = i;
	}
})