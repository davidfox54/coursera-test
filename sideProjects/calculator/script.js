var keys = document.querySelector('.keys-container');
var display = document.querySelector('.header-container')

keys.addEventListener('click', function(e) {
	var key = e.target;
	var action = key.dataset.action;
	var keyContent = key.textContent;
    var displayedNum = display.textContent;

    // Remove .is-depressed class from all keys
    Array.from(key.parentNode.children)
         .forEach(k => k.classList.remove('is-depressed'));

	if(!action) {
		if(displayedNum === '0') {
			display.textContent = keyContent;
		} else {
		    display.textContent = displayedNum + keyContent;
		  }
	}
	if (action === 'add' || action === 'subtract' ||
    	action === 'multiply' || action === 'divide') {
	  key.classList.add('is-depressed');
	}

	if (action === 'decimal') {
	  display.textContent = displayedNum + '.';
	}

	if (action === 'clear') {
	  console.log('clear key!')
	}

	if (action === 'calculate') {
	  console.log('equal key!')
	}
});




