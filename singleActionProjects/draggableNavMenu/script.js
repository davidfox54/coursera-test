var nav = document.querySelector("nav");
var toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", function() {
	nav.classList.toggle("open");
});

function onDrag({movementY}) {
	var navStyle = window.getComputedStyle(nav);
	var navTop = parseInt(navStyle.top);
	var navHeight = parseInt(navStyle.height);
	var windowHeight = window.innerHeight;

	nav.style.top = navTop > 0 ? `${navTop + movementY}px` : "1px";
	if(navTop > windowHeight - navHeight) {
		nav.style.top = `${windowHeight - navHeight}px`
	}
};

nav.addEventListener("mousedown", function() {
	nav.addEventListener("mousemove", onDrag);
});

nav.addEventListener("mouseup", function() {
	nav.removeEventListener("mousemove", onDrag);
});

nav.addEventListener("mouseleave", function() {
	nav.removeEventListener("mousemove", onDrag);
});