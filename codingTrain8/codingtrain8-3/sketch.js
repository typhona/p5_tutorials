// coding train 8.3
// HTML javascript DOM

//*********
// functions for Manipulating DOM
// position()
// html()

// ******* FUTURE FUN *********//
// make a 'catch me' text and change it to got me if mouse is over text

let canvas;
let h1;

let x = 100;
let y = 100;

function setup() {

	canvas = createCanvas(200, 200);
	canvas.position(400, 500);
	h1 = createElement('h1', 'Waiting');
	// h1.position(400, 600);
}

function mousePressed() {
	// createP("My favorite color is purple.");
	h1.html('Now I will show you my favortie number')
	createP("My favorite number is " + random(0, 10));

}
function draw() {
	background(200);
	fill (255, 0, 0);
	h1.position(x, y);
	rect(x, y, 50, 50);
	x = x + random(-5, 5);
	y = y + random(10, -10)
}
