function setButtonColor(button, red, green, blue){
    button.setAttribute('style',
                        'background-color: rgb('+ red +','+ green +','+ blue +');'
                       );
}

function makeColorValue(){
    return Math.round(Math.random()*255);
}

function correctAnswer(style) {
	answerMessage.innerHTML = "Correct!";
	container.setAttribute('style', style);
}

function startGame() {
	answerMessage.innerHTML = "";
	container.setAttribute('style', 'background-color: white');
	var answerButton = Math.round(Math.random() * (buttons.length - 1));

	for(var i = 0; i < buttons.length; i++) {
		var red = makeColorValue();
		var green = makeColorValue();
		var blue = makeColorValue();
		setButtonColor(buttons[i], red, green, blue);

		if (i === answerButton) {
		    heading.innerHTML = `(${red}, ${green}, ${blue})`;
		}

		buttons[i].addEventListener('click', function(){
	        if (this === buttons[answerButton]) {
	        	var style = buttons[answerButton].getAttribute('style');
	            correctAnswer(style);
	        } else {
	            answerMessage.innerHTML = "Wrong answer! Guess again!";
	            container.setAttribute('style', 'background-color: white');
	        }
	    });
	}
}

var container = document.getElementById('container');
var heading = document.getElementById('color-value');
var buttons = document.getElementsByClassName('color-button');
var answerMessage = document.getElementById('answer');

startGame();
document.getElementById('reset-button').addEventListener('click', startGame);

