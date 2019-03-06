//setInterval
// similar to setTimeout but it repeats
let x = 0;
let timer;
let interval;
let button;
let counter = 0;
function setup() {
  createCanvas(200, 200);
	timer = createP('timer');
	button = createButton('start timer');
	button.mousePressed(doTimer);
	}

function doTimer() {
	interval = setInterval(timeit, 500);
	button.html('stop timer');
	button.mousePressed(stopTimer);
}

function stopTimer() {
	clearInterval(interval);
}

function timeit() {
	timer.html(counter);
	counter++;

}

function draw() {
	background(51);
	stroke(255);
	line(x,0,x,height);

	x = x + 3;
	if(x > width) {
		x = 0;
	}

}
