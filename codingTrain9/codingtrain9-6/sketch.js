// closures = function within a function

let x = 0;
let timer1;
let timer2;

function setup() {
  createCanvas(200, 200);
  timer1 = createP('timer 1');
  timer2 = createP('timer 2');
makeTimer(timer1, 500);
makeTimer(timer2, 312);

}

function makeTimer(elt, wait) {
	let counter = 0;
	setInterval(timeIt, wait);
	function timeIt() {
	  elt.html(counter);
		counter++;
	}
}





function draw() {
  background(51);
  stroke(255);
  line(x, 0, x, height);
  x = x + 3;
  if (x > width) {
    x = 0;
  }
}
